n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(404975),
  c = n(455839),
  u = n(689938),
  d = n(421096);
t.Z = function(e) {
  let {
    guild: t
  } = e, [n, l] = s.useState(!1), E = s.useCallback(() => l(!0), [l]), h = s.useCallback(() => l(!0), [l]);
  return (0, i.jsx)("div", {
    className: a()(d.actionButtonsContainer, {
      [d.forceButtonsShow]: n
    }),
    children: (0, i.jsx)(o.ZP, {
      children: (0, i.jsx)(c.GuildDiscoveryMenuPopout, {
        onRequestOpen: E,
        onRequestClose: h,
        guild: t,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, i.jsx)(r.Tooltip, {
            text: u.Z.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: s,
                ...l
              } = e;
              return (0, i.jsx)(o.zx, {
                ...n,
                ...l,
                onClick: e => {
                  e.stopPropagation(), null == s || s(), t(e)
                },
                "aria-label": u.Z.Messages.MORE,
                children: (0, i.jsx)(r.MoreHorizontalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.overflowIcon
                })
              })
            }
          })
        }
      })
    })
  })
}