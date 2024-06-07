"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("481060"),
  s = n("86813"),
  a = n("826026"),
  o = n("135163"),
  l = n("984168"),
  u = n("314734"),
  d = n("689938"),
  _ = n("36000");

function c(e) {
  let t, {
    sortOrder: n,
    onSortOptionClick: c
  } = e;
  switch (n) {
    case u.CommandListSortOrder.POPULAR:
      t = d.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
      break;
    case u.CommandListSortOrder.ALPHABETICAL:
      t = d.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL
  }
  return (0, i.jsx)(r.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(l.default, {
        sortOrder: n,
        onSortOptionClick: c,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, n) => {
      let {
        isShown: l
      } = n;
      return (0, i.jsxs)(r.Button, {
        ...e,
        size: r.Button.Sizes.MIN,
        color: r.Button.Colors.CUSTOM,
        className: _.sortDropdown,
        innerClassName: _.sortDropdownInner,
        "aria-label": d.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
        children: [(0, i.jsx)(o.default, {
          className: _.sortIconMargin
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: t
        }), l ? (0, i.jsx)(a.default, {
          width: 20
        }) : (0, i.jsx)(s.default, {
          width: 20
        })]
      })
    }
  })
}