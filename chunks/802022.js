var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(399606),
    o = r(780384),
    c = r(481060),
    d = r(774078),
    u = r(727637),
    m = r(607070),
    f = r(210887),
    p = r(689938),
    C = r(352177),
    h = r(297491),
    g = r(458597);
t.Z = function () {
    let e = n.useRef(null),
        t = (0, u.Z)(e),
        r = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        a = (0, l.e7)([f.Z], () => (0, o.wj)(f.Z.theme)),
        { days: _, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = n.useMemo(() => {
            if (0 === _ && 0 === b) return p.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ''.concat(_.toString().padStart(2, '0')).concat(p.Z.Messages.COUNTDOWN_UNITS_DAYS),
                t = ''.concat(b.toString().padStart(2, '0')).concat(p.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return ''.concat(e, ':').concat(t);
        }, [_, b]);
    return (0, s.jsxs)('div', {
        ref: e,
        className: i()(a ? C.shopCardDark : C.shopCard, h.notInteractive, {
            [C.shopCardAnimation]: !r,
            [a ? C.shopCardDarkHighlighted : C.shopCardHighlighted]: t
        }),
        children: [
            (0, s.jsx)('div', {
                className: C.preview,
                children: (0, s.jsx)('div', {
                    className: i()(C.avatarContainer, C.mysteryAvatarContainer),
                    children: (0, s.jsx)('img', {
                        src: g,
                        className: h.spark,
                        alt: ''
                    })
                })
            }),
            (0, s.jsxs)('div', {
                className: C.cardText,
                children: [
                    (0, s.jsx)('div', { className: i()(C.cardBackground, a ? C.darkCardBackground : C.lightCardBackground) }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: h.productName,
                        children: p.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
                    })
                ]
            }),
            (0, s.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: C.newBadge
            })
        ]
    });
};
