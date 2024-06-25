t.r(n), t.d(n, {
  default: function() {
    return O
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(831209),
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
  g = t(798936);

function O(e) {
  let {
    guildId: n,
    transitionState: t,
    onClose: O,
    analyticsData: A
  } = e, x = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]), C = !!(null == x ? void 0 : x.hasFeature(_.oNc.INVITES_DISABLED)), [S] = l.useState(!1), [p, R] = l.useState(m.Fl), Z = (0, a.e7)([E.Z], () => E.Z.getGuildIncident(n)), f = (0, I.BT)(x), M = (0, N.SG)(Z) || C, L = (0, N.sN)(Z), [v, j] = l.useState(M), [b, P] = l.useState(L), [D, B] = l.useState(!1), G = v !== M || b !== L || D, y = C && !f;
  if (null == x) return O(), null;

  function k() {
    j(e => !e)
  }
  return (0, i.jsxs)(r.ModalRoot, {
    transitionState: t,
    size: r.ModalSize.MEDIUM,
    children: [(0, i.jsx)(r.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: g.headerContainer,
        children: [(0, i.jsx)(r.LockIcon, {
          size: "xs",
          color: s.Z.INTERACTIVE_NORMAL
        }), (0, i.jsx)(r.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }), (0, i.jsx)(o.Z, {})]
      })
    }), (0, i.jsx)(r.ModalContent, {
      children: (0, i.jsxs)("div", {
        className: g.mainContainer,
        children: [(0, i.jsx)(r.Select, {
          placeholder: h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, m.c1)(),
          select: e => {
            R(e), B(!0)
          },
          isSelected: e => e === p,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
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
            shouldShow: C,
            children: e => (0, i.jsx)("div", {
              ...e,
              children: (0, i.jsx)(r.Switch, {
                className: g.toggle,
                onChange: k,
                checked: v,
                disabled: y
              })
            })
          })]
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
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
            className: g.toggle,
            onChange: function() {
              P(e => !e)
            },
            checked: b
          })]
        })]
      })
    }), (0, i.jsxs)(r.ModalFooter, {
      children: [(0, i.jsx)(r.Button, {
        onClick: () => {
          (M || L) && !v && !b ? ((0, u.n)(x.id, !1, !1), (0, r.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(T.Z, {
            ...e,
            guildId: n
          })))) : (0, u.n)(x.id, v, b, p);
          let {
            source: e,
            alertType: t,
            messageId: l
          } = A;
          d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: n,
            source: e,
            raid_alert_id: l,
            raid_alert_type: t,
            intervention_type_enabled: (0, N.sO)(v, b),
            intervention_type_disabled: (0, N.lk)(v, b),
            duration: 60 * p
          }), O()
        },
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        submitting: S,
        disabled: !G,
        children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }), (0, i.jsx)(r.Button, {
        onClick: O,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: S,
        children: h.Z.Messages.CANCEL
      })]
    })]
  })
}