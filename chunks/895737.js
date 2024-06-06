"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var i = s("735250"),
  l = s("470079"),
  r = s("481060"),
  a = s("682864"),
  n = s("86813"),
  d = s("826026"),
  o = s("135163"),
  u = s("891561"),
  c = s("333866"),
  C = s("689938"),
  _ = s("880789");

function f(e) {
  let {
    closePopout: t,
    sortOptionContext: s
  } = e, {
    sortOption: a,
    setSortOption: n,
    onReset: d
  } = s, o = l.useMemo(() => c.DISPLAYED_SORT_OPTIONS.map(e => (0, i.jsx)(r.MenuRadioItem, {
    id: "".concat(e),
    group: "sort-by",
    label: (0, c.getGuildProductSortOptionLabel)(e),
    action: () => n(e),
    checked: a === e
  }, e)), [n, a]);
  return (0, i.jsx)("div", {
    className: _.__invalid_container,
    children: (0, i.jsxs)(r.Menu, {
      navId: "sort-and-view",
      "aria-label": C.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_ARIA,
      hideScroller: !0,
      onClose: t,
      onSelect: t,
      children: [(0, i.jsx)(r.MenuGroup, {
        label: C.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_SORT_BY_LABEL,
        children: o
      }), (0, i.jsx)(r.MenuGroup, {
        children: (0, i.jsx)(r.MenuItem, {
          id: "reset-all",
          className: _.clearText,
          label: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: C.default.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: d
        })
      })]
    })
  })
}

function h() {
  let e = (0, u.useGuildProductsSortOptionContext)(),
    t = (0, c.getGuildProductSortOptionLabel)(e.sortOption);
  return (0, i.jsx)(r.Popout, {
    renderPopout: t => {
      let {
        closePopout: s
      } = t;
      return (0, i.jsx)(f, {
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
        className: _.sortDropdown,
        innerClassName: _.sortDropdownInner,
        children: [(0, i.jsx)(o.default, {
          "aria-label": C.default.Messages.GUILD_STORE_SORT_OPTION_TOGGLE_ARIA
        }), (0, i.jsx)(a.default, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: t
        }), l ? (0, i.jsx)(d.default, {
          width: 20
        }) : (0, i.jsx)(n.default, {
          width: 20
        })]
      })
    }
  })
}