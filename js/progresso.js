(function(){
  "use strict";
  const KEY_SESSOES = "meuPlanoSessoesV1";
  const KEY_AVALIACOES = "meuPlanoAvaliacoesV1";
  const $ = id => document.getElementById(id);
  const campos = [
    ["pesoCorporal","Peso (kg)","kg"],["alturaCorporal","Altura (cm)","cm"],["gorduraCorporal","Gordura corporal","%"],["gorduraVisceral","Gordura visceral",""],["massaGorda","Massa gorda","kg"],["massaMagra","Massa magra","kg"],["densidadeOssea","Densidade óssea","kg"],["metabolismoBasal","Metabolismo basal","kcal"],["idadeMetabolica","Idade metabólica","anos"],["ombros","Ombros","cm"],["bracoDireito","Braço direito","cm"],["bracoEsquerdo","Braço esquerdo","cm"],["antebracoDireito","Antebraço direito","cm"],["antebracoEsquerdo","Antebraço esquerdo","cm"],["torax","Tórax","cm"],["cintura","Cintura","cm"],["abdomen","Abdómen","cm"],["quadril","Quadril","cm"],["coxaDireita","Coxa direita","cm"],["coxaEsquerda","Coxa esquerda","cm"],["pernaDireita","Perna direita","cm"],["pernaEsquerda","Perna esquerda","cm"],["imc","IMC",""],["relacaoCinturaQuadril","Relação cintura/quadril",""],["pressaoSistolica","Pressão sistólica","mmHg"],["pressaoDiastolica","Pressão diastólica","mmHg"],["fcRepouso","Frequência cardíaca em repouso","bpm"],["fcMaxima","Frequência cardíaca máxima","bpm"],["forcaPreensao","Força de preensão","kg"]
  ];
  const pad = n => String(n).padStart(2,"0");
  const toISO = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const parseDate = iso => { const [y,m,d]=iso.split("-").map(Number); return new Date(y,m-1,d,12); };
  const fmtDate = iso => iso ? parseDate(iso).toLocaleDateString("pt-PT") : "—";
  const read = key => { try { const v=JSON.parse(localStorage.getItem(key)); return Array.isArray(v)?v:[]; } catch(e){ return []; } };
  const write = (key,value) => localStorage.setItem(key,JSON.stringify(value));
  const safe = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const getSessions = () => read(KEY_SESSOES);
  const getAssessments = () => read(KEY_AVALIACOES);

  // Importa a avaliação fornecida como histórico inicial, uma única vez.
  // Campos omitidos no relatório não são preenchidos com estimativas.
  function seedAssessment(){
    let assessments=getAssessments();
    if(assessments.some(a=>a.id==="avaliacao-inicial-2026-07-29")) return;
    assessments.push({
      id:"avaliacao-inicial-2026-07-29", data:"2026-07-29", origem:"Relatório de avaliação física fornecido", pesoCorporal:100.7, alturaCorporal:180, profissional:"Joseane Oliveira", local:"",
      gorduraCorporal:26, gorduraVisceral:11, massaGorda:26.18, massaMagra:70.8, densidadeOssea:3.7, metabolismoBasal:2212, idadeMetabolica:52,
      ombros:128.5, bracoDireito:39.5, bracoEsquerdo:38.5, antebracoDireito:29, antebracoEsquerdo:29, torax:112, cintura:96.5, abdomen:103, quadril:112.5,
      coxaDireita:69, coxaEsquerda:68.5, pernaDireita:42.5, pernaEsquerda:41, imc:31.08, relacaoCinturaQuadril:0.86,
      pressaoSistolica:106, pressaoDiastolica:63, fcRepouso:65, fcMaxima:182, forcaPreensao:49.3,
      notas:"Avaliação inicial importada do relatório de 29/07/2026. FC de repouso: 65 bpm, conforme secção cardiovascular do relatório."
    });
    assessments.sort((a,b)=>a.data.localeCompare(b.data));
    write(KEY_AVALIACOES,assessments);
  }

  function mondayOf(d){ const x=new Date(d); x.setHours(12,0,0,0); x.setDate(x.getDate()-(x.getDay()+6)%7); return x; }
  function sameWeek(iso, ref){ const d=parseDate(iso), m=mondayOf(ref); return d>=m && d<new Date(m.getFullYear(),m.getMonth(),m.getDate()+7,12); }
  function renderFrequency(){
    const sessions=getSessions(), now=new Date(), today=toISO(now), monday=mondayOf(now), month=now.getMonth(), year=now.getFullYear();
    $("treinosSemana").textContent=sessions.filter(s=>sameWeek(s.data,now)).length;
    $("treinosMes").textContent=sessions.filter(s=>{const d=parseDate(s.data);return d.getMonth()===month&&d.getFullYear()===year;}).length;
    $("treinosTotal").textContent=sessions.length;
    const cal=$("calendarioSemana"); cal.innerHTML="";
    const nomes=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
    for(let i=0;i<7;i++){
      const d=new Date(monday);d.setDate(monday.getDate()+i);const iso=toISO(d);const regs=sessions.filter(s=>s.data===iso);
      const el=document.createElement("div");el.className="dia-semana-progresso"+(regs.length?" concluido":"")+(iso===today?" hoje":"");
      el.innerHTML=`${nomes[i]}<strong>${d.getDate()}</strong><small>${regs.length?regs.length+" treino"+(regs.length>1?"s":""):"—"}</small>`;cal.appendChild(el);
    }
    const chart=$("graficoFrequencia");chart.innerHTML="";
    const weeks=[];
    for(let i=7;i>=0;i--){const start=mondayOf(now);start.setDate(start.getDate()-i*7);const end=new Date(start);end.setDate(end.getDate()+7);const count=sessions.filter(s=>{const d=parseDate(s.data);return d>=start&&d<end;}).length;weeks.push({label:start.toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit"}),count});}
    const max=Math.max(1,...weeks.map(w=>w.count));
    weeks.forEach(w=>{const col=document.createElement("div");col.className="coluna-grafico";col.innerHTML=`<strong>${w.count}</strong><div class="barra-fundo"><div class="barra" style="height:${Math.max(3,w.count/max*100)}%"></div></div><small>${w.label}</small>`;chart.appendChild(col);});
  }

  function renderMetricChart(){
    const host=$("graficoMedidas"); if(!host)return;
    const key=$("metricaEvolucao").value; const meta=campos.find(x=>x[0]===key);
    const arr=getAssessments().filter(a=>a[key]!==null&&a[key]!==undefined&&a[key]!==""&&Number.isFinite(Number(a[key]))).sort((a,b)=>a.data.localeCompare(b.data));
    if(!arr.length){host.innerHTML='<div class="estado-vazio">Ainda não existem valores para esta medida.</div>';return;}
    if(arr.length===1){host.innerHTML=`<div class="estado-vazio">${safe(meta?meta[1]:key)}: <strong>${safe(arr[0][key])}${meta&&meta[2]?" "+safe(meta[2]):""}</strong> em ${fmtDate(arr[0].data)}. Guarda outra avaliação para ver a evolução.</div>`;return;}
    const W=720,H=190,L=42,R=18,T=16,B=34, vals=arr.map(a=>Number(a[key])), min=Math.min(...vals), max=Math.max(...vals), range=(max-min)||1;
    const pts=vals.map((v,i)=>({x:L+i*(W-L-R)/(vals.length-1),y:T+(max-v)*(H-T-B)/range,v,a:arr[i]}));
    const poly=pts.map(p=>`${p.x},${p.y}`).join(" ");
    const ticks=[0,.5,1].map(f=>{const y=T+f*(H-T-B),v=max-f*range;return `<line x1="${L}" y1="${y}" x2="${W-R}" y2="${y}" stroke="#2c3038"/><text x="${L-8}" y="${y+4}" text-anchor="end" fill="#969ba3" font-size="11">${Number(v.toFixed(1))}</text>`;}).join("");
    const points=pts.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="4" fill="#d84a56"><title>${fmtDate(p.a.data)}: ${p.v}${meta&&meta[2]?" "+meta[2]:""}</title></circle>`).join("");
    const labels=pts.map(p=>`<text x="${p.x}" y="${H-10}" text-anchor="middle" fill="#969ba3" font-size="10">${fmtDate(p.a.data).slice(0,5)}</text>`).join("");
    host.innerHTML=`<svg class="grafico-linha" viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução de ${safe(meta?meta[1]:key)}"><title>Evolução de ${safe(meta?meta[1]:key)}</title>${ticks}<polyline points="${poly}" fill="none" stroke="#c92836" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${points}${labels}</svg><p class="subtitulo">Primeiro registo: ${fmtDate(arr[0].data)} (${safe(arr[0][key])}${meta&&meta[2]?" "+safe(meta[2]):""}) · Último registo: ${fmtDate(arr[arr.length-1].data)} (${safe(arr[arr.length-1][key])}${meta&&meta[2]?" "+safe(meta[2]):""}).</p>`;
  }

  function renderAssessments(){
    const arr=getAssessments().sort((a,b)=>b.data.localeCompare(a.data));
    const host=$("historicoAvaliacoes"), comp=$("resumoComparacao");
    if(!arr.length){host.innerHTML='<div class="estado-vazio">Ainda não existem avaliações guardadas.</div>';comp.innerHTML="";return;}
    if(arr.length>=2){
      const newest=arr[0], previous=arr[1];
      const comparisons=[["pesoCorporal","Peso","kg"],["gorduraCorporal","Gordura corporal","p.p."],["cintura","Cintura","cm"],["abdomen","Abdómen","cm"],["quadril","Quadril","cm"]].filter(([k])=>Number.isFinite(Number(newest[k]))&&newest[k]!==""&&Number.isFinite(Number(previous[k]))&&previous[k]!=="");
      comp.innerHTML=comparisons.length?`<div class="resumo-cartoes">${comparisons.map(([k,label,unit])=>{const delta=Number(newest[k])-Number(previous[k]);const sign=delta>0?"+":"";return `<div class="resumo-cartao"><span>${label}</span><strong>${sign}${Number(delta.toFixed(2))}</strong><small>${unit} desde ${fmtDate(previous.data)}</small></div>`;}).join("")}</div>`:'<p class="subtitulo">Guarda outra avaliação para começares a comparar os valores.</p>';
    } else comp.innerHTML='<p class="subtitulo">Guarda outra avaliação para começares a comparar os valores.</p>';
    host.innerHTML=`<table class="tabela-historico"><thead><tr><th>Data</th><th>Profissional</th><th>Peso</th><th>Gordura</th><th>Cintura</th><th>Abdómen</th><th>Ações</th></tr></thead><tbody>${arr.map(a=>`<tr><td><strong>${fmtDate(a.data)}</strong></td><td>${show(a.profissional||"—","")}</td><td>${show(a.pesoCorporal,"kg")}</td><td>${show(a.gorduraCorporal,"%")}</td><td>${show(a.cintura,"cm")}</td><td>${show(a.abdomen,"cm")}</td><td><button type="button" class="botao-acao" data-ver="${safe(a.id)}">Ver</button> ${a.id==="avaliacao-inicial-2026-07-29"?"":`<button type="button" class="botao-acao" data-apagar="${safe(a.id)}">Apagar</button>`}</td></tr>`).join("")}</tbody></table>`;
    host.querySelectorAll("[data-ver]").forEach(b=>b.addEventListener("click",()=>{const a=arr.find(x=>x.id===b.dataset.ver);if(a)loadForm(a);}));
    host.querySelectorAll("[data-apagar]").forEach(b=>b.addEventListener("click",()=>{if(!confirm("Queres apagar esta avaliação? Esta ação não pode ser desfeita."))return;write(KEY_AVALIACOES,getAssessments().filter(a=>a.id!==b.dataset.apagar));renderAssessments();renderMetricChart();}));
    renderMetricChart();
  }
  function show(v,unit){return v===undefined||v===null||v===""?"—":`${safe(v)}${unit?" "+unit:""}`;}
  function loadForm(a){
    $("dataAvaliacao").value=a.data||toISO(new Date());
    campos.forEach(([id])=>$(id).value=a[id]??"");
    $("notasAvaliacao").value=a.notas||"";
    $("profissionalAvaliacao").value=a.profissional||"";
    $("localAvaliacao").value=a.local||"";
    $("mensagemAvaliacao").textContent="Avaliação carregada para consulta/edição. Ao guardar, será atualizada a avaliação dessa data.";
    window.scrollTo({top:$("formAvaliacao").getBoundingClientRect().top+window.scrollY-20,behavior:"smooth"});
  }
  function clearForm(){$("formAvaliacao").reset();$("dataAvaliacao").value=toISO(new Date());$("mensagemAvaliacao").textContent="";}
  $("dataAvaliacao").value=toISO(new Date());
  $("metricaEvolucao").addEventListener("change",renderMetricChart);
  $("formAvaliacao").addEventListener("submit",e=>{
    e.preventDefault();const data=$("dataAvaliacao").value;if(!data)return;
    const a={id:"avaliacao-"+data,data,notas:$("notasAvaliacao").value.trim(),profissional:$("profissionalAvaliacao").value.trim(),local:$("localAvaliacao").value.trim()};
    campos.forEach(([id])=>{const raw=$(id).value;a[id]=raw===""?null:Number(raw);});
    let arr=getAssessments();const ix=arr.findIndex(x=>x.data===data);
    if(ix>=0){a.id=arr[ix].id;arr[ix]={...arr[ix],...a};}else arr.push(a);
    arr.sort((x,y)=>x.data.localeCompare(y.data));
    try{write(KEY_AVALIACOES,arr);$("mensagemAvaliacao").textContent="Avaliação guardada. O histórico foi atualizado.";renderAssessments();renderMetricChart();}catch(err){$("mensagemAvaliacao").textContent="Não foi possível guardar. Exporta os teus dados e verifica o armazenamento.";}
  });
  $("limparFormulario").addEventListener("click",clearForm);

  $("exportarDados").addEventListener("click",()=>{
    const keys=Object.keys(localStorage).filter(k=>k.startsWith("meuPlano"));const payload={app:"Meu Plano",version:1,exportedAt:new Date().toISOString(),data:{}};keys.forEach(k=>{try{payload.data[k]=JSON.parse(localStorage.getItem(k));}catch(e){payload.data[k]=localStorage.getItem(k);}});
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`meu-plano-backup-${toISO(new Date())}.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);$("mensagemBackup").textContent="Cópia exportada. Guarda o ficheiro num local seguro.";
  });
  $("importarDados").addEventListener("change",async e=>{
    const file=e.target.files&&e.target.files[0];if(!file)return;
    try{const data=JSON.parse(await file.text());if(!data||data.app!=="Meu Plano"||!data.data||typeof data.data!=="object")throw new Error("Ficheiro não reconhecido.");if(!confirm("Importar esta cópia? Os registos com as mesmas chaves serão substituídos. Recomenda-se exportar primeiro uma cópia atual."))return;Object.entries(data.data).forEach(([k,v])=>{if(k.startsWith("meuPlano"))localStorage.setItem(k,JSON.stringify(v));});seedAssessment();renderAll();$("mensagemBackup").textContent="Cópia importada com sucesso.";}catch(err){$("mensagemBackup").textContent="Não foi possível importar. Confirma se escolheste uma cópia exportada pelo Meu Plano.";}finally{e.target.value="";}
  });
  function renderNaoRealizados(){
    const host=$("historicoNaoRealizados");if(!host)return;
    let rows=[];try{rows=JSON.parse(localStorage.getItem("meuPlanoEstadosExerciciosV1"))||[];}catch(e){}
    rows=rows.filter(r=>r.estado==="nao-realizado").sort((a,b)=>b.data.localeCompare(a.data));
    host.innerHTML=rows.length?`<table class="tabela-historico"><thead><tr><th>Data</th><th>Treino</th><th>Exercício</th><th>Grupo</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${fmtDate(r.data)}</td><td>${safe(r.dia)}</td><td>${safe(r.nome)}</td><td>${safe(r.grupo||"—")}</td></tr>`).join("")}</tbody></table>`:'<div class="estado-vazio">Ainda não assinalaste exercícios como não realizados.</div>';
  }
  function renderAll(){renderFrequency();renderAssessments();renderMetricChart();renderNaoRealizados();}
  seedAssessment();renderAll();
})();
