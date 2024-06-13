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
  h = n("914010"),
  E = n("671533"),
  _ = n("259580"),
  I = n("759231"),
  C = n("358085"),
  m = n("962086"),
  T = n("160404"),
  R = n("889695"),
  v = n("981631"),
  M = n("176505"),
  N = n("302463"),
  O = n("293810"),
  A = n("689938"),
  b = n("794491");

function L(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(u.Button, {
    className: l()(b.button, t),
    innerClassName: b.buttonInner,
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
  return (0, r.jsx)(L, {
    onClick: t,
    children: A.default.Messages.DISABLE
  })
}

function x() {
  let e = (0, s.useStateFromStores)([h.default], () => h.default.getGuildId()),
    t = (0, s.useStateFromStores)([p.default], () => p.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: C
    } = (0, s.useStateFromStoresObject)([T.default], () => ({
      viewingRoles: null != e ? T.default.getViewingRoles(e) : null,
      backNavigationSection: T.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && T.default.isFullServerPreview(e),
      isServerShopPreview: null != e && T.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let x = function(e) {
      switch (e) {
        case v.GuildSettingsSections.INTEGRATIONS:
          return A.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case v.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case v.GuildSettingsSections.ONBOARDING:
          return A.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return A.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    w = i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? A.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : A.default.Messages.VIEWING_AS_ROLES_SELECT,
    D = t === M.StaticChannelRoute.GUILD_ONBOARDING,
    G = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (T.default.isFullServerPreview(e) && (0, g.transitionTo)(v.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, m.stopImpersonating)(e), n && S.default.open(e, i), i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(u.Notice, {
    color: u.NoticeColors.BRAND,
    className: b.notice,
    children: [(0, r.jsxs)(L, {
      onClick: () => G({
        backToSettings: !0
      }),
      className: b.backButton,
      children: [(0, r.jsx)(E.default, {
        width: 16,
        height: 16,
        direction: E.default.Directions.LEFT,
        className: b.backArrow
      }), x]
    }), D && l ? (0, r.jsx)("div", {
      className: b.noticeContents,
      children: (0, r.jsx)("div", {
        className: b.noticeText,
        children: A.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: b.noticeContents,
      children: [(0, r.jsx)("div", {
        className: b.noticeText,
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
          return (0, r.jsxs)(L, {
            onClick: t,
            children: [w, (0, r.jsx)(_.default, {
              width: 16,
              height: 16,
              direction: _.default.Directions.DOWN,
              className: b.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(u.TooltipContainer, {
        className: b.previewWarning,
        text: A.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(I.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), C && (0, r.jsx)(u.TooltipContainer, {
        className: b.previewWarning,
        text: A.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: O.MAX_SUBSCRIPTION_TIERS,
          maxProducts: N.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(I.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(P, {
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
  return (0, s.useStateFromStores)([T.default], () => T.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(b.settingsWrapper, {
      [b.windows]: (0, C.isWindows)(),
      [b.osx]: (0, C.isMac)()
    }),
    children: (0, r.jsx)(x, {})
  }) : null
}