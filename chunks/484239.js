var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(506829),
    m = n(721239),
    g = n(557634),
    f = n(992429);
t.Z = (e) => {
    var t;
    let n,
        r,
        { title: p, titleClassName: _, buttonClassName: h, perkImage: E, isCarousel: b, onCtaClick: x, perkComponent: C, subtitle: T = '', descriptionCta: v = '', cardVariant: N, subtitleClassName: I, imageOverlayText: S } = e,
        R = (0, o._)(N),
        A = (0, l.yQ)(),
        j = (null == A ? void 0 : A.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == A ? void 0 : A.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = f), (r = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = m), (r = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = g), (r = 'thumbs up icon');
            break;
        default:
            (n = void 0), (r = '');
    }
    let P = null != S;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: a()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: p,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: R,
                titleClassName: _,
                subtitle: T,
                subtitleClassName: I
            }),
            null != E &&
                (0, i.jsxs)('div', {
                    className: a()(u.relative, { [u.cardImage]: !b }),
                    children: [
                        (0, i.jsx)('img', {
                            src: E,
                            alt: '',
                            className: b ? (P ? u.carouselCardImageGrayscale : u.carouselCardImage) : ''
                        }),
                        P
                            ? (0, i.jsx)('div', {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, i.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: S
                                  })
                              })
                            : null
                    ]
                }),
            null != C &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: u.cardIllustrationNoHover,
                        children: [
                            C,
                            0 !== v.length &&
                                null != x &&
                                (0, i.jsx)(s.Button, {
                                    className: h,
                                    disabled: !j,
                                    fullWidth: !0,
                                    onClick: x,
                                    children: (0, i.jsxs)('div', {
                                        className: null == R ? void 0 : null === (t = R.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, i.jsx)('img', {
                                                alt: r,
                                                src: n
                                            }),
                                            v
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
