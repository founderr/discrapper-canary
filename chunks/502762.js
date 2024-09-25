var r = n(627341);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(278074),
    u = n(481060),
    c = n(576635),
    d = n(213053),
    _ = n(652853),
    E = n(228168),
    f = n(319382);
let h = (e, t) => {
        let n = (0, l.EQ)(e)
                .with(E.y0.BITE_SIZE, () => f.biteSizeOuter)
                .with(E.y0.FULL_SIZE, () => f.fullSizeOuter)
                .with(E.y0.PANEL, () => f.userPanelOuter)
                .with(E.y0.CARD, () => f.userCardOuter)
                .otherwise(() => f.userProfileOuter),
            r = t ? f.userProfileOuterThemed : f.userProfileOuterUnthemed;
        return s()(n, r);
    },
    p = (e, t, n) => {
        let r = (0, l.EQ)(e)
                .with(E.y0.PANEL, () => f.userPanelInner)
                .with(E.y0.FULL_SIZE, () => f.userProfileModalInner)
                .with(E.y0.BITE_SIZE, () => f.biteSizeInner)
                .with(E.y0.CARD, () => f.userCardInner)
                .otherwise(() => f.userProfileInner),
            i = (0, l.EQ)(e)
                .with(E.y0.PANEL, () => f.userPanelInnerThemed)
                .with(E.y0.BITE_SIZE, () => f.biteSizeInnerThemed)
                .with(E.y0.FULL_SIZE, () => f.fullSizeInnerThemed)
                .otherwise(() => (n ? f.userProfileInnerThemedWithBanner : t ? f.userProfileInnerThemedPremiumWithoutBanner : f.userProfileInnerThemedNonPremium));
        return s()(r, i);
    },
    m = a.forwardRef(function (e, t) {
        let { user: n, displayProfile: r, profileType: a, className: o, pendingThemeColors: l, pendingProfileEffectId: E, themeOverride: m, children: I, forceShowPremium: T = !1, showOutOfBoundaryComponents: g = !1 } = e,
            {
                theme: S,
                primaryColor: A,
                secondaryColor: v
            } = (0, c.Z)({
                user: n,
                displayProfile: r,
                pendingThemeColors: l,
                isPreview: T
            }),
            { profileThemeStyle: N, profileThemeClassName: O } = (0, d.Z)({
                theme: null != m ? m : S,
                primaryColor: A,
                secondaryColor: v
            }),
            R = (null == r ? void 0 : r.canEditThemes) || T,
            C = null !== E && ((null == r ? void 0 : r.banner) != null || void 0 !== E);
        return (0, i.jsx)('div', {
            className: s()(h(a, R), g ? f.showOutOfBoundaryComponents : void 0, O, o),
            style: N,
            ref: t,
            children: (0, i.jsx)('div', {
                className: p(a, R, C),
                children: (0, i.jsx)(u.ThemeContextProvider, {
                    theme: null != m ? m : S,
                    children: (0, i.jsx)(_.X, {
                        profileType: a,
                        theme: null != m ? m : S,
                        primaryColor: A,
                        secondaryColor: v,
                        children: I
                    })
                })
            })
        });
    }),
    I = (e) =>
        (0, l.EQ)(e)
            .with(E.y0.BITE_SIZE, () => f.biteSizeOverlayBackground)
            .with(E.y0.FULL_SIZE, () => f.fullSizeOverlayBackground)
            .otherwise(() => f.overlayBackground),
    T = a.forwardRef(function (e, t) {
        let { children: n, className: r } = e,
            { profileType: a } = (0, _.z)();
        return (0, i.jsx)('div', {
            ref: t,
            className: s()(I(a), r),
            children: n
        });
    });
t.Z = Object.assign(m, { Overlay: T });
