n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    _ = n(906732),
    E = n(66595),
    u = n(535322),
    T = n(477734),
    I = n(626135),
    R = n(881100),
    g = n(981631),
    N = n(689938),
    m = n(212749);
let C = (e) => (e ? N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE),
    f = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, s.jsxs)(o.Clickable, {
            onClick: n,
            className: m.customButton,
            children: [
                t ? N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL,
                t
                    ? (0, s.jsx)(o.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.arrow
                      })
                    : (0, s.jsx)(o.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.arrow
                      })
            ]
        });
    },
    p = (e) => {
        let { title: t, description: n, className: a, imageSource: r, imageClassName: l, titleBadge: c, isNew: T = !1, isEarlyAccess: I = !1 } = e,
            { analyticsLocations: R } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, s.jsx)(_.Gt, {
            value: R,
            children: (0, s.jsxs)('div', {
                className: i()(m.perkCard, a),
                children: [
                    T
                        ? (0, s.jsx)(u.Z, {
                              className: m.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    I ? (0, s.jsx)(E.Z, { className: m.perkCardEarlyAccessBadge }) : null,
                    (0, s.jsx)('img', {
                        src: r,
                        alt: '',
                        className: i()(l, m.perksCardArt)
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsxs)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                className: m.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: m.perkCardDescription,
                                children: 'function' == typeof n ? n(R) : n
                            })
                        ]
                    })
                ]
            })
        });
    };
t.Z = (e) => {
    let { className: t, isSubscriberNitroHome: n = !1 } = e,
        [r, d] = a.useState(!1),
        E = (0, R.N)({ styles: m }),
        u = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { analyticsLocations: N } = (0, _.ZP)(),
        A = (0, T._f)(),
        M = [E.emoji, E.streaming, E.upload, E.customAppIcons, E.soundboard, A ? E.remix : E.videoBackground, E.superReactions, E.stickersPerkDiscoverability, E.badgeAlt];
    return (0, s.jsxs)('div', {
        className: i()(m.perksContainer, t, {
            [m.partiallyHidden]: n && !r,
            [m.subscriberNitroHome]: n,
            [m.reducedMotion]: u
        }),
        children: [
            (0, s.jsx)(o.Heading, {
                variant: 'heading-xxl/extrabold',
                className: i()(m.perksTitle),
                children: C(n)
            }),
            (0, s.jsx)('div', {
                className: i()(m.perkCardContainer, { [m.perkCardContainerExpanded]: r }),
                children: M.map((e) => null != e && (0, s.jsx)(p, { ...e }, e.title))
            }),
            n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className: i()({
                                [m.sizeGizmo]: !r,
                                [m.sizeGizmoExpanded]: r
                            }),
                            children: (0, s.jsx)(f, {
                                onClick: () => {
                                    I.default.track(g.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: N,
                                        was_expanded: r
                                    }),
                                        d(!r);
                                },
                                isShowingAll: r
                            })
                        }),
                        (0, s.jsx)('div', { className: i()(m.cover, { [m.hidden]: r }) })
                    ]
                })
        ]
    });
};
