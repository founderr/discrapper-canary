n(47120);
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(979554),
    c = n(597688),
    l = n(616066),
    d = n(215023),
    u = n(843702);
let f = [
    {
        left: 0,
        top: 20,
        rotation: -32,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 128,
        top: 48,
        rotation: 24,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 256,
        top: 12,
        rotation: 8,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 384,
        top: 44,
        rotation: -48,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 512,
        top: 52,
        rotation: 12,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 640,
        top: 28,
        rotation: -4,
        size: 96,
        skuId: '1252404767737778217'
    },
    {
        left: 768,
        top: 28,
        rotation: -4,
        size: 96,
        skuId: '1252404767737778217'
    }
];
t.Z = (e) => {
    let { peaking: t, transitioning: n, style: s } = e,
        p = window.innerHeight,
        [g, C] = a.useState(!1),
        m = f.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        a.useEffect(() => {
            n &&
                setTimeout(() => {
                    C(!0);
                }, d.lb);
        }, [n]),
        (0, r.jsx)('div', {
            style: s,
            className: o()(u.jumbleWrapper, {
                [u.peaking]: t,
                [u.transitioned]: g
            }),
            children: f.map((e, t) => {
                var a, s;
                let { top: o, left: c, rotation: d, size: f, skuId: g } = e,
                    C = null === (a = m[t]) || void 0 === a ? void 0 : a.items[0],
                    _ = null === (s = m[t]) || void 0 === s ? void 0 : s.type;
                return (0, r.jsx)(
                    'div',
                    {
                        className: u.asset,
                        style: {
                            top: n ? -p - 256 : o,
                            left: n ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(d, 'deg)'),
                            height: f,
                            width: f,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(1.5 - Math.random() / 2, 's')
                        },
                        children: null != C && _ === i.Z.AVATAR_DECORATION && (0, r.jsx)(l.R, { item: C })
                    },
                    g + t
                );
            })
        })
    );
};
