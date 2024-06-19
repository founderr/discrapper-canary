t.r(n), t.d(n, {
  default: function() {
    return g
  }
}), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(831209),
  a = t(442837),
  r = t(481060),
  o = t(688465),
  c = t(430824),
  d = t(626135),
  u = t(369994),
  I = t(162157),
  N = t(533244),
  E = t(487419),
  T = t(821312),
  m = t(676770),
  _ = t(981631),
  h = t(689938),
  O = t(798936);

function g(e) {
  let {
    guildId: n,
    transitionState: t,
    onClose: g,
    analyticsData: A
  } = e, C = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]), S = !!(null == C ? void 0 : C.hasFeature(_.oNc.INVITES_DISABLED)), [x] = s.useState(!1), [p, R] = s.useState(m.Fl), Z = (0, a.e7)([E.Z], () => E.Z.getGuildIncident(n)), f = (0, I.BT)(C), M = (0, N.SG)(Z) || S, L = (0, N.sN)(Z), [v, j] = s.useState(M), [b, D] = s.useState(L), [P, B] = s.useState(!1), G = v !== M || b !== L || P, y = S && !f;
  if (null == C) return g(), null;

  function k() {
    j(e => !e)
  }
  return (0, i.jsxs)(r.ModalRoot, {
    transitionState: t,
    size: r.ModalSize.MEDIUM,
    children: [(0, i.jsx)(r.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: O.headerContainer,
        children: [(0, i.jsx)(r.LockIcon, {
          size: "xs",
          color: l.Z.INTERACTIVE_NORMAL
        }), (0, i.jsx)(r.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, i.jsx)(o.Z, {})]
      })
    }), (0, i.jsx)(r.ModalContent, {
      children: (0, i.jsxs)("div", {
        className: O.mainContainer,
        children: [(0, i.jsx)(r.Select, {
          placeholder: h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, m.c1)(),
          select: e => {
            R(e), B(!0)
          },
          isSelected: e => e === p,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: O.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: O.pauseText,
            children: [(0, i.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.Z.Messages.DISABLE_INVITES
            }), (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(r.Tooltip, {
            text: h.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
            shouldShow: S,
            children: e => (0, i.jsx)("div", {
              ...e,
              children: (0, i.jsx)(r.Switch, {
                className: O.toggle,
                onChange: k,
                checked: v,
                disabled: y
              })
            })
          })]
        }), (0, i.jsxs)("div", {
          className: O.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: O.pauseText,
            children: [(0, i.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: h.Z.Messages.DISABLE_DMS
            }), (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: h.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
            })]
          }), (0, i.jsx)(r.Switch, {
            className: O.toggle,
            onChange: function() {
              D(e => !e)
            },
            checked: b
          })]
        })]
      })
    }), (0, i.jsxs)(r.ModalFooter, {
      children: [(0, i.jsx)(r.Button, {
        onClick: () => {
          (M || L) && !v && !b ? ((0, u.n)(C.id, !1, !1), (0, r.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(T.Z, {
            ...e,
            guildId: n
          })))) : (0, u.n)(C.id, v, b, p);
          let {
            source: e,
            alertType: t,
            messageId: s
          } = A;
          d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: n,
            source: e,
            raid_alert_id: s,
            raid_alert_type: t,
            intervention_type_enabled: (0, N.sO)(v, b),
            intervention_type_disabled: (0, N.lk)(v, b),
            duration: 60 * p
          }), g()
        },
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        submitting: x,
        disabled: !G,
        children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, i.jsx)(r.Button, {
        onClick: g,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: x,
        children: h.Z.Messages.CANCEL
      })]
    })]
  })
}