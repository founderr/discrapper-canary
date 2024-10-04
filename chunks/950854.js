n.d(a, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    l = n(481060),
    s = n(689938),
    o = n(882089);
function c(e) {
    let { className: a, onClick: n, imageSrc: t, iconSrc: c, header: d, headerClassName: u, subheaderVariant: _ = 'text-sm/normal', subheader: p, children: m, animatesOnHover: g, ...I } = e,
        h = null != t,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                h &&
                    (0, i.jsx)('div', {
                        className: o.imageContainer,
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: o.image,
                            src: t
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: o.textContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: r()(o.topRowContainer),
                            children: [
                                null != c &&
                                    (0, i.jsx)('img', {
                                        className: o.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, i.jsxs)('div', {
                                    className: o.headerContainer,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != p &&
                                            (0, i.jsx)(l.Text, {
                                                className: o.subheader,
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
        x = r()(a, o.container, { [o.hasImage]: h });
    return null != n
        ? (0, i.jsx)(l.ClickableContainer, {
              tag: 'article',
              'aria-label': s.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({ name: d }),
              onClick: n,
              className: r()(x, o.clickable, { [o.animatesOnHoverContainer]: g }),
              focusProps: { offset: 4 },
              children: f
          })
        : (0, i.jsx)('article', {
              className: x,
              ...I,
              children: f
          });
}
