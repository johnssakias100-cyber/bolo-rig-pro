/*
 * BOLO RIG PRO — πηγαίος κώδικας (src/App.jsx)
 * Ανακατασκευάστηκε τον Οκτ. 2026 από την έκδοση που τρέχει στο bolorig.vercel.app,
 * γιατί το παλιό App.js δεν είχε το νέο UI. Οι αρχικές λειτουργίες κρατούν τα
 * σύντομα ονόματα μεταβλητών της έκδοσης παραγωγής· οι νέες προσθήκες
 * (ιταλικά, χειροκίνητη επιλογή, ημερολόγιο, φελλοί) είναι γραμμένες καθαρά σε JSX.
 *
 * Build: esbuild src/App.jsx --bundle --minify --format=iife --outfile=app.js
 */
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
var o = { default: React }, L = React, xh = o, zh = ReactDOMClient;
var h = { navy: "#1F3864", navyDark: "#152747", sand: "#F6F2E7", bg: "#F6F2E7", deep: "#FBF8EF", surface: "#FFFFFF", raised: "#EFEAD9", line: "#E4DFCF", line2: "#CFC7B0", text: "#243244", muted: "#5A6472", faint: "#8A93A0", accent: "#1F3864", onAccent: "#FFFFFF", goldBrand: "#D4AF37", ok: "#2E6B3E", bad: "#AA3333", bulk: "#A2620F", shot: "#D9961A", torp: "#5B636D", gold: "#B8862F" }, xt = "'Fira Sans Condensed', 'Arial Narrow', sans-serif", Ot = "Arial, Helvetica, sans-serif";
var Lm = { el: { appSub: "Το εργαλείο του bolognese", tabCalc: "Υπολογισμός", tabSpacing: "Αποστάσεις", tabShots: "Βαρίδια", tabTorpedoes: "Τορπίλες", labelCount: "Τεμάχια βαριδιών", labelTarget: "Στόχος (γρ)", labelGroup: "Τρόπος κατανομής", labelFixed: "Α) Σταθερό νούμερο", labelVar: "Β) Μεταβλητό νούμερο", labelVarPer: "Αλλαγή νούμερου ανά:", fixedDesc: "Ίδιο νούμερο (±1 αν χρειαστεί)", varDesc: "Διαδοχικά νούμερα", labelDir: "Κατεύθυνση αύξησης", dirAsc: "▼ Μικρότερα → στριφτάρι", dirDesc: "▲ Μεγαλύτερα → στριφτάρι", btnReset2: "↺ Νέος υπολογισμός", btnCalc: "Υπολογισμός", resultLabel: "Αποτέλεσμα", targetLabel: "Στόχος", inRange: "✓ Εντός ορίων", outRange: "✗ Εκτός ορίων", composition: "Σύνθεση: στριφτάρι → φελλός", perPiece: "γρ / τεμ.", diagTitle: "Διάταξη, στριφτάρι = 0 ·", diagTotal: "cm σύνολο", floatTop: "Φελλός", fromLoop: "cm από στριφτάρι", loopLabel: "Στριφτάρι = 0 cm", loopRef: "σημείο αναφοράς", spacingTitle: "Αποστάσεις από στριφτάρι (0 cm) προς φελλό. Η γραμμή 1 είναι η πιο κοντινή στο στριφτάρι.", spacingRepeat: "Η τελευταία γραμμή επαναλαμβάνεται.", colPcs: "Τεμάχια", colGap: "Κενό (cm)", gapBefore: "Κενό πριν (cm)", gapAfter: "Κενό μετά (cm)", rowTypeShot: "Βαρίδια", rowTypeBulk: "Bulk", rowTypeTorp: "Τορπίλη", selectTorp: "Επιλογή τορπίλης", torpAuto: "Αυτόματο (%)", torpList: "Από λίστα", torpPct: "Ποσοστό στόχου (%)", previewTitle: "Προεπισκόπηση (στριφτάρι → φελλός)", loopBottom: "Στριφτάρι = 0 cm", pcsUnit: "τεμ.", perEvery: "ανά", repeats: "(επαναλαμβάνεται)", shotsTitle: "Βαρίδια", torpedoTitle: "Τορπίλες", btnReset: "↺ Επαναφορά", btnAdd: "+ Προσθήκη", labelCode: "Κωδικός", labelGrams: "Γραμμάρια", btnSave: "✓ Αποθήκευση", saveTitle: "Αποθήκευση ως", savePlaceholder: "π.χ. Χίος 2γρ", btnSaveOk: "Αποθήκευση", loadTitle: "Αποθηκευμένες ρυθμίσεις", btnLoad: "Φόρτωση", noPresets: "Δεν υπάρχουν αποθηκευμένες ρυθμίσεις. Πάτα το εικονίδιο αποθήκευσης για να κρατήσεις την τρέχουσα.", toastSaved: "✓ Αποθηκεύτηκε", toastLoaded: "↩ Φορτώθηκε", pcsOf: "τεμ.", grUnit: "γρ", footer: "BOLO RIG PRO", nearFloat: "Προσθήκη γραμμής, από το στριφτάρι προς τα πάνω", nearLoop: "↓ Κοντά στο στριφτάρι", bulkPer: "Απόσταση ανά βαρίδι (cm)", bulkTotal: "σύνολο", anchorLoop: "Από στριφτάρι", anchorFloat: "Από φελλό", fromFloatLbl: "Απόσταση από φελλό (cm)", belowFloat: "κάτω από φελλό", floatDist: "Φελλός από στριφτάρι (cm)", leaderLbl: "Παράμαλλο (cm)", leader: "Παράμαλλο", hook: "Αγκίστρι", auto: "αυτόματο", floatHint: "Τα bulk που μετράνε από φελλό χρειάζονται την απόσταση φελλού από το στριφτάρι. Χωρίς αυτήν, ο φελλός μπαίνει πάνω από όλα τα υπόλοιπα.", gapBeforeLoop: "Κενό πριν (cm)", tabRig: "Αρματωσιά", torpBadge: "ΤΟΡΠΙΛΗ", trayTitle: "Βαρίδια: πάτα με τη σειρά, από το στριφτάρι προς τα πάνω", multiBulk: "Bulk: επιλογή πολλών", placeAsBulk: "Τοποθέτηση ως bulk", distLbl: "Απόσταση από στριφτάρι (cm)", gapPrevLbl: "Κενό από το προηγούμενο (cm)", clearAll: "✕ Άδειασμα θέσεων", rigLenLbl: "Μήκος αρματωσιάς", startHint: "Πάτα το πρώτο βαρίδι, αυτό που μπαίνει πιο κοντά στο στριφτάρι.", applyRows: "Εφαρμογή γραμμών στη σειρά", rigEmpty: "Δεν έχει τοποθετηθεί ακόμα κανένα βαρίδι.", goSpacing: "← Στις Αποστάσεις", touchBtn: "Κολλητά (0)", atCm: (l) => `= ${l} cm από το στριφτάρι`, touchHint: "Με κενό 0 μπαίνει κολλητά στο προηγούμενο· κολλητά βαρίδια γίνονται bulk.", orderNo: "#", bulkStartLbl: "Αρχή bulk από στριφτάρι (cm)", torpStartLbl: "Αρχή τορπίλης από στριφτάρι (cm)", place: "Τοποθέτηση", removeLbl: "Αφαίρεση", cancel: "Άκυρο", autoMode: "Αυτόματη κατανομή από τις γραμμές. Πάτα ένα βαρίδι για να το μετακινήσεις με το χέρι.", manualMode: (l, t) => l === t ? `✓ Και τα ${t} βαρίδια στη θέση τους.` : `Τοποθετημένα ${l} από ${t}. Πάτα το επόμενο.`, backToAuto: "↺ Επαναφορά στην αυτόματη", rowsTitle: "Αυτόματη κατανομή (γραμμές)", unplacedWarn: (l) => `${l} βαρίδια δεν έχουν τοποθετηθεί ακόμα (καρτέλα Αποστάσεις).`, bulkOf: (l) => `Bulk: ${l} βαρίδια`, tapToEdit: "Πάτα μια γραμμή για αλλαγή θέσης.", orderTitle: "Σειρά βαριδιών (στριφτάρι → φελλός)", gets: "Παίρνει:", emptyRow: "Κενή: δεν περισσεύουν βαρίδια.", needCalc: "Κάνε πρώτα υπολογισμό για να δεις ποιο βαρίδι μπαίνει πού.", torpLen: "Μήκος τορπίλης (cm)", torpTitle: "Τορπίλη", torpNone: "Καμία", noTorpSel: "Δεν έχει επιλεγεί τορπίλη στον Υπολογισμό.", nextSpacing: "Επόμενο: Αποστάσεις →", nextRig: "Δες την αρματωσιά →", noResult: "Κάνε πρώτα υπολογισμό για να δεις την αρματωσιά.", goCalc: "← Στον υπολογισμό", lineLen: "Στριφτάρι → φελλός", weight: "Βάρος", plusTorp: "+ τορπίλη", inventory: "Αποθήκη", placedOk: (l) => `✓ Τοποθετημένα ${l} από ${l} βαρίδια`, placedLess: (l, t) => `Οι γραμμές έχουν ${l} από ${t} βαρίδια. Τα υπόλοιπα ${t - l} μπαίνουν με την τελευταία γραμμή.`, placedMore: (l, t) => `Οι γραμμές έχουν ${l} θέσεις, αλλά το αποτέλεσμα έχει ${t} βαρίδια. Οι ${l - t} θέσεις μένουν κενές.`, noRows: (l) => `Χωρίς γραμμές, τα ${l} βαρίδια μπαίνουν ανά 10 cm από το στριφτάρι.`, relaxedNote: (l, t, e) => `Με ${l} τεμ. και αλλαγή ανά ${t} δεν βγαίνει ακριβώς ο στόχος. Χρησιμοποιήθηκαν ${e} διαδοχικά νούμερα, κάποια με ένα τεμάχιο παραπάνω ή λιγότερο.`, shot: "Βαρίδι", torpedo: "Τορπίλη", save: "Αποθήκευση", load: "Αποθηκευμένα", clear: "Καθαρισμός", del: "Διαγραφή" }, en: { appSub: "The ultimate bolognese rig tool", tabCalc: "Calculate", tabSpacing: "Spacing", tabShots: "Shots", tabTorpedoes: "Torpedoes", labelCount: "Number of shots", labelTarget: "Target (g)", labelGroup: "Distribution mode", labelFixed: "A) Fixed size", labelVar: "B) Variable size", labelVarPer: "Change size every:", fixedDesc: "Same size (±1 if needed)", varDesc: "Sequential sizes", labelDir: "Direction", dirAsc: "▼ Smaller → swivel", dirDesc: "▲ Larger → swivel", btnReset2: "↺ New calculation", btnCalc: "Calculate", resultLabel: "Result", targetLabel: "Target", inRange: "✓ Within range", outRange: "✗ Out of range", composition: "Composition: swivel → float", perPiece: "g / pc.", diagTitle: "Layout, swivel = 0 ·", diagTotal: "cm total", floatTop: "Float", fromLoop: "cm from swivel", loopLabel: "Swivel = 0 cm", loopRef: "reference point", spacingTitle: "Distances from swivel (0 cm) toward float. Row 1 is closest to the swivel.", spacingRepeat: "Last rule repeats.", colPcs: "Pieces", colGap: "Gap (cm)", gapBefore: "Gap before (cm)", gapAfter: "Gap after (cm)", rowTypeShot: "Shots", rowTypeBulk: "Bulk", rowTypeTorp: "Torpedo", selectTorp: "Select torpedo", torpAuto: "Auto (%)", torpList: "From list", torpPct: "% of target", previewTitle: "Preview (swivel → float)", loopBottom: "Swivel = 0 cm", pcsUnit: "pcs", perEvery: "every", repeats: "(repeats)", shotsTitle: "Shots", torpedoTitle: "Torpedoes", btnReset: "↺ Reset", btnAdd: "+ Add", labelCode: "Code", labelGrams: "Grams", btnSave: "✓ Save", saveTitle: "Save as", savePlaceholder: "e.g. Lake 2g", btnSaveOk: "Save", loadTitle: "Saved setups", btnLoad: "Load", noPresets: "No saved setups yet. Tap the save icon to keep the current one.", toastSaved: "✓ Saved", toastLoaded: "↩ Loaded", pcsOf: "pcs.", grUnit: "g", footer: "BOLO RIG PRO", nearFloat: "Add row, from the swivel upward", nearLoop: "↓ Near swivel", bulkPer: "Spacing per shot (cm)", bulkTotal: "total", anchorLoop: "From swivel", anchorFloat: "From float", fromFloatLbl: "Distance from float (cm)", belowFloat: "below float", floatDist: "Float from swivel (cm)", leaderLbl: "Hooklength (cm)", leader: "Hooklength", hook: "Hook", auto: "auto", floatHint: "Bulks measured from the float need the float-to-swivel distance. Without it, the float sits above everything else.", gapBeforeLoop: "Gap before (cm)", tabRig: "Rig", torpBadge: "TORPEDO", trayTitle: "Shots: tap in order, from the swivel upward", multiBulk: "Bulk: select several", placeAsBulk: "Place as bulk", distLbl: "Distance from swivel (cm)", gapPrevLbl: "Gap from previous (cm)", clearAll: "✕ Clear positions", rigLenLbl: "Rig length", startHint: "Tap the first shot, the one closest to the swivel.", applyRows: "Apply rows to the sequence", rigEmpty: "No shots placed yet.", goSpacing: "← To Spacing", touchBtn: "Touching (0)", atCm: (l) => `= ${l} cm from the swivel`, touchHint: "Gap 0: sits touching the previous one. Touching shots become a bulk.", orderNo: "#", bulkStartLbl: "Bulk start from swivel (cm)", torpStartLbl: "Torpedo start from swivel (cm)", place: "Place", removeLbl: "Remove", cancel: "Cancel", autoMode: "Automatic layout from the rows. Tap a shot to move it by hand.", manualMode: (l, t) => l === t ? `✓ All ${t} shots placed.` : `Placed ${l} of ${t}. Tap the next one.`, backToAuto: "↺ Back to automatic", rowsTitle: "Automatic layout (rows)", unplacedWarn: (l) => `${l} shots are not placed yet (Spacing tab).`, bulkOf: (l) => `Bulk: ${l} shots`, tapToEdit: "Tap a line to change its position.", orderTitle: "Shot order (swivel → float)", gets: "Gets:", emptyRow: "Empty: no shots left.", needCalc: "Run a calculation first to see which shot goes where.", torpLen: "Torpedo length (cm)", torpTitle: "Torpedo", torpNone: "None", noTorpSel: "No torpedo selected in Calculate.", nextSpacing: "Next: Spacing →", nextRig: "See the rig →", noResult: "Run a calculation first to see the rig.", goCalc: "← Back to Calculate", lineLen: "Swivel → float", weight: "Weight", plusTorp: "+ torpedo", inventory: "Inventory", placedOk: (l) => `✓ Placed ${l} of ${l} shots`, placedLess: (l, t) => `Rows hold ${l} of ${t} shots. The remaining ${t - l} follow the last row.`, placedMore: (l, t) => `Rows hold ${l} places but the result has ${t} shots. ${l - t} places stay empty.`, noRows: (l) => `With no rows, the ${l} shots go every 10 cm from the swivel.`, relaxedNote: (l, t, e) => `With ${l} pcs changing every ${t}, the target can't be hit exactly. Used ${e} consecutive sizes, some with one piece more or less.`, shot: "Shot", torpedo: "Torpedo", save: "Save", load: "Saved setups", clear: "Clear", del: "Delete" } }, sh = [{ id: 1, code: "No 6/0", grams: 1.057 }, { id: 2, code: "No 5/0", grams: 0.705 }, { id: 3, code: "No 4/0", grams: 0.532 }, { id: 4, code: "No 3/0", grams: 0.475 }, { id: 5, code: "No 2/0", grams: 0.394 }, { id: 6, code: "No 1/0", grams: 0.37 }, { id: 7, code: "No 0", grams: 0.347 }, { id: 8, code: "No 1", grams: 0.288 }, { id: 9, code: "No 2", grams: 0.242 }, { id: 10, code: "No 3", grams: 0.194 }, { id: 11, code: "No 4", grams: 0.162 }, { id: 12, code: "No 6", grams: 0.102 }, { id: 13, code: "No 8", grams: 0.07 }, { id: 14, code: "No 10", grams: 0.04 }], dh = [{ id: "t1", code: "TOJ0020", grams: 0.2 }, { id: "t2", code: "TOJ0030", grams: 0.3 }, { id: "t3", code: "TOJ0040", grams: 0.4 }, { id: "t4", code: "TOJ0050", grams: 0.5 }, { id: "t5", code: "TOJ0060", grams: 0.6 }, { id: "t6", code: "TOJ0080", grams: 0.8 }, { id: "t7", code: "TOJ0100", grams: 1 }, { id: "t8", code: "TOJ0125", grams: 1.25 }, { id: "t9", code: "TOJ0150", grams: 1.5 }, { id: "t10", code: "TOJ0175", grams: 1.75 }, { id: "t11", code: "TOJ0200", grams: 2 }, { id: "t12", code: "TOJ0225", grams: 2.25 }, { id: "t13", code: "TOJ0250", grams: 2.5 }, { id: "t14", code: "TOJ0300", grams: 3 }, { id: "t15", code: "TOJ0350", grams: 3.5 }, { id: "t16", code: "TOJ0400", grams: 4 }, { id: "t17", code: "TOJ0450", grams: 4.5 }, { id: "t18", code: "TOJ0500", grams: 5 }, { id: "t19", code: "TOJ0600", grams: 6 }], rh = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa", "#00acc1", "#6d4c41"];
// ═══════════════════════════════════════════════════════════════════════════
//  ΠΡΟΣΘΗΚΕΣ (Οκτ. 2026): ιταλικά, χειροκίνητη επιλογή βαριδιών, ημερολόγιο
// ═══════════════════════════════════════════════════════════════════════════

// ─── Νέα κείμενα (ελληνικά / αγγλικά) ──────────────────────────────────────
Object.assign(Lm.el, {
  tabLog: "Ημερολόγιο",
  manualTitle: "Χειροκίνητη επιλογή",
  manualHint: "Διάλεξε βαρίδια από την αποθήκη. Το βάρος αθροίζεται αυτόματα.",
  manualTotal: "Σύνολο",
  manualDiff: "Διαφορά από στόχο",
  manualApply: "Χρήση στην αρματωσιά",
  manualClear: "Καθαρισμός",
  manualWithTorp: "μαζί με τορπίλη",
  manualApplied: "✓ Η επιλογή σου μπήκε στο αποτέλεσμα",
});
Object.assign(Lm.en, {
  tabLog: "Log",
  manualTitle: "Manual selection",
  manualHint: "Pick shots from your inventory. The weight adds up automatically.",
  manualTotal: "Total",
  manualDiff: "Difference from target",
  manualApply: "Use in the rig",
  manualClear: "Clear",
  manualWithTorp: "including torpedo",
  manualApplied: "✓ Your selection is now the result",
});

// ─── Ιταλικά ──────────────────────────────────────────────────────────────
Lm.it = {
  appSub: "Lo strumento per la bolognese",
  tabCalc: "Calcolo",
  tabSpacing: "Distanze",
  tabShots: "Pallini",
  tabTorpedoes: "Olivette",
  labelCount: "Numero di pallini",
  labelTarget: "Obiettivo (g)",
  labelGroup: "Distribuzione",
  labelFixed: "A) Misura fissa",
  labelVar: "B) Misura variabile",
  labelVarPer: "Cambia misura ogni:",
  fixedDesc: "Stessa misura (±1 se serve)",
  varDesc: "Misure in sequenza",
  labelDir: "Direzione",
  dirAsc: "▼ Più piccoli → girella",
  dirDesc: "▲ Più grandi → girella",
  btnReset2: "↺ Nuovo calcolo",
  btnCalc: "Calcola",
  resultLabel: "Risultato",
  targetLabel: "Obiettivo",
  inRange: "✓ Nei limiti",
  outRange: "✗ Fuori limite",
  composition: "Composizione: girella → galleggiante",
  perPiece: "g / pz.",
  diagTitle: "Schema, girella = 0 ·",
  diagTotal: "cm totali",
  floatTop: "Galleggiante",
  fromLoop: "cm dalla girella",
  loopLabel: "Girella = 0 cm",
  loopRef: "punto di riferimento",
  spacingTitle: "Distanze dalla girella (0 cm) verso il galleggiante. La riga 1 è la più vicina alla girella.",
  spacingRepeat: "L'ultima regola si ripete.",
  colPcs: "Pezzi",
  colGap: "Distanza (cm)",
  gapBefore: "Distanza prima (cm)",
  gapAfter: "Distanza dopo (cm)",
  rowTypeShot: "Pallini",
  rowTypeBulk: "Bulk",
  rowTypeTorp: "Olivetta",
  selectTorp: "Scegli olivetta",
  torpAuto: "Auto (%)",
  torpList: "Da elenco",
  torpPct: "% dell'obiettivo",
  previewTitle: "Anteprima (girella → galleggiante)",
  loopBottom: "Girella = 0 cm",
  pcsUnit: "pz",
  perEvery: "ogni",
  repeats: "(si ripete)",
  shotsTitle: "Pallini",
  torpedoTitle: "Olivette",
  btnReset: "↺ Ripristina",
  btnAdd: "+ Aggiungi",
  labelCode: "Codice",
  labelGrams: "Grammi",
  btnSave: "✓ Salva",
  saveTitle: "Salva come",
  savePlaceholder: "es. Lago 2g",
  btnSaveOk: "Salva",
  loadTitle: "Montature salvate",
  btnLoad: "Carica",
  noPresets: "Nessuna montatura salvata. Tocca l'icona di salvataggio per conservare quella attuale.",
  toastSaved: "✓ Salvata",
  toastLoaded: "↩ Caricata",
  pcsOf: "pz.",
  grUnit: "g",
  footer: "BOLO RIG PRO",
  nearFloat: "Aggiungi riga, dalla girella verso l'alto",
  nearLoop: "↓ Vicino alla girella",
  bulkPer: "Distanza per pallino (cm)",
  bulkTotal: "totale",
  anchorLoop: "Dalla girella",
  anchorFloat: "Dal galleggiante",
  fromFloatLbl: "Distanza dal galleggiante (cm)",
  belowFloat: "sotto il galleggiante",
  floatDist: "Galleggiante dalla girella (cm)",
  leaderLbl: "Finale (cm)",
  leader: "Finale",
  hook: "Amo",
  auto: "auto",
  floatHint: "I bulk misurati dal galleggiante richiedono la distanza galleggiante-girella. Senza di essa, il galleggiante resta sopra a tutto il resto.",
  gapBeforeLoop: "Distanza prima (cm)",
  tabRig: "Montatura",
  torpBadge: "OLIVETTA",
  trayTitle: "Pallini: toccali in ordine, dalla girella verso l'alto",
  multiBulk: "Bulk: selezionane diversi",
  placeAsBulk: "Posiziona come bulk",
  distLbl: "Distanza dalla girella (cm)",
  gapPrevLbl: "Distanza dal precedente (cm)",
  clearAll: "✕ Svuota posizioni",
  rigLenLbl: "Lunghezza montatura",
  startHint: "Tocca il primo pallino, quello più vicino alla girella.",
  applyRows: "Applica le righe alla sequenza",
  rigEmpty: "Nessun pallino posizionato.",
  goSpacing: "← Alle Distanze",
  touchBtn: "A contatto (0)",
  atCm: (l) => `= ${l} cm dalla girella`,
  touchHint: "Distanza 0: a contatto con il precedente. I pallini a contatto diventano un bulk.",
  orderNo: "#",
  bulkStartLbl: "Inizio bulk dalla girella (cm)",
  torpStartLbl: "Inizio olivetta dalla girella (cm)",
  place: "Posiziona",
  removeLbl: "Rimuovi",
  cancel: "Annulla",
  autoMode: "Schema automatico dalle righe. Tocca un pallino per spostarlo a mano.",
  manualMode: (l, t) => l === t ? `✓ Tutti e ${t} i pallini posizionati.` : `Posizionati ${l} su ${t}. Tocca il successivo.`,
  backToAuto: "↺ Torna all'automatico",
  rowsTitle: "Schema automatico (righe)",
  unplacedWarn: (l) => `${l} pallini non sono ancora posizionati (scheda Distanze).`,
  bulkOf: (l) => `Bulk: ${l} pallini`,
  tapToEdit: "Tocca una riga per cambiarne la posizione.",
  orderTitle: "Ordine dei pallini (girella → galleggiante)",
  gets: "Riceve:",
  emptyRow: "Vuota: non restano pallini.",
  needCalc: "Esegui prima un calcolo per vedere dove va ogni pallino.",
  torpLen: "Lunghezza olivetta (cm)",
  torpTitle: "Olivetta",
  torpNone: "Nessuna",
  noTorpSel: "Nessuna olivetta scelta in Calcolo.",
  nextSpacing: "Avanti: Distanze →",
  nextRig: "Vedi la montatura →",
  noResult: "Esegui prima un calcolo per vedere la montatura.",
  goCalc: "← Torna al Calcolo",
  lineLen: "Girella → galleggiante",
  weight: "Peso",
  plusTorp: "+ olivetta",
  inventory: "Inventario",
  placedOk: (l) => `✓ Posizionati ${l} su ${l} pallini`,
  placedLess: (l, t) => `Le righe contengono ${l} pallini su ${t}. I restanti ${t - l} seguono l'ultima riga.`,
  placedMore: (l, t) => `Le righe hanno ${l} posti ma il risultato ha ${t} pallini. ${l - t} posti restano vuoti.`,
  noRows: (l) => `Senza righe, i ${l} pallini vanno ogni 10 cm dalla girella.`,
  relaxedNote: (l, t, e) => `Con ${l} pz che cambiano ogni ${t}, l'obiettivo non si raggiunge esattamente. Usate ${e} misure consecutive, alcune con un pezzo in più o in meno.`,
  shot: "Pallino",
  torpedo: "Olivetta",
  save: "Salva",
  load: "Montature salvate",
  clear: "Svuota",
  del: "Elimina",
  tabLog: "Diario",
  manualTitle: "Selezione manuale",
  manualHint: "Scegli i pallini dal tuo inventario. Il peso si somma automaticamente.",
  manualTotal: "Totale",
  manualDiff: "Differenza dall'obiettivo",
  manualApply: "Usa nella montatura",
  manualClear: "Svuota",
  manualWithTorp: "olivetta inclusa",
  manualApplied: "✓ La tua selezione è ora il risultato",
};

// ─── Φελλοί (1.0.11) ─────────────────────────────────────────────────────────
Object.assign(Lm.el, {
  floatsTitle: "Φελλοί", floatLbl: "Φελλός", floatNone: "— Χωρίς φελλό —",
  floatEmptyHint: "Δεν έχεις φελλούς ακόμα. Πρόσθεσέ τους στην Αποθήκη και ο στόχος θα μπαίνει αυτόματα.",
  floatGo: "Στους φελλούς ↓", newFloat: "+ Νέος φελλός", floatNameLbl: "Όνομα φελλού", floatNamePh: "π.χ. Menta",
  nominalLbl: "Ονομαστικό (γρ)", realLbl: "Πραγματικό (γρ)", addSize: "+ Προσθήκη νούμερου", delFloat: "Διαγραφή φελλού",
  confirmDelFloat: (n) => `Διαγραφή του φελλού «${n}» με όλα τα νούμερά του;`,
  floatDup: "Υπάρχει ήδη φελλός με αυτό το όνομα.", noSizes: "Πρόσθεσε το πρώτο νούμερο αυτού του φελλού.",
  floatsEmpty: "Η λίστα είναι άδεια. Πρόσθεσε τον πρώτο σου φελλό.",
  realHint: "Πραγματικό = η φόρτωση που μέτρησες· αυτό μπαίνει στον στόχο. Αν μείνει κενό, μπαίνει το ονομαστικό.",
  sizesCount: (n) => n === 1 ? "1 νούμερο" : `${n} νούμερα`,
});
Object.assign(Lm.en, {
  floatsTitle: "Floats", floatLbl: "Float", floatNone: "— No float —",
  floatEmptyHint: "No floats yet. Add them in the Inventory and the target fills in automatically.",
  floatGo: "To floats ↓", newFloat: "+ New float", floatNameLbl: "Float name", floatNamePh: "e.g. Menta",
  nominalLbl: "Nominal (g)", realLbl: "Actual (g)", addSize: "+ Add size", delFloat: "Delete float",
  confirmDelFloat: (n) => `Delete the float "${n}" and all its sizes?`,
  floatDup: "A float with this name already exists.", noSizes: "Add the first size of this float.",
  floatsEmpty: "The list is empty. Add your first float.",
  realHint: "Actual = the load you measured; it becomes the target. If left empty, the nominal is used.",
  sizesCount: (n) => n === 1 ? "1 size" : `${n} sizes`,
});
Object.assign(Lm.it, {
  floatsTitle: "Galleggianti", floatLbl: "Galleggiante", floatNone: "— Nessun galleggiante —",
  floatEmptyHint: "Nessun galleggiante ancora. Aggiungili nel Magazzino e l'obiettivo si compila da solo.",
  floatGo: "Ai galleggianti ↓", newFloat: "+ Nuovo galleggiante", floatNameLbl: "Nome del galleggiante", floatNamePh: "es. Menta",
  nominalLbl: "Nominale (g)", realLbl: "Reale (g)", addSize: "+ Aggiungi misura", delFloat: "Elimina galleggiante",
  confirmDelFloat: (n) => `Eliminare il galleggiante «${n}» con tutte le sue misure?`,
  floatDup: "Esiste già un galleggiante con questo nome.", noSizes: "Aggiungi la prima misura di questo galleggiante.",
  floatsEmpty: "L'elenco è vuoto. Aggiungi il tuo primo galleggiante.",
  realHint: "Reale = la portata che hai misurato; diventa l'obiettivo. Se resta vuoto, si usa il nominale.",
  sizesCount: (n) => n === 1 ? "1 misura" : `${n} misure`,
});

// Γλώσσες: σειρά στο μενού, σύντομος κωδικός στο κουμπί, όνομα στη λίστα.
// Νέα γλώσσα = μία ακόμη εγγραφή σε καθένα από τα τρία.
var LANGS = ["el", "en", "it"];
var LANG_BTN = { el: "GR", en: "EN", it: "IT" };
var LANG_NAMES = { el: "Ελληνικά", en: "English", it: "Italiano" };
function initialLang() {
  var saved = gu("lang", null);
  if (LANGS.includes(saved)) return saved;
  var nav = (typeof navigator !== "undefined" && (navigator.language || "")).toLowerCase();
  if (nav.startsWith("it")) return "it";
  if (nav.startsWith("el")) return "el";
  if (nav) return "en";
  return "el";
}

// ─── Εικονίδιο καρτέλας «Ημερολόγιο» (ίδιο στυλ με τα υπόλοιπα) ─────────────
var LogIcon = (
  <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
    <rect x="8" y="3" width="24" height="34" rx="3" fill="#1F3864" />
    <rect x="11" y="3" width="2.4" height="34" fill="#152747" />
    <rect x="15.5" y="9" width="13" height="2.4" rx="1.2" fill="#E8C547" />
    <rect x="15.5" y="14.5" width="10" height="1.8" rx=".9" fill="#C9D3E0" />
    <rect x="15.5" y="19" width="12" height="1.8" rx=".9" fill="#C9D3E0" />
    <path d="M16 28.5 q4-4.2 8 0 q-4 4.2-8 0 Z" fill="#D9961A" />
    <path d="M24 28.5 l3.2-2.3 v4.6 Z" fill="#D9961A" />
    <circle cx="18" cy="28" r=".7" fill="#1F3864" />
    <path d="M26 3 v8 l2-1.6 2 1.6 V3 Z" fill="#D4AF37" />
  </svg>
);

// ─── Χειροκίνητη επιλογή βαριδιών (δωρεάν) ──────────────────────────────────
function ManualPicker({ shots, torpedo, target, direction, t, onApply }) {
  var [open, setOpen] = React.useState(false);
  var [counts, setCounts] = React.useState({});
  var list = React.useMemo(() => [...shots].sort((a, b) => b.grams - a.grams), [shots]);
  var pcs = list.reduce((s, x) => s + (counts[x.id] || 0), 0);
  var shotGrams = list.reduce((s, x) => s + (counts[x.id] || 0) * x.grams, 0);
  var total = shotGrams + (torpedo ? torpedo.grams : 0);
  var hasTarget = target > 0;
  var diff = total - target;
  var ok = hasTarget && total <= target - 1e-3 && total >= target - 0.06;
  var step = (id, d) => setCounts((c) => {
    var n = Math.max(0, (c[id] || 0) + d);
    var next = { ...c };
    if (n) next[id] = n; else delete next[id];
    return next;
  });
  var apply = () => {
    var items = [];
    list.forEach((x) => { for (var k = 0; k < (counts[x.id] || 0); k++) items.push(x); });
    if (direction !== "asc") items.reverse();
    if (torpedo) items.push(torpedo);
    onApply({ success: ok, items, total, manual: true });
  };
  var fmt = (g) => (Math.round(g * 1000) / 1000).toFixed(3);
  return (
    <Le>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", border: "none", padding: 0, cursor: "pointer", fontFamily: Ot, color: h.navy, fontSize: 15, fontWeight: 800 }}
      >
        <span>✋ {t.manualTitle}</span>
        <span style={{ fontSize: 13, color: h.muted }}>{pcs ? `${pcs} ${t.pcsUnit} · ${fmt(total)} ${t.grUnit}` : ""} {open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ marginTop: 10 }}>
          <div style={{ fontSize: 13, color: h.muted, marginBottom: 10, lineHeight: 1.4 }}>{t.manualHint}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {list.map((x) => {
              var c = counts[x.id] || 0;
              return (
                <div key={x.id} style={{ display: "flex", alignItems: "center", gap: 4, background: c ? `${h.shot}1F` : h.deep, border: `1px solid ${c ? h.shot : h.line}`, borderRadius: 5, padding: "4px 4px 4px 8px" }}>
                  <div style={{ flex: 1, minWidth: 0, lineHeight: 1.15 }}>
                    <div style={{ fontWeight: 800, fontSize: 13, color: h.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{x.code}</div>
                    <div style={{ fontSize: 11, color: h.muted }}>{x.grams} {t.grUnit}</div>
                  </div>
                  <button aria-label="-" onClick={() => step(x.id, -1)} disabled={!c} style={{ ...ql, width: 30, minHeight: 30, padding: 0, opacity: c ? 1 : 0.4 }}>−</button>
                  <span style={{ minWidth: 18, textAlign: "center", fontFamily: xt, fontWeight: 800, fontSize: 16, color: c ? h.navy : h.faint }}>{c}</span>
                  <button aria-label="+" onClick={() => step(x.id, 1)} style={{ ...ql, width: 30, minHeight: 30, padding: 0, color: h.navy, borderColor: h.navy }}>+</button>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 12, background: h.deep, borderRadius: 5, padding: "10px 12px", border: `1px solid ${ok ? h.ok : hasTarget && pcs ? h.bad + "66" : h.line}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 13, color: h.muted }}>{t.manualTotal} · {pcs} {t.pcsUnit}{torpedo ? ` (${t.manualWithTorp} ${torpedo.code})` : ""}</span>
              <span style={{ fontFamily: xt, fontWeight: 800, fontSize: 24, color: ok ? h.ok : h.navy }}>{fmt(total)} {t.grUnit}</span>
            </div>
            {hasTarget && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginTop: 4 }}>
                <span style={{ color: h.muted }}>{t.manualDiff} ({fmt(target)})</span>
                <span style={{ fontWeight: 800, color: ok ? h.ok : h.bad }}>{diff > 0 ? "+" : ""}{fmt(diff)} {ok ? t.inRange : pcs ? t.outRange : ""}</span>
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button onClick={() => setCounts({})} disabled={!pcs} style={{ ...ql, minHeight: 44, opacity: pcs ? 1 : 0.5 }}>{t.manualClear}</button>
            <button onClick={apply} disabled={!pcs} style={an(!pcs)}>{t.manualApply} →</button>
          </div>
        </div>
      )}
    </Le>
  );
}

// ─── Ημερολόγιο ψαρέματος (Pro — ξεκλείδωτο κατά τη δοκιμή) ─────────────────
var LOG_T = {
  el: {
    title: "Ημερολόγιο ψαρέματος", add: "+ Νέα καταχώριση", edit: "Επεξεργασία", save: "✓ Αποθήκευση", cancel: "Άκυρο", del: "Διαγραφή", confirmDel: "Διαγραφή αυτής της καταχώρισης;",
    empty: "Δεν υπάρχουν καταχωρίσεις ακόμα. Κράτα σημειώσεις για κάθε εξόρμηση: πού, πώς και τι έπιασες.",
    date: "Ημερομηνία", place: "Τοποθεσία", placePh: "π.χ. Λιμάνι Πειραιά", depth: "Βάθος (μ)", rig: "Αρματωσιά", rigNone: "—", rigCurrent: "Τρέχων υπολογισμός", float: "Φελλός (γρ)",
    line: "Παράμαλλο", diam: "Διάμετρος (mm)", len: "Μήκος (cm)", hook: "Αγκίστρι (νούμερο)", wind: "Άνεμος", windDir: "Διεύθυνση", bf: "Μποφόρ", calm: "Άπνοια",
    bait: "Δόλωμα", catch: "Ψαριά", catchPh: "π.χ. 6 σαργοί, 2 λαβράκια", notes: "Σημειώσεις", savedToast: "✓ Αποθηκεύτηκε στο ημερολόγιο", photos: "Φωτογραφίες", addPhoto: "📷 Προσθήκη φωτογραφίας", photoBusy: "Επεξεργασία…", photoMax: (n) => `Έως ${n} φωτογραφίες ανά καταχώριση`, photoErr: "Η φωτογραφία δεν αποθηκεύτηκε", entries: (n) => n === 1 ? "1 καταχώριση" : `${n} καταχωρίσεις`,
    dirs: { N: "Βόρειος", NE: "Βορειοανατολικός", E: "Ανατολικός", SE: "Νοτιοανατολικός", S: "Νότιος", SW: "Νοτιοδυτικός", W: "Δυτικός", NW: "Βορειοδυτικός" },
  },
  en: {
    title: "Fishing log", add: "+ New entry", edit: "Edit", save: "✓ Save", cancel: "Cancel", del: "Delete", confirmDel: "Delete this entry?",
    empty: "No entries yet. Keep notes for every session: where, how and what you caught.",
    date: "Date", place: "Location", placePh: "e.g. Piraeus harbour", depth: "Depth (m)", rig: "Rig", rigNone: "—", rigCurrent: "Current calculation", float: "Float (g)",
    line: "Hooklength", diam: "Diameter (mm)", len: "Length (cm)", hook: "Hook (size)", wind: "Wind", windDir: "Direction", bf: "Beaufort", calm: "Calm",
    bait: "Bait", catch: "Catch", catchPh: "e.g. 6 bream, 2 bass", notes: "Notes", savedToast: "✓ Saved to the log", photos: "Photos", addPhoto: "📷 Add photo", photoBusy: "Processing…", photoMax: (n) => `Up to ${n} photos per entry`, photoErr: "The photo could not be saved", entries: (n) => n === 1 ? "1 entry" : `${n} entries`,
    dirs: { N: "North", NE: "North-east", E: "East", SE: "South-east", S: "South", SW: "South-west", W: "West", NW: "North-west" },
  },
  it: {
    title: "Diario di pesca", add: "+ Nuova voce", edit: "Modifica", save: "✓ Salva", cancel: "Annulla", del: "Elimina", confirmDel: "Eliminare questa voce?",
    empty: "Nessuna voce. Annota ogni uscita: dove, come e cosa hai preso.",
    date: "Data", place: "Luogo", placePh: "es. Porto di Genova", depth: "Profondità (m)", rig: "Montatura", rigNone: "—", rigCurrent: "Calcolo attuale", float: "Galleggiante (g)",
    line: "Finale", diam: "Diametro (mm)", len: "Lunghezza (cm)", hook: "Amo (numero)", wind: "Vento", windDir: "Direzione", bf: "Beaufort", calm: "Calma",
    bait: "Esca", catch: "Pescato", catchPh: "es. 6 saraghi, 2 spigole", notes: "Note", savedToast: "✓ Salvato nel diario", photos: "Foto", addPhoto: "📷 Aggiungi foto", photoBusy: "Elaborazione…", photoMax: (n) => `Fino a ${n} foto per voce`, photoErr: "Impossibile salvare la foto", entries: (n) => n === 1 ? "1 voce" : `${n} voci`,
    dirs: { N: "Tramontana (N)", NE: "Grecale (NE)", E: "Levante (E)", SE: "Scirocco (SE)", S: "Ostro (S)", SW: "Libeccio (SW)", W: "Ponente (W)", NW: "Maestrale (NW)" },
  },
};
Object.assign(LOG_T.el, { floatModel: "Μοντέλο φελλού" });
Object.assign(LOG_T.en, { floatModel: "Float model" });
Object.assign(LOG_T.it, { floatModel: "Modello di galleggiante" });
var WIND_DIRS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var todayISO = () => {
  var d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
var fmtDate = (iso, lang) => {
  if (!iso) return "";
  var [y, m, d] = iso.split("-").map(Number);
  try { return new Date(y, m - 1, d).toLocaleDateString(lang === "el" ? "el-GR" : lang === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  catch (e) { return iso; }
};
// ─── Φωτογραφίες ημερολογίου (Pro) ──────────────────────────────────────────
// Συμπιέζονται στο κινητό (~1280px, JPEG) και αποθηκεύονται ΜΟΝΟ στη συσκευή,
// σε IndexedDB (όχι localStorage, που έχει όριο ~5 MB). Η καταχώριση κρατά
// μόνο τα αναγνωριστικά τους στο πεδίο photos.
var MAX_PHOTOS = 4;
var photoDbP = null;
var photoDb = () => photoDbP || (photoDbP = new Promise((res, rej) => {
  var r = indexedDB.open("bolorig-photos", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("photos");
  r.onsuccess = () => res(r.result);
  r.onerror = () => { photoDbP = null; rej(r.error); };
}));
var photoTx = (mode, fn) => photoDb().then((db) => new Promise((res, rej) => {
  var tx = db.transaction("photos", mode), req = fn(tx.objectStore("photos"));
  tx.oncomplete = () => res(req && req.result);
  tx.onerror = tx.onabort = () => rej(tx.error);
}));
var photoPut = (id, blob) => photoTx("readwrite", (st) => st.put(blob, id));
var photoGet = (id) => photoTx("readonly", (st) => st.get(id));
var photoDel = (ids) => ids && ids.length ? photoTx("readwrite", (st) => { ids.forEach((i) => st.delete(i)); }).catch(() => {}) : Promise.resolve();
async function compressPhoto(file) {
  var MAX = 1280, src, bmp = null, w, ht, tmpUrl = null;
  try { bmp = await createImageBitmap(file, { imageOrientation: "from-image" }); src = bmp; w = bmp.width; ht = bmp.height; }
  catch (e) {
    tmpUrl = URL.createObjectURL(file);
    src = await new Promise((res, rej) => { var im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = tmpUrl; });
    w = src.naturalWidth; ht = src.naturalHeight;
  }
  var k = Math.min(1, MAX / Math.max(w, ht)), c = document.createElement("canvas");
  c.width = Math.round(w * k); c.height = Math.round(ht * k);
  c.getContext("2d").drawImage(src, 0, 0, c.width, c.height);
  if (bmp && bmp.close) bmp.close();
  if (tmpUrl) URL.revokeObjectURL(tmpUrl);
  return await new Promise((res, rej) => c.toBlob((b) => b ? res(b) : rej(new Error("toBlob")), "image/jpeg", 0.8));
}
function usePhotoUrl(id) {
  var [url, setUrl] = React.useState(null);
  React.useEffect(() => {
    var alive = true, u = null;
    photoGet(id).then((b) => { if (b && alive) { u = URL.createObjectURL(b); setUrl(u); } }).catch(() => {});
    return () => { alive = false; if (u) URL.revokeObjectURL(u); };
  }, [id]);
  return url;
}
function PhotoThumb({ id, size, onOpen, onRemove }) {
  var url = usePhotoUrl(id);
  return (
    <div style={{ position: "relative", width: size, height: size, borderRadius: 6, overflow: "hidden", background: h.raised, border: `1px solid ${h.line}`, flexShrink: 0 }}>
      {url && <img src={url} alt="" onClick={onOpen} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", cursor: onOpen ? "zoom-in" : "default" }} />}
      {onRemove && <button type="button" aria-label="×" onClick={onRemove} style={{ position: "absolute", top: 4, right: 4, width: 28, height: 28, borderRadius: 14, border: "none", background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 18, lineHeight: "28px", padding: 0, cursor: "pointer" }}>×</button>}
    </div>
  );
}
function PhotoViewer({ id, onClose }) {
  var url = usePhotoUrl(id);
  return (
    <div role="dialog" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, paddingTop: "calc(12px + env(safe-area-inset-top, 0px))", paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))", cursor: "zoom-out" }}>
      {url && <img src={url} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 4 }} />}
      <button type="button" aria-label="×" onClick={onClose} style={{ position: "absolute", top: "calc(12px + env(safe-area-inset-top, 0px))", right: 12, width: 40, height: 40, borderRadius: 20, border: "none", background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 24, cursor: "pointer" }}>×</button>
    </div>
  );
}

var emptyEntry = () => ({ id: null, date: todayISO(), place: "", depth: "", rigName: "", floatG: "", floatName: "", rigDesc: "", lineDiam: "", lineLen: "", hook: "", windDir: "", bf: "", bait: "", catch: "", notes: "", photos: [] });

function FishingLog({ lang, presets, current, toast }) {
  var L2 = LOG_T[lang] || LOG_T.el;
  var [entries, setEntries] = React.useState(() => { var v = gu("log", []); return Array.isArray(v) ? v : []; });
  var [form, setForm] = React.useState(null);
  var [openId, setOpenId] = React.useState(null);
  var [viewId, setViewId] = React.useState(null);
  var [busy, setBusy] = React.useState(false);
  var fileRef = React.useRef(null);
  React.useEffect(() => { mu("log", entries); }, [entries]);
  var places = React.useMemo(() => [...new Set(entries.map((x) => x.place).filter(Boolean))], [entries]);
  var set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  var pickRig = (val) => {
    if (val === "") { setForm((f) => ({ ...f, rigName: "", rigDesc: "" })); return; }
    if (val === "__current" && current) { setForm((f) => ({ ...f, rigName: L2.rigCurrent, floatG: current.floatG || f.floatG, floatName: current.floatName || f.floatName || "", rigDesc: current.desc })); return; }
    var p = presets.find((x) => String(x.id) === val);
    if (p) setForm((f) => ({ ...f, rigName: p.name, floatG: p.grams || f.floatG, floatName: p.floatName || f.floatName || "", lineLen: f.lineLen || p.leaderCm || "", rigDesc: p.grams ? `${p.grams} g` : "" }));
  };
  var addPhotos = async (files) => {
    var room = MAX_PHOTOS - (form.photos || []).length;
    var list = Array.from(files || []).slice(0, Math.max(0, room));
    if (!list.length) return;
    setBusy(true);
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) {}
    var ids = [];
    try {
      for (var f of list) {
        var b = await compressPhoto(f);
        var pid = `p${Date.now()}${Math.random().toString(36).slice(2, 7)}`;
        await photoPut(pid, b);
        ids.push(pid);
      }
    } catch (e) { toast && toast(L2.photoErr, false); }
    finally {
      if (ids.length) setForm((fm) => fm && { ...fm, photos: [...(fm.photos || []), ...ids] });
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };
  var removePhoto = (pid) => setForm((fm) => ({ ...fm, photos: (fm.photos || []).filter((x) => x !== pid) }));
  var cancel = () => {
    var orig = form._orig || [];
    photoDel((form.photos || []).filter((x) => !orig.includes(x)));
    setForm(null);
  };
  var save = () => {
    var { _orig, ...rest } = form;
    var e = { ...rest, id: rest.id || Date.now() };
    photoDel((_orig || []).filter((x) => !(e.photos || []).includes(x)));
    setEntries((list) => [e, ...list.filter((x) => x.id !== e.id)].sort((a, b) => (b.date || "").localeCompare(a.date || "") || b.id - a.id));
    setForm(null); setOpenId(e.id); toast && toast(L2.savedToast);
  };
  var remove = (id) => { if (window.confirm(L2.confirmDel)) { var gone = entries.find((x) => x.id === id); photoDel(gone && gone.photos); setEntries((l) => l.filter((x) => x.id !== id)); setOpenId(null); } };
  var inp = { width: "100%", minHeight: 40, padding: "8px 10px", border: `1px solid ${h.line2}`, borderRadius: 5, fontFamily: Ot, fontSize: 15, color: h.text, background: h.surface, boxSizing: "border-box" };
  var F2 = ({ label, children, span }) => (
    <label style={{ display: "block", gridColumn: span ? "1 / -1" : undefined }}>
      <div style={{ fontSize: 12, color: h.muted, fontWeight: 500, marginBottom: 4 }}>{label}</div>
      {children}
    </label>
  );
  var Badge = <span style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 800, fontStyle: "italic", fontSize: 13, color: h.navy, background: h.goldBrand, padding: "1px 6px 2px 5px", borderRadius: 3, marginLeft: 8 }}>PRO</span>;

  if (form) {
    var rigSel = form.rigName === L2.rigCurrent ? "__current" : (presets.find((p) => p.name === form.rigName) || {}).id;
    return (
      <Le>
        <div style={{ fontSize: 17, fontWeight: 800, color: h.navy, marginBottom: 12 }}>{form.id ? L2.edit : L2.add.replace("+ ", "")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {F2({ label: L2.date, children: <input type="date" value={form.date} onChange={(ev) => set("date", ev.target.value)} style={inp} /> })}
          {F2({ label: L2.depth, children: <input type="number" inputMode="decimal" value={form.depth} onChange={(ev) => set("depth", ev.target.value)} style={inp} /> })}
          {F2({ span: true, label: L2.place, children: (
            <>
              <input list="bolo-places" value={form.place} placeholder={L2.placePh} onChange={(ev) => set("place", ev.target.value)} style={inp} />
              <datalist id="bolo-places">{places.map((p) => <option key={p} value={p} />)}</datalist>
            </>
          ) })}
          {F2({ span: true, label: L2.rig, children: (
            <select value={rigSel == null ? "" : String(rigSel)} onChange={(ev) => pickRig(ev.target.value)} style={inp}>
              <option value="">{form.rigName && rigSel == null ? form.rigName : L2.rigNone}</option>
              {current && <option value="__current">{L2.rigCurrent}{current.floatG ? ` (${current.floatG} g)` : ""}</option>}
              {presets.map((p) => <option key={p.id} value={String(p.id)}>{p.name}</option>)}
            </select>
          ) })}
          {F2({ span: true, label: L2.floatModel, children: <input value={form.floatName || ""} placeholder="Menta 2.0" onChange={(ev) => set("floatName", ev.target.value)} style={inp} /> })}
          {F2({ label: L2.float, children: <input type="number" inputMode="decimal" value={form.floatG} onChange={(ev) => set("floatG", ev.target.value)} style={inp} /> })}
          {F2({ label: L2.hook, children: <input value={form.hook} onChange={(ev) => set("hook", ev.target.value)} style={inp} /> })}
          {F2({ label: `${L2.line} · ${L2.diam}`, children: <input type="number" inputMode="decimal" step="0.01" placeholder="0.14" value={form.lineDiam} onChange={(ev) => set("lineDiam", ev.target.value)} style={inp} /> })}
          {F2({ label: `${L2.line} · ${L2.len}`, children: <input type="number" inputMode="decimal" placeholder="50" value={form.lineLen} onChange={(ev) => set("lineLen", ev.target.value)} style={inp} /> })}
          {F2({ label: `${L2.wind} · ${L2.windDir}`, children: (
            <select value={form.windDir} onChange={(ev) => set("windDir", ev.target.value)} style={inp}>
              <option value="">—</option>
              {WIND_DIRS.map((d) => <option key={d} value={d}>{L2.dirs[d]}</option>)}
            </select>
          ) })}
          {F2({ label: `${L2.wind} · ${L2.bf}`, children: (
            <select value={form.bf} onChange={(ev) => set("bf", ev.target.value)} style={inp}>
              <option value="">—</option>
              {Array.from({ length: 13 }, (_, i) => <option key={i} value={String(i)}>{i === 0 ? `0 · ${L2.calm}` : `${i} bf`}</option>)}
            </select>
          ) })}
          {F2({ span: true, label: L2.bait, children: <input value={form.bait} onChange={(ev) => set("bait", ev.target.value)} style={inp} /> })}
          {F2({ span: true, label: L2.catch, children: <input value={form.catch} placeholder={L2.catchPh} onChange={(ev) => set("catch", ev.target.value)} style={inp} /> })}
          <div style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontSize: 12, color: h.muted, fontWeight: 500, marginBottom: 4, display: "flex", alignItems: "center" }}>{L2.photos}{Badge}</div>
            {(form.photos || []).length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                {form.photos.map((pid) => <PhotoThumb key={pid} id={pid} size={76} onOpen={() => setViewId(pid)} onRemove={() => removePhoto(pid)} />)}
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" multiple onChange={(ev) => addPhotos(ev.target.files)} style={{ display: "none" }} />
            {(form.photos || []).length < MAX_PHOTOS ? (
              <button type="button" disabled={busy} onClick={() => fileRef.current && fileRef.current.click()} style={{ ...ql, minHeight: 44, width: "100%", opacity: busy ? 0.6 : 1 }}>{busy ? L2.photoBusy : L2.addPhoto}</button>
            ) : (
              <div style={{ fontSize: 12, color: h.muted }}>{L2.photoMax(MAX_PHOTOS)}</div>
            )}
          </div>
          {F2({ span: true, label: L2.notes, children: <textarea rows={3} value={form.notes} onChange={(ev) => set("notes", ev.target.value)} style={{ ...inp, resize: "vertical" }} /> })}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <button onClick={cancel} style={{ ...ql, minHeight: 44 }}>{L2.cancel}</button>
          <button onClick={save} disabled={!form.date || busy} style={an(!form.date || busy)}>{L2.save}</button>
        </div>
        {viewId && <PhotoViewer id={viewId} onClose={() => setViewId(null)} />}
      </Le>
    );
  }

  var row = (k, v) => v ? (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 14, padding: "4px 0", borderBottom: `1px dashed ${h.line}` }}>
      <span style={{ color: h.muted }}>{k}</span><span style={{ fontWeight: 700, textAlign: "right" }}>{v}</span>
    </div>
  ) : null;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: h.navy, display: "flex", alignItems: "center" }}>{L2.title}{Badge}</div>
        <span style={{ fontSize: 12, color: h.muted }}>{entries.length ? L2.entries(entries.length) : ""}</span>
      </div>
      <button onClick={() => setForm({ ...emptyEntry(), _orig: [] })} style={{ ...an(false), width: "100%", marginBottom: 12 }}>{L2.add}</button>
      {entries.length === 0 && <Le><div style={{ fontSize: 14, lineHeight: 1.5, color: h.muted }}>{L2.empty}</div></Le>}
      {entries.map((x) => {
        var isOpen = openId === x.id;
        var wind = [x.windDir ? L2.dirs[x.windDir] : "", x.bf !== "" && x.bf != null ? `${x.bf} bf` : ""].filter(Boolean).join(" · ");
        return (
          <Le key={x.id} style={{ padding: 0, overflow: "hidden" }}>
            <button onClick={() => setOpenId(isOpen ? null : x.id)} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "12px 14px", cursor: "pointer", fontFamily: Ot, display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ background: h.navy, color: "#fff", borderRadius: 5, padding: "6px 8px", textAlign: "center", minWidth: 52, borderBottom: `3px solid ${h.goldBrand}` }}>
                <div style={{ fontFamily: xt, fontWeight: 800, fontSize: 20, lineHeight: 1 }}>{x.date ? Number(x.date.slice(8, 10)) : "?"}</div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{fmtDate(x.date, lang).replace(/^\d+\s*/, "").replace(/\s*\d{4}.*$/, "")}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: h.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{x.place || "—"}</div>
                <div style={{ fontSize: 12, color: h.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {[x.photos && x.photos.length ? `📷 ${x.photos.length}` : "", x.depth ? `${x.depth} m` : "", x.rigName, wind, x.catch].filter(Boolean).join(" · ")}
                </div>
              </div>
              <span style={{ color: h.muted }}>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 14px 12px" }}>
                {row(L2.date, fmtDate(x.date, lang))}
                {row(L2.place, x.place)}
                {row(L2.depth, x.depth ? `${x.depth} m` : "")}
                {row(L2.rig, [x.rigName, (x.rigDesc || "").replace(/^[^·]*× · /, "")].filter(Boolean).join(" · "))}
                {row(L2.float, [x.floatName, x.floatG ? `${x.floatG} g` : ""].filter(Boolean).join(" · "))}
                {row(L2.line, [x.lineDiam ? `Ø ${x.lineDiam} mm` : "", x.lineLen ? `${x.lineLen} cm` : ""].filter(Boolean).join(" · "))}
                {row(L2.hook, x.hook)}
                {row(L2.wind, wind)}
                {row(L2.bait, x.bait)}
                {row(L2.catch, x.catch)}
                {x.photos && x.photos.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                    {x.photos.map((pid) => <PhotoThumb key={pid} id={pid} size={88} onOpen={() => setViewId(pid)} />)}
                  </div>
                )}
                {x.notes ? <div style={{ fontSize: 14, marginTop: 8, whiteSpace: "pre-wrap", lineHeight: 1.45 }}>{x.notes}</div> : null}
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  <button onClick={() => setForm({ ...emptyEntry(), ...x, _orig: x.photos || [] })} style={{ ...ql, minHeight: 38, flex: 1 }}>{L2.edit}</button>
                  <button onClick={() => remove(x.id)} style={{ ...ql, minHeight: 38, color: h.bad, borderColor: `${h.bad}88` }}>{L2.del}</button>
                </div>
              </div>
            )}
          </Le>
        );
      })}
      {viewId && <PhotoViewer id={viewId} onClose={() => setViewId(null)} />}
    </>
  );
}

function qm(l) {
  return l.reduce((t, e) => t + e.grams, 0);
}
function Ym(l, t, e, a, n, u) {
  let i = l.length, f = Math.ceil(t / e);
  for (let c = 0; c <= 3; c++) {
    let g = Math.max(1, e - c), b = e + c, S = [];
    for (let p = 1; p <= i; p++) p * g <= t && p * b >= t && S.push(p);
    S.sort((p, y) => Math.abs(p - f) - Math.abs(y - f) || y - p);
    for (let p of S) {
      let y = null;
      for (let z = 0; z <= i - p && !y; z++) {
        let C = l.slice(z, z + p).map((r) => r.grams), D = [], d = (r, m, T) => {
          if (y) return;
          let O = p - r;
          if (O === 0) {
            m === 0 && T >= n && T <= u && (y = { si: z, cs: [...D], tot: T });
            return;
          }
          if (m < g * O || m > b * O || T + m * C[p - 1] > u + 1e-9 || T + m * C[r] < n - 1e-9) return;
          let _ = [];
          for (let M = g; M <= b; M++) _.push(M);
          _.sort((M, U) => Math.abs(M - e) - Math.abs(U - e));
          for (let M of _) D.push(M), d(r + 1, m - M, T + M * C[r]), D.pop();
        };
        d(0, t, 0);
      }
      if (y) {
        let z = y.cs.map((D, d) => ({ shot: l[y.si + d], c: D }));
        a !== "asc" && (z = z.reverse());
        let C = [];
        return z.forEach((D) => {
          for (let d = 0; d < D.c; d++) C.push(D.shot);
        }), { success: true, items: C, total: y.tot, exact: c === 0, sizesUsed: p };
      }
    }
  }
  return null;
}
function Gm(l, t, e, a, n) {
  if (e <= 0) return { success: false, items: [], total: 0 };
  let u = [...l].sort((y, z) => z.grams - y.grams), i = t - 1e-3, f = t - 0.06, c = (y) => y <= i && y >= f;
  if (a === "fixed") {
    for (let y of u) {
      let z = y.grams * e;
      if (c(z)) return { success: true, items: Array(e).fill(y), total: z };
    }
    for (let y = 0; y < u.length - 1; y++) {
      let z = u[y], C = u[y + 1];
      for (let D = 1; D < e; D++) {
        let d = z.grams * D + C.grams * (e - D);
        if (c(d)) return { success: true, items: [...Array(D).fill(z), ...Array(e - D).fill(C)], total: d };
      }
    }
    return { success: false, items: Array(e).fill(u[0]), total: u[0].grams * e };
  }
  let g = Ym(u, e, a, n, f, i);
  if (g) return g;
  let b = [], S = i;
  for (let y = 0; y < e; y++) {
    let z = S / (e - y), C = u.find((D) => D.grams <= z) || u[u.length - 1];
    b.push(C), S -= C.grams;
  }
  let p = qm(b);
  return { success: c(p), items: b, total: p };
}
function Rc(l) {
  let t = [], e = 0;
  for (; e < l.length; ) {
    let a = l[e], n = e;
    for (; n < l.length && l[n].code === a.code; ) n++;
    t.push({ shot: a, cnt: n - e }), e = n;
  }
  return t;
}
var pu = 0.5, qe = 3, vh = 10, Xm = (l) => {
  let t = parseFloat(l.bulkPer);
  return t > 0 ? t : pu;
}, bh = (l, t) => t * Xm(l);
function jm(l, t, e, a) {
  let n = t.some((D) => D.type !== "torpedo") ? t : [{ id: "default", type: "shot", count: String(Math.max(1, l.length)), spacing: "10" }, ...t], u = -1;
  n.forEach((D, d) => {
    D.type !== "torpedo" && (u = d);
  });
  let i = [], f = [], c = 0, g = 0, b = false, S = false;
  for (let D = 0; D < n.length; D++) {
    let d = n[D], r = D === u, m = parseFloat(d.spacing) || 0;
    if (d.type === "torpedo") {
      if (!e || S) continue;
      b || (c += m), b = false;
      let _ = parseFloat(d.torpLen) > 0 ? parseFloat(d.torpLen) : qe;
      i.push({ shot: e, distFromHook: c + _ / 2, torpStart: c, torpEnd: c + _, spacingCm: m, rowType: "torpedo", rowId: d.id }), c += _, S = true;
      continue;
    }
    let T = parseInt(d.count) || 1;
    if (d.type === "bulk") {
      let _ = [];
      for (let X = 0; X < T && !(g >= l.length && !r); X++) _.push(l[Math.min(g, l.length - 1)]), g++;
      if (r) for (; g < l.length; ) _.push(l[g]), g++;
      if (!_.length) continue;
      let M = _.length, U = bh(d, M);
      if (d.anchor === "float") {
        f.push({ row: d, shots: _, L: U });
        continue;
      }
      let N = c + (parseFloat(d.spacingBefore) || 0);
      _.forEach((X, F) => i.push({ shot: X, distFromHook: N + (F + 0.5) * U / M, rowType: "bulk", bulkIndex: F, bulkId: d.id, bulkStart: N, bulkEnd: N + U, bulkLen: U, bulkCount: M, anchor: "loop" })), c = N + U + (parseFloat(d.spacing) || 0), b = true;
      continue;
    }
    for (let _ = 0; _ < T && !(g >= l.length && !r); _++) {
      let M = Math.min(g, l.length - 1);
      b || (c += m), b = false, i.push({ shot: l[M], distFromHook: c, spacingCm: 0, rowType: "shot", rowId: d.id }), g++;
    }
    if (r && g < l.length) for (; g < l.length; ) c += m, i.push({ shot: l[g], distFromHook: c, spacingCm: m, rowType: "shot", rowId: d.id }), g++;
  }
  e && !S && (b || (c += 10), i.push({ shot: e, distFromHook: c + qe / 2, torpStart: c, torpEnd: c + qe, spacingCm: 10, rowType: "torpedo" }), c += qe);
  let p = i.reduce((D, d) => {
    var r, m;
    return Math.max(D, (m = (r = d.bulkEnd) != null ? r : d.torpEnd) != null ? m : d.distFromHook);
  }, 0), y = a > 0 ? a : p + f.reduce((D, d) => Math.max(D, (parseFloat(d.row.fromFloat) || 0) + d.L), 0);
  f.forEach(({ row: D, shots: d, L: r }) => {
    let m = y - (parseFloat(D.fromFloat) || 0), T = d.length, O = m - r;
    d.forEach((_, M) => i.push({ shot: _, distFromHook: O + (M + 0.5) * r / T, rowType: "bulk", bulkIndex: M, bulkId: D.id, bulkStart: O, bulkEnd: m, bulkLen: r, bulkCount: T, anchor: "float", fromFloat: parseFloat(D.fromFloat) || 0 }));
  });
  let z = i.reduce((D, d) => {
    var r, m;
    return Math.max(D, (m = (r = d.bulkEnd) != null ? r : d.torpEnd) != null ? m : d.distFromHook);
  }, 0), C = a > 0 || f.length ? Math.max(y, z) : z;
  return { positions: i, totalCm: Math.round(C * 10) / 10, floatSet: a > 0 || f.length > 0 };
}
function hh(l, t, e, a) {
  let n = {};
  l.forEach((C) => {
    n[C.key] = C;
  }), t && (n.torp = t);
  let u = pu, i = [], f = 0, c = null, g = 0, b = () => c === "shot" ? g : f;
  e.forEach((C) => {
    let D = n[C.key];
    if (!D) return;
    let d = Math.max(0, parseFloat(C.gap) || 0);
    if (C.key === "torp") {
      let r = parseFloat(C.len) > 0 ? parseFloat(C.len) : qe, m = b() + d;
      i.push({ kind: "torp", it: D, start: m, end: m + r, key: C.key }), f = m + r, c = "torp";
    } else {
      let r = d === 0 && c === "shot", m = d === 0 ? b() + u : b() + d;
      i.push({ kind: "shot", it: D, c: m, key: C.key, touch: r, seat: d === 0 && c !== "shot" && c !== null || d === 0 && c === null }), g = m, c = "shot";
    }
  });
  let S = [], p = 0;
  for (; p < i.length; ) {
    let C = i[p];
    if (C.kind === "torp") {
      S.push({ shot: C.it, distFromHook: (C.start + C.end) / 2, torpStart: C.start, torpEnd: C.end, rowType: "torpedo", key: C.key }), p++;
      continue;
    }
    let D = p + 1;
    for (; D < i.length && i[D].kind === "shot" && i[D].touch; ) D++;
    let d = i.slice(p, D);
    if (d.length === 1) S.push({ shot: C.it, distFromHook: C.c, rowType: "shot", key: C.key, seated: !!C.seat });
    else {
      let r = d[0].c - pu, m = d[d.length - 1].c, T = "b" + d[0].key;
      d.forEach((O, _) => S.push({ shot: O.it, distFromHook: O.c, rowType: "bulk", bulkId: T, bulkIndex: _, bulkStart: r, bulkEnd: m, bulkLen: m - r, bulkCount: d.length, anchor: "loop", key: O.key }));
    }
    p = D;
  }
  let y = S.reduce((C, D) => {
    var d, r;
    return Math.max(C, (r = (d = D.bulkEnd) != null ? d : D.torpEnd) != null ? r : D.distFromHook);
  }, 0), z = Math.round(y * 100) / 100;
  return { positions: S, totalCm: z + vh, rigTop: z, floatSet: false };
}
var nn = ({ d: l, size: t = 20 }) => o.default.createElement("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, l), un = { save: o.default.createElement(o.default.Fragment, null, o.default.createElement("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), o.default.createElement("path", { d: "M17 21v-8H7v8" }), o.default.createElement("path", { d: "M7 3v5h8" })), folder: o.default.createElement("path", { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), calc: o.default.createElement(o.default.Fragment, null, o.default.createElement("path", { d: "M12 2v14" }), o.default.createElement("path", { d: "M12 16a3 3 0 1 1-3 3" }), o.default.createElement("rect", { x: "10", y: "3", width: "4", height: "6", rx: "2" })), ruler: o.default.createElement(o.default.Fragment, null, o.default.createElement("path", { d: "M4 20 20 4" }), o.default.createElement("path", { d: "M8 16l-2-2M11 13l-2-2M14 10l-2-2M17 7l-2-2" })), shots: o.default.createElement(o.default.Fragment, null, o.default.createElement("circle", { cx: "12", cy: "5", r: "2" }), o.default.createElement("circle", { cx: "12", cy: "12", r: "2.5" }), o.default.createElement("circle", { cx: "12", cy: "19", r: "3" })), torp: o.default.createElement("ellipse", { cx: "12", cy: "12", rx: "4", ry: "8" }), x: o.default.createElement(o.default.Fragment, null, o.default.createElement("path", { d: "M18 6 6 18" }), o.default.createElement("path", { d: "M6 6l12 12" })) }, tn = "#5B636D", Ii = "#9AA3AD", Qm = "#2F353C", yh = "#E8C547", Pi = "#A07A22", hu = { calc: o.default.createElement("svg", { width: "34", height: "34", viewBox: "0 0 40 40", "aria-hidden": "true" }, o.default.createElement("rect", { x: "7", y: "2.5", width: "26", height: "35", rx: "4", fill: "#1F3864" }), o.default.createElement("rect", { x: "10", y: "6", width: "20", height: "8.5", rx: "1.5", fill: "#E4ECDD" }), o.default.createElement("rect", { x: "20.5", y: "8", width: "2", height: "4.5", rx: ".5", fill: "#1F3864" }), o.default.createElement("rect", { x: "24", y: "8", width: "2", height: "4.5", rx: ".5", fill: "#1F3864" }), o.default.createElement("rect", { x: "27.2", y: "8", width: "1.4", height: "4.5", rx: ".5", fill: "#1F3864" }), [0, 1, 2, 3].map((l) => [0, 1, 2, 3].map((t) => o.default.createElement("rect", { key: `${l}${t}`, x: 10 + t * 5.2, y: 17.5 + l * 4.8, width: "4", height: "3.4", rx: "1", fill: t === 0 && l < 2 || t === 3 && l === 3 ? "#D4AF37" : "#D7DCE3" })))), ruler: o.default.createElement("svg", { width: "34", height: "34", viewBox: "0 0 40 40", "aria-hidden": "true" }, o.default.createElement("path", { d: "M23 25.5 L37.5 32.5 L35.8 36.8 L20.5 29.8 Z", fill: yh, stroke: Pi, strokeWidth: "1", strokeLinejoin: "round" }), [0, 1, 2, 3, 4, 5].map((l) => {
  let t = 24 + l * 2.2, e = 27.6 + l * 1.06;
  return o.default.createElement("line", { key: l, x1: t, y1: e, x2: t - 0.5, y2: e + (l % 2 ? 1.6 : 2.6), stroke: "#1F3864", strokeWidth: ".8" });
}), o.default.createElement("path", { d: "M36.2 33 L38.6 34.2 L37.4 37.4 L35 36.3 Z", fill: "#AEB6C2", stroke: "#6B7480", strokeWidth: ".7" }), o.default.createElement("circle", { cx: "17", cy: "17", r: "13", fill: yh, stroke: Pi, strokeWidth: "1.2" }), Array.from({ length: 24 }).map((l, t) => {
  let e = t / 24 * Math.PI * 2, a = t % 2 ? 11.3 : 10.2;
  return o.default.createElement("line", { key: t, x1: 17 + Math.cos(e) * a, y1: 17 + Math.sin(e) * a, x2: 17 + Math.cos(e) * 12.6, y2: 17 + Math.sin(e) * 12.6, stroke: "#1F3864", strokeWidth: ".8" });
}), o.default.createElement("circle", { cx: "17", cy: "17", r: "8.4", fill: "none", stroke: Pi, strokeWidth: ".9" }), o.default.createElement("circle", { cx: "17", cy: "17", r: "5.6", fill: "none", stroke: Pi, strokeWidth: ".9" }), o.default.createElement("rect", { x: "12.8", y: "16", width: "8.4", height: "2.2", rx: "1.1", fill: "#4A3B12" })), rig: o.default.createElement("svg", { width: "34", height: "34", viewBox: "0 0 40 40", "aria-hidden": "true" }, o.default.createElement("line", { x1: "20", y1: "1.5", x2: "20", y2: "8", stroke: "#F2551D", strokeWidth: "1.8", strokeLinecap: "round" }), o.default.createElement("line", { x1: "20", y1: "17", x2: "20", y2: "30", stroke: "#5A6472", strokeWidth: "1.3" }), o.default.createElement("line", { x1: "20", y1: "33", x2: "20", y2: "36", stroke: "#8FA3B8", strokeWidth: ".9" }), o.default.createElement("ellipse", { cx: "20", cy: "12.5", rx: "4.2", ry: "5.2", fill: "#2E9BEF" }), o.default.createElement("path", { d: "M15.8 12.5 A4.2 5.2 0 0 1 24.2 12.5 Z", fill: "#E9ECEF" }), o.default.createElement("line", { x1: "15.9", y1: "13.4", x2: "24.1", y2: "11.6", stroke: "#1F2A33", strokeWidth: ".9" }), o.default.createElement("ellipse", { cx: "20", cy: "12.5", rx: "4.2", ry: "5.2", fill: "none", stroke: "#9AA3AD", strokeWidth: ".6" }), o.default.createElement("path", { d: "M20 18.5 C21.5 19.7 21.6 23.3 20 24.5 C18.4 23.3 18.5 19.7 20 18.5 Z", fill: tn }), [26.2, 28.6].map((l) => o.default.createElement("circle", { key: l, cx: "20", cy: l, r: "1.3", fill: tn })), o.default.createElement("rect", { x: "18.6", y: "30.2", width: "2.8", height: "3", rx: "1", fill: "#D4AF37" }), o.default.createElement("path", { d: "M20 35.5 v1.8 a1.9 1.9 0 0 1 -3.8 0 v-.6", fill: "none", stroke: "#243244", strokeWidth: "1.1", strokeLinecap: "round" })), shots: o.default.createElement("svg", { width: "34", height: "34", viewBox: "0 0 40 40", "aria-hidden": "true" }, o.default.createElement("rect", { x: "3.5", y: "8", width: "21", height: "27", rx: "2", fill: "#E6EEF8", stroke: "#8FA8C8", strokeWidth: "1" }), [7.5, 11.5, 15.5, 19.5].map((l) => o.default.createElement("circle", { key: l, cx: l + 1, cy: "31.2", r: "1.9", fill: tn })), o.default.createElement("rect", { x: "2.5", y: "5", width: "23", height: "6", rx: "1.5", fill: "#1F3864" }), o.default.createElement("rect", { x: "5.5", y: "14", width: "17", height: "11", rx: "1.5", fill: "#1F3864" }), o.default.createElement("rect", { x: "7.5", y: "17", width: "13", height: "4.5", rx: ".8", fill: "#FFFFFF" }), [[32, 14, 4.2], [34.6, 24.5, 4], [28.6, 32.8, 3.8]].map(([l, t, e], a) => o.default.createElement("g", { key: a }, o.default.createElement("circle", { cx: l, cy: t, r: e, fill: tn }), o.default.createElement("circle", { cx: l - e * 0.35, cy: t - e * 0.35, r: e * 0.38, fill: Ii, opacity: ".7" }), o.default.createElement("path", { d: `M${l - e * 0.75} ${t + e * 0.1} Q${l} ${t - e * 0.45} ${l + e * 0.8} ${t - e * 0.05}`, stroke: Qm, strokeWidth: "1.1", fill: "none", strokeLinecap: "round" })))), torp: o.default.createElement("svg", { width: "34", height: "34", viewBox: "0 0 40 40", "aria-hidden": "true" }, o.default.createElement("rect", { x: "2.5", y: "2.5", width: "22", height: "33", rx: "2", fill: "#FFFFFF", stroke: "#CFC7B0", strokeWidth: "1" }), o.default.createElement("rect", { x: "9.5", y: "5", width: "8", height: "2.4", rx: "1.2", fill: "#E4DFCF" }), o.default.createElement("path", { d: "M2.5 10.5 H24.5 V24 L2.5 29 Z", fill: "#1F3864" }), o.default.createElement("path", { d: "M2.5 29 L24.5 24 V33.5 a2 2 0 0 1 -2 2 H4.5 a2 2 0 0 1 -2 -2 Z", fill: "#D4AF37" }), [0, 1, 2].map((l) => [0, 1].map((t) => o.default.createElement("rect", { key: `${l}${t}`, x: 5 + l * 6.3, y: 13 + t * 4, width: "2", height: "2", fill: "#FFFFFF", opacity: ".85" }))), o.default.createElement("g", { transform: "rotate(-28 13 21)" }, o.default.createElement("ellipse", { cx: "13", cy: "21", rx: "2.2", ry: "5", fill: Ii, stroke: "#FFFFFF", strokeWidth: ".6" }), o.default.createElement("ellipse", { cx: "12.2", cy: "19.5", rx: ".7", ry: "2.6", fill: "#FFFFFF", opacity: ".6" })), o.default.createElement("g", { transform: "rotate(12 31 15)" }, o.default.createElement("path", { d: "M31 6.5 C34.5 9 34.8 21 31 23.5 C27.2 21 27.5 9 31 6.5 Z", fill: tn }), o.default.createElement("ellipse", { cx: "29.9", cy: "13", rx: ".9", ry: "4", fill: Ii, opacity: ".7" })), o.default.createElement("g", { transform: "rotate(-18 34 30)" }, o.default.createElement("path", { d: "M34 23.5 C37 25.5 37.2 34.5 34 36.5 C30.8 34.5 31 25.5 34 23.5 Z", fill: tn }), o.default.createElement("ellipse", { cx: "33.1", cy: "28.5", rx: ".7", ry: "3", fill: Ii, opacity: ".7" }))) }, Zm = ({ h: l = 46, outline: t = "#FFFFFF" }) => o.default.createElement("svg", { width: l / 3, height: l, viewBox: "0 0 100 300", "aria-hidden": "true", style: { flexShrink: 0 } }, o.default.createElement("defs", null, o.default.createElement("clipPath", { id: "fmClip" }, o.default.createElement("path", { d: "M50 92 C62 112 72 140 72 160 C72 184 62 200 50 200 C38 200 28 184 28 160 C28 140 38 112 50 92 Z" }))), o.default.createElement("line", { x1: "50", y1: "201", x2: "50", y2: "292", stroke: t, strokeWidth: "3" }), o.default.createElement("circle", { cx: "50", cy: "248", r: "5", fill: "#9AA3AD" }), o.default.createElement("circle", { cx: "50", cy: "263", r: "4.3", fill: "#9AA3AD" }), o.default.createElement("circle", { cx: "50", cy: "276", r: "3.6", fill: "#9AA3AD" }), o.default.createElement("rect", { x: "46.5", y: "2", width: "7", height: "94", rx: "3.5", fill: "#F2551D" }), o.default.createElement("g", { clipPath: "url(#fmClip)" }, o.default.createElement("rect", { x: "20", y: "85", width: "60", height: "120", fill: "#ECEFF2" }), o.default.createElement("polygon", { points: "20,176 80,148 80,210 20,210", fill: "#2E9BEF" }), o.default.createElement("line", { x1: "20", y1: "176", x2: "80", y2: "148", stroke: "#1A2230", strokeWidth: "6" })), o.default.createElement("path", { d: "M50 92 C62 112 72 140 72 160 C72 184 62 200 50 200 C38 200 28 184 28 160 C28 140 38 112 50 92 Z", fill: "none", stroke: t, strokeWidth: "3" }), o.default.createElement("path", { d: "M2 152 q8 -6 16 0 t16 0 M66 152 q8 -6 16 0 t16 0", fill: "none", stroke: "#7FB8F0", strokeWidth: "4", strokeLinecap: "round" })), Le = ({ children: l, style: t }) => o.default.createElement("div", { style: { background: h.surface, border: `1px solid ${h.line}`, borderRadius: 6, padding: 14, marginBottom: 12, ...t } }, l), el = ({ children: l, color: t = h.muted, mb: e = 6 }) => o.default.createElement("div", { style: { fontSize: 12, color: t, fontWeight: 500, marginBottom: e } }, l), yu = ({ label: l, children: t, mb: e = 16 }) => o.default.createElement("div", { role: "group", "aria-label": typeof l == "string" ? l : void 0, style: { marginBottom: e } }, o.default.createElement(el, null, l), t), Sh = (l = {}) => ({ width: "100%", minHeight: 40, padding: "6px 38px 6px 12px", background: h.deep, border: `1px solid ${h.line2}`, borderRadius: 5, color: h.text, fontFamily: xt, fontSize: 18, fontWeight: 700, outline: "none", boxSizing: "border-box", ...l }), Nl = (l = {}) => ({ width: "100%", minHeight: 38, boxSizing: "border-box", padding: "6px 10px", background: h.deep, border: `1px solid ${h.line2}`, borderRadius: 5, color: h.text, fontFamily: Ot, fontSize: 14, fontWeight: 700, outline: "none", ...l }), en = (l, t = h.accent) => ({ minHeight: 38, padding: "7px 10px", borderRadius: 5, cursor: "pointer", textAlign: "left", fontFamily: Ot, background: l ? t : h.deep, color: l ? h.onAccent : h.text, border: `1px solid ${l ? t : h.line2}`, fontWeight: 700, fontSize: 13 }), ql = { minHeight: 34, padding: "6px 12px", background: "transparent", color: h.muted, border: `1px solid ${h.line2}`, borderRadius: 5, fontFamily: Ot, fontWeight: 700, fontSize: 13, cursor: "pointer" }, an = (l) => ({ flex: 1, minHeight: 44, padding: "10px", borderRadius: 6, fontFamily: Ot, fontWeight: 800, fontSize: 15, background: l ? "#AEB6C2" : h.navy, color: "#FFFFFF", border: `2px solid ${l ? "#C9CDD4" : h.goldBrand}`, cursor: l ? "default" : "pointer" }), Ic = { flexShrink: 0, width: 30, height: 30, borderRadius: 8, background: "transparent", color: h.bad, border: `1px solid ${h.bad}55`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 };
function gh({ value: l, onChange: t, clearLabel: e, ...a }) {
  return o.default.createElement("div", { style: { position: "relative" } }, o.default.createElement("input", { value: l, onChange: (n) => t(n.target.value), onFocus: (n) => n.target.select(), style: Sh(), ...a }), l !== "" && o.default.createElement("button", { type: "button", "aria-label": e, onClick: () => t(""), style: { position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, borderRadius: 8, border: "none", background: h.raised, color: h.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 } }, o.default.createElement(nn, { d: un.x, size: 16 })));
}
function Vm({ positions: l, totalCm: t, floatSet: e, leaderCm: a = 0, floatGrams: n = 0, rigLen: u, t: i, floatName: fN }) {
  if (!l || l.length === 0) return null;
  let f = Math.max(0, a || 0), c = Math.min(14, Math.max(4, Math.round(500 / Math.max(t, 10)))), g = 110, b = 40, S = "#7F93A8", p = l.some((v) => v.shot.isTorpedo), y = (v) => String(Math.round(v * 100) / 100), z = [], C = {};
  l.forEach((v) => {
    if (v.rowType === "bulk") {
      if (C[v.bulkId]) {
        C[v.bulkId].items.push(v.shot);
        return;
      }
      let H = { kind: "bulk", id: v.bulkId, lo: v.bulkStart, hi: v.bulkEnd, L: v.bulkLen, items: [v.shot], anchor: v.anchor, fromFloat: v.fromFloat };
      C[v.bulkId] = H, z.push(H);
    } else v.shot.isTorpedo && v.torpEnd != null ? z.push({ kind: "torp", lo: v.torpStart, hi: v.torpEnd, shot: v.shot }) : z.push({ kind: v.shot.isTorpedo ? "torp" : "shot", lo: v.seated ? Math.max(0, v.distFromHook - pu) : v.distFromHook, hi: v.distFromHook, shot: v.shot });
  }), z.sort((v, H) => v.lo - H.lo);
  let D = /* @__PURE__ */ new Set([0, t]);
  z.forEach((v) => {
    D.add(v.lo), D.add(v.hi);
  });
  let d = [...D].filter((v) => v >= 0 && v <= t + 1e-9).sort((v, H) => v - H), r = (v, H) => {
    let Q = z.find((ul) => ul.hi > ul.lo && v >= ul.lo - 1e-9 && H <= ul.hi + 1e-9);
    return Q ? Q.kind === "bulk" ? Q.items.length * 8 : Q.kind === "shot" ? v <= 1e-9 ? 22 : 14 : 18 : H >= t - 1e-9 ? 36 : v <= 1e-9 ? 52 : 60;
  }, m = [0];
  for (let v = 1; v < d.length; v++) m.push(m[v - 1] + Math.max((d[v] - d[v - 1]) * c, r(d[v - 1], d[v])));
  let T = m[m.length - 1], O = f * c, _ = (v) => {
    if (v <= 0) return v * c;
    for (let H = 1; H < d.length; H++) if (v <= d[H] + 1e-9) {
      let Q = (v - d[H - 1]) / Math.max(1e-9, d[H] - d[H - 1]);
      return m[H - 1] + Q * (m[H] - m[H - 1]);
    }
    return T + (v - t) * c;
  }, M = (v) => g + T - _(v), U = t <= 50 ? 5 : 10, N = c >= 10 ? 0.5 : 1, X = [];
  for (let v = -Math.floor(f / N + 1e-9); v * N <= t + 1e-9; v++) {
    let H = Math.round(v * N * 10) / 10, Q = Math.abs(H / U - Math.round(H / U)) < 1e-9, ul = Math.abs(H / 5 - Math.round(H / 5)) < 1e-9, il = Math.abs(H - Math.round(H)) < 1e-9;
    X.push({ c: H, isLabel: Q, len: Q ? 9 : ul ? 7 : il ? 5 : 3 });
  }
  let F = (v) => v === "bulk" ? h.bulk : v === "torp" ? h.torp : h.shot, kl = {}, Ye = (v, H) => {
    let Q = M(v) - (v <= 0.01 ? 12 : 0);
    return { top: Math.min(M(H), Q - 16), bot: Q };
  };
  z.filter((v) => v.kind === "bulk").forEach((v) => {
    let H = M(v.lo) - (v.lo <= 0.01 ? 12 : 0);
    kl[v.id] = { top: Math.min(M(v.hi), H - v.items.length * 8), bot: H };
  });
  let xl = [];
  xl.push({ key: "float", y: 60, h: 36, node: o.default.createElement(o.default.Fragment, null, o.default.createElement("div", { style: { fontSize: 13, color: h.text, fontWeight: 700 } }, fN || i.floatTop), o.default.createElement("div", { style: { fontSize: 11, color: h.muted } }, n > 0 && o.default.createElement("b", { style: { color: h.navy } }, n.toFixed(2), " ", i.grUnit), u == null && o.default.createElement(o.default.Fragment, null, " · ", y(t), " cm"))) }), z.forEach((v, H) => {
    let Q = F(v.kind), ul;
    if (v.kind === "bulk") {
      let Dt = Rc(v.items).map((ct) => `${ct.cnt}× ${ct.shot.code}`).join(" + "), Wl = v.items.reduce((ct, ua) => ct + ua.grams, 0);
      ul = o.default.createElement(o.default.Fragment, null, o.default.createElement("div", { style: { fontSize: 12, fontWeight: 800, color: Q, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, Dt, " ", o.default.createElement("span", { style: { fontSize: 10, color: h.bulk, background: `${h.bulk}22`, borderRadius: 4, padding: "1px 4px" } }, "BULK")), o.default.createElement("div", { style: { fontSize: 11, color: h.muted, whiteSpace: "nowrap" } }, Wl.toFixed(3), " ", i.grUnit, " · ", y(v.lo), "–", y(v.hi), " cm", v.anchor === "float" ? ` · ${y(v.fromFloat)} cm ${i.belowFloat}` : ""));
    } else ul = o.default.createElement(o.default.Fragment, null, o.default.createElement("div", { style: { fontSize: 12, fontWeight: 800, color: Q, whiteSpace: "nowrap" } }, v.shot.code, v.kind === "torp" && o.default.createElement("span", { style: { fontSize: 10, marginLeft: 5, color: h.torp, background: `${h.torp}22`, borderRadius: 4, padding: "1px 4px" } }, i.torpBadge)), o.default.createElement("div", { style: { fontSize: 11, color: h.muted, whiteSpace: "nowrap" } }, v.shot.grams.toFixed(v.kind === "torp" ? 2 : 3), " ", i.grUnit, " · ", o.default.createElement("span", { style: { color: h.text } }, v.kind === "shot" ? y(v.hi) : v.hi > v.lo ? `${y(v.lo)}–${y(v.hi)}` : y(v.lo), " cm")));
    let il = v.kind === "torp" && v.hi > v.lo ? Ye(v.lo, v.hi) : null;
    xl.push({ key: `b${H}`, y: v.kind === "bulk" ? (kl[v.id].top + kl[v.id].bot) / 2 : il ? (il.top + il.bot) / 2 : M(v.kind === "shot" ? v.hi : (v.lo + v.hi) / 2), h: 32, node: ul });
  });
  let jl = (v, H, Q, ul) => {
    let il = Q - H;
    il <= 0.05 || xl.push({ key: v, y: M((H + Q) / 2), h: 20, node: o.default.createElement("span", { style: { fontSize: 11, color: ul, fontWeight: 700, background: h.deep, borderRadius: 6, padding: "1px 6px", border: `1px solid ${ul}55`, whiteSpace: "nowrap" } }, y(il), " cm") });
  };
  z.length && jl("c0", 0, z[0].lo, F(z[0].kind));
  for (let v = 1; v < z.length; v++) {
    let H = z[v - 1], Q = z[v];
    jl(`c${v}`, H.hi, Q.lo, H.kind === "bulk" || Q.kind === "bulk" ? h.bulk : H.kind === "torp" || Q.kind === "torp" ? h.torp : h.shot);
  }
  if (e && z.length) {
    let v = z[z.length - 1];
    jl("cf", v.hi, t, F(v.kind));
  }
  xl.push({ key: "loop", y: M(0) + 14, h: 20, node: o.default.createElement("span", { style: { fontSize: 12, fontWeight: 800, color: h.gold, whiteSpace: "nowrap" } }, i.loopLabel) }), f > 0 && xl.push({ key: "leader", y: M(-f / 2), h: 20, node: o.default.createElement("span", { style: { fontSize: 11, color: S, fontWeight: 700, background: h.deep, borderRadius: 6, padding: "1px 6px", border: `1px solid ${S}55`, whiteSpace: "nowrap" } }, i.leader, " ", y(f), " cm") }), xl.push({ key: "hook", y: M(-f) + 18, h: 18, node: o.default.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: h.text, whiteSpace: "nowrap" } }, i.hook) }), xl.sort((v, H) => v.y - H.y);
  for (let v = 1; v < xl.length; v++) {
    let H = xl[v - 1], Q = xl[v], ul = H.y + (H.h + Q.h) / 2 + 3;
    Q.y < ul && (Q.y = ul);
  }
  let zt = Math.max(g + T + O + b, xl.length ? xl[xl.length - 1].y + xl[xl.length - 1].h / 2 + 4 : 0);
  return o.default.createElement("div", { style: { background: h.deep, borderRadius: 6, border: `1px solid ${h.line}`, padding: "14px 10px", marginTop: 12, overflow: "hidden" } }, o.default.createElement("div", { style: { fontSize: 13, color: h.muted, marginBottom: 10 } }, i.diagTitle, " ", o.default.createElement("b", { style: { color: h.text } }, y(u != null ? u : t)), " ", i.diagTotal, f > 0 && o.default.createElement(o.default.Fragment, null, " + ", i.leader.toLowerCase(), " ", o.default.createElement("b", { style: { color: h.text } }, y(f)), " cm")), o.default.createElement("div", { style: { display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap", fontSize: 12, fontWeight: 700 } }, o.default.createElement("span", { style: { display: "flex", alignItems: "center", gap: 5, color: h.bulk } }, o.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: h.bulk } }), "Bulk"), o.default.createElement("span", { style: { display: "flex", alignItems: "center", gap: 5, color: h.shot } }, o.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: h.shot } }), i.shot), p && o.default.createElement("span", { style: { display: "flex", alignItems: "center", gap: 5, color: h.torp } }, o.default.createElement("span", { style: { width: 7, height: 13, borderRadius: "50%", background: h.torp } }), i.torpedo)), o.default.createElement("div", { style: { display: "flex", minWidth: 0 } }, o.default.createElement("div", { style: { width: 30, flexShrink: 0, position: "relative", height: zt } }, o.default.createElement("div", { style: { position: "absolute", right: 0, top: M(t), height: T + O, width: 1, background: h.line2 } }), X.map(({ c: v, isLabel: H, len: Q }) => {
    let ul = v === 0;
    return o.default.createElement("div", { key: v, style: { position: "absolute", top: M(v), right: 0, display: "flex", alignItems: "center", gap: 3, transform: "translateY(-50%)" } }, H && o.default.createElement("span", { style: { fontSize: 10, color: ul ? h.gold : v < 0 ? S : h.muted, fontWeight: 700, lineHeight: 1 } }, v < 0 ? `−${-v}` : v), o.default.createElement("div", { style: { width: Q, height: 1, background: ul ? h.gold : H ? h.muted : Q >= 7 ? h.faint : h.line2 } }));
  })), o.default.createElement("div", { style: { width: 40, flexShrink: 0, position: "relative", height: zt } }, o.default.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: g, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" } }, o.default.createElement("div", { style: { width: 3, height: 34, background: "#F2551D", borderRadius: "2px 2px 0 0" } }), o.default.createElement("div", { style: { width: 22, height: 40, borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%", background: "linear-gradient(160deg, #E9ECEF 0 50%, #1F2A33 50% 54%, #2E9BEF 54% 100%)", border: `1px solid ${h.line2}` } }), o.default.createElement("div", { style: { width: 2, height: 8, background: h.muted } })), o.default.createElement("div", { style: { position: "absolute", top: g, height: T, left: "50%", width: 2, marginLeft: -1, background: h.muted, borderRadius: 2 } }), z.filter((v) => v.kind === "bulk").map((v, H) => o.default.createElement("div", { key: `br${H}`, style: { position: "absolute", left: "calc(50% + 11px)", width: 5, top: kl[v.id].top, height: kl[v.id].bot - kl[v.id].top, borderTop: `2px solid ${h.bulk}`, borderRight: `2px solid ${h.bulk}`, borderBottom: `2px solid ${h.bulk}`, boxSizing: "border-box" } })), l.map((v, H) => {
    let Q = { position: "absolute", top: M(v.distFromHook), left: "50%", transform: "translate(-50%,-50%)", zIndex: 2 }, ul = Math.round(9 + Math.min(7, v.shot.grams * 7));
    if (v.shot.isTorpedo) {
      let il = Math.round(7 + Math.min(6, v.shot.grams * 3));
      if (v.torpEnd != null) {
        let Wl = Ye(v.torpStart, v.torpEnd), ct = Math.max(12, il + 3), ua = Wl.bot - Wl.top;
        return o.default.createElement("svg", { key: H, width: ct, height: ua, viewBox: "0 0 20 60", preserveAspectRatio: "none", "aria-hidden": "true", style: { position: "absolute", top: Wl.top, left: "50%", transform: "translateX(-50%)", zIndex: 2, overflow: "visible" } }, o.default.createElement("path", { d: "M10 1 C15 10 18.5 30 18.5 42 C18.5 53 14.5 59 10 59 C5.5 59 1.5 53 1.5 42 C1.5 30 5 10 10 1 Z", fill: h.torp, stroke: "#2F353C", strokeWidth: "1.2", vectorEffect: "non-scaling-stroke" }), o.default.createElement("ellipse", { cx: "7", cy: "34", rx: "1.8", ry: "13", fill: "#D3D8DE", opacity: ".75" }), o.default.createElement("ellipse", { cx: "13.5", cy: "45", rx: "1", ry: "6", fill: "#2F353C", opacity: ".25" }));
      }
      let Dt = Math.round(14 + Math.min(12, v.shot.grams * 6));
      return o.default.createElement("div", { key: H, style: { ...Q, width: il, height: Dt, background: h.torp, borderRadius: "50% 50% 50% 50% / 38% 38% 62% 62%", border: `1.5px solid ${h.deep}` } });
    }
    if (v.rowType === "bulk") {
      let il = kl[v.bulkId], Dt = (il.bot - il.top) / v.bulkCount, Wl = il.bot - (v.bulkIndex + 0.5) * Dt, ct = Math.max(7, Math.min(ul, Dt + 1));
      return o.default.createElement("div", { key: H, style: { ...Q, top: Wl, width: ct, height: ct, borderRadius: "50%", background: h.bulk, border: `1px solid ${h.deep}` } });
    }
    return o.default.createElement("div", { key: H, style: { ...Q, width: ul, height: ul, borderRadius: "50%", background: h.shot, border: `1.5px solid ${h.deep}` } });
  }), o.default.createElement("svg", { style: { position: "absolute", top: M(0) - 11, left: "50%", marginLeft: -5, zIndex: 3 }, width: "10", height: "22", viewBox: "0 0 10 22", fill: "none", stroke: h.gold, strokeWidth: "1.6", "aria-hidden": "true" }, o.default.createElement("circle", { cx: "5", cy: "3", r: "2.2" }), o.default.createElement("rect", { x: "2", y: "6", width: "6", height: "10", rx: "2.5", fill: h.gold, fillOpacity: "0.25" }), o.default.createElement("circle", { cx: "5", cy: "19", r: "2.2" })), o.default.createElement("div", { style: { position: "absolute", top: M(0) + 11, height: Math.max(4, O - 11), left: "50%", width: 1, marginLeft: -0.5, background: S } }), o.default.createElement("svg", { style: { position: "absolute", top: M(-f) + (f > 0 ? 0 : 6), left: "50%", marginLeft: -6 }, width: "12", height: "16", viewBox: "0 0 12 16", fill: "none", stroke: h.text, strokeWidth: "1.6", strokeLinecap: "round", "aria-hidden": "true" }, o.default.createElement("path", { d: "M6 0v9a3 3 0 0 1-6 0V7" }), o.default.createElement("path", { d: "M0 7l1.6 1.4" }))), o.default.createElement("div", { style: { flex: 1, position: "relative", height: zt, minWidth: 0, overflow: "hidden" } }, xl.map((v) => o.default.createElement("div", { key: v.key, style: { position: "absolute", top: v.y, left: 10, right: 0, transform: "translateY(-50%)", lineHeight: 1.3 } }, v.node)))));
}
function mh({ title: l, items: t, sortFn: e, decimals: a, onReset: n, onRemove: u, onAdd: i, codePh: f, gramsPh: c, step: g, marker: b, t: S, noCard: p }) {
  let [y, z] = (0, L.useState)(false), [C, D] = (0, L.useState)(""), [d, r] = (0, L.useState)(""), m = () => {
    i(C, d) && (D(""), r(""), z(false));
  }, T = o.default.createElement(o.default.Fragment, null, o.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, gap: 8 } }, p ? o.default.createElement("span", null) : o.default.createElement("div", { style: { fontFamily: xt, fontWeight: 700, fontSize: 20 } }, l, " ", o.default.createElement("span", { style: { color: h.muted, fontWeight: 500 } }, "(", t.length, ")")), o.default.createElement("div", { style: { display: "flex", gap: 6 } }, o.default.createElement("button", { onClick: n, style: ql }, S.btnReset), o.default.createElement("button", { onClick: () => z((O) => !O), style: { ...ql, background: h.accent, color: h.onAccent, border: "none" } }, S.btnAdd))), y && o.default.createElement("div", { style: { background: h.deep, border: `1px solid ${h.line2}`, borderRadius: 6, padding: 14, marginBottom: 12 } }, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 } }, o.default.createElement("label", null, o.default.createElement(el, null, S.labelCode), o.default.createElement("input", { value: C, onChange: (O) => D(O.target.value), placeholder: f, style: Nl() })), o.default.createElement("label", null, o.default.createElement(el, null, S.labelGrams), o.default.createElement("input", { value: d, onChange: (O) => r(O.target.value), placeholder: c, type: "number", step: g, style: Nl() }))), o.default.createElement("button", { onClick: m, style: { ...ql, background: h.ok, color: h.onAccent, border: "none" } }, S.btnSave)), o.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, [...t].sort(e).map((O) => o.default.createElement("div", { key: O.id, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px 8px 14px", background: h.deep, borderRadius: 5 } }, o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, b, o.default.createElement("span", { style: { fontWeight: 700, fontSize: 15 } }, O.code)), o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, o.default.createElement("span", { style: { fontFamily: xt, fontWeight: 700, fontSize: 17 } }, O.grams.toFixed(a), " ", o.default.createElement("span", { style: { color: h.muted, fontSize: 13 } }, S.grUnit)), o.default.createElement("button", { onClick: () => u(O.id), style: Ic, "aria-label": `${S.del} ${O.code}` }, o.default.createElement(nn, { d: un.x, size: 16 })))))));
  return p ? o.default.createElement("div", null, T) : o.default.createElement(Le, null, T);
}
var Th = "bolorigpro.v1.", gu = (l, t) => {
  try {
    let e = window.localStorage.getItem(Th + l);
    return e == null ? t : JSON.parse(e);
  } catch (e) {
    return t;
  }
}, mu = (l, t) => {
  try {
    window.localStorage.setItem(Th + l, JSON.stringify(t));
  } catch (e) {
  }
}, ph = (l, t) => Array.isArray(l) && l.length ? l : t;
// ─── Φελλοί (1.0.11) ─────────────────────────────────────────────────────────
// Κάθε φελλός: { id, name, sizes: [{ id, nom, real }] }. Τα νούμερα κρατιούνται
// ως κείμενο, για να γράφονται άνετα (π.χ. "2." ή "2,1"). Πραγματικό = η φόρτωση
// που μέτρησε ο χρήστης· αν είναι κενό, φόρτωση = ονομαστικό.
var fNum = (v) => { var x = parseFloat(String(v == null ? "" : v).replace(",", ".")); return isNaN(x) || x <= 0 ? null : x; };
var fLoad = (sz) => fNum(sz.real) != null ? fNum(sz.real) : fNum(sz.nom);
var fShow = (x) => { if (x == null) return ""; var s = String(Math.round(x * 1000) / 1000); return s.includes(".") ? s : x.toFixed(1); };
var fDiff = (sz) => fNum(sz.real) != null && fNum(sz.nom) != null && Math.abs(fNum(sz.real) - fNum(sz.nom)) > 1e-9;
var fSortModels = (list, lang) => [...list].sort((a, b) => a.name.localeCompare(b.name, lang, { sensitivity: "base", numeric: true }));
var fSortSizes = (sizes) => [...(sizes || [])].sort((a, b) => (fNum(a.nom) || 0) - (fNum(b.nom) || 0));
var fLabel = (m, sz) => `${m.name} ${fShow(fNum(sz.nom))}`;
var fId = (p) => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

var FloatIcon = (
  <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
    <rect x="2.5" y="2.5" width="35" height="35" rx="3" fill="#E6EEF8" stroke="#8FA8C8" strokeWidth="1" />
    <line x1="20" y1="5" x2="20" y2="13" stroke="#F2551D" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M20 12 C26 15 27.5 22 26 27 C24.8 31 22.4 33.5 20 33.5 C17.6 33.5 15.2 31 14 27 C12.5 22 14 15 20 12 Z" fill="#2E9BEF" />
    <path d="M20 12 C26 15 27.4 21 26.9 24 L13.1 24 C12.6 21 14 15 20 12 Z" fill="#FFFFFF" />
    <rect x="13" y="23.2" width="14" height="2.2" fill="#1F3864" />
    <line x1="20" y1="33.5" x2="20" y2="37.5" stroke="#5B636D" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Επιλογή φελλού στον Υπολογισμό: λίστα ανά μοντέλο (αλφαβητικά), νούμερα από μικρό σε μεγάλο.
function FloatPick({ floats, value, onPick, onGo, t, lang }) {
  var models = fSortModels(floats.filter((m) => (m.sizes || []).some((sz) => fNum(sz.nom) != null)), lang);
  var picked = null;
  if (value) {
    var [mi, si] = value.split("|");
    var pm = floats.find((m) => m.id === mi);
    var ps = pm && (pm.sizes || []).find((sz) => sz.id === si);
    if (pm && ps) picked = { m: pm, s: ps };
  }
  return (
    <div role="group" aria-label={t.floatLbl} style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, color: h.muted, fontWeight: 500, marginBottom: 6 }}>{t.floatLbl}</div>
      {models.length === 0 ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: h.deep, border: `1px dashed ${h.line2}`, borderRadius: 5, padding: "8px 10px" }}>
          <span style={{ flex: 1, fontSize: 13, color: h.muted, lineHeight: 1.45 }}>{t.floatEmptyHint}</span>
          <button onClick={onGo} style={{ ...ql, flexShrink: 0 }}>{t.floatGo}</button>
        </div>
      ) : (
        <>
          <select value={picked ? value : ""} onChange={(ev) => onPick(ev.target.value)} aria-label={t.floatLbl} style={Nl({ fontSize: 15 })}>
            <option value="">{t.floatNone}</option>
            {models.map((m) => (
              <optgroup key={m.id} label={m.name}>
                {fSortSizes(m.sizes).filter((sz) => fNum(sz.nom) != null).map((sz) => (
                  <option key={sz.id} value={`${m.id}|${sz.id}`}>
                    {fLabel(m, sz)}{fDiff(sz) ? `  →  ${fShow(fNum(sz.real))} ${t.grUnit}` : ` ${t.grUnit}`}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {picked && fDiff(picked.s) && (
            <div style={{ fontSize: 12, color: h.muted, marginTop: 5 }}>
              {t.nominalLbl.replace(/\s*\(.*\)/, "")} {fShow(fNum(picked.s.nom))} · <b style={{ color: h.navy }}>{t.realLbl.replace(/\s*\(.*\)/, "")} {fShow(fNum(picked.s.real))} {t.grUnit}</b>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Ένας φελλός στην Αποθήκη: πατάς το όνομα και ανοίγουν τα νούμερά του.
function FloatModel({ m, open, onToggle, onChange, onDelete, t }) {
  var [name, setName] = React.useState(m.name);
  var [nom, setNom] = React.useState("");
  var [real, setReal] = React.useState("");
  React.useEffect(() => { setName(m.name); }, [m.name]);
  var sizes = m.sizes || [];
  var diffs = sizes.some(fDiff);
  var setSize = (id, k, v) => onChange({ ...m, sizes: sizes.map((sz) => sz.id === id ? { ...sz, [k]: v } : sz) });
  var tidy = () => onChange({ ...m, sizes: fSortSizes(sizes) });
  var delSize = (id) => onChange({ ...m, sizes: sizes.filter((sz) => sz.id !== id) });
  var addSize = () => {
    if (fNum(nom) == null) return;
    onChange({ ...m, sizes: fSortSizes([...sizes, { id: fId("s"), nom: nom.trim(), real: fNum(real) != null ? real.trim() : "" }]) });
    setNom(""); setReal("");
  };
  var commitName = () => { var v = name.trim(); v && v !== m.name ? onChange({ ...m, name: v }) : setName(m.name); };
  var cell = { width: "100%", minHeight: 38, boxSizing: "border-box", padding: "6px 8px", background: h.surface, border: `1px solid ${h.line2}`, borderRadius: 5, color: h.text, fontFamily: xt, fontSize: 17, fontWeight: 700, textAlign: "center", outline: "none" };
  var cols = "1fr 1fr 18px 30px";
  return (
    <div style={{ background: h.deep, borderRadius: 5, border: open ? `1px solid ${h.line2}` : "1px solid transparent" }}>
      <button onClick={onToggle} aria-expanded={open} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "transparent", border: "none", cursor: "pointer", fontFamily: Ot, color: h.text, textAlign: "left" }}>
        <span style={{ fontWeight: 700, fontSize: 15, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.name}</span>
        {diffs && <span title={t.realLbl} style={{ color: h.goldBrand, fontSize: 12 }}>●</span>}
        <span style={{ fontSize: 13, color: h.muted, whiteSpace: "nowrap" }}>{t.sizesCount(sizes.length)}</span>
        <span aria-hidden="true" style={{ color: h.muted, fontSize: 16, transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: "2px 12px 12px" }}>
          <label style={{ display: "block", marginBottom: 10 }}>
            <div style={{ fontSize: 12, color: h.muted, fontWeight: 500, marginBottom: 4 }}>{t.floatNameLbl}</div>
            <input value={name} onChange={(ev) => setName(ev.target.value)} onBlur={commitName} onKeyDown={(ev) => ev.key === "Enter" && ev.target.blur()} style={Nl({ background: h.surface })} />
          </label>
          <div style={{ display: "grid", gridTemplateColumns: cols, gap: 6, alignItems: "end", marginBottom: 4 }}>
            <div style={{ fontSize: 12, color: h.muted, fontWeight: 500 }}>{t.nominalLbl}</div>
            <div style={{ fontSize: 12, color: h.muted, fontWeight: 500 }}>{t.realLbl}</div>
          </div>
          {sizes.length === 0 && <div style={{ fontSize: 13, color: h.muted, margin: "4px 0 8px" }}>{t.noSizes}</div>}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {sizes.map((sz) => (
              <div key={sz.id} style={{ display: "grid", gridTemplateColumns: cols, gap: 6, alignItems: "center" }}>
                <input type="number" inputMode="decimal" step="0.05" min="0" value={sz.nom} aria-label={t.nominalLbl} onChange={(ev) => setSize(sz.id, "nom", ev.target.value)} onBlur={tidy} onFocus={(ev) => ev.target.select()} style={cell} />
                <input type="number" inputMode="decimal" step="0.05" min="0" value={sz.real} placeholder={fShow(fNum(sz.nom))} aria-label={t.realLbl} onChange={(ev) => setSize(sz.id, "real", ev.target.value)} onFocus={(ev) => ev.target.select()} style={{ ...cell, color: fDiff(sz) ? h.navy : h.text }} />
                <span aria-hidden="true" style={{ color: h.goldBrand, fontSize: 12, textAlign: "center" }}>{fDiff(sz) ? "●" : ""}</span>
                <button onClick={() => delSize(sz.id)} style={Ic} aria-label={`${t.del} ${fShow(fNum(sz.nom))}`}>{React.createElement(nn, { d: un.x, size: 16 })}</button>
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: cols, gap: 6, alignItems: "center", marginTop: 4, paddingTop: 8, borderTop: `1px dashed ${h.line2}` }}>
              <input type="number" inputMode="decimal" step="0.05" min="0" value={nom} placeholder="2.0" aria-label={t.nominalLbl} onChange={(ev) => setNom(ev.target.value)} onKeyDown={(ev) => ev.key === "Enter" && addSize()} style={cell} />
              <input type="number" inputMode="decimal" step="0.05" min="0" value={real} placeholder={nom || "—"} aria-label={t.realLbl} onChange={(ev) => setReal(ev.target.value)} onKeyDown={(ev) => ev.key === "Enter" && addSize()} style={cell} />
              <span />
              <span />
            </div>
            <button onClick={addSize} disabled={fNum(nom) == null} style={{ ...ql, background: fNum(nom) == null ? "transparent" : h.accent, color: fNum(nom) == null ? h.faint : h.onAccent, border: fNum(nom) == null ? `1px solid ${h.line2}` : "none", cursor: fNum(nom) == null ? "default" : "pointer" }}>{t.addSize}</button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
            <button onClick={onDelete} style={{ ...ql, color: h.bad, borderColor: `${h.bad}66` }}>{t.delFloat}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FloatList({ floats, setFloats, t, lang }) {
  var [adding, setAdding] = React.useState(false);
  var [newName, setNewName] = React.useState("");
  var [err, setErr] = React.useState("");
  var [openId, setOpenId] = React.useState(null);
  var create = () => {
    var v = newName.trim();
    if (!v) return;
    if (floats.some((m) => m.name.trim().toLocaleLowerCase(lang) === v.toLocaleLowerCase(lang))) { setErr(t.floatDup); return; }
    var id = fId("f");
    setFloats((list) => [...list, { id, name: v, sizes: [] }]);
    setNewName(""); setErr(""); setAdding(false); setOpenId(id);
  };
  var update = (nm) => setFloats((list) => list.map((m) => m.id === nm.id ? nm : m));
  var remove = (m) => { if (window.confirm(t.confirmDelFloat(m.name))) { setFloats((list) => list.filter((x) => x.id !== m.id)); setOpenId(null); } };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: h.muted, lineHeight: 1.5 }}>{t.realHint}</div>
        <button onClick={() => { setAdding((v) => !v); setErr(""); }} style={{ ...ql, background: h.accent, color: h.onAccent, border: "none", flexShrink: 0 }}>{t.newFloat}</button>
      </div>
      {adding && (
        <div style={{ background: h.deep, border: `1px solid ${h.line2}`, borderRadius: 6, padding: 12, marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 8 }}>
            <div style={{ fontSize: 12, color: h.muted, fontWeight: 500, marginBottom: 4 }}>{t.floatNameLbl}</div>
            <input value={newName} autoFocus placeholder={t.floatNamePh} onChange={(ev) => { setNewName(ev.target.value); setErr(""); }} onKeyDown={(ev) => ev.key === "Enter" && create()} style={Nl({ background: h.surface })} />
          </label>
          {err && <div style={{ fontSize: 12, color: h.bad, fontWeight: 700, marginBottom: 8 }}>{err}</div>}
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={create} style={{ ...ql, background: h.ok, color: h.onAccent, border: "none" }}>{t.btnSave}</button>
            <button onClick={() => { setAdding(false); setNewName(""); setErr(""); }} style={ql}>{t.cancel}</button>
          </div>
        </div>
      )}
      {floats.length === 0 && !adding && <div style={{ fontSize: 14, color: h.muted, lineHeight: 1.5 }}>{t.floatsEmpty}</div>}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {fSortModels(floats, lang).map((m) => (
          <FloatModel key={m.id} m={m} t={t} open={openId === m.id} onToggle={() => setOpenId((v) => v === m.id ? null : m.id)} onChange={update} onDelete={() => remove(m)} />
        ))}
      </div>
    </div>
  );
}

function Pc() {
  var ps, vs;
  let [l, t] = (0, L.useState)(initialLang), e = Lm[l], [a, n] = (0, L.useState)(() => ph(gu("shots", null), sh)), [u, i] = (0, L.useState)("8"), [f, c] = (0, L.useState)("2.00"), [g, b] = (0, L.useState)("fixed"), [S, p] = (0, L.useState)("asc"), [y, z] = (0, L.useState)(null), [C, D] = (0, L.useState)("calc"), [d, r] = (0, L.useState)([]), [m, T] = (0, L.useState)(""), [O, _] = (0, L.useState)(() => String(gu("leader", "30"))), [M, U] = (0, L.useState)({ mode: "none", pct: "60", id: "" }), [N, X] = (0, L.useState)(null), [F, kl] = (0, L.useState)(null), [Ye, xl] = (0, L.useState)(null), [jl, zt] = (0, L.useState)([]), [v, H] = (0, L.useState)(""), [Q, ul] = (0, L.useState)(false), [il, Dt] = (0, L.useState)(() => ph(gu("torpedoes", null), dh)), [Wl, ct] = (0, L.useState)(() => {
    let s = gu("presets", []);
    return Array.isArray(s) ? s : [];
  }), [ua, ls] = (0, L.useState)(false);
  let [flt, setFlt] = (0, L.useState)(() => { let s = gu("floats", []); return Array.isArray(s) ? s : []; }), [fSel, setFSel] = (0, L.useState)("");
  (0, L.useEffect)(() => { mu("floats", flt); }, [flt]);
  let fPick = (() => { if (!fSel) return null; let [mi, si] = fSel.split("|"), m0 = flt.find((x) => x.id === mi), z0 = m0 && (m0.sizes || []).find((x) => x.id === si); return m0 && z0 && fLoad(z0) != null ? { label: fLabel(m0, z0), load: fLoad(z0) } : null; })();
  let fRef = (0, L.useRef)("");
  (0, L.useEffect)(() => { if (fSel && !fPick) { setFSel(""); return; } let [p0, q0] = fRef.current.split(":"); fPick && p0 === fSel && q0 !== String(fPick.load) && c(fPick.load.toFixed(2)); fRef.current = fPick ? `${fSel}:${fPick.load}` : ""; }, [fSel, fPick ? fPick.load : null]);
  let pickFloat = (v) => { setFSel(v); let [mi, si] = v.split("|"), m0 = flt.find((x) => x.id === mi), z0 = m0 && (m0.sizes || []).find((x) => x.id === si), g0 = z0 && fLoad(z0); g0 != null && c(g0.toFixed(2)); };
  let goFloats = () => { X("floats"); setTimeout(() => { let el0 = document.getElementById("inv-floats"); el0 && el0.scrollIntoView({ behavior: "smooth", block: "center" }); }, 60); };
  (0, L.useEffect)(() => {
    mu("presets", Wl);
  }, [Wl]), (0, L.useEffect)(() => {
    mu("shots", a);
  }, [a]), (0, L.useEffect)(() => {
    mu("torpedoes", il);
  }, [il]), (0, L.useEffect)(() => {
    mu("lang", l);
    try { document.documentElement.lang = l; } catch (e0) {}
  }, [l]), (0, L.useEffect)(() => {
    mu("leader", O);
  }, [O]);
  let [lo, ts] = (0, L.useState)(""), [vu, to] = (0, L.useState)(false), [bu, eo] = (0, L.useState)(false), [ao, es] = (0, L.useState)(null);
  (0, L.useEffect)(() => {
    let s = "bolo-fonts";
    if (document.getElementById(s)) return;
    let x = document.createElement("link");
    x.id = s, x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500;700;800&family=Barlow+Condensed:ital,wght@0,600;0,800;1,800&family=Manrope:wght@400;500;700;800&display=swap", document.head.appendChild(x);
  }, []);
  let as = (s, x = true) => {
    es({ msg: s, ok: x }), setTimeout(() => es(null), 2500);
  }, on = parseInt(u) || 0, $l = parseFloat(f) || 0, Rl = (0, L.useMemo)(() => {
    if (M.mode === "none" || !il.length) return null;
    if (M.mode === "list") {
      let A = il.find((B) => B.id === M.id);
      return A ? { grams: A.grams, code: A.code, isTorpedo: true, id: "torp" } : null;
    }
    if (!$l) return null;
    let s = $l * ((parseFloat(M.pct) || 60) / 100), x = il.reduce((A, B) => Math.abs(B.grams - s) < Math.abs(A.grams - s) ? B : A);
    return { grams: x.grams, code: x.code, isTorpedo: true, id: "torp" };
  }, [M, il, $l]), fn = (0, L.useCallback)(() => {
    if (!on || !$l) return;
    let s = $l - 1e-3, x = $l - 0.06, A = Rl ? Rl.grams : 0, B = Gm(a, $l - A + 1e-3, on, g, S), w = [...B.items || [], ...Rl ? [Rl] : []], Y = (B.total || 0) + A;
    z({ ...B, items: w, total: Y, success: Y <= s && Y >= x });
  }, [a, $l, on, g, S, Rl]);
  (0, L.useEffect)(() => {
    ua && (ls(false), fn());
  }, [ua, fn]);
  let ns = (0, L.useRef)(false);
  (0, L.useEffect)(() => {
    ns.current = y !== null;
  }, [y]), (0, L.useEffect)(() => {
    ns.current && fn();
  }, [fn]);
  let Eh = (s, x) => {
    let A = parseFloat(x);
    return !s || isNaN(A) || A <= 0 ? false : (n((B) => [...B, { id: Date.now(), code: s, grams: A }]), true);
  }, Ah = (s) => n((x) => x.filter((A) => A.id !== s)), Mh = (s, x) => {
    let A = parseFloat(x);
    return !s || isNaN(A) || A <= 0 ? false : (Dt((B) => [...B, { id: "tc" + Date.now(), code: s, grams: A }]), true);
  }, Ch = (s) => Dt((x) => x.filter((A) => A.id !== s)), Oh = (s = "float", x = "shot") => {
    let A = { id: Date.now(), count: "1", spacing: "10", type: x, torpedoMode: "auto", torpedoPct: "60", torpedoId: "", torpedoTarget: f, spacingBefore: "0", bulkPer: "0.5", anchor: "loop", fromFloat: "10" };
    r(s === "float" ? (B) => [...B, A] : (B) => [A, ...B]);
  }, Dh = (s) => r((x) => x.filter((A) => A.id !== s)), Et = (s, x, A) => r((B) => B.map((w) => w.id === s ? { ...w, [x]: A } : w)), us = () => {
    if (!lo.trim()) return;
    let s = { id: Date.now(), name: lo.trim(), grams: f, count: u, groupSize: g, direction: S, spacingRows: d.map((x) => ({ ...x })), floatCm: m, leaderCm: O, torp: M, placements: F, plSig: y ? y.items.map((x) => x.code).join("|") : "", createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString(), floatSel: fPick ? fSel : "", floatName: fPick ? fPick.label : "" };
    ct((x) => [s, ...x.filter((A) => A.name !== s.name)]), ts(""), to(false), as(`${e.toastSaved}: "${s.name}"`);
  }, _h = (s) => {
    var x;
    i(s.count), c(s.grams), setFSel(s.floatSel || ""), b(s.groupSize), p(s.direction), r(s.spacingRows.map((A) => ({ ...A, id: Date.now() + Math.random() }))), T(s.floatCm || ""), _((x = s.leaderCm) != null ? x : "30"), U(s.torp || { mode: "none", pct: "60", id: "" }), xl(s.placements ? { sig: s.plSig, pl: s.placements } : null), z(null), ls(true), eo(false), as(`${e.toastLoaded}: "${s.name}"`);
  }, Hh = (s) => ct((x) => x.filter((A) => A.id !== s)), Bh = y ? Rc([...y.items.filter((s) => !s.isTorpedo)].reverse()) : [], ia = (0, L.useMemo)(() => y ? [...y.items.filter((s) => !s.isTorpedo)].reverse().map((s, x) => ({ ...s, key: `s${x}` })) : [], [y]), no = y && y.items.find((s) => s.isTorpedo) || null, oa = (0, L.useMemo)(() => no ? { ...no, key: "torp" } : null, [no]), is = y ? y.items.map((s) => s.code).join("|") : "";
  (0, L.useEffect)(() => {
    Ye && Ye.sig === is && Array.isArray(Ye.pl) ? (kl(Ye.pl), xl(null)) : kl([]), zt([]);
  }, [is]);
  let uo = parseFloat(m) || 0, io = y ? jm(ia, d, oa, uo) : { positions: [], totalCm: 0, floatSet: false }, st = y ? hh(ia, oa, Array.isArray(F) ? F : [], uo) : io, wm = d.some((s) => s.type === "bulk" && s.anchor === "float"), Uh = [{ id: "calc", label: e.tabCalc, icon: hu.calc }, { id: "spacing", label: e.tabSpacing, icon: hu.ruler }, { id: "rig", label: e.tabRig, icon: hu.rig }, { id: "log", label: e.tabLog, icon: LogIcon }], os = (s) => s === "bulk" ? { col: h.bulk, label: "Bulk" } : s === "torpedo" ? { col: h.torp, label: e.rowTypeTorp } : { col: h.shot, label: e.rowTypeShot }, fs = !u || !f, cn = (s) => {
    D(s);
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (x) {
      window.scrollTo(0, 0);
    }
  }, ne = d.filter((s) => s.type !== "torpedo").reduce((s, x) => s + (parseInt(x.count) || 1), 0), zl = y ? y.items.filter((s) => !s.isTorpedo).length : on, oo = {};
  io.positions.forEach((s) => {
    var A;
    let x = (A = s.rowId) != null ? A : s.bulkId;
    x != null && (oo[x] = oo[x] || []).push(s);
  });
  let Su = (s) => {
    var x;
    return (x = s.key) != null ? x : s.shot.key;
  }, fo = (s) => st.positions.find((x) => Su(x) === s), cs = (s) => Math.max(0, Math.round(s * 2) / 2), co = (s) => Math.max(0, Math.round(s * 100) / 100), ss = (s) => {
    var x;
    return s.rowType === "bulk" ? s.distFromHook : (x = s.torpStart) != null ? x : s.distFromHook;
  }, ds = (s) => {
    let x = [...s.positions].sort((R, _t) => {
      var ie, q;
      return ((ie = R.torpStart) != null ? ie : R.distFromHook) - ((q = _t.torpStart) != null ? q : _t.distFromHook);
    }), A = [], B = 0, w = null, Y = 0;
    return x.forEach((R) => {
      var ie, q;
      let _t = Su(R);
      if (_t) {
        if (R.shot.isTorpedo) {
          let pl = (ie = R.torpStart) != null ? ie : R.distFromHook;
          A.push({ key: "torp", gap: co(pl - Y), len: R.torpEnd != null ? R.torpEnd - R.torpStart : qe }), Y = (q = R.torpEnd) != null ? q : pl, w = null;
          return;
        }
        if (R.rowType === "bulk" && w === R.bulkId) {
          A.push({ key: _t, gap: 0 }), Y = R.bulkEnd;
          return;
        }
        if (R.rowType === "bulk") {
          let pl = co(R.bulkStart - Y);
          A.push({ key: _t, gap: pl > 0 ? pl + pu : 0 }), Y = R.bulkEnd, w = R.bulkId;
          return;
        }
        A.push({ key: _t, gap: co(R.distFromHook - Y) || 0.5 }), Y = R.distFromHook, w = null;
      }
    }), A;
  }, sn = () => Array.isArray(F) ? F : ds(st), Nh = (s) => Array.isArray(F) ? F.findIndex((x) => x.key === s) : -1, kh = () => {
    let s = Array.isArray(F) ? F : [];
    for (let x = s.length - 1; x >= 0; x--) if (s[x].gap > 0) return s[x].gap;
    return 10;
  }, rs = (s) => {
    zt([s]);
    let x = sn(), A = x.find((B) => B.key === s);
    H(String(A ? A.gap : x.length ? kh() : 10));
  }, hs = () => {
    let s = cs(parseFloat(v));
    if (isNaN(s) || !jl.length) return;
    let x = jl[0], A = [...sn()], B = A.findIndex((w) => w.key === x);
    B >= 0 ? A[B] = { ...A[B], gap: s } : A.push({ key: x, gap: s, ...x === "torp" ? { len: qe } : {} }), kl(A), zt([]);
  }, Lh = () => {
    kl(sn().filter((s) => !jl.includes(s.key))), zt([]);
  }, ue = ia.filter((s) => fo(s.key)).length, qh = jl.map((s) => s === "torp" ? oa : ia.find((x) => x.key === s)).filter(Boolean), ys = (() => {
    if (!jl.length || !y) return null;
    let s = cs(parseFloat(v));
    if (isNaN(s)) return null;
    let x = jl[0], A = [...sn()], B = A.findIndex((Y) => Y.key === x);
    B >= 0 ? A[B] = { ...A[B], gap: s } : A.push({ key: x, gap: s });
    let w = hh(ia, oa, A, uo).positions.find((Y) => Su(Y) === x);
    return w ? ss(w) : null;
  })(), Il = (s) => String(Math.round(s * 100) / 100), Yh = (s) => s.shot.isTorpedo ? h.torp : s.rowType === "bulk" ? h.bulk : h.shot, gs = ({ p: s, children: x }) => o.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", borderRadius: 12, background: h.surface, border: `1px solid ${h.line2}`, fontSize: 12, fontWeight: 700, color: h.text, whiteSpace: "nowrap" } }, o.default.createElement("span", { style: { width: s.shot.isTorpedo ? 6 : 8, height: s.shot.isTorpedo ? 11 : 8, borderRadius: "50%", background: Yh(s), flexShrink: 0 } }), x), ms = (() => {
    let s = [], x = {};
    return st.positions.forEach((A) => {
      var B, w;
      if (A.rowType === "bulk") {
        if (x[A.bulkId]) {
          x[A.bulkId].items.push(A);
          return;
        }
        let Y = { kind: "bulk", lo: A.bulkStart, hi: A.bulkEnd, items: [A] };
        x[A.bulkId] = Y, s.push(Y);
      } else A.shot.isTorpedo ? s.push({ kind: "torp", lo: (B = A.torpStart) != null ? B : A.distFromHook, hi: (w = A.torpEnd) != null ? w : A.distFromHook, items: [A] }) : s.push({ kind: "shot", lo: A.distFromHook, hi: A.distFromHook, items: [A] });
    }), s.sort((A, B) => B.hi - A.hi);
  })();
  return o.default.createElement("div", { style: { minHeight: "100vh", background: h.bg, fontFamily: Ot, color: h.text, paddingBottom: 124, overflowX: "hidden" } }, o.default.createElement("style", null, `
        input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
        input[type=number]{-moz-appearance:textfield}
        button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid ${h.accent};outline-offset:2px}
        input::placeholder{color:${h.faint}}
        @media (prefers-reduced-motion: reduce){*{transition:none!important}}
      `), ao && o.default.createElement("div", { role: "status", style: { position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", background: ao.ok ? h.ok : h.bad, color: h.onAccent, padding: "10px 20px", borderRadius: 5, fontWeight: 800, fontSize: 14, zIndex: 9999 } }, ao.msg), o.default.createElement("header", { style: { position: "sticky", top: 0, zIndex: 50, background: h.sand, borderBottom: `1px solid ${h.line}` } }, o.default.createElement("div", { style: { background: `linear-gradient(135deg, ${h.navy} 0%, ${h.navyDark} 100%)`, borderBottom: `3px solid ${h.goldBrand}` } }, o.default.createElement("div", { style: { maxWidth: 560, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 } }, o.default.createElement(Zm, { h: 54 }), o.default.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 } }, o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, o.default.createElement("span", { style: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 0.95, letterSpacing: 0.5, color: "#fff", whiteSpace: "nowrap" } }, "BOLO RIG"), o.default.createElement("span", { style: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 800, fontStyle: "italic", fontSize: 17, lineHeight: 1, color: h.navy, background: h.goldBrand, padding: "2px 8px 3px 6px", borderRadius: 3 } }, "PRO")), o.default.createElement("div", { style: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 600, fontSize: 11.5, letterSpacing: 1.5, color: "#C9D3E0", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, e.appSub)), o.default.createElement("span", { style: { position: "relative", display: "inline-flex", flexShrink: 0 } }, o.default.createElement("span", { "aria-hidden": "true", style: { ...ql, minHeight: 36, color: h.goldBrand, borderColor: h.goldBrand, fontSize: 13, padding: "0 10px", height: 36, boxSizing: "border-box", lineHeight: 1, display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" } }, o.default.createElement("span", { style: { fontSize: 13, lineHeight: 1 } }, "🌐"), LANG_BTN[l] || "GR"), o.default.createElement("select", { "aria-label": "Language", value: l, onChange: (ev) => t(ev.target.value), style: { position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer", fontSize: 16, border: 0 } }, LANGS.map((k) => o.default.createElement("option", { key: k, value: k }, LANG_NAMES[k])))), o.default.createElement("button", { "aria-label": e.load, onClick: () => {
    eo((s) => !s), to(false);
  }, style: { ...ql, width: 36, minHeight: 36, padding: 0, borderColor: h.goldBrand, color: bu ? "#fff" : h.goldBrand, background: bu ? "rgba(212,175,55,0.25)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" } }, o.default.createElement(nn, { d: un.folder, size: 18 })), o.default.createElement("button", { "aria-label": e.save, onClick: () => {
    to((s) => !s), eo(false);
  }, style: { ...ql, width: 36, minHeight: 36, padding: 0, borderColor: h.goldBrand, color: vu ? "#fff" : h.goldBrand, background: vu ? "rgba(212,175,55,0.25)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" } }, o.default.createElement(nn, { d: un.save, size: 18 })))), (vu || bu) && o.default.createElement("div", { style: { height: 12 } }), vu && o.default.createElement("div", { style: { maxWidth: 560, margin: "0 auto", padding: "0 16px 14px", display: "flex", gap: 8, alignItems: "flex-end" } }, o.default.createElement("label", { style: { flex: 1 } }, o.default.createElement(el, null, e.saveTitle), o.default.createElement("input", { value: lo, onChange: (s) => ts(s.target.value), onKeyDown: (s) => s.key === "Enter" && us(), placeholder: e.savePlaceholder, style: Nl() })), o.default.createElement("button", { onClick: us, style: { ...ql, minHeight: 44, background: h.accent, color: h.onAccent, border: "none" } }, e.btnSaveOk)), bu && o.default.createElement("div", { style: { maxWidth: 560, margin: "0 auto", padding: "0 16px 14px", maxHeight: 300, overflowY: "auto" } }, o.default.createElement(el, null, e.loadTitle, " (", Wl.length, ")"), Wl.length === 0 && o.default.createElement("div", { style: { fontSize: 14, color: h.muted, lineHeight: 1.5 } }, e.noPresets), Wl.map((s) => o.default.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: 8, background: h.surface, border: `1px solid ${h.line}`, borderRadius: 6, padding: "10px 10px 10px 14px", marginBottom: 6 } }, o.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, o.default.createElement("div", { style: { fontWeight: 700, fontSize: 15 } }, s.name), o.default.createElement("div", { style: { fontSize: 12, color: h.muted } }, s.count, " ", e.pcsOf, ", ", s.grams, " ", e.grUnit, s.floatName ? ` · ${s.floatName}` : "")), o.default.createElement("button", { onClick: () => _h(s), style: { ...ql, background: h.accent, color: h.onAccent, border: "none" } }, e.btnLoad), o.default.createElement("button", { onClick: () => Hh(s.id), style: Ic, "aria-label": `${e.del} ${s.name}` }, o.default.createElement(nn, { d: un.x, size: 16 })))))), o.default.createElement("main", { style: { maxWidth: 560, margin: "0 auto", padding: "16px 16px 0" } }, C === "calc" && o.default.createElement("div", null, o.default.createElement(Le, null, React.createElement(FloatPick, { floats: flt, value: fPick ? fSel : "", onPick: pickFloat, onGo: goFloats, t: e, lang: l }), o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, o.default.createElement(yu, { label: e.labelCount, mb: 12 }, o.default.createElement(gh, { type: "number", min: 1, max: 40, value: u, onChange: i, "aria-label": e.labelCount, placeholder: "8", clearLabel: e.clear })), o.default.createElement(yu, { label: e.labelTarget, mb: 12 }, o.default.createElement(gh, { type: "number", step: "0.01", value: f, onChange: c, "aria-label": e.labelTarget, placeholder: "2.00", clearLabel: e.clear }))), o.default.createElement(yu, { label: e.labelGroup, mb: 12 }, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, o.default.createElement("button", { onClick: () => b("fixed"), style: en(g === "fixed") }, o.default.createElement("div", null, e.labelFixed), o.default.createElement("div", { style: { fontSize: 11, fontWeight: 500, opacity: 0.8, marginTop: 1 } }, e.fixedDesc)), o.default.createElement("button", { onClick: () => {
    g === "fixed" && b(1);
  }, style: en(g !== "fixed") }, o.default.createElement("div", null, e.labelVar), o.default.createElement("div", { style: { fontSize: 11, fontWeight: 500, opacity: 0.8, marginTop: 1 } }, e.varDesc)))), g !== "fixed" && o.default.createElement(o.default.Fragment, null, o.default.createElement(yu, { label: e.labelVarPer, mb: 12 }, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 } }, [1, 2, 3, 4].map((s) => o.default.createElement("button", { key: s, onClick: () => b(s), style: { ...en(g === s), textAlign: "center", fontFamily: xt, fontSize: 17 } }, s))))), o.default.createElement(yu, { label: e.torpTitle, mb: 14 }, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 } }, [["none", e.torpNone], ["auto", e.torpAuto], ["list", e.torpList]].map(([s, x]) => o.default.createElement("button", { key: s, onClick: () => U((A) => ({ ...A, mode: s })), style: { ...en(M.mode === s, h.torp), textAlign: "center", fontSize: 13 } }, x))), M.mode === "auto" && o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 } }, o.default.createElement("input", { type: "number", min: 10, max: 90, step: 5, value: M.pct, onChange: (s) => U((x) => ({ ...x, pct: s.target.value })), onFocus: (s) => s.target.select(), "aria-label": e.torpPct, style: Nl({ width: 80, textAlign: "center" }) }), o.default.createElement("span", { style: { fontSize: 13, color: h.muted } }, "% ", e.targetLabel.toLowerCase()), Rl && o.default.createElement("span", { style: { marginLeft: "auto", fontSize: 13, fontWeight: 700, color: h.torp, whiteSpace: "nowrap" } }, Rl.code, " · ", Rl.grams.toFixed(2), " ", e.grUnit)), M.mode === "list" && o.default.createElement("select", { value: M.id, onChange: (s) => U((x) => ({ ...x, id: s.target.value })), "aria-label": e.selectTorp, style: Nl({ marginTop: 8 }) }, o.default.createElement("option", { value: "" }, e.selectTorp), [...il].sort((s, x) => s.grams - x.grams).map((s) => o.default.createElement("option", { key: s.id, value: s.id }, s.code, " (", s.grams.toFixed(2), " ", e.grUnit, ")")))), o.default.createElement("div", { style: { display: "flex", gap: 8 } }, o.default.createElement("button", { "aria-label": e.clear, onClick: () => {
    i(""), c(""), z(null);
  }, style: { ...ql, minHeight: 44, width: 44, padding: 0, fontSize: 16 } }, "↺"), o.default.createElement("button", { onClick: fn, disabled: fs, style: an(fs) }, e.btnCalc)), o.default.createElement("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: 10 } }, o.default.createElement("button", { onClick: () => {
    i("8"), c("2.00"), b("fixed"), p("asc"), z(null), setFSel("");
  }, style: ql }, e.btnReset))), React.createElement(ManualPicker, { shots: a, torpedo: Rl, target: $l, direction: S, t: e, onApply: (r0) => { z(r0); as(e.manualApplied); } }), y && o.default.createElement(o.default.Fragment, null, o.default.createElement(Le, { style: { borderColor: y.success ? `${h.ok}88` : `${h.bad}88` } }, o.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12, gap: 10 } }, o.default.createElement("div", null, o.default.createElement(el, { mb: 2 }, e.resultLabel), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 32, fontWeight: 800, lineHeight: 1, color: y.success ? h.ok : h.bad } }, y.total.toFixed(3), o.default.createElement("span", { style: { fontSize: 18, marginLeft: 4 } }, e.grUnit))), o.default.createElement("div", { style: { textAlign: "right" } }, o.default.createElement(el, { mb: 2 }, e.targetLabel), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 22, fontWeight: 700 } }, $l.toFixed(3), " ", e.grUnit), o.default.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: y.success ? h.ok : h.bad } }, y.success ? e.inRange : e.outRange))), o.default.createElement("div", { style: { height: 8, background: h.line, borderRadius: 4, marginBottom: 16, overflow: "hidden" } }, o.default.createElement("div", { style: { height: "100%", width: `${Math.min(100, y.total / $l * 100)}%`, background: y.success ? h.ok : h.bad, borderRadius: 4, transition: "width 0.5s" } })), g !== "fixed" && y.exact === false && o.default.createElement("div", { style: { fontSize: 13, lineHeight: 1.5, color: h.text, background: `${h.shot}1F`, border: `1px solid ${h.shot}66`, borderRadius: 5, padding: "10px 12px", marginBottom: 14 } }, e.relaxedNote(on, g, y.sizesUsed)), o.default.createElement(el, null, e.composition), o.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, y.items && y.items.filter((s) => s.isTorpedo).map((s, x) => o.default.createElement("div", { key: `t${x}`, style: { display: "flex", alignItems: "center", justifyContent: "space-between", background: h.deep, borderRadius: 5, padding: "10px 14px", boxShadow: `inset 3px 0 0 ${h.torp}` } }, o.default.createElement("div", null, o.default.createElement("div", { style: { fontWeight: 800, fontSize: 15, color: h.torp } }, s.code), o.default.createElement("div", { style: { fontSize: 12, color: h.muted, marginTop: 2 } }, e.torpedo)), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 20, fontWeight: 700 } }, s.grams.toFixed(2), " ", e.grUnit))), Bh.map(({ shot: s, cnt: x }, A) => o.default.createElement("div", { key: A, style: { display: "flex", alignItems: "center", justifyContent: "space-between", background: h.deep, borderRadius: 5, padding: "10px 14px" } }, o.default.createElement("div", null, o.default.createElement("div", { style: { fontWeight: 800, fontSize: 15 } }, x, " × ", s.code), o.default.createElement("div", { style: { fontSize: 12, color: h.muted, marginTop: 2 } }, s.grams.toFixed(3), " ", e.perPiece)), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 20, fontWeight: 700 } }, (s.grams * x).toFixed(3), " ", e.grUnit)))), o.default.createElement("div", { style: { display: "flex", marginTop: 14 } }, o.default.createElement("button", { onClick: () => cn("spacing"), style: an(false) }, e.nextSpacing))), o.default.createElement("button", { onClick: () => z(null), style: { ...ql, width: "100%", minHeight: 44, fontSize: 14, marginBottom: 14 } }, e.btnReset2)), o.default.createElement(el, { mb: 8 }, e.inventory), [["shots", e.shotsTitle, a.length, hu.shots], ["torpedoes", e.torpedoTitle, il.length, hu.torp], ["floats", e.floatsTitle, flt.length, FloatIcon]].map(([s, x, A, B]) => o.default.createElement(Le, { key: s, style: { padding: 0, overflow: "hidden" } }, o.default.createElement("button", { id: "inv-" + s, onClick: () => X((w) => w === s ? null : s), "aria-expanded": N === s, style: { width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "transparent", border: "none", cursor: "pointer", fontFamily: Ot, color: h.text, textAlign: "left" } }, B, o.default.createElement("span", { style: { flex: 1, fontSize: 15, fontWeight: 700 } }, x, " ", o.default.createElement("span", { style: { color: h.muted, fontWeight: 500 } }, "(", A, ")")), o.default.createElement("span", { "aria-hidden": "true", style: { color: h.muted, fontSize: 16, transform: N === s ? "rotate(180deg)" : "none", transition: "transform .15s" } }, "▾")), N === s && o.default.createElement("div", { style: { padding: "0 14px 14px", borderTop: `1px solid ${h.line}` } }, o.default.createElement("div", { style: { height: 12 } }), s === "floats" ? React.createElement(FloatList, { floats: flt, setFloats: setFlt, t: e, lang: l }) : s === "shots" ? o.default.createElement(mh, { noCard: true, title: e.shotsTitle, items: a, sortFn: (w, Y) => Y.grams - w.grams, decimals: 3, onReset: () => n(sh), onRemove: Ah, onAdd: Eh, codePh: "No 5", gramsPh: "0.000", step: "0.001", t: e, marker: o.default.createElement("span", { style: { width: 14, height: 14, borderRadius: "50%", background: h.shot, flexShrink: 0 } }) }) : o.default.createElement(mh, { noCard: true, title: e.torpedoTitle, items: il, sortFn: (w, Y) => w.grams - Y.grams, decimals: 2, onReset: () => Dt(dh), onRemove: Ch, onAdd: Mh, codePh: "TOJ0xxx", gramsPh: "0.00", step: "0.01", t: e, marker: o.default.createElement("span", { style: { width: 9, height: 17, borderRadius: "50%", background: h.torp, flexShrink: 0 } }) }))))), C === "spacing" && o.default.createElement(o.default.Fragment, null, o.default.createElement(Le, null, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 } }, o.default.createElement("label", null, o.default.createElement(el, null, e.leaderLbl), o.default.createElement("input", { type: "number", min: 0, step: 1, value: O, placeholder: "0", onChange: (s) => _(s.target.value), onFocus: (s) => s.target.select(), style: Nl() })), o.default.createElement("div", null, o.default.createElement(el, null, e.rigLenLbl), o.default.createElement("div", { style: { ...Nl(), display: "flex", alignItems: "center", background: h.raised, color: h.navy } }, y ? `${Il((ps = st.rigTop) != null ? ps : 0)} cm` : "—"))), y ? o.default.createElement(o.default.Fragment, null, o.default.createElement("div", { style: { fontSize: 13, lineHeight: 1.5, padding: "8px 10px", borderRadius: 5, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", background: F ? ue === zl ? `${h.ok}14` : `${h.shot}14` : h.deep, border: `1px solid ${F ? ue === zl ? `${h.ok}66` : `${h.shot}66` : h.line}`, color: F && ue === zl ? h.ok : h.text, fontWeight: F && ue === zl ? 700 : 400 } }, o.default.createElement("span", { style: { flex: 1, minWidth: 180 } }, ue === 0 ? e.startHint : e.manualMode(ue, zl)), Array.isArray(F) && F.length > 0 && o.default.createElement("button", { onClick: () => {
    kl([]), zt([]);
  }, style: { ...ql, minHeight: 32 } }, e.clearAll)), o.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 } }, o.default.createElement(el, { mb: 0 }, e.trayTitle)), o.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 } }, [...ia, ...oa ? [oa] : []].map((s) => {
    let x = fo(s.key), A = jl.includes(s.key), B = s.key === "torp", w = B ? h.torp : x && x.rowType === "bulk" ? h.bulk : h.shot;
    return o.default.createElement("button", { key: s.key, onClick: () => rs(s.key), "aria-pressed": A, style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 10px", minHeight: 36, borderRadius: 18, cursor: "pointer", fontFamily: Ot, fontSize: 13, fontWeight: 700, background: A ? h.navy : x ? h.raised : h.surface, color: A ? "#fff" : h.text, border: A ? `2px solid ${h.goldBrand}` : x ? `1px solid ${h.line2}` : `1.5px dashed ${w}`, opacity: x && !A ? 0.85 : 1 } }, o.default.createElement("span", { style: { width: B ? 7 : 10, height: B ? 13 : 10, borderRadius: "50%", background: w, flexShrink: 0 } }), s.code, " ", o.default.createElement("span", { style: { fontWeight: 400, opacity: 0.8 } }, s.grams.toFixed(B ? 2 : 3)), x && o.default.createElement("span", { style: { fontWeight: 700, color: A ? h.goldBrand : h.navy } }, "#", Nh(s.key) + 1 || "", " ✓ ", Il(ss(x))));
  })), jl.length > 0 && (() => {
    let s = jl[0], x = sn(), A = x.findIndex((Y) => Y.key === s), B = A === 0 || A < 0 && x.length === 0, w = qh[0];
    return o.default.createElement("div", { style: { background: h.deep, border: `2px solid ${h.goldBrand}`, borderRadius: 6, padding: 12, marginBottom: 14 } }, o.default.createElement("div", { style: { fontSize: 15, fontWeight: 800, marginBottom: 8 } }, w ? `${w.code} · ${w.grams.toFixed(s === "torp" ? 2 : 3)} ${e.grUnit}` : "", A >= 0 && o.default.createElement("span", { style: { color: h.muted, fontWeight: 600 } }, " · #", A + 1)), o.default.createElement(el, null, B ? e.distLbl : e.gapPrevLbl), o.default.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center", marginBottom: 6 } }, o.default.createElement("input", { type: "number", inputMode: "decimal", min: 0, step: 0.5, value: v, autoFocus: true, onChange: (Y) => H(Y.target.value), onFocus: (Y) => Y.target.select(), onKeyDown: (Y) => Y.key === "Enter" && hs(), style: Sh({ textAlign: "center", padding: "6px 10px", flex: 1 }) })), o.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 10, flexWrap: "wrap" } }, o.default.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: h.navy } }, ys != null ? e.atCm(Il(ys)) : "")), !B && o.default.createElement("div", { style: { fontSize: 12, color: h.faint, marginBottom: 10 } }, e.touchHint), o.default.createElement("div", { style: { display: "flex", gap: 8 } }, o.default.createElement("button", { onClick: hs, style: an(false) }, e.place), fo(s) && o.default.createElement("button", { onClick: Lh, style: { ...ql, color: h.bad, borderColor: `${h.bad}66`, minHeight: 44 } }, e.removeLbl), o.default.createElement("button", { onClick: () => zt([]), style: { ...ql, minHeight: 44 } }, e.cancel)));
  })(), ms.length > 0 && o.default.createElement("div", { style: { background: h.deep, borderRadius: 6, padding: 14, border: `1px solid ${h.line}` } }, o.default.createElement(el, { mb: 4 }, e.previewTitle.replace("στριφτάρι → φελλός", "φελλός → στριφτάρι").replace("swivel → float", "float → swivel")), o.default.createElement("div", { style: { fontSize: 12, color: h.faint, marginBottom: 8 } }, e.tapToEdit), o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 4 } }, o.default.createElement("div", { style: { width: 26, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 } }, o.default.createElement("div", { style: { width: 2, height: 12, background: "#F2551D" } }), o.default.createElement("div", { style: { width: 14, height: 22, borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%", background: "linear-gradient(160deg, #E9ECEF 0 50%, #1F2A33 50% 55%, #2E9BEF 55% 100%)", border: `1px solid ${h.line2}` } })), o.default.createElement("span", { style: { fontSize: 14, fontWeight: 700 } }, fPick ? fPick.label : e.floatTop), o.default.createElement("span", { style: { marginLeft: "auto", fontSize: 13, color: h.muted } }, o.default.createElement("b", { style: { color: h.navy } }, $l.toFixed(2), " ", e.grUnit), " · +", vh, " cm")), ms.map((s, x) => {
    let A = s.kind === "bulk" ? h.bulk : s.kind === "torp" ? h.torp : h.shot, B = Su(s.items[0]), w = jl.includes(B);
    return o.default.createElement("button", { key: x, onClick: () => rs(B), style: { display: "flex", alignItems: "stretch", gap: 10, width: "100%", background: w ? `${h.goldBrand}22` : "transparent", border: "none", padding: 0, cursor: "pointer", fontFamily: Ot, color: h.text, textAlign: "left", borderRadius: 4 } }, o.default.createElement("div", { style: { width: 26, display: "flex", justifyContent: "center", flexShrink: 0 } }, o.default.createElement("div", { style: { width: 2, minHeight: 30, background: h.muted } })), o.default.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "4px 4px 4px 0", fontSize: 14, minWidth: 0 } }, o.default.createElement("span", { style: { width: s.kind === "torp" ? 7 : 11, height: s.kind === "torp" ? 13 : 11, borderRadius: "50%", background: A, flexShrink: 0 } }), o.default.createElement("span", { style: { fontWeight: 700, color: s.kind === "bulk" ? h.bulk : h.text, minWidth: 0 } }, s.kind === "bulk" ? o.default.createElement(o.default.Fragment, null, "Bulk: ", Rc([...s.items].sort((Y, R) => R.distFromHook - Y.distFromHook).map((Y) => Y.shot)).map((Y) => `${Y.cnt}× ${Y.shot.code}`).join(" + "), " ", o.default.createElement("span", { style: { fontWeight: 400, color: h.muted, fontSize: 13 } }, "· ", s.items.reduce((Y, R) => Y + R.shot.grams, 0).toFixed(3), " ", e.grUnit)) : o.default.createElement(o.default.Fragment, null, s.items[0].shot.code, " ", o.default.createElement("span", { style: { fontWeight: 400, color: h.muted, fontSize: 13 } }, "· ", s.items[0].shot.grams.toFixed(s.kind === "torp" ? 2 : 3), " ", e.grUnit))), o.default.createElement("span", { style: { marginLeft: "auto", whiteSpace: "nowrap", textAlign: "right" } }, Array.isArray(F) && (() => {
      let Y = F.find((R) => R.key === B);
      return Y ? o.default.createElement("span", { style: { fontSize: 12, color: h.muted, marginRight: 6 } }, "+", Il(Y.gap)) : null;
    })(), o.default.createElement("b", { style: { color: h.navy } }, s.hi > s.lo ? `${Il(s.lo)}–${Il(s.hi)}` : Il(s.lo), " cm"))));
  }), o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 4 } }, o.default.createElement("div", { style: { width: 26, display: "flex", justifyContent: "center", flexShrink: 0 } }, o.default.createElement("div", { style: { width: 10, height: 14, borderRadius: 4, border: `2px solid ${h.gold}` } })), o.default.createElement("span", { style: { fontSize: 14, color: h.gold, fontWeight: 800 } }, e.loopBottom)))) : o.default.createElement("div", { style: { fontSize: 14, color: h.muted, lineHeight: 1.5 } }, e.needCalc), o.default.createElement("div", { style: { display: "flex", marginTop: 14 } }, o.default.createElement("button", { onClick: () => cn("rig"), style: an(false) }, e.nextRig))), o.default.createElement(Le, { style: { padding: 0, overflow: "hidden" } }, o.default.createElement("button", { onClick: () => ul((s) => !s), "aria-expanded": Q, style: { width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "transparent", border: "none", cursor: "pointer", fontFamily: Ot, color: h.text, textAlign: "left" } }, o.default.createElement("span", { style: { flex: 1, fontSize: 15, fontWeight: 700 } }, e.rowsTitle, " ", o.default.createElement("span", { style: { color: h.muted, fontWeight: 500 } }, "(", d.length, ")")), o.default.createElement("span", { "aria-hidden": "true", style: { color: h.muted, fontSize: 16, transform: Q ? "rotate(180deg)" : "none", transition: "transform .15s" } }, "▾")), Q && o.default.createElement("div", { style: { padding: "0 14px 14px", borderTop: `1px solid ${h.line}` } }, o.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, margin: "12px 0 14px" } }, o.default.createElement("div", { style: { fontSize: 13, color: h.muted, lineHeight: 1.5 } }, e.spacingTitle, " ", e.spacingRepeat), o.default.createElement("button", { onClick: () => r([]), style: { ...ql, flexShrink: 0 } }, e.btnReset)), zl > 0 && (() => {
    let s = ne === zl || d.every((B) => B.type === "torpedo"), x = d.every((B) => B.type === "torpedo") ? e.noRows(zl) : ne === zl ? e.placedOk(zl) : ne < zl ? e.placedLess(ne, zl) : e.placedMore(ne, zl), A = ne === zl ? h.ok : h.shot;
    return o.default.createElement("div", { style: { fontSize: 13, lineHeight: 1.5, color: s && ne === zl ? h.ok : h.text, background: `${A}14`, border: `1px solid ${A}66`, borderRadius: 5, padding: "8px 10px", marginBottom: 14, fontWeight: ne === zl ? 700 : 400 } }, x);
  })(), [["float", e.nearFloat]].map(([s, x]) => o.default.createElement("div", { key: s, style: { marginBottom: 12 } }, o.default.createElement(el, null, x), o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 } }, ["shot", "bulk", "torpedo"].map((A) => {
    let B = os(A);
    return o.default.createElement("button", { key: A, onClick: () => Oh(s, A), style: { minHeight: 38, borderRadius: 5, background: h.deep, color: h.text, border: `1px solid ${h.line2}`, fontFamily: Ot, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 } }, o.default.createElement("span", { style: { width: A === "torpedo" ? 7 : 10, height: A === "torpedo" ? 13 : 10, borderRadius: "50%", background: B.col } }), "+ ", B.label);
  })))), o.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" } }, d.map((s) => {
    var R, _t, ie;
    let x = d.indexOf(s), A = s.type || "shot", B = A === "bulk", w = A === "torpedo", Y = os(A);
    return o.default.createElement("div", { key: s.id, style: { background: h.deep, border: `1px solid ${h.line2}`, borderRadius: 6, padding: 12, boxShadow: `inset 3px 0 0 ${Y.col}` } }, o.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 } }, o.default.createElement("div", { style: { width: 26, height: 26, borderRadius: "50%", flexShrink: 0, background: rh[x % rh.length], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" } }, x + 1), o.default.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 800, color: Y.col } }, Y.label), o.default.createElement("button", { onClick: () => Dh(s.id), style: Ic, "aria-label": `${e.del} ${x + 1}` }, o.default.createElement(nn, { d: un.x, size: 16 }))), !w && !B && o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, o.default.createElement("label", null, o.default.createElement(el, null, e.colPcs), o.default.createElement("input", { type: "number", min: 1, max: 30, value: s.count, onChange: (q) => Et(s.id, "count", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })), o.default.createElement("label", null, o.default.createElement(el, null, e.colGap), o.default.createElement("input", { type: "number", min: 0, step: 0.5, value: s.spacing, onChange: (q) => Et(s.id, "spacing", q.target.value), onFocus: (q) => q.target.select(), style: Nl() }))), B && o.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 } }, o.default.createElement("button", { onClick: () => Et(s.id, "anchor", "loop"), style: { ...en((s.anchor || "loop") === "loop", h.bulk), textAlign: "center" } }, e.anchorLoop), o.default.createElement("button", { onClick: () => Et(s.id, "anchor", "float"), style: { ...en(s.anchor === "float", h.bulk), textAlign: "center" } }, e.anchorFloat)), o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, o.default.createElement("label", null, o.default.createElement(el, null, e.colPcs), o.default.createElement("input", { type: "number", min: 1, max: 30, value: s.count, onChange: (q) => Et(s.id, "count", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })), o.default.createElement("label", null, o.default.createElement(el, null, e.bulkPer), o.default.createElement("input", { type: "number", min: 0, step: 0.1, value: (R = s.bulkPer) != null ? R : "0.5", onChange: (q) => Et(s.id, "bulkPer", q.target.value), onFocus: (q) => q.target.select(), style: Nl() }), o.default.createElement("div", { style: { fontSize: 12, color: h.muted, marginTop: 4 } }, "= ", Math.round(bh(s, parseInt(s.count) || 1) * 10) / 10, " cm ", e.bulkTotal))), s.anchor === "float" ? o.default.createElement("label", null, o.default.createElement(el, null, e.fromFloatLbl), o.default.createElement("input", { type: "number", min: 0, step: 0.5, value: (_t = s.fromFloat) != null ? _t : "10", onChange: (q) => Et(s.id, "fromFloat", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })) : o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, o.default.createElement("label", null, o.default.createElement(el, null, e.gapBefore), o.default.createElement("input", { type: "number", min: 0, step: 0.5, value: s.spacingBefore || "0", onChange: (q) => Et(s.id, "spacingBefore", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })), o.default.createElement("label", null, o.default.createElement(el, null, e.gapAfter), o.default.createElement("input", { type: "number", min: 0, step: 0.5, value: s.spacing, onChange: (q) => Et(s.id, "spacing", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })))), w && o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, alignItems: "end" } }, o.default.createElement("label", null, o.default.createElement(el, null, e.colGap), o.default.createElement("input", { type: "number", min: 0, step: 0.5, value: s.spacing, onChange: (q) => Et(s.id, "spacing", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })), o.default.createElement("label", null, o.default.createElement(el, null, e.torpLen), o.default.createElement("input", { type: "number", min: 0.5, step: 0.5, value: (ie = s.torpLen) != null ? ie : String(qe), onChange: (q) => Et(s.id, "torpLen", q.target.value), onFocus: (q) => q.target.select(), style: Nl() })), o.default.createElement("div", { style: { gridColumn: "1 / -1", fontSize: 13, fontWeight: 700, color: Rl ? h.torp : h.bad } }, Rl ? `${Rl.code} · ${Rl.grams.toFixed(2)} ${e.grUnit}` : e.noTorpSel)), y && (() => {
      let q = [...oo[s.id] || []].sort((pl, dn) => pl.distFromHook - dn.distFromHook);
      return q.length ? o.default.createElement("div", { style: { marginTop: 10, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 } }, o.default.createElement("span", { style: { fontSize: 12, color: h.muted, fontWeight: 700 } }, e.gets), B ? o.default.createElement(o.default.Fragment, null, q.map((pl, dn) => o.default.createElement(gs, { key: dn, p: pl }, pl.shot.code, " · ", pl.shot.grams.toFixed(3), " ", e.grUnit)), o.default.createElement("span", { style: { fontSize: 12, color: h.muted } }, Il(q[0].bulkStart), "–", Il(q[0].bulkEnd), " cm")) : q.map((pl, dn) => o.default.createElement(gs, { key: dn, p: pl }, pl.shot.code, " · ", pl.shot.grams.toFixed(pl.shot.isTorpedo ? 2 : 3), " ", e.grUnit, " · ", pl.torpEnd != null ? `${Il(pl.torpStart)}–${Il(pl.torpEnd)}` : Il(pl.distFromHook), " cm"))) : o.default.createElement("div", { style: { marginTop: 10, fontSize: 12, color: h.bad } }, e.emptyRow);
    })());
  })), d.length > 0 && o.default.createElement("div", { style: { display: "flex" } }, o.default.createElement("button", { onClick: () => {
    kl(ds(io)), zt([]);
  }, style: an(false) }, e.applyRows))))), C === "rig" && (y ? o.default.createElement(Le, null, o.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 } }, o.default.createElement("div", { style: { background: h.deep, borderRadius: 5, padding: "8px 10px" } }, o.default.createElement(el, { mb: 2 }, e.weight), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 20, fontWeight: 700, color: y.success ? h.ok : h.bad } }, y.total.toFixed(3), " ", o.default.createElement("span", { style: { fontSize: 13, color: h.muted } }, "/ ", $l.toFixed(2), " ", e.grUnit))), o.default.createElement("div", { style: { background: h.deep, borderRadius: 5, padding: "8px 10px" } }, o.default.createElement(el, { mb: 2 }, e.colPcs), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 20, fontWeight: 700 } }, zl, Rl && y.items.some((s) => s.isTorpedo) && o.default.createElement("span", { style: { fontSize: 13, color: h.torp } }, " ", e.plusTorp))), o.default.createElement("div", { style: { background: h.deep, borderRadius: 5, padding: "8px 10px" } }, o.default.createElement(el, { mb: 2 }, e.rigLenLbl), o.default.createElement("div", { style: { fontFamily: xt, fontSize: 20, fontWeight: 700 } }, Il((vs = st.rigTop) != null ? vs : st.totalCm), " cm")), o.default.createElement("label", { style: { background: h.deep, borderRadius: 5, padding: "8px 10px", display: "block" } }, o.default.createElement(el, { mb: 2 }, e.leaderLbl), o.default.createElement("input", { type: "number", min: 0, step: 1, value: O, onChange: (s) => _(s.target.value), onFocus: (s) => s.target.select(), style: Nl({ minHeight: 32, padding: "2px 8px", fontFamily: xt, fontSize: 18 }) }))), st.positions.length === 0 && o.default.createElement("div", { style: { fontSize: 14, lineHeight: 1.5, marginBottom: 10 } }, e.rigEmpty, " ", o.default.createElement("button", { onClick: () => cn("spacing"), style: { ...ql, minHeight: 32, marginLeft: 6 } }, e.goSpacing)), st.positions.length > 0 && ue < zl && o.default.createElement("div", { style: { fontSize: 13, lineHeight: 1.5, background: `${h.shot}14`, border: `1px solid ${h.shot}66`, borderRadius: 5, padding: "8px 10px", marginBottom: 10 } }, e.unplacedWarn(zl - ue)), o.default.createElement(Vm, { positions: st.positions, totalCm: st.totalCm, floatSet: st.floatSet, leaderCm: parseFloat(O) || 0, floatGrams: $l, rigLen: st.rigTop, t: e, floatName: fPick ? fPick.label : "" })) : o.default.createElement(Le, null, o.default.createElement("div", { style: { fontSize: 15, lineHeight: 1.5, marginBottom: 14 } }, e.noResult), o.default.createElement("div", { style: { display: "flex" } }, o.default.createElement("button", { onClick: () => cn("calc"), style: an(false) }, e.goCalc)))), C === "log" && React.createElement(FishingLog, { lang: l, presets: Wl, toast: as, current: y ? { floatG: f, floatName: fPick ? fPick.label : "", desc: [...Bh.map((g0) => `${g0.cnt}× ${g0.shot.code}`), ...(Rl ? [Rl.code] : [])].join(" + ") } : null })), o.default.createElement("nav", { style: { position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, background: h.bg, borderTop: `1px solid ${h.line}`, paddingBottom: "env(safe-area-inset-bottom, 0px)" } }, o.default.createElement("div", { style: { maxWidth: 560, margin: "0 auto", padding: "6px 10px 8px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 } }, Uh.map((s) => {
    let x = C === s.id;
    return o.default.createElement("button", { key: s.id, onClick: () => cn(s.id), "aria-current": x ? "page" : void 0, style: { minHeight: 62, borderRadius: 6, border: "none", borderTop: `3px solid ${x ? h.goldBrand : "transparent"}`, cursor: "pointer", background: x ? h.raised : "transparent", color: x ? h.navy : h.muted, fontFamily: Ot, fontSize: 12, fontWeight: x ? 800 : 600, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, padding: "4px 2px" } }, o.default.createElement("span", { style: { display: "flex", opacity: x ? 1 : 0.72, transform: x ? "scale(1.06)" : "none", transition: "transform .15s, opacity .15s" } }, s.icon), s.label);
  }))));
}
(0, zh.createRoot)(document.getElementById("root")).render(xh.default.createElement(Pc, null));
"serviceWorker" in navigator && window.addEventListener("load", () => {
  navigator.serviceWorker.register("./sw.js").catch(() => {
  });
});
