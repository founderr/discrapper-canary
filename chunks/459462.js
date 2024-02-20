"use strict";
n.r(t), n.d(t, {
  Anchor: function() {
    return h
  }
}), n("70102");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("247716"),
  l = n("227645"),
  u = n("718776"),
  c = n("143435"),
  d = n("315733"),
  p = n("744777");

function h(e) {
  let {
    href: t,
    onClick: n,
    className: s,
    children: h,
    rel: f,
    target: E,
    useDefaultUnderlineStyles: _ = !0,
    title: m,
    style: S,
    focusProps: g,
    ...T
  } = e;
  null != t && null == n && (n = c.designConfig.getDefaultLinkInterceptor(t));
  let I = r.useContext(o.BlockInteractionsContext),
    v = {
      className: a(p.anchor, {
        [p.anchorUnderlineOnHover]: _
      }, s),
      href: t,
      onClick: n,
      rel: null != f ? f : void 0,
      target: null != E ? E : void 0,
      title: null != m ? m : void 0,
      style: null != S ? S : void 0
    };
  return (null != t && !(0, d.isSafeRedirect)(t) && (v.rel = "noreferrer noopener", v.target = "_blank"), I && delete v.href, null != n) ? (0, i.jsx)(l.Clickable, {
    tag: "a",
    ...T,
    ...v,
    onClick: n,
    focusProps: g,
    children: h
  }) : (0, i.jsx)(u.FocusRing, {
    ...g,
    children: (0, i.jsx)("a", {
      ...T,
      ...v,
      children: h
    })
  })
}