var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(314684),
    o = n(176782),
    c = n(743612),
    _ = n(735825),
    d = n(977341),
    E = n(721239),
    u = n(557634),
    T = n(992429);
t.Z = (e) => {
    var t;
    let n,
        a,
        { title: I, titleClassName: R, buttonClassName: g, perkImage: N, isCarousel: m, onCtaClick: C, perkComponent: A, subtitle: f = '', descriptionCta: p = '', cardVariant: M, subtitleClassName: S, imageOverlayText: h } = e,
        x = (0, o._)(M),
        b = (0, l.yQ)(),
        O = (null == b ? void 0 : b.nitroTenureStatus) === _.EB.REDEEMABLE;
    switch (null == b ? void 0 : b.nitroTenureStatus) {
        case _.EB.REDEEMABLE:
            (n = T), (a = 'unlocked icon');
            break;
        case _.EB.PENDING:
            (n = E), (a = 'locked icon');
            break;
        case _.EB.REDEEMED:
            (n = u), (a = 'thumbs up icon');
            break;
        default:
            (n = void 0), (a = '');
    }
    let P = null != h;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', { className: r()(d.cover, d.below) }),
            (0, s.jsx)(c.Z, {
                title: I,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: x,
                titleClassName: R,
                subtitle: f,
                subtitleClassName: S
            }),
            null != N &&
                (0, s.jsxs)('div', {
                    className: r()(d.relative, { [d.cardImage]: !m }),
                    children: [
                        (0, s.jsx)('img', {
                            src: N,
                            alt: '',
                            className: r()({
                                [d.carouselCardImage]: m,
                                [d.greyScaleFilter]: P
                            })
                        }),
                        P
                            ? (0, s.jsx)('div', {
                                  className: d.imageOverlayTextContainer,
                                  children: (0, s.jsx)(i.Text, {
                                      className: d.imageOverlayText,
                                      variant: 'text-md/normal',
                                      children: h
                                  })
                              })
                            : null
                    ]
                }),
            null != A &&
                (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)('div', {
                        className: d.cardIllustrationNoHover,
                        children: [
                            A,
                            0 !== p.length &&
                                null != C &&
                                (0, s.jsx)(i.Button, {
                                    className: g,
                                    disabled: !O,
                                    fullWidth: !0,
                                    onClick: C,
                                    children: (0, s.jsxs)('div', {
                                        className: null == x ? void 0 : null === (t = x.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, s.jsx)('img', {
                                                alt: a,
                                                src: n
                                            }),
                                            p
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
