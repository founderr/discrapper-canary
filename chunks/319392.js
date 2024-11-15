n.d(t, {
    Z: function () {
        return C;
    }
});
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(726542),
    c = n(198993),
    s = n(63063),
    l = n(376340),
    a = n(981631),
    d = n(927923),
    u = n(388032),
    x = n(546471),
    p = n(418811);
function f() {
    return (0, o.jsxs)('div', {
        className: x.getXboxApp,
        children: [
            (0, o.jsxs)('div', {
                className: x.getXboxAppBody,
                children: [
                    (0, o.jsxs)(r.Heading, {
                        className: x.getXboxAppHeading,
                        variant: 'text-lg/semibold',
                        children: [
                            (0, o.jsx)('div', {
                                className: x.xboxLogoBox,
                                children: (0, o.jsx)('img', {
                                    src: i.Z.get(a.ABu.XBOX).icon.whiteSVG,
                                    alt: ''
                                })
                            }),
                            u.intl.string(u.t['12Kx2t'])
                        ]
                    }),
                    (0, o.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.M5yEcX)
                    }),
                    (0, o.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: (0, o.jsx)(r.Anchor, {
                            href: s.Z.getArticleURL(a.BhN.XBOX_CONNECTION),
                            children: u.intl.string(u.t.hvVgAQ)
                        })
                    })
                ]
            }),
            (0, o.jsx)(c.ZP, {
                className: x.getXboxAppQR,
                text: d.X3,
                size: 90
            })
        ]
    });
}
function C(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(l.L, {
        img: (0, o.jsx)('img', {
            src: p,
            width: '232',
            height: '113',
            alt: ''
        }),
        title: u.intl.string(u.t['7QsHmp']),
        body: u.intl.string(u.t.byYNPT),
        content: (0, o.jsx)(f, {}),
        onClose: t
    });
}
