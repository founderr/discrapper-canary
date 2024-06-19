n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  r = n(460562),
  a = n(768581),
  o = n(682662),
  u = n(662146),
  c = n(459458);

function d(e) {
  let [t, d] = i.useState(!1);
  return (0, l.jsx)(o.H, {
    children: (0, l.jsx)(u.Z, {
      text: e.name,
      children: (0, l.jsx)(s.BlobMask, {
        className: c.circleIconButton,
        selected: t,
        lowerBadge: (0, l.jsx)(s.IconBadge, {
          icon: (0, s.makeIconCompat)(r.Z),
          disableColor: !0,
          className: c.geoRestrictedBadge
        }),
        children: (0, l.jsx)(s.NavItem, {
          name: e.name,
          onMouseEnter: () => {
            d(!0)
          },
          onMouseLeave: () => {
            d(!1)
          },
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, 210995));
              return n => (0, l.jsx)(t, {
                name: e.name,
                guildId: e.id,
                ...n
              })
            })
          },
          icon: null != e.icon ? a.ZP.getGuildIconURL({
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