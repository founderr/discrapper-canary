"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("782340"),
  o = n("326436");

function u(e) {
  let {
    className: t,
    src: n,
    unicodeEmoji: i,
    name: u,
    size: d = 20,
    enableTooltip: c = !0,
    enableHeight: f = !0,
    onClick: m
  } = e;
  if (null == n && null == i) return null;
  let p = e => {
    let c = (0, l.jsx)("img", {
      alt: "",
      "aria-label": r.default.Messages.ROLE_ICON_ALT_TEXT.format({
        name: u
      }),
      className: a(o.roleIcon, t, {
        [o.clickable]: null != m
      }),
      height: f ? d : void 0,
      src: n,
      width: d,
      ...e
    });
    return (null != i && (c = (0, l.jsx)("img", {
      alt: "",
      "aria-label": i.allNamesString,
      className: a(o.roleIcon, t, {
        [o.clickable]: null != m
      }),
      height: f ? d : void 0,
      src: i.url,
      width: d,
      ...e
    })), null == m) ? (0, l.jsx)(s.FocusRing, {
      children: c
    }) : (0, l.jsx)(s.Clickable, {
      onClick: m,
      tag: "span",
      children: c
    })
  };
  return (0, l.jsx)(s.Tooltip, {
    text: u,
    "aria-label": !1,
    shouldShow: c,
    children: e => p(e)
  })
}