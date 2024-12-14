var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(399606),
    o = n(780384),
    c = n(481060),
    d = n(774078),
    u = n(727637),
    m = n(607070),
    h = n(210887),
    p = n(388032),
    g = n(176500),
    f = n(336387),
    C = n(458597);
t.Z = function () {
    let e = a.useRef(null),
        t = (0, u.Z)(e),
        n = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        i = (0, s.e7)([h.Z], () => (0, o.wj)(h.Z.theme)),
        { days: v, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = a.useMemo(() => {
            if (0 === v && 0 === b) return p.intl.string(p.t.qAWS4O);
            let e = ''.concat(v.toString().padStart(2, '0')).concat(p.intl.string(p.t.QJyuxc)),
                t = ''.concat(b.toString().padStart(2, '0')).concat(p.intl.string(p.t['1LyF1t']));
            return ''.concat(e, ':').concat(t);
        }, [v, b]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(i ? g.shopCardDark : g.shopCard, f.notInteractive, {
            [g.shopCardAnimation]: !n,
            [i ? g.shopCardDarkHighlighted : g.shopCardHighlighted]: t
        }),
        children: [
            (0, r.jsx)('div', {
                className: g.preview,
                children: (0, r.jsx)('div', {
                    className: l()(g.avatarContainer, g.mysteryAvatarContainer),
                    children: (0, r.jsx)('img', {
                        src: C,
                        className: f.spark,
                        alt: ''
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: g.cardText,
                children: [
                    (0, r.jsx)('div', { className: l()(g.cardBackground, i ? g.darkCardBackground : g.lightCardBackground) }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: f.productName,
                        children: p.intl.string(p.t.ZDfl3d)
                    })
                ]
            }),
            (0, r.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: g.newBadge
            })
        ]
    });
};
