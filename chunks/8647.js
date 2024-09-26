var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(399606),
    l = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    _ = n(63063),
    E = n(74538),
    u = n(276800),
    T = n(248042),
    I = n(409100),
    R = n(725727),
    g = n(474936),
    N = n(981631),
    C = n(689938),
    m = n(44085);
t.Z = function (e) {
    let { isFullScreen: t, buttonClassName: a } = e,
        { promotion: f } = (0, R.mq)(),
        A = (0, i.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, T.Vi)()) return null;
    let p = new Date(f.endDate);
    return (0, s.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, s.jsxs)('div', {
            className: r()(m.banner, { [m.bannerFullScreen]: t }),
            children: [
                (0, s.jsx)('div', {
                    className: m.bannerLeftImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: m.image
                    })
                }),
                (0, s.jsxs)('div', {
                    className: m.bannerContent,
                    children: [
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(l.Heading, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == A || null == (0, E.he)(A) ? C.Z.Messages.BOGO_MARKETING_PAGE_BANNER_HEADER_2024 : C.Z.Messages.BOGO_MARKETING_PAGE_BANNER_NON_NITRO_HEADER_2024
                                }),
                                (0, s.jsx)(l.Text, {
                                    className: m.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, s.jsx)(u.Z, { endDate: p })
                                }),
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: C.Z.Messages.BOGO_MARKETING_PAGE_BANNER_SUBHEADER_2024.format({ helpCenterLink: _.Z.getArticleURL(N.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, s.jsx)(I.Z, {
                            buttonText: C.Z.Messages.BOGO_CLAIM_OFFER,
                            buttonTextClassName: m.subscribeButtonText,
                            subscriptionTier: g.Si.TIER_2,
                            showIcon: !1,
                            className: null != a ? a : m.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: m.bannerRightImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: m.image
                    })
                })
            ]
        })
    });
};
