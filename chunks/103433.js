var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(388032),
    o = n(641211),
    c = n(505944);
t.Z = (e) => {
    let { className: t, onBackClick: n } = e;
    return (0, i.jsxs)('div', {
        className: a()(o.container, t),
        'data-testid': 'all-perks-hero-header',
        children: [
            (0, i.jsx)('img', {
                src: c,
                alt: '',
                className: o.headerArt
            }),
            (0, i.jsxs)('div', {
                className: o.containerInner,
                children: [
                    (0, i.jsx)('div', {
                        className: o.backButtonContainer,
                        children: (0, i.jsxs)(s.Clickable, {
                            onClick: n,
                            className: o.backButton,
                            children: [(0, i.jsx)(s.ChevronSmallLeftIcon, { color: 'currentColor' }), l.intl.string(l.t['13/7kZ'])]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: o.__invalid_contentContainer,
                        children: (0, i.jsx)('div', {
                            className: o.content,
                            children: (0, i.jsx)(s.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: l.intl.string(l.t.hqjDX1)
                            })
                        })
                    })
                ]
            })
        ]
    });
};
