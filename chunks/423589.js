n.d(t, {
    Mn: function () {
        return I;
    },
    OD: function () {
        return m;
    },
    W9: function () {
        return h;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(442837),
    o = n(798140),
    s = n(9156),
    l = n(630388),
    u = n(709054),
    c = n(312400),
    d = n(981631),
    _ = n(969943),
    E = n(526761),
    f = n(689938);
function h() {
    return [
        {
            label: f.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: _.Oe.MINUTES_15
        },
        {
            label: f.Z.Messages.MUTE_DURATION_1_HOUR,
            value: _.Oe.HOURS_1
        },
        {
            label: f.Z.Messages.MUTE_DURATION_3_HOURS,
            value: _.Oe.HOURS_3
        },
        {
            label: f.Z.Messages.MUTE_DURATION_8_HOURS,
            value: _.Oe.HOURS_8
        },
        {
            label: f.Z.Messages.MUTE_DURATION_24_HOURS,
            value: _.Oe.HOURS_24
        },
        {
            label: f.Z.Messages.MUTE_DURATION_ALWAYS,
            value: _.Oe.ALWAYS
        }
    ];
}
let p = {
    ignoreMute: !1,
    ignoreUnreadSetting: !0,
    ignoreNotificationSetting: !1
};
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return u.default.keys(e).filter((n) => {
        var r, i;
        let a = e[n].message_notifications !== d.bL.NULL,
            s = l.yE(null !== (r = e[n].flags) && void 0 !== r ? r : 0, E.ic.UNREADS_ALL_MESSAGES) || l.yE(null !== (i = e[n].flags) && void 0 !== i ? i : 0, E.ic.UNREADS_ONLY_MENTIONS);
        return (!t.ignoreUnreadSetting && s) || (!t.ignoreNotificationSetting && a) || (!t.ignoreMute && (0, o.m$)(e[n]));
    });
}
function I(e) {
    let t = (0, a.e7)([s.ZP], () => s.ZP.useNewNotifications);
    return c.xT.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled && t;
}
