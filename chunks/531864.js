r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(979554),
    l = r(876917),
    c = r(597688),
    d = r(616066),
    u = r(215023),
    f = r(340657);
let p = {
        x: 160,
        y: 160
    },
    m = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: p,
            skuId: '1212569433839636530'
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: p,
            skuId: '1144308439720394944'
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: p,
            skuId: '1228251144065777765'
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: p,
            skuId: '1262491137394868308'
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: p,
            skuId: '1157407831348228141'
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: p,
            skuId: '1197344326133502032'
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: p,
            skuId: '1232071712695386162'
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: p,
            skuId: '1220513977683935373'
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: p,
            skuId: '1144046002110738634'
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: p,
            skuId: '1271174324375519273'
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: p,
            skuId: '1237653964582031400'
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: p,
            skuId: '1217625794382401577'
        }
    ];
t.Z = (e) => {
    let { peaking: t, transitioning: r, style: s } = e,
        p = window.innerHeight,
        [C, _] = n.useState(!1),
        g = m.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        n.useEffect(() => {
            r &&
                setTimeout(() => {
                    _(!0);
                }, u.lb);
        }, [r]),
        (0, a.jsx)('div', {
            style: s,
            className: i()(f.jumbleWrapper, {
                [f.peaking]: t,
                [f.transitioned]: C
            }),
            children: m.map((e, t) => {
                var n, s;
                let { top: i, left: c, rotation: m, size: C, skuId: _ } = e,
                    h = null === (n = g[t]) || void 0 === n ? void 0 : n.items[0],
                    b = null === (s = g[t]) || void 0 === s ? void 0 : s.type,
                    E = b === o.Z.AVATAR_DECORATION ? 384 : 512;
                return (0, a.jsxs)(
                    'div',
                    {
                        className: f.asset,
                        style: {
                            top: r ? -p - E : i,
                            left: r ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(m, 'deg)'),
                            height: C.y,
                            width: C.x,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                        },
                        children: [
                            null != h && b === o.Z.AVATAR_DECORATION && (0, a.jsx)(d.R, { item: h }),
                            null != h &&
                                b === o.Z.PROFILE_EFFECT &&
                                (0, a.jsx)(l.Z, {
                                    profileEffectId: h.id,
                                    isPurchased: !1,
                                    isHovering: !0
                                })
                        ]
                    },
                    _ + t
                );
            })
        })
    );
};
