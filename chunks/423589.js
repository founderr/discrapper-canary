e.d(t, {
    Mn: function () {
        return v;
    },
    OD: function () {
        return _;
    },
    W9: function () {
        return E;
    }
}),
    e(47120),
    e(789020);
var i = e(442837),
    a = e(798140),
    r = e(9156),
    l = e(630388),
    u = e(709054),
    o = e(312400),
    c = e(981631),
    d = e(969943),
    s = e(526761),
    f = e(388032);
function E() {
    return [
        {
            label: f.intl.string(f.t['8ot6go']),
            value: d.Oe.MINUTES_15
        },
        {
            label: f.intl.string(f.t.UMWBZm),
            value: d.Oe.HOURS_1
        },
        {
            label: f.intl.string(f.t.QmYWtr),
            value: d.Oe.HOURS_3
        },
        {
            label: f.intl.string(f.t.EpAXPD),
            value: d.Oe.HOURS_8
        },
        {
            label: f.intl.string(f.t['755t4u']),
            value: d.Oe.HOURS_24
        },
        {
            label: f.intl.string(f.t.r3LawM),
            value: d.Oe.ALWAYS
        }
    ];
}
let g = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function _(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
    return u.default.keys(n).filter((e) => {
        var i, r;
        let u = n[e].message_notifications !== c.bL.NULL,
            o = l.yE(null !== (i = n[e].flags) && void 0 !== i ? i : 0, s.ic.UNREADS_ALL_MESSAGES) || l.yE(null !== (r = n[e].flags) && void 0 !== r ? r : 0, s.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && o) || (!t.ignoreNotificationSetting && u) || (!t.ignoreMute && (0, a.m$)(n[e]));
    });
}
function v(n) {
    let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
    return o.xT.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled && t;
}
