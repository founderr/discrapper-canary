"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var i = s("735250"),
  l = s("470079"),
  r = s("481060"),
  a = s("86813"),
  n = s("826026"),
  d = s("135163"),
  o = s("891561"),
  u = s("333866"),
  c = s("689938"),
  C = s("880789");

function _(e) {
  let {
    closePopout: t,
    sortOptionContext: s
  } = e, {
    sortOption: a,
    setSortOption: n,
    onReset: d
  } = s, o = l.useMemo(() => u.DISPLAYED_SORT_OPTIONS.map(e => (0, i.jsx)(r.MenuRadioItem, {
    id: "".concat(e),
    group: "sort-by",
    label: (0, u.getGuildProductSortOptionLabel)(e),
    action: () => n(e),
    checked: a === e
  }, e)), [n, a]);
  return (0, i.jsx)("div", {
    className: C.__invalid_container,
    children: (0, i.jsxs)(r.Menu, {
      navId: "sort-and-view",
      "aria-label": c.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_ARIA,
      hideScroller: !0,
      onClose: t,
      onSelect: t,
      children: [(0, i.jsx)(r.MenuGroup, {
        label: c.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_SORT_BY_LABEL,
        children: o
      }), (0, i.jsx)(r.MenuGroup, {
        children: (0, i.jsx)(r.MenuItem, {
          id: "reset-all",
          className: C.clearText,
          label: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: c.default.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: d
        })
      })]
    })
  })
}

function f() {
  let e = (0, o.useGuildProductsSortOptionContext)(),
    t = (0, u.getGuildProductSortOptionLabel)(e.sortOption);
  return (0, i.jsx)(r.Popout, {
    renderPopout: t => {
      let {
        closePopout: s
      } = t;
      return (0, i.jsx)(_, {
        closePopout: s,
        sortOptionContext: e
      })
    },
    position: "bottom",
    align: "left",
    children: (e, s) => {
      let {
        isShown: l
      } = s;
      return (0, i.jsxs)(r.Button, {
        ...e,
        size: r.Button.Sizes.MIN,
        color: r.Button.Colors.CUSTOM,
        className: C.sortDropdown,
        innerClassName: C.sortDropdownInner,
        children: [(0, i.jsx)(d.default, {
          "aria-label": c.default.Messages.GUILD_STORE_SORT_OPTION_TOGGLE_ARIA
        }), (0, i.jsx)(r.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: t
        }), l ? (0, i.jsx)(n.default, {
          width: 20
        }) : (0, i.jsx)(a.default, {
          width: 20
        })]
      })
    }
  })
}