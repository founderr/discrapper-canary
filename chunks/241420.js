"use strict";
s.r(t), s.d(t, {
  ConnectedPrivacySettings: function() {
    return A
  },
  PrivacySettingSurfaces: function() {
    return i
  },
  PrivacySettings: function() {
    return C
  },
  default: function() {
    return R
  }
}), s("47120");
var i, n, r = s("735250"),
  d = s("470079"),
  a = s("481060"),
  u = s("610697"),
  l = s("695346"),
  c = s("626135"),
  S = s("63063"),
  E = s("88658"),
  _ = s("981631"),
  T = s("703115"),
  o = s("689938"),
  I = s("858686");

function C(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: s,
    isGuildActivityRestricted: i,
    handleActivityRestrictedGuildChange: n,
    isGuildActivityJoiningRestricted: d,
    handleActivityJoiningRestrictedGuildChange: l,
    isGuildMessageRequestRestricted: c,
    handleMessageRequestRestrictedGuildChange: E,
    guild: T
  } = e, C = (0, u.default)(), R = T.hasFeature(_.GuildFeatures.HUB);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.FormItem, {
      children: (0, r.jsx)(a.FormSwitch, {
        value: !t,
        note: R ? o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
        onChange: s,
        hideBorder: !0,
        children: o.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
      })
    }), (0, r.jsx)(a.FormDivider, {
      className: I.divider
    }), !C && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.FormItem, {
        children: (0, r.jsx)(a.FormSwitch, {
          value: !c,
          note: R ? o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
            helpdeskArticle: S.default.getArticleURL(_.HelpdeskArticles.MESSAGE_REQUESTS)
          }) : o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
            helpdeskArticle: S.default.getArticleURL(_.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          onChange: E,
          disabled: t,
          hideBorder: !0,
          children: o.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
        })
      }), (0, r.jsx)(a.FormDivider, {
        className: I.divider
      })]
    }), (0, r.jsx)(a.FormItem, {
      children: (0, r.jsx)(a.FormSwitch, {
        value: !i,
        onChange: n,
        hideBorder: !0,
        note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
          helpdeskArticle: S.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
      })
    }), (0, r.jsx)(a.FormDivider, {
      className: I.divider
    }), (0, r.jsx)(a.FormItem, {
      children: (0, r.jsx)(a.FormSwitch, {
        value: !d,
        onChange: l,
        hideBorder: !0,
        note: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
          helpdeskArticle: S.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: o.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
      })
    }), (0, r.jsxs)(a.FormItem, {
      className: I.disclaimer,
      children: [(0, r.jsx)(a.FormDivider, {
        className: I.divider
      }), (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: o.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
          policyLink: "https://discord.com/safety/360043709612-our-policies"
        })
      })]
    })]
  })
}

function R(e) {
  let {
    guild: t,
    transitionState: s,
    onClose: i
  } = e, n = "".concat(o.default.Messages.PRIVACY_SETTINGS, "—").concat(null != t ? t.toString() : "??");
  return (0, r.jsxs)(a.ModalRoot, {
    transitionState: s,
    size: a.ModalSize.SMALL,
    "aria-label": n,
    children: [(0, r.jsx)(a.ModalHeader, {
      children: (0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: n
      })
    }), (0, r.jsx)(a.ModalContent, {
      className: I.content,
      children: (0, r.jsx)(A, {
        guild: t,
        ingress: "server_privacy_modal"
      })
    }), (0, r.jsx)(a.ModalFooter, {
      children: (0, r.jsx)(a.Button, {
        onClick: () => i(),
        children: o.default.Messages.DONE
      })
    })]
  })
}

function A(e) {
  let {
    guild: t,
    ingress: s = "server_privacy_modal"
  } = e, i = t.id, n = l.RestrictedGuildIds.useSetting().includes(i), a = l.MessageRequestRestrictedGuildIds.useSetting().includes(i), u = l.ActivityRestrictedGuilds.useSetting().includes(i), S = l.ActivityJoiningRestrictedGuilds.useSetting().includes(i), o = d.useCallback(e => {
    let t = new Set((0, E.getSanitizedRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), l.RestrictedGuildIds.updateSetting(Array.from(t)), c.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.UserGuildPrivacySettingsAction.DIRECT_MESSAGES_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), I = d.useCallback(e => {
    let t = new Set((0, E.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), l.ActivityRestrictedGuilds.updateSetting([...t]), c.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), R = d.useCallback(e => {
    let t = new Set((0, E.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), l.ActivityJoiningRestrictedGuilds.updateSetting([...t]), c.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), A = d.useCallback(e => {
    let t = new Set((0, E.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), l.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t)), c.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.UserGuildPrivacySettingsAction.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]);
  return (0, r.jsx)(C, {
    isGuildRestricted: n,
    handleRestrictedGuildChange: o,
    isGuildActivityRestricted: u,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: S,
    handleActivityJoiningRestrictedGuildChange: R,
    isGuildMessageRequestRestricted: a,
    handleMessageRequestRestrictedGuildChange: A,
    guild: t
  })
}(n = i || (i = {})).USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety", n.SERVER_PRIVACY_MODAL = "server_privacy_modal"