var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(576635),
    u = n(213053),
    c = n(652853),
    d = n(228168),
    f = n(320038);
let _ = i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, profileType: a, className: _, pendingThemeColors: p, themeOverride: h, children: m, forceShowPremium: g = !1 } = e,
            {
                theme: E,
                primaryColor: v,
                secondaryColor: b
            } = (0, l.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: p,
                isPreview: g
            }),
            { profileThemeStyle: I, profileThemeClassName: S } = (0, u.Z)({
                theme: null != h ? h : E,
                primaryColor: v,
                secondaryColor: b
            }),
            T = {
                [f.biteSize]: a === d.y0.BITE_SIZE,
                [f.fullSize]: a === d.y0.FULL_SIZE,
                [f.panel]: a === d.y0.PANEL
            };
        return (0, r.jsx)('div', {
            className: s()(f.outer, S, T, _),
            style: I,
            ref: t,
            children: (0, r.jsx)('div', {
                className: s()(f.inner, T),
                children: (0, r.jsx)(o.ThemeContextProvider, {
                    theme: null != h ? h : E,
                    children: (0, r.jsx)(c.X, {
                        profileType: a,
                        theme: null != h ? h : E,
                        primaryColor: v,
                        secondaryColor: b,
                        children: m
                    })
                })
            })
        });
    }),
    p = i.forwardRef(function (e, t) {
        let { children: n, className: i } = e,
            { profileType: a } = (0, c.z)(),
            o = {
                [f.biteSize]: a === d.y0.BITE_SIZE,
                [f.fullSize]: a === d.y0.FULL_SIZE,
                [f.panel]: a === d.y0.PANEL
            };
        return (0, r.jsx)('div', {
            ref: t,
            className: s()(f.overlay, o, i),
            children: n
        });
    });
t.Z = Object.assign(_, { Overlay: p });
