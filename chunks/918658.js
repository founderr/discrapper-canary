"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return G
  },
  default: function() {
    return D
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  s = n.n(i),
  l = n("442837"),
  u = n("692547"),
  o = n("481060"),
  a = n("549817"),
  d = n("819553"),
  c = n("17181"),
  f = n("303737"),
  S = n("434404"),
  _ = n("703656"),
  E = n("944486"),
  g = n("914010"),
  h = n("671533"),
  I = n("259580"),
  p = n("759231"),
  T = n("644766"),
  C = n("358085"),
  m = n("962086"),
  R = n("160404"),
  N = n("889695"),
  O = n("981631"),
  v = n("176505"),
  M = n("302463"),
  A = n("293810"),
  L = n("689938"),
  b = n("794491");

function P(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(o.Button, {
    className: s()(b.button, t),
    innerClassName: b.buttonInner,
    look: o.Button.Looks.OUTLINED,
    color: o.Button.Colors.WHITE,
    size: o.Button.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function x(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(P, {
    onClick: t,
    children: L.default.Messages.DISABLE
  })
}

function D() {
  let e = (0, l.useStateFromStores)([g.default], () => g.default.getGuildId()),
    t = (0, l.useStateFromStores)([E.default], () => E.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: s,
      isServerShopPreview: C
    } = (0, l.useStateFromStoresObject)([R.default], () => ({
      viewingRoles: null != e ? R.default.getViewingRoles(e) : null,
      backNavigationSection: R.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && R.default.isFullServerPreview(e),
      isServerShopPreview: null != e && R.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let D = function(e) {
      switch (e) {
        case O.GuildSettingsSections.INTEGRATIONS:
          return L.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case O.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case O.GuildSettingsSections.ONBOARDING:
          return L.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return L.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    G = i === O.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.default.Messages.VIEWING_AS_ROLES_SELECT,
    w = t === v.StaticChannelRoute.GUILD_ONBOARDING,
    U = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (R.default.isFullServerPreview(e) && (0, _.transitionTo)(O.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, m.stopImpersonating)(e), n && S.default.open(e, i), i === O.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(T.default, {
    color: T.NoticeColors.BRAND,
    className: b.notice,
    children: [(0, r.jsxs)(P, {
      onClick: () => U({
        backToSettings: !0
      }),
      className: b.backButton,
      children: [(0, r.jsx)(h.default, {
        width: 16,
        height: 16,
        direction: h.default.Directions.LEFT,
        className: b.backArrow
      }), D]
    }), w && s ? (0, r.jsx)("div", {
      className: b.noticeContents,
      children: (0, r.jsx)("div", {
        className: b.noticeText,
        children: L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: b.noticeContents,
      children: [(0, r.jsx)("div", {
        className: b.noticeText,
        children: s ? L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : L.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(o.Popout, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(N.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(P, {
            onClick: t,
            children: [G, (0, r.jsx)(I.default, {
              width: 16,
              height: 16,
              direction: I.default.Directions.DOWN,
              className: b.selectCaret
            })]
          })
        }
      }), s && (0, r.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: L.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(p.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      }), C && (0, r.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: L.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: A.MAX_SUBSCRIPTION_TIERS,
          maxProducts: M.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(p.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), s || i === O.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(x, {
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
  return (0, l.useStateFromStores)([R.default], () => R.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: s()(b.settingsWrapper, {
      [b.windows]: (0, C.isWindows)(),
      [b.osx]: (0, C.isMac)()
    }),
    children: (0, r.jsx)(D, {})
  }) : null
}