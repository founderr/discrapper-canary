"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("481060"),
  i = n("460562"),
  r = n("768581"),
  o = n("682662"),
  u = n("662146"),
  d = n("634710");

function c(e) {
  let [t, c] = a.useState(!1);
  return (0, l.jsx)(o.ListItem, {
    children: (0, l.jsx)(u.default, {
      text: e.name,
      children: (0, l.jsx)(s.BlobMask, {
        className: d.circleIconButton,
        selected: t,
        lowerBadge: (0, l.jsx)(s.IconBadge, {
          icon: i.default,
          disableColor: !0,
          className: d.geoRestrictedBadge
        }),
        children: (0, l.jsx)(s.NavItem, {
          name: e.name,
          onMouseEnter: () => {
            c(!0)
          },
          onMouseLeave: () => {
            c(!1)
          },
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, "210995"));
              return n => (0, l.jsx)(t, {
                name: e.name,
                guildId: e.id,
                ...n
              })
            })
          },
          icon: null != e.icon ? r.default.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            canAnimate: !1,
            size: 42
          }) : null
        })
      })
    })
  })
}