"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("220082"),
  a = n("768581"),
  o = n("772606"),
  l = n("689938"),
  u = n("217992");

function d(e) {
  let {
    application: t,
    imageUrl: n
  } = e, d = a.default.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: 24
  }), _ = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(), c = (0, s.default)("number" == typeof d ? "" : d, null != _ ? _ : "");
  return (0, i.jsxs)(i.Fragment, {
    children: [null != n ? (0, i.jsx)("img", {
      className: u.activityBackground,
      src: n,
      alt: l.default.Messages.IMAGE
    }) : (0, i.jsx)("div", {
      className: u.bannerBackground,
      style: {
        backgroundColor: c
      }
    }), (0, i.jsx)("div", {
      className: u.backButtonContainer,
      children: (0, i.jsx)(o.default, {})
    })]
  })
}