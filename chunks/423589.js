t.d(n, {
    Mn: function () {
        return h;
    },
    OD: function () {
        return f;
    },
    W9: function () {
        return g;
    }
}),
    t(47120),
    t(789020);
var i = t(442837),
    a = t(798140),
    c = t(9156),
    o = t(630388),
    r = t(709054),
    s = t(312400),
    l = t(981631),
    d = t(969943),
    u = t(526761),
    _ = t(388032);
function g() {
    return [
        {
            label: _.intl.string(_.t['8ot6go']),
            value: d.Oe.MINUTES_15
        },
        {
            label: _.intl.string(_.t.UMWBZm),
            value: d.Oe.HOURS_1
        },
        {
            label: _.intl.string(_.t.QmYWtr),
            value: d.Oe.HOURS_3
        },
        {
            label: _.intl.string(_.t.EpAXPD),
            value: d.Oe.HOURS_8
        },
        {
            label: _.intl.string(_.t['755t4u']),
            value: d.Oe.HOURS_24
        },
        {
            label: _.intl.string(_.t.r3LawM),
            value: d.Oe.ALWAYS
        }
    ];
}
let S = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return r.default.keys(e).filter((t) => {
        var i, c;
        let r = e[t].message_notifications !== l.bL.NULL,
            s = o.yE(null !== (i = e[t].flags) && void 0 !== i ? i : 0, u.ic.UNREADS_ALL_MESSAGES) || o.yE(null !== (c = e[t].flags) && void 0 !== c ? c : 0, u.ic.UNREADS_ONLY_MENTIONS);
        return (!n.ignoreUnreadSetting && s) || (!n.ignoreNotificationSetting && r) || (!n.ignoreMute && (0, a.m$)(e[t]));
    });
}
function h(e) {
    let n = (0, i.e7)([c.ZP], () => c.ZP.useNewNotifications);
    return s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && n;
}
