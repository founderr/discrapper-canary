var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(384275),
    l = n(824606),
    u = n(686546),
    c = n(522289),
    d = n(146078),
    f = n(881998),
    _ = n(709054),
    p = n(388032),
    h = n(914301),
    m = n(970952);
t.Z = (e) => {
    var t, n;
    let { entry: g } = e,
        { name: E } = g,
        v = (0, a.e7)([f.Z], () => {
            let e = f.Z.getApps();
            return null != e ? e.find((e) => e.application.id === g.id) : null;
        }),
        I = null !== (n = g.getIconURL(64)) && void 0 !== n ? n : m,
        T = (0, l.Z)({ application: g }),
        b = i.useRef(!1);
    i.useEffect(() => {
        !b.current && (o.Z.fetch(), (b.current = !0));
    }, []);
    let S = null != v ? _.default.extractTimestamp(v.id) : void 0;
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(s.Heading, {
                className: h.header,
                variant: 'heading-sm/semibold',
                children: p.intl.string(p.t['aYfK//'])
            }),
            (0, r.jsx)('div', {
                className: h.appContainer,
                children: (0, r.jsxs)('div', {
                    className: h.appInfo,
                    children: [
                        (0, r.jsx)(u.ZP, {
                            mask: u.ZP.Masks.AVATAR_DEFAULT,
                            width: 64,
                            height: 64,
                            className: h.appIconMask,
                            children: (0, r.jsx)('img', {
                                src: I,
                                alt: '',
                                className: h.appIcon
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.textContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/semibold',
                                    children: E
                                }),
                                T.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-xs/normal',
                                                  children: (0, d.Z)(T.length)
                                              }),
                                              (0, r.jsx)(c.Z, {
                                                  className: h.guildStack,
                                                  guilds: T,
                                                  maxGuilds: 6
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-xs/normal',
                                                  children: null === (t = g.bot) || void 0 === t ? void 0 : t.tag
                                              }),
                                              null != S &&
                                                  (0, r.jsx)(s.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: p.intl.formatToPlainString(p.t.C9rUOz, { authorizedAt: S })
                                                  })
                                          ]
                                      })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
