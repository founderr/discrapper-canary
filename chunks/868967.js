"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
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
  E = l("178406"),
  m = l("645266"),
  M = l("49111"),
  h = l("782340"),
  _ = l("262793");

function T(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, o.default)([E.default], () => E.default.getSearchStateByGuildId(t), [t], i), T = (0, f.useTrackMemberFilterSafetyFlagsUsed)(t), x = n.useCallback(() => {
    !s.requireUnusualDmActivity && T(f.MemberSafetyFlagType.UNUSUAL_DM_ACTIVITY), (0, m.updateSearchState)(t, {
      ...s,
      requireUnusualDmActivity: !s.requireUnusualDmActivity
    })
  }, [t, s, T]), S = n.useCallback(() => {
    !s.requireCommunicationDisabled && T(f.MemberSafetyFlagType.COMMUNICATION_DISABLED), (0, m.updateSearchState)(t, {
      ...s,
      requireCommunicationDisabled: !s.requireCommunicationDisabled
    })
  }, [t, s, T]), A = n.useCallback(() => {
    !s.requireUnusualAccountActivity && T(f.MemberSafetyFlagType.UNUSUAL_ACCOUNT_ACTIVITY), (0, m.updateSearchState)(t, {
      ...s,
      requireUnusualAccountActivity: !s.requireUnusualAccountActivity
    })
  }, [t, s, T]), g = n.useCallback(() => {
    !s.requireUsernameQuarantined && T(f.MemberSafetyFlagType.USERNAME_QUARANTINED), (0, m.updateSearchState)(t, {
      ...s,
      requireUsernameQuarantined: !s.requireUsernameQuarantined
    })
  }, [t, s, T]);
  return (0, a.jsx)(d.Menu, {
    navId: "member-safety-flags",
    onClose: l,
    "aria-label": h.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: M.NOOP,
    children: (0, a.jsxs)(d.MenuGroup, {
      children: [(0, a.jsx)(d.MenuCheckboxItem, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, a.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, a.jsx)(r.default, {
            width: 16,
            height: 16,
            className: _.unusualDMLabelIcon
          }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
        }),
        action: x,
        checked: s.requireUnusualDmActivity
      }), (0, a.jsx)(d.MenuCheckboxItem, {
        id: "toggle-require-communication-disabled",
        label: (0, a.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, a.jsx)(C.default, {
            width: 16,
            height: 16,
            className: _.timeoutLabelIcon
          }), h.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
        }),
        action: S,
        checked: s.requireCommunicationDisabled
      }), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.MenuCheckboxItem, {
          id: "toggle-require-unusual-account-activity",
          label: (0, a.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, a.jsx)(c.default, {
              width: 16,
              height: 16,
              className: _.unusualAccountActivityLabelIcon
            }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
          }),
          action: A,
          checked: s.requireUnusualAccountActivity
        }), (0, a.jsx)(d.MenuCheckboxItem, {
          id: "toggle-require-username-quarantined",
          label: (0, a.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, a.jsx)(u.default, {
              width: 16,
              height: 16,
              className: _.quarantinedLabelIcon
            }), h.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
          }),
          action: g,
          checked: s.requireUsernameQuarantined
        })]
      })]
    })
  })
}