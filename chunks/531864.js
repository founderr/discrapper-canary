n(47120);
var s = n(735250),
    r = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(979554),
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
    let { peaking: t, transitioning: n, style: a } = e,
        p = window.innerHeight,
        [g, C] = r.useState(!1),
        m = f.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
        });
    return (
        r.useEffect(() => {
            n &&
                setTimeout(() => {
                    C(!0);
                }, d.lb);
        }, [n]),
        (0, s.jsx)('div', {
            style: a,
            className: i()(u.jumbleWrapper, {
                [u.peaking]: t,
                [u.transitioned]: g
            }),
            children: f.map((e, t) => {
                var r, a;
                let { top: i, left: c, rotation: d, size: f, skuId: g } = e,
                    C = null === (r = m[t]) || void 0 === r ? void 0 : r.items[0],
                    _ = null === (a = m[t]) || void 0 === a ? void 0 : a.type;
                return (0, s.jsx)(
                    'div',
                    {
                        className: u.asset,
                        style: {
                            top: n ? -p - 256 : i,
                            left: n ? ''.concat(c - 75 - 350 * Math.random()) : c,
                            transform: 'rotate('.concat(d, 'deg)'),
                            height: f,
                            width: f,
                            transitionDelay: ''.concat(Math.random() / 3, 's'),
                            transitionDuration: ''.concat(1.5 - Math.random() / 2, 's')
                        },
                        children: null != C && _ === o.Z.AVATAR_DECORATION && (0, s.jsx)(l.R, { item: C })
                    },
                    g + t
                );
            })
        })
    );
};
