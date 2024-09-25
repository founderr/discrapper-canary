i.d(t, {
    Z: function () {
        return c;
    }
});
var n = i(735250);
i(470079);
var a = i(120356),
    r = i.n(a),
    s = i(481060),
    o = i(689938),
    l = i(882089);
function c(e) {
    let { className: t, onClick: i, imageSrc: a, iconSrc: c, header: d, headerClassName: u, subheaderVariant: h = 'text-sm/normal', subheader: _, children: p, animatesOnHover: m, ...g } = e,
        C = null != a,
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                C &&
                    (0, n.jsx)('div', {
                        className: l.imageContainer,
                        children: (0, n.jsx)('img', {
                            alt: '',
                            className: l.image,
                            src: a
                        })
                    }),
                (0, n.jsxs)('div', {
                    className: l.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: r()(l.topRowContainer),
                            children: [
                                null != c &&
                                    (0, n.jsx)('img', {
                                        className: l.icon,
                                        alt: '',
                                        'aria-hidden': !0,
                                        src: c,
                                        width: 48,
                                        height: 48
                                    }),
                                (0, n.jsxs)('div', {
                                    className: l.headerContainer,
                                    children: [
                                        (0, n.jsx)(s.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != _ &&
                                            (0, n.jsx)(s.Text, {
                                                className: l.subheader,
                                                color: 'header-secondary',
                                                variant: h,
                                                children: _
                                            })
                                    ]
                                })
                            ]
                        }),
                        p
                    ]
                })
            ]
        }),
        f = r()(t, l.container, { [l.hasImage]: C });
    return null != i
        ? (0, n.jsx)(s.ClickableContainer, {
              tag: 'article',
              'aria-label': o.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({ name: d }),
              onClick: i,
              className: r()(f, l.clickable, { [l.animatesOnHoverContainer]: m }),
              focusProps: { offset: 4 },
              children: x
          })
        : (0, n.jsx)('article', {
              className: f,
              ...g,
              children: x
          });
}
