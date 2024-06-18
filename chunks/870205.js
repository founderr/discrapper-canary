"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250),
  r = n(481060),
  s = n(984168),
  o = n(314734),
  a = n(689938),
  l = n(36e3);

function u(e) {
  let t, {
    sortOrder: n,
    onSortOptionClick: u
  } = e;
  switch (n) {
    case o.bS.POPULAR:
      t = a.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
      break;
    case o.bS.ALPHABETICAL:
      t = a.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL
  }
  return (0, i.jsx)(r.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(s.Z, {
        sortOrder: n,
        onSortOptionClick: u,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, n) => {
      let {
        isShown: s
      } = n;
      return (0, i.jsxs)(r.Button, {
        ...e,
        size: r.Button.Sizes.MIN,
        color: r.Button.Colors.CUSTOM,
        className: l.sortDropdown,
        innerClassName: l.sortDropdownInner,
        "aria-label": a.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
        children: [(0, i.jsx)(r.ArrowsUpDownIcon, {
          size: "xs",
          color: "currentColor",
          className: l.sortIconMargin
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: t
        }), s ? (0, i.jsx)(r.ChevronSmallUpIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, i.jsx)(r.ChevronSmallDownIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      })
    }
  })
}