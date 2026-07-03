// ============================================
// MODELL-PRÜFUNG — Leben des Galilei (BAC germană maternă)
// Claudia Toth · Subiect I + II + III rezolvate complet
// „Versuch zuerst selbst → dann aufdecken". Galben = zu merken. 🏅 = warum 10p.
// Reutilizează toggleMuster() din theory.js.
// Subiect I: Goethe „Das Göttliche" (1783, Auszug) — verbatim verifiziert (gemeinfrei).
// Subiect II: Charakterisierung Galilei (Brecht, Leben des Galilei) — opera studiată.
// ============================================

const modellHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Aici ai o <strong>probă BAC completă</strong> (Subiect I + II + III), rezolvată integral. La <strong>Subiect I</strong> ai „Das Göttliche" de Goethe (Auszug) — perechea perfectă: idealul omului nobil, rațional, care „<strong>unterscheidet, wählet und richtet</strong>" și creează „das Nützliche, Rechte" ↔ Galilei, care <strong>ratează</strong> această responsabilitate (widerruft). La <strong>Subiect II</strong> ai o Charakterisierung completă a lui <strong>Galilei</strong>. <strong>Încearcă întâi singur</strong>, apoi dezvăluie. Ce e <span class="merken">galben</span> merită memorat.</div>
        </div>
    </div>
    <div class="strategie">Subiect II (Charakterisierung pe opera studiată) se învață și aduce nota. La Subiect I textul e necunoscut → memorezi METODA. La III memorezi tiparul scrisorii.</div>

    <!-- ================= SUBIECT I ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📄 Subiect I — Textinterpretation</h4></div>
    <p>Lesen Sie den Gedichtauszug und bearbeiten Sie die Aufgaben.</p>
    <div class="gedicht">
        <span class="titel">Johann Wolfgang von Goethe: Das Göttliche (1783) — Auszug</span>
        <div class="strophe">Edel sei der Mensch,<br>Hilfreich und gut!<br>Denn das allein<br>Unterscheidet ihn<br>Von allen Wesen,<br>Die wir kennen.</div>
        <div class="strophe" style="text-align:center; color:#8a8175; font-style:normal;">[…]</div>
        <div class="strophe">Nur allein der Mensch<br>Vermag das Unmögliche:<br>Er unterscheidet,<br>Wählet und richtet;<br>Er kann dem Augenblick<br>Dauer verleihen.</div>
        <div class="strophe" style="text-align:center; color:#8a8175; font-style:normal;">[…]</div>
        <div class="strophe">Der edle Mensch<br>Sei hilfreich und gut!<br>Unermüdet schaff er<br>Das Nützliche, Rechte,<br>Sei uns ein Vorbild<br>Jener geahneten Wesen!</div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 1:</strong> Interpretieren Sie den Gedichtauszug, indem Sie auf die äußere Form und auf die sprachliche Gestaltung eingehen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1a')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1a">
        <p><strong>Einleitung:</strong> Der Auszug stammt aus <em>„Das Göttliche"</em> (1783) von J. W. von Goethe, einer <span class="merken">Hymne der Weimarer Klassik</span>. Das Gedicht preist den <strong>edlen, vernunftbegabten und verantwortlichen Menschen</strong>.</p>
        <p><strong>Äußere Form:</strong> eine <span class="merken">Hymne in freien Rhythmen</span> (ohne Reim und festes Metrum); die kurzen, wuchtigen Verse geben dem Ideal einen feierlichen, eindringlichen Ton.</p>
        <p><strong>Sprachliche Gestaltung:</strong></p>
        <ul>
            <li>Der <span class="merken">programmatische Anfang (Imperativ)</span>: „Edel sei der Mensch, / Hilfreich und gut!" — das sittliche Ideal des Menschen.</li>
            <li>Die <span class="merken">Auszeichnung des Menschen durch die Vernunft</span>: „Nur allein der Mensch / Vermag das Unmögliche: / Er unterscheidet, / Wählet und richtet" — die Kraft des Urteils.</li>
            <li>Der <span class="merken">Appell / Refrain</span>: „Der edle Mensch / Sei hilfreich und gut! / Unermüdet schaff er / Das Nützliche, Rechte" — die Verantwortung, Gutes zu wirken.</li>
            <li>Die <span class="merken">knappe, feierliche Sprache</span> mit Wiederholungen — der hymnische, appellative Ton.</li>
        </ul>
        <p><strong>Schluss:</strong> Der Auszug entwirft das <strong>klassische Ideal</strong> des edlen, vernünftigen und <strong>verantwortlichen</strong> Menschen. Das ist ein aufschlussreicher Bezug zu Brechts „Leben des Galilei": Galilei ist der Mensch, der „<strong>unterscheidet und richtet</strong>" (der die Wahrheit erkennt) — doch er <strong>verfehlt die Verantwortung</strong> (der Widerruf). So trifft das klassische Ideal auf Brechts widersprüchlichen, <strong>versagenden</strong> Menschen.</p>
        <div class="warum"><ul>
            <li>Einleitung mit Autor, Werk, Epoche und Deutungshypothese (das Ideal des Menschen) ✔</li>
            <li>äußere Form (Hymne in freien Rhythmen, feierlicher Ton) benannt ✔</li>
            <li>mindestens 3 sprachliche Mittel <strong>mit Beleg</strong> (Imperativ, Vernunft-Motiv, Refrain/Appell) ✔</li>
            <li>Schluss mit Deutung (+ Bezug zu Galilei: Vernunft und Verantwortung) ✔</li>
        </ul></div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 2:</strong> Beide Texte kreisen um Vernunft und Verantwortung. Trägt Ihrer Meinung nach der, der Wissen und Vernunft besitzt, eine besondere Verantwortung? Belegen Sie mit mindestens zwei Beispielen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1b')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1b">
        <p><span class="merken">Meiner Meinung nach</span> trägt gerade der, der <strong>Wissen und Vernunft</strong> besitzt, eine <strong>besondere Verantwortung</strong> für ihren Gebrauch.</p>
        <p><strong>Einerseits</strong> formuliert Goethes „Das Göttliche" dieses Ideal: Der edle Mensch, der als Einziger „unterscheidet, wählet und richtet", soll „<strong>das Nützliche, Rechte</strong>" schaffen — Vernunft verpflichtet zum Guten. <strong>Andererseits</strong> zeigt Brechts „Leben des Galilei", was geschieht, wenn diese Verantwortung <strong>versagt</strong>: Galilei erkennt die Wahrheit, beugt sich aber der Macht und <strong>widerruft</strong>. Sein eigener Satz — die Wissenschaft solle „die Mühseligkeit der menschlichen Existenz erleichtern" — klagt ihn an. Wer viel weiß und kann, dessen Handeln hat große Folgen für alle.</p>
        <p><span class="merken">Abschließend vertrete ich die Auffassung</span>, dass Wissen ohne Verantwortung gefährlich ist: Vernunft und Wissenschaft verpflichten den Menschen, das Rechte und Nützliche zu tun.</p>
        <div class="warum"><ul>
            <li>beide Texte richtig erfasst (Vernunft ↔ Verantwortung) ✔</li>
            <li>klare eigene Position (Wissen verpflichtet) ✔</li>
            <li><strong>zwei</strong> Argumente mit Beispielen (Das Göttliche / Galilei) ✔</li>
            <li>Redemittel der Meinungsäußerung + Rückbezug auf die Texte ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT II ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📝 Subiect II — Charakterisierung (Galilei)</h4></div>
    <p><strong>Aufgabe:</strong> Charakterisieren Sie die Figur <em>Galileo Galilei</em> aus Brechts „Leben des Galilei". Gehen Sie auf soziale Stellung, Charakterzüge, Entwicklung und Beziehungen ein.</p>
    <button class="muster-btn" onclick="toggleMuster('s2')">🔓 Muster-Charakterisierung aufdecken</button>
    <div class="muster-antwort" id="s2">
        <p><strong>Einleitung:</strong> Im Drama <span class="merken">„Leben des Galilei" (1938/39) von Bertolt Brecht</span> steht <strong>Galileo Galilei</strong> im Mittelpunkt — ein genialer, aber widersprüchlicher Forscher.</p>
        <p><strong>Soziale Stellung:</strong> Galilei ist ein berühmter <span class="merken">Naturforscher und Mathematiker</span> im Italien des 17. Jahrhunderts. Er lehrt in Venedig/Padua und geht dann an den Hof der Medici nach Florenz; dabei gerät er in Konflikt mit der <strong>Kirche</strong>.</p>
        <p><strong>Charakterzüge:</strong> Er ist <span class="merken">genial, neugierig und vernunftgeleitet</span>, aber auch ein <strong>Genussmensch</strong> (Essen, Wein) — lebenslustig und, unter Druck, <strong>feige</strong>.</p>
        <p><strong>Entwicklung:</strong> vom <strong>mutigen Verfechter</strong> des kopernikanischen Weltbilds über den <span class="merken">Widerruf</span> (aus Angst vor der Folter) bis zur <strong>Selbstanklage</strong> im Schlussmonolog. Heimlich vollendet er die „<strong>Discorsi</strong>".</p>
        <p><strong>Beziehungen:</strong> Zu seinem Schüler <strong>Andrea</strong> (erst enttäuscht, dann Träger des Wissens) und zur <strong>Kirche/Inquisition</strong> (der übermächtige Gegner).</p>
        <p><strong>Schluss:</strong> <span class="merken">Zusammenfassend</span> verkörpert Galilei den <strong>widersprüchlichen Wissenschaftler</strong>, der die Wahrheit erkennt, aber die Verantwortung <strong>verfehlt</strong> — kein Held, sondern ein Mensch. Genau das will Brecht (V-Effekt): den Zuschauer zum <strong>kritischen Urteil</strong> zwingen.</p>
        <div class="warum"><ul>
            <li>Einleitung: Werk, Autor, <strong>Jahr</strong>, Gattung und Figur ✔</li>
            <li>soziale Stellung (Naturforscher, Venedig/Florenz, Konflikt mit der Kirche) ✔</li>
            <li>Charakterzüge <strong>mit Belegen</strong> (genial, vernunftgeleitet ↔ genusssüchtig, feige) ✔</li>
            <li>Entwicklung (Verfechter → Widerruf → Selbstanklage) + Beziehungen (Andrea, Kirche) ✔</li>
            <li>Schluss mit Deutung (der widersprüchliche Wissenschaftler; V-Effekt) ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT III ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">✉️ Subiect III — Bewerbungsbrief</h4></div>
    <p><strong>Aufgabe:</strong> Sie heißen Jonas Weber und bewerben sich auf eine Anzeige des <em>Planetariums „Kopernikus"</em> um einen Ferienjob als Aushilfe (Empfang &amp; Besucherführung). Schreiben Sie einen vollständigen Bewerbungsbrief.</p>
    <button class="muster-btn" onclick="toggleMuster('s3')">🔓 Muster-Bewerbung aufdecken</button>
    <div class="muster-antwort" id="s3">
        <p style="color:#5A5147;">Jonas Weber<br>Str. Lungă 24<br>500035 Kronstadt</p>
        <p style="color:#5A5147;">Planetarium „Kopernikus"<br>z. Hd. Frau Dr. Stern<br>Str. Republicii 18<br>500030 Kronstadt</p>
        <p style="color:#5A5147;">Kronstadt, den 3. Juli 2026</p>
        <p><span class="merken"><strong>Betreff: Bewerbung um einen Ferienjob als Aushilfe im Planetarium</strong></span></p>
        <p><span class="merken">Sehr geehrte Frau Dr. Stern,</span></p>
        <p><span class="merken">mit großem Interesse habe ich Ihre Anzeige gelesen</span> und bewerbe mich hiermit um die Stelle als Aushilfe in den Sommerferien.</p>
        <p>Ich besuche die zwölfte Klasse und begeistere mich sehr für <strong>Astronomie</strong> und <strong>Naturwissenschaften</strong> — auch die Geschichte der Forschung (wie Galileis Kampf um das kopernikanische Weltbild) fasziniert mich. <span class="merken">Zu meinen Stärken gehören</span> Zuverlässigkeit, Freundlichkeit und Freude am Umgang mit Menschen. Außerdem spreche ich gut Deutsch, Rumänisch und Englisch, was bei Besuchern hilfreich ist.</p>
        <p>Gern möchte ich am Empfang helfen, Gäste begrüßen und bei Vorführungen und Führungen unterstützen. <span class="merken">Über ein persönliches Vorstellungsgespräch würde ich mich sehr freuen.</span></p>
        <p><span class="merken">Mit freundlichen Grüßen</span><br>Jonas Weber</p>
        <p style="color:#5A5147; font-size:0.85rem;">Anlage: Lebenslauf</p>
        <div class="warum"><ul>
            <li>Absender, Empfänger, Ort + Datum ✔</li>
            <li><strong>Betreffzeile (2 P)</strong> und <strong>Anrede (2 P)</strong> korrekt ✔</li>
            <li>Einleitung (Bezug zur Anzeige) + Hauptteil (Stärken) + Schluss (Gespräch) ✔</li>
            <li>Grußformel, Unterschrift, Anlage ✔</li>
        </ul></div>
    </div>
`;

// ============================================
// INJECTARE
// ============================================
(function () {
    function inject() {
        const c = document.getElementById('modell-container');
        if (c) c.innerHTML = modellHTML;
    }
    if (document.readyState !== 'loading') { inject(); }
    else { document.addEventListener('DOMContentLoaded', inject); }
})();
