n.d(t, {
    Ne: function () {
        return p;
    },
    Ny: function () {
        return f;
    },
    Or: function () {
        return _;
    },
    jt: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(44315),
    o = n(246364),
    c = n(460562),
    u = n(510601),
    d = n(981631),
    h = n(355355);
function p(e, t) {
    return (0, i.jsx)(r.NumberBadge, {
        count: e,
        color: t
    });
}
function f() {
    return (0, i.jsx)(r.IconBadge, {
        icon: (0, r.makeIconCompat)(c.Z),
        disableColor: !0,
        className: h.unavailableBadge
    });
}
function _(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: a, liveStage: s, activeEvent: o, activity: c, gaming: d } = e,
        h = (0, u.vg)('Guild Icon', !1);
    if ((!o && !s && !c && !l && !i && d && u.ZP.trackExposure({ location: 'Guild Icon' }), o)) t = r.CalendarIcon;
    else if (s) t = r.StageIcon;
    else if (c) t = r.ActivitiesIcon;
    else if (l) t = r.ScreenIcon;
    else if (i) t = r.VideoIcon;
    else if (d && h) t = r.GameControllerIcon;
    else {
        if (!n) return null;
        t = r.VoiceNormalIcon;
    }
    return g({
        icon: t,
        isCurrentUserConnected: a
    });
}
function m(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case o.wB.SUBMITTED:
                    return [void 0, r.ClockIcon];
                case o.wB.REJECTED:
                    return [d.Ilk.RED_400, r.XSmallIcon];
                case o.wB.APPROVED:
                    return [d.Ilk.GREEN_360, r.CheckmarkLargeIcon];
                default:
                    return [void 0, r.PencilIcon];
            }
        })(t);
    return g({
        icon: i,
        color: n
    });
}
function g(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        o = null == n ? { disableColor: !0 } : { color: (0, s.Lq)(n) };
    return (0, i.jsx)(r.IconBadge, {
        icon: t,
        className: a()(h.iconBadge, { [h.isCurrentUserConnected]: l }),
        ...o
    });
}
