function creatgame(player1, hour, player2){
    return `
         <li>
           <img src="./assets/icon-${player1}.svg " alt="bandeira do ${player1}">
           <strong>${hour}</strong>
           <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}">
        </li>
    `
}

let delay = -0.4;
function createcard (date, day, games){
    delay = delay + 0.2;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date}
    <span> ${day}
        </span>
    </h2>
    <ul>
        ${games}
    </ul>
</div>
    `
}

document.querySelector('#cards').innerHTML =`

    ${createcard("20/11", "domingo", creatgame("qatar", "13:00", "ecuador"))}
    ${createcard("21/11", "segunda", creatgame("england", "10:00", "iran") + creatgame("senegal", "13:00", "netherlands") + creatgame("unitedstates", "16:00", "wales"))}
    ${createcard("22/11", "terça", creatgame("argentina", "7:00", "saudiarabia") + creatgame("denmark", "10:00", "tunisia") + creatgame ("mexico", "13:00", "poland") + creatgame("france", "16:00", "australia"))}
    ${createcard("23/11", "quarta", creatgame("morroco", "7:00", "croatia") + creatgame("germany", "10:00", "japan") + creatgame("spain", "13:00", "costarica") + creatgame("belgium", "16:00", "canada"))}
    ${createcard("24/11", "quinta", creatgame("switzerland", "7:00", "cameroon") + creatgame("uruguay", "10:00", "southkorea") + creatgame("portugal", "13:00", "ghana") + creatgame("brazil", "16:00", "serbia"))}
    ${createcard("25/11", "sexta", creatgame("wales", "7:00", "iran") + creatgame("qatar", "10:00", "senegal") + creatgame("netherlands", "13:00", "ecuador") + creatgame("england", "16:00", "unitedstates"))}
    ${createcard("26/11", "sabado", creatgame("tunisia", "7:00", "australia") + creatgame("poland", "10:00", "saudiarabia") + creatgame("france", "13:00", "denmark") + creatgame("argentina", "16:00", "mexico"))}
    ${createcard("27/11", "domingo", creatgame("japan", "7:00", "costarica") + creatgame("belgium", "10:00", "morroco") + creatgame("croatia", "13:00", "canada") + creatgame("spain", "16:00", "germany"))}
    ${createcard("28/11", "segunda", creatgame("cameroon", "7:00", "serbia") + creatgame("southkorea", "10:00", "ghana") + creatgame("brazil", "13:00", "switzerland") + creatgame("portugal", "16:00", "uruguay"))}
    ${createcard("29/11", "terça", creatgame("ecuador", "7:00", "senegal") + creatgame("netherlands", "12:00", "qatar") + creatgame("iran", "16:00", "unitedstates") + creatgame("wales", "16:00", "england"))}
    ${createcard("30/11", "quarta", creatgame("tunisia", "12:00", "france") + creatgame("australia", "12:00", "denmark") + creatgame("poland", "16:00", "argentina") + creatgame("saudiarabia", "16:00", "mexico"))}
    ${createcard("1/12", "quinta", creatgame("croatia", "12:00", "belgium") + creatgame("canada", "12:00", "morroco") + creatgame("japan", "16:00", "spain") + creatgame("costarica", "16:00", "germany"))}
    ${createcard("2/12", "sexta", creatgame("southkorea", "12:00", "portugal") + creatgame("ghana", "12:00", "uruguay") + creatgame("serbia", "16:00", "switzerland") + creatgame("cameroon", "16:00", "brazil"))}









`