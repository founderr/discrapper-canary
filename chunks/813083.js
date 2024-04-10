"use strict";
a.r(t), a("627341");
var l, s, r = a("735250");
a("470079");
var n = a("803997"),
  o = a.n(n),
  i = a("278074"),
  u = a("26290"),
  c = a("884697"),
  d = a("689938"),
  f = a("628587");
(s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: a,
    className: l
  } = e;
  if (null == t.unpublishedAt) return null;
  let s = (0, c.getDaysRemaining)(t.unpublishedAt);

  function n(e) {
    return (0, r.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: o()(f.badge, l)
    })
  }
  return (0, i.match)([a, s > 1]).with(["card", !0], () => null).with(["banner", !0], () => n(d.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: s
  }))).with(["modal", !0], () => n(d.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: s
  }))).otherwise(() => n(d.default.Messages.COLLECTIBLES_LAST_DAY))
}