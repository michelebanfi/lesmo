import React, { Component } from "react";
import "./branche.css";
import lupetti from "./../../media/mowgly.png";
import esplo from "./../../media/san_giorgio_bp.jpg"

export default class Branche extends Component {
  render() {
    return (
      <div id="branche" className="branche-wrapper">
        <div className="branche-lupetti">
          <div>
            <div className="title">Lupetti</div>
            <div className="text">
              <p>
                I lupetti sono bambini tra gli 8 e gli 11 anni che amano giocare
                insieme e vivere all'aria aperta! Quando un secolo fa Lord Baden
                Powell fondò gli scout in Inghilterra, li immaginò solo per
                ragazzi più grandicelli.. ma dopo pochi anni si ritrovò
                centinaia di bambini che, impazienti di diventare "boy scout",
                venivano a chiedere di giocare! Fu allora che inventò i lupetti:
                il branco di Seeonee, abitante della Giungla, come scritto nel
                "Libro della Giungla" di Kipling. Un popolo di lupi fieri e
                leali, accompagnati dal cucciolo d'uomo Mowgly, dalla pantera
                Bagheera, e dal saggio orso Baloo.
              </p>
              <p>
                E' in questo mondo fantastico che giochiamo ogni Sabato, perché
                qui tutto passa attraverso il gioco e l'avventura! I valori
                etici e cristiani che insegnamo, le tecniche per vivere
                all'aperto, i nodi e le costruzioni: tutto si apprende con
                gioia, canti e giochi!
              </p>
              <p>
                DEL NOSTRO MEGLIO! E' la nostra Parola Maestra, i lupetti la
                urlano sempre prima di iniziare a giocare, e promettono
                solennemente di impegnarsi sempre al massimo in ogni cosa che
                fanno: la scuola, il gioco, la buona azione quotidiana verso il
                prossimo. Da noi non conta quanto sei bravo a scartare con la
                palla, ma quanto ti impegni a passarla.. perché quello che conta
                non è solo vincere, e neanche solo divertirsi! Quello che conta
                è fare sempre del proprio meglio, per migliorare ogni giorno,
                davanti a noi stessi e davanti a Dio.
              </p>
            </div>
          </div>
          <div>
            <img src={lupetti} />
          </div>
        </div>
        <div className="branche-esploratori">
        <div>
        <img src={esplo} />
        </div>
          <div>
            <div className="title">Esploratori</div>
            <div className="text">
              <p>
                Gli esploratori sono ragazzi dagli 11 ai 16 anni che amano la
                vita all’aria aperta e che non hanno paura di mettersi in gioco
                per superare ogni avversità.
              </p>
              <p>
                Sono suddivisi in Squadriglie, piccole unità di 7-8 ragazzi,
                rappresentate con un animale, ognuna con il proprio materiale,
                le proprie usanze, le proprie tradizioni, i propri meriti e
                riconoscenze. Ogni esploratore ricopre un compito ben preciso
                all’interno della sua Squadriglia e il funzionamento di questa è
                determinato dall’impegno di ogni suo singolo componente. Vivono
                di quello che la Natura offre loro, cucinano i loro pasti su un
                fuoco, dormono sotto una tenda di tela, si lavano in un fresco
                torrente di montagna, costruiscono con la legna lo spazio per
                vivere all’aria aperta con qualsiasi condizione meteorologica;
                sanno cavarsela in ogni circostanza e superano le difficoltà con
                il sorriso; la sera al caldo di un focolare concludono le loro
                giornate ammirando un cielo stellato durante una veglia,
                cantando, e pregando Dio per i doni che hanno ricevuto.
              </p>
              <p>
                L'Esploratore segue la Legge Scout, molto simile alla legge
                degli antichi cavalieri per i quali l'Onore era più importante
                di ogni altra cosa. Come per San Giorgio, cavaliere e patrono
                degli Esploratori, il Motto dell’Esploratore ( Estote Parati -
                Siate Pronti) gli ricorda di essere sempre pronto a mettersi al
                servizio del prossimo per essere un buon cristiano e un buon
                cittadino.
              </p>
              <p>Essere esploratore vuol dire:</p>
              GIOCARE: trovare un tesoro nascosto, appostarsi, mimetizzarsi
              nella boscaglia per osservare gli spostamenti avversari,
              trasmettere messaggi cifrati, oltrepassare le zone controllate
              dagli avversari... <br></br>IMPARARE a cavarsela all'interno della
              natura e del Creato, con qualsiasi tempo, vivendo di essenzialità
              e semplicità, utilizzando le tecniche della Vita all'Aria Aperta.
              <br></br> CRESCERE mettendosi in gioco, cercando di conoscere e
              migliorare se stessi attraverso il gioco, il superamento delle
              "prove di Classe" e il conseguimento di “specialità”, con Imprese
              e Missioni, vincendo trofei e superando i propri limiti. <br></br>
              PREGARE Dio per ogni suo dono, ringraziandolo per tutte le
              bellezze del creato in cui è immerso e imparando a vedere il Suo
              volto in ogni fratello che incontra sul suo cammino.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
