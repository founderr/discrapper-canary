t.d(n, {
    Z: function () {
        return D;
    },
    d: function () {
        return U;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    o = t.n(i),
    l = t(442837),
    u = t(692547),
    s = t(481060),
    a = t(549817),
    c = t(819553),
    d = t(17181),
    _ = t(303737),
    f = t(434404),
    E = t(703656),
    I = t(944486),
    S = t(914010),
    g = t(671533),
    T = t(259580),
    p = t(358085),
    C = t(962086),
    m = t(160404),
    A = t(889695),
    N = t(981631),
    h = t(176505),
    L = t(302463),
    O = t(293810),
    R = t(689938),
    v = t(370040);
function M(e) {
    let { className: n, onClick: t, children: i } = e;
    return (0, r.jsx)(s.Button, {
        className: o()(v.button, n),
        innerClassName: v.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: i
    });
}
function b(e) {
    let { onClick: n } = e;
    return (0, r.jsx)(M, {
        onClick: n,
        children: R.Z.Messages.DISABLE
    });
}
function D() {
    let e = (0, l.e7)([S.Z], () => S.Z.getGuildId()),
        n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: i,
            isFullServerPreview: o,
            isServerShopPreview: p
        } = (0, l.cj)([m.Z], () => ({
            viewingRoles: null != e ? m.Z.getViewingRoles(e) : null,
            backNavigationSection: m.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && m.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && m.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let D = (function (e) {
            switch (e) {
                case N.pNK.INTEGRATIONS:
                    return R.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                case N.pNK.ROLE_SUBSCRIPTIONS:
                    return R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                case N.pNK.ONBOARDING:
                    return R.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                default:
                    return R.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
        })(i),
        U = i === N.pNK.ROLE_SUBSCRIPTIONS ? R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : R.Z.Messages.VIEWING_AS_ROLES_SELECT,
        Z = n === h.oC.GUILD_ONBOARDING,
        P = (n) => {
            let { backToSettings: t } = n;
            null != e && (m.Z.isFullServerPreview(e) && (0, E.uL)(N.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, C.mL)(e), t && f.Z.open(e, i), i === N.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, r.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: v.notice,
        children: [
            (0, r.jsxs)(M, {
                onClick: () => P({ backToSettings: !0 }),
                className: v.backButton,
                children: [
                    (0, r.jsx)(g.Z, {
                        width: 16,
                        height: 16,
                        direction: g.Z.Directions.LEFT,
                        className: v.backArrow
                    }),
                    D
                ]
            }),
            Z && o
                ? (0, r.jsx)('div', {
                      className: v.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: v.noticeText,
                          children: R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: v.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: v.noticeText,
                              children: o ? R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(t).length }) : R.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(t).length })
                          }),
                          (0, r.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(A.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, r.jsxs)(M, {
                                      onClick: n,
                                      children: [
                                          U,
                                          (0, r.jsx)(T.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: T.Z.Directions.DOWN,
                                              className: v.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          o &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: v.previewWarning,
                                  text: R.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: v.previewWarning,
                                  text: R.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                                      maxTiers: O.fF,
                                      maxProducts: L.dD
                                  }),
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            o || i === N.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => P({ backToSettings: !1 }) })
        ]
    });
}
function U(e) {
    let { guildId: n } = e;
    return (0, l.e7)([m.Z], () => m.Z.isViewingRoles(n))
        ? (0, r.jsx)('div', {
              className: o()(v.settingsWrapper, {
                  [v.windows]: (0, p.isWindows)(),
                  [v.osx]: (0, p.isMac)()
              }),
              children: (0, r.jsx)(D, {})
          })
        : null;
}
