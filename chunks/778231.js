var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(824606),
    o = n(686546),
    l = n(522289),
    u = n(146078),
    c = n(881998),
    d = n(709054),
    f = n(388032),
    _ = n(366326),
    p = n(970952);
t.Z = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: m } = h,
        g = (0, i.e7)([c.Z], () => {
            let e = c.Z.getApps();
            return null != e ? e.find((e) => e.application.id === h.id) : null;
        }),
        E = null !== (n = h.getIconURL(64)) && void 0 !== n ? n : p,
        v = (0, s.Z)({ application: h }),
        b = null != g ? d.default.extractTimestamp(g.id) : void 0;
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsx)(a.Heading, {
                className: _.header,
                variant: 'heading-sm/semibold',
                children: f.intl.string(f.t['aYfK//'])
            }),
            (0, r.jsx)('div', {
                className: _.appContainer,
                children: (0, r.jsxs)('div', {
                    className: _.appInfo,
                    children: [
                        (0, r.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 64,
                            height: 64,
                            className: _.appIconMask,
                            children: (0, r.jsx)('img', {
                                src: E,
                                alt: '',
                                className: _.appIcon
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: _.textContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/semibold',
                                    children: m
                                }),
                                v.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-xs/normal',
                                                  children: (0, u.Z)(v.length)
                                              }),
                                              (0, r.jsx)(l.Z, {
                                                  className: _.guildStack,
                                                  guilds: v,
                                                  maxGuilds: 6
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-xs/normal',
                                                  children: null === (t = h.bot) || void 0 === t ? void 0 : t.tag
                                              }),
                                              null != b &&
                                                  (0, r.jsx)(a.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: f.intl.formatToPlainString(f.t.C9rUOz, { authorizedAt: b })
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
