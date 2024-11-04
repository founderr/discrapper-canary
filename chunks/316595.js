n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(704215),
    a = n(890977),
    o = n(605236),
    c = n(243778),
    u = n(375954),
    d = n(921944);
function h(e) {
    let { children: t, enabled: n, animationContainerClassName: h, glowClassName: m, trinketsClassName: p } = e,
        f = (0, r.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()),
        g = l.useMemo(() => {
            let e = [];
            return f && n && e.push(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [f, n]),
        C = () => {
            setTimeout(() => (0, o.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, i.jsx)(c.ZP, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: n } = e;
            if (n === s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2)
                return (0, i.jsx)(a.b, {
                    animationContainerClassName: h,
                    glowClassName: m,
                    trinketsClassName: p,
                    onMount: C,
                    children: t
                });
            return t;
        }
    });
}
