"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("831209"),
  i = l("442837"),
  r = l("481060"),
  o = l("688465"),
  d = l("430824"),
  u = l("630641"),
  c = l("626135"),
  f = l("369994"),
  I = l("162157"),
  m = l("533244"),
  T = l("487419"),
  E = l("821312"),
  N = l("676770"),
  _ = l("981631"),
  S = l("689938"),
  h = l("824149");

function g(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: g,
    analyticsData: p
  } = e, O = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]), A = !!(null == O ? void 0 : O.hasFeature(_.GuildFeatures.INVITES_DISABLED)), [C] = a.useState(!1), [x, R] = a.useState(N.DEFAULT_LOCKDOWN_DURATION), M = (0, i.useStateFromStores)([T.default], () => T.default.getGuildIncident(t)), L = (0, I.useCanEnableRaidAlerts)(O), v = (0, m.hasInvitesDisabled)(M) || A, j = (0, m.hasDMsDisabled)(M), [P, b] = a.useState(v), [D, y] = a.useState(j), [G, B] = a.useState(!1), k = P !== v || D !== j || G, U = A && !L;
  if (null == O) return g(), null;

  function H() {
    b(e => !e)
  }
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: l,
    size: r.ModalSize.MEDIUM,
    children: [(0, n.jsx)(r.ModalHeader, {
      separator: !0,
      children: (0, n.jsxs)("div", {
        className: h.headerContainer,
        children: [(0, n.jsx)(u.default, {
          color: s.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, n.jsx)(r.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: S.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, n.jsx)(o.default, {})]
      })
    }), (0, n.jsx)(r.ModalContent, {
      children: (0, n.jsxs)("div", {
        className: h.mainContainer,
        children: [(0, n.jsx)(r.Select, {
          placeholder: S.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, N.getTimeframes)(),
          select: e => {
            R(e), B(!0)
          },
          isSelected: e => e === x,
          serialize: e => String(e)
        }), (0, n.jsxs)("div", {
          className: h.pauseContainer,
          children: [(0, n.jsxs)("div", {
            className: h.pauseText,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_INVITES
            }), (0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, n.jsx)(r.Tooltip, {
            text: S.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: A,
            children: e => (0, n.jsx)("div", {
              ...e,
              children: (0, n.jsx)(r.Switch, {
                className: h.toggle,
                onChange: H,
                checked: P,
                disabled: U
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: h.pauseContainer,
          children: [(0, n.jsxs)("div", {
            className: h.pauseText,
            children: [(0, n.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_DMS
            }), (0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, n.jsx)(r.Switch, {
            className: h.toggle,
            onChange: function() {
              y(e => !e)
            },
            checked: D
          })]
        })]
      })
    }), (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        onClick: () => {
          (v || j) && !P && !D ? ((0, f.setGuildIncidentActions)(O.id, !1, !1), (0, r.openModalLazy)(() => Promise.resolve(e => (0, n.jsx)(E.default, {
            ...e,
            guildId: t
          })))) : (0, f.setGuildIncidentActions)(O.id, P, D, x);
          let {
            source: e,
            alertType: l,
            messageId: a
          } = p;
          c.default.track(_.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: a,
            raid_alert_type: l,
            intervention_type_enabled: (0, m.getEnabledInterventions)(P, D),
            intervention_type_disabled: (0, m.getDisabledInterventions)(P, D),
            duration: 60 * x
          }), g()
        },
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        submitting: C,
        disabled: !k,
        children: S.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, n.jsx)(r.Button, {
        onClick: g,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: C,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}