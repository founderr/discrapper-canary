"use strict";
s.r(t), s.d(t, {
  useScrolledToTop: function() {
    return T
  },
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("272030"),
  o = s("726527"),
  d = s("555158"),
  u = s("433487"),
  c = s("36402"),
  E = s("364222"),
  _ = s("53948"),
  I = s("782340"),
  f = s("925041");

function T() {
  let [e, t] = l.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function S(e) {
  let {
    guild: t,
    role: T,
    selectedSection: S,
    setSelectedSection: m
  } = e, N = l.useCallback(e => {
    m(e)
  }, [m]), g = (0, n.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[T.id]
  }, [T.id, t.id]), h = t.id === T.id, C = (0, E.default)(T);
  l.useEffect(() => {
    h && m(_.GuildSettingsRoleEditSections.PERMISSIONS)
  }, [h, m]);
  let R = (0, o.useHasGuildRoleItems)(t, T);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, a.jsx)(i.Text, {
        className: f.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: I.default.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: T.name
        })
      }), R ? (0, a.jsx)(i.Clickable, {
        className: f.menu,
        onClick: function(e) {
          (0, r.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("726527").then(s.bind(s, "726527"));
            return s => (0, a.jsx)(e, {
              ...s,
              guild: t,
              role: T
            })
          })
        },
        "aria-label": I.default.Messages.MORE_OPTIONS,
        children: (0, a.jsx)(u.default, {})
      }) : null]
    }), null != C ? (0, a.jsx)(d.default, {
      messageType: d.HelpMessageTypes.WARNING,
      children: C
    }) : null, (0, a.jsxs)(i.TabBar, {
      className: f.tabBar,
      "aria-label": I.default.Messages.OPTIONS,
      selectedItem: S,
      type: "top",
      look: "brand",
      onItemSelect: N,
      children: [(0, a.jsx)(i.TabBar.Item, {
        className: f.tabBarItem,
        id: _.GuildSettingsRoleEditSections.DISPLAY,
        disabled: h,
        children: I.default.Messages.ROLE_EDIT_TAB_DISPLAY
      }), (0, a.jsx)(i.TabBar.Item, {
        className: f.tabBarItem,
        id: _.GuildSettingsRoleEditSections.PERMISSIONS,
        children: I.default.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }), (0, a.jsx)(i.TabBar.Item, {
        className: f.tabBarItem,
        id: _.GuildSettingsRoleEditSections.VERIFICATIONS,
        disabled: h,
        children: I.default.Messages.ROLE_EDIT_TAB_VERIFICATION
      }), (0, a.jsx)(i.TabBar.Item, {
        className: f.tabBarItem,
        id: _.GuildSettingsRoleEditSections.MEMBERS,
        disabled: h,
        children: h ? I.default.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : I.default.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(g)
        })
      })]
    })]
  })
}