i.d(n, {
  m: function() {
    return c
  }
});
var a = i(735250);
i(470079);
var l = i(468194),
  t = i(399606),
  s = i(481060),
  r = i(430824),
  o = i(768581),
  u = i(304200);

function c(e) {
  let {
    guildId: n
  } = e, i = (0, t.e7)([r.Z], () => r.Z.getGuild(n));
  if (null == i) return null;
  let c = null;
  if (null != i.icon) {
    let e = o.ZP.getGuildIconURL({
      id: i.id,
      icon: i.icon,
      size: 40
    });
    c = (0, a.jsx)(s.Avatar, {
      src: e,
      "aria-label": i.name,
      size: s.AvatarSizes.SIZE_24
    })
  } else {
    let e = (0, l.Zg)(i.name).slice(0, 2);
    c = (0, a.jsx)(s.Text, {
      variant: "text-xs/semibold",
      className: u.acronym,
      "aria-hidden": !0,
      children: e
    })
  }
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [c, (0, a.jsx)(s.Text, {
      variant: "text-md/semibold",
      className: u.text,
      children: i.name
    })]
  })
}