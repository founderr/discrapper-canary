a.d(n, {
    Z: function () {
        return x;
    }
});
var i = a(735250);
a(470079);
var t = a(120356),
    r = a.n(t),
    l = a(481060),
    s = a(410030),
    o = a(686546),
    c = a(565138),
    d = a(372769),
    u = a(134432),
    _ = a(601964),
    m = a(768581),
    p = a(981631),
    g = a(689938),
    I = a(660857),
    h = a(129512),
    v = a(330065);
function x(e) {
    let { guild: n, className: a, onClick: t } = e,
        x = (0, s.ZP)(),
        f = new _.ZP({
            name: n.name,
            icon: n.icon
        }),
        C = m.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        E =
            null != C
                ? C
                : (function (e) {
                      switch (e) {
                          case p.BRd.DARK:
                              return h;
                          case p.BRd.LIGHT:
                              return v;
                      }
                  })(x),
        P = m.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 50
        });
    return (0, i.jsxs)(l.Clickable, {
        className: r()(I.card, a),
        onClick: t,
        'aria-label': g.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
        children: [
            (0, i.jsxs)('div', {
                className: I.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: E,
                        alt: '',
                        className: I.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: I.guildIcon,
                        children: (0, i.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: I.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: I.__invalid_icon,
                                    iconSrc: P,
                                    guild: f,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: I.cardDetails,
                children: [
                    (0, i.jsxs)('div', {
                        className: I.guildNameWrapper,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: I.guildBadge,
                                guild: n,
                                tooltipColor: l.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                className: I.guildName,
                                children: n.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        className: I.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: n.description
                    }),
                    (0, i.jsx)('div', {
                        className: I.memberInfo,
                        children: (0, i.jsxs)('div', {
                            className: I.memberCountWrapper,
                            children: [
                                (0, i.jsx)(l.UserIcon, {
                                    color: 'currentColor',
                                    className: I.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: n.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
