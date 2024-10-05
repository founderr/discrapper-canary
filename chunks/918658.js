n.d(t, {
    Z: function () {
        return U;
    },
    d: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    o = n.n(i),
    u = n(442837),
    l = n(692547),
    s = n(481060),
    a = n(549817),
    c = n(819553),
    d = n(17181),
    _ = n(303737),
    E = n(434404),
    f = n(703656),
    I = n(944486),
    S = n(914010),
    T = n(671533),
    C = n(259580),
    p = n(358085),
    N = n(962086),
    O = n(160404),
    g = n(889695),
    m = n(981631),
    R = n(176505),
    h = n(302463),
    A = n(293810),
    M = n(689938),
    L = n(489666);
function P(e) {
    let { className: t, onClick: n, children: i } = e;
    return (0, r.jsx)(s.Button, {
        className: o()(L.button, t),
        innerClassName: L.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function D(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(P, {
        onClick: t,
        children: M.Z.Messages.DISABLE
    });
}
function U() {
    let e = (0, u.e7)([S.Z], () => S.Z.getGuildId()),
        t = (0, u.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: o,
            isServerShopPreview: p
        } = (0, u.cj)([O.Z], () => ({
            viewingRoles: null != e ? O.Z.getViewingRoles(e) : null,
            backNavigationSection: O.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && O.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && O.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let U = (function (e) {
            switch (e) {
                case m.pNK.INTEGRATIONS:
                    return M.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
                case m.pNK.ROLE_SUBSCRIPTIONS:
                    return M.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
                case m.pNK.ONBOARDING:
                    return M.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
                default:
                    return M.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
        })(i),
        v = i === m.pNK.ROLE_SUBSCRIPTIONS ? M.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : M.Z.Messages.VIEWING_AS_ROLES_SELECT,
        b = t === R.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (O.Z.isFullServerPreview(e) && (0, f.uL)(m.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, N.mL)(e), n && E.Z.open(e, i), i === m.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, r.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: L.notice,
        children: [
            (0, r.jsxs)(P, {
                onClick: () => Z({ backToSettings: !0 }),
                className: L.backButton,
                children: [
                    (0, r.jsx)(T.Z, {
                        width: 16,
                        height: 16,
                        direction: T.Z.Directions.LEFT,
                        className: L.backArrow
                    }),
                    U
                ]
            }),
            b && o
                ? (0, r.jsx)('div', {
                      className: L.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: L.noticeText,
                          children: M.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: L.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: L.noticeText,
                              children: o ? M.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(n).length }) : M.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(g.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, r.jsxs)(P, {
                                      onClick: t,
                                      children: [
                                          v,
                                          (0, r.jsx)(C.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: C.Z.Directions.DOWN,
                                              className: L.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          o &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: L.previewWarning,
                                  text: M.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, r.jsx)(s.TooltipContainer, {
                                  className: L.previewWarning,
                                  text: M.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                                      maxTiers: A.fF,
                                      maxProducts: h.dD
                                  }),
                                  children: (0, r.jsx)(s.CircleWarningIcon, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            o || i === m.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, u.e7)([O.Z], () => O.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(L.settingsWrapper, {
                  [L.windows]: (0, p.isWindows)(),
                  [L.osx]: (0, p.isMac)()
              }),
              children: (0, r.jsx)(U, {})
          })
        : null;
}
