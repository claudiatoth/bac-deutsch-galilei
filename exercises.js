// ============================================
// ÜBUNGEN — Leben des Galilei (BAC germană maternă)
// Claudia Toth · 5 Übungen: Multiple Choice + Lückentext (autoverificare)
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; & = &amp;
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ß/g, 'ss')
        .replace(/[.!?;:,]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
function answerMatches(input, accept) {
    const n = normalizeAnswer(input);
    if (!n) return false;
    return accept.some(a => normalizeAnswer(a) === n);
}

const ex1Data = {
    instr: '👇 Wähle die richtige Antwort. (Wissen über Werk, Epoche und Inhalt)',
    questions: [
        { q: 'Wer ist der Autor von „Leben des Galilei"?', options: ['Friedrich Dürrenmatt', 'Bertolt Brecht', 'Max Frisch', 'Thomas Mann'], correct: 1 },
        { q: 'In welche Epoche gehört das Werk?', options: ['in den Barock', 'in die Moderne (Exildrama)', 'in die Romantik', 'in die Weimarer Klassik'], correct: 1 },
        { q: 'Welcher Theaterform gehört das Werk an?', options: ['dem epischen Theater', 'dem Sonett', 'der Ballade', 'dem Volkslied'], correct: 0 },
        { q: 'Womit beweist Galilei das neue Weltbild?', options: ['mit einem Buch', 'mit dem Fernrohr', 'mit einer Rede', 'mit einem Gemälde'], correct: 1 },
        { q: 'Was tut Galilei unter Folterandrohung?', options: ['er flieht', 'er widerruft seine Lehre', 'er kämpft', 'er stirbt als Märtyrer'], correct: 1 },
        { q: 'Wer ist Andrea Sarti?', options: ['ein Inquisitor', 'Galileis Schüler', 'der Papst', 'Galileis Vater'], correct: 1 },
        { q: 'Was rettet am Ende das Wissen?', options: ['ein Wunder', 'die „Discorsi", die Andrea ins Ausland schmuggelt', 'ein neuer Papst', 'ein Freispruch'], correct: 1 }
    ]
};

const ex2Data = {
    instr: '👇 Ordne jedem Motiv / Zitat seine richtige Bedeutung zu.',
    questions: [
        { q: 'das Fernrohr', options: ['Werkzeug der beweisenden Wissenschaft', 'eine Waffe', 'ein Schmuckstück', 'ein Spielzeug'], correct: 0 },
        { q: 'der Widerruf', options: ['der Verrat an der Wahrheit', 'ein Sieg', 'ein Fest', 'ein Gebet'], correct: 0 },
        { q: '„Unglücklich das Land, das Helden nötig hat"', options: ['Kritik am Opfer-Heldentum', 'ein Lob der Helden', 'ein Kriegsruf', 'ein Segen'], correct: 0 },
        { q: 'die „Discorsi"', options: ['das gerettete Hauptwerk (der Fortschritt)', 'ein Gefängnis', 'ein Vertrag', 'ein Liebesgedicht'], correct: 0 },
        { q: 'der Verfremdungseffekt', options: ['Distanz statt Einfühlung (kritisches Denken)', 'mehr Gefühl', 'ein Bühnenbild', 'eine Melodie'], correct: 0 }
    ]
};

const ex3Data = {
    instr: '👇 Welcher Begriff ist gemeint? (wichtig für Subiect I &amp; II)',
    questions: [
        { q: 'Brechts Theaterform heißt …', options: ['episches Theater', 'klassisches Drama', 'absurdes Theater', 'Puppentheater'], correct: 0 },
        { q: 'Der Effekt, der Distanz schafft, ist der …', options: ['Verfremdungseffekt (V-Effekt)', 'Aha-Effekt', 'Treibhauseffekt', 'Dominoeffekt'], correct: 0 },
        { q: 'Das Weltbild, das die Erde um die Sonne kreisen lässt, heißt …', options: ['kopernikanisch / heliozentrisch', 'geozentrisch', 'ptolemäisch', 'mittelalterlich'], correct: 0 },
        { q: 'Ein zugespitzter, weiser Satz heißt …', options: ['Aphorismus / Sentenz', 'Metapher', 'Vergleich', 'Reim'], correct: 0 },
        { q: 'Ein Drama, das zum Nachdenken (statt Mitfühlen) bringt, ist …', options: ['episch (Brecht)', 'aristotelisch', 'lyrisch', 'barock'], correct: 0 }
    ]
};

const ex4Data = {
    instr: '👇 Ergänze die Sätze mit dem passenden Wort. (ä=ae, ö=oe, ü=ue gehen auch)',
    items: [
        { before: 'Das Drama „Leben des Galilei" schrieb Bertolt', after: '.', accept: ['Brecht'], hint: 'autorul', answer: 'Brecht' },
        { before: 'Es ist ein Beispiel für das', after: 'Theater.', accept: ['epische', 'epischen', 'episches'], hint: 'teatrul lui Brecht', answer: 'epische' },
        { before: 'Galilei beweist das neue Weltbild mit dem', after: '.', accept: ['Fernrohr', 'Teleskop'], hint: 'telescopul', answer: 'Fernrohr' },
        { before: 'Unter Folterandrohung', after: 'Galilei seine Lehre.', accept: ['widerruft', 'widerrief'], hint: 'retractează', answer: 'widerruft' },
        { before: 'Sein heimlich vollendetes Hauptwerk sind die', after: '.', accept: ['Discorsi'], hint: 'opera principală', answer: 'Discorsi' }
    ]
};

const ex5Data = {
    instr: '👇 Bewerbungsbrief (Subiect III): Wähle das Richtige.',
    questions: [
        { q: 'Welche zwei Elemente bringen je 2 Punkte?', options: ['Datum und Unterschrift', 'Betreffzeile und Anrede', 'Absender und Anlagen', 'Grußformel und Empfänger'], correct: 1 },
        { q: 'Welche Grußformel ist passend (formell)?', options: ['Tschüss und bis bald', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Servus'], correct: 2 },
        { q: 'Wie beginnt man den Brieftext, wenn man den Namen nicht kennt?', options: ['Hallo!', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag, Leute,'], correct: 1 },
        { q: 'Welcher Satz passt in eine Bewerbung?', options: ['Ich will unbedingt diesen Job.', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Gebt mir bitte die Stelle.', 'Ich brauche dringend Geld.'], correct: 1 }
    ]
};

function buildMC(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.questions.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' + it.q + '</label><div class="mc-options">';
        it.options.forEach(function (opt, j) {
            const id = prefix + '-q' + i + '-o' + j;
            html += '<div class="mc-option"><input type="radio" name="' + prefix + '-q' + i + '" id="' + id + '" value="' + j + '"><label for="' + id + '">' + opt + '</label></div>';
        });
        html += '</div><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkMC(data, prefix) {
    let correct = 0;
    data.questions.forEach(function (it, i) {
        const sel = document.querySelector('input[name="' + prefix + '-q' + i + '"]:checked');
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (sel && parseInt(sel.value, 10) === it.correct) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.options[it.correct]; }
        }
    });
    return { correct: correct, total: data.questions.length };
}

function resetMC(containerId, data, prefix) {
    data.questions.forEach(function (it, i) {
        const sels = document.querySelectorAll('input[name="' + prefix + '-q' + i + '"]');
        sels.forEach(function (s) { s.checked = false; });
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function buildLueckentext(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.items.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' +
            it.before + ' <input type="text" id="' + prefix + '-in-' + i + '" placeholder="(' + it.hint + ')" autocomplete="off"> ' + it.after +
            '</label><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkLueckentext(data, prefix) {
    let correct = 0;
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (input && answerMatches(input.value, it.accept)) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.answer; }
        }
    });
    return { correct: correct, total: data.items.length };
}

function resetLueckentext(data, prefix) {
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        if (input) input.value = '';
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function checkEx1() { return checkMC(ex1Data, 'ex1'); }
function checkEx2() { return checkMC(ex2Data, 'ex2'); }
function checkEx3() { return checkMC(ex3Data, 'ex3'); }
function checkEx4() { return checkLueckentext(ex4Data, 'ex4'); }
function checkEx5() { return checkMC(ex5Data, 'ex5'); }

function resetEx1() { resetMC('ex1-container', ex1Data, 'ex1'); }
function resetEx2() { resetMC('ex2-container', ex2Data, 'ex2'); }
function resetEx3() { resetMC('ex3-container', ex3Data, 'ex3'); }
function resetEx4() { resetLueckentext(ex4Data, 'ex4'); }
function resetEx5() { resetMC('ex5-container', ex5Data, 'ex5'); }

(function () {
    function buildAll() {
        buildMC('ex1-container', ex1Data, 'ex1');
        buildMC('ex2-container', ex2Data, 'ex2');
        buildMC('ex3-container', ex3Data, 'ex3');
        buildLueckentext('ex4-container', ex4Data, 'ex4');
        buildMC('ex5-container', ex5Data, 'ex5');
    }
    if (document.readyState !== 'loading') { buildAll(); }
    else { document.addEventListener('DOMContentLoaded', buildAll); }
})();
