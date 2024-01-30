"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("969176"),
  i = l.n(s),
  o = l("65597"),
  d = l("77078"),
  r = l("4845"),
  u = l("635731"),
  C = l("491401"),
  c = l("864982"),
  f = l("130037"),
  m = l("536999"),
  E = l("178406"),
  M = l("645266"),
  h = l("49111"),
  _ = l("782340"),
  T = l("253665");

function x(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, o.default)([E.default], () => E.default.getSearchStateByGuildId(t), [t], i), x = (0, f.useTrackMemberFilterSafetyFlagsUsed)(t), S = (0, m.isInMembersTableSafetySignalsExperiment)(t), A = n.useCallback(() => {
    !s.requireUnusualDmActivity && x(f.MemberSafetyFlagType.UNUSUAL_DM_ACTIVITY), (0, M.updateSearchState)(t, {
      ...s,
      requireUnusualDmActivity: !s.requireUnusualDmActivity
    })
  }, [t, s, x]), g = n.useCallback(() => {
    !s.requireCommunicationDisabled && x(f.MemberSafetyFlagType.COMMUNICATION_DISABLED), (0, M.updateSearchState)(t, {
      ...s,
      requireCommunicationDisabled: !s.requireCommunicationDisabled
    })
  }, [t, s, x]), p = n.useCallback(() => {
    !s.requireUnusualAccountActivity && x(f.MemberSafetyFlagType.UNUSUAL_ACCOUNT_ACTIVITY), (0, M.updateSearchState)(t, {
      ...s,
      requireUnusualAccountActivity: !s.requireUnusualAccountActivity
    })
  }, [t, s, x]), H = n.useCallback(() => {
    !s.requireUsernameQuarantined && x(f.MemberSafetyFlagType.USERNAME_QUARANTINED), (0, M.updateSearchState)(t, {
      ...s,
      requireUsernameQuarantined: !s.requireUsernameQuarantined
    })
  }, [t, s, x]);
  return (0, a.jsx)(d.Menu, {
    navId: "member-safety-flags",
    onClose: l,
    "aria-label": _.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: h.NOOP,
    children: (0, a.jsxs)(d.MenuGroup, {
      children: [(0, a.jsx)(d.MenuCheckboxItem, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, a.jsxs)("div", {
          className: T.checkboxLabel,
          children: [(0, a.jsx)(r.default, {
            width: 16,
            height: 16,
            className: T.unusualDMLabelIcon
          }), _.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
        }),
        action: A,
        checked: s.requireUnusualDmActivity
      }), (0, a.jsx)(d.MenuCheckboxItem, {
        id: "toggle-require-communication-disabled",
        label: (0, a.jsxs)("div", {
          className: T.checkboxLabel,
          children: [(0, a.jsx)(C.default, {
            width: 16,
            height: 16,
            className: T.timeoutLabelIcon
          }), _.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
        }),
        action: g,
        checked: s.requireCommunicationDisabled
      }), S && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.MenuCheckboxItem, {
          id: "toggle-require-unusual-account-activity",
          label: (0, a.jsxs)("div", {
            className: T.checkboxLabel,
            children: [(0, a.jsx)(c.default, {
              width: 16,
              height: 16,
              className: T.unusualAccountActivityLabelIcon
            }), _.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
          }),
          action: p,
          checked: s.requireUnusualAccountActivity
        }), (0, a.jsx)(d.MenuCheckboxItem, {
          id: "toggle-require-username-quarantined",
          label: (0, a.jsxs)("div", {
            className: T.checkboxLabel,
            children: [(0, a.jsx)(u.default, {
              width: 16,
              height: 16,
              className: T.quarantinedLabelIcon
            }), _.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
          }),
          action: H,
          checked: s.requireUsernameQuarantined
        })]
      })]
    })
  })
}