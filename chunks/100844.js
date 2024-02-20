"use strict";
n.r(t), n.d(t, {
  CallTileCTA: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("77078"),
  l = n("551694");

function o(e) {
  let {
    children: t,
    onClick: n,
    className: r,
    tooltip: o
  } = e;
  return (0, a.jsx)(i.Tooltip, {
    text: o,
    children: e => {
      let {
        onClick: o,
        ...u
      } = e;
      return (0, a.jsx)(i.Button, {
        ...u,
        onClick: e => {
          null == n || n(e), null == o || o()
        },
        innerClassName: l.buttonReset,
        color: s(l.cta, r),
        size: i.Button.Sizes.MIN,
        children: t
      })
    }
  })
}