"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return w
  },
  default: function() {
    return x
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("442837"),
  o = n("692547"),
  u = n("481060"),
  a = n("549817"),
  c = n("819553"),
  d = n("17181"),
  f = n("303737"),
  S = n("434404"),
  g = n("703656"),
  p = n("944486"),
  E = n("914010"),
  _ = n("671533"),
  h = n("259580"),
  I = n("759231"),
  C = n("358085"),
  T = n("962086"),
  m = n("160404"),
  R = n("889695"),
  N = n("981631"),
  v = n("176505"),
  O = n("302463"),
  A = n("293810"),
  M = n("689938"),
  L = n("794491");

function b(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(u.Button, {
    className: l()(L.button, t),
    innerClassName: L.buttonInner,
    look: u.Button.Looks.OUTLINED,
    color: u.Button.Colors.WHITE,
    size: u.Button.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function P(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(b, {
    onClick: t,
    children: M.default.Messages.DISABLE
  })
}

function x() {
  let e = (0, s.useStateFromStores)([E.default], () => E.default.getGuildId()),
    t = (0, s.useStateFromStores)([p.default], () => p.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: C
    } = (0, s.useStateFromStoresObject)([m.default], () => ({
      viewingRoles: null != e ? m.default.getViewingRoles(e) : null,
      backNavigationSection: m.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && m.default.isFullServerPreview(e),
      isServerShopPreview: null != e && m.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let x = function(e) {
      switch (e) {
        case N.GuildSettingsSections.INTEGRATIONS:
          return M.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case N.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return M.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case N.GuildSettingsSections.ONBOARDING:
          return M.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return M.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    w = i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? M.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : M.default.Messages.VIEWING_AS_ROLES_SELECT,
    D = t === v.StaticChannelRoute.GUILD_ONBOARDING,
    G = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (m.default.isFullServerPreview(e) && (0, g.transitionTo)(N.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, i), i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(u.Notice, {
    color: u.NoticeColors.BRAND,
    className: L.notice,
    children: [(0, r.jsxs)(b, {
      onClick: () => G({
        backToSettings: !0
      }),
      className: L.backButton,
      children: [(0, r.jsx)(_.default, {
        width: 16,
        height: 16,
        direction: _.default.Directions.LEFT,
        className: L.backArrow
      }), x]
    }), D && l ? (0, r.jsx)("div", {
      className: L.noticeContents,
      children: (0, r.jsx)("div", {
        className: L.noticeText,
        children: M.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: L.noticeContents,
      children: [(0, r.jsx)("div", {
        className: L.noticeText,
        children: l ? M.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : M.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(u.Popout, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(R.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(b, {
            onClick: t,
            children: [w, (0, r.jsx)(h.default, {
              width: 16,
              height: 16,
              direction: h.default.Directions.DOWN,
              className: L.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: M.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(I.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), C && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: M.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: A.MAX_SUBSCRIPTION_TIERS,
          maxProducts: O.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(I.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(P, {
      onClick: () => G({
        backToSettings: !1
      })
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e;
  return (0, s.useStateFromStores)([m.default], () => m.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(L.settingsWrapper, {
      [L.windows]: (0, C.isWindows)(),
      [L.osx]: (0, C.isMac)()
    }),
    children: (0, r.jsx)(x, {})
  }) : null
}