"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("969176"),
  d = l.n(o),
  r = l("65597"),
  u = l("95410"),
  C = l("77078"),
  c = l("305961"),
  f = l("957255"),
  E = l("118530"),
  m = l("490931"),
  M = l("536999"),
  h = l("466818"),
  _ = l("178406"),
  T = l("624663"),
  x = l("463200"),
  S = l("868967"),
  A = l("512882"),
  g = l("149777"),
  p = l("413989"),
  L = l("49111"),
  H = l("782340"),
  N = l("748766"),
  I = l("615319");

function R(e) {
  let {
    label: t,
    onFilter: l,
    isFiltered: n,
    isSorted: s,
    className: o,
    ...d
  } = e, r = n ? "header-primary" : "header-secondary";
  return s && (r = "text-brand"), (0, a.jsx)("th", {
    className: i(N.tableHeaderCellContainer, o),
    children: (0, a.jsxs)(C.Clickable, {
      ...d,
      onClick: l,
      className: i(N.tableHeaderCell, {
        [N.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: r,
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: N.filterIconButton,
        children: (0, a.jsx)(E.default, {
          className: N.filterIcon,
          color: n ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let v = "member-safety-force-show-signals-tooltip";

function j(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, s = (0, r.default)([_.default], () => _.default.getSearchStateByGuildId(t), [t], d), o = (0, r.default)([f.default, c.default], () => f.default.can(L.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: E,
    addUsers: j,
    clearSelection: D
  } = (0, T.default)(t), b = s.requireUnusualDmActivity || s.requireCommunicationDisabled || s.requireUnusualAccountActivity || s.requireUsernameQuarantined, O = s.selectedRoleIds.size > 0, B = null != s.selectedJoinDateOption.afterDate, V = s.selectedSort === m.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, y = null != s.selectedAccountAgeOption.afterDate, F = s.selectedSort === m.OrderBy.ORDER_BY_USER_ID_ASC || s.selectedSort === m.OrderBy.ORDER_BY_USER_ID_DESC, U = null != s.selectedSourceInviteCode && "" !== s.selectedSourceInviteCode, w = null != s.selectedJoinSourceType, k = U || w, [Z, P] = n.useState(null == u.default.get(v, null)), Y = n.useCallback(() => {
    u.default.set(v, Date.now()), P(!1)
  }, []), G = (0, h.useCanAccessBulkBanningFeature)(t), J = (0, M.isInMembersTablesAdditionalFilteringExperiment)(t), q = o && J, z = n.useMemo(() => l.filter(e => (0, h.canBulkBanUser)(t, G, e)), [G, l, t]), K = z.length > 0, W = z.filter(e => !E.has(e)), Q = 0 === W.length, X = n.useCallback(() => {
    K && (Q ? D() : j(z))
  }, [K, Q, D, j, z]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [G && (0, a.jsx)("th", {
        className: i(N.tableHeaderCellContainer, I.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !K,
          text: H.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: X,
            className: N.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: Q,
              disabled: !K
            })
          })
        })
      }), (0, a.jsx)(R, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), J ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(A.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: B,
              isSorted: V,
              className: I.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(x.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: y,
              isSorted: F,
              className: I.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: I.smallCol
        }), (0, a.jsx)(R, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: I.smallCol
        })]
      }), q ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(g.default, {
          guildId: t,
          onClose: L.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(R, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            isFiltered: k,
            className: I.smallCol,
            ...l
          })
        }
      }) : o && (0, a.jsx)(R, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: I.smallCol
      }), (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, a.jsx)(p.default, {
            guildId: t,
            onClose: l
          })
        },
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(R, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            isFiltered: O,
            className: i(I.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: Z,
        shouldShow: !0,
        color: C.Tooltip.Colors.BRAND,
        children: e => (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: l
            } = e;
            return (0, a.jsx)(S.default, {
              guildId: t,
              onClose: l
            })
          },
          children: t => (0, a.jsx)(R, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              Y(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            isFiltered: b,
            className: i(I.smallCol),
            onMouseEnter: () => {
              var l, a;
              Y(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
            },
            onMouseDown: t.onMouseDown,
            onMouseLeave: e.onMouseLeave,
            onBlur: e.onBlur,
            onFocus: e.onFocus,
            onKeyDown: t.onKeyDown,
            "aria-controls": t["aria-controls"],
            "aria-expanded": t["aria-expanded"]
          })
        })
      }), (0, a.jsx)(R, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: I.smallCol
      })]
    })
  })
}