r(47120);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(979554),
    o = r(876917),
    c = r(597688),
    d = r(616066),
    u = r(215023),
    m = r(340657);
let f = {
        x: 160,
        y: 160
    },
    p = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: f,
            skuId: '1212569433839636530'
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: f,
            skuId: '1144308439720394944'
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: f,
            skuId: '1228251144065777765'
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: f,
            skuId: '1262491137394868308'
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: f,
            skuId: '1157407831348228141'
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: f,
            skuId: '1197344326133502032'
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: f,
            skuId: '1232071712695386162'
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: f,
            skuId: '1220513977683935373'
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: f,
            skuId: '1144046002110738634'
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: f,
            skuId: '1271174324375519273'
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: f,
            skuId: '1237653964582031400'
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: f,
            skuId: '1217625794382401577'
        }
    ];
t.Z = (e) => {
    let { peaking: t, transitioning: r, style: a } = e,
        f = window.innerHeight,
        [C, h] = n.useState(!1),
        g = p.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        n.useEffect(() => {
            r &&
                setTimeout(() => {
                    h(!0);
                }, u.lb);
        }, [r]),
        (0, s.jsx)('div', {
            style: a,
            className: i()(m.jumbleWrapper, {
                [m.peaking]: t,
                [m.transitioned]: C
            }),
            children: p.map((e, t) => {
                var n, a;
                let { top: i, left: c, rotation: p, size: C, skuId: h } = e,
                    _ = null === (n = g[t]) || void 0 === n ? void 0 : n.items[0],
                    b = null === (a = g[t]) || void 0 === a ? void 0 : a.type,
                    x = b === l.Z.AVATAR_DECORATION ? 384 : 512;
                return (0, s.jsxs)(
                    'div',
                    {
                        className: m.asset,
                        style: {
                            top: r ? -f - x : i,
                            left: r ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(p, 'deg)'),
                            height: C.y,
                            width: C.x,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                        },
                        children: [
                            null != _ && b === l.Z.AVATAR_DECORATION && (0, s.jsx)(d.R, { item: _ }),
                            null != _ &&
                                b === l.Z.PROFILE_EFFECT &&
                                (0, s.jsx)(o.Z, {
                                    profileEffectId: _.id,
                                    isPurchased: !1,
                                    isHovering: !0
                                })
                        ]
                    },
                    h + t
                );
            })
        })
    );
};
