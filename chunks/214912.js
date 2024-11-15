n.d(t, {
    Z: function () {
        return C;
    }
});
var a = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    l = n(410030),
    o = n(686546),
    d = n(565138),
    c = n(372769),
    u = n(134432),
    h = n(601964),
    p = n(768581),
    m = n(981631),
    g = n(388032),
    b = n(470946),
    f = n(129512),
    I = n(330065);
function C(e) {
    let { guild: t, className: n, onClick: i } = e,
        C = (0, l.ZP)(),
        x = new h.ZP({
            name: t.name,
            icon: t.icon
        }),
        _ = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        v =
            null != _
                ? _
                : (function (e) {
                      switch (e) {
                          case m.BRd.DARK:
                              return f;
                          case m.BRd.LIGHT:
                              return I;
                      }
                  })(C),
        N = p.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, a.jsxs)(r.Clickable, {
        className: s()(b.card, n),
        onClick: i,
        'aria-label': g.intl.string(g.t.RB4L29),
        children: [
            (0, a.jsxs)('div', {
                className: b.cardHeader,
                children: [
                    (0, a.jsx)('img', {
                        src: v,
                        alt: '',
                        className: b.splashImage
                    }),
                    (0, a.jsx)('div', {
                        className: b.guildIcon,
                        children: (0, a.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, a.jsx)('div', {
                                className: b.iconMask,
                                children: (0, a.jsx)(d.Z, {
                                    className: b.__invalid_icon,
                                    iconSrc: N,
                                    guild: x,
                                    size: d.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: b.cardDetails,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.guildNameWrapper,
                        children: [
                            (0, a.jsx)(c.Z, {
                                className: b.guildBadge,
                                guild: t,
                                tooltipColor: r.Tooltip.Colors.PRIMARY
                            }),
                            (0, a.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                className: b.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, a.jsx)(r.Text, {
                        className: b.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, a.jsx)('div', {
                        className: b.memberInfo,
                        children: (0, a.jsxs)('div', {
                            className: b.memberCountWrapper,
                            children: [
                                (0, a.jsx)(r.UserIcon, {
                                    color: 'currentColor',
                                    className: b.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, a.jsx)(r.Text, {
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
