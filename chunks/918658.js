"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return G
  },
  default: function() {
    return D
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  l = n("442837"),
  o = n("692547"),
  u = n("481060"),
  a = n("549817"),
  d = n("819553"),
  c = n("17181"),
  f = n("303737"),
  S = n("434404"),
  _ = n("703656"),
  p = n("944486"),
  E = n("914010"),
  g = n("671533"),
  I = n("259580"),
  h = n("759231"),
  C = n("644766"),
  T = n("358085"),
  m = n("962086"),
  R = n("160404"),
  N = n("889695"),
  v = n("981631"),
  O = n("176505"),
  A = n("302463"),
  M = n("293810"),
  b = n("689938"),
  L = n("794491");

function P(e) {
  let {
    className: t,
    onClick: n,
    children: r
  } = e;
  return (0, i.jsx)(u.Button, {
    className: s()(L.button, t),
    innerClassName: L.buttonInner,
    look: u.Button.Looks.OUTLINED,
    color: u.Button.Colors.WHITE,
    size: u.Button.Sizes.NONE,
    onClick: n,
    children: r
  })
}

function x(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(P, {
    onClick: t,
    children: b.default.Messages.DISABLE
  })
}

function D() {
  let e = (0, l.useStateFromStores)([E.default], () => E.default.getGuildId()),
    t = (0, l.useStateFromStores)([p.default], () => p.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: r,
      isFullServerPreview: s,
      isServerShopPreview: T
    } = (0, l.useStateFromStoresObject)([R.default], () => ({
      viewingRoles: null != e ? R.default.getViewingRoles(e) : null,
      backNavigationSection: R.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && R.default.isFullServerPreview(e),
      isServerShopPreview: null != e && R.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let D = function(e) {
      switch (e) {
        case v.GuildSettingsSections.INTEGRATIONS:
          return b.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case v.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return b.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case v.GuildSettingsSections.ONBOARDING:
          return b.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return b.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    G = r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? b.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : b.default.Messages.VIEWING_AS_ROLES_SELECT,
    w = t === O.StaticChannelRoute.GUILD_ONBOARDING,
    U = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (R.default.isFullServerPreview(e) && (0, _.transitionTo)(v.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, m.stopImpersonating)(e), n && S.default.open(e, r), r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, i.jsxs)(C.default, {
    color: C.NoticeColors.BRAND,
    className: L.notice,
    children: [(0, i.jsxs)(P, {
      onClick: () => U({
        backToSettings: !0
      }),
      className: L.backButton,
      children: [(0, i.jsx)(g.default, {
        width: 16,
        height: 16,
        direction: g.default.Directions.LEFT,
        className: L.backArrow
      }), D]
    }), w && s ? (0, i.jsx)("div", {
      className: L.noticeContents,
      children: (0, i.jsx)("div", {
        className: L.noticeText,
        children: b.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: L.noticeContents,
      children: [(0, i.jsx)("div", {
        className: L.noticeText,
        children: s ? b.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : b.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, i.jsx)(u.Popout, {
        position: "bottom",
        renderPopout: () => (0, i.jsx)(N.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, i.jsxs)(P, {
            onClick: t,
            children: [G, (0, i.jsx)(I.default, {
              width: 16,
              height: 16,
              direction: I.default.Directions.DOWN,
              className: L.selectCaret
            })]
          })
        }
      }), s && (0, i.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: b.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(h.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), T && (0, i.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: b.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: M.MAX_SUBSCRIPTION_TIERS,
          maxProducts: A.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, i.jsx)(h.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), s || r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(x, {
      onClick: () => U({
        backToSettings: !1
      })
    })]
  })
}

function G(e) {
  let {
    guildId: t
  } = e;
  return (0, l.useStateFromStores)([R.default], () => R.default.isViewingRoles(t)) ? (0, i.jsx)("div", {
    className: s()(L.settingsWrapper, {
      [L.windows]: (0, T.isWindows)(),
      [L.osx]: (0, T.isMac)()
    }),
    children: (0, i.jsx)(D, {})
  }) : null
}