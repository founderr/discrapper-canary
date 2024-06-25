t.d(n, {
  Z: function() {
    return Z
  },
  d: function() {
    return D
  }
});
var i = t(735250);
t(470079);
var r = t(120356),
  o = t.n(r),
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
  g = t(914010),
  p = t(671533),
  m = t(259580),
  S = t(358085),
  C = t(962086),
  T = t(160404),
  N = t(889695),
  h = t(981631),
  v = t(176505),
  A = t(302463),
  R = t(293810),
  b = t(689938),
  M = t(583105);

function L(e) {
  let {
    className: n,
    onClick: t,
    children: r
  } = e;
  return (0, i.jsx)(s.Button, {
    className: o()(M.button, n),
    innerClassName: M.buttonInner,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.WHITE,
    size: s.Button.Sizes.NONE,
    onClick: t,
    children: r
  })
}

function O(e) {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(L, {
    onClick: n,
    children: b.Z.Messages.DISABLE
  })
}

function Z() {
  let e = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
    n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
    {
      viewingRoles: t,
      backNavigationSection: r,
      isFullServerPreview: o,
      isServerShopPreview: S
    } = (0, l.cj)([T.Z], () => ({
      viewingRoles: null != e ? T.Z.getViewingRoles(e) : null,
      backNavigationSection: T.Z.getBackNavigationSection(e),
      isFullServerPreview: null != e && T.Z.isFullServerPreview(e),
      isServerShopPreview: null != e && T.Z.isViewingServerShop(e)
    }));
  if (null == t || null == e) return null;
  let Z = function(e) {
      switch (e) {
        case h.pNK.INTEGRATIONS:
          return b.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case h.pNK.ROLE_SUBSCRIPTIONS:
          return b.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case h.pNK.ONBOARDING:
          return b.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return b.Z.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    D = r === h.pNK.ROLE_SUBSCRIPTIONS ? b.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : b.Z.Messages.VIEWING_AS_ROLES_SELECT,
    x = n === v.oC.GUILD_ONBOARDING,
    P = n => {
      let {
        backToSettings: t
      } = n;
      null != e && (T.Z.isFullServerPreview(e) && (0, E.uL)(h.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, C.mL)(e), t && f.Z.open(e, r), r === h.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e))
    };
  return (0, i.jsxs)(s.Notice, {
    color: s.NoticeColors.BRAND,
    className: M.notice,
    children: [(0, i.jsxs)(L, {
      onClick: () => P({
        backToSettings: !0
      }),
      className: M.backButton,
      children: [(0, i.jsx)(p.Z, {
        width: 16,
        height: 16,
        direction: p.Z.Directions.LEFT,
        className: M.backArrow
      }), Z]
    }), x && o ? (0, i.jsx)("div", {
      className: M.noticeContents,
      children: (0, i.jsx)("div", {
        className: M.noticeText,
        children: b.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: M.noticeContents,
      children: [(0, i.jsx)("div", {
        className: M.noticeText,
        children: o ? b.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(t).length
        }) : b.Z.Messages.VIEWING_AS_ROLES.format({
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
          return (0, i.jsxs)(L, {
            onClick: n,
            children: [D, (0, i.jsx)(m.Z, {
              width: 16,
              height: 16,
              direction: m.Z.Directions.DOWN,
              className: M.selectCaret
            })]
          })
        }
      }), o && (0, i.jsx)(s.TooltipContainer, {
        className: M.previewWarning,
        text: b.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), S && (0, i.jsx)(s.TooltipContainer, {
        className: M.previewWarning,
        text: b.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: R.fF,
          maxProducts: A.dD
        }),
        children: (0, i.jsx)(s.CircleExclamationPointIcon, {
          size: "xs",
          color: u.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), o || r === h.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(O, {
      onClick: () => P({
        backToSettings: !1
      })
    })]
  })
}

function D(e) {
  let {
    guildId: n
  } = e;
  return (0, l.e7)([T.Z], () => T.Z.isViewingRoles(n)) ? (0, i.jsx)("div", {
    className: o()(M.settingsWrapper, {
      [M.windows]: (0, S.isWindows)(),
      [M.osx]: (0, S.isMac)()
    }),
    children: (0, i.jsx)(Z, {})
  }) : null
}