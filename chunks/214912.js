n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    l = n(410030),
    s = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    p = n(601964),
    m = n(768581),
    _ = n(981631),
    f = n(388032),
    h = n(660857),
    g = n(129512),
    I = n(330065);
function b(e) {
    let { guild: t, className: n, onClick: a } = e,
        b = (0, l.ZP)(),
        x = new p.ZP({
            name: t.name,
            icon: t.icon
        }),
        v = m.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        C =
            null != v
                ? v
                : (function (e) {
                      switch (e) {
                          case _.BRd.DARK:
                              return g;
                          case _.BRd.LIGHT:
                              return I;
                      }
                  })(b),
        N = m.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, i.jsxs)(o.Clickable, {
        className: r()(h.card, n),
        onClick: a,
        'aria-label': f.intl.string(f.t.RB4L29),
        children: [
            (0, i.jsxs)('div', {
                className: h.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: C,
                        alt: '',
                        className: h.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: h.guildIcon,
                        children: (0, i.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: h.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: h.__invalid_icon,
                                    iconSrc: N,
                                    guild: x,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.cardDetails,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.guildNameWrapper,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: h.guildBadge,
                                guild: t,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                className: h.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: h.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, i.jsx)('div', {
                        className: h.memberInfo,
                        children: (0, i.jsxs)('div', {
                            className: h.memberCountWrapper,
                            children: [
                                (0, i.jsx)(o.UserIcon, {
                                    color: 'currentColor',
                                    className: h.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: f.intl.format(f.t.zRl6XV, { count: t.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
