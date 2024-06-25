t.d(n, {
  Z: function() {
    return D
  },
  d: function() {
    return b
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
  f = t(434404),
  E = t(703656),
  I = t(944486),
  g = t(914010),
  S = t(671533),
  p = t(259580),
  m = t(358085),
  C = t(962086),
  T = t(160404),
  N = t(889695),
  A = t(981631),
  v = t(176505),
  h = t(302463),
  R = t(293810),
  L = t(689938),
  M = t(583105);

function O(e) {
  let {
    className: n,
    onClick: t,
    children: r
  } = e;
  return (0, i.jsx)(s.Button, {
    className: l()(M.button, n),
    innerClassName: M.buttonInner,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.WHITE,
    size: s.Button.Sizes.NONE,
    onClick: t,
    children: r
  })
}

function Z(e) {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(O, {
    onClick: n,
    children: L.Z.Messages.DISABLE
  })
}

function D() {
  let e = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
    n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
    {
      viewingRoles: t,
      backNavigationSection: r,
      isFullServerPreview: l,
      isServerShopPreview: m
    } = (0, o.cj)([T.Z], () => ({
      viewingRoles: null != e ? T.Z.getViewingRoles(e) : null,
      backNavigationSection: T.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && T.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && T.Z.isViewingServerShop(e)
    }));
  if (null == t || null == e) return null;
  let D = function(e) {
      switch (e) {
        case A.pNK.INTEGRATIONS:
          return L.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case A.pNK.ROLE_SUBSCRIPTIONS:
          return L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case A.pNK.ONBOARDING:
          return L.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return L.Z.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    b = r === A.pNK.ROLE_SUBSCRIPTIONS ? L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.Z.Messages.VIEWING_AS_ROLES_SELECT,
    P = n === v.oC.GUILD_ONBOARDING,
    x = n => {
      let {
        backToSettings: t
      } = n;
      null != e && (T.Z.isFullServerPreview(e) && (0, E.uL)(A.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, C.mL)(e), t && f.Z.open(e, r), r === A.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, i.jsxs)(s.Notice, {
    color: s.NoticeColors.BRAND,
    className: M.notice,
    children: [(0, i.jsxs)(O, {
      onClick: () => x({
        backToSettings: !0
      }),
      className: M.backButton,
      children: [(0, i.jsx)(S.Z, {
        width: 16,
        height: 16,
        direction: S.Z.Directions.LEFT,
        className: M.backArrow
      }), D]
    }), P && l ? (0, i.jsx)("div", {
      className: M.noticeContents,
      children: (0, i.jsx)("div", {
        className: M.noticeText,
        children: L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: M.noticeContents,
      children: [(0, i.jsx)("div", {
        className: M.noticeText,
        children: l ? L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(t).length
        }) : L.Z.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(t).length
        })
      }), (0, i.jsx)(s.Popout, {
        position: "bottom",
        renderPopout: () => (0, i.jsx)(N.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, i.jsxs)(O, {
            onClick: n,
            children: [b, (0, i.jsx)(p.Z, {
              width: 16,
              height: 16,
              direction: p.Z.Directions.DOWN,
              className: M.selectCaret
            })]
          })
        }
      }), l && (0, i.jsx)(s.TooltipContainer, {
        className: M.previewWarning,
        text: L.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), m && (0, i.jsx)(s.TooltipContainer, {
        className: M.previewWarning,
        text: L.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: R.fF,
          maxProducts: h.dD
        }),
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || r === A.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(Z, {
      onClick: () => x({
        backToSettings: !1
      })
    })]
  })
}

function b(e) {
  let {
    guildId: n
  } = e;
  return (0, o.e7)([T.Z], () => T.Z.isViewingRoles(n)) ? (0, i.jsx)("div", {
    className: l()(M.settingsWrapper, {
      [M.windows]: (0, m.isWindows)(),
      [M.osx]: (0, m.isMac)()
    }),
    children: (0, i.jsx)(D, {})
  }) : null
}