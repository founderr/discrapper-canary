"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return D
  },
  default: function() {
    return w
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
  p = n("703656"),
  g = n("944486"),
  h = n("914010"),
  E = n("671533"),
  _ = n("259580"),
  C = n("759231"),
  I = n("644766"),
  m = n("358085"),
  T = n("962086"),
  v = n("160404"),
  R = n("889695"),
  N = n("981631"),
  O = n("176505"),
  b = n("302463"),
  M = n("293810"),
  A = n("689938"),
  L = n("794491");

function x(e) {
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
  return (0, r.jsx)(x, {
    onClick: t,
    children: A.default.Messages.DISABLE
  })
}

function w() {
  let e = (0, s.useStateFromStores)([h.default], () => h.default.getGuildId()),
    t = (0, s.useStateFromStores)([g.default], () => g.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: m
    } = (0, s.useStateFromStoresObject)([v.default], () => ({
      viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
      backNavigationSection: v.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && v.default.isFullServerPreview(e),
      isServerShopPreview: null != e && v.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let w = function(e) {
      switch (e) {
        case N.GuildSettingsSections.INTEGRATIONS:
          return A.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case N.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case N.GuildSettingsSections.ONBOARDING:
          return A.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return A.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    D = i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : A.default.Messages.VIEWING_AS_ROLES_SELECT,
    G = t === O.StaticChannelRoute.GUILD_ONBOARDING,
    y = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (v.default.isFullServerPreview(e) && (0, p.transitionTo)(N.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, i), i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(I.default, {
    color: I.NoticeColors.BRAND,
    className: L.notice,
    children: [(0, r.jsxs)(x, {
      onClick: () => y({
        backToSettings: !0
      }),
      className: L.backButton,
      children: [(0, r.jsx)(E.default, {
        width: 16,
        height: 16,
        direction: E.default.Directions.LEFT,
        className: L.backArrow
      }), w]
    }), G && l ? (0, r.jsx)("div", {
      className: L.noticeContents,
      children: (0, r.jsx)("div", {
        className: L.noticeText,
        children: A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: L.noticeContents,
      children: [(0, r.jsx)("div", {
        className: L.noticeText,
        children: l ? A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : A.default.Messages.VIEWING_AS_ROLES.format({
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
          return (0, r.jsxs)(x, {
            onClick: t,
            children: [D, (0, r.jsx)(_.default, {
              width: 16,
              height: 16,
              direction: _.default.Directions.DOWN,
              className: L.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: A.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(C.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), m && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: A.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: M.MAX_SUBSCRIPTION_TIERS,
          maxProducts: b.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(C.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(P, {
      onClick: () => y({
        backToSettings: !1
      })
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e;
  return (0, s.useStateFromStores)([v.default], () => v.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(L.settingsWrapper, {
      [L.windows]: (0, m.isWindows)(),
      [L.osx]: (0, m.isMac)()
    }),
    children: (0, r.jsx)(w, {})
  }) : null
}