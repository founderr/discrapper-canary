n.d(a, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    l = n(481060),
    s = n(410030),
    o = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    _ = n(601964),
    p = n(768581),
    m = n(981631),
    g = n(689938),
    I = n(660857),
    h = n(129512),
    x = n(330065);
function f(e) {
    let { guild: a, className: n, onClick: t } = e,
        f = (0, s.ZP)(),
        C = new _.ZP({
            name: a.name,
            icon: a.icon
        }),
        v = p.ZP.getGuildDiscoverySplashURL({
            id: a.id,
            splash: a.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        E =
            null != v
                ? v
                : (function (e) {
                      switch (e) {
                          case m.BRd.DARK:
                              return h;
                          case m.BRd.LIGHT:
                              return x;
                      }
                  })(f),
        P = p.ZP.getGuildIconURL({
            id: a.id,
            icon: a.icon,
            size: 50
        });
    return (0, i.jsxs)(l.Clickable, {
        className: r()(I.card, n),
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
                                    guild: C,
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
                                guild: a,
                                tooltipColor: l.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                className: I.guildName,
                                children: a.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        className: I.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: a.description
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
                                    children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: a.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
