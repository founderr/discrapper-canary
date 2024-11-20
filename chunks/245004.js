var r = n(200651);
n(192379);
var i = n(399606),
    a = n(481060),
    s = n(607070),
    o = n(388032),
    l = n(841168),
    u = n(567949),
    c = n(552781),
    d = n(952567),
    f = n(807159);
function _(e) {
    let { description: t, heading: n, imgSrc: i } = e;
    return (0, r.jsxs)('div', {
        className: l.topPerksCard,
        children: [
            (0, r.jsx)('img', {
                className: l.topPerksCardImage,
                src: i,
                alt: ''
            }),
            (0, r.jsx)(a.Heading, {
                className: l.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: n
            }),
            (0, r.jsx)(a.Text, {
                className: l.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: t
            })
        ]
    });
}
t.Z = function () {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, r.jsx)(a.Heading, {
                className: l.heading,
                variant: 'heading-xxl/extrabold',
                children: o.intl.string(o.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: l.topPerksCards,
                children: [
                    (0, r.jsx)(_, {
                        description: o.intl.string(o.t.HTvLGh),
                        heading: o.intl.string(o.t.IpRQw8),
                        imgSrc: d
                    }),
                    (0, r.jsx)(_, {
                        description: o.intl.string(o.t.wOYbTk),
                        heading: o.intl.string(o.t.G6jZo6),
                        imgSrc: e ? c : u
                    }),
                    (0, r.jsx)(_, {
                        description: o.intl.string(o.t.yCjoUF),
                        heading: o.intl.string(o.t['/bX4Ji']),
                        imgSrc: f
                    })
                ]
            })
        ]
    });
};
