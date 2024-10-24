var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(100527),
    o = n(182567),
    c = n(63063),
    _ = n(769415),
    d = n(639119),
    E = n(276800),
    u = n(474936),
    T = n(981631),
    I = n(689938),
    R = n(222283);
t.Z = function (e) {
    let { isFullScreen: t } = e,
        a = (0, d.N)(),
        g = (null == a ? void 0 : a.trial_id) === u.jz,
        { enabled: N } = _.Z.useExperiment({ location: 'Q4MomentBanner' + (t ? '-NitroHome' : '-NitroSettings') });
    if (!g || !N || null == a.expires_at) return null;
    let m = new Date(a.expires_at);
    return (0, s.jsx)(o.O, {
        newLocations: [l.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, s.jsxs)('div', {
            className: r()(R.banner, { [R.bannerFullScreen]: t }),
            children: [
                (0, s.jsx)('div', {
                    className: R.bannerLeftImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: R.image
                    })
                }),
                (0, s.jsx)('div', {
                    className: R.bannerContent,
                    children: (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(i.Heading, {
                                variant: 'display-sm',
                                color: 'always-white',
                                children: I.Z.Messages.TRIAL_FOR_ALL_NITRO_MARKETING_HEADER
                            }),
                            (0, s.jsx)(i.Text, {
                                className: R.countdown,
                                variant: 'text-sm/bold',
                                color: 'always-white',
                                children: (0, s.jsx)(E.Z, { endDate: m })
                            }),
                            (0, s.jsxs)(i.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: [
                                    I.Z.Messages.TRIAL_FOR_ALL_BANNER_SUBHEADER,
                                    '\xA0',
                                    (0, s.jsx)(i.Anchor, {
                                        href: c.Z.getArticleURL(T.BhN.PREMIUM_TRIAL),
                                        children: I.Z.Messages.BOGO_TERMS_APPLY
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, s.jsx)('div', {
                    className: R.bannerRightImageContainer,
                    children: (0, s.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: R.image
                    })
                })
            ]
        })
    });
};
