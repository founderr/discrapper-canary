n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(200651);
n(192379);
var a = n(780384),
    r = n(481060),
    i = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    _ = n(231338),
    d = n(694954);
let E = {
        trophy: _.Il.PRIMARY_400,
        locked: _.Il.PRIMARY_400,
        unlocked: _.Il.GREEN_330
    },
    u = {
        trophy: _.Il.PRIMARY_400,
        locked: _.Il.PRIMARY_400,
        unlocked: _.Il.GREEN_330
    };
function T(e) {
    var t;
    let { achievementId: n, unlocked: _, size: T = r.AvatarSizes.SIZE_40 } = e,
        I = (0, i.ZP)(),
        R = (0, c.oX)(n);
    if (null == R) return null;
    let g = (0, r.getAvatarSpecs)(T),
        { name: N, rarity: m } = R,
        { color: C } = (0, c.F7)(m),
        A = (0, a.wj)(I) ? E : u,
        f = (g.size - g.offset - 2 * g.stroke) * 0.8,
        p = g.size - g.stroke,
        M = {
            width: 0.4 * f,
            height: 0.4 * f
        },
        S = {
            width: M.width + 1,
            height: M.height + 1,
            right: g.stroke + 1,
            bottom: g.stroke + 1,
            padding: 0
        };
    return (0, s.jsxs)('div', {
        className: d.container,
        style: {
            width: p,
            height: p,
            padding: g.stroke
        },
        'aria-label': ''.concat(null !== (t = N()) && void 0 !== t ? t : ''),
        children: [
            (0, s.jsx)('div', {
                className: d.trophyIconContainer,
                children: (0, s.jsx)(r.TrophyIcon, {
                    size: 'custom',
                    color: _ ? C : (0, l.Lq)(A.trophy),
                    width: f,
                    height: f
                })
            }),
            !_ &&
                (0, s.jsx)('div', {
                    className: d.lockContainer,
                    style: S,
                    children: (0, s.jsx)(r.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(A.locked),
                        ...M
                    })
                }),
            _ &&
                m === c.EP.LEGENDARY &&
                (0, s.jsx)('div', {
                    className: d.lockContainer,
                    style: S,
                    children: (0, s.jsx)(o.Z, {
                        className: d.confettiIcon,
                        ...M
                    })
                })
        ]
    });
}
T.Sizes = r.AvatarSizes;
