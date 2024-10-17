s.d(n, {
    Z: function () {
        return c;
    }
});
var t = s(735250);
s(470079);
var l = s(120356),
    i = s.n(l),
    r = s(481060),
    a = s(203748);
function c(e) {
    let { className: n, copy: s, bannerImage: l, textColor: c = 'always-white', hideGiftIcon: o = !1 } = e;
    return (0, t.jsxs)('div', {
        className: i()(a.bannerContainer, n),
        children: [
            null == l
                ? null
                : (0, t.jsx)('img', {
                      alt: '',
                      className: a.banner,
                      src: l
                  }),
            (0, t.jsxs)('div', {
                className: a.textContainer,
                children: [
                    !1 === o &&
                        (0, t.jsx)(r.GiftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: a.giftIcon
                        }),
                    (0, t.jsx)(r.Heading, {
                        className: i()(a.textHeader, { [a.textHeaderWithGiftIcon]: !o }),
                        color: c,
                        variant: 'eyebrow',
                        children: s
                    })
                ]
            })
        ]
    });
}
