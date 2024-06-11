"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("204875"),
  r = s("715796"),
  o = s("434404"),
  d = s("999382"),
  u = s("962086"),
  c = s("225675"),
  E = s("703656"),
  _ = s("577275"),
  I = s("430824"),
  T = s("594174"),
  S = s("823379"),
  f = s("730647"),
  m = s("584825"),
  N = s("723047"),
  g = s("303737"),
  h = s("568074"),
  C = s("411667"),
  R = s("903773"),
  x = s("822531"),
  L = s("909656"),
  O = s("210591"),
  p = s("927731"),
  A = s("798680"),
  M = s("509026"),
  D = s("981631"),
  v = s("176505"),
  j = s("829857"),
  G = s("689938"),
  U = s("213079");

function P(e) {
  let {
    application: t,
    guild: s
  } = e, n = (0, m.useSubscriptionsSettings)(s.id), i = (0, m.useSubscriptionListingsForGuild)(s.id), r = i.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, l.useStateFromStores)([I.default], () => I.default.getRoles(s.id)), d = i.map(e => o[e.role_id]).some(e => null != e && 0 !== e.color), u = i.some(e => e.role_benefits.benefits.length > 0), c = null != t && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED), E = [{
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
      completed: c
    }]
  }, {
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
      completed: !0
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
      completed: (null == n ? void 0 : n.description) != null && "" !== n.description
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
      completed: (null == n ? void 0 : n.cover_image_asset) != null
    }]
  }, {
    title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
    items: [{
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
      completed: r
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
      completed: d
    }, {
      description: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
      completed: u
    }]
  }];
  return (0, a.jsx)(O.default, {
    children: E
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
  }), i = [j.PayoutAccountStatuses.ACTION_REQUIRED, j.PayoutAccountStatuses.BLOCKED, j.PayoutAccountStatuses.SUSPENDED];
  return (null == l ? void 0 : l.payout_account_status) != null && i.includes(null == l ? void 0 : l.payout_account_status) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Spacer, {
      size: 16
    }), (0, a.jsx)(R.default, {
      children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({
        url: D.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(l.id)
      })
    }), (0, a.jsx)(n.Spacer, {
      size: 16
    })]
  }) : null
}

function y(e) {
  let t, {
      guild: s,
      application: n
    } = e,
    i = (0, l.useStateFromStores)([d.default], () => d.default.getProps().subsection),
    o = null != n && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, r.useNewOwnerOnboardingRequired)(s), t = o ? function(e) {
    if (e === D.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI) return A.TabBarSection.EMOJIS;
    return A.TabBarSection.TIERS
  }(i) : A.TabBarSection.PAYMENT, (0, a.jsx)(f.GroupListingsFetchContextProvider, {
    guildId: s.id,
    refetchOnMount: !0,
    children: (0, a.jsx)(N.RoleSubscriptionSettingsDisabledContextProvider, {
      guildId: s.id,
      children: (0, a.jsx)(A.TabBarContextProvider, {
        initialTab: t,
        children: (0, a.jsx)(B, {
          guild: s,
          application: n
        })
      })
    })
  })
}

function B(e) {
  let t, {
      guild: s,
      application: r
    } = e,
    d = null != r && s.hasFeature(D.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: _,
      setCurrentTab: m
    } = (0, A.useTabBarState)(),
    N = (0, f.useGroupListingsFetchContext)(),
    R = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    O = (0, h.default)(s.id),
    j = s.isOwner(R),
    y = () => {
      let e = I.default.getRole(s.id, s.getEveryoneRoleId());
      if (null == e) return;
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
  if (!N) return (0, a.jsx)(n.Spinner, {});
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
      (0, S.assertNever)(_)
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
          onItemSelect: m,
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
          }), j ? (0, a.jsx)(n.TabBar.Item, {
            className: U.__invalid_tabBarItem,
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
                disabled: O,
                onMouseEnter: O ? t : void 0,
                onMouseLeave: O ? s : void 0,
                onClick: y,
                color: n.Button.Colors.PRIMARY,
                size: n.Button.Sizes.SMALL,
                grow: !O,
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