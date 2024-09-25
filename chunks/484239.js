var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(314684),
    l = n(176782),
    c = n(743612),
    d = n(735825),
    _ = n(977341),
    u = n(721239),
    E = n(557634),
    T = n(992429);
t.Z = (e) => {
    var t;
    let n,
        a,
        { title: I, titleClassName: R, buttonClassName: m, perkImage: g, isCarousel: N, onCtaClick: C, perkComponent: p, subtitle: f = '', descriptionCta: A = '', cardVariant: S, subtitleClassName: M } = e,
        h = (0, l._)(S),
        x = (0, o.yQ)(),
        b = (null == x ? void 0 : x.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == x ? void 0 : x.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = T), (a = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = u), (a = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = E), (a = 'thumbs up icon');
            break;
        default:
            (n = void 0), (a = '');
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', { className: r()(_.cover, _.below) }),
            (0, s.jsx)(c.Z, {
                title: I,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: h,
                titleClassName: R,
                subtitle: f,
                subtitleClassName: M
            }),
            null != g &&
                (0, s.jsx)('img', {
                    src: g,
                    alt: '',
                    className: r()({
                        [_.cardImage]: !N,
                        [_.carouselCardImage]: N
                    })
                }),
            null != p &&
                (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)('div', {
                        className: _.cardIllustrationNoHover,
                        children: [
                            p,
                            0 !== A.length &&
                                null != C &&
                                (0, s.jsx)(i.Button, {
                                    className: m,
                                    disabled: !b,
                                    fullWidth: !0,
                                    onClick: C,
                                    children: (0, s.jsxs)('div', {
                                        className: null == h ? void 0 : null === (t = h.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, s.jsx)('img', {
                                                alt: a,
                                                src: n
                                            }),
                                            A
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
