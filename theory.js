// ============================================
// THEORIE — BAC kompakt: Leben des Galilei (Bertolt Brecht, 1938/39)
// Limba și literatura germană maternă · Claudia Toth
// Conținut în germană; note de strategie scurte în RO.
// Moderne / Exildrama — episches Theater · Charakterisierung.
// ⚠️ Brecht d.1956 = NU e gemeinfrei (PD abia 2027) → doar citate scurte de studiu (verificate), fără reproducerea scenelor.
// Prüfungsteil-I-Gedicht „Das Göttliche" (Goethe, 1783, Auszug) verbatim verifiziert (gemeinfrei).
// ============================================

const theoryHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Brechts <em>Leben des Galilei</em> (1938/39) ist DAS Musterbeispiel des <strong>epischen Theaters</strong>. Galilei beweist mit dem <strong>Fernrohr</strong> das kopernikanische Weltbild und stellt die <strong>Autorität der Kirche</strong> infrage — doch unter <strong>Folterandrohung widerruft</strong> er. Am Ende klagt er sich selbst an: Die Wissenschaft trägt eine <strong>gesellschaftliche Verantwortung</strong>. Merke dir <strong>episches Theater</strong>, <strong>Wissenschaft &amp; Verantwortung</strong> und „<strong>Unglücklich das Land, das Helden nötig hat</strong>". Öffne mai jos secțiune cu secțiune. 🔭</div>
        </div>
    </div>

    <!-- 0: BAC auf einen Blick -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🆘 BAC auf einen Blick (die SOS-Seite)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="sos-box">
                <h4>Leben des Galilei — das Wichtigste in 1 Minute</h4>
                <div class="sos-row"><div class="sos-k">Autor</div><div class="sos-v">Bertolt Brecht (1898–1956)</div></div>
                <div class="sos-row"><div class="sos-k">Werk / Jahr</div><div class="sos-v">Leben des Galilei (auch „Das Leben des Galilei") — <strong>1938/39</strong> (mehrere Fassungen; UA 1943 Zürich)</div></div>
                <div class="sos-row"><div class="sos-k">Epoche</div><div class="sos-v"><strong>Moderne / Exildrama</strong> — <strong>episches Theater</strong> (Brecht)</div></div>
                <div class="sos-row"><div class="sos-k">Gattung</div><div class="sos-v"><strong>Drama (episches Theater)</strong> in <strong>15 Bildern</strong> (nicht Akten)</div></div>
                <div class="sos-row"><div class="sos-k">Schauplatz / Zeit</div><div class="sos-v">Italien im 17. Jh. (Venedig, Florenz, Rom); erzählte Zeit <strong>1609–1642</strong> (28 Jahre)</div></div>
                <div class="sos-row"><div class="sos-k">Hauptfigur</div><div class="sos-v"><strong>Galileo Galilei</strong> — genialer Forscher, aber widersprüchlich (feige, genusssüchtig)</div></div>
                <div class="sos-row"><div class="sos-k">Weitere Figuren</div><div class="sos-v"><strong>Andrea Sarti</strong> (Schüler) · Virginia (Tochter) · Sagredo · der kleine Mönch · Papst Urban VIII. (Barberini) · der Inquisitor</div></div>
                <div class="sos-row"><div class="sos-k">Themen</div><div class="sos-v"><strong>Wissenschaft &amp; Verantwortung</strong> · <strong>Wahrheit ↔ Macht/Autorität</strong> · Fortschritt · Vernunft ↔ Dogma · der Verrat (Widerruf)</div></div>
                <div class="sos-row"><div class="sos-k">Kernaussage</div><div class="sos-v">Galilei beweist mit dem Fernrohr das <strong>kopernikanische Weltbild</strong> und fordert die Kirche heraus. Unter <strong>Folterandrohung widerruft</strong> er — ein Verrat an der Wahrheit. Am Ende verurteilt er selbst den Widerruf als Versagen vor der <strong>gesellschaftlichen Verantwortung der Wissenschaft</strong>.</div></div>
                <div class="sos-row"><div class="sos-k">Schlüsselzitat</div><div class="sos-v">Andrea: „Unglücklich das Land, das keine Helden hat!" — Galilei: „Nein. <strong>Unglücklich das Land, das Helden nötig hat.</strong>"</div></div>
            </div>
            <div class="strategie">Pagina de memorat pe de rost. Autor (Brecht) – Jahr (1938/39) – Epoche (Moderne/episches Theater) – Gattung (Drama in 15 Bildern) trebuie să iasă automat în Einleitung.</div>
        </div>
    </div>

    <!-- 1: Die Handlung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📜 Die Handlung (Inhalt &amp; Aufbau)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <h4>Anfang &amp; Mitte — das Fernrohr, das neue Weltbild &amp; die Gefahr</h4>
                <p>In Venedig/Padua lehrt <strong>Galilei</strong> das <strong>kopernikanische (heliozentrische) Weltbild</strong>: Die Erde dreht sich um die Sonne. Mit dem <strong>Fernrohr</strong> sammelt er Beweise (z. B. die Jupitermonde) und widerlegt so das alte, von der <strong>Kirche</strong> gestützte geozentrische Weltbild. Um mehr Zeit für die Forschung zu haben, zieht er an den Hof der Medici nach <strong>Florenz</strong> — trotz der Gefahr. Die <strong>Inquisition</strong> setzt seine Lehre auf den Index; auch der neue, mathematisch gebildete Papst (Barberini/Urban VIII.) kann die Macht der Institution nicht aufhalten.</p>
            </div>
            <div class="theory-box">
                <h4>Bild 13 &amp; Schluss — der Widerruf &amp; die Selbstanklage</h4>
                <p>Die Inquisition droht Galilei mit <strong>Folter</strong> — und er <strong>widerruft</strong> öffentlich seine Lehre, um dem Tod zu entgehen. Sein Schüler <strong>Andrea</strong> ist bitter enttäuscht: „Unglücklich das Land, das keine Helden hat!" — Galilei antwortet: „Nein. Unglücklich das Land, das Helden nötig hat." Zuletzt lebt Galilei unter <strong>Hausarrest</strong>; heimlich hat er sein Hauptwerk, die <strong>„Discorsi"</strong>, geschrieben. Andrea <strong>schmuggelt</strong> das Manuskript ins Ausland. In einem selbstkritischen <strong>Schlussmonolog</strong> verurteilt Galilei seinen Widerruf als <strong>Verrat</strong> an der Wissenschaft und ihrer sozialen Verantwortung.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselzitate (verbatim, kurz)</h4>
                <div class="zitat">Andrea: „Unglücklich das Land, das keine Helden hat!" — Galilei: „Nein. Unglücklich das Land, das Helden nötig hat."</div>
                <div class="zitat">Galilei über die Wissenschaft: „…das einzige Ziel der Wissenschaft [besteht] darin …, die Mühseligkeit der menschlichen Existenz zu erleichtern."</div>
            </div>
            <div class="bac-wissen">Reține lanțul: Galilei dovedește cu Fernrohr-ul heliocentrismul → înfruntă Kirche/Inquisition → merge la Florenz (pericol) → lehrea pe Index → <strong>Bild 13: widerruft</strong> sub Folterandrohung → Andrea dezamăgit („Helden nötig hat") → sub Hausarrest scrie „Discorsi", pe care Andrea le duce peste graniță → Schlussmonolog: se autoacuză de <strong>Verrat</strong>. <strong>Wahrheit → Macht → Widerruf → Selbstanklage (Verantwortung).</strong></div>
        </div>
    </div>

    <!-- 2: Die Figuren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 Die Figuren verstehen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">

            <div class="theory-box">
                <h4>👤 Galileo Galilei — der geniale, widersprüchliche Forscher</h4>
                <p><em>Ein genialer Naturforscher, sinnenfroh und lebenslustig — aber unter Druck feige. Kein strahlender Held, sondern eine widersprüchliche Figur (typisch Brecht).</em></p>
                <div class="merkmale">
                    <span class="chip plus">genial</span><span class="chip plus">neugierig</span><span class="chip plus">vernunftgeleitet</span><span class="chip plus">produktiv (schreibt die „Discorsi")</span>
                    <span class="chip minus">feige (widerruft)</span><span class="chip minus">genusssüchtig</span><span class="chip minus">verrät die Wahrheit (aus Angst)</span>
                </div>
                <p>Galilei ist ein <strong>Genie der Beobachtung und der Vernunft</strong>, zugleich ein <strong>Genussmensch</strong> (Essen, Wein), der das Leben liebt. Genau diese <strong>Schwäche</strong> lässt ihn unter Folterandrohung <strong>widerrufen</strong>. Brecht zeigt bewusst <strong>keinen Helden</strong>, sondern einen widersprüchlichen Menschen — damit der Zuschauer <strong>kritisch urteilt</strong> statt sich einzufühlen.</p>
                <div class="bac-wissen">Galilei = personajul-cheie pt Charakterisierung: geniul rațiunii care, din slăbiciune/frică, își trădează adevărul (widerruft) — și se autoacuză. NU un erou strălucit, ci o figură contradictorie (Brecht, V-Effekt).</div>
            </div>

            <div class="theory-box">
                <h4>👤 Andrea Sarti — der Schüler (das Gewissen der Wissenschaft)</h4>
                <p>Galileis treuer, idealistischer <strong>Schüler</strong>. Er ist zuerst tief <strong>enttäuscht</strong> vom Widerruf des Meisters („Unglücklich das Land, das keine Helden hat!"), versteht am Ende aber, dass Galilei die <strong>„Discorsi"</strong> heimlich vollendet hat. Er <strong>schmuggelt</strong> das Werk ins Ausland und trägt so das <strong>Wissen weiter</strong>.</p>
            </div>

            <div class="theory-box">
                <h4>👤 Die Kirche &amp; die Inquisition (Autorität &amp; Dogma)</h4>
                <p>Papst <strong>Urban VIII. (Barberini)</strong> — selbst Mathematiker, aber als Papst der Macht der Institution unterworfen — und der <strong>Inquisitor</strong> verkörpern die <strong>Autorität</strong>, die die neue Wahrheit unterdrückt. Sie stehen für das <strong>Dogma</strong> und die Angst der Macht vor der freien Vernunft.</p>
            </div>

            <div class="theory-box">
                <h4>🔗 Figurenkonstellation</h4>
                <div class="konstell">
                    <div class="konstell-center">Galilei (Wahrheit &amp; Vernunft) ⟷ die Kirche / Inquisition (Macht &amp; Dogma)</div>
                    <div class="konstell-card"><div class="kf">Galilei ↔ die Inquisition</div><div class="kb">die freie Forschung ↔ das Verbot / die Folterandrohung ⛪</div></div>
                    <div class="konstell-card"><div class="kf">Galilei ↔ Andrea</div><div class="kb">der Meister (der widerruft) ↔ der Schüler (der das Wissen weiterträgt) 📖</div></div>
                    <div class="konstell-card"><div class="kf">das Fernrohr ↔ das Dogma</div><div class="kb">der Beweis/die Beobachtung ↔ der Autoritätsglaube 🔭</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Themen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 Die wichtigsten Themen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>1. Wissenschaft &amp; (gesellschaftliche) Verantwortung</h4>
                <p>Das zentrale Thema: Die Wissenschaft darf sich <strong>nicht der Macht beugen</strong>. In seinem Schlussmonolog klagt Galilei sich an: Mit dem Widerruf habe er die <strong>Verantwortung der Wissenschaft</strong> verraten. (Brecht schreibt im Angesicht von Faschismus und Atombombe.)</p>
            </div>
            <div class="theory-box">
                <h4>2. Wahrheit ↔ Macht / Autorität</h4>
                <p>Die neue, <strong>beweisbare Erkenntnis</strong> (Beobachtung mit dem Fernrohr) stößt auf die <strong>Autorität der Kirche</strong>. Die Macht unterdrückt die Wahrheit — doch sie kann sie nicht dauerhaft aufhalten.</p>
            </div>
            <div class="theory-box">
                <h4>3. Fortschritt &amp; das neue Zeitalter</h4>
                <p>Das kopernikanische Weltbild ist der Beginn einer <strong>neuen, aufgeklärten Zeit</strong> — das „Zweifeln" und Beobachten löst den Autoritätsglauben ab. Der Fortschritt lässt sich nicht endgültig verbieten (die „Discorsi" werden gerettet).</p>
            </div>
            <div class="theory-box">
                <h4>4. Vernunft ↔ Dogma / Glaube</h4>
                <p>Galilei setzt auf <strong>Beweis, Zweifel und Vernunft</strong> („Wissen, gewonnen durch Zweifel"); die Kirche auf <strong>Dogma und Autoritätsglauben</strong>. Der Konflikt ist der zwischen freiem Denken und geistiger Bevormundung.</p>
            </div>
            <div class="theory-box">
                <h4>5. Der Verrat &amp; das „Heldentum"</h4>
                <p>Galileis <strong>Widerruf</strong> ist ein Verrat an der Wahrheit. Brecht kritisiert zugleich das falsche <strong>Heldentum</strong>: „Unglücklich das Land, das Helden nötig hat" — eine gute Gesellschaft sollte keine <strong>Opfer-Helden</strong> brauchen.</p>
            </div>
            <div class="strategie">La BAC: tema-vedetă e <strong>die Verantwortung der Wissenschaft</strong> + <strong>Wahrheit ↔ Macht</strong>. Leagă fiecare temă de o scenă (das Fernrohr, der Widerruf/Bild 13, die „Discorsi", der Schlussmonolog).</div>
        </div>
    </div>

    <!-- 4: Symbole -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎭 Symbole &amp; Motive leicht erklärt</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <table class="theory-table">
                    <thead><tr><th>Symbol / Motiv</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">das Fernrohr</td><td>das Werkzeug der <strong>neuen, beweisenden Wissenschaft</strong> — der Blick, der das Dogma widerlegt.</td></tr>
                        <tr><td class="nomen">Sonne ↔ Erde (heliozentrisch)</td><td>das <strong>neue Weltbild</strong> (Kopernikus) gegen das alte, geozentrische der Kirche.</td></tr>
                        <tr><td class="nomen">der Widerruf</td><td>der <strong>Verrat</strong> an der Wahrheit — die Wissenschaft beugt sich der Macht (aus Angst).</td></tr>
                        <tr><td class="nomen">die „Discorsi"</td><td>das trotz allem <strong>gerettete Wissen</strong> — der Fortschritt lässt sich nicht endgültig aufhalten.</td></tr>
                        <tr><td class="nomen">Galileis Genuss (Essen, Wein)</td><td>seine <strong>sinnliche, unheroische Menschlichkeit</strong> — die auch seine Schwäche (den Widerruf) erklärt.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="strategie">Cele mai „rentabile" la examen: <strong>das Fernrohr</strong> (știința care dovedește), <strong>der Widerruf</strong> (trădarea adevărului) și <strong>die „Discorsi"</strong> (cunoașterea salvată/progresul).</div>
        </div>
    </div>

    <!-- 5: Aufbau & Form -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏗️ Aufbau und Form</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>Form &amp; ihre Wirkung — das epische Theater</h4>
                <ul>
                    <li><strong>Episches Theater</strong> (Brecht): kein Einfühlen und keine Katharsis, sondern <strong>kritisches Distanzieren und Nachdenken</strong> — der <strong>Verfremdungseffekt</strong> (V-Effekt).</li>
                    <li><strong>15 Bilder</strong> (statt Akten) mit <strong>Bild-Überschriften</strong>, oft mit <strong>Songs/Zwischentexten</strong> — die Handlung wird kommentiert und „verfremdet".</li>
                    <li><strong>Offene, chronikartige Form</strong>: eine erzählte Zeit von <strong>28 Jahren</strong> (1609–1642); der Zuschauer soll <strong>urteilen</strong>, nicht mitfühlen.</li>
                    <li><strong>Historischer Stoff mit Gegenwartsbezug</strong>: der Fall Galilei spiegelt die <strong>Verantwortung der Wissenschaft</strong> in Brechts Zeit (Exil, Faschismus, später Atombombe).</li>
                    <li><strong>Kein Identifikationsheld:</strong> Galilei bleibt widersprüchlich — genau das soll den Zuschauer zum eigenen Urteil zwingen.</li>
                </ul>
            </div>
            <div class="bac-wissen">Forma e ARGUMENT: e <strong>episches Theater</strong> (V-Effekt → gândire critică, NU Einfühlung/Katharsis), în <strong>15 Bilder</strong> cu titluri/Songs, formă deschisă de cronică (28 de ani), stoff istoric cu Gegenwartsbezug. Comentează asta!</div>
        </div>
    </div>

    <!-- 6: Sprache & Stil -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>✒️ Sprache und Stil</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Stilmittel (mit Belegen)</h4>
                <table class="theory-table">
                    <thead><tr><th>Merkmal</th><th>Beleg / Funktion</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">nüchterne, klare Sprache</td><td>sachlich und argumentierend — passend zur Vernunft/Wissenschaft</td></tr>
                        <tr><td class="nomen">Aphorismen / Sentenzen</td><td>„Unglücklich das Land, das Helden nötig hat" — verdichtete Gedanken zum Nachdenken</td></tr>
                        <tr><td class="nomen">Dialektik / Widerspruch</td><td>Galilei als widersprüchliche Figur (genial ↔ feige) — der Zuschauer soll abwägen</td></tr>
                        <tr><td class="nomen">Verfremdung (Songs, Bildtitel)</td><td>unterbricht die Illusion — kritische Distanz statt Einfühlung</td></tr>
                        <tr><td class="nomen">Streitgespräch / Dialog</td><td>die Argumente (Vernunft ↔ Dogma) werden im Disput ausgetragen</td></tr>
                        <tr><td class="nomen">historisch-konkrete Details</td><td>Fernrohr, Jupitermonde, „Discorsi" — der historische Rahmen</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="bac-wissen">Leben des Galilei e <strong>episches Theater</strong> — la analiză comentează <strong>Verfremdung</strong> (Songs/Bildtitel), <strong>aforismele</strong> („…Helden nötig hat"), <strong>dialectica</strong> (Galilei contradictoriu) și limba sobră, argumentativă.</div>
        </div>
    </div>

    <!-- 7: Interpretation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 Interpretation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="theory-box">
                <h4>Der zentrale Gedanke</h4>
                <p><strong>Ein episches Drama über die gesellschaftliche Verantwortung der Wissenschaft.</strong> Galilei, ein genialer, aber schwacher Mensch, <strong>verrät</strong> unter Druck die Wahrheit — und klagt sich am Ende selbst an. Brecht (im Exil, im Angesicht von Faschismus und Atombombe) fragt: <strong>Darf sich die Wissenschaft der Macht beugen?</strong> Der <strong>Verfremdungseffekt</strong> zwingt den Zuschauer zum <strong>kritischen Urteil</strong> statt zur Identifikation.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselpunkte</h4>
                <ul>
                    <li><strong>Wissenschaft &amp; Verantwortung:</strong> die Wissenschaft darf sich der Macht nicht beugen.</li>
                    <li><strong>Wahrheit ↔ Macht:</strong> die neue Erkenntnis gegen das kirchliche Dogma.</li>
                    <li><strong>Der Widerruf:</strong> Galileis Verrat aus Angst — und seine Selbstanklage.</li>
                    <li><strong>Fortschritt:</strong> die geretteten „Discorsi" — das Wissen lebt weiter.</li>
                    <li><strong>Form = Wirkung:</strong> episches Theater, V-Effekt, 15 Bilder, kein Held zur Identifikation.</li>
                </ul>
            </div>
            <div class="bac-wissen">Cele mai probabile subiecte: „die Verantwortung der Wissenschaft", „Charakterisierung Galilei", „episches Theater / V-Effekt" și „der Widerruf". Pereche utilă: Goethe „Das Göttliche" — omul nobil, rațional, care „unterscheidet, wählet und richtet" și creează „das Nützliche, Rechte" (idealul omului responsabil) ↔ Galilei, care RATEAZĂ această responsabilitate (widerruft). Idealul clasic (edel, hilfreich, responsabil) contra omului contradictoriu, care eșuează, al lui Brecht.</div>
        </div>
    </div>
`;

// ============================================
// BAC-TRAINING (Prüfungsfragen + Musterantwort) + SCHREIBVORLAGEN
// ============================================
const trainingHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Citește întrebarea, <strong>gândește singur</strong> răspunsul — apoi compară cu Musterantwort. Schreibvorlagen-urile de jos îți dau structura gata pentru fiecare subiect.</div>
        </div>
    </div>

    <h4 style="color:#065f46; margin:14px 0 8px;">🎯 Häufige Prüfungsfragen mit Musterantworten</h4>

    <div class="theory-box">
        <p><strong>1. Worum geht es in „Leben des Galilei"? (Inhaltswiedergabe)</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m1')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m1">Brechts Drama <em>Leben des Galilei</em> (1938/39) zeigt den Forscher <strong>Galilei</strong>, der mit dem <strong>Fernrohr</strong> das kopernikanische Weltbild beweist und die <strong>Autorität der Kirche</strong> herausfordert. Die <strong>Inquisition</strong> zwingt ihn unter <strong>Folterandrohung</strong> zum <strong>Widerruf</strong>. Sein Schüler <strong>Andrea</strong> ist enttäuscht. Am Ende hat Galilei heimlich die <strong>„Discorsi"</strong> vollendet (Andrea schmuggelt sie ins Ausland) und klagt sich im Schlussmonolog wegen des <strong>Verrats</strong> an der Wissenschaft an.</div>
    </div>

    <div class="theory-box">
        <p><strong>2. Welcher Epoche und Gattung gehört das Werk an?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m2')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m2">Es gehört zur <strong>Moderne / zum Exildrama</strong> (1938/39) und ist ein <strong>Drama des epischen Theaters</strong> von <strong>Bertolt Brecht</strong> — in <strong>15 Bildern</strong> statt in klassischen Akten.</div>
    </div>

    <div class="theory-box">
        <p><strong>3. Was ist „episches Theater" (und der V-Effekt)?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m3')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m3">Das <strong>epische Theater</strong> Brechts will den Zuschauer <strong>nicht emotional einfangen</strong> (keine Katharsis), sondern zum <strong>kritischen Nachdenken</strong> anregen. Der <strong>Verfremdungseffekt (V-Effekt)</strong> — Songs, Bild-Überschriften, Kommentare — durchbricht die Illusion und schafft <strong>Distanz</strong>, damit das Publikum selbst <strong>urteilt</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>4. Charakterisieren Sie Galilei.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m4')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m4">Galilei ist ein <strong>genialer, vernunftgeleiteter Forscher</strong> und zugleich ein <strong>Genussmensch</strong> (Essen, Wein). Er ist mutig im Denken, aber unter Folterandrohung <strong>feige</strong>: Er <strong>widerruft</strong>. Er ist <strong>kein strahlender Held</strong>, sondern eine <strong>widersprüchliche</strong> Figur — genau das will Brecht, damit der Zuschauer kritisch urteilt.</div>
    </div>

    <div class="theory-box">
        <p><strong>5. Warum widerruft Galilei?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m5')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m5">Die <strong>Inquisition</strong> droht ihm mit <strong>Folter</strong>. Aus <strong>Angst</strong> um sein Leben (und aus Liebe zum Leben/Genuss) <strong>widerruft</strong> er öffentlich seine Lehre. Der Widerruf ist ein <strong>Verrat</strong> an der Wahrheit, den Galilei später selbst als Versagen vor der <strong>Verantwortung der Wissenschaft</strong> verurteilt.</div>
    </div>

    <div class="theory-box">
        <p><strong>6. Was bedeutet „Unglücklich das Land, das Helden nötig hat"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m6')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m6">Andrea klagt nach dem Widerruf: „Unglücklich das Land, das keine Helden hat!" Galilei entgegnet: „Nein. <strong>Unglücklich das Land, das Helden nötig hat.</strong>" Brecht kritisiert damit das <strong>Opfer-Heldentum</strong>: Eine gerechte Gesellschaft sollte gar keine Märtyrer/Helden <strong>brauchen</strong> — nicht der einzelne Held, sondern <strong>vernünftige Verhältnisse</strong> sollen die Wahrheit schützen.</div>
    </div>

    <div class="theory-box">
        <p><strong>7. Welche Rolle spielt das Fernrohr?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m7')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m7">Das <strong>Fernrohr</strong> ist das Werkzeug der <strong>neuen, beweisenden Wissenschaft</strong>: Mit ihm beobachtet Galilei den Himmel (z. B. die Jupitermonde) und <strong>widerlegt</strong> das geozentrische Weltbild der Kirche. Es symbolisiert den <strong>Sieg der Beobachtung und Vernunft</strong> über den Autoritätsglauben.</div>
    </div>

    <div class="theory-box">
        <p><strong>8. Welche Verantwortung hat die Wissenschaft (laut Galilei)?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m8')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m8">Galilei sagt, „das einzige Ziel der Wissenschaft" sei es, „<em>die Mühseligkeit der menschlichen Existenz zu erleichtern</em>". Die Wissenschaft trägt also eine <strong>soziale Verantwortung</strong> und darf sich <strong>nicht der Macht beugen</strong>. In seinem Schlussmonolog erkennt Galilei, dass er mit dem Widerruf genau diese Verantwortung <strong>verraten</strong> hat.</div>
    </div>

    <div class="theory-box">
        <p><strong>9. Warum bleibt der Fortschritt trotz des Widerrufs erhalten?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m9')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m9">Weil Galilei unter Hausarrest heimlich die <strong>„Discorsi"</strong> (sein Hauptwerk) vollendet und <strong>Andrea</strong> das Manuskript <strong>ins Ausland schmuggelt</strong>. So lebt das <strong>Wissen weiter</strong>: Die Macht kann die Wahrheit unterdrücken, aber den <strong>Fortschritt</strong> nicht endgültig aufhalten.</div>
    </div>

    <div class="theory-box">
        <p><strong>10. Welchen Gegenwartsbezug hat das Stück?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m10')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m10">Brecht schreibt im <strong>Exil</strong>, im Angesicht des <strong>Faschismus</strong> (und später der <strong>Atombombe</strong>). Der historische Galilei-Stoff ist ein <strong>Gleichnis</strong> für die <strong>Verantwortung der Wissenschaft</strong> und für die Frage, wie der Einzelne (der Intellektuelle) sich gegenüber einer übermächtigen Autorität verhalten soll.</div>
    </div>

    <h4 style="color:#065f46; margin:22px 0 8px;">✍️ Schreibvorlagen — Struktur für jeden Prüfungsteil</h4>

    <div class="vorlage">
        <h5>A) Charakterisierung (Prüfungsteil II) — Einleitung / Hauptteil / Schluss</h5>
        <div class="teil">Einleitung:</div>
        <p class="redemittel">„Im Drama <em>Leben des Galilei</em> (1938/39) von Bertolt Brecht spielt die Figur des/der … eine zentrale Rolle."</p>
        <div class="teil">Hauptteil (Redemittel):</div>
        <ul>
            <li class="redemittel">„Sozial / als Typus wird … dargestellt als …"</li>
            <li class="redemittel">„Charakterlich zeichnet sich … durch … aus (z. B. genial, aber feige)."</li>
            <li class="redemittel">„Im Laufe der Handlung zeigt sich … (z. B. vom mutigen Forscher zum Widerruf zur Selbstanklage)."</li>
            <li class="redemittel">„In den Beziehungen zu … (Andrea, der Kirche) zeigt sich …"</li>
        </ul>
        <div class="teil">Schluss:</div>
        <p class="redemittel">„Zusammenfassend verkörpert die Figur … (z. B. den widersprüchlichen Wissenschaftler, der die Verantwortung verfehlt)."</p>
    </div>

    <div class="vorlage">
        <h5>B) Interpretation (Szene / Thema)</h5>
        <p class="redemittel">Einleitung: Werk/Autor/Jahr/Epoche + Gattung (episches Theater) + Deutungshypothese.</p>
        <p class="redemittel">Hauptteil: „Auffällig ist das Motiv des Fernrohrs / des Widerrufs …" · „Das Thema der Verantwortung zeigt sich in …" · „Vor dem Hintergrund des epischen Theaters bedeutet dies …" · immer mit Beleg.</p>
        <p class="redemittel">Schluss: „Die Analyse bestätigt, dass …"</p>
    </div>

    <div class="vorlage">
        <h5>C) Meinung / Stellungnahme (z. B. „Trägt die Wissenschaft Verantwortung?")</h5>
        <p class="redemittel">„Einerseits … andererseits …" · „Dafür spricht …, dagegen lässt sich einwenden …" · <strong>immer mit Beispiel/Beleg!</strong></p>
        <p class="redemittel">Schluss: „Abschließend vertrete ich die Auffassung, dass …, weil …"</p>
    </div>

    <div class="strategie">La Prüfungsteil II structura aduce 5 puncte: Einleitung (Werk/Autor/Jahr/Gattung) · Hauptteil cu Belege (scene) · Schluss cu deutung. Leagă de teme (Verantwortung / Wahrheit ↔ Macht / Widerruf)!</div>
`;

// ============================================
// Toggle Musterantwort
// ============================================
function toggleMuster(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
}

// ============================================
// INJECTARE
// ============================================
(function () {
    function injectTheory() {
        const t = document.getElementById('theory-container');
        if (t) t.innerHTML = theoryHTML;
        const tr = document.getElementById('training-container');
        if (tr) tr.innerHTML = trainingHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();
