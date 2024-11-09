var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(704215),
    o = n(481060),
    l = n(906732),
    u = n(335131),
    c = n(243778),
    d = n(197115),
    f = n(703656),
    _ = n(221292),
    h = n(652853),
    p = n(475413),
    m = n(228168),
    g = n(981631),
    E = n(921944),
    v = n(474936),
    I = n(388032),
    S = n(458965);
function T(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(o.Clickable, {
        'aria-label': I.intl.string(I.t.WAI6xs),
        onClick: t,
        className: S.upsellCloseIconWrapper,
        children: (0, r.jsx)(o.XSmallIcon, {
            size: 'xs',
            className: S.upsellCloseIcon,
            color: 'currentColor'
        })
    });
}
function b(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, l.ZP)();
    return (0, r.jsxs)('div', {
        className: S.upsellButtons,
        children: [
            (0, r.jsx)('div', {
                className: S.upsellButtonWrapper,
                children: n
                    ? (0, r.jsxs)(o.ShinyButton, {
                          onlyShineOnHover: !0,
                          size: t ? o.Button.Sizes.TINY : o.Button.Sizes.SMALL,
                          look: o.Button.Looks.FILLED,
                          color: o.Button.Colors.PRIMARY,
                          className: S.upsellButton,
                          innerClassName: S.viewPremiumPerksButtonInner,
                          buttonShineClassName: S.viewPremiumPerksButtonShine,
                          onClick: () => {
                              (0, _.pQ)({ action: m.yM.VIEW_PREMIUM_PERKS }), (0, f.uL)(g.Z5c.APPLICATION_STORE), null == i || i();
                          },
                          children: [
                              (0, r.jsx)(o.NitroWheelIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              I.intl.string(I.t['0Q61kJ'])
                          ]
                      })
                    : (0, r.jsx)(d.Z, {
                          onClick: () => {
                              (0, _.pQ)({ action: m.yM.GET_PREMIUM }), null == i || i();
                          },
                          buttonText: I.intl.string(I.t.x6rkDg),
                          subscriptionTier: v.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.jXE.USER_PROFILE },
                          className: S.upsellButton,
                          size: t ? o.Button.Sizes.TINY : o.Button.Sizes.SMALL,
                          onlyShineOnHover: !0,
                          showGradient: !0
                      })
            }),
            (0, r.jsx)('div', {
                className: S.upsellButtonWrapper,
                children: (0, r.jsx)(p.tG, {
                    icon: o.ShopIcon,
                    action: m.yM.VISIT_SHOP,
                    text: I.intl.string(I.t.b2d0Nz),
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: t ? o.Button.Sizes.TINY : o.Button.Sizes.SMALL,
                    className: S.upsellButton,
                    onClick: () => {
                        (0, u.mK)({
                            analyticsLocations: a,
                            openInLayer: !1,
                            analyticsSource: s
                        }),
                            null == i || i();
                    }
                })
            })
        ]
    });
}
t.Z = function (e) {
    let { isPremiumUser: t, onInteraction: n, className: i } = e,
        { profileType: l } = (0, h.z)(),
        u = l === m.y0.FULL_SIZE;
    return (0, r.jsx)(c.ZP, {
        contentTypes: [s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS],
        children: (e) => {
            let { visibleContent: l, markAsDismissed: c } = e;
            if (l !== s.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) return null;
            {
                let e = (0, r.jsx)('div', {
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: I.intl.string(I.t.EIYbj4)
                        })
                    }),
                    s = (0, r.jsx)(T, { onClose: () => c(E.L.USER_DISMISS) }),
                    l = (0, r.jsx)(b, {
                        isPremiumUser: t,
                        onInteraction: n,
                        tiny: u
                    });
                return u
                    ? (0, r.jsx)('div', {
                          className: a()(S.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: a()(S.upsellContent, S.upsellRowContent),
                              children: [
                                  e,
                                  (0, r.jsxs)('div', {
                                      className: S.upsellRowRight,
                                      children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)('div', { children: s })]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('div', {
                          className: a()(S.upsellContainer, i),
                          children: (0, r.jsxs)('div', {
                              className: a()(S.upsellContent, S.upsellDefaultContent),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: S.upsellHeader,
                                      children: [e, (0, r.jsx)('div', { children: s })]
                                  }),
                                  l
                              ]
                          })
                      });
            }
        }
    });
};
