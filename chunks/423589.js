e.d(n, {
    Mn: function () {
        return p;
    },
    OD: function () {
        return g;
    },
    W9: function () {
        return E;
    }
}),
    e(47120),
    e(789020);
var i = e(442837),
    l = e(798140),
    r = e(9156),
    d = e(630388),
    a = e(709054),
    u = e(312400),
    s = e(981631),
    o = e(969943),
    _ = e(526761),
    c = e(388032);
function E() {
    return [
        {
            label: c.intl.string(c.t['8ot6go']),
            value: o.Oe.MINUTES_15
        },
        {
            label: c.intl.string(c.t.UMWBZm),
            value: o.Oe.HOURS_1
        },
        {
            label: c.intl.string(c.t.QmYWtr),
            value: o.Oe.HOURS_3
        },
        {
            label: c.intl.string(c.t.EpAXPD),
            value: o.Oe.HOURS_8
        },
        {
            label: c.intl.string(c.t['755t4u']),
            value: o.Oe.HOURS_24
        },
        {
            label: c.intl.string(c.t.r3LawM),
            value: o.Oe.ALWAYS
        }
    ];
}
let I = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function g(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
    return a.default.keys(t).filter((e) => {
        var i, r;
        let a = t[e].message_notifications !== s.bL.NULL,
            u = d.yE(null !== (i = t[e].flags) && void 0 !== i ? i : 0, _.ic.UNREADS_ALL_MESSAGES) || d.yE(null !== (r = t[e].flags) && void 0 !== r ? r : 0, _.ic.UNREADS_ONLY_MENTIONS);
        return (!n.ignoreUnreadSetting && u) || (!n.ignoreNotificationSetting && a) || (!n.ignoreMute && (0, l.m$)(t[e]));
    });
}
function p(t) {
    let n = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
    return u.xT.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && n;
}
