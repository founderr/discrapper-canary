s(47120);
var a = s(200651),
    r = s(192379),
    n = s(120356),
    i = s.n(n),
    l = s(979554),
    o = s(876917),
    c = s(597688),
    d = s(616066),
    u = s(215023),
    m = s(340657);
let C = {
        x: 160,
        y: 160
    },
    f = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: C,
            skuId: '1212569433839636530'
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: C,
            skuId: '1144308439720394944'
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: C,
            skuId: '1228251144065777765'
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: C,
            skuId: '1262491137394868308'
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: C,
            skuId: '1157407831348228141'
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: C,
            skuId: '1197344326133502032'
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: C,
            skuId: '1232071712695386162'
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: C,
            skuId: '1220513977683935373'
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: C,
            skuId: '1144046002110738634'
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: C,
            skuId: '1271174324375519273'
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: C,
            skuId: '1237653964582031400'
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: C,
            skuId: '1217625794382401577'
        }
    ];
t.Z = (e) => {
    let { peaking: t, transitioning: s, style: n } = e,
        C = window.innerHeight,
        [p, h] = r.useState(!1),
        g = f.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        r.useEffect(() => {
            s &&
                setTimeout(() => {
                    h(!0);
                }, u.lb);
        }, [s]),
        (0, a.jsx)('div', {
            style: n,
            className: i()(m.jumbleWrapper, {
                [m.peaking]: t,
                [m.transitioned]: p
            }),
            children: f.map((e, t) => {
                var r, n;
                let { top: i, left: c, rotation: f, size: p, skuId: h } = e,
                    _ = null === (r = g[t]) || void 0 === r ? void 0 : r.items[0],
                    b = null === (n = g[t]) || void 0 === n ? void 0 : n.type,
                    x = b === l.Z.AVATAR_DECORATION ? 384 : 512;
                return (0, a.jsxs)(
                    'div',
                    {
                        className: m.asset,
                        style: {
                            top: s ? -C - x : i,
                            left: s ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(f, 'deg)'),
                            height: p.y,
                            width: p.x,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                        },
                        children: [
                            null != _ && b === l.Z.AVATAR_DECORATION && (0, a.jsx)(d.R, { item: _ }),
                            null != _ &&
                                b === l.Z.PROFILE_EFFECT &&
                                (0, a.jsx)(o.Z, {
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
