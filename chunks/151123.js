"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
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
  M = l("466818"),
  h = l("178406"),
  _ = l("624663"),
  T = l("463200"),
  x = l("868967"),
  S = l("512882"),
  A = l("149777"),
  p = l("413989"),
  L = l("49111"),
  H = l("782340"),
  N = l("748766"),
  g = l("615319");

function I(e) {
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
let R = "member-safety-force-show-signals-tooltip";

function v(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, s = (0, r.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], d), o = (0, r.default)([f.default, c.default], () => f.default.can(L.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: E,
    addUsers: v,
    clearSelection: j
  } = (0, _.default)(t), D = s.requireUnusualDmActivity || s.requireCommunicationDisabled || s.requireUnusualAccountActivity || s.requireUsernameQuarantined, b = s.selectedRoleIds.size > 0, O = null != s.selectedJoinDateOption.afterDate, B = s.selectedSort === m.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, V = null != s.selectedAccountAgeOption.afterDate, y = s.selectedSort === m.OrderBy.ORDER_BY_USER_ID_ASC || s.selectedSort === m.OrderBy.ORDER_BY_USER_ID_DESC, U = null != s.selectedSourceInviteCode && "" !== s.selectedSourceInviteCode, F = null != s.selectedJoinSourceType, w = U || F, [k, Z] = n.useState(null == u.default.get(R, null)), P = n.useCallback(() => {
    u.default.set(R, Date.now()), Z(!1)
  }, []), Y = (0, M.useCanAccessBulkBanningFeature)(t), G = n.useMemo(() => l.filter(e => (0, M.canBulkBanUser)(t, Y, e)), [Y, l, t]), J = G.length > 0, q = G.filter(e => !E.has(e)), z = 0 === q.length, K = n.useCallback(() => {
    J && (z ? j() : v(G))
  }, [J, z, j, v, G]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [Y && (0, a.jsx)("th", {
        className: i(N.tableHeaderCellContainer, g.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !J,
          text: H.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: K,
            className: N.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: z,
              disabled: !J
            })
          })
        })
      }), (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), o ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(S.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: O,
              isSorted: B,
              className: g.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(T.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: V,
              isSorted: y,
              className: g.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: g.smallCol
        }), (0, a.jsx)(I, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: g.smallCol
        })]
      }), o ? (0, a.jsx)(C.Popout, {
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
          return (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            isFiltered: w,
            className: g.smallCol,
            ...l
          })
        }
      }) : o && (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: g.smallCol
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
          return (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            isFiltered: b,
            className: i(g.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: k,
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
            return (0, a.jsx)(x.default, {
              guildId: t,
              onClose: l
            })
          },
          children: t => (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              P(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            isFiltered: D,
            className: i(g.smallCol),
            onMouseEnter: () => {
              var l, a;
              P(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
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
      }), (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: g.smallCol
      })]
    })
  })
}