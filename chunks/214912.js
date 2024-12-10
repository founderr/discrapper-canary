n.d(t, {
    Z: function () {
        return v;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    l = n(410030),
    o = n(686546),
    h = n(565138),
    d = n(372769),
    c = n(134432),
    u = n(601964),
    p = n(768581),
    m = n(981631),
    g = n(388032),
    C = n(892528),
    x = n(129512),
    I = n(330065);
function v(e) {
    let { guild: t, className: n, onClick: i } = e,
        v = (0, l.ZP)(),
        f = new u.ZP({
            name: t.name,
            icon: t.icon
        }),
        N = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, c.x_)()
        }),
        E =
            null != N
                ? N
                : (function (e) {
                      switch (e) {
                          case m.BRd.DARK:
                              return x;
                          case m.BRd.LIGHT:
                              return I;
                      }
                  })(v),
        b = p.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, s.jsxs)(r.Clickable, {
        className: a()(C.card, n),
        onClick: i,
        'aria-label': g.intl.string(g.t.RB4L29),
        children: [
            (0, s.jsxs)('div', {
                className: C.cardHeader,
                children: [
                    (0, s.jsx)('img', {
                        src: E,
                        alt: '',
                        className: C.splashImage
                    }),
                    (0, s.jsx)('div', {
                        className: C.guildIcon,
                        children: (0, s.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, s.jsx)('div', {
                                className: C.iconMask,
                                children: (0, s.jsx)(h.Z, {
                                    className: C.__invalid_icon,
                                    iconSrc: b,
                                    guild: f,
                                    size: h.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: C.cardDetails,
                children: [
                    (0, s.jsxs)('div', {
                        className: C.guildNameWrapper,
                        children: [
                            (0, s.jsx)(d.Z, {
                                className: C.guildBadge,
                                guild: t,
                                tooltipColor: r.Tooltip.Colors.PRIMARY
                            }),
                            (0, s.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                className: C.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, s.jsx)(r.Text, {
                        className: C.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, s.jsx)('div', {
                        className: C.memberInfo,
                        children: (0, s.jsxs)('div', {
                            className: C.memberCountWrapper,
                            children: [
                                (0, s.jsx)(r.UserIcon, {
                                    color: 'currentColor',
                                    className: C.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: g.intl.format(g.t.zRl6XV, { count: t.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
