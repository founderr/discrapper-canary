t.d(l, {
  Z: function() {
    return Z
  }
}), t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(498607),
  r = t.n(i),
  C = t(399606),
  c = t(433517),
  d = t(481060),
  u = t(430824),
  E = t(496675),
  m = t(588215),
  _ = t(241559),
  M = t(893966),
  h = t(256003),
  x = t(170323),
  T = t(434368),
  L = t(42170),
  H = t(123846),
  g = t(42551),
  A = t(981631),
  I = t(689938),
  N = t(700956),
  R = t(405811);

function p(e) {
  let {
    label: l,
    onFilter: t,
    isFiltered: s,
    isSorted: a,
    className: i,
    ...r
  } = e, C = s ? "header-primary" : "header-secondary";
  return a && (C = "text-brand"), (0, n.jsx)("th", {
    className: o()(N.tableHeaderCellContainer, i),
    children: (0, n.jsxs)(d.Clickable, {
      ...r,
      onClick: t,
      className: o()(N.tableHeaderCell, {
        [N.tableHeaderCellWithFilter]: null != t
      }),
      children: [(0, n.jsx)(d.Text, {
        variant: "eyebrow",
        color: C,
        children: l
      }), null != t && (0, n.jsx)("div", {
        className: N.filterIconButton,
        children: (0, n.jsx)(d.FiltersHorizontalIcon, {
          size: "custom",
          className: N.filterIcon,
          color: s ? d.tokens.colors.CONTROL_BRAND_FOREGROUND.css : d.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let S = "member-safety-force-show-signals-tooltip";

function Z(e) {
  let {
    guildId: l,
    currentPagedMembers: t
  } = e, a = (0, C.e7)([M.Z], () => M.Z.getSearchStateByGuildId(l), [l], r()), i = (0, C.e7)([E.Z, u.Z], () => E.Z.can(A.Plq.MANAGE_GUILD, u.Z.getGuild(l)), [l]), {
    selectedUserIds: Z,
    addUsers: j,
    clearSelection: v
  } = (0, h.Z)(l), f = a.requireUnusualDmActivity || a.requireCommunicationDisabled || a.requireUnusualAccountActivity || a.requireUsernameQuarantined, D = a.selectedRoleIds.size > 0, b = null != a.selectedJoinDateOption.afterDate, O = a.selectedSort === m.d$.ORDER_BY_GUILD_JOINED_AT_ASC, V = null != a.selectedAccountAgeOption.afterDate, B = a.selectedSort === m.d$.ORDER_BY_USER_ID_ASC || a.selectedSort === m.d$.ORDER_BY_USER_ID_DESC, U = null != a.selectedSourceInviteCode && "" !== a.selectedSourceInviteCode, F = null != a.selectedJoinSourceType, k = U || F, [w, y] = s.useState(null == c.K.get(S, null)), P = s.useCallback(() => {
    c.K.set(S, Date.now()), y(!1)
  }, []), Y = (0, _.xC)(l), G = s.useMemo(() => t.filter(e => (0, _.rX)(l, Y, e)), [Y, t, l]), z = G.length > 0, q = 0 === G.filter(e => !Z.has(e)).length, J = s.useCallback(() => {
    z && (q ? v() : j(G))
  }, [z, q, v, j, G]);
  return (0, n.jsx)("thead", {
    children: (0, n.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [Y && (0, n.jsx)("th", {
        className: o()(N.tableHeaderCellContainer, R.xsmallCol),
        children: (0, n.jsx)(d.Tooltip, {
          shouldShow: !z,
          text: I.Z.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, n.jsx)(d.Clickable, {
            ...e,
            onClick: J,
            className: N.tableHeaderCell,
            children: (0, n.jsx)(d.Checkbox, {
              type: d.Checkbox.Types.INVERTED,
              value: q,
              disabled: !z
            })
          })
        })
      }), (0, n.jsx)(p, {
        label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), i ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.Popout, {
          animation: d.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, n.jsx)(L.Z, {
            guildId: l,
            onClose: A.dG4
          }),
          children: e => {
            let {
              onClick: l,
              ...t
            } = e;
            return (0, n.jsx)(p, {
              label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: l,
              isFiltered: b,
              isSorted: O,
              className: R.smallCol,
              ...t
            })
          }
        }), (0, n.jsx)(d.Popout, {
          animation: d.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, n.jsx)(x.Z, {
            guildId: l,
            onClose: A.dG4
          }),
          children: e => {
            let {
              onClick: l,
              ...t
            } = e;
            return (0, n.jsx)(p, {
              label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: l,
              isFiltered: V,
              isSorted: B,
              className: R.smallCol,
              ...t
            })
          }
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(p, {
          label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: R.smallCol
        }), (0, n.jsx)(p, {
          label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: R.smallCol
        })]
      }), i ? (0, n.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, n.jsx)(H.Z, {
          guildId: l,
          onClose: A.dG4
        }),
        children: e => {
          let {
            onClick: l,
            ...t
          } = e;
          return (0, n.jsx)(p, {
            label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: l,
            isFiltered: k,
            className: R.smallCol,
            ...t
          })
        }
      }) : i && (0, n.jsx)(p, {
        label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: R.smallCol
      }), (0, n.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(g.Z, {
            guildId: l,
            onClose: t
          })
        },
        children: e => {
          let {
            onClick: l,
            ...t
          } = e;
          return (0, n.jsx)(p, {
            label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: l,
            isFiltered: D,
            className: o()(R.mediumCol),
            ...t
          })
        }
      }), (0, n.jsx)(d.Tooltip, {
        text: I.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: w,
        shouldShow: !0,
        color: d.Tooltip.Colors.BRAND,
        children: e => (0, n.jsx)(d.Popout, {
          animation: d.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, n.jsx)(T.Z, {
              guildId: l,
              onClose: t
            })
          },
          children: l => (0, n.jsx)(p, {
            label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": I.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: t => {
              var n, s;
              P(), null === (n = l.onClick) || void 0 === n || n.call(l, t), null === (s = e.onClick) || void 0 === s || s.call(e)
            },
            isFiltered: f,
            className: o()(R.smallCol),
            onMouseEnter: () => {
              var t, n;
              P(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = l.onMouseEnter) || void 0 === n || n.call(l)
            },
            onMouseDown: l.onMouseDown,
            onMouseLeave: e.onMouseLeave,
            onBlur: e.onBlur,
            onFocus: e.onFocus,
            onKeyDown: l.onKeyDown,
            "aria-controls": l["aria-controls"],
            "aria-expanded": l["aria-expanded"]
          })
        })
      }), (0, n.jsx)(p, {
        label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: R.smallCol
      })]
    })
  })
}