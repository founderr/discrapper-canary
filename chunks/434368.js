t.d(l, {
  Z: function() {
    return M
  }
});
var n = t(735250),
  s = t(470079),
  a = t(498607),
  o = t.n(a),
  i = t(399606),
  r = t(481060),
  C = t(203893),
  c = t(910693),
  d = t(893966),
  u = t(527379),
  E = t(981631),
  m = t(689938),
  _ = t(510857);

function M(e) {
  let {
    guildId: l,
    onClose: t
  } = e, a = (0, i.e7)([d.Z], () => d.Z.getSearchStateByGuildId(l), [l], o()), M = (0, c.dW)(l), h = s.useCallback(() => {
    !a.requireUnusualDmActivity && M(c.aY.UNUSUAL_DM_ACTIVITY), (0, u.Dr)(l, {
      ...a,
      requireUnusualDmActivity: !a.requireUnusualDmActivity
    })
  }, [l, a, M]), x = s.useCallback(() => {
    !a.requireCommunicationDisabled && M(c.aY.COMMUNICATION_DISABLED), (0, u.Dr)(l, {
      ...a,
      requireCommunicationDisabled: !a.requireCommunicationDisabled
    })
  }, [l, a, M]), T = s.useCallback(() => {
    !a.requireUnusualAccountActivity && M(c.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, u.Dr)(l, {
      ...a,
      requireUnusualAccountActivity: !a.requireUnusualAccountActivity
    })
  }, [l, a, M]), L = s.useCallback(() => {
    !a.requireUsernameQuarantined && M(c.aY.USERNAME_QUARANTINED), (0, u.Dr)(l, {
      ...a,
      requireUsernameQuarantined: !a.requireUsernameQuarantined
    })
  }, [l, a, M]);
  return (0, n.jsx)(r.Menu, {
    navId: "member-safety-flags",
    onClose: t,
    "aria-label": m.Z.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: E.dG4,
    children: (0, n.jsxs)(r.MenuGroup, {
      children: [(0, n.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, n.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, n.jsx)(r.ChatAlertIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: _.unusualDMLabelIcon
          }), m.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
        }),
        action: h,
        checked: a.requireUnusualDmActivity
      }), (0, n.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-communication-disabled",
        label: (0, n.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, n.jsx)(r.ClockWarningIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: _.timeoutLabelIcon
          }), m.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
        }),
        action: x,
        checked: a.requireCommunicationDisabled
      }), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-unusual-account-activity",
          label: (0, n.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, n.jsx)(C.Z, {
              width: 16,
              height: 16,
              className: _.unusualAccountActivityLabelIcon
            }), m.Z.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
          }),
          action: T,
          checked: a.requireUnusualAccountActivity
        }), (0, n.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-username-quarantined",
          label: (0, n.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, n.jsx)(r.ChatXIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: _.quarantinedLabelIcon
            }), m.Z.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
          }),
          action: L,
          checked: a.requireUsernameQuarantined
        })]
      })]
    })
  })
}