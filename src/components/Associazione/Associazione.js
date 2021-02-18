import React, { Component } from "react";
import "./associazione.css";

export default class Associazione extends Component {
  render() {
    return (
      <div id="associazione" className="ass-wrapper">
        <div className="title">Aassociazione</div>
        <div className="sub-title">
          ASSOCIAZIONE ITALIANA GUIDE E SCOUTS D’EUROPA CATTOLICI
        </div>
        <div className="text">
          L’Associazione Italiana Guide e Scouts d’Europa Cattolici (della
          Federazione dello Scautismo Europeo – FSE) si è costituita in Roma nel
          1976. Scopo dell’Associazione la formazione religiosa, morale e civica
          dei giovani, attraverso l’utilizzazione del metodo autentico e nello
          spirito del Movimento scout, ideato e realizzato dal fondatore dello
          scautismo <strong>Lord Baden Powell</strong>, nella tradizione dello
          scautismo cattolico italiano.
        </div>
        <div className="text">
          L’Associazione ha le seguenti caratteristiche:
        </div>
        <div className="list-wrapper">
          <ul>
            <li>ITALIANA</li>
            <li>CATTOLICA</li>
            <li>EDUCATIVA SECONDO IL METODO SCOUT</li>
            <li>DI GUIDE E SCOUTS</li>
          </ul>
          <ul>
            <li>DI LAICI</li>
            <li>APARTITICA</li>
            <li>EUROPEA</li>
            <li>ITALIANA</li>
          </ul>
        </div>
        <div className="text">
          In quanto l&#8217;associazione, mira a dare alla comunità nazionale
          <strong>
            {" "}
            cittadini coscienti dei valori spirituali e culturali
          </strong>{" "}
          delle tradizioni e della storia della comunità stessa; che si sentano
          responsabili verso il bene comune e siano consapevoli del ruolo
          dell&#8217;Italia nel contesto degli altri popoli.
          L&#8217;Associazione incoraggia nei giovani{" "}
          <strong>l&#8217;amicizia verso tutti gli uomini</strong>,
          indipendentemente da razza, nazionalità, ceto sociale, cultura o
          religione; li incoraggia altresì ad avvicinare e comprendere le
          esigenze, la cultura, le tradizioni delle varie popolazioni e a
          <strong> rispettare il territorio e l&#8217;ambiente naturale</strong>
          . Pertanto l&#8217;associazione vuole formare giovani che siano
          convinti dei <strong>valori della democrazia</strong>, ed in
          particolare che siano
          <strong> rispettosi dei valori personali di ciascuno</strong>, che
          sappiano ragionare con la loro testa, che sappiano sostenere le
          proprie convinzioni nel rispetto delle idee altrui, che siano sempre{" "}
          <strong>
            pronti a collaborare con cristiano spirito di servizio
          </strong>
          .
        </div>
        <div className="title">Nascita del gruppo</div>
        <div className="text">
          L’idea di aprire un nuovo gruppo scout nasce nel 2017, grazie
          all'iniziativa di alcuni capi iscritti al vicino gruppo Vimercate 1,
          di creare una nuova realtà educativa nella zona monzese, priva di
          gruppi scout FSE. Fu così che il capo gruppo di Vimercate, Gianluca
          Parma, e il capo Riparto, Andrea Villa, insieme all’aiuto di Don
          Antonio Longoni, siglarono il primo accordo sulle panchine
          dell’oratorio di Gerno, dove tuttora il gruppo ha sede. Il 2018 fu
          l’anno dell’entrata in campo dei primi scout nel territorio lesmese,
          difatti Don Antonio mise a disposizione del neonato gruppo scout un
          salone dell’oratorio, alcune ex aule di catechismo e un campo da
          calcio, appartenente alla squadra locale: in parole povere, un intero
          oratorio. I primi due anni furono di prova, caratterizzati dalla
          presenza della squadriglia Tigri, conosciuta come “squadriglia
          libera”, poiché aveva sede nell’adiacente gruppo di Vimercate, ma
          svolgeva alcune attività dove sarebbe nato il nuovo gruppo. Il 2019
          tutto ebbe inizio, il gruppo prese il largo verso una nuova avventura,
          formato solamente da un Branco e da un Riparto. Sul collo di ogni
          scout, i colori del fazzolettone non erano più quelli del vecchio
          gruppo, ma spiccavano il rosso e il bianco, ciò significava che nel
          distretto Nord-Ovest faceva parte un nuovo gruppo, il Lesmo 1.
        </div>
        <div className="title">Colori del fazzolettone</div>
        <div className="text">
          Il fazzolettone di Lesmo I è composto dai colori rosso e bianco,
          simmetrici verticalmente, rispettivamente a sinistra e destra di chi
          porta il fazzolettone. Il rosso, posto sul lato corrispondete al
          cuore, è simbolo di ardore e forza di volontà, che ci spinge a
          continuare il nostro cammino scout anche nelle avversità e nei momenti
          buoi, ricordando che in noi brucia un fuoco inestinguibile. Il bianco
          è il colore della purezza e di una nuova luce; noi scout dobbiamo
          sempre ricordarci di essere “puri in pensieri, parole, opere e
          azioni”, ricordandoci che si è scout anche senza l’uniforme e ogni
          momento della nostra vita è opportuno per illuminare una società orami
          avvolta nella corruzione e nell’odio. Entrambi i colori ricordano
          anche il tema cromatico del gonfalone del comune di Lesmo.
        </div>
      </div>
    );
  }
}
