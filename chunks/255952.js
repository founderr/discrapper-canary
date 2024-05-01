"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("692547"),
  u = a("481060"),
  d = a("730749"),
  c = a("427217"),
  f = a("246133"),
  E = a("383832"),
  h = a("474376"),
  _ = a("695346"),
  C = a("293273"),
  m = a("696202"),
  S = a("881201"),
  p = a("626135"),
  I = a("51144"),
  g = a("981631"),
  T = a("689938"),
  A = a("424288");

function N(e) {
  let {
    status: t,
    description: a,
    focused: s
  } = e;
  return (0, n.jsxs)("div", {
    className: A.statusItem,
    children: [(0, n.jsx)(u.Status, {
      status: t,
      className: A.icon,
      size: 10,
      color: s ? "currentColor" : void 0
    }), (0, n.jsx)("div", {
      className: A.status,
      children: (0, I.humanizeStatus)(t)
    }), null != a && (0, n.jsx)("div", {
      className: A.description,
      children: a
    })]
  })
}

function v(e) {
  let {
    customStatus: t
  } = e, a = e => {
    e.stopPropagation(), _.CustomStatusSetting.updateSetting(void 0)
  };
  return null != t ? (0, n.jsx)("div", {
    "aria-label": T.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
    children: (0, n.jsx)(c.default, {
      className: null != t.emoji ? A.customStatusWithEmoji : A.customStatusItem,
      activity: t,
      emojiClassName: A.customEmoji,
      textClassName: A.customText,
      placeholderText: T.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      children: (0, n.jsx)(u.Tooltip, {
        text: T.default.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS,
        children: e => (0, n.jsx)(u.Button, {
          ...e,
          className: A.clearStatusButton,
          onClick: a,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          tabIndex: -1,
          "aria-hidden": !0,
          children: (0, n.jsx)(m.default, {
            className: A.clearStatusIcon
          })
        })
      })
    })
  }) : (0, n.jsxs)("div", {
    className: i()(A.statusItem, A.__invalid_customStatusContentIcon),
    "aria-label": T.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
    children: [(0, n.jsx)("div", {
      className: A.customEmojiPlaceholder
    }), (0, n.jsx)("div", {
      className: A.status,
      children: T.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
    })]
  })
}

function L(e) {
  let {
    focused: t
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(A.statusItem, A.statusItemNoPadding, A.__invalid_customStatusContentIcon, A.switchAccountsItem),
    "aria-label": T.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
    children: [(0, n.jsx)(S.default, {
      width: 18,
      height: 18,
      className: A.switchAccountsIcon,
      color: t ? o.default.unsafe_rawColors.WHITE_500.css : "currentColor"
    }), (0, n.jsx)("div", {
      className: A.status,
      children: T.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE
    })]
  })
}
let R = e => {
  let {
    customStatus: t,
    onClose: l,
    analyticsContext: i,
    onSelect: r
  } = e, o = (0, h.useMultiAccountMenuItems)();
  s.useEffect(() => {
    p.default.track(g.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != t,
      location: i.location
    })
  }, []);
  let d = e => {
    (0, f.default)(e, void 0, {
      location: i.location
    })
  };
  return (0, n.jsxs)(u.Menu, {
    navId: "status-picker",
    variant: "fixed",
    "aria-label": T.default.Messages.SET_STATUS,
    onClose: l,
    onSelect: r,
    children: [(0, n.jsx)(u.MenuItem, {
      id: "online",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, n.jsx)(N, {
          status: u.StatusTypes.ONLINE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.ONLINE)
    }), (0, n.jsx)(u.MenuSeparator, {}), (0, n.jsx)(u.MenuItem, {
      id: "idle",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, n.jsx)(N, {
          status: u.StatusTypes.IDLE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.IDLE)
    }), (0, n.jsx)(u.MenuItem, {
      id: "dnd",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, n.jsx)(N, {
          status: u.StatusTypes.DND,
          description: T.default.Messages.STATUS_DND_HELP,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.DND)
    }), (0, n.jsx)(u.MenuItem, {
      id: "invisible",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, n.jsx)(N, {
          status: u.StatusTypes.INVISIBLE,
          description: T.default.Messages.STATUS_INVISIBLE_HELPER,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.INVISIBLE)
    }), (0, n.jsx)(u.MenuSeparator, {}), (0, n.jsx)(u.MenuItem, {
      id: "custom-status",
      keepItemStyles: !0,
      render: () => (0, n.jsx)(v, {
        customStatus: t
      }),
      action: () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("47484")]).then(a.bind(a, "211065"));
          return t => (0, n.jsx)(e, {
            ...t,
            sourceAnalyticsContext: i
          })
        })
      }
    }), (0, n.jsx)(u.MenuSeparator, {}), (0, n.jsx)(u.MenuItem, {
      id: "switch-account",
      action: E.default,
      label: e => {
        let {
          isFocused: t
        } = e;
        return (0, n.jsx)(L, {
          focused: t
        })
      },
      children: o
    }, "switch-account")]
  })
};
t.default = (0, d.default)(e => {
  let t = (0, r.useStateFromStores)([C.default], () => C.default.getCustomStatusActivity()),
    a = _.StatusSetting.useSetting();
  return (0, n.jsx)(R, {
    ...e,
    customStatus: t,
    status: a
  })
})