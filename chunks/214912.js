n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(410030),
    s = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    p = n(601964),
    m = n(768581),
    _ = n(981631),
    h = n(388032),
    f = n(660857),
    g = n(129512),
    v = n(330065);
function x(e) {
    let { guild: t, className: n, onClick: a } = e,
        x = (0, o.ZP)(),
        I = new p.ZP({
            name: t.name,
            icon: t.icon
        }),
        C = m.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        N =
            null != C
                ? C
                : (function (e) {
                      switch (e) {
                          case _.BRd.DARK:
                              return g;
                          case _.BRd.LIGHT:
                              return v;
                      }
                  })(x),
        b = m.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, i.jsxs)(l.Clickable, {
        className: r()(f.card, n),
        onClick: a,
        'aria-label': h.intl.string(h.t.RB4L29),
        children: [
            (0, i.jsxs)('div', {
                className: f.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: N,
                        alt: '',
                        className: f.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: f.guildIcon,
                        children: (0, i.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: f.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: f.__invalid_icon,
                                    iconSrc: b,
                                    guild: I,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: f.cardDetails,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.guildNameWrapper,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: f.guildBadge,
                                guild: t,
                                tooltipColor: l.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                className: f.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        className: f.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, i.jsx)('div', {
                        className: f.memberInfo,
                        children: (0, i.jsxs)('div', {
                            className: f.memberCountWrapper,
                            children: [
                                (0, i.jsx)(l.UserIcon, {
                                    color: 'currentColor',
                                    className: f.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: h.intl.format(h.t.zRl6XV, { count: t.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
