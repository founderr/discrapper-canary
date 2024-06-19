var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(692547),
  c = n(481060),
  u = n(730749),
  d = n(427217),
  E = n(246133),
  h = n(383832),
  _ = n(474376),
  I = n(695346),
  m = n(293273),
  g = n(881201),
  p = n(626135),
  T = n(51144),
  N = n(981631),
  S = n(689938),
  C = n(84381);

function A(e) {
  let {
    status: t,
    description: n,
    focused: s
  } = e;
  return (0, i.jsxs)("div", {
    className: C.statusItem,
    children: [(0, i.jsx)(c.Status, {
      status: t,
      className: C.icon,
      size: 10,
      color: s ? "currentColor" : void 0
    }), (0, i.jsx)("div", {
      className: C.status,
      children: (0, T.u5)(t)
    }), null != n && (0, i.jsx)("div", {
      className: C.description,
      children: n
    })]
  })
}

function f(e) {
  let {
    customStatus: t
  } = e, n = e => {
    e.stopPropagation(), I.Ok.updateSetting(void 0)
  };
  return null != t ? (0, i.jsx)("div", {
    "aria-label": S.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
    children: (0, i.jsx)(d.Z, {
      className: null != t.emoji ? C.customStatusWithEmoji : C.customStatusItem,
      activity: t,
      emojiClassName: C.customEmoji,
      textClassName: C.customText,
      placeholderText: S.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      children: (0, i.jsx)(c.Tooltip, {
        text: S.Z.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS,
        children: e => (0, i.jsx)(c.Button, {
          ...e,
          className: C.clearStatusButton,
          onClick: n,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          tabIndex: -1,
          "aria-hidden": !0,
          children: (0, i.jsx)(c.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: C.clearStatusIcon
          })
        })
      })
    })
  }) : (0, i.jsxs)("div", {
    className: a()(C.statusItem, C.__invalid_customStatusContentIcon),
    "aria-label": S.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
    children: [(0, i.jsx)("div", {
      className: C.customEmojiPlaceholder
    }), (0, i.jsx)("div", {
      className: C.status,
      children: S.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
    })]
  })
}

function Z(e) {
  let {
    focused: t
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(C.statusItem, C.statusItemNoPadding, C.__invalid_customStatusContentIcon, C.switchAccountsItem),
    "aria-label": S.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
    children: [(0, i.jsx)(g.Z, {
      width: 18,
      height: 18,
      className: C.switchAccountsIcon,
      color: t ? o.Z.unsafe_rawColors.WHITE_500.css : "currentColor"
    }), (0, i.jsx)("div", {
      className: C.status,
      children: S.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE
    })]
  })
}
let v = e => {
  let {
    customStatus: t,
    onClose: l,
    analyticsContext: a,
    onSelect: r
  } = e, o = (0, _.g)();
  s.useEffect(() => {
    p.default.track(N.rMx.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != t,
      location: a.location
    })
  }, []);
  let u = e => {
    (0, E.Z)(e, void 0, {
      location: a.location
    })
  };
  return (0, i.jsxs)(c.Menu, {
    navId: "status-picker",
    variant: "fixed",
    "aria-label": S.Z.Messages.SET_STATUS,
    onClose: l,
    onSelect: r,
    children: [(0, i.jsx)(c.MenuItem, {
      id: "online",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, i.jsx)(A, {
          status: c.StatusTypes.ONLINE,
          focused: t
        })
      },
      action: () => u(c.StatusTypes.ONLINE)
    }), (0, i.jsx)(c.MenuSeparator, {}), (0, i.jsx)(c.MenuItem, {
      id: "idle",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, i.jsx)(A, {
          status: c.StatusTypes.IDLE,
          focused: t
        })
      },
      action: () => u(c.StatusTypes.IDLE)
    }), (0, i.jsx)(c.MenuItem, {
      id: "dnd",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, i.jsx)(A, {
          status: c.StatusTypes.DND,
          description: S.Z.Messages.STATUS_DND_HELP,
          focused: t
        })
      },
      action: () => u(c.StatusTypes.DND)
    }), (0, i.jsx)(c.MenuItem, {
      id: "invisible",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, i.jsx)(A, {
          status: c.StatusTypes.INVISIBLE,
          description: S.Z.Messages.STATUS_INVISIBLE_HELPER,
          focused: t
        })
      },
      action: () => u(c.StatusTypes.INVISIBLE)
    }), (0, i.jsx)(c.MenuSeparator, {}), (0, i.jsx)(c.MenuItem, {
      id: "custom-status",
      keepItemStyles: !0,
      render: () => (0, i.jsx)(f, {
        customStatus: t
      }),
      action: () => {
        (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, 211065));
          return t => (0, i.jsx)(e, {
            ...t,
            sourceAnalyticsContext: a
          })
        })
      }
    }), (0, i.jsx)(c.MenuSeparator, {}), (0, i.jsx)(c.MenuItem, {
      id: "switch-account",
      action: h.Z,
      label: e => {
        let {
          isFocused: t
        } = e;
        return (0, i.jsx)(Z, {
          focused: t
        })
      },
      children: o
    }, "switch-account")]
  })
};
t.Z = (0, u.Z)(e => {
  let t = (0, r.e7)([m.Z], () => m.Z.getCustomStatusActivity()),
    n = I.co.useSetting();
  return (0, i.jsx)(v, {
    ...e,
    customStatus: t,
    status: n
  })
})