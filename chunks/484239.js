var s = n(735250);
n(470079);
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
        { title: I, titleClassName: R, buttonClassName: g, perkImage: N, isCarousel: m, onCtaClick: C, perkComponent: A, subtitle: f = '', descriptionCta: p = '', cardVariant: M, subtitleClassName: S } = e,
        h = (0, o._)(M),
        b = (0, l.yQ)(),
        x = (null == b ? void 0 : b.nitroTenureStatus) === _.EB.REDEEMABLE;
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
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', { className: r()(d.cover, d.below) }),
            (0, s.jsx)(c.Z, {
                title: I,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: h,
                titleClassName: R,
                subtitle: f,
                subtitleClassName: S
            }),
            null != N &&
                (0, s.jsx)('img', {
                    src: N,
                    alt: '',
                    className: r()({
                        [d.cardImage]: !m,
                        [d.carouselCardImage]: m
                    })
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
                                    disabled: !x,
                                    fullWidth: !0,
                                    onClick: C,
                                    children: (0, s.jsxs)('div', {
                                        className: null == h ? void 0 : null === (t = h.descriptionCta) || void 0 === t ? void 0 : t.className,
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
