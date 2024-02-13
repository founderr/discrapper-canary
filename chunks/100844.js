"use strict";
n.r(t), n.d(t, {
  CallTileCTA: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  i = n.n(r),
  s = n("77078"),
  l = n("796863");

function u(e) {
  let {
    children: t,
    onClick: n,
    className: r,
    tooltip: u
  } = e;
  return (0, a.jsx)(s.Tooltip, {
    text: u,
    children: e => {
      let {
        onClick: u,
        ...o
      } = e;
      return (0, a.jsx)(s.Button, {
        ...o,
        onClick: e => {
          null == n || n(e), null == u || u()
        },
        innerClassName: l.buttonReset,
        color: i(l.cta, r),
        size: s.Button.Sizes.MIN,
        children: t
      })
    }
  })
}