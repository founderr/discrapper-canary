"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  i = l("145131"),
  u = l("142716");

function o(e) {
  let {
    source: t,
    selectedSource: l
  } = e, {
    id: n,
    name: o,
    url: d
  } = t, c = (null == l ? void 0 : l.id) === n;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(i.default, {
      direction: i.default.Direction.VERTICAL,
      justify: i.default.Justify.CENTER,
      align: i.default.Align.CENTER,
      children: [(0, a.jsx)(i.default, {
        justify: i.default.Justify.CENTER,
        align: i.default.Align.CENTER,
        children: (0, a.jsx)("div", {
          style: {
            backgroundImage: "url(".concat(d, ")")
          },
          className: s(u.sourceThumbnail, {
            [u.selected]: c
          })
        })
      }), (0, a.jsx)(r.Text, {
        className: s(u.sourceName, {
          [u.selected]: c
        }),
        variant: "text-sm/normal",
        children: o
      })]
    })
  })
}