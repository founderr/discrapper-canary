var i = r(592204),
    a = r(131681),
    s = r(695346),
    o = r(82554),
    l = r(388032);
let u = {
    getTitle: () => l.intl.string(l.t.DPVOLS),
    getDisabledTitle: () => l.intl.string(l.t['B/dag4']),
    getDescription: () => l.intl.string(l.t['+Esd3N']),
    eligibleReportSubtypes: [o.i5.SUB_GENERAL_HARASSMENT, o.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, o.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        s.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, i.pB)({ location: 'iar_settings_upsells' }) && !(0, a.U)()
};
n.Z = u;
