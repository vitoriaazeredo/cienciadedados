const url = https//raw.githubusercontent.com/VitóriaAzeredo/api/main/dados-globais.json 
console.log(url);
async function
visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas)/1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)
* 100)
const porcentagemConectada = ((pessoasConectadas /
    pessoasNoMundo) * 100).toFixed(2)
    const paragrafo = document.createElement(p)
    paragrafo.classList.add(graficos-container__texto)
    paragrafo.innerHTML = `Você sabia que o mundo tem
    ${dados.total_pessoas_mundo} de pessoas e
    que aproximadamente ${dados.total_pessoas_conectadas}
    estão conectadas em alguma rede social e passam em média
    $(dados.tempo_médio)horas conectadas.
   const container = document.getElementById(graficos-
    container)
    container.appendChild(paragrafo)
    paragrafo.innerHTML = 'Você sabia que o mundo tem';
<span>${pessoasNoMundo}bilhões</span> de pessoas; e 
 aproximadamente <span>$;{pessoasConectadas} bilhões</span> estão conectadas em alguma rede 
social e passam em media;
<span>${horas}</span> horas conectadas.
<span>${minutos}</span> minutos conectadas.
<br> Isso significa que aproximadamente ${porcentagemConectada}%
de pessoas estão conectadas em alguma rede social.
visualizarInformacoesGlobais()
   }
{
    total_pessoas_conectadas: 5.04e9,
    tempo_medio; 2.38,
    total_pessoas_mundo; 7.888e9
}