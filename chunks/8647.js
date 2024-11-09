var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(399606),
    l = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    u = n(63063),
    g = n(74538),
    m = n(276800),
    f = n(346497),
    _ = n(409100),
    p = n(725727),
    h = n(474936),
    E = n(981631),
    b = n(388032),
    x = n(44085);
t.Z = function (e) {
    let { isFullScreen: t, buttonClassName: r } = e,
        { promotion: C } = (0, p.mq)(),
        T = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, f.Vi)()) return null;
    let v = new Date(C.endDate);
    return (0, i.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: a()(x.banner, { [x.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: x.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: x.image
                    })
                }),
                (0, i.jsxs)('div', {
                    className: x.bannerContent,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == T || null == (0, g.he)(T) ? b.intl.string(b.t.xbzNJC) : b.intl.string(b.t['22WZ9P'])
                                }),
                                (0, i.jsx)(l.Text, {
                                    className: x.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, i.jsx)(m.Z, { endDate: v })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: b.intl.format(b.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(E.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, i.jsx)(_.Z, {
                            buttonText: b.intl.string(b.t.J61px8),
                            buttonTextClassName: x.subscribeButtonText,
                            subscriptionTier: h.Si.TIER_2,
                            showIcon: !1,
                            className: null != r ? r : x.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: x.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: x.image
                    })
                })
            ]
        })
    });
};
