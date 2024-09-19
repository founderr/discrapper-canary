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
let u = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    E = {
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
    let m = (0, r.getAvatarSpecs)(T),
        { name: N, rarity: g } = R,
        { color: C } = (0, c.F7)(g),
        p = (0, a.wj)(I) ? u : E,
        f = (m.size - m.offset - 2 * m.stroke) * 0.8,
        A = m.size - m.stroke,
        h = {
            width: 0.4 * f,
            height: 0.4 * f
        },
        S = {
            width: h.width + 1,
            height: h.height + 1,
            right: m.stroke + 1,
            bottom: m.stroke + 1,
            padding: 0
        };
    return (0, s.jsxs)('div', {
        className: _.container,
        style: {
            width: A,
            height: A,
            padding: m.stroke
        },
        'aria-label': ''.concat(null !== (t = N()) && void 0 !== t ? t : ''),
        children: [
            (0, s.jsx)('div', {
                className: _.trophyIconContainer,
                children: (0, s.jsx)(r.TrophyIcon, {
                    size: 'custom',
                    color: d ? C : (0, l.Lq)(p.trophy),
                    width: f,
                    height: f
                })
            }),
            !d &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: S,
                    children: (0, s.jsx)(r.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(p.locked),
                        ...h
                    })
                }),
            d &&
                g === c.EP.LEGENDARY &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: S,
                    children: (0, s.jsx)(o.Z, {
                        className: _.confettiIcon,
                        ...h
                    })
                })
        ]
    });
}
T.Sizes = r.AvatarSizes;
