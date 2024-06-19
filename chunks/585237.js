var s, i, l = n(735250);
n(470079);
var a = n(481060),
  r = n(285952),
  o = n(226689);
(s = i || (i = {})).SMALL = "SMALL", s.MEDIUM = "MEDIUM", s.LARGE = "LARGE";
let c = {
    SMALL: o.dropdownSmall,
    MEDIUM: o.dropdownMedium,
    LARGE: o.dropdownLarge
  },
  u = e => {
    let {
      onDropdownClick: t,
      children: n,
      contentClassName: s,
      dropdownSize: i = "MEDIUM",
      ...u
    } = e;
    return (0, l.jsx)(a.Button, {
      ...u,
      children: (0, l.jsxs)(r.Z, {
        align: r.Z.Align.CENTER,
        children: [(0, l.jsx)(r.Z.Child, {
          className: s,
          children: n
        }), null != t ? (0, l.jsxs)(a.Clickable, {
          className: c[i],
          onClick: e => {
            e.stopPropagation(), null != t && t(e)
          },
          children: [(0, l.jsx)("div", {
            className: o.arrowSeparator
          }), (0, l.jsx)(a.ChevronSmallDownIcon, {
            size: "md",
            color: "currentColor",
            className: o.dropdownArrow
          })]
        }) : null]
      })
    })
  };
u.DropdownSizes = i, u.Sizes = a.Button.Sizes, u.Colors = a.Button.Colors, u.Looks = a.Button.Looks, t.Z = u