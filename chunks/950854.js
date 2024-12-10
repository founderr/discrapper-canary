i.d(t, {
    Z: function () {
        return c;
    }
});
var n = i(200651);
i(192379);
var a = i(120356),
    r = i.n(a),
    o = i(481060),
    l = i(388032),
    s = i(746220);
function c(e) {
    let { className: t, onClick: i, imageSrc: a, iconSrc: c, header: d, headerClassName: u, subheaderVariant: h = 'text-sm/normal', subheader: p, children: m, animatesOnHover: _, ...f } = e,
        g = null != a,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                g &&
                    (0, n.jsx)('div', {
                        className: s.imageContainer,
                        children: (0, n.jsx)('img', {
                            alt: '',
                            className: s.image,
                            src: a
                        })
                    }),
                (0, n.jsxs)('div', {
                    className: s.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: r()(s.topRowContainer),
                            children: [
                                null != c &&
                                    (0, n.jsx)('img', {
                                        className: s.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, n.jsxs)('div', {
                                    className: s.headerContainer,
                                    children: [
                                        (0, n.jsx)(o.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != p &&
                                            (0, n.jsx)(o.Text, {
                                                className: s.subheader,
                                                color: 'header-secondary',
                                                variant: h,
                                                children: p
                                            })
                                    ]
                                })
                            ]
                        }),
                        m
                    ]
                })
            ]
        }),
        C = r()(t, s.container, { [s.hasImage]: g });
    return null != i
        ? (0, n.jsx)(o.ClickableContainer, {
              tag: 'article',
              'aria-label': l.intl.formatToPlainString(l.t['0cVQIC'], { name: d }),
              onClick: i,
              className: r()(C, s.clickable, { [s.animatesOnHoverContainer]: _ }),
              focusProps: { offset: 4 },
              children: x
          })
        : (0, n.jsx)('article', {
              className: C,
              ...f,
              children: x
          });
}
