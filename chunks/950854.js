t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(689938),
    l = t(882089);
function c(e) {
    let { className: n, onClick: t, imageSrc: a, iconSrc: c, header: d, headerClassName: u, subheaderVariant: _ = 'text-sm/normal', subheader: p, children: m, animatesOnHover: I, ...f } = e,
        g = null != a,
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)('div', {
                        className: l.imageContainer,
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: l.image,
                            src: a
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: l.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: r()(l.topRowContainer),
                            children: [
                                null != c &&
                                    (0, i.jsx)('img', {
                                        className: l.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, i.jsxs)('div', {
                                    className: l.headerContainer,
                                    children: [
                                        (0, i.jsx)(o.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.Text, {
                                                className: l.subheader,
                                                color: 'header-secondary',
                                                variant: _,
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
        C = r()(n, l.container, { [l.hasImage]: g });
    return null != t
        ? (0, i.jsx)(o.ClickableContainer, {
              tag: 'article',
              'aria-label': s.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({ name: d }),
              onClick: t,
              className: r()(C, l.clickable, { [l.animatesOnHoverContainer]: I }),
              focusProps: { offset: 4 },
              children: h
          })
        : (0, i.jsx)('article', {
              className: C,
              ...f,
              children: h
          });
}
