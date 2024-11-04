n.d(t, {
    i: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(244119);
function a(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: l, containerStyles: a, headerStyles: o, children: c } = e;
    return (0, i.jsxs)('div', {
        className: s.spamBanner,
        children: [
            (0, i.jsxs)('div', {
                className: r()(s.bannerTextContainer, a),
                children: [
                    'string' == typeof t
                        ? (0, i.jsx)('img', {
                              src: t,
                              alt: '',
                              className: s.bannerIcon
                          })
                        : t,
                    (0, i.jsxs)('div', {
                        className: s.bannerText,
                        children: [
                            (0, i.jsx)('div', {
                                className: r()(s.bannerHeader, o),
                                children: n
                            }),
                            (0, i.jsx)('div', {
                                className: s.bannerSubtext,
                                children: l
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s.actionButtons,
                children: c
            })
        ]
    });
}
