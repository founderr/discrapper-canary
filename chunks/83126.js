var r = n(131681),
  i = n(695346),
  a = n(82554),
  s = n(689938);
let o = {
  title: () => s.Z.Messages.IAR_UPSELLS_LANGUAGE_FILTER_TITLE,
  description: () => s.Z.Messages.IAR_UPSELLS_LANGUAGE_FILTER_DESCRIPTION,
  eligibleReportSubtypes: [
a.i5.SUB_GENERAL_HARASSMENT,
a.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY,
a.i5.SUB_VULGAR_LANGUAGE
  ],
  onApply: () => i.gw.updateSetting({
profanity: !0,
slurs: !0,
sexualContent: !0
  }),
  usePredicate: () => !(0, r.U)()
};
t.Z = o;