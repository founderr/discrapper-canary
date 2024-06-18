"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(689938),
  l = n(785455);

function u(e) {
  let t, {
    className: n,
    src: r,
    unicodeEmoji: u,
    name: _,
    size: c = 20,
    enableTooltip: d = !0,
    enableHeight: E = !0,
    onClick: I
  } = e;
  if (null == r && null == u) return null;
  return (0, i.jsx)(o.TooltipContainer, {
    text: _,
    "aria-label": !1,
    shouldShow: d,
    element: "span",
    children: (t = (0, i.jsx)("img", {
      alt: "",
      "aria-label": a.Z.Messages.ROLE_ICON_ALT_TEXT.format({
        name: _
      }),
      className: s()(l.roleIcon, n, {
        [l.clickable]: null != I
      }),
      height: E ? c : void 0,
      src: r,
      width: c
    }), (null != u && (t = (0, i.jsx)("img", {
      alt: "",
      "aria-label": u.allNamesString,
      className: s()(l.roleIcon, n, {
        [l.clickable]: null != I
      }),
      height: E ? c : void 0,
      src: u.url,
      width: c
    })), null == I) ? (0, i.jsx)(o.FocusRing, {
      offset: {
        left: 5
      },
      children: t
    }) : (0, i.jsx)(o.Clickable, {
      onClick: I,
      tag: "span",
      focusProps: {
        offset: {
          left: 5
        }
      },
      children: t
    }))
  })
}