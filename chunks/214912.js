t.d(n, {
    Z: function () {
        return C;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(410030),
    s = t(686546),
    c = t(565138),
    d = t(372769),
    u = t(134432),
    _ = t(601964),
    p = t(768581),
    m = t(981631),
    f = t(689938),
    I = t(660857),
    h = t(129512),
    g = t(330065);
function C(e) {
    let { guild: n, className: t, onClick: a } = e,
        C = (0, l.ZP)(),
        v = new _.ZP({
            name: n.name,
            icon: n.icon
        }),
        x = p.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        b =
            null != x
                ? x
                : (function (e) {
                      switch (e) {
                          case m.BRd.DARK:
                              return h;
                          case m.BRd.LIGHT:
                              return g;
                      }
                  })(C),
        E = p.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 50
        });
    return (0, i.jsxs)(o.Clickable, {
        className: r()(I.card, t),
        onClick: a,
        'aria-label': f.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
        children: [
            (0, i.jsxs)('div', {
                className: I.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: b,
                        alt: '',
                        className: I.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: I.guildIcon,
                        children: (0, i.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: I.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: I.__invalid_icon,
                                    iconSrc: E,
                                    guild: v,
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
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                className: I.guildName,
                                children: n.name
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
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
                                (0, i.jsx)(o.UserIcon, {
                                    color: 'currentColor',
                                    className: I.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: n.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
