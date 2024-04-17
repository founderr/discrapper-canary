"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("831209"),
  d = n("442837"),
  s = n("481060"),
  r = n("688465"),
  u = n("430824"),
  o = n("630641"),
  c = n("626135"),
  _ = n("369994"),
  E = n("162157"),
  I = n("533244"),
  f = n("487419"),
  A = n("676770"),
  R = n("981631"),
  S = n("689938"),
  h = n("399866");

function m(e) {
  let {
    guildId: t,
    transitionState: m,
    onClose: D,
    analyticsData: T
  } = e, N = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), L = !!(null == N ? void 0 : N.hasFeature(R.GuildFeatures.INVITES_DISABLED)), [M] = a.useState(!1), [g, x] = a.useState(A.DEFAULT_LOCKDOWN_DURATION), C = (0, d.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), p = (0, E.useCanEnableRaidAlerts)(N), v = (0, I.hasInvitesDisabled)(C) || L, G = (0, I.hasDMsDisabled)(C), [b, O] = a.useState(v), [j, y] = a.useState(G), [U, B] = a.useState(!1), P = b !== v || j !== G || U, k = L && !p;
  if (null == N) return D(), null;

  function F() {
    O(e => !e)
  }
  return (0, i.jsxs)(s.ModalRoot, {
    transitionState: m,
    size: s.ModalSize.MEDIUM,
    children: [(0, i.jsx)(s.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: h.headerContainer,
        children: [(0, i.jsx)(o.default, {
          color: l.default.INTERACTIVE_NORMAL,
          width: 16,
          height: 16
        }), (0, i.jsx)(s.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: S.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, i.jsx)(r.default, {})]
      })
    }), (0, i.jsx)(s.ModalContent, {
      children: (0, i.jsxs)("div", {
        className: h.mainContainer,
        children: [(0, i.jsx)(s.Select, {
          placeholder: S.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, A.getTimeframes)(),
          select: e => {
            x(e), B(!0)
          },
          isSelected: e => e === g,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: h.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: h.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_INVITES
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Tooltip, {
            text: S.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: L,
            children: e => (0, i.jsx)("div", {
              ...e,
              children: (0, i.jsx)(s.Switch, {
                className: h.toggle,
                onChange: F,
                checked: b,
                disabled: k
              })
            })
          })]
        }), (0, i.jsxs)("div", {
          className: h.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: h.pauseText,
            children: [(0, i.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: S.default.Messages.DISABLE_DMS
            }), (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(s.Switch, {
            className: h.toggle,
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
          (v || G) && !b && !j ? ((0, _.setGuildIncidentActions)(N.id, !1, !1), (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("53324")]).then(n.bind(n, "821312"));
            return n => (0, i.jsx)(e, {
              ...n,
              guildId: t
            })
          })) : (0, _.setGuildIncidentActions)(N.id, b, j, g);
          let {
            source: e,
            alertType: a,
            messageId: l
          } = T;
          c.default.track(R.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: l,
            raid_alert_type: a,
            intervention_type_enabled: (0, I.getEnabledInterventions)(b, j),
            intervention_type_disabled: (0, I.getDisabledInterventions)(b, j),
            duration: 60 * g
          }), D()
        },
        color: s.Button.Colors.BRAND_NEW,
        look: s.Button.Looks.FILLED,
        submitting: M,
        disabled: !P,
        children: S.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, i.jsx)(s.Button, {
        onClick: D,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        disabled: M,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}