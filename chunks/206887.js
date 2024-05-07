"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("481060"),
  o = n("808268"),
  u = n("404975"),
  d = n("455839"),
  c = n("689938"),
  f = n("176350");
t.default = function(e) {
  let {
    guild: t
  } = e, [n, i] = s.useState(!1), E = s.useCallback(() => i(!0), [i]), h = s.useCallback(() => i(!0), [i]);
  return (0, a.jsx)("div", {
    className: l()(f.actionButtonsContainer, {
      [f.forceButtonsShow]: n
    }),
    children: (0, a.jsx)(u.default, {
      children: (0, a.jsx)(d.GuildDiscoveryMenuPopout, {
        onRequestOpen: E,
        onRequestClose: h,
        guild: t,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(r.Tooltip, {
            text: c.default.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: s,
                ...i
              } = e;
              return (0, a.jsx)(u.Button, {
                ...n,
                ...i,
                onClick: e => {
                  e.stopPropagation(), null == s || s(), t(e)
                },
                "aria-label": c.default.Messages.MORE,
                children: (0, a.jsx)(o.default, {
                  className: f.overflowIcon
                })
              })
            }
          })
        }
      })
    })
  })
}