t.d(n, {
    Z: function () {
        return U;
    },
    d: function () {
        return Z;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
    o = t(442837),
    u = t(692547),
    s = t(481060),
    a = t(549817),
    c = t(819553),
    d = t(17181),
    _ = t(303737),
    E = t(434404),
    f = t(703656),
    I = t(944486),
    S = t(914010),
    T = t(671533),
    C = t(259580),
    p = t(358085),
    N = t(962086),
    A = t(160404),
    g = t(889695),
    m = t(981631),
    L = t(176505),
    O = t(302463),
    R = t(293810),
    h = t(689938),
    v = t(489666);
function M(e) {
    let { className: n, onClick: t, children: r } = e;
    return (0, i.jsx)(s.Button, {
        className: l()(v.button, n),
        innerClassName: v.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: r
    });
}
function D(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(M, {
        onClick: n,
        children: h.Z.Messages.DISABLE
    });
}
function U() {
    let e = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
        n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: p
        } = (0, o.cj)([A.Z], () => ({
            viewingRoles: null != e ? A.Z.getViewingRoles(e) : null,
            backNavigationSection: A.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && A.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && A.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let U = (function (e) {
            switch (e) {
                case m.pNK.INTEGRATIONS:
                    return h.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                case m.pNK.ROLE_SUBSCRIPTIONS:
                    return h.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                case m.pNK.ONBOARDING:
                    return h.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                default:
                    return h.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
        })(r),
        Z = r === m.pNK.ROLE_SUBSCRIPTIONS ? h.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : h.Z.Messages.VIEWING_AS_ROLES_SELECT,
        P = n === L.oC.GUILD_ONBOARDING,
        b = (n) => {
            let { backToSettings: t } = n;
            null != e && (A.Z.isFullServerPreview(e) && (0, f.uL)(m.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, N.mL)(e), t && E.Z.open(e, r), r === m.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, i.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: v.notice,
        children: [
            (0, i.jsxs)(M, {
                onClick: () => b({ backToSettings: !0 }),
                className: v.backButton,
                children: [
                    (0, i.jsx)(T.Z, {
                        width: 16,
                        height: 16,
                        direction: T.Z.Directions.LEFT,
                        className: v.backArrow
                    }),
                    U
                ]
            }),
            P && l
                ? (0, i.jsx)('div', {
                      className: v.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: v.noticeText,
                          children: h.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: v.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: v.noticeText,
                              children: l ? h.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(t).length }) : h.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(g.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, i.jsxs)(M, {
                                      onClick: n,
                                      children: [
                                          Z,
                                          (0, i.jsx)(C.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: C.Z.Directions.DOWN,
                                              className: v.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: v.previewWarning,
                                  text: h.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, i.jsx)(s.TooltipContainer, {
                                  className: v.previewWarning,
                                  text: h.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                                      maxTiers: R.fF,
                                      maxProducts: O.dD
                                  }),
                                  children: (0, i.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === m.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(D, { onClick: () => b({ backToSettings: !1 }) })
        ]
    });
}
function Z(e) {
    let { guildId: n } = e;
    return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: l()(v.settingsWrapper, {
                  [v.windows]: (0, p.isWindows)(),
                  [v.osx]: (0, p.isMac)()
              }),
              children: (0, i.jsx)(U, {})
          })
        : null;
}
