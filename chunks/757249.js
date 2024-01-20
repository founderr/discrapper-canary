"use strict";
n.r(t), n.d(t, {
  useCalendar: function() {
    return X
  },
  useRangeCalendar: function() {
    return $
  },
  useCalendarGrid: function() {
    return J
  },
  useCalendarCell: function() {
    return Q
  }
}), n("222007");
var r = n("362561"),
  i = n("290895"),
  o = n("181551"),
  s = n("884691"),
  a = n("336468"),
  c = n("495912");

function u(e) {
  return e && e.__esModule ? e.default : e
}
var d = {},
  l = {},
  f = {},
  p = {},
  h = {},
  g = {},
  b = {},
  v = {},
  m = {},
  y = {},
  x = {},
  w = {},
  S = {},
  k = {},
  _ = {},
  E = {},
  M = {},
  D = {},
  C = {},
  P = {},
  T = {},
  A = {},
  R = {},
  I = {},
  O = {},
  j = {},
  N = {},
  L = {},
  F = {},
  B = {},
  z = {},
  K = {},
  V = {},
  U = {},
  q = {};
d = {
  "ar-AE": l = {
    dateRange: e => "".concat(e.startDate, " إلى ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " المحدد"),
    finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
    maximumDate: "آخر تاريخ متاح",
    minimumDate: "أول تاريخ متاح",
    next: "التالي",
    previous: "السابق",
    selectedDateDescription: e => "تاريخ محدد: ".concat(e.date),
    selectedRangeDescription: e => "المدى الزمني المحدد: ".concat(e.dateRange),
    startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
    todayDate: e => "اليوم، ".concat(e.date),
    todayDateSelected: e => "اليوم، ".concat(e.date, " محدد")
  },
  "bg-BG": f = {
    dateRange: e => "".concat(e.startDate, " до ").concat(e.endDate),
    dateSelected: e => "Избрано е ".concat(e.date),
    finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
    maximumDate: "Последна налична дата",
    minimumDate: "Първа налична дата",
    next: "Напред",
    previous: "Назад",
    selectedDateDescription: e => "Избрана дата: ".concat(e.date),
    selectedRangeDescription: e => "Избран диапазон: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
    todayDate: e => "Днес, ".concat(e.date),
    todayDateSelected: e => "Днес, ".concat(e.date, " са избрани")
  },
  "cs-CZ": p = {
    dateRange: e => "".concat(e.startDate, " až ").concat(e.endDate),
    dateSelected: e => "Vybr\xe1no ".concat(e.date),
    finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdběr rozsahu dat",
    maximumDate: "Posledn\xed dostupn\xe9 datum",
    minimumDate: "Prvn\xed dostupn\xe9 datum",
    next: "Dalš\xed",
    previous: "Předchoz\xed",
    selectedDateDescription: e => "Vybran\xe9 datum: ".concat(e.date),
    selectedRangeDescription: e => "Vybran\xe9 obdob\xed: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknut\xedm zah\xe1j\xedte v\xfdběr rozsahu dat",
    todayDate: e => "Dnes, ".concat(e.date),
    todayDateSelected: e => "Dnes, vybr\xe1no ".concat(e.date)
  },
  "da-DK": h = {
    dateRange: e => "".concat(e.startDate, " til ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " valgt"),
    finishRangeSelectionPrompt: "Klik for at fuldf\xf8re valg af datoomr\xe5de",
    maximumDate: "Sidste ledige dato",
    minimumDate: "F\xf8rste ledige dato",
    next: "N\xe6ste",
    previous: "Forrige",
    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
    selectedRangeDescription: e => "Valgt interval: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Klik for at starte valg af datoomr\xe5de",
    todayDate: e => "I dag, ".concat(e.date),
    todayDateSelected: e => "I dag, ".concat(e.date, " valgt")
  },
  "de-DE": g = {
    dateRange: e => "".concat(e.startDate, " bis ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " ausgew\xe4hlt"),
    finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
    maximumDate: "Letztes verf\xfcgbares Datum",
    minimumDate: "Erstes verf\xfcgbares Datum",
    next: "Weiter",
    previous: "Zur\xfcck",
    selectedDateDescription: e => "Ausgew\xe4hltes Datum: ".concat(e.date),
    selectedRangeDescription: e => "Ausgew\xe4hlter Bereich: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
    todayDate: e => "Heute, ".concat(e.date),
    todayDateSelected: e => "Heute, ".concat(e.date, " ausgew\xe4hlt")
  },
  "el-GR": b = {
    dateRange: e => "".concat(e.startDate, " έως ").concat(e.endDate),
    dateSelected: e => "Επιλέχθηκε ".concat(e.date),
    finishRangeSelectionPrompt: "Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
    maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
    minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
    next: "Επόμενο",
    previous: "Προηγούμενο",
    selectedDateDescription: e => "Επιλεγμένη ημερομηνία: ".concat(e.date),
    selectedRangeDescription: e => "Επιλεγμένο εύρος: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
    todayDate: e => "Σήμερα, ".concat(e.date),
    todayDateSelected: e => "Σήμερα, επιλέχτηκε ".concat(e.date)
  },
  "en-US": v = {
    previous: "Previous",
    next: "Next",
    selectedDateDescription: e => "Selected Date: ".concat(e.date),
    selectedRangeDescription: e => "Selected Range: ".concat(e.dateRange),
    todayDate: e => "Today, ".concat(e.date),
    todayDateSelected: e => "Today, ".concat(e.date, " selected"),
    dateSelected: e => "".concat(e.date, " selected"),
    startRangeSelectionPrompt: "Click to start selecting date range",
    finishRangeSelectionPrompt: "Click to finish selecting date range",
    minimumDate: "First available date",
    maximumDate: "Last available date",
    dateRange: e => "".concat(e.startDate, " to ").concat(e.endDate)
  },
  "es-ES": m = {
    dateRange: e => "".concat(e.startDate, " a ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " seleccionado"),
    finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
    maximumDate: "\xdaltima fecha disponible",
    minimumDate: "Primera fecha disponible",
    next: "Siguiente",
    previous: "Anterior",
    selectedDateDescription: e => "Fecha seleccionada: ".concat(e.date),
    selectedRangeDescription: e => "Intervalo seleccionado: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
    todayDate: e => "Hoy, ".concat(e.date),
    todayDateSelected: e => "Hoy, ".concat(e.date, " seleccionado")
  },
  "et-EE": y = {
    dateRange: e => "".concat(e.startDate, " kuni ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " valitud"),
    finishRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks",
    maximumDate: "Viimane saadaolev kuup\xe4ev",
    minimumDate: "Esimene saadaolev kuup\xe4ev",
    next: "J\xe4rgmine",
    previous: "Eelmine",
    selectedDateDescription: e => "Valitud kuup\xe4ev: ".concat(e.date),
    selectedRangeDescription: e => "Valitud vahemik: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimiseks",
    todayDate: e => "T\xe4na, ".concat(e.date),
    todayDateSelected: e => "T\xe4na, ".concat(e.date, " valitud")
  },
  "fi-FI": x = {
    dateRange: e => "".concat(e.startDate, " – ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " valittu"),
    finishRangeSelectionPrompt: "Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
    maximumDate: "Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
    minimumDate: "Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
    next: "Seuraava",
    previous: "Edellinen",
    selectedDateDescription: e => "Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ".concat(e.date),
    selectedRangeDescription: e => "Valittu aikav\xe4li: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
    todayDate: e => "T\xe4n\xe4\xe4n, ".concat(e.date),
    todayDateSelected: e => "T\xe4n\xe4\xe4n, ".concat(e.date, " valittu")
  },
  "fr-FR": w = {
    dateRange: e => "".concat(e.startDate, " \xe0 ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " s\xe9lectionn\xe9"),
    finishRangeSelectionPrompt: "Cliquer pour finir de s\xe9lectionner la plage de dates",
    maximumDate: "Derni\xe8re date disponible",
    minimumDate: "Premi\xe8re date disponible",
    next: "Suivant",
    previous: "Pr\xe9c\xe9dent",
    selectedDateDescription: e => "Date s\xe9lectionn\xe9e\xa0: ".concat(e.date),
    selectedRangeDescription: e => "Plage s\xe9lectionn\xe9e\xa0: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates",
    todayDate: e => "Aujourd'hui, ".concat(e.date),
    todayDateSelected: e => "Aujourd’hui, ".concat(e.date, " s\xe9lectionn\xe9")
  },
  "he-IL": S = {
    dateRange: e => "".concat(e.startDate, " עד ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " נבחר"),
    finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
    maximumDate: "תאריך פנוי אחרון",
    minimumDate: "תאריך פנוי ראשון",
    next: "הבא",
    previous: "הקודם",
    selectedDateDescription: e => "תאריך נבחר: ".concat(e.date),
    selectedRangeDescription: e => "טווח נבחר: ".concat(e.dateRange),
    startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
    todayDate: e => "היום, ".concat(e.date),
    todayDateSelected: e => "היום, ".concat(e.date, " נבחר")
  },
  "hr-HR": k = {
    dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " odabran"),
    finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
    maximumDate: "Posljednji raspoloživi datum",
    minimumDate: "Prvi raspoloživi datum",
    next: "Sljedeći",
    previous: "Prethodni",
    selectedDateDescription: e => "Odabrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Odabrani raspon: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
    todayDate: e => "Danas, ".concat(e.date),
    todayDateSelected: e => "Danas, odabran ".concat(e.date)
  },
  "hu-HU": _ = {
    dateRange: e => "".concat(e.startDate, "–").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " kiv\xe1lasztva"),
    finishRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez",
    maximumDate: "Utols\xf3 el\xe9rhető d\xe1tum",
    minimumDate: "Az első el\xe9rhető d\xe1tum",
    next: "K\xf6vetkező",
    previous: "Előző",
    selectedDateDescription: e => "Kijel\xf6lt d\xe1tum: ".concat(e.date),
    selectedRangeDescription: e => "Kijel\xf6lt tartom\xe1ny: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz",
    todayDate: e => "Ma, ".concat(e.date),
    todayDateSelected: e => "Ma, ".concat(e.date, " kijel\xf6lve")
  },
  "it-IT": E = {
    dateRange: e => "Da ".concat(e.startDate, " a ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " selezionata"),
    finishRangeSelectionPrompt: "Fai clic per completare la selezione dell’intervallo di date",
    maximumDate: "Ultima data disponibile",
    minimumDate: "Prima data disponibile",
    next: "Successivo",
    previous: "Precedente",
    selectedDateDescription: e => "Data selezionata: ".concat(e.date),
    selectedRangeDescription: e => "Intervallo selezionato: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
    todayDate: e => "Oggi, ".concat(e.date),
    todayDateSelected: e => "Oggi, ".concat(e.date, " selezionata")
  },
  "ja-JP": M = {
    dateRange: e => "".concat(e.startDate, " から ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " を選択"),
    finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
    maximumDate: "最終利用可能日",
    minimumDate: "最初の利用可能日",
    next: "次へ",
    previous: "前へ",
    selectedDateDescription: e => "選択した日付 : ".concat(e.date),
    selectedRangeDescription: e => "選択範囲 : ".concat(e.dateRange),
    startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
    todayDate: e => "本日、".concat(e.date),
    todayDateSelected: e => "本日、".concat(e.date, " を選択")
  },
  "ko-KR": D = {
    dateRange: e => "".concat(e.startDate, " ~ ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " 선택됨"),
    finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
    maximumDate: "마지막으로 사용 가능한 일자",
    minimumDate: "처음으로 사용 가능한 일자",
    next: "다음",
    previous: "이전",
    selectedDateDescription: e => "선택 일자: ".concat(e.date),
    selectedRangeDescription: e => "선택 범위: ".concat(e.dateRange),
    startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
    todayDate: e => "오늘, ".concat(e.date),
    todayDateSelected: e => "오늘, ".concat(e.date, " 선택됨")
  },
  "lt-LT": C = {
    dateRange: e => "Nuo ".concat(e.startDate, " iki ").concat(e.endDate),
    dateSelected: e => "Pasirinkta ".concat(e.date),
    finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
    maximumDate: "Paskutinė galima data",
    minimumDate: "Pirmoji galima data",
    next: "Paskesnis",
    previous: "Ankstesnis",
    selectedDateDescription: e => "Pasirinkta data: ".concat(e.date),
    selectedRangeDescription: e => "Pasirinktas intervalas: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
    todayDate: e => "Šiandien, ".concat(e.date),
    todayDateSelected: e => "Šiandien, pasirinkta ".concat(e.date)
  },
  "lv-LV": P = {
    dateRange: e => "No ".concat(e.startDate, " līdz ").concat(e.endDate),
    dateSelected: e => "Atlasīts: ".concat(e.date),
    finishRangeSelectionPrompt: "Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
    maximumDate: "Pēdējais pieejamais datums",
    minimumDate: "Pirmais pieejamais datums",
    next: "Tālāk",
    previous: "Atpakaļ",
    selectedDateDescription: e => "Atlasītais datums: ".concat(e.date),
    selectedRangeDescription: e => "Atlasītais diapazons: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
    todayDate: e => "Šodien, ".concat(e.date),
    todayDateSelected: e => "Atlasīta šodiena, ".concat(e.date)
  },
  "nb-NO": T = {
    dateRange: e => "".concat(e.startDate, " til ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " valgt"),
    finishRangeSelectionPrompt: "Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de",
    maximumDate: "Siste tilgjengelige dato",
    minimumDate: "F\xf8rste tilgjengelige dato",
    next: "Neste",
    previous: "Forrige",
    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
    selectedRangeDescription: e => "Valgt omr\xe5de: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Klikk for \xe5 starte valg av datoomr\xe5de",
    todayDate: e => "I dag, ".concat(e.date),
    todayDateSelected: e => "I dag, ".concat(e.date, " valgt")
  },
  "nl-NL": A = {
    dateRange: e => "".concat(e.startDate, " tot ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " geselecteerd"),
    finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
    maximumDate: "Laatste beschikbare datum",
    minimumDate: "Eerste beschikbare datum",
    next: "Volgende",
    previous: "Vorige",
    selectedDateDescription: e => "Geselecteerde datum: ".concat(e.date),
    selectedRangeDescription: e => "Geselecteerd bereik: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
    todayDate: e => "Vandaag, ".concat(e.date),
    todayDateSelected: e => "Vandaag, ".concat(e.date, " geselecteerd")
  },
  "pl-PL": R = {
    dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
    dateSelected: e => "Wybrano ".concat(e.date),
    finishRangeSelectionPrompt: "Kliknij, aby zakończyć wyb\xf3r zakresu dat",
    maximumDate: "Ostatnia dostępna data",
    minimumDate: "Pierwsza dostępna data",
    next: "Dalej",
    previous: "Wstecz",
    selectedDateDescription: e => "Wybrana data: ".concat(e.date),
    selectedRangeDescription: e => "Wybrany zakres: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknij, aby rozpocząć wyb\xf3r zakresu dat",
    todayDate: e => "Dzisiaj, ".concat(e.date),
    todayDateSelected: e => "Dzisiaj wybrano ".concat(e.date)
  },
  "pt-BR": I = {
    dateRange: e => "".concat(e.startDate, " a ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " selecionado"),
    finishRangeSelectionPrompt: "Clique para concluir a sele\xe7\xe3o do intervalo de datas",
    maximumDate: "\xdaltima data dispon\xedvel",
    minimumDate: "Primeira data dispon\xedvel",
    next: "Pr\xf3ximo",
    previous: "Anterior",
    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Clique para iniciar a sele\xe7\xe3o do intervalo de datas",
    todayDate: e => "Hoje, ".concat(e.date),
    todayDateSelected: e => "Hoje, ".concat(e.date, " selecionado")
  },
  "pt-PT": O = {
    dateRange: e => "".concat(e.startDate, " a ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " selecionado"),
    finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
    maximumDate: "\xdaltima data dispon\xedvel",
    minimumDate: "Primeira data dispon\xedvel",
    next: "Pr\xf3ximo",
    previous: "Anterior",
    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Clique para come\xe7ar a selecionar o intervalo de datas",
    todayDate: e => "Hoje, ".concat(e.date),
    todayDateSelected: e => "Hoje, ".concat(e.date, " selecionado")
  },
  "ro-RO": j = {
    dateRange: e => "De la ".concat(e.startDate, " p\xe2nă la ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " selectată"),
    finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
    maximumDate: "Ultima dată disponibilă",
    minimumDate: "Prima dată disponibilă",
    next: "Următorul",
    previous: "\xcenainte",
    selectedDateDescription: e => "Dată selectată: ".concat(e.date),
    selectedRangeDescription: e => "Interval selectat: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Apăsaţi pentru a \xeencepe selecţia razei pentru dată",
    todayDate: e => "Astăzi, ".concat(e.date),
    todayDateSelected: e => "Azi, ".concat(e.date, " selectată")
  },
  "ru-RU": N = {
    dateRange: e => "С ".concat(e.startDate, " по ").concat(e.endDate),
    dateSelected: e => "Выбрано ".concat(e.date),
    finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
    maximumDate: "Последняя доступная дата",
    minimumDate: "Первая доступная дата",
    next: "Далее",
    previous: "Назад",
    selectedDateDescription: e => "Выбранная дата: ".concat(e.date),
    selectedRangeDescription: e => "Выбранный диапазон: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
    todayDate: e => "Сегодня, ".concat(e.date),
    todayDateSelected: e => "Сегодня, выбрано ".concat(e.date)
  },
  "sk-SK": L = {
    dateRange: e => "Od ".concat(e.startDate, " do ").concat(e.endDate),
    dateSelected: e => "Vybrat\xfd d\xe1tum ".concat(e.date),
    finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdber rozsahu d\xe1tumov",
    maximumDate: "Posledn\xfd dostupn\xfd d\xe1tum",
    minimumDate: "Prv\xfd dostupn\xfd d\xe1tum",
    next: "Nasleduj\xface",
    previous: "Predch\xe1dzaj\xface",
    selectedDateDescription: e => "Vybrat\xfd d\xe1tum: ".concat(e.date),
    selectedRangeDescription: e => "Vybrat\xfd rozsah: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov",
    todayDate: e => "Dnes ".concat(e.date),
    todayDateSelected: e => "Vybrat\xfd dnešn\xfd d\xe1tum ".concat(e.date)
  },
  "sl-SI": F = {
    dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " izbrano"),
    finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
    maximumDate: "Zadnji razpoložljivi datum",
    minimumDate: "Prvi razpoložljivi datum",
    next: "Naprej",
    previous: "Nazaj",
    selectedDateDescription: e => "Izbrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Izbrano območje: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
    todayDate: e => "Danes, ".concat(e.date),
    todayDateSelected: e => "Danes, ".concat(e.date, " izbrano")
  },
  "sr-SP": B = {
    dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " izabran"),
    finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
    maximumDate: "Zadnji raspoloživi datum",
    minimumDate: "Prvi raspoloživi datum",
    next: "Sledeći",
    previous: "Prethodni",
    selectedDateDescription: e => "Izabrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Izabrani period: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
    todayDate: e => "Danas, ".concat(e.date),
    todayDateSelected: e => "Danas, izabran ".concat(e.date)
  },
  "sv-SE": z = {
    dateRange: e => "".concat(e.startDate, " till ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " har valts"),
    finishRangeSelectionPrompt: "Klicka f\xf6r att avsluta val av datumintervall",
    maximumDate: "Sista tillg\xe4ngliga datum",
    minimumDate: "F\xf6rsta tillg\xe4ngliga datum",
    next: "N\xe4sta",
    previous: "F\xf6reg\xe5ende",
    selectedDateDescription: e => "Valt datum: ".concat(e.date),
    selectedRangeDescription: e => "Valt intervall: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Klicka f\xf6r att v\xe4lja datumintervall",
    todayDate: e => "Idag, ".concat(e.date),
    todayDateSelected: e => "Idag, ".concat(e.date, " har valts")
  },
  "tr-TR": K = {
    dateRange: e => "".concat(e.startDate, " - ").concat(e.endDate),
    dateSelected: e => "".concat(e.date, " se\xe7ildi"),
    finishRangeSelectionPrompt: "Tarih aralığı se\xe7imini tamamlamak i\xe7in tıklayın",
    maximumDate: "Son m\xfcsait tarih",
    minimumDate: "İlk m\xfcsait tarih",
    next: "Sonraki",
    previous: "\xd6nceki",
    selectedDateDescription: e => "Se\xe7ilen Tarih: ".concat(e.date),
    selectedRangeDescription: e => "Se\xe7ilen Aralık: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Tarih aralığı se\xe7imini başlatmak i\xe7in tıklayın",
    todayDate: e => "Bug\xfcn, ".concat(e.date),
    todayDateSelected: e => "Bug\xfcn, ".concat(e.date, " se\xe7ildi")
  },
  "uk-UA": V = {
    dateRange: e => "".concat(e.startDate, " — ").concat(e.endDate),
    dateSelected: e => "Вибрано ".concat(e.date),
    finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
    maximumDate: "Остання доступна дата",
    minimumDate: "Перша доступна дата",
    next: "Наступний",
    previous: "Попередній",
    selectedDateDescription: e => "Вибрана дата: ".concat(e.date),
    selectedRangeDescription: e => "Вибраний діапазон: ".concat(e.dateRange),
    startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
    todayDate: e => "Сьогодні, ".concat(e.date),
    todayDateSelected: e => "Сьогодні, вибрано ".concat(e.date)
  },
  "zh-CN": U = {
    dateRange: e => "".concat(e.startDate, " 至 ").concat(e.endDate),
    dateSelected: e => "已选择 ".concat(e.date),
    finishRangeSelectionPrompt: "单击以完成选择日期范围",
    maximumDate: "最后一个可用日期",
    minimumDate: "第一个可用日期",
    next: "下一页",
    previous: "上一页",
    selectedDateDescription: e => "选定的日期：".concat(e.date),
    selectedRangeDescription: e => "选定的范围：".concat(e.dateRange),
    startRangeSelectionPrompt: "单击以开始选择日期范围",
    todayDate: e => "今天，即 ".concat(e.date),
    todayDateSelected: e => "已选择今天，即 ".concat(e.date)
  },
  "zh-TW": q = {
    dateRange: e => "".concat(e.startDate, " 至 ").concat(e.endDate),
    dateSelected: e => "已選取 ".concat(e.date),
    finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
    maximumDate: "最後一個可用日期",
    minimumDate: "第一個可用日期",
    next: "下一頁",
    previous: "上一頁",
    selectedDateDescription: e => "選定的日期：".concat(e.date),
    selectedRangeDescription: e => "選定的範圍：".concat(e.dateRange),
    startRangeSelectionPrompt: "按一下以開始選取日期範圍",
    todayDate: e => "今天，".concat(e.date),
    todayDateSelected: e => "已選取今天，".concat(e.date)
  }
};
let H = new WeakMap;

function G(e) {
  return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0
}

function W(e, t, n, r) {
  let i = (0, o.useLocalizedStringFormatter)(u(d)),
    c = G(e) || G(t),
    l = (0, o.useDateFormatter)({
      month: "long",
      year: "numeric",
      era: c,
      calendar: e.calendar.identifier,
      timeZone: n
    }),
    f = (0, o.useDateFormatter)({
      month: "long",
      year: "numeric",
      day: "numeric",
      era: c,
      calendar: e.calendar.identifier,
      timeZone: n
    });
  return (0, s.useMemo)(() => {
    if ((0, a.isSameDay)(e, (0, a.startOfMonth)(e))) {
      if ((0, a.isSameDay)(t, (0, a.endOfMonth)(e))) return l.format(e.toDate(n));
      if ((0, a.isSameDay)(t, (0, a.endOfMonth)(t))) return r ? Z(l, i, e, t, n) : l.formatRange(e.toDate(n), t.toDate(n))
    }
    return r ? Z(f, i, e, t, n) : f.formatRange(e.toDate(n), t.toDate(n))
  }, [e, t, l, f, i, n, r])
}

function Z(e, t, n, r, i) {
  let o = e.formatRangeToParts(n.toDate(i), r.toDate(i)),
    s = -1;
  for (let e = 0; e < o.length; e++) {
    let t = o[e];
    if ("shared" === t.source && "literal" === t.type) s = e;
    else if ("endRange" === t.source) break
  }
  let a = "",
    c = "";
  for (let e = 0; e < o.length; e++) e < s ? a += o[e].value : e > s && (c += o[e].value);
  return t.format("dateRange", {
    startDate: a,
    endDate: c
  })
}

function Y(e, t) {
  var n;
  let c, l, f, p, h, g = (0, o.useLocalizedStringFormatter)(u(d)),
    b = (0, i.filterDOMProps)(e),
    v = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
    m = W(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  (0, i.useUpdateEffect)(() => {
    !t.isFocused && (0, r.announce)(m)
  }, [m]);
  let y = (n = t, f = (0, o.useLocalizedStringFormatter)(u(d)), "highlightedRange" in n ? {
    start: c,
    end: l
  } = n.highlightedRange || {} : c = l = n.value, p = (0, o.useDateFormatter)({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: G(c) || G(l),
    timeZone: n.timeZone
  }), h = "anchorDate" in n ? n.anchorDate : null, (0, s.useMemo)(() => {
    if (!h && c && l) {
      if ((0, a.isSameDay)(c, l)) {
        let e = p.format(c.toDate(n.timeZone));
        return f.format("selectedDateDescription", {
          date: e
        })
      } {
        let e = Z(p, f, c, l, n.timeZone);
        return f.format("selectedRangeDescription", {
          dateRange: e
        })
      }
    }
    return ""
  }, [c, l, h, n.timeZone, f, p]));
  (0, i.useUpdateEffect)(() => {
    y && (0, r.announce)(y, "polite", 4e3)
  }, [y]);
  let x = (0, i.useSlotId)([!!e.errorMessage, e.isInvalid, e.validationState]);
  H.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: x,
    selectedDateDescription: y
  });
  let [w, S] = (0, s.useState)(!1), k = e.isDisabled || t.isNextVisibleRangeInvalid();
  k && w && (S(!1), t.setFocused(!0));
  let [_, E] = (0, s.useState)(!1), M = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  M && _ && (E(!1), t.setFocused(!0));
  let D = (0, i.useLabels)({
    id: e.id,
    "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, i.mergeProps)(b, D, {
      role: "application",
      "aria-describedby": e["aria-describedby"] || void 0
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": g.format("next"),
      isDisabled: k,
      onFocusChange: S
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": g.format("previous"),
      isDisabled: M,
      onFocusChange: E
    },
    errorMessageProps: {
      id: x
    },
    title: v
  }
}

function X(e, t) {
  return Y(e, t)
}

function $(e, t, n) {
  let r = Y(e, t),
    o = (0, s.useRef)(!1),
    a = (0, s.useRef)("undefined" != typeof window ? window : null);
  (0, i.useEvent)(a, "pointerdown", e => {
    o.current = 0 === e.width && 0 === e.height
  });
  let c = e => {
    if (o.current) {
      o.current = !1;
      return
    }
    if (t.setDragging(!1), !t.anchorDate) return;
    let n = e.target,
      i = document.getElementById(r.calendarProps.id);
    i && i.contains(document.activeElement) && (!i.contains(n) || !n.closest('button, [role="button"]')) && t.selectFocusedDate()
  };
  return (0, i.useEvent)(a, "pointerup", c), (0, i.useEvent)(a, "pointercancel", c), r.calendarProps.onBlur = e => {
    (!e.relatedTarget || !n.current.contains(e.relatedTarget)) && t.anchorDate && t.selectFocusedDate()
  }, (0, i.useEvent)(n, "touchmove", e => {
    t.isDragging && e.preventDefault()
  }, {
    passive: !1,
    capture: !0
  }), r
}

function J(e, t) {
  let {
    startDate: n = t.visibleRange.start,
    endDate: r = t.visibleRange.end
  } = e, {
    direction: c
  } = (0, o.useLocale)(), u = W(n, r, t.timeZone, !0), {
    ariaLabel: d,
    ariaLabelledBy: l
  } = H.get(t), f = (0, i.useLabels)({
    "aria-label": [d, u].filter(Boolean).join(", "),
    "aria-labelledby": l
  }), p = (0, o.useDateFormatter)({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), {
    locale: h
  } = (0, o.useLocale)(), g = (0, s.useMemo)(() => {
    let e = (0, a.startOfWeek)((0, a.today)(t.timeZone), h);
    return [...Array(7).keys()].map(n => {
      let r = e.add({
        days: n
      }).toDate(t.timeZone);
      return p.format(r)
    })
  }, [h, t.timeZone, p]);
  return {
    gridProps: (0, i.mergeProps)(f, {
      role: "grid",
      "aria-readonly": t.isReadOnly || null,
      "aria-disabled": t.isDisabled || null,
      "aria-multiselectable": "highlightedRange" in t || void 0,
      onKeyDown: e => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault(), t.selectFocusedDate();
            break;
          case "PageUp":
            e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
            break;
          case "PageDown":
            e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
            break;
          case "End":
            e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
            break;
          case "Home":
            e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
            break;
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), "rtl" === c ? t.focusNextDay() : t.focusPreviousDay();
            break;
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
            break;
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), "rtl" === c ? t.focusPreviousDay() : t.focusNextDay();
            break;
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), t.focusNextRow();
            break;
          case "Escape":
            "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null))
        }
      },
      onFocus: () => t.setFocused(!0),
      onBlur: () => t.setFocused(!1)
    }),
    headerProps: {
      "aria-hidden": !0
    },
    weekDays: g
  }
}

function Q(e, t, n) {
  let {
    date: r,
    isDisabled: l
  } = e, {
    errorMessageId: f,
    selectedDateDescription: p
  } = H.get(t), h = (0, o.useLocalizedStringFormatter)(u(d)), g = (0, o.useDateFormatter)({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: G(r),
    timeZone: t.timeZone
  }), b = t.isSelected(r), v = t.isCellFocused(r);
  l = l || t.isCellDisabled(r);
  let m = t.isCellUnavailable(r),
    y = !l && !m,
    x = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && 0 >= r.compare(t.highlightedRange.end) : t.value && (0, a.isSameDay)(t.value, r));
  x && (b = !0), r = (0, i.useDeepMemo)(r, a.isEqualDay);
  let w = (0, s.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]),
    S = (0, a.isToday)(r, t.timeZone),
    k = (0, s.useMemo)(() => {
      let e = "";
      return "highlightedRange" in t && t.value && !t.anchorDate && ((0, a.isSameDay)(r, t.value.start) || (0, a.isSameDay)(r, t.value.end)) && (e = p + ", "), e += g.format(w), S ? e = h.format(b ? "todayDateSelected" : "todayDate", {
        date: e
      }) : b && (e = h.format("dateSelected", {
        date: e
      })), t.minValue && (0, a.isSameDay)(r, t.minValue) ? e += ", " + h.format("minimumDate") : t.maxValue && (0, a.isSameDay)(r, t.maxValue) && (e += ", " + h.format("maximumDate")), e
    }, [g, w, h, b, S, r, t, p]),
    _ = "";
  "anchorDate" in t && v && !t.isReadOnly && y && (_ = t.anchorDate ? h.format("finishRangeSelectionPrompt") : h.format("startRangeSelectionPrompt"));
  let E = (0, i.useDescription)(_),
    M = (0, s.useRef)(!1),
    D = (0, s.useRef)(!1),
    C = (0, s.useRef)(null),
    {
      pressProps: P,
      isPressed: T
    } = (0, c.usePress)({
      shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
      preventFocusOnPress: !0,
      isDisabled: !y || t.isReadOnly,
      onPressStart(e) {
        if (t.isReadOnly) {
          t.setFocusedDate(r);
          return
        }
        if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
          if (t.highlightedRange && !x) {
            if ((0, a.isSameDay)(r, t.highlightedRange.start)) {
              t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), D.current = !0;
              return
            }
            if ((0, a.isSameDay)(r, t.highlightedRange.end)) {
              t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), D.current = !0;
              return
            }
          }
          let n = () => {
            t.setDragging(!0), C.current = null, t.selectDate(r), t.setFocusedDate(r), M.current = !0
          };
          "touch" === e.pointerType ? C.current = setTimeout(n, 200) : n()
        }
      },
      onPressEnd() {
        D.current = !1, M.current = !1, clearTimeout(C.current), C.current = null
      },
      onPress() {
        !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r))
      },
      onPressUp(e) {
        if (!t.isReadOnly && ("anchorDate" in t && C.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t)) {
          if (D.current) t.setAnchorDate(r);
          else if (t.anchorDate && !M.current) t.selectDate(r), t.setFocusedDate(r);
          else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(r), t.setFocusedDate(r));
          else {
            t.selectDate(r);
            let e = r.add({
              days: 1
            });
            t.isInvalid(e) && (e = r.subtract({
              days: 1
            })), !t.isInvalid(e) && t.setFocusedDate(e)
          }
        }
      }
    }),
    A = null;
  !l && (A = (0, a.isSameDay)(r, t.focusedDate) ? 0 : -1), (0, s.useEffect)(() => {
    v && n.current && ((0, i.focusWithoutScrolling)(n.current), "pointer" !== (0, c.getInteractionModality)() && document.activeElement === n.current && (0, i.scrollIntoViewport)(n.current, {
      containingElement: (0, i.getScrollParent)(n.current)
    }))
  }, [v, n]);
  let R = (0, o.useDateFormatter)({
      day: "numeric",
      timeZone: t.timeZone,
      calendar: r.calendar.identifier
    }),
    I = (0, s.useMemo)(() => R.formatToParts(w).find(e => "day" === e.type).value, [R, w]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !y || null,
      "aria-selected": b || null,
      "aria-invalid": x || null
    },
    buttonProps: (0, i.mergeProps)(P, {
      onFocus() {
        !l && t.setFocusedDate(r)
      },
      tabIndex: A,
      role: "button",
      "aria-disabled": !y || null,
      "aria-label": k,
      "aria-invalid": x || null,
      "aria-describedby": [x ? f : null, E["aria-describedby"]].filter(Boolean).join(" ") || void 0,
      onPointerEnter(e) {
        "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && y && t.highlightDate(r)
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
      },
      onContextMenu(e) {
        e.preventDefault()
      }
    }),
    isPressed: T,
    isFocused: v,
    isSelected: b,
    isDisabled: l,
    isUnavailable: m,
    isOutsideVisibleRange: 0 > r.compare(t.visibleRange.start) || r.compare(t.visibleRange.end) > 0,
    isInvalid: x,
    formattedDate: I
  }
}