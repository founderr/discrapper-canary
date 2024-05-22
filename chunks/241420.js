"use strict";
s.r(t), s.d(t, {
  ConnectedPrivacySettings: function() {
    return N
  },
  PrivacySettingSurfaces: function() {
    return a
  },
  PrivacySettings: function() {
    return g
  },
  default: function() {
    return I
  }
}), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("481060"),
  o = s("610697"),
  d = s("619914"),
  u = s("695346"),
  c = s("626135"),
  S = s("63063"),
  E = s("88658"),
  T = s("981631"),
  _ = s("703115"),
  f = s("689938"),
  m = s("858686");

function g(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: s,
    isGuildActivityRestricted: a,
    handleActivityRestrictedGuildChange: n,
    isGuildActivityJoiningRestricted: i,
    handleActivityJoiningRestrictedGuildChange: u,
    isGuildMessageRequestRestricted: c,
    handleMessageRequestRestrictedGuildChange: E,
    guild: _
  } = e, g = (0, o.default)(), I = _.hasFeature(T.GuildFeatures.HUB), N = (0, d.useUserIsRecentGamesExperimentEnabled)({
    location: "28tk0bf_5",
    autoTrackExposure: !0
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.FormItem, {
      children: (0, l.jsx)(r.FormSwitch, {
        value: !t,
        note: I ? f.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : f.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
        onChange: s,
        hideBorder: !0,
        children: f.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
      })
    }), (0, l.jsx)(r.FormDivider, {
      className: m.divider
    }), !g && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        children: (0, l.jsx)(r.FormSwitch, {
          value: !c,
          note: I ? f.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
            helpdeskArticle: S.default.getArticleURL(T.HelpdeskArticles.MESSAGE_REQUESTS)
          }) : f.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
            helpdeskArticle: S.default.getArticleURL(T.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          onChange: E,
          disabled: t,
          hideBorder: !0,
          children: f.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
        })
      }), (0, l.jsx)(r.FormDivider, {
        className: m.divider
      })]
    }), (0, l.jsx)(r.FormItem, {
      children: (0, l.jsx)(r.FormSwitch, {
        value: !a,
        onChange: n,
        hideBorder: !0,
        note: N ? f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC_V2.format({
          helpdeskArticle: S.default.getArticleURL(T.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }) : f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
          helpdeskArticle: S.default.getArticleURL(T.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: N ? f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_V2 : f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
      })
    }), (0, l.jsx)(r.FormDivider, {
      className: m.divider
    }), (0, l.jsx)(r.FormItem, {
      children: (0, l.jsx)(r.FormSwitch, {
        value: !i,
        onChange: u,
        hideBorder: !0,
        note: f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
          helpdeskArticle: S.default.getArticleURL(T.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: f.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
      })
    }), (0, l.jsxs)(r.FormItem, {
      className: m.disclaimer,
      children: [(0, l.jsx)(r.FormDivider, {
        className: m.divider
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: f.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
          policyLink: "https://discord.com/safety/360043709612-our-policies"
        })
      })]
    })]
  })
}

function I(e) {
  let {
    guild: t,
    transitionState: s,
    onClose: a
  } = e, n = "".concat(f.default.Messages.PRIVACY_SETTINGS, "—").concat(null != t ? t.toString() : "??");
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: s,
    size: r.ModalSize.SMALL,
    "aria-label": n,
    children: [(0, l.jsx)(r.ModalHeader, {
      children: (0, l.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: n
      })
    }), (0, l.jsx)(r.ModalContent, {
      className: m.content,
      children: (0, l.jsx)(N, {
        guild: t,
        ingress: "server_privacy_modal"
      })
    }), (0, l.jsx)(r.ModalFooter, {
      children: (0, l.jsx)(r.Button, {
        onClick: () => a(),
        children: f.default.Messages.DONE
      })
    })]
  })
}

function N(e) {
  let {
    guild: t,
    ingress: s = "server_privacy_modal"
  } = e, a = t.id, n = u.RestrictedGuildIds.useSetting().includes(a), r = u.MessageRequestRestrictedGuildIds.useSetting().includes(a), o = u.ActivityRestrictedGuilds.useSetting().includes(a), d = u.ActivityJoiningRestrictedGuilds.useSetting().includes(a), S = i.useCallback(e => {
    let t = new Set((0, E.getSanitizedRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), u.RestrictedGuildIds.updateSetting(Array.from(t)), c.default.track(T.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: _.UserGuildPrivacySettingsAction.DIRECT_MESSAGES_TOGGLE,
      ingress: s,
      guild_id: a
    })
  }, [a, s]), f = i.useCallback(e => {
    let t = new Set((0, E.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), u.ActivityRestrictedGuilds.updateSetting([...t]), c.default.track(T.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: _.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: s,
      guild_id: a
    })
  }, [a, s]), m = i.useCallback(e => {
    let t = new Set((0, E.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), u.ActivityJoiningRestrictedGuilds.updateSetting([...t]), c.default.track(T.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: _.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: s,
      guild_id: a
    })
  }, [a, s]), I = i.useCallback(e => {
    let t = new Set((0, E.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), u.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t)), c.default.track(T.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: _.UserGuildPrivacySettingsAction.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: s,
      guild_id: a
    })
  }, [a, s]);
  return (0, l.jsx)(g, {
    isGuildRestricted: n,
    handleRestrictedGuildChange: S,
    isGuildActivityRestricted: o,
    handleActivityRestrictedGuildChange: f,
    isGuildActivityJoiningRestricted: d,
    handleActivityJoiningRestrictedGuildChange: m,
    isGuildMessageRequestRestricted: r,
    handleMessageRequestRestrictedGuildChange: I,
    guild: t
  })
}(n = a || (a = {})).USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety", n.SERVER_PRIVACY_MODAL = "server_privacy_modal"