n.d(t, {
    Ne: function () {
        return h;
    },
    Ny: function () {
        return p;
    },
    Or: function () {
        return m;
    },
    jt: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(44315),
    s = n(246364),
    c = n(460562),
    u = n(981631),
    d = n(940722);
function h(e, t) {
    return (0, i.jsx)(o.NumberBadge, {
        count: e,
        color: t
    });
}
function p() {
    return (0, i.jsx)(o.IconBadge, {
        icon: (0, o.makeIconCompat)(c.Z),
        disableColor: !0,
        className: d.unavailableBadge
    });
}
function m(e) {
    let t,
        { audio: n, video: i, screenshare: l, isCurrentUserConnected: r, liveStage: a, activeEvent: s, activity: c } = e;
    if (s) t = o.CalendarIcon;
    else if (a) t = o.StageIcon;
    else if (c) t = o.ActivitiesIcon;
    else if (l) t = o.ScreenIcon;
    else if (i) t = o.VideoIcon;
    else {
        if (!n) return null;
        t = o.VoiceNormalIcon;
    }
    return g({
        icon: t,
        isCurrentUserConnected: r
    });
}
function f(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case s.wB.SUBMITTED:
                    return [void 0, o.ClockIcon];
                case s.wB.REJECTED:
                    return [u.Ilk.RED_400, o.XSmallIcon];
                case s.wB.APPROVED:
                    return [u.Ilk.GREEN_360, o.CheckmarkLargeIcon];
                default:
                    return [void 0, o.PencilIcon];
            }
        })(t);
    return g({
        icon: i,
        color: n
    });
}
function g(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e,
        s = null == n ? { disableColor: !0 } : { color: (0, a.Lq)(n) };
    return (0, i.jsx)(o.IconBadge, {
        icon: t,
        className: r()(d.iconBadge, { [d.isCurrentUserConnected]: l }),
        ...s
    });
}
