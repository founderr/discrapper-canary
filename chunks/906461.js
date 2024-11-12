var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(100527),
    o = n(182567),
    c = n(63063),
    d = n(769415),
    u = n(639119),
    g = n(276800),
    m = n(474936),
    f = n(981631),
    _ = n(388032),
    p = n(222283);
t.Z = function (e) {
    let { isFullScreen: t } = e,
        r = (0, u.N)(),
        h = (null == r ? void 0 : r.trial_id) === m.jz,
        { enabled: E } = d.Z.useExperiment({ location: 'Q4MomentBanner' + (t ? '-NitroHome' : '-NitroSettings') });
    if (!h || !E || null == r.expires_at) return null;
    let b = new Date(r.expires_at);
    return (0, i.jsx)(o.O, {
        newLocations: [l.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: a()(p.banner, { [p.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: p.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(28517),
                        className: p.image
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.bannerContent,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'display-sm',
                                color: 'always-white',
                                children: _.intl.string(_.t.Kkcmj4)
                            }),
                            (0, i.jsx)(s.Text, {
                                className: p.countdown,
                                variant: 'text-sm/bold',
                                color: 'always-white',
                                children: (0, i.jsx)(g.Z, { endDate: b })
                            }),
                            (0, i.jsxs)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: [
                                    _.intl.string(_.t['2a1fz8']),
                                    '\xA0',
                                    (0, i.jsx)(s.Anchor, {
                                        href: c.Z.getArticleURL(f.BhN.PREMIUM_TRIAL_FOR_ALL),
                                        children: _.intl.string(_.t['sBp+u7'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(557622),
                        className: p.image
                    })
                })
            ]
        })
    });
};
