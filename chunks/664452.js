"use strict";
a.r(t), a.d(t, {
  default: function() {
    return L
  }
}), a("47120");
var s = a("735250"),
  d = a("470079"),
  l = a("831209"),
  n = a("442837"),
  i = a("481060"),
  o = a("688465"),
  r = a("430824"),
  u = a("630641"),
  c = a("626135"),
  _ = a("369994"),
  E = a("162157"),
  I = a("533244"),
  D = a("487419"),
  A = a("821312"),
  N = a("676770"),
  T = a("981631"),
  h = a("689938"),
  R = a("824149");

function L(e) {
  let {
    guildId: t,
    transitionState: a,
    onClose: L,
    analyticsData: C
  } = e, x = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(t), [t]), S = !!(null == x ? void 0 : x.hasFeature(T.GuildFeatures.INVITES_DISABLED)), [M] = d.useState(!1), [f, O] = d.useState(N.DEFAULT_LOCKDOWN_DURATION), g = (0, n.useStateFromStores)([D.default], () => D.default.getGuildIncident(t)), p = (0, E.useCanEnableRaidAlerts)(x), v = (0, I.hasInvitesDisabled)(g) || S, m = (0, I.hasDMsDisabled)(g), [k, G] = d.useState(v), [j, b] = d.useState(m), [F, y] = d.useState(!1), B = k !== v || j !== m || F, U = S && !p;
  if (null == x) return L(), null;

  function w() {
    G(e => !e)
  }
  return (0, s.jsxs)(i.ModalRoot, {
    transitionState: a,
    size: i.ModalSize.MEDIUM,
    children: [(0, s.jsx)(i.ModalHeader, {
      separator: !0,
      children: (0, s.jsxs)("div", {
        className: R.headerContainer,
        children: [(0, s.jsx)(u.default, {
          color: l.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, s.jsx)(i.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: h.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, s.jsx)(o.default, {})]
      })
    }), (0, s.jsx)(i.ModalContent, {
      children: (0, s.jsxs)("div", {
        className: R.mainContainer,
        children: [(0, s.jsx)(i.Select, {
          placeholder: h.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, N.getTimeframes)(),
          select: e => {
            O(e), y(!0)
          },
          isSelected: e => e === f,
          serialize: e => String(e)
        }), (0, s.jsxs)("div", {
          className: R.pauseContainer,
          children: [(0, s.jsxs)("div", {
            className: R.pauseText,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.default.Messages.DISABLE_INVITES
            }), (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, s.jsx)(i.Tooltip, {
            text: h.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: S,
            children: e => (0, s.jsx)("div", {
              ...e,
              children: (0, s.jsx)(i.Switch, {
                className: R.toggle,
                onChange: w,
                checked: k,
                disabled: U
              })
            })
          })]
        }), (0, s.jsxs)("div", {
          className: R.pauseContainer,
          children: [(0, s.jsxs)("div", {
            className: R.pauseText,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.default.Messages.DISABLE_DMS
            }), (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, s.jsx)(i.Switch, {
            className: R.toggle,
            onChange: function() {
              b(e => !e)
            },
            checked: j
          })]
        })]
      })
    }), (0, s.jsxs)(i.ModalFooter, {
      children: [(0, s.jsx)(i.Button, {
        onClick: () => {
          (v || m) && !k && !j ? ((0, _.setGuildIncidentActions)(x.id, !1, !1), (0, i.openModalLazy)(() => Promise.resolve(e => (0, s.jsx)(A.default, {
            ...e,
            guildId: t
          })))) : (0, _.setGuildIncidentActions)(x.id, k, j, f);
          let {
            source: e,
            alertType: a,
            messageId: d
          } = C;
          c.default.track(T.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: d,
            raid_alert_type: a,
            intervention_type_enabled: (0, I.getEnabledInterventions)(k, j),
            intervention_type_disabled: (0, I.getDisabledInterventions)(k, j),
            duration: 60 * f
          }), L()
        },
        color: i.Button.Colors.BRAND,
        look: i.Button.Looks.FILLED,
        submitting: M,
        disabled: !B,
        children: h.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, s.jsx)(i.Button, {
        onClick: L,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        disabled: M,
        children: h.default.Messages.CANCEL
      })]
    })]
  })
}