n(47120);
var i,
    r,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(536285),
    u = n(857458),
    d = n(388905),
    h = n(703656),
    g = n(388032),
    p = n(232186);
((r = i || (i = {}))[(r.INITIAL = 0)] = 'INITIAL'), (r[(r.RPC_CONNECTED = 1)] = 'RPC_CONNECTED'), (r[(r.APP_OPENING = 2)] = 'APP_OPENING'), (r[(r.APP_OPENED = 3)] = 'APP_OPENED');
t.Z = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [r, a] = l.useState(0);
    l.useEffect(() => {
        c.default.once('connected', () => {
            a(1);
        }),
            c.default.once('disconnected', () => {
                (0, h.uL)((0, u.M)());
            }),
            c.default.connect();
    }, []),
        l.useEffect(() => {
            if (0 !== r) return;
            let e = setTimeout(() => (0, h.uL)((0, u.M)()), 3000);
            return () => clearTimeout(e);
        }, [r]);
    let m = l.useCallback(
        async (e, t) => {
            try {
                a(2), await i(e, t), a(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [i]
    );
    if ((0, h.DB)()) return null;
    switch (r) {
        case 1:
            return (0, s.jsxs)(d.ZP, {
                children: [
                    (0, s.jsx)(d.Dx, {
                        className: p.marginBottom8,
                        children: g.intl.string(g.t.qllnGh)
                    }),
                    (0, s.jsx)(d.DK, { children: g.intl.string(g.t.SXCxyc) }),
                    (0, s.jsx)(d.zx, {
                        className: p.marginTop40,
                        onClick: () => m(t, n),
                        children: g.intl.string(g.t.UQvCf3)
                    }),
                    (0, s.jsx)(d.zx, {
                        className: o()(p.marginTop8, p.marginCenterHorz),
                        color: d.zx.Colors.LINK,
                        look: d.zx.Looks.LINK,
                        onClick: () => (0, h.uL)((0, u.M)()),
                        children: g.intl.string(g.t['2ixEBg'])
                    })
                ]
            });
        case 0:
        case 2:
            return (0, s.jsxs)(d.ZP, {
                children: [(0, s.jsx)(d.Dx, { children: g.intl.string(g.t['Z+hCVV']) }), (0, s.jsx)(d.Hh, {})]
            });
        case 3:
            return (0, s.jsxs)(d.ZP, {
                children: [
                    (0, s.jsx)(d.Dx, {
                        className: p.marginBottom8,
                        children: g.intl.string(g.t.csrAMD)
                    }),
                    (0, s.jsx)(d.DK, { children: g.intl.string(g.t.ghBJz8) })
                ]
            });
    }
};
