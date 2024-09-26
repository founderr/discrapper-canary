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
    C = n(212749);
let m = (e) => (e ? N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE),
    f = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, s.jsxs)(o.Clickable, {
            onClick: n,
            className: C.customButton,
            children: [
                t ? N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL,
                t
                    ? (0, s.jsx)(o.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.arrow
                      })
                    : (0, s.jsx)(o.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.arrow
                      })
            ]
        });
    },
    A = (e) => {
        let { title: t, description: n, className: a, imageSource: r, imageClassName: l, titleBadge: c, isNew: T = !1, isEarlyAccess: I = !1 } = e,
            { analyticsLocations: R } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, s.jsx)(_.Gt, {
            value: R,
            children: (0, s.jsxs)('div', {
                className: i()(C.perkCard, a),
                children: [
                    T
                        ? (0, s.jsx)(u.Z, {
                              className: C.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    I ? (0, s.jsx)(E.Z, { className: C.perkCardEarlyAccessBadge }) : null,
                    (0, s.jsx)('img', {
                        src: r,
                        alt: '',
                        className: i()(l, C.perksCardArt)
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsxs)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                className: C.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: C.perkCardDescription,
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
        E = (0, R.N)({ styles: C }),
        u = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { analyticsLocations: N } = (0, _.ZP)(),
        p = (0, T._f)(),
        M = [E.emoji, E.streaming, E.upload, E.customAppIcons, E.soundboard, p ? E.remix : E.videoBackground, E.superReactions, E.stickersPerkDiscoverability, E.badgeAlt];
    return (0, s.jsxs)('div', {
        className: i()(C.perksContainer, t, {
            [C.partiallyHidden]: n && !r,
            [C.subscriberNitroHome]: n,
            [C.reducedMotion]: u
        }),
        children: [
            (0, s.jsx)(o.Heading, {
                variant: 'heading-xxl/extrabold',
                className: i()(C.perksTitle),
                children: m(n)
            }),
            (0, s.jsx)('div', {
                className: i()(C.perkCardContainer, { [C.perkCardContainerExpanded]: r }),
                children: M.map((e) => null != e && (0, s.jsx)(A, { ...e }, e.title))
            }),
            n &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className: i()({
                                [C.sizeGizmo]: !r,
                                [C.sizeGizmoExpanded]: r
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
                        (0, s.jsx)('div', { className: i()(C.cover, { [C.hidden]: r }) })
                    ]
                })
        ]
    });
};
