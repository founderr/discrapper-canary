n(47120);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(979554),
    o = n(876917),
    c = n(597688),
    d = n(616066),
    u = n(215023),
    m = n(340657);
let p = {
        x: 160,
        y: 160
    },
    f = [
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
    let { peaking: t, transitioning: n, style: s } = e,
        p = window.innerHeight,
        [h, g] = a.useState(!1),
        C = f.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        a.useEffect(() => {
            n &&
                setTimeout(() => {
                    g(!0);
                }, u.lb);
        }, [n]),
        (0, r.jsx)('div', {
            style: s,
            className: i()(m.jumbleWrapper, {
                [m.peaking]: t,
                [m.transitioned]: h
            }),
            children: f.map((e, t) => {
                var a, s;
                let { top: i, left: c, rotation: f, size: h, skuId: g } = e,
                    b = null === (a = C[t]) || void 0 === a ? void 0 : a.items[0],
                    x = null === (s = C[t]) || void 0 === s ? void 0 : s.type,
                    v = x === l.Z.AVATAR_DECORATION ? 384 : 512;
                return (0, r.jsxs)(
                    'div',
                    {
                        className: m.asset,
                        style: {
                            top: n ? -p - v : i,
                            left: n ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(f, 'deg)'),
                            height: h.y,
                            width: h.x,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                        },
                        children: [
                            null != b && x === l.Z.AVATAR_DECORATION && (0, r.jsx)(d.R, { item: b }),
                            null != b &&
                                x === l.Z.PROFILE_EFFECT &&
                                (0, r.jsx)(o.Z, {
                                    profileEffectId: b.id,
                                    isPurchased: !1,
                                    isHovering: !0
                                })
                        ]
                    },
                    g + t
                );
            })
        })
    );
};
