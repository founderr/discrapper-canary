n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    l = n(388032),
    s = n(882089);
function c(e) {
    let { className: t, onClick: n, imageSrc: a, iconSrc: c, header: d, headerClassName: u, subheaderVariant: p = 'text-sm/normal', subheader: m, children: _, animatesOnHover: f, ...h } = e,
        g = null != a,
        I = (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)('div', {
                        className: s.imageContainer,
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: s.image,
                            src: a
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: s.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: r()(s.topRowContainer),
                            children: [
                                null != c &&
                                    (0, i.jsx)('img', {
                                        className: s.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, i.jsxs)('div', {
                                    className: s.headerContainer,
                                    children: [
                                        (0, i.jsx)(o.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != m &&
                                            (0, i.jsx)(o.Text, {
                                                className: s.subheader,
                                                color: 'header-secondary',
                                                variant: p,
                                                children: m
                                            })
                                    ]
                                })
                            ]
                        }),
                        _
                    ]
                })
            ]
        }),
        b = r()(t, s.container, { [s.hasImage]: g });
    return null != n
        ? (0, i.jsx)(o.ClickableContainer, {
              tag: 'article',
              'aria-label': l.intl.formatToPlainString(l.t['0cVQIC'], { name: d }),
              onClick: n,
              className: r()(b, s.clickable, { [s.animatesOnHoverContainer]: f }),
              focusProps: { offset: 4 },
              children: I
          })
        : (0, i.jsx)('article', {
              className: b,
              ...h,
              children: I
          });
}
