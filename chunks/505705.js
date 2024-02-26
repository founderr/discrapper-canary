"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("97031"),
  r = s("283962"),
  o = s("592407"),
  d = s("900938"),
  u = s("479756"),
  c = s("507950"),
  E = s("393414"),
  _ = s("719887"),
  I = s("697218"),
  T = s("191814"),
  f = s("449008"),
  S = s("257869"),
  m = s("837008"),
  N = s("757715"),
  g = s("432153"),
  h = s("195367"),
  C = s("258984"),
  R = s("417186"),
  x = s("751886"),
  L = s("412939"),
  O = s("451419"),
  p = s("326127"),
  A = s("92447"),
  M = s("514377"),
  D = s("49111"),
  v = s("724210"),
  j = s("810367"),
  G = s("782340"),
  U = s("211426");

function P(e) {
  let {
    application: t,
    guild: s
  } = e, l = (0, m.useSubscriptionsSettings)(s.id), n = (0, m.useSubscriptionListingsForGuild)(s.id), i = n.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), r = n.map(e => null == s ? void 0 : s.roles[e.role_id]), o = r.some(e => null != e && 0 !== e.color), d = n.some(e => e.role_benefits.benefits.length > 0), u = null != t && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED), c = [{
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
      completed: u
    }]
  }, {
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
      completed: !0
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
      completed: (null == l ? void 0 : l.description) != null && "" !== l.description
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
      completed: (null == l ? void 0 : l.cover_image_asset) != null
    }]
  }, {
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
      completed: i
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
      completed: o
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
      completed: d
    }]
  }];
  return (0, a.jsx)(O.default, {
    children: c
  })
}

function b(e) {
  let {
    application: t
  } = e, {
    teams: s
  } = (0, _.default)({
    refreshOnDepChange: !1
  }), l = s.find(e => {
    var s;
    return e.id === (null == t ? void 0 : null === (s = t.team) || void 0 === s ? void 0 : s.id)
  }), n = [j.PayoutAccountStatuses.ACTION_REQUIRED, j.PayoutAccountStatuses.BLOCKED, j.PayoutAccountStatuses.SUSPENDED];
  return (null == l ? void 0 : l.payout_account_status) != null && n.includes(null == l ? void 0 : l.payout_account_status) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T.default, {
      size: 16
    }), (0, a.jsx)(R.default, {
      children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({
        url: D.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(l.id)
      })
    }), (0, a.jsx)(T.default, {
      size: 16
    })]
  }) : null
}

function B(e) {
  let t, {
      guild: s,
      application: n
    } = e,
    i = (0, l.useStateFromStores)([d.default], () => d.default.getProps().subsection),
    o = null != n && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, r.useNewOwnerOnboardingRequired)(s), t = o ? function(e) {
    if (e === D.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI) return A.TabBarSection.EMOJIS;
    return A.TabBarSection.TIERS
  }(i) : A.TabBarSection.PAYMENT, (0, a.jsx)(S.GroupListingsFetchContextProvider, {
    guildId: s.id,
    refetchOnMount: !0,
    children: (0, a.jsx)(N.RoleSubscriptionSettingsDisabledContextProvider, {
      guildId: s.id,
      children: (0, a.jsx)(A.TabBarContextProvider, {
        initialTab: t,
        children: (0, a.jsx)(y, {
          guild: s,
          application: n
        })
      })
    })
  })
}

function y(e) {
  let t, {
      guild: s,
      application: r
    } = e,
    d = null != r && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: _,
      setCurrentTab: T
    } = (0, A.useTabBarState)(),
    m = (0, S.useGroupListingsFetchContext)(),
    N = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
    R = (0, h.default)(s.id),
    O = s.isOwner(N),
    j = () => {
      let e = s.roles[s.getEveryoneRoleId()];
      o.default.close();
      let t = {
        [e.id]: e
      };
      (0, u.startImpersonating)(s.id, {
        type: c.ImpersonateType.SERVER_SHOP,
        roles: t,
        initialTab: "role_subscriptions",
        returnToSection: D.GuildSettingsSections.ROLE_SUBSCRIPTIONS
      }), (0, g.announceCreateTemplateChannels)(s.id), (0, E.transitionTo)(D.Routes.CHANNEL(s.id, v.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    };
  if (!m) return (0, a.jsx)(n.Spinner, {});
  switch (_) {
    case A.TabBarSection.BASIC_INFO:
      t = (0, a.jsx)(L.default, {
        guild: s
      });
      break;
    case A.TabBarSection.TIERS:
      t = (0, a.jsx)(p.default, {
        guildId: s.id
      });
      break;
    case A.TabBarSection.PAYMENT:
      t = (0, a.jsx)(x.default, {
        guild: s
      });
      break;
    case A.TabBarSection.EMOJIS:
      t = (0, a.jsx)(M.default, {
        guild: s
      });
      break;
    default:
      (0, f.assertNever)(_)
  }
  return (0, a.jsxs)("div", {
    className: U.container,
    children: [(0, a.jsxs)("div", {
      className: U.mainContent,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: "h1",
        children: G.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      }), (0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DESCRIPTION
      }), (0, a.jsx)(C.default, {
        guild: s
      }), d && (0, a.jsx)(b, {
        application: r
      }), (0, a.jsxs)("div", {
        className: U.tabBarContainer,
        children: [(0, a.jsxs)(n.TabBar, {
          className: U.tabBar,
          "aria-label": G.default.Messages.OPTIONS,
          selectedItem: _,
          type: "top",
          look: "brand",
          onItemSelect: T,
          children: [(0, a.jsx)(i.default, {
            id: A.TabBarSection.BASIC_INFO,
            disabledTooltip: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO
          }), (0, a.jsx)(i.default, {
            id: A.TabBarSection.TIERS,
            disabledTooltip: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS
          }), (0, a.jsx)(i.default, {
            id: A.TabBarSection.EMOJIS,
            disabledTooltip: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_EMOJI
          }), O ? (0, a.jsx)(n.TabBar.Item, {
            className: U.tabBarItem,
            id: A.TabBarSection.PAYMENT,
            children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT
          }) : null]
        }), d && (0, a.jsx)("div", {
          className: U.previewButton,
          children: (0, a.jsx)(n.Tooltip, {
            text: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW_DISABLED,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: s
              } = e;
              return (0, a.jsx)(n.Button, {
                disabled: R,
                onMouseEnter: R ? t : void 0,
                onMouseLeave: R ? s : void 0,
                onClick: j,
                color: n.Button.Colors.PRIMARY,
                size: n.Button.Sizes.SMALL,
                grow: !R,
                look: n.Button.Looks.OUTLINED,
                className: U.previewButton,
                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
              })
            }
          })
        })]
      }), t]
    }), (0, a.jsx)(P, {
      application: r,
      guild: s
    })]
  })
}