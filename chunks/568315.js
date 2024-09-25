var r = n(106351),
    i = n(524437),
    a = n(695346),
    o = n(82554),
    s = n(689938);
let l = {
    getTitle: () => s.Z.Messages.IAR_UPSELLS_DM_SPAM_FILTER_TITLE,
    getDescription: () => s.Z.Messages.IAR_UPSELLS_DM_SPAM_FILTER_DESCRIPTION,
    eligibleReportSubtypes: [o.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => a.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => a.Xr.getSetting() === i.Xr.DISABLED
};
t.Z = l;
