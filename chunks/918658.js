t.d(n, {
    Z: function () {
        return U;
    },
    d: function () {
        return Z;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    l = t.n(i),
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
    p = t(671533),
    T = t(259580),
    C = t(358085),
    g = t(962086),
    N = t(160404),
    m = t(889695),
    A = t(981631),
    h = t(176505),
    v = t(302463),
    L = t(293810),
    O = t(689938),
    R = t(489666);
function M(e) {
    let { className: n, onClick: t, children: i } = e;
    return (0, r.jsx)(s.Button, {
        className: l()(R.button, n),
        innerClassName: R.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: i
    });
}
function D(e) {
    let { onClick: n } = e;
    return (0, r.jsx)(M, {
        onClick: n,
        children: O.Z.Messages.DISABLE
    });
}
function U() {
    let e = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
        n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: C
        } = (0, o.cj)([N.Z], () => ({
            viewingRoles: null != e ? N.Z.getViewingRoles(e) : null,
            backNavigationSection: N.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && N.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && N.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let U = (function (e) {
            switch (e) {
                case A.pNK.INTEGRATIONS:
                    return O.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                case A.pNK.ROLE_SUBSCRIPTIONS:
                    return O.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                case A.pNK.ONBOARDING:
                    return O.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                default:
                    return O.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
        })(i),
        Z = i === A.pNK.ROLE_SUBSCRIPTIONS ? O.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : O.Z.Messages.VIEWING_AS_ROLES_SELECT,
        b = n === h.oC.GUILD_ONBOARDING,
        P = (n) => {
            let { backToSettings: t } = n;
            null != e && (N.Z.isFullServerPreview(e) && (0, f.uL)(A.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, g.mL)(e), t && E.Z.open(e, i), i === A.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, r.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: R.notice,
        children: [
            (0, r.jsxs)(M, {
                onClick: () => P({ backToSettings: !0 }),
                className: R.backButton,
                children: [
                    (0, r.jsx)(p.Z, {
                        width: 16,
                        height: 16,
                        direction: p.Z.Directions.LEFT,
                        className: R.backArrow
                    }),
                    U
                ]
            }),
            b && l
                ? (0, r.jsx)('div', {
                      className: R.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: R.noticeText,
                          children: O.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: R.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: R.noticeText,
                              children: l ? O.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(t).length }) : O.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(t).length })
                          }),
                          (0, r.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(m.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, r.jsxs)(M, {
                                      onClick: n,
                                      children: [
                                          Z,
                                          (0, r.jsx)(T.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: T.Z.Directions.DOWN,
                                              className: R.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: O.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          C &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: R.previewWarning,
                                  text: O.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                                      maxTiers: L.fF,
                                      maxProducts: v.dD
                                  }),
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || i === A.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, { onClick: () => P({ backToSettings: !1 }) })
        ]
    });
}
function Z(e) {
    let { guildId: n } = e;
    return (0, o.e7)([N.Z], () => N.Z.isViewingRoles(n))
        ? (0, r.jsx)('div', {
              className: l()(R.settingsWrapper, {
                  [R.windows]: (0, C.isWindows)(),
                  [R.osx]: (0, C.isMac)()
              }),
              children: (0, r.jsx)(U, {})
          })
        : null;
}
