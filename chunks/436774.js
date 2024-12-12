r.d(n, {
    JX: function () {
        return u;
    },
    Rj: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(772848),
    o = r(692547);
let l = Object.freeze({
        PREMIUM_TIER_0: (0, s.Z)(),
        PREMIUM_TIER_1: (0, s.Z)(),
        PREMIUM_TIER_2: (0, s.Z)(),
        PREMIUM_GUILD: (0, s.Z)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.Z)()
    }),
    u = {
        PREMIUM_TIER_0: 'url(#'.concat(l.PREMIUM_TIER_0, ')'),
        PREMIUM_TIER_1: 'url(#'.concat(l.PREMIUM_TIER_1, ')'),
        PREMIUM_TIER_2: 'url(#'.concat(l.PREMIUM_TIER_2, ')'),
        PREMIUM_GUILD: 'url(#'.concat(l.PREMIUM_GUILD, ')'),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: 'url(#'.concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ')')
    },
    c = () =>
        (0, i.jsxs)('linearGradient', {
            id: l.PREMIUM_TIER_0,
            children: [
                (0, i.jsx)('stop', {
                    offset: '.1762',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                }),
                (0, i.jsx)('stop', {
                    offset: '0.5351',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                })
            ]
        }),
    d = () =>
        (0, i.jsxs)('linearGradient', {
            id: l.PREMIUM_TIER_1,
            children: [
                (0, i.jsx)('stop', { stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                })
            ]
        }),
    f = () =>
        (0, i.jsxs)('linearGradient', {
            id: l.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)('stop', { stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css }),
                (0, i.jsx)('stop', {
                    offset: '0.502368',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                })
            ]
        }),
    _ = () =>
        (0, i.jsxs)('linearGradient', {
            id: l.PREMIUM_GUILD,
            children: [
                (0, i.jsx)('stop', { stopColor: o.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: o.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                })
            ]
        }),
    h = () =>
        (0, i.jsxs)('linearGradient', {
            id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            gradientTransform: 'rotate(45)',
            children: [
                (0, i.jsx)('stop', {
                    offset: '0',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                }),
                (0, i.jsx)('stop', {
                    offset: '1',
                    stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                })
            ]
        }),
    p = a.memo(
        function () {
            return (0, i.jsxs)('svg', {
                viewBox: '0 0 1 1',
                style: {
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: -1,
                    left: -1,
                    width: 1,
                    height: 1
                },
                'aria-hidden': !0,
                children: [c(), d(), f(), _(), h()]
            });
        },
        () => !0
    );
n.ZP = p;
