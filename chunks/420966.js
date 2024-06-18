"use strict";
t.d(s, {
  V: function() {
    return N
  },
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(239091),
  o = t(605436),
  c = t(741247),
  d = t(474333),
  u = t(243730),
  E = t(852898),
  _ = t(203377),
  I = t(689938),
  T = t(97054);

function N() {
  let [e, s] = i.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      s(0 === e.currentTarget.scrollTop)
    }
  }
}

function m(e) {
  let {
    guild: s,
    role: N,
    selectedSection: m,
    setSelectedSection: S
  } = e, h = i.useCallback(e => {
    S(e)
  }, [S]), g = (0, l.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[N.id]
  }, [N.id, s.id]), C = (0, o.pM)(s.id, N.id), x = (0, E.Z)(N);
  i.useEffect(() => {
    C && S(_.ZI.PERMISSIONS)
  }, [C, S]);
  let R = (0, c.useHasGuildRoleItems)(s, N);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: T.titleContainer,
      children: [(0, n.jsx)(a.Text, {
        className: T.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: I.Z.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: N.name
        })
      }), R ? (0, n.jsx)(a.Clickable, {
        className: T.menu,
        onClick: function(e) {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, 741247));
            return t => (0, n.jsx)(e, {
              ...t,
              guild: s,
              role: N
            })
          })
        },
        "aria-label": I.Z.Messages.MORE_OPTIONS,
        children: (0, n.jsx)(a.MoreHorizontalIcon, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != x ? (0, n.jsx)(d.Z, {
      messageType: d.Q.WARNING,
      children: x
    }) : null, (0, n.jsxs)(a.TabBar, {
      className: T.tabBar,
      "aria-label": I.Z.Messages.OPTIONS,
      selectedItem: m,
      type: "top",
      look: "brand",
      onItemSelect: h,
      children: [(0, n.jsx)(a.TabBar.Item, {
        className: T.tabBarItem,
        id: _.ZI.DISPLAY,
        disabled: C,
        children: I.Z.Messages.ROLE_EDIT_TAB_DISPLAY
      }), (0, n.jsx)(a.TabBar.Item, {
        className: T.tabBarItem,
        id: _.ZI.PERMISSIONS,
        children: I.Z.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }), (0, n.jsx)(a.TabBar.Item, {
        className: T.tabBarItem,
        id: _.ZI.VERIFICATIONS,
        disabled: C,
        children: I.Z.Messages.ROLE_EDIT_TAB_VERIFICATION
      }), (0, n.jsx)(a.TabBar.Item, {
        className: T.tabBarItem,
        id: _.ZI.MEMBERS,
        disabled: C,
        children: C ? I.Z.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : I.Z.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(g)
        })
      })]
    })]
  })
}