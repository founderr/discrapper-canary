t.r(s), t.d(s, {
  ConnectedPrivacySettings: function() {
    return O
  },
  PrivacySettingSurfaces: function() {
    return n
  },
  PrivacySettings: function() {
    return A
  },
  default: function() {
    return C
  }
}), t(47120);
var n, i, a = t(735250),
  l = t(470079),
  r = t(481060),
  o = t(921801),
  c = t(695346),
  E = t(626135),
  d = t(63063),
  _ = t(88658),
  T = t(981631),
  S = t(703115),
  u = t(726985),
  I = t(689938),
  N = t(97262);

function A(e) {
  let {
    isGuildRestricted: s,
    handleRestrictedGuildChange: t,
    isGuildActivityRestricted: n,
    handleActivityRestrictedGuildChange: i,
    isGuildActivityJoiningRestricted: l,
    handleActivityJoiningRestrictedGuildChange: c,
    isGuildMessageRequestRestricted: E,
    handleMessageRequestRestrictedGuildChange: _,
    guild: S
  } = e, A = S.hasFeature(T.oNc.HUB);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.F, {
      setting: u.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS,
      children: [(0, a.jsx)(r.FormItem, {
        children: (0, a.jsx)(r.FormSwitch, {
          value: !s,
          note: A ? I.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : I.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: t,
          hideBorder: !0,
          children: I.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: N.divider
      })]
    }), (0, a.jsx)(o.F, {
      setting: u.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS,
      children: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.FormItem, {
          children: (0, a.jsx)(r.FormSwitch, {
            value: !E,
            note: A ? I.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS)
            }) : I.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS)
            }),
            onChange: _,
            disabled: s,
            hideBorder: !0,
            children: I.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(r.FormDivider, {
          className: N.divider
        })]
      })
    }), (0, a.jsx)(o.F, {
      setting: u.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS,
      children: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.FormItem, {
          children: (0, a.jsx)(r.FormSwitch, {
            value: !n,
            onChange: i,
            hideBorder: !0,
            note: I.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
              helpdeskArticle: d.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS)
            }),
            children: I.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
          })
        }), (0, a.jsx)(r.FormDivider, {
          className: N.divider
        })]
      })
    }), (0, a.jsxs)(o.F, {
      setting: u.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING,
      children: [(0, a.jsx)(r.FormItem, {
        children: (0, a.jsx)(r.FormSwitch, {
          value: !l,
          onChange: c,
          hideBorder: !0,
          note: I.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: d.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS)
          }),
          children: I.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: N.divider
      })]
    }), (0, a.jsx)(r.FormItem, {
      className: N.disclaimer,
      children: (0, a.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.Z.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
          policyLink: "https://discord.com/safety/360043709612-our-policies"
        })
      })
    })]
  })
}

function C(e) {
  let {
    guild: s,
    transitionState: t,
    onClose: n
  } = e, i = "".concat(I.Z.Messages.PRIVACY_SETTINGS, "—").concat(null != s ? s.toString() : "??");
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    size: r.ModalSize.SMALL,
    "aria-label": i,
    children: [(0, a.jsx)(r.ModalHeader, {
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: i
      })
    }), (0, a.jsx)(r.ModalContent, {
      className: N.content,
      children: (0, a.jsx)(O, {
        guild: s,
        ingress: "server_privacy_modal"
      })
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)(r.Button, {
        onClick: () => n(),
        children: I.Z.Messages.DONE
      })
    })]
  })
}

function O(e) {
  let {
    guild: s,
    ingress: t = "server_privacy_modal"
  } = e, n = s.id, i = c.h2.useSetting().includes(n), r = c.zA.useSetting().includes(n), o = c.SE.useSetting().includes(n), d = c.iH.useSetting().includes(n), u = l.useCallback(e => {
    let s = new Set((0, _.YK)());
    e ? s.delete(n) : s.add(n), c.h2.updateSetting(Array.from(s)), E.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: S.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]), I = l.useCallback(e => {
    let s = new Set((0, _._o)());
    e ? s.delete(n) : s.add(n), c.SE.updateSetting([...s]), E.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: S.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]), N = l.useCallback(e => {
    let s = new Set((0, _.rr)());
    e ? s.delete(n) : s.add(n), c.iH.updateSetting([...s]), E.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: S.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]), C = l.useCallback(e => {
    let s = new Set((0, _.gl)());
    e ? s.delete(n) : s.add(n), c.zA.updateSetting(Array.from(s)), E.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: S.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);
  return (0, a.jsx)(A, {
    isGuildRestricted: i,
    handleRestrictedGuildChange: u,
    isGuildActivityRestricted: o,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: d,
    handleActivityJoiningRestrictedGuildChange: N,
    isGuildMessageRequestRestricted: r,
    handleMessageRequestRestrictedGuildChange: C,
    guild: s
  })
}(i = n || (n = {})).USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety", i.SERVER_PRIVACY_MODAL = "server_privacy_modal"