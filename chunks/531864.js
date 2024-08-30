n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
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
    g = {
        x: 200,
        y: 600
    },
    C = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: p,
            skuId: '1232072859485208687'
        },
        {
            left: 192,
            top: 48,
            rotation: -24,
            size: g,
            skuId: '1139323099687436419'
        },
        {
            left: 256,
            top: 12,
            rotation: 8,
            size: p,
            skuId: '1262491690900656261'
        },
        {
            left: 384,
            top: 44,
            rotation: -48,
            size: p,
            skuId: '1252404767737778217'
        },
        {
            left: 512,
            top: 52,
            rotation: 12,
            size: g,
            skuId: '1139323100568244355'
        },
        {
            left: 640,
            top: 28,
            rotation: -4,
            size: p,
            skuId: '1228251144065777765'
        },
        {
            left: 768,
            top: 28,
            rotation: -4,
            size: p,
            skuId: '1144046002110738634'
        }
    ];
t.Z = (e) => {
    let { peaking: t, transitioning: n, style: s } = e,
        p = window.innerHeight,
        [g, m] = r.useState(!1),
        _ = C.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        r.useEffect(() => {
            n &&
                setTimeout(() => {
                    m(!0);
                }, u.lb);
        }, [n]),
        (0, a.jsx)('div', {
            style: s,
            className: o()(f.jumbleWrapper, {
                [f.peaking]: t,
                [f.transitioned]: g
            }),
            children: C.map((e, t) => {
                var r, s;
                let { top: o, left: c, rotation: g, size: C, skuId: m } = e,
                    b = null === (r = _[t]) || void 0 === r ? void 0 : r.items[0],
                    h = null === (s = _[t]) || void 0 === s ? void 0 : s.type,
                    x = h === i.Z.AVATAR_DECORATION ? 384 : 512;
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
                            null != b && h === i.Z.AVATAR_DECORATION && (0, a.jsx)(d.R, { item: b }),
                            null != b &&
                                h === i.Z.PROFILE_EFFECT &&
                                (0, a.jsx)(l.Z, {
                                    profileEffectId: b.id,
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
