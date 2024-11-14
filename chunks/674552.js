n.d(t, {
    Ne: function () {
        return p;
    },
    Ny: function () {
        return f;
    },
    Or: function () {
        return m;
    },
    jt: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(44315),
    s = n(246364),
    c = n(460562),
    u = n(510601),
    d = n(981631),
    h = n(355355);
function p(e, t) {
    return (0, i.jsx)(a.NumberBadge, {
        count: e,
        color: t
    });
}
function f() {
    return (0, i.jsx)(a.IconBadge, {
        icon: (0, a.makeIconCompat)(c.Z),
        disableColor: !0,
        className: h.unavailableBadge
    });
}
function m(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: r, liveStage: o, activeEvent: s, activity: c, gaming: d } = e,
        h = (0, u.vg)('Guild Icon', !1);
    if ((!s && !o && !c && !l && !i && d && u.ZP.trackExposure({ location: 'Guild Icon' }), s)) t = a.CalendarIcon;
    else if (o) t = a.StageIcon;
    else if (c) t = a.ActivitiesIcon;
    else if (l) t = a.ScreenIcon;
    else if (i) t = a.VideoIcon;
    else if (d && h) t = a.GameControllerIcon;
    else {
        if (!n) return null;
        t = a.VoiceNormalIcon;
    }
    return C({
        icon: t,
        isCurrentUserConnected: r
    });
}
function g(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, a.ClockIcon];
                case s.wB.REJECTED:
                    return [d.Ilk.RED_400, a.XSmallIcon];
                case s.wB.APPROVED:
                    return [d.Ilk.GREEN_360, a.CheckmarkLargeIcon];
                default:
                    return [void 0, a.PencilIcon];
            }
        })(t);
    return C({
        icon: i,
        color: n
    });
}
function C(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, o.Lq)(n) };
    return (0, i.jsx)(a.IconBadge, {
        icon: t,
        className: r()(h.iconBadge, { [h.isCurrentUserConnected]: l }),
        ...s
    });
}
