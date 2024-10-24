var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(399606),
    o = n(780384),
    c = n(481060),
    d = n(774078),
    u = n(727637),
    m = n(607070),
    f = n(210887),
    p = n(689938),
    C = n(352177),
    h = n(297491),
    g = n(458597);
t.Z = function () {
    let e = s.useRef(null),
        t = (0, u.Z)(e),
        n = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        a = (0, l.e7)([f.Z], () => (0, o.wj)(f.Z.theme)),
        { days: _, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = s.useMemo(() => {
            if (0 === _ && 0 === b) return p.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ''.concat(_.toString().padStart(2, '0')).concat(p.Z.Messages.COUNTDOWN_UNITS_DAYS),
                t = ''.concat(b.toString().padStart(2, '0')).concat(p.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return ''.concat(e, ':').concat(t);
        }, [_, b]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(a ? C.shopCardDark : C.shopCard, h.notInteractive, {
            [C.shopCardAnimation]: !n,
            [a ? C.shopCardDarkHighlighted : C.shopCardHighlighted]: t
        }),
        children: [
            (0, r.jsx)('div', {
                className: C.preview,
                children: (0, r.jsx)('div', {
                    className: i()(C.avatarContainer, C.mysteryAvatarContainer),
                    children: (0, r.jsx)('img', {
                        src: g,
                        className: h.spark,
                        alt: ''
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: C.cardText,
                children: [
                    (0, r.jsx)('div', { className: i()(C.cardBackground, a ? C.darkCardBackground : C.lightCardBackground) }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: h.productName,
                        children: p.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
                    })
                ]
            }),
            (0, r.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: C.newBadge
            })
        ]
    });
};
