t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250),
  r = t(470079),
  i = t(481060),
  l = t(891561),
  o = t(333866),
  a = t(689938),
  c = t(620189);

function d(e) {
  let {
    closePopout: s,
    sortOptionContext: t
  } = e, {
    sortOption: l,
    setSortOption: d,
    onReset: C
  } = t, u = r.useMemo(() => o.kL.map(e => (0, n.jsx)(i.MenuRadioItem, {
    id: "".concat(e),
    group: "sort-by",
    label: (0, o.eJ)(e),
    action: () => d(e),
    checked: l === e
  }, e)), [d, l]);
  return (0, n.jsx)("div", {
    className: c.__invalid_container,
    children: (0, n.jsxs)(i.Menu, {
      navId: "sort-and-view",
      "aria-label": a.Z.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_ARIA,
      hideScroller: !0,
      onClose: s,
      onSelect: s,
      children: [(0, n.jsx)(i.MenuGroup, {
        label: a.Z.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_SORT_BY_LABEL,
        children: u
      }), (0, n.jsx)(i.MenuGroup, {
        children: (0, n.jsx)(i.MenuItem, {
          id: "reset-all",
          className: c.clearText,
          label: (0, n.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: a.Z.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: C
        })
      })]
    })
  })
}

function C() {
  let e = (0, l.s)(),
    s = (0, o.eJ)(e.sortOption);
  return (0, n.jsx)(i.Popout, {
    renderPopout: s => {
      let {
        closePopout: t
      } = s;
      return (0, n.jsx)(d, {
        closePopout: t,
        sortOptionContext: e
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: r
      } = t;
      return (0, n.jsxs)(i.Button, {
        ...e,
        size: i.Button.Sizes.MIN,
        color: i.Button.Colors.CUSTOM,
        className: c.sortDropdown,
        innerClassName: c.sortDropdownInner,
        children: [(0, n.jsx)(i.ArrowsUpDownIcon, {
          size: "xs",
          color: "currentColor",
          "aria-label": a.Z.Messages.GUILD_STORE_SORT_OPTION_TOGGLE_ARIA
        }), (0, n.jsx)(i.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: s
        }), r ? (0, n.jsx)(i.ChevronSmallUpIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, n.jsx)(i.ChevronSmallDownIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      })
    }
  })
}