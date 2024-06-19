i.r(t), i.d(t, {
  ConnectedPrivacySettings: function() {
    return R
  },
  PrivacySettingSurfaces: function() {
    return n
  },
  PrivacySettings: function() {
    return C
  },
  default: function() {
    return A
  }
}), i(47120);
var n, r, s = i(735250),
  S = i(470079),
  E = i(481060),
  a = i(610697),
  _ = i(695346),
  d = i(626135),
  l = i(63063),
  c = i(88658),
  T = i(981631),
  u = i(703115),
  o = i(689938),
  I = i(97262);

function C(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: i,
    isGuildActivityRestricted: n,
    handleActivityRestrictedGuildChange: r,
    isGuildActivityJoiningRestricted: S,
    handleActivityJoiningRestrictedGuildChange: _,
    isGuildMessageRequestRestricted: d,
    handleMessageRequestRestrictedGuildChange: c,
    guild: u
  } = e, C = (0, a.Z)(), A = u.hasFeature(T.oNc.HUB);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(E.FormItem, {
      children: (0, s.jsx)(E.FormSwitch, {
        value: !t,
        note: A ? o.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : o.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
        onChange: i,
        hideBorder: !0,
        children: o.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
      })
    }), (0, s.jsx)(E.FormDivider, {
      className: I.divider
    }), !C && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(E.FormItem, {
        children: (0, s.jsx)(E.FormSwitch, {
          value: !d,
          note: A ? o.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
            helpdeskArticle: l.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS)
          }) : o.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
            helpdeskArticle: l.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS)
          }),
          onChange: c,
          disabled: t,
          hideBorder: !0,
          children: o.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
        })
      }), (0, s.jsx)(E.FormDivider, {
        className: I.divider
      })]
    }), (0, s.jsx)(E.FormItem, {
      children: (0, s.jsx)(E.FormSwitch, {
        value: !n,
        onChange: r,
        hideBorder: !0,
        note: o.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
          helpdeskArticle: l.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        children: o.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
      })
    }), (0, s.jsx)(E.FormDivider, {
      className: I.divider
    }), (0, s.jsx)(E.FormItem, {
      children: (0, s.jsx)(E.FormSwitch, {
        value: !S,
        onChange: _,
        hideBorder: !0,
        note: o.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
          helpdeskArticle: l.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS)
        }),
        children: o.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
      })
    }), (0, s.jsxs)(E.FormItem, {
      className: I.disclaimer,
      children: [(0, s.jsx)(E.FormDivider, {
        className: I.divider
      }), (0, s.jsx)(E.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: o.Z.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
          policyLink: "https://discord.com/safety/360043709612-our-policies"
        })
      })]
    })]
  })
}

function A(e) {
  let {
    guild: t,
    transitionState: i,
    onClose: n
  } = e, r = "".concat(o.Z.Messages.PRIVACY_SETTINGS, "—").concat(null != t ? t.toString() : "??");
  return (0, s.jsxs)(E.ModalRoot, {
    transitionState: i,
    size: E.ModalSize.SMALL,
    "aria-label": r,
    children: [(0, s.jsx)(E.ModalHeader, {
      children: (0, s.jsx)(E.Heading, {
        variant: "heading-lg/semibold",
        children: r
      })
    }), (0, s.jsx)(E.ModalContent, {
      className: I.content,
      children: (0, s.jsx)(R, {
        guild: t,
        ingress: "server_privacy_modal"
      })
    }), (0, s.jsx)(E.ModalFooter, {
      children: (0, s.jsx)(E.Button, {
        onClick: () => n(),
        children: o.Z.Messages.DONE
      })
    })]
  })
}

function R(e) {
  let {
    guild: t,
    ingress: i = "server_privacy_modal"
  } = e, n = t.id, r = _.h2.useSetting().includes(n), E = _.zA.useSetting().includes(n), a = _.SE.useSetting().includes(n), l = _.iH.useSetting().includes(n), o = S.useCallback(e => {
    let t = new Set((0, c.YK)());
    e ? t.delete(n) : t.add(n), _.h2.updateSetting(Array.from(t)), d.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: u.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: i,
      guild_id: n
    })
  }, [n, i]), I = S.useCallback(e => {
    let t = new Set((0, c._o)());
    e ? t.delete(n) : t.add(n), _.SE.updateSetting([...t]), d.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: u.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: i,
      guild_id: n
    })
  }, [n, i]), A = S.useCallback(e => {
    let t = new Set((0, c.rr)());
    e ? t.delete(n) : t.add(n), _.iH.updateSetting([...t]), d.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: u.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: i,
      guild_id: n
    })
  }, [n, i]), R = S.useCallback(e => {
    let t = new Set((0, c.gl)());
    e ? t.delete(n) : t.add(n), _.zA.updateSetting(Array.from(t)), d.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: u.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: i,
      guild_id: n
    })
  }, [n, i]);
  return (0, s.jsx)(C, {
    isGuildRestricted: r,
    handleRestrictedGuildChange: o,
    isGuildActivityRestricted: a,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: l,
    handleActivityJoiningRestrictedGuildChange: A,
    isGuildMessageRequestRestricted: E,
    handleMessageRequestRestrictedGuildChange: R,
    guild: t
  })
}(r = n || (n = {})).USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety", r.SERVER_PRIVACY_MODAL = "server_privacy_modal"