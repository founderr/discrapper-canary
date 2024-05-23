"use strict";
n.r(t), n.d(t, {
  SelectGuildOption: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var s = n("468194"),
  u = n("399606"),
  a = n("481060"),
  l = n("430824"),
  r = n("768581"),
  c = n("966572");

function o(e) {
  let {
    guildId: t
  } = e, n = (0, u.useStateFromStores)([l.default], () => l.default.getGuild(t));
  if (null == n) return null;
  let o = null;
  if (null != n.icon) {
    let e = r.default.getGuildIconURL({
      id: n.id,
      icon: n.icon,
      size: 40
    });
    o = (0, i.jsx)(a.Avatar, {
      src: e,
      "aria-label": n.name,
      size: a.AvatarSizes.SIZE_24
    })
  } else {
    let e = (0, s.getAcronym)(n.name).slice(0, 2);
    o = (0, i.jsx)(a.Text, {
      variant: "text-xs/semibold",
      className: c.acronym,
      "aria-hidden": !0,
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [o, (0, i.jsx)(a.Text, {
      variant: "text-md/semibold",
      className: c.text,
      children: n.name
    })]
  })
}