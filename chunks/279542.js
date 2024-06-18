"use strict";
t.d(s, {
  ZP: function() {
    return V
  },
  fp: function() {
    return k
  },
  k0: function() {
    return F
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t(442837),
  c = t(481060),
  d = t(230711),
  u = t(497321),
  E = t(367907),
  _ = t(933557),
  I = t(471445),
  T = t(688465),
  N = t(154285),
  m = t(655006),
  S = t(191471),
  h = t(467319),
  g = t(241559),
  C = t(592125),
  x = t(496675),
  R = t(246946),
  L = t(594174),
  O = t(474333),
  A = t(626135),
  p = t(63063),
  M = t(78451),
  f = t(434404),
  D = t(999382),
  v = t(2150),
  j = t(181339),
  Z = t(193544),
  U = t(717251),
  G = t(981631),
  P = t(689938),
  b = t(55973);

function B(e) {
  let {
    guild: s
  } = e, t = s.canHaveRaidActivityAlerts(), l = (0, o.e7)([x.Z], () => null != s && x.Z.can(G.Plq.MANAGE_GUILD, s), [s]), {
    enableRaidAlerts: a
  } = m.l.useExperiment({
    guildId: s.id,
    location: "1a2662_1"
  }, {
    autoTrackExposure: l
  }), r = (0, h.a)(s.id), d = (0, o.e7)([C.Z], () => C.Z.getChannel(s.safetyAlertsChannelId), [s.safetyAlertsChannelId]), u = (0, _.ZP)(d), N = null != d, g = i.useMemo(() => {
    let e = (null == d ? void 0 : d.type) != null ? (0, I.Th)(d.type) : null;
    return null != e ? e : c.TextIcon
  }, [d]);

  function R() {
    if (!!a)(0, S.K)(s.id)
  }
  return l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormDivider, {
      className: b.divider
    }), (0, n.jsxs)("div", {
      className: b.setupContainer,
      children: [(0, n.jsxs)("div", {
        className: b.switchItemTextContent,
        children: [(0, n.jsxs)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: [P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_TITLE, " ", (0, n.jsx)(T.Z, {
            className: b.betaTag
          })]
        }), (0, n.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_DESCRIPTION
        })]
      }), (0, n.jsx)(U.Z, {
        title: (0, n.jsxs)("div", {
          className: b.settingsRowHeader,
          children: [(0, n.jsx)(c.ShieldUserIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), (0, n.jsx)(c.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: P.Z.Messages.GUILD_ANTIRAID_SAFETY_JOIN_RAIDS_TITLE
          })]
        }),
        highlightColor: v.q.GREEN,
        action: a ? (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          children: t ? P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MANAGE_ACTION : P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_SETUP_ACTION
        }) : (0, n.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/medium",
          children: P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_NO_EXPERIMENT_ACTION
        }),
        onClick: a ? R : void 0,
        subsection: a ? (0, n.jsxs)("div", {
          className: b.settingsRowSubsection,
          children: [(0, n.jsxs)("div", {
            className: b.settingsRowSubsectionItem,
            children: [(0, n.jsx)(c.Text, {
              color: "text-normal",
              variant: "text-xs/semibold",
              children: P.Z.Messages.GUILD_ANTIRAID_SETTING_PROTECTION_LABEL
            }), (0, n.jsx)(c.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: N && t ? P.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED_ALERTS : P.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED
            })]
          }), (0, n.jsx)("div", {
            className: b.settingsRowSubsectionItem,
            children: N && t ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: P.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_LABEL
              }), (0, n.jsxs)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: b.channelContainer,
                children: [(0, n.jsx)(g, {
                  className: b.channelIcon,
                  size: "xxs",
                  color: "currentColor"
                }), " ", u]
              })]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: P.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE_LABEL
              }), (0, n.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: P.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE
              })]
            })
          })]
        }) : null
      }), !N && a ? (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ENABLE_TIP.format({
          onClick: R
        })
      }) : null, r ? (0, n.jsx)(U.Z, {
        title: (0, n.jsxs)("div", {
          className: b.settingsRowHeader,
          children: [(0, n.jsx)(c.ShieldAtIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), (0, n.jsx)(c.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: P.Z.Messages.GUILD_ANTIRAID_SAFETY_MENTION_RAIDS_TITLE
          })]
        }),
        highlightColor: v.q.GREEN,
        action: (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          onClick: function() {
            A.default.track(G.rMx.GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED, {
              ...(0, E.hH)(s.id)
            }), f.Z.setSection(G.pNK.GUILD_AUTOMOD, G.KsC.AUTOMOD_MENTION_SPAM)
          },
          children: (0, n.jsxs)("div", {
            className: b.setupAutomodButton,
            children: [P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_IN_AUTOMOD_ACTION, (0, n.jsx)(c.DoorExitIcon, {
              size: "xs",
              color: "currentColor",
              className: b.setupAutomodIcon
            })]
          })
        })
      }) : null]
    })]
  }) : null
}

function y(e) {
  let {
    guild: s
  } = e, t = (0, o.e7)([x.Z], () => null != s && x.Z.can(G.Plq.MANAGE_GUILD, s), [s]), l = i.useCallback(async e => {
    let {
      value: t
    } = e;
    try {
      await f.Z.saveGuild(s.id, {
        verificationLevel: t
      }), f.Z.updateGuild({
        verificationLevel: t
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE))
    }
  }, [s]), a = i.useMemo(() => {
    let e = (0, M.IF)(null == s ? void 0 : s.hasFeature(G.oNc.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, M.LJ)(e)
  }, [s]), r = i.useMemo(() => a.find(e => e.value === (null == s ? void 0 : s.verificationLevel)), [s, a]);
  return (0, n.jsxs)("div", {
    className: b.setupContainer,
    children: [(0, n.jsxs)("div", {
      className: b.switchItemTextContent,
      children: [(0, n.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: P.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, n.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: P.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      })]
    }), (0, n.jsx)(Z.Z, {
      changeTitle: P.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
      value: null == r ? void 0 : r.value,
      options: a,
      disabled: !t,
      onChange: l
    })]
  })
}

function F(e) {
  let {
    guild: s,
    className: t,
    withDivider: l = !0
  } = e, r = (0, o.e7)([x.Z], () => null != s && x.Z.can(G.Plq.MANAGE_GUILD, s), [s]), d = i.useCallback(async e => {
    let {
      value: t
    } = e;
    try {
      await f.Z.saveGuild(s.id, {
        explicitContentFilter: t
      }), f.Z.updateGuild({
        explicitContentFilter: t
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(P.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE))
    }
  }, [s.id]), u = i.useMemo(() => {
    let e = (0, M.MF)(null == s ? void 0 : s.hasFeature(G.oNc.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, M.LJ)(e)
  }, [s]), E = i.useMemo(() => u.find(e => e.value === (null == s ? void 0 : s.explicitContentFilter)), [s, u]);
  return (0, n.jsxs)(n.Fragment, {
    children: [l && (0, n.jsx)(c.FormDivider, {
      className: b.divider
    }), (0, n.jsxs)("div", {
      className: a()(b.setupContainer, t),
      children: [(0, n.jsxs)("div", {
        className: b.switchItemTextContent,
        children: [(0, n.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: P.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
        }), (0, n.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: P.Z.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
            helpdeskArticle: p.Z.getArticleURL(G.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, n.jsx)(Z.Z, {
        changeTitle: P.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
        value: null == E ? void 0 : E.value,
        options: u,
        disabled: !r,
        onChange: d
      })]
    })]
  })
}
async function k(e, s) {
  if (e.hasFeature(G.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === s) return;
  let t = e.features;
  return s ? t.add(G.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : t.delete(G.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await f.Z.saveGuild(e.id, {
    features: t
  })
}

function H(e) {
  let {
    guild: s
  } = e, t = (0, o.e7)([x.Z], () => null != s && x.Z.can(G.Plq.MANAGE_GUILD, s), [s]), l = s.hasFeature(G.oNc.COMMUNITY), a = (0, g.n2)(s.id), [r, d] = i.useState(s.hasFeature(G.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = i.useCallback(async e => {
    d(e), await k(s, e)
  }, [s]);
  return l || !a ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: b.setupContainer,
      children: [(0, n.jsx)(c.FormSwitch, {
        value: r,
        onChange: u,
        className: b.switchItem,
        disabled: !t,
        hideBorder: !0,
        children: (0, n.jsxs)("div", {
          className: b.switchItemTextContent,
          children: [(0, n.jsxs)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [P.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE, (0, n.jsx)(T.Z, {
              className: b.betaTag
            })]
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: P.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
          })]
        })
      }), (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: P.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
      })]
    }), (0, n.jsx)(c.FormDivider, {
      className: b.divider
    })]
  })
}

function w(e) {
  let {
    guild: s,
    mfaLevel: t
  } = e, l = (0, o.e7)([x.Z], () => null != s && x.Z.can(G.Plq.MANAGE_GUILD, s), [s]), a = (0, o.e7)([L.default], () => L.default.getCurrentUser()), {
    isGuildOwnerWithMFA: u,
    showMFAUserTooltip: E
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: !1,
    showMFAUserTooltip: !1
  } : {
    isGuildOwnerWithMFA: s.isOwnerWithRequiredMfaLevel(a),
    showMFAUserTooltip: !a.mfaEnabled && s.isOwner(a)
  }, [a, s]), _ = t === G.BpS.ELEVATED, I = (0, r.throttle)(async e => {
    if (!!u && !E) await f.Z.updateMFALevel({
      guildId: s.id,
      level: e ? G.BpS.ELEVATED : G.BpS.NONE,
      isEnabled: !e
    })
  }, 1e3);
  return l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormDivider, {
      className: b.divider
    }), (0, n.jsxs)("div", {
      className: b.setupContainer,
      children: [(0, n.jsx)(c.FormSwitch, {
        value: _,
        onChange: I,
        className: b.switchItem,
        disabled: !u,
        hideBorder: !0,
        children: (0, n.jsxs)("div", {
          className: b.switchItemTextContent,
          children: [(0, n.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: P.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: P.Z.Messages.GUILD_SETTINGS_REQ_MFA_BODY
          })]
        })
      }), E && (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: P.Z.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
          onClick: function() {
            d.Z.open(G.oAB.ACCOUNT)
          }
        })
      })]
    })]
  }) : null
}

function V() {
  var e;
  let {
    guild: s,
    mfaLevel: t
  } = (0, o.cj)([D.Z], () => D.Z.getProps(), []), i = (0, o.e7)([R.Z], () => R.Z.enabled, []), {
    showAlertMode: l
  } = (0, N.sw)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : G.lds);
  return null == s ? null : i ? (0, n.jsx)(u.Z, {}) : (0, n.jsxs)(c.FormSection, {
    title: P.Z.Messages.SAFETY_SETUP,
    tag: c.FormTitleTags.H1,
    titleClassName: b.headerContainer,
    children: [(0, n.jsx)(H, {
      guild: s
    }), (0, n.jsx)(y, {
      guild: s
    }), (0, n.jsx)(w, {
      guild: s,
      mfaLevel: t
    }), (0, n.jsx)(F, {
      guild: s
    }), l ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.FormDivider, {
        className: b.divider
      }), (0, n.jsx)("div", {
        className: a()(b.setupContainer),
        children: (0, n.jsx)(j.w, {
          guild: s
        })
      })]
    }) : (0, n.jsx)(B, {
      guild: s
    })]
  })
}