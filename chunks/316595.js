n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
    s = n(890977),
    o = n(605236),
    c = n(243778),
    d = n(375954),
    u = n(921944);
function h(e) {
    let { children: t, enabled: n, animationContainerClassName: h, glowClassName: p, trinketsClassName: m } = e,
        f = (0, a.e7)([d.Z], () => d.Z.hasCurrentUserSentMessageSinceAppStart()),
        g = l.useMemo(() => {
            let e = [];
            return f && n && e.push(r.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [f, n]),
        C = () => {
            setTimeout(() => (0, o.EW)(r.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: u.L.AUTO_DISMISS }), 10000);
        };
    return (0, i.jsx)(c.ZP, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: n } = e;
            if (n === r.z.ACTIVITIES_CHAT_BUTTON_NUX_V2)
                return (0, i.jsx)(s.b, {
                    animationContainerClassName: h,
                    glowClassName: p,
                    trinketsClassName: m,
                    onMount: C,
                    children: t
                });
            return t;
        }
    });
}
