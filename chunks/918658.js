"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return D
  },
  default: function() {
    return G
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  l = n.n(r),
  s = n("442837"),
  u = n("692547"),
  o = n("481060"),
  a = n("549817"),
  d = n("819553"),
  c = n("17181"),
  f = n("303737"),
  S = n("434404"),
  E = n("703656"),
  _ = n("944486"),
  g = n("914010"),
  h = n("671533"),
  p = n("259580"),
  C = n("759231"),
  I = n("644766"),
  T = n("358085"),
  m = n("962086"),
  R = n("160404"),
  N = n("889695"),
  v = n("981631"),
  O = n("176505"),
  A = n("302463"),
  L = n("293810"),
  M = n("689938"),
  b = n("935983");

function P(e) {
  let {
    className: t,
    onClick: n,
    children: r
  } = e;
  return (0, i.jsx)(o.Button, {
    className: l()(b.button, t),
    innerClassName: b.buttonInner,
    look: o.Button.Looks.OUTLINED,
    color: o.Button.Colors.WHITE,
    size: o.Button.Sizes.NONE,
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
    children: M.default.Messages.DISABLE
  })
}

function G() {
  let e = (0, s.useStateFromStores)([g.default], () => g.default.getGuildId()),
    t = (0, s.useStateFromStores)([_.default], () => _.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: r,
      isFullServerPreview: l,
      isServerShopPreview: T
    } = (0, s.useStateFromStoresObject)([R.default], () => ({
      viewingRoles: null != e ? R.default.getViewingRoles(e) : null,
      backNavigationSection: R.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && R.default.isFullServerPreview(e),
      isServerShopPreview: null != e && R.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let G = function(e) {
      switch (e) {
        case v.GuildSettingsSections.INTEGRATIONS:
          return M.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case v.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return M.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case v.GuildSettingsSections.ONBOARDING:
          return M.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return M.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    D = r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? M.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : M.default.Messages.VIEWING_AS_ROLES_SELECT,
    F = t === O.StaticChannelRoute.GUILD_ONBOARDING,
    w = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (R.default.isFullServerPreview(e) && (0, E.transitionTo)(v.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, m.stopImpersonating)(e), n && S.default.open(e, r), r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, i.jsxs)(I.default, {
    color: I.NoticeColors.BRAND,
    className: b.notice,
    children: [(0, i.jsxs)(P, {
      onClick: () => w({
        backToSettings: !0
      }),
      className: b.backButton,
      children: [(0, i.jsx)(h.default, {
        width: 16,
        height: 16,
        direction: h.default.Directions.LEFT,
        className: b.backArrow
      }), G]
    }), F && l ? (0, i.jsx)("div", {
      className: b.noticeContents,
      children: (0, i.jsx)("div", {
        className: b.noticeText,
        children: M.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: b.noticeContents,
      children: [(0, i.jsx)("div", {
        className: b.noticeText,
        children: l ? M.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : M.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, i.jsx)(o.Popout, {
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
            children: [D, (0, i.jsx)(p.default, {
              width: 16,
              height: 16,
              direction: p.default.Directions.DOWN,
              className: b.selectCaret
            })]
          })
        }
      }), l && (0, i.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: M.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(C.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      }), T && (0, i.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: M.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: L.MAX_SUBSCRIPTION_TIERS,
          maxProducts: A.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, i.jsx)(C.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(x, {
      onClick: () => w({
        backToSettings: !1
      })
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e;
  return (0, s.useStateFromStores)([R.default], () => R.default.isViewingRoles(t)) ? (0, i.jsx)("div", {
    className: l()(b.settingsWrapper, {
      [b.windows]: (0, T.isWindows)(),
      [b.osx]: (0, T.isMac)()
    }),
    children: (0, i.jsx)(G, {})
  }) : null
}