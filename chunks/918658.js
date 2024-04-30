"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return D
  },
  default: function() {
    return j
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
  h = n("944486"),
  E = n("914010"),
  _ = n("671533"),
  p = n("259580"),
  m = n("759231"),
  C = n("644766"),
  I = n("358085"),
  T = n("962086"),
  R = n("160404"),
  M = n("889695"),
  N = n("981631"),
  v = n("176505"),
  b = n("302463"),
  O = n("293810"),
  x = n("689938"),
  A = n("604222");

function L(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(u.Button, {
    className: l()(A.button, t),
    innerClassName: A.buttonInner,
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
    children: x.default.Messages.DISABLE
  })
}

function j() {
  let e = (0, s.useStateFromStores)([E.default], () => E.default.getGuildId()),
    t = (0, s.useStateFromStores)([h.default], () => h.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: I
    } = (0, s.useStateFromStoresObject)([R.default], () => ({
      viewingRoles: null != e ? R.default.getViewingRoles(e) : null,
      backNavigationSection: R.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && R.default.isFullServerPreview(e),
      isServerShopPreview: null != e && R.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let j = function(e) {
      switch (e) {
        case N.GuildSettingsSections.INTEGRATIONS:
          return x.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case N.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return x.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case N.GuildSettingsSections.ONBOARDING:
          return x.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return x.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    D = i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? x.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : x.default.Messages.VIEWING_AS_ROLES_SELECT,
    G = t === v.StaticChannelRoute.GUILD_ONBOARDING,
    y = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (R.default.isFullServerPreview(e) && (0, g.transitionTo)(N.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, i), i === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(C.default, {
    color: C.NoticeColors.BRAND,
    className: A.notice,
    children: [(0, r.jsxs)(L, {
      onClick: () => y({
        backToSettings: !0
      }),
      className: A.backButton,
      children: [(0, r.jsx)(_.default, {
        width: 16,
        height: 16,
        direction: _.default.Directions.LEFT,
        className: A.backArrow
      }), j]
    }), G && l ? (0, r.jsx)("div", {
      className: A.noticeContents,
      children: (0, r.jsx)("div", {
        className: A.noticeText,
        children: x.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: A.noticeContents,
      children: [(0, r.jsx)("div", {
        className: A.noticeText,
        children: l ? x.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : x.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(u.Popout, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(M.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(L, {
            onClick: t,
            children: [D, (0, r.jsx)(p.default, {
              width: 16,
              height: 16,
              direction: p.default.Directions.DOWN,
              className: A.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(u.TooltipContainer, {
        className: A.previewWarning,
        text: x.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(m.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), I && (0, r.jsx)(u.TooltipContainer, {
        className: A.previewWarning,
        text: x.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: O.MAX_SUBSCRIPTION_TIERS,
          maxProducts: b.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(m.default, {
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
  return (0, s.useStateFromStores)([R.default], () => R.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(A.settingsWrapper, {
      [A.windows]: (0, I.isWindows)(),
      [A.osx]: (0, I.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}