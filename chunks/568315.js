var r = n(106351),
    i = n(524437),
    a = n(695346),
    s = n(82554),
    o = n(388032);
let l = {
    getTitle: () => o.intl.string(o.t.vJOqMD),
    getDisabledTitle: () => o.intl.string(o.t.B5ZvY2),
    getDescription: () => o.intl.string(o.t['43UEUl']),
    eligibleReportSubtypes: [s.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => a.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => a.Xr.getSetting() === i.Xr.DISABLED
};
t.Z = l;
