const options = [
  {
    position: 'positive',
    id: 0,
    label: 'Ich stimme zu'
  },
  {
    position: 'neutral',
    id: 1,
    label: 'Neutral'
  },
  {
    position: 'negative',
    id: 2,
    label: 'Ich bin dagegen'
  }
]

const parties = [
  {
    name: 'Christlich Demokratische Union Deutschlands',
    token: 'CDU',
    id: 0
  },
  {
    name: 'Sozialdemokratische Partei Deutschlands',
    token: 'SPD',
    id: 1
  },
  {
    name: 'Die Linke',
    token: 'LINKE',
    id: 2
  },
  {
    name: 'Bündnis 90/Die Grünen',
    token: 'GRÜNE',
    id: 3
  },
  {
    name: 'Freie Demokratische Partei',
    token: 'FDP',
    id: 4
  },
  {
    name: 'Alternative für Deutschland',
    token: 'AfD',
    id: 5
  }
]

const theses = [
  {
    id: 0,
    thesis:
      'Zur Stärkung des Euro sollte eine gemeinsame Wirtschaftspolitik für die Eurozone unter Leitung eines europäischen Ministers eingeführt werden.'
  },
  {
    id: 1,
    thesis:
      'Die Abgeordneten des Europäischen Parlaments sollen nach einem einheitlichen Wahlrecht über transnationale Listen gewählt werden.'
  },
  {
    id: 2,
    thesis:
      'Das Europäische Parlament sollte das Recht bekommen, eigene Gesetzesvorschläge zu machen.'
  },
  {
    id: 3,
    thesis:
      'Änderungen an den europäischen Verträgen und andere grundlegenden Entscheidungen sollten in Zukunft über einen Volksentscheid auf europäischer Ebene beschlossen werden.'
  },
  {
    id: 4,
    thesis:
      'Die Hürde für europäische Bürgerinitiativen soll von 1 Million auf 500.000 Unterschriften gesenkt werden.'
  },
  {
    id: 5,
    thesis:
      'Einflussnahme auf europäische Gesetze soll durch ein Lobbyregister transparenter gemacht werden.'
  },
  {
    id: 6,
    thesis:
      'Die Europäische Kommission sollte verkleinert werden und besser durch das Parlament kontrolliert werden.'
  },
  {
    id: 7,
    thesis:
      'Es sollte in Deutschland ein Referendum über die EU-Mitgliedschaft geben.'
  },
  {
    id: 8,
    thesis:
      'Im Sinne des Subsidiaritätsprinzips sollten nationale Parlamente ein stärkeres Mitspracherecht in der europäischen Gesetzgebung erhalten.'
  },
  {
    id: 9,
    thesis:
      'Die EU hat zu viele Aufgaben übernommen, die besser von den nationalen Parlamenten geregelt werden sollten.'
  },
  {
    id: 10,
    thesis:
      'Es sollte auch ausnahmsweise keine Grenzkontrollen im Schengen-Raum geben.'
  },
  {
    id: 11,
    thesis:
      'Deutschland soll sich für die Einführung eines gemeinsamen Asyl-Systems mit Verteilungsschlüssel auf EU-Ebene einsetzen.'
  },
  {
    id: 12,
    thesis:
      'Alle Mitgliedstaaten sollten einen größeren Beitrag zum Schutz der EU-Außengrenzen leisten und ein eigenständig wirksamer europäischer Grenzschutz ausgebaut werden.'
  },
  {
    id: 13,
    thesis:
      'Es sollte ein gemeinsamer europäischer Geheimdienst zur effektiveren Terrorismusbekämpfung aufgebaut werden.'
  },
  {
    id: 14,
    thesis:
      'Die EU soll sich gemeinsam gegen internationale Cyber-Angriffe und Fake News mit einer Spezialeinheit zur Wehr setzen.'
  },
  { id: 15, thesis: 'Die EU soll keine weiteren Flüchtlinge mehr aufnehmen.' },
  {
    id: 16,
    thesis:
      'Die EU sollte mehr Geld zur weltweiten Bekämpfung von Hunger und Armut und Fluchtursachen ausgeben.'
  },
  {
    id: 17,
    thesis:
      'Es sollte in der EU mehr Abstimmung bei Rüstungsexporten in Drittländer geben.'
  },
  {
    id: 18,
    thesis:
      'Deutschland soll sich für einen gemeinsamen EU-Sitz im UN-Sicherheitsrat einsetzen.'
  },
  { id: 19, thesis: 'Die EU soll keine neuen Mitgliedstaaten aufnehmen.' },
  {
    id: 20,
    thesis:
      'Langfristig sollten die EU-Mitgliedstaaten ihre Streitkräfte zu einer europäischen Armee vereinen.'
  },
  {
    id: 21,
    thesis:
      'Die EU sollte auf globaler Ebene aktiver für ihre gemeinsamen Werte eintreten.'
  },
  {
    id: 22,
    thesis:
      'Auf europäischer Ebene sollte eine CO2-Steuer eingeführt werden die zur Finanzierung des EU-Haushaltes beiträgt.'
  },
  {
    id: 23,
    thesis:
      'Die Bundesregierung sollte sich für ein europaweites Mitspracherecht bei dem Bau neuer Atomkraftwerke einsetzen.'
  },
  {
    id: 24,
    thesis:
      'Es sollte auf europäischer Ebene ein eigenes Förderprogramm für regenerative Energien geben.'
  },
  {
    id: 25,
    thesis:
      'Die Bundesregierung sollte sich für ein europaweites Verbot von Fracking (Schiefergasbohrungen) einsetzen.'
  },
  {
    id: 26,
    thesis:
      'Die EU sollte sich global für hohe Umwelt- und Sozialstandards und fairen Handel einsetzen.'
  },
  {
    id: 27,
    thesis:
      'Die EU sollte mehr Geld in Bildung und Zukunftstechnologien und weniger in Agrarförderung investieren.'
  },
  {
    id: 28,
    thesis: 'Es sollten europaweit angemessene Mindestlöhne eingeführt werden.'
  },
  {
    id: 29,
    thesis:
      'Es sollte europaweit einen einheitlichen Unternehmenssteuersatz geben und gegen Steuervermeidung durch international tätige Unternehmen sollte stärker vorgegangen werden.'
  },
  {
    id: 30,
    thesis:
      'Freihandelsabkommen sollten allein durch das Europäische Parlament ratifiziert werden.'
  },
  {
    id: 31,
    thesis:
      'Die EU soll zum Schutz vor unrechtmäßiger Konkurrenz einheimischer Produkte und Unternehmen verstärkt Zölle erheben.'
  },
  {
    id: 32,
    thesis:
      'Die Staaten der Eurozone sollten gemeinsam Kredite aufnehmen können für die sie gemeinsam haften (Eurobonds).'
  },
  {
    id: 33,
    thesis:
      'Die Nichteinhaltung europäischer Rechtsstandards sollte durch Kürzung von Fördermitteln sanktioniert werden.'
  },
  {
    id: 34,
    thesis:
      'Es sollte eine gemeinsame Arbeitslosenversicherung auf europäischer Ebene geben.'
  },
  {
    id: 35,
    thesis:
      'Auf europäischer Ebene sollte der Fokus auf Investitionen anstatt auf Schuldenabbau liegen.'
  },
  {
    id: 36,
    thesis:
      'Die EU sollte verstärkt in Elektromobilität und ein engmaschiges Netz an Ladestationen in ganz Europa investieren.'
  },
  {
    id: 37,
    thesis:
      'Es sollte ein Europakunde-Fach eingeführt werden welches in ganz Europa nach einem einheitlichen Lehrplan unterrichtet wird.'
  },
  {
    id: 38,
    thesis:
      'Es sollte einen gesamteuropäischen Feiertag zur Einheit Europas geben.'
  },
  {
    id: 39,
    thesis:
      'Die EU sollte weitere Barrieren für GründerInnen abbauen um ein attraktives Klima für innovative Start-Ups in Europa zu schaffen.'
  },
  {
    id: 40,
    thesis:
      'Zur interkulturellen Verständigung sollte die EU allen 18-jährigen EuropäerInnen eine Interrailkarte finanzieren.'
  },
  {
    id: 41,
    thesis:
      'Arbeitslose EU-Bürger sollten eine EU-finanzierte Starthilfe bekommen, wenn sie in einem anderen Land einen Job suchen bzw. annehmen wollen.'
  },
  {
    id: 42,
    thesis:
      'Deutschland soll sich für eine rasche Umsetzung eines digitalen Binnenmarktes einsetzen, in dem Daten so frei verkehren können, wie es für Personen, Waren, Dienstleistungen und Kapital bereits der Fall ist.'
  }
]

export default {
  options,
  parties,
  theses
}
