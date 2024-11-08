n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    u = n(952980);
let g = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    m = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function f(e) {
    var t;
    let { achievementId: n, unlocked: d, size: f = a.AvatarSizes.SIZE_40 } = e,
        _ = (0, s.ZP)(),
        p = (0, c.oX)(n);
    if (null == p) return null;
    let h = (0, a.getAvatarSpecs)(f),
        { name: E, rarity: b } = p,
        { color: x } = (0, c.F7)(b),
        C = (0, r.wj)(_) ? g : m,
        T = (h.size - h.offset - 2 * h.stroke) * 0.8,
        v = h.size - h.stroke,
        N = {
            width: 0.4 * T,
            height: 0.4 * T
        },
        I = {
            width: N.width + 1,
            height: N.height + 1,
            right: h.stroke + 1,
            bottom: h.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)('div', {
        className: u.container,
        style: {
            width: v,
            height: v,
            padding: h.stroke
        },
        'aria-label': ''.concat(null !== (t = E()) && void 0 !== t ? t : ''),
        children: [
            (0, i.jsx)('div', {
                className: u.trophyIconContainer,
                children: (0, i.jsx)(a.TrophyIcon, {
                    size: 'custom',
                    color: d ? x : (0, l.Lq)(C.trophy),
                    width: T,
                    height: T
                })
            }),
            !d &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: I,
                    children: (0, i.jsx)(a.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(C.locked),
                        ...N
                    })
                }),
            d &&
                b === c.EP.LEGENDARY &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: I,
                    children: (0, i.jsx)(o.Z, {
                        className: u.confettiIcon,
                        ...N
                    })
                })
        ]
    });
}
f.Sizes = a.AvatarSizes;
