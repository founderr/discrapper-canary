"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("808268"),
  u = a("404975"),
  d = a("455839"),
  c = a("689938"),
  f = a("176350");
t.default = function(e) {
  let {
    guild: t
  } = e, [a, l] = s.useState(!1), E = s.useCallback(() => l(!0), [l]), h = s.useCallback(() => l(!0), [l]);
  return (0, n.jsx)("div", {
    className: i()(f.actionButtonsContainer, {
      [f.forceButtonsShow]: a
    }),
    children: (0, n.jsx)(u.default, {
      children: (0, n.jsx)(d.GuildDiscoveryMenuPopout, {
        onRequestOpen: E,
        onRequestClose: h,
        guild: t,
        children: e => {
          let {
            onClick: t,
            ...a
          } = e;
          return (0, n.jsx)(r.Tooltip, {
            text: c.default.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: s,
                ...l
              } = e;
              return (0, n.jsx)(u.Button, {
                ...a,
                ...l,
                onClick: e => {
                  e.stopPropagation(), null == s || s(), t(e)
                },
                "aria-label": c.default.Messages.MORE,
                children: (0, n.jsx)(o.default, {
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