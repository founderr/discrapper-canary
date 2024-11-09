n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    g = n(66595),
    m = n(535322),
    f = n(477734),
    _ = n(626135),
    p = n(881100),
    h = n(981631),
    E = n(388032),
    b = n(212749);
let x = (e) => (e ? E.intl.string(E.t.QX14gI) : E.intl.string(E.t.RGadQU)),
    C = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.Clickable, {
            onClick: n,
            className: b.customButton,
            children: [
                t ? E.intl.string(E.t.maZaNz) : E.intl.string(E.t['37C26e']),
                t
                    ? (0, i.jsx)(o.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.arrow
                      })
                    : (0, i.jsx)(o.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.arrow
                      })
            ]
        });
    },
    T = (e) => {
        let { title: t, description: n, className: r, imageSource: a, imageClassName: l, titleBadge: c, isNew: f = !1, isEarlyAccess: _ = !1 } = e,
            { analyticsLocations: p } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: p,
            children: (0, i.jsxs)('div', {
                className: s()(b.perkCard, r),
                children: [
                    f
                        ? (0, i.jsx)(m.Z, {
                              className: b.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    _ ? (0, i.jsx)(g.Z, { className: b.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: a,
                        alt: '',
                        className: s()(l, b.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                className: b.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: b.perkCardDescription,
                                children: 'function' == typeof n ? n(p) : n
                            })
                        ]
                    })
                ]
            })
        });
    };
t.Z = (e) => {
    let { className: t, isSubscriberNitroHome: n = !1 } = e,
        [a, d] = r.useState(!1),
        g = (0, p.N)({ styles: b }),
        m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { analyticsLocations: E } = (0, u.ZP)(),
        v = (0, f._f)(),
        N = [g.emoji, g.streaming, g.upload, g.customAppIcons, g.soundboard, v ? g.remix : g.videoBackground, g.superReactions, g.stickersPerkDiscoverability, g.badgeAlt];
    return (0, i.jsxs)('div', {
        className: s()(b.perksContainer, t, {
            [b.partiallyHidden]: n && !a,
            [b.subscriberNitroHome]: n,
            [b.reducedMotion]: m
        }),
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xxl/extrabold',
                className: s()(b.perksTitle),
                children: x(n)
            }),
            (0, i.jsx)('div', {
                className: s()(b.perkCardContainer, { [b.perkCardContainerExpanded]: a }),
                children: N.map((e) => null != e && (0, i.jsx)(T, { ...e }, e.title))
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: s()({
                                [b.sizeGizmo]: !a,
                                [b.sizeGizmoExpanded]: a
                            }),
                            children: (0, i.jsx)(C, {
                                onClick: () => {
                                    _.default.track(h.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: E,
                                        was_expanded: a
                                    }),
                                        d(!a);
                                },
                                isShowingAll: a
                            })
                        }),
                        (0, i.jsx)('div', { className: s()(b.cover, { [b.hidden]: a }) })
                    ]
                })
        ]
    });
};
