"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("171210"),
  d = n("446674"),
  s = n("77078"),
  r = n("298878"),
  u = n("305961"),
  o = n("45029"),
  c = n("599110"),
  _ = n("311340"),
  E = n("701203"),
  f = n("311161"),
  I = n("54346"),
  A = n("421127"),
  R = n("49111"),
  m = n("782340"),
  D = n("373731");

function S(e) {
  let {
    guildId: t,
    transitionState: S,
    onClose: h,
    analyticsData: N
  } = e, T = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), x = !!(null == T ? void 0 : T.hasFeature(R.GuildFeatures.INVITES_DISABLED)), [L] = a.useState(!1), [M, g] = a.useState(A.DEFAULT_LOCKDOWN_DURATION), p = (0, d.useStateFromStores)([I.default], () => I.default.getGuildIncident(t)), v = (0, E.useCanEnableRaidAlerts)(T), C = (0, f.hasInvitesDisabled)(p) || x, G = (0, f.hasDMsDisabled)(p), [b, O] = a.useState(C), [j, y] = a.useState(G), [B, U] = a.useState(!1), k = b !== C || j !== G || B, F = x && !v;
  if (null == T) return h(), null;

  function w() {
    O(e => !e)
  }
  return (0, i.jsxs)(s.ModalRoot, {
    transitionState: S,
    size: s.ModalSize.MEDIUM,
    children: [(0, i.jsx)(s.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: D.headerContainer,
        children: [(0, i.jsx)(o.default, {
          color: l.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, i.jsx)(s.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: m.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, i.jsx)(r.default, {})]
      })
    }), (0, i.jsx)(s.ModalContent, {
      children: (0, i.jsxs)("div", {
        className: D.mainContainer,
        children: [(0, i.jsx)(s.Select, {
          placeholder: m.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, A.getTimeframes)(),
          select: e => {
            g(e), U(!0)
          },
          isSelected: e => e === M,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: D.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: D.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: m.default.Messages.DISABLE_INVITES
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: m.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Tooltip, {
            text: m.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: x,
            children: e => (0, i.jsx)("div", {
              ...e,
              children: (0, i.jsx)(s.Switch, {
                className: D.toggle,
                onChange: w,
                checked: b,
                disabled: F
              })
            })
          })]
        }), (0, i.jsxs)("div", {
          className: D.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: D.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: m.default.Messages.DISABLE_DMS
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: m.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Switch, {
            className: D.toggle,
            onChange: function() {
              y(e => !e)
            },
            checked: j
          })]
        })]
      })
    }), (0, i.jsxs)(s.ModalFooter, {
      children: [(0, i.jsx)(s.Button, {
        onClick: () => {
          (C || G) && !b && !j ? ((0, _.setGuildIncidentActions)(T.id, !1, !1), (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("187317").then(n.bind(n, "187317"));
            return n => (0, i.jsx)(e, {
              ...n,
              guildId: t
            })
          })) : (0, _.setGuildIncidentActions)(T.id, b, j, M);
          let {
            source: e,
            alertType: a,
            messageId: l
          } = N;
          c.default.track(R.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: l,
            raid_alert_type: a,
            intervention_type_enabled: (0, f.getEnabledInterventions)(b, j),
            intervention_type_disabled: (0, f.getDisabledInterventions)(b, j),
            duration: 60 * M
          }), h()
        },
        color: s.Button.Colors.BRAND_NEW,
        look: s.Button.Looks.FILLED,
        submitting: L,
        disabled: !k,
        children: m.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, i.jsx)(s.Button, {
        onClick: h,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        disabled: L,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}