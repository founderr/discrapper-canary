n.d(t, {
  m: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(91192),
  a = n(589440),
  o = n(481060),
  u = n(595954),
  c = n(47705),
  d = n(359123);

function h(e) {
  var t;
  let {
    id: n,
    className: i,
    innerClassName: h,
    renderIcon: p,
    text: g,
    selected: m,
    trailing: C,
    showUnread: E = !1,
    ...f
  } = e, _ = (0, r.JA)(n), I = null !== (t = (0, a.q)(g)) && void 0 !== t ? t : "";
  return (0, l.jsx)("li", {
    children: (0, l.jsxs)(o.ClickableContainer, {
      ...f,
      buttonProps: {
        ..._,
        id: n,
        role: "button"
      },
      tag: "div",
      "aria-label": I,
      focusProps: {
        offset: {
          top: 1,
          bottom: 1,
          right: 4
        }
      },
      onContextMenu: null != f.onContextMenu ? f.onContextMenu : e => {
        e.stopPropagation()
      },
      className: s()(c.containerDefault, d.wrapper, {
        [d.modeSelected]: m
      }, i),
      children: [E ? (0, l.jsx)("div", {
        className: s()(d.unread, d.unreadImportant)
      }) : null, (0, l.jsx)("div", {
        className: s()([d.link, d.basicChannelRowLink, h]),
        children: (0, l.jsxs)("div", {
          className: u.content,
          children: [(0, l.jsx)("div", {
            className: d.iconContainer,
            children: p(d.icon)
          }), (0, l.jsx)("div", {
            className: d.name,
            "aria-hidden": !0,
            children: g
          }), C]
        })
      })]
    })
  })
}