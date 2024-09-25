n.d(t, {
    Z: function () {
        return P;
    },
    d: function () {
        return U;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    u = n(549817),
    c = n(819553),
    d = n(17181),
    _ = n(303737),
    E = n(434404),
    f = n(703656),
    h = n(944486),
    p = n(914010),
    m = n(671533),
    I = n(259580),
    T = n(358085),
    g = n(962086),
    S = n(160404),
    A = n(889695),
    v = n(981631),
    N = n(176505),
    O = n(302463),
    R = n(293810),
    C = n(689938),
    y = n(489666);
function b(e) {
    let { className: t, onClick: n, children: i } = e;
    return (0, r.jsx)(l.Button, {
        className: a()(y.button, t),
        innerClassName: y.buttonInner,
        look: l.Button.Looks.OUTLINED,
        color: l.Button.Colors.WHITE,
        size: l.Button.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function L(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(b, {
        onClick: t,
        children: C.Z.Messages.DISABLE
    });
}
function D(e) {
    switch (e) {
        case v.pNK.INTEGRATIONS:
            return C.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case v.pNK.ROLE_SUBSCRIPTIONS:
            return C.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case v.pNK.ONBOARDING:
            return C.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
            return C.Z.Messages.VIEWING_AS_ROLES_BACK;
    }
}
function M(e) {
    return e === v.pNK.ROLE_SUBSCRIPTIONS ? C.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : C.Z.Messages.VIEWING_AS_ROLES_SELECT;
}
function P() {
    let e = (0, o.e7)([p.Z], () => p.Z.getGuildId()),
        t = (0, o.e7)([h.Z], () => h.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: a,
            isServerShopPreview: T
        } = (0, o.cj)([S.Z], () => ({
            viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
            backNavigationSection: S.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && S.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let P = D(i),
        U = M(i),
        w = t === N.oC.GUILD_ONBOARDING,
        x = (t) => {
            let { backToSettings: n } = t;
            null != e && (S.Z.isFullServerPreview(e) && (0, f.uL)(v.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (u.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, g.mL)(e), n && E.Z.open(e, i), i === v.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, r.jsxs)(l.Notice, {
        color: l.NoticeColors.BRAND,
        className: y.notice,
        children: [
            (0, r.jsxs)(b, {
                onClick: () => x({ backToSettings: !0 }),
                className: y.backButton,
                children: [
                    (0, r.jsx)(m.Z, {
                        width: 16,
                        height: 16,
                        direction: m.Z.Directions.LEFT,
                        className: y.backArrow
                    }),
                    P
                ]
            }),
            w && a
                ? (0, r.jsx)('div', {
                      className: y.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: y.noticeText,
                          children: C.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: y.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: y.noticeText,
                              children: a ? C.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(n).length }) : C.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(l.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(A.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, r.jsxs)(b, {
                                      onClick: t,
                                      children: [
                                          U,
                                          (0, r.jsx)(I.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: I.Z.Directions.DOWN,
                                              className: y.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          a &&
                              (0, r.jsx)(l.TooltipContainer, {
                                  className: y.previewWarning,
                                  text: C.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                                  children: (0, r.jsx)(l.CircleWarningIcon, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          T &&
                              (0, r.jsx)(l.TooltipContainer, {
                                  className: y.previewWarning,
                                  text: C.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                                      maxTiers: R.fF,
                                      maxProducts: O.dD
                                  }),
                                  children: (0, r.jsx)(l.CircleWarningIcon, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            a || i === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(L, { onClick: () => x({ backToSettings: !1 }) })
        ]
    });
}
function U(e) {
    let { guildId: t } = e;
    return (0, o.e7)([S.Z], () => S.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: a()(y.settingsWrapper, {
                  [y.windows]: (0, T.isWindows)(),
                  [y.osx]: (0, T.isMac)()
              }),
              children: (0, r.jsx)(P, {})
          })
        : null;
}
