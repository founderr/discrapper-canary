n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250);
n(470079);
var a = n(780384),
    r = n(481060),
    i = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    _ = n(694954);
let E = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    u = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function T(e) {
    var t;
    let { achievementId: n, unlocked: d, size: T = r.AvatarSizes.SIZE_40 } = e,
        I = (0, i.ZP)(),
        R = (0, c.oX)(n);
    if (null == R) return null;
    let g = (0, r.getAvatarSpecs)(T),
        { name: N, rarity: m } = R,
        { color: C } = (0, c.F7)(m),
        f = (0, a.wj)(I) ? E : u,
        p = (g.size - g.offset - 2 * g.stroke) * 0.8,
        A = g.size - g.stroke,
        M = {
            width: 0.4 * p,
            height: 0.4 * p
        },
        S = {
            width: M.width + 1,
            height: M.height + 1,
            right: g.stroke + 1,
            bottom: g.stroke + 1,
            padding: 0
        };
    return (0, s.jsxs)('div', {
        className: _.container,
        style: {
            width: A,
            height: A,
            padding: g.stroke
        },
        'aria-label': ''.concat(null !== (t = N()) && void 0 !== t ? t : ''),
        children: [
            (0, s.jsx)('div', {
                className: _.trophyIconContainer,
                children: (0, s.jsx)(r.TrophyIcon, {
                    size: 'custom',
                    color: d ? C : (0, l.Lq)(f.trophy),
                    width: p,
                    height: p
                })
            }),
            !d &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: S,
                    children: (0, s.jsx)(r.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(f.locked),
                        ...M
                    })
                }),
            d &&
                m === c.EP.LEGENDARY &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: S,
                    children: (0, s.jsx)(o.Z, {
                        className: _.confettiIcon,
                        ...M
                    })
                })
        ]
    });
}
T.Sizes = r.AvatarSizes;
