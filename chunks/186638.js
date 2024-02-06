"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  d = n("171210"),
  s = n("446674"),
  i = n("77078"),
  r = n("298878"),
  u = n("305961"),
  o = n("45029"),
  c = n("599110"),
  _ = n("311340"),
  I = n("311161"),
  f = n("54346"),
  E = n("421127"),
  N = n("49111"),
  h = n("782340"),
  D = n("809313");

function g(e) {
  let {
    guildId: t,
    transitionState: g,
    onClose: R,
    analyticsData: A
  } = e, S = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), T = null == S ? void 0 : S.hasFeature(N.GuildFeatures.INVITES_DISABLED), [x] = l.useState(!1), [m, C] = l.useState(E.DEFAULT_LOCKDOWN_DURATION), L = (0, s.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), v = (0, I.hasInvitesDisabled)(L), p = (0, I.hasDMsDisabled)(L), [M, O] = l.useState(v), [G, j] = l.useState(p), [b, B] = l.useState(!1), U = M !== v || G !== p || b;
  if (null == S) return R(), null;

  function y() {
    O(e => !e)
  }
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: g,
    size: i.ModalSize.MEDIUM,
    children: [(0, a.jsx)(i.ModalHeader, {
      separator: !0,
      children: (0, a.jsxs)("div", {
        className: D.headerContainer,
        children: [(0, a.jsx)(o.default, {
          color: d.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, a.jsx)(i.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: h.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, a.jsx)(r.default, {})]
      })
    }), (0, a.jsx)(i.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: D.mainContainer,
        children: [(0, a.jsx)(i.Select, {
          placeholder: h.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, E.getTimeframes)(),
          select: e => {
            C(e), B(!0)
          },
          isSelected: e => e === m,
          serialize: e => String(e)
        }), (0, a.jsxs)("div", {
          className: D.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: D.pauseText,
            children: [(0, a.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.default.Messages.DISABLE_INVITES
            }), (0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(i.Tooltip, {
            text: h.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            children: e => (0, a.jsx)("div", {
              ...e,
              children: (0, a.jsx)(i.Switch, {
                className: D.toggle,
                onChange: y,
                checked: M || T,
                disabled: T
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: D.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: D.pauseText,
            children: [(0, a.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.default.Messages.DISABLE_DMS
            }), (0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(i.Switch, {
            className: D.toggle,
            onChange: function() {
              j(e => !e)
            },
            checked: G
          })]
        })]
      })
    }), (0, a.jsxs)(i.ModalFooter, {
      children: [(0, a.jsx)(i.Button, {
        onClick: () => {
          (v || p) && !M && !G ? ((0, _.setGuildIncidentActions)(S.id, !1, !1), (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("187317").then(n.bind(n, "187317"));
            return n => (0, a.jsx)(e, {
              ...n,
              guildId: t
            })
          })) : (0, _.setGuildIncidentActions)(S.id, M, G, m);
          let {
            source: e,
            alertType: l,
            messageId: d
          } = A;
          c.default.track(N.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: d,
            raid_alert_type: l,
            intervention_type_enabled: (0, I.getEnabledInterventions)(M, G),
            intervention_type_disabled: (0, I.getDisabledInterventions)(M, G),
            duration: 60 * m
          }), R()
        },
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        submitting: x,
        disabled: !U,
        children: h.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, a.jsx)(i.Button, {
        onClick: R,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        disabled: x,
        children: h.default.Messages.CANCEL
      })]
    })]
  })
}