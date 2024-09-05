n.d(t, {
    G: function () {
        return h;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(442837),
    i = n(481060),
    l = n(607070),
    c = n(372047),
    d = n(731782),
    u = n(196798),
    f = n(660348),
    p = n(872044),
    g = n(671581),
    C = n(830487),
    m = n(602476);
function _() {
    return (0, a.jsxs)('div', {
        className: d.attributionLogos,
        'aria-label': 'Discord x Pocketpair',
        children: [
            (0, a.jsx)(i.ClydeIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 22,
                'aria-hidden': !0
            }),
            (0, a.jsx)(i.Text, {
                variant: 'heading-sm/extrabold',
                tag: 'div',
                children: '|'
            }),
            (0, a.jsx)('img', {
                src: f,
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
function h(e) {
    let { category: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        { enabled: r } = (0, c.Z)({ location: 'CollectiblesShop' });
    return (0, a.jsxs)('div', {
        className: s()(d.banner, { [d.noTopMargin]: r }),
        'aria-label': t.name,
        children: [
            (0, a.jsxs)('div', {
                className: d.mainContent,
                children: [
                    (0, a.jsx)('img', {
                        src: p,
                        className: d.bannerImage,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    (0, a.jsx)(_, {}),
                    (0, a.jsx)('img', {
                        src: g,
                        className: d.categoryLogo,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    !n &&
                        (0, a.jsx)('img', {
                            src: u,
                            className: d.animatedLayer,
                            alt: '',
                            'aria-hidden': !0
                        }),
                    (0, a.jsx)(i.Text, {
                        className: d.summary,
                        variant: 'text-md/normal',
                        children: t.summary
                    })
                ]
            }),
            (0, a.jsx)('img', {
                src: m,
                className: s()(d.overflowImage, d.overflowRight),
                alt: '',
                'aria-hidden': !0
            }),
            (0, a.jsx)('img', {
                src: C,
                className: s()(d.overflowImage, d.overflowLeft),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
