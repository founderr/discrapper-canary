n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    s = n(605236),
    o = n(243778),
    c = n(375954),
    u = n(890977),
    d = n(921944);
function h(e) {
    let { children: t, animationContainerClassName: n, glowClassName: h, trinketsClassName: m } = e,
        p = (0, r.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()),
        f = l.useMemo(() => {
            let e = [];
            return p && e.push(a.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e;
        }, [p]),
        g = () => {
            setTimeout(() => (0, s.EW)(a.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, i.jsx)(o.ZP, {
        contentTypes: f,
        children: (e) => {
            let { visibleContent: l } = e;
            if (l === a.z.DESKTOP_APP_LAUNCHER_ONBOARDING)
                return (0, i.jsx)(u.b, {
                    animationContainerClassName: n,
                    glowClassName: h,
                    trinketsClassName: m,
                    onMount: g,
                    children: t
                });
            return t;
        }
    });
}
