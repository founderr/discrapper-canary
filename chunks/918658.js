t.d(n, {
  Z: function() {
    return Z
  },
  d: function() {
    return x
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
  f = t(303737),
  E = t(434404),
  _ = t(703656),
  I = t(944486),
  S = t(914010),
  g = t(671533),
  p = t(259580),
  T = t(358085),
  h = t(962086),
  C = t(160404),
  m = t(889695),
  N = t(981631),
  R = t(176505),
  O = t(302463),
  M = t(293810),
  v = t(689938),
  A = t(583105);

function b(e) {
  let {
    className: n,
    onClick: t,
    children: i
  } = e;
  return (0, r.jsx)(s.Button, {
    className: l()(A.button, n),
    innerClassName: A.buttonInner,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.WHITE,
    size: s.Button.Sizes.NONE,
    onClick: t,
    children: i
  })
}

function P(e) {
  let {
    onClick: n
  } = e;
  return (0, r.jsx)(b, {
    onClick: n,
    children: v.Z.Messages.DISABLE
  })
}

function Z() {
  let e = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
    n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
    {
      viewingRoles: t,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: T
    } = (0, o.cj)([C.Z], () => ({
      viewingRoles: null != e ? C.Z.getViewingRoles(e) : null,
      backNavigationSection: C.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && C.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && C.Z.isViewingServerShop(e)
    }));
  if (null == t || null == e) return null;
  let Z = function(e) {
      switch (e) {
        case N.pNK.INTEGRATIONS:
          return v.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case N.pNK.ROLE_SUBSCRIPTIONS:
          return v.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case N.pNK.ONBOARDING:
          return v.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return v.Z.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    x = i === N.pNK.ROLE_SUBSCRIPTIONS ? v.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : v.Z.Messages.VIEWING_AS_ROLES_SELECT,
    L = n === R.oC.GUILD_ONBOARDING,
    D = n => {
      let {
        backToSettings: t
      } = n;
      null != e && (C.Z.isFullServerPreview(e) && (0, _.uL)(N.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, h.mL)(e), t && E.Z.open(e, i), i === N.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e))
    };
  return (0, r.jsxs)(s.Notice, {
    color: s.NoticeColors.BRAND,
    className: A.notice,
    children: [(0, r.jsxs)(b, {
      onClick: () => D({
        backToSettings: !0
      }),
      className: A.backButton,
      children: [(0, r.jsx)(g.Z, {
        width: 16,
        height: 16,
        direction: g.Z.Directions.LEFT,
        className: A.backArrow
      }), Z]
    }), L && l ? (0, r.jsx)("div", {
      className: A.noticeContents,
      children: (0, r.jsx)("div", {
        className: A.noticeText,
        children: v.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: A.noticeContents,
      children: [(0, r.jsx)("div", {
        className: A.noticeText,
        children: l ? v.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(t).length
        }) : v.Z.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(t).length
        })
      }), (0, r.jsx)(s.Popout, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(m.Z, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, r.jsxs)(b, {
            onClick: n,
            children: [x, (0, r.jsx)(p.Z, {
              width: 16,
              height: 16,
              direction: p.Z.Directions.DOWN,
              className: A.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(s.TooltipContainer, {
        className: A.previewWarning,
        text: v.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), T && (0, r.jsx)(s.TooltipContainer, {
        className: A.previewWarning,
        text: v.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: M.fF,
          maxProducts: O.dD
        }),
        children: (0, r.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === N.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(P, {
      onClick: () => D({
        backToSettings: !1
      })
    })]
  })
}

function x(e) {
  let {
    guildId: n
  } = e;
  return (0, o.e7)([C.Z], () => C.Z.isViewingRoles(n)) ? (0, r.jsx)("div", {
    className: l()(A.settingsWrapper, {
      [A.windows]: (0, T.isWindows)(),
      [A.osx]: (0, T.isMac)()
    }),
    children: (0, r.jsx)(Z, {})
  }) : null
}