var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(399606),
    o = n(780384),
    c = n(481060),
    d = n(774078),
    u = n(727637),
    m = n(607070),
    p = n(210887),
    f = n(388032),
    h = n(901698),
    g = n(262278),
    C = n(458597);
t.Z = function () {
    let e = a.useRef(null),
        t = (0, u.Z)(e),
        n = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        s = (0, l.e7)([p.Z], () => (0, o.wj)(p.Z.theme)),
        { days: b, hours: x } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        v = a.useMemo(() => {
            if (0 === b && 0 === x) return f.intl.string(f.t.qAWS4O);
            let e = ''.concat(b.toString().padStart(2, '0')).concat(f.intl.string(f.t.QJyuxc)),
                t = ''.concat(x.toString().padStart(2, '0')).concat(f.intl.string(f.t['1LyF1t']));
            return ''.concat(e, ':').concat(t);
        }, [b, x]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(s ? h.shopCardDark : h.shopCard, g.notInteractive, {
            [h.shopCardAnimation]: !n,
            [s ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: t
        }),
        children: [
            (0, r.jsx)('div', {
                className: h.preview,
                children: (0, r.jsx)('div', {
                    className: i()(h.avatarContainer, h.mysteryAvatarContainer),
                    children: (0, r.jsx)('img', {
                        src: C,
                        className: g.spark,
                        alt: ''
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: h.cardText,
                children: [
                    (0, r.jsx)('div', { className: i()(h.cardBackground, s ? h.darkCardBackground : h.lightCardBackground) }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: g.productName,
                        children: f.intl.string(f.t.ZDfl3d)
                    })
                ]
            }),
            (0, r.jsx)(c.TextBadge, {
                text: v,
                disableColor: !0,
                className: h.newBadge
            })
        ]
    });
};
