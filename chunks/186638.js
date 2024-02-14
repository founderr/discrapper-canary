"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  i = n("884691"),
  l = n("171210"),
  r = n("446674"),
  d = n("77078"),
  s = n("298878"),
  u = n("305961"),
  o = n("45029"),
  c = n("599110"),
  f = n("311340"),
  _ = n("701203"),
  E = n("311161"),
  I = n("54346"),
  R = n("421127"),
  A = n("49111"),
  m = n("782340"),
  N = n("809313");

function g(e) {
  let {
    guildId: t,
    transitionState: g,
    onClose: h,
    analyticsData: D
  } = e, S = (0, r.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), T = !!(null == S ? void 0 : S.hasFeature(A.GuildFeatures.INVITES_DISABLED)), [x] = i.useState(!1), [v, L] = i.useState(R.DEFAULT_LOCKDOWN_DURATION), M = (0, r.useStateFromStores)([I.default], () => I.default.getGuildIncident(t)), p = (0, _.useCanEnableRaidAlerts)(S), C = (0, E.hasInvitesDisabled)(M) || T, G = (0, E.hasDMsDisabled)(M), [b, O] = i.useState(C), [B, j] = i.useState(G), [U, y] = i.useState(!1), k = b !== C || B !== G || U, F = T && !p;
  if (null == S) return h(), null;

  function w() {
    O(e => !e)
  }
  return (0, a.jsxs)(d.ModalRoot, {
    transitionState: g,
    size: d.ModalSize.MEDIUM,
    children: [(0, a.jsx)(d.ModalHeader, {
      separator: !0,
      children: (0, a.jsxs)("div", {
        className: N.headerContainer,
        children: [(0, a.jsx)(o.default, {
          color: l.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, a.jsx)(d.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: m.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, a.jsx)(s.default, {})]
      })
    }), (0, a.jsx)(d.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: N.mainContainer,
        children: [(0, a.jsx)(d.Select, {
          placeholder: m.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, R.getTimeframes)(),
          select: e => {
            L(e), y(!0)
          },
          isSelected: e => e === v,
          serialize: e => String(e)
        }), (0, a.jsxs)("div", {
          className: N.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: N.pauseText,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: m.default.Messages.DISABLE_INVITES
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: m.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(d.Tooltip, {
            text: m.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: T,
            children: e => (0, a.jsx)("div", {
              ...e,
              children: (0, a.jsx)(d.Switch, {
                className: N.toggle,
                onChange: w,
                checked: b,
                disabled: F
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: N.pauseContainer,
          children: [(0, a.jsxs)("div", {
            className: N.pauseText,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: m.default.Messages.DISABLE_DMS
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: m.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, a.jsx)(d.Switch, {
            className: N.toggle,
            onChange: function() {
              j(e => !e)
            },
            checked: B
          })]
        })]
      })
    }), (0, a.jsxs)(d.ModalFooter, {
      children: [(0, a.jsx)(d.Button, {
        onClick: () => {
          (C || G) && !b && !B ? ((0, f.setGuildIncidentActions)(S.id, !1, !1), (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("187317").then(n.bind(n, "187317"));
            return n => (0, a.jsx)(e, {
              ...n,
              guildId: t
            })
          })) : (0, f.setGuildIncidentActions)(S.id, b, B, v);
          let {
            source: e,
            alertType: i,
            messageId: l
          } = D;
          c.default.track(A.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: l,
            raid_alert_type: i,
            intervention_type_enabled: (0, E.getEnabledInterventions)(b, B),
            intervention_type_disabled: (0, E.getDisabledInterventions)(b, B),
            duration: 60 * v
          }), h()
        },
        color: d.Button.Colors.BRAND_NEW,
        look: d.Button.Looks.FILLED,
        submitting: x,
        disabled: !k,
        children: m.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, a.jsx)(d.Button, {
        onClick: h,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        disabled: x,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}