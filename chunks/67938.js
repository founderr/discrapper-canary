r.d(t, {
    G: function () {
        return h;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(442837),
    o = r(481060),
    l = r(607070),
    c = r(372047),
    d = r(731782),
    u = r(196798),
    f = r(660348),
    p = r(872044),
    C = r(671581),
    _ = r(830487),
    m = r(602476);
function g() {
    return (0, a.jsxs)('div', {
        className: d.attributionLogos,
        'aria-label': 'Discord x Pocketpair',
        children: [
            (0, a.jsx)(o.ClydeIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 22,
                'aria-hidden': !0
            }),
            (0, a.jsx)(o.Text, {
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
        r = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        { enabled: n } = (0, c.Z)({ location: 'CollectiblesShop' });
    return (0, a.jsxs)('div', {
        className: s()(d.banner, { [d.noTopMargin]: n }),
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
                    (0, a.jsx)(g, {}),
                    (0, a.jsx)('img', {
                        src: C,
                        className: d.categoryLogo,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    !r &&
                        (0, a.jsx)('img', {
                            src: u,
                            className: d.animatedLayer,
                            alt: '',
                            'aria-hidden': !0
                        }),
                    (0, a.jsx)(o.Text, {
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
                src: _,
                className: s()(d.overflowImage, d.overflowLeft),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
