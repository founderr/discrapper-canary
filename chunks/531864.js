n(47120);
var a = n(735250),
    s = n(470079),
    r = n(120356),
    o = n.n(r),
    i = n(979554),
    l = n(876917),
    c = n(597688),
    d = n(616066),
    u = n(215023),
    f = n(843702);
let p = {
        x: 160,
        y: 160
    },
    g = [
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
            skuId: '1252404767737778217'
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
    let { peaking: t, transitioning: n, style: r } = e,
        p = window.innerHeight,
        [C, m] = s.useState(!1),
        _ = g.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        s.useEffect(() => {
            n &&
                setTimeout(() => {
                    m(!0);
                }, u.lb);
        }, [n]),
        (0, a.jsx)('div', {
            style: r,
            className: o()(f.jumbleWrapper, {
                [f.peaking]: t,
                [f.transitioned]: C
            }),
            children: g.map((e, t) => {
                var s, r;
                let { top: o, left: c, rotation: g, size: C, skuId: m } = e,
                    h = null === (s = _[t]) || void 0 === s ? void 0 : s.items[0],
                    b = null === (r = _[t]) || void 0 === r ? void 0 : r.type,
                    x = b === i.Z.AVATAR_DECORATION ? 384 : 512;
                return (0, a.jsxs)(
                    'div',
                    {
                        className: f.asset,
                        style: {
                            top: n ? -p - x : o,
                            left: n ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(g, 'deg)'),
                            height: C.y,
                            width: C.x,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                        },
                        children: [
                            null != h && b === i.Z.AVATAR_DECORATION && (0, a.jsx)(d.R, { item: h }),
                            null != h &&
                                b === i.Z.PROFILE_EFFECT &&
                                (0, a.jsx)(l.Z, {
                                    profileEffectId: h.id,
                                    isPurchased: !1,
                                    isHovering: !0
                                })
                        ]
                    },
                    m + t
                );
            })
        })
    );
};
