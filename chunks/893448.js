"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("272030"),
  u = s("599417"),
  c = s("750560"),
  E = s("506885"),
  _ = s("981601"),
  I = s("697218"),
  T = s("555158"),
  f = s("810567"),
  S = s("381546"),
  m = s("155207"),
  N = s("599110"),
  g = s("36402"),
  h = s("592407"),
  C = s("531493"),
  R = s("986654"),
  x = s("50693"),
  L = s("91816"),
  O = s("120318"),
  p = s("53948"),
  A = s("49111"),
  M = s("782340"),
  D = s("688354"),
  v = s("445494");
async function j(e, t, s) {
  let l = e.roles.filter(e => e !== s);
  try {
    await h.default.updateMemberRoles(t, e.id, l, [], [s])
  } catch (t) {
    let e = new u.default(t);
    (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
      ...t,
      header: M.default.Messages.ERROR_GENERIC_TITLE,
      confirmText: M.default.Messages.OKAY,
      confirmButtonColor: o.Button.Colors.BRAND,
      children: (0, a.jsx)(o.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    }))
  }
}

function G(e) {
  let {
    member: t,
    guildId: n,
    roleId: r,
    locked: u
  } = e, T = l.useMemo(() => ({
    [n]: [t.id]
  }), [n, t.id]);

  function f(e) {
    if (e.stopPropagation(), !u) {
      if (e.shiftKey) {
        j(t, n, r);
        return
      }! function(e, t, s) {
        let l = C.default.getRole(s);
        (0, o.openModal)(n => (0, a.jsxs)(o.ConfirmModal, {
          ...n,
          header: M.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
          confirmText: M.default.Messages.REMOVE,
          cancelText: M.default.Messages.CANCEL,
          onConfirm: () => j(e, t, s),
          children: [(0, a.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            children: M.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
              username: e.name,
              roleName: null == l ? void 0 : l.name
            })
          }), (0, a.jsx)(o.Text, {
            className: D.removeTip,
            color: "text-muted",
            variant: "text-md/normal",
            children: M.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
          })]
        }))
      }(t, n, r)
    }
  }

  function m(e) {
    let l = I.default.getUser(t.id);
    null != l && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await s.el("539593").then(s.bind(s, "539593"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: l,
        guildId: n,
        showChatItems: !1
      })
    })
  }
  return (0, c.useSubscribeGuildMembers)(T), (0, a.jsx)("div", {
    className: v.contentWidth,
    children: (0, a.jsx)(o.Popout, {
      renderPopout: e => (0, a.jsx)(_.default, {
        guildId: n,
        userId: t.id,
        ...e
      }),
      position: "left",
      preload: () => (0, E.default)(t.id, t.avatarURL, {
        guildId: n
      }),
      children: e => (0, a.jsxs)(o.Clickable, {
        ...e,
        className: D.memberRow,
        onContextMenu: m,
        children: [(0, a.jsx)(O.default, {
          className: D.memberDetails,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, a.jsx)("div", {
          className: D.removeButtonContainer,
          children: (0, a.jsx)(o.Tooltip, {
            text: u ? M.default.Messages.ROLE_REMOVE_MEMBER_MANAGED : M.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: i(D.removeButton, {
                [D.removeButtonDisabled]: u
              }),
              onClick: f,
              children: (0, a.jsx)(S.default, {
                width: 16,
                height: 16
              })
            })
          })
        })]
      })
    })
  })
}

function U(e) {
  let {
    handleAddClick: t,
    locked: s
  } = e;
  return (0, a.jsx)("div", {
    className: v.contentWidth,
    children: (0, a.jsxs)("div", {
      className: i(D.memberRow, D.emptyRowContainer),
      children: [(0, a.jsx)(m.default, {}), (0, a.jsx)(o.Text, {
        className: D.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: M.default.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
          addMembersHook: function(e, l) {
            return s ? null : (0, a.jsx)(o.Anchor, {
              onClick: t,
              children: e
            }, l)
          }
        })
      })]
    })
  })
}

function P(e) {
  let {
    guildId: t,
    roleId: s,
    query: n,
    headerHeight: i,
    locked: r,
    onScroll: d,
    roleMembers: u,
    handleAddClick: c
  } = e, E = l.useMemo(() => n.trim().toLowerCase(), [n]);
  (0, R.useQueryGuildMembers)(t, E);
  let _ = l.useMemo(() => u.filter(e => (0, R.filterFullMembersByQuery)(E, e)), [u, E]),
    I = l.useMemo(() => _.sort((e, t) => e.name.localeCompare(t.name)), [_]);
  return (0, a.jsx)(o.ListAuto, {
    className: D.list,
    sections: [Math.max(_.length, 1)],
    sectionHeight: i,
    renderSection: () => (0, a.jsx)("div", {
      style: {
        height: i
      }
    }, "section"),
    style: {
      scrollPaddingTop: i
    },
    rowHeight: 40,
    renderRow: function(e) {
      let {
        row: l
      } = e;
      if (0 === I.length) return (0, a.jsx)(U, {
        handleAddClick: c,
        locked: r
      }, "empty");
      let n = I[l];
      return (0, a.jsx)(G, {
        member: n,
        guildId: t,
        roleId: s,
        locked: r
      }, n.id)
    },
    onScroll: d
  })
}

function b(e) {
  let {
    query: t,
    setQuery: s,
    locked: l,
    handleAddClick: n
  } = e;
  return (0, a.jsxs)("div", {
    className: D.searchContainer,
    children: [(0, a.jsx)(f.default, {
      size: f.default.Sizes.MEDIUM,
      query: t,
      onChange: s,
      onClear: () => s(""),
      placeholder: M.default.Messages.SEARCH_MEMBERS,
      "aria-label": M.default.Messages.SEARCH_MEMBERS
    }), (0, a.jsx)(o.Button, {
      className: D.addButton,
      size: o.Button.Sizes.SMALL,
      onClick: n,
      disabled: l,
      children: M.default.Messages.ROLE_ADD_MEMBERS_BUTTON
    })]
  })
}

function B(e) {
  let {
    guild: t,
    role: n,
    locked: d,
    setSelectedSection: u
  } = e, [c, E] = l.useState(""), {
    headerHeight: _,
    headerRef: I
  } = (0, x.default)(0), {
    scrolledToTop: f,
    handleScroll: S
  } = (0, L.useScrolledToTop)(), m = n.managed || d, h = (0, R.useGuildRoleMembers)(t.id, n.id), C = (0, r.useStateFromStores)([g.default], () => {
    var e, s;
    return null !== (s = null === (e = g.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id]) && void 0 !== s ? s : 0
  }), O = C > h.length, j = () => {
    N.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("744581").then(s.bind(s, "744581"));
      return s => (0, a.jsx)(e, {
        ...s,
        roleId: n.id,
        guildId: t.id
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: D.container,
    children: [(0, a.jsx)("div", {
      className: D.headerContainer,
      ref: I,
      children: (0, a.jsx)("div", {
        className: v.contentWidth,
        children: (0, a.jsxs)("div", {
          className: i(v.header, {
            [v.stickyHeaderElevated]: !f
          }),
          children: [(0, a.jsx)(L.default, {
            guild: t,
            role: n,
            selectedSection: p.GuildSettingsRoleEditSections.MEMBERS,
            setSelectedSection: u
          }), (0, a.jsx)(b, {
            query: c,
            setQuery: E,
            locked: m,
            handleAddClick: j
          }), O ? (0, a.jsx)(T.default, {
            className: D.searchWarning,
            messageType: T.HelpMessageTypes.INFO,
            children: M.default.Messages.ROLE_EDIT_MEMBERS_MISSING
          }) : null]
        })
      })
    }), (0, a.jsx)(P, {
      headerHeight: _ + 8,
      query: c,
      guildId: t.id,
      roleId: n.id,
      locked: m,
      onScroll: S,
      roleMembers: h,
      handleAddClick: j
    })]
  })
}