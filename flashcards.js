// ============================================
// LERNKARTEN — Leben des Galilei (BAC germană maternă)
// Claudia Toth · Figuren · Werk/Epoche · Themen/Symbole · Zitate · Wortschatz
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; fără audio la nivel matern.
// ⚠️ Brecht d.1956 = NU gemeinfrei (PD 2027) → doar citate scurte, verificate.
// ============================================

const flashcardsData = [
    // === Figuren (7) ===
    { de: 'Bertolt Brecht', ro: 'Autorul (1898–1956) · Begründer des epischen Theaters' },
    { de: 'Leben des Galilei (1938/39)', ro: 'Werk · Drama des epischen Theaters, 15 Bilder' },
    { de: 'Galileo Galilei', ro: 'genialer Forscher, dar contradictoriu (genusssüchtig, feige); widerruft' },
    { de: 'Andrea Sarti', ro: 'Galileis Schüler; erst enttäuscht, dann Träger des Wissens (schmuggelt die „Discorsi")' },
    { de: 'die Inquisition / der Inquisitor', ro: 'puterea bisericii, care înăbușă adevărul' },
    { de: 'Papst Urban VIII. (Barberini)', ro: 'Mathematiker, dar ca Papst supus instituției' },
    { de: 'Virginia / Sagredo / der kleine Mönch', ro: 'fiica / prietenul sceptic / calugărul evlavios-savant' },

    // === Werk & Epoche (6) ===
    { de: 'das epische Theater', ro: 'forma de teatru a lui Brecht: gândire critică în loc de Einfühlung' },
    { de: 'der Verfremdungseffekt (V-Effekt)', ro: 'Songs, Bildtitel, Kommentare → Distanz (distanțare)' },
    { de: 'die Moderne / das Exildrama', ro: 'Epoche · scris 1938/39 în exil' },
    { de: 'die 15 Bilder', ro: 'Aufbau (statt Akten); erzählte Zeit 1609–1642 (28 de ani)' },
    { de: 'der Widerruf (Bild 13)', ro: 'Galilei widerruft unter Folterandrohung (sub amenințarea torturii)' },
    { de: 'die „Discorsi"', ro: 'opera principală a lui Galilei, terminată în secret + dusă peste graniță' },

    // === Themen & Symbole (6) ===
    { de: 'Wissenschaft &amp; Verantwortung', ro: 'tema centrală (răspunderea socială a științei)' },
    { de: 'Wahrheit ↔ Macht / Autorität', ro: 'noua cunoaștere contra dogmei Bisericii' },
    { de: 'Fortschritt &amp; das neue Zeitalter', ro: 'das kopernikanische Weltbild (heliocentric)' },
    { de: 'Vernunft ↔ Dogma / Glaube', ro: 'dovada/„Zweifel" contra Autoritätsglauben' },
    { de: 'das Fernrohr', ro: 'unealta științei care dovedește; simbolul observației/rațiunii' },
    { de: 'der Verrat / das „Heldentum"', ro: 'Widerruf; „Unglücklich das Land, das Helden nötig hat"' },

    // === Zitate (7) — cardul ESTE citatul ===
    { de: '„Unglücklich das Land, das keine Helden hat!"', ro: 'Andrea (după Widerruf)' },
    { de: '„Nein. Unglücklich das Land, das Helden nötig hat."', ro: 'Galilei (critica eroismului-jertfă)' },
    { de: '„…die Mühseligkeit der menschlichen Existenz zu erleichtern"', ro: 'scopul științei (după Galilei)' },
    { de: '„Wissen, gewonnen durch Zweifel"', ro: 'știința ca îndoială/dovadă (Vernunft)' },
    { de: 'der Widerruf', ro: 'Galilei se pleacă puterii — trădarea adevărului' },
    { de: 'der Schlussmonolog', ro: 'autoacuzarea lui Galilei (Verantwortung)' },
    { de: 'das kopernikanische Weltbild', ro: 'Pământul se învârte în jurul Soarelui (heliozentrisch)' },

    // === Wortschatz DE → RO (7) ===
    { de: 'die Wissenschaft', ro: 'știința' },
    { de: 'die Verantwortung', ro: 'răspunderea / responsabilitatea' },
    { de: 'der Widerruf / widerrufen', ro: 'retractarea / a retracta' },
    { de: 'die Wahrheit', ro: 'adevărul' },
    { de: 'die Macht', ro: 'puterea' },
    { de: 'der Forscher', ro: 'cercetătorul' },
    { de: 'der Verrat', ro: 'trădarea' }
];

// ============================================
// RUNTIME — render + flip (.flipped) + navigare (fără audio)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} Lernkarten:</strong> Figuren · Werk &amp; Epoche · Themen &amp; Symbole · Zitate · Wortschatz.<br>
            Klick auf die Karte für die Erklärung · Pfeile zum Blättern.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Karte 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Klick für die Erklärung</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Zurück</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Weiter →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.innerHTML = c.de;
    ro.innerHTML = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Karte ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
