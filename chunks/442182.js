"use strict";
t.d(s, {
  ZP: function() {
    return P
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(239091),
  d = t(479531),
  u = t(58540),
  E = t(100527),
  _ = t(906732),
  I = t(484459),
  T = t(103575),
  N = t(594174),
  m = t(474333),
  S = t(626135),
  h = t(243730),
  g = t(434404),
  C = t(946724),
  x = t(130341),
  R = t(95242),
  L = t(420966),
  O = t(566476),
  A = t(203377),
  p = t(981631),
  M = t(689938),
  f = t(245660),
  D = t(585512);
async function v(e, s, t) {
  let i = e.roles.filter(e => e !== t);
  try {
    await g.Z.updateMemberRoles(s, e.id, i, [], [t])
  } catch (s) {
    let e = new d.Z(s);
    (0, o.openModal)(s => (0, n.jsx)(o.ConfirmModal, {
      ...s,
      header: M.Z.Messages.ERROR_GENERIC_TITLE,
      confirmText: M.Z.Messages.OKAY,
      confirmButtonColor: o.Button.Colors.BRAND,
      children: (0, n.jsx)(o.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    }))
  }
}

function j(e) {
  let {
    member: s,
    guildId: l,
    roleId: r,
    locked: d
  } = e, E = i.useMemo(() => ({
    [l]: [s.id]
  }), [l, s.id]);

  function _(e) {
    if (e.stopPropagation(), !d) {
      if (e.shiftKey) {
        v(s, l, r);
        return
      }! function(e, s, t) {
        let i = C.Z.getRole(t);
        (0, o.openModal)(l => (0, n.jsxs)(o.ConfirmModal, {
          ...l,
          header: M.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
          confirmText: M.Z.Messages.REMOVE,
          cancelText: M.Z.Messages.CANCEL,
          onConfirm: () => v(e, s, t),
          children: [(0, n.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            children: M.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
              username: e.name,
              roleName: null == i ? void 0 : i.name
            })
          }), (0, n.jsx)(o.Text, {
            className: f.removeTip,
            color: "text-muted",
            variant: "text-md/normal",
            children: M.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
          })]
        }))
      }(s, l, r)
    }
  }

  function m(e) {
    let i = N.default.getUser(s.id);
    if (null != i)(0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("79695"), t.e("32006"), t.e("12435"), t.e("51068")]).then(t.bind(t, 415118));
      return s => (0, n.jsx)(e, {
        ...s,
        user: i,
        guildId: l,
        showChatItems: !1
      })
    })
  }
  return (0, u.$)(E), (0, n.jsx)("div", {
    className: D.contentWidth,
    children: (0, n.jsx)(o.Popout, {
      renderPopout: e => (0, n.jsx)(T.Z, {
        location: "GuildSettingsRolesEditMembers",
        guildId: l,
        userId: s.id,
        roleId: r,
        ...e
      }),
      position: "left",
      preload: () => (0, I.W)(s.id, s.avatarURL, {
        guildId: l
      }),
      children: e => (0, n.jsxs)(o.Clickable, {
        ...e,
        className: f.memberRow,
        onContextMenu: m,
        children: [(0, n.jsx)(O.Z, {
          className: f.memberDetails,
          avatarURL: s.avatarURL,
          name: s.name,
          bot: s.bot,
          verifiedBot: s.verifiedBot,
          userTag: s.userTag
        }), (0, n.jsx)("div", {
          className: f.removeButtonContainer,
          children: (0, n.jsx)(o.Tooltip, {
            text: d ? M.Z.Messages.ROLE_REMOVE_MEMBER_MANAGED : M.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
            position: "top",
            children: e => (0, n.jsx)(o.Clickable, {
              ...e,
              className: a()(f.removeButton, {
                [f.removeButtonDisabled]: d
              }),
              onClick: _,
              children: (0, n.jsx)(o.CircleXIcon, {
                size: "xs",
                color: "currentColor"
              })
            })
          })
        })]
      })
    })
  })
}

function Z(e) {
  let {
    handleAddClick: s,
    locked: t
  } = e;
  return (0, n.jsx)("div", {
    className: D.contentWidth,
    children: (0, n.jsxs)("div", {
      className: a()(f.memberRow, f.emptyRowContainer),
      children: [(0, n.jsx)(o.GroupIcon, {
        size: "md",
        color: "currentColor"
      }), (0, n.jsx)(o.Text, {
        className: f.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: M.Z.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
          addMembersHook: function(e, i) {
            return t ? null : (0, n.jsx)(o.Anchor, {
              onClick: s,
              children: e
            }, i)
          }
        })
      })]
    })
  })
}

function U(e) {
  let {
    guildId: s,
    roleId: t,
    query: l,
    headerHeight: a,
    locked: r,
    onScroll: c,
    roleMembers: d,
    handleAddClick: u
  } = e, {
    analyticsLocations: I
  } = (0, _.ZP)(E.Z.MEMBER_LIST), T = i.useMemo(() => l.trim().toLowerCase(), [l]);
  (0, x.rY)(s, T);
  let N = i.useMemo(() => d.filter(e => (0, x.eg)(T, e)), [d, T]),
    m = i.useMemo(() => N.sort((e, s) => e.name.localeCompare(s.name)), [N]);
  return (0, n.jsx)(_.Gt, {
    value: I,
    children: (0, n.jsx)(o.ListAuto, {
      className: f.list,
      sections: [Math.max(N.length, 1)],
      sectionHeight: a,
      renderSection: () => (0, n.jsx)("div", {
        style: {
          height: a
        }
      }, "section"),
      style: {
        scrollPaddingTop: a
      },
      rowHeight: 40,
      renderRow: function(e) {
        let {
          row: i
        } = e;
        if (0 === m.length) return (0, n.jsx)(Z, {
          handleAddClick: u,
          locked: r
        }, "empty");
        let l = m[i];
        return (0, n.jsx)(j, {
          member: l,
          guildId: s,
          roleId: t,
          locked: r
        }, l.id)
      },
      onScroll: c
    })
  })
}

function G(e) {
  let {
    query: s,
    setQuery: t,
    locked: i,
    handleAddClick: l
  } = e;
  return (0, n.jsxs)("div", {
    className: f.searchContainer,
    children: [(0, n.jsx)(o.SearchBar, {
      size: o.SearchBar.Sizes.MEDIUM,
      query: s,
      onChange: t,
      onClear: () => t(""),
      placeholder: M.Z.Messages.SEARCH_MEMBERS,
      "aria-label": M.Z.Messages.SEARCH_MEMBERS
    }), (0, n.jsx)(o.Button, {
      className: f.addButton,
      size: o.Button.Sizes.SMALL,
      onClick: l,
      disabled: i,
      children: M.Z.Messages.ROLE_ADD_MEMBERS_BUTTON
    })]
  })
}

function P(e) {
  let {
    guild: s,
    role: l,
    locked: c,
    setSelectedSection: d
  } = e, [u, E] = i.useState(""), {
    headerHeight: _,
    headerRef: I
  } = (0, R.Z)(0), {
    scrolledToTop: T,
    handleScroll: N
  } = (0, L.V)(), g = l.managed || c, C = (0, x.e)(s.id, l.id), O = (0, r.e7)([h.Z], () => {
    var e, t;
    return null !== (t = null === (e = h.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[l.id]) && void 0 !== t ? t : 0
  }) > C.length, v = () => {
    S.default.track(p.rMx.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("7590"), t.e("15968")]).then(t.bind(t, 24722));
      return t => (0, n.jsx)(e, {
        ...t,
        roleId: l.id,
        guildId: s.id
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: f.container,
    children: [(0, n.jsx)("div", {
      className: f.headerContainer,
      ref: I,
      children: (0, n.jsx)("div", {
        className: D.contentWidth,
        children: (0, n.jsxs)("div", {
          className: a()(D.header, {
            [D.stickyHeaderElevated]: !T
          }),
          children: [(0, n.jsx)(L.Z, {
            guild: s,
            role: l,
            selectedSection: A.ZI.MEMBERS,
            setSelectedSection: d
          }), (0, n.jsx)(G, {
            query: u,
            setQuery: E,
            locked: g,
            handleAddClick: v
          }), O ? (0, n.jsx)(m.Z, {
            className: f.searchWarning,
            messageType: m.Q.INFO,
            children: M.Z.Messages.ROLE_EDIT_MEMBERS_MISSING
          }) : null]
        })
      })
    }), (0, n.jsx)(U, {
      headerHeight: _ + 8,
      query: u,
      guildId: s.id,
      roleId: l.id,
      locked: g,
      onScroll: N,
      roleMembers: C,
      handleAddClick: v
    })]
  })
}