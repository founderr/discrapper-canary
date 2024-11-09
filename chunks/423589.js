n.d(e, {
    Mn: function () {
        return M;
    },
    OD: function () {
        return b;
    },
    W9: function () {
        return g;
    }
}),
    n(47120),
    n(789020);
var i = n(442837),
    l = n(798140),
    u = n(9156),
    a = n(630388),
    r = n(709054),
    o = n(312400),
    d = n(981631),
    c = n(969943),
    s = n(526761),
    f = n(388032);
function g() {
    return [
        {
            label: f.intl.string(f.t['8ot6go']),
            value: c.Oe.MINUTES_15
        },
        {
            label: f.intl.string(f.t.UMWBZm),
            value: c.Oe.HOURS_1
        },
        {
            label: f.intl.string(f.t.QmYWtr),
            value: c.Oe.HOURS_3
        },
        {
            label: f.intl.string(f.t.EpAXPD),
            value: c.Oe.HOURS_8
        },
        {
            label: f.intl.string(f.t['755t4u']),
            value: c.Oe.HOURS_24
        },
        {
            label: f.intl.string(f.t.r3LawM),
            value: c.Oe.ALWAYS
        }
    ];
}
let _ = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function b(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return r.default.keys(t).filter((n) => {
        var i, u;
        let r = t[n].message_notifications !== d.bL.NULL,
            o = a.yE(null !== (i = t[n].flags) && void 0 !== i ? i : 0, s.ic.UNREADS_ALL_MESSAGES) || a.yE(null !== (u = t[n].flags) && void 0 !== u ? u : 0, s.ic.UNREADS_ONLY_MENTIONS);
        return (!e.ignoreUnreadSetting && o) || (!e.ignoreNotificationSetting && r) || (!e.ignoreMute && (0, l.m$)(t[n]));
    });
}
function M(t) {
    let e = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
    return o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && e;
}
