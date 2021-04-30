let t=5;
let boss = class {
    constructor(nom,type,pv) {
        this.nom = nom,
        this.type = type,
        this.pv = pv
    }

    brulure(victime) {
        alert(`${this.nom} lance : Brulure. vous perdez 5pv.`);
        victime.pv -= 5;
        if ((Math.round(Math.random()*100)) > 50) {
            alert("Vous avez pris feu, vous perdez 1pv/s")
            while (t != 0) {
                alert("psh -1pv")
                victime.pv -= 1;
                t--;
            }
        }
    }
}
let joueur = {
    nom:"Player",
    xp:{
        max:10,
        current:0,
        rest:0
    },
    pv:100,
    level: 1,
    lancerSort(){
        reponse = confirm("Lancer le Skill cheaté de votre perso??");
        if (reponse == true) {
            victime = prompt("lancer le sort sur : golemdefeu, golemdeterre, golemdeglace?");
            switch (victime) {
                case "golemdefeu":
                    this.Skillcheat(golemdefeu);
                    break;
                case "golemdeterre":
                    this.Skillcheat(golemdeterre);
                    break;
                case "golemdeglace":
                    this.Skillcheat(golemdeglace);
                    break;
                default:
                    break;
            };
        }
    },
    Skillcheat(victime){
        crit = Math.round(Math.random()*100);
        if (crit > 20) {
            victime.pv = victime.pv - 499;
            alert(`${victime.nom} a perdu 499pv !`)
        } else {
            victime.pv = 0;
        alert(`BIMMM CC !! ${victime.nom} a perdu 99999pv !`)
        }
    }
}
let golemdefeu = new boss("golemdefeu","monstre de feu",1000);
let golemdeterre = new boss("golemdeterre","monstre de terre", 1000);
let golemdeglace = new boss("golemdeglace","monstre de glace", 1000);
alert("Oh, un golem de feu sauvage est apparu. Attention il attaque !!");
golemdefeu.brulure(joueur);
alert(`${joueur.nom} : pv: ${joueur.pv}`)
joueur.lancerSort();
alert(`${golemdefeu.nom} pv: ${golemdefeu.pv} \n ${golemdeterre.nom} pv: ${golemdeterre.pv} \n ${golemdeglace.nom} pv: ${golemdeglace.pv}`);
joueur.lancerSort();
alert(`${golemdefeu.nom} pv: ${golemdefeu.pv} \n ${golemdeterre.nom} pv: ${golemdeterre.pv} \n ${golemdeglace.nom} pv: ${golemdeglace.pv}`);
joueur.lancerSort();
alert(`${golemdefeu.nom} pv: ${golemdefeu.pv} \n ${golemdeterre.nom} pv: ${golemdeterre.pv} \n ${golemdeglace.nom} pv: ${golemdeglace.pv}`);



//     levelup(){
//         if (this.xp.current >= this.xp.max) {
//             this.level++;
//             this.xp.rest = this.xp.current-this.xp.max;
//             if (this.xp.rest >= 0) {
//                 this.xp.current = this.xp.current + this.xp.rest;
//             }
//         }
//         if (level++) {
//             alert("Niveau superieur !");
//         }
//     },
//     derober(victime) {
//         let x=0;
//         let y=2;
//         while (x < y) {
//             alert(`${victime.nom} a ${victime.panier} a ta disposition.`);
//             i = victime.panier.indexOf(prompt('kes tu vx voler ?'));
//             this.panier.push(victime.panier[i]);
//             victime.panier.splice(i,1);
//             x++;
//             this.xp.current+=5;
//             this.levelup();
//         }
//         alert(`${victime.panier}`);
//         alert(`level = ${this.level} xp =${this.xp.current}`);
//     },
//     relancer(){
//         rejouer = confirm('jouer?');
//         while (rejouer != false) {
//             francois.derober(sergio);
//             rejouer = confirm('rejouer?')
//         }
//     }
// }
