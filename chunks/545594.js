n.d(t, {
    i: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(244119);
function r(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: s, containerStyles: r, headerStyles: o, children: c } = e;
    return (0, i.jsxs)('div', {
        className: l.spamBanner,
        children: [
            (0, i.jsxs)('div', {
                className: a()(l.bannerTextContainer, r),
                children: [
                    'string' == typeof t
                        ? (0, i.jsx)('img', {
                              src: t,
                              alt: '',
                              className: l.bannerIcon
                          })
                        : t,
                    (0, i.jsxs)('div', {
                        className: l.bannerText,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(l.bannerHeader, o),
                                children: n
                            }),
                            (0, i.jsx)('div', {
                                className: l.bannerSubtext,
                                children: s
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: l.actionButtons,
                children: c
            })
        ]
    });
}
