"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  o = l.n(n),
  i = l("498607"),
  r = l.n(i),
  d = l("399606"),
  u = l("433517"),
  C = l("481060"),
  c = l("430824"),
  m = l("496675"),
  E = l("157318"),
  f = l("588215"),
  _ = l("241559"),
  M = l("893966"),
  h = l("256003"),
  T = l("170323"),
  S = l("434368"),
  x = l("42170"),
  A = l("123846"),
  p = l("42551"),
  g = l("981631"),
  L = l("689938"),
  N = l("272265"),
  H = l("391649");

function R(e) {
  let {
    label: t,
    onFilter: l,
    isFiltered: s,
    isSorted: n,
    className: i,
    ...r
  } = e, d = s ? "header-primary" : "header-secondary";
  return n && (d = "text-brand"), (0, a.jsx)("th", {
    className: o()(N.tableHeaderCellContainer, i),
    children: (0, a.jsxs)(C.Clickable, {
      ...r,
      onClick: l,
      className: o()(N.tableHeaderCell, {
        [N.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: d,
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: N.filterIconButton,
        children: (0, a.jsx)(E.default, {
          className: N.filterIcon,
          color: s ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let I = "member-safety-force-show-signals-tooltip";

function v(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, n = (0, d.useStateFromStores)([M.default], () => M.default.getSearchStateByGuildId(t), [t], r()), i = (0, d.useStateFromStores)([m.default, c.default], () => m.default.can(g.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: E,
    addUsers: v,
    clearSelection: j
  } = (0, h.default)(t), D = n.requireUnusualDmActivity || n.requireCommunicationDisabled || n.requireUnusualAccountActivity || n.requireUsernameQuarantined, b = n.selectedRoleIds.size > 0, O = null != n.selectedJoinDateOption.afterDate, B = n.selectedSort === f.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, V = null != n.selectedAccountAgeOption.afterDate, F = n.selectedSort === f.OrderBy.ORDER_BY_USER_ID_ASC || n.selectedSort === f.OrderBy.ORDER_BY_USER_ID_DESC, y = null != n.selectedSourceInviteCode && "" !== n.selectedSourceInviteCode, U = null != n.selectedJoinSourceType, w = y || U, [k, P] = s.useState(null == u.Storage.get(I, null)), Z = s.useCallback(() => {
    u.Storage.set(I, Date.now()), P(!1)
  }, []), Y = (0, _.useCanAccessBulkBanningFeature)(t), G = s.useMemo(() => l.filter(e => (0, _.canBulkBanUser)(t, Y, e)), [Y, l, t]), J = G.length > 0, q = 0 === G.filter(e => !E.has(e)).length, K = s.useCallback(() => {
    J && (q ? j() : v(G))
  }, [J, q, j, v, G]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [Y && (0, a.jsx)("th", {
        className: o()(N.tableHeaderCellContainer, H.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !J,
          text: L.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: K,
            className: N.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: q,
              disabled: !J
            })
          })
        })
      }), (0, a.jsx)(R, {
        label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(x.default, {
            guildId: t,
            onClose: g.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: O,
              isSorted: B,
              className: H.smallCol,
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
            onClose: g.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: V,
              isSorted: F,
              className: H.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
          label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: H.smallCol
        }), (0, a.jsx)(R, {
          label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: H.smallCol
        })]
      }), i ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(A.default, {
          guildId: t,
          onClose: g.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(R, {
            label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            isFiltered: w,
            className: H.smallCol,
            ...l
          })
        }
      }) : i && (0, a.jsx)(R, {
        label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: H.smallCol
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
            label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            isFiltered: b,
            className: o()(H.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: L.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
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
            return (0, a.jsx)(S.default, {
              guildId: t,
              onClose: l
            })
          },
          children: t => (0, a.jsx)(R, {
            label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": L.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, s;
              Z(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (s = e.onClick) || void 0 === s || s.call(e)
            },
            isFiltered: D,
            className: o()(H.smallCol),
            onMouseEnter: () => {
              var l, a;
              Z(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
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
        label: L.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: H.smallCol
      })]
    })
  })
}