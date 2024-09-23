var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(399606),
    o = n(481060),
    l = n(100527),
    c = n(182567),
    d = n(78839),
    _ = n(63063),
    u = n(74538),
    E = n(276800),
    T = n(248042),
    I = n(409100),
    R = n(725727),
    m = n(474936),
    g = n(981631),
    N = n(689938),
    C = n(44085);
t.Z = function (e) {
    let { isFullScreen: t, buttonClassName: a } = e,
        { promotion: p } = (0, R.mq)(),
        f = (0, i.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, T.Vi)()) return null;
    let A = new Date(p.endDate);
    return (0, s.jsx)(c.O, {
        newLocations: [l.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, s.jsxs)('div', {
            className: r()(C.banner, { [C.bannerFullScreen]: t }),
            children: [
                (0, s.jsx)('div', {
                    className: C.bannerLeftImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: C.image
                    })
                }),
                (0, s.jsxs)('div', {
                    className: C.bannerContent,
                    children: [
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(o.Heading, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == f || null == (0, u.he)(f) ? N.Z.Messages.BOGO_MARKETING_PAGE_BANNER_HEADER_2024 : N.Z.Messages.BOGO_MARKETING_PAGE_BANNER_NON_NITRO_HEADER_2024
                                }),
                                (0, s.jsx)(o.Text, {
                                    className: C.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, s.jsx)(E.Z, { endDate: A })
                                }),
                                (0, s.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: N.Z.Messages.BOGO_MARKETING_PAGE_BANNER_SUBHEADER_2024.format({ helpCenterLink: _.Z.getArticleURL(g.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, s.jsx)(I.Z, {
                            buttonText: N.Z.Messages.BOGO_CLAIM_OFFER,
                            buttonTextClassName: C.subscribeButtonText,
                            subscriptionTier: m.Si.TIER_2,
                            showIcon: !1,
                            className: null != a ? a : C.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: C.bannerRightImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: C.image
                    })
                })
            ]
        })
    });
};
