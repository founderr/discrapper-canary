"use strict";
n.r(t), n.d(t, {
  FormNoticeTypes: function() {
    return d
  },
  FormNoticeImagePositions: function() {
    return p
  },
  FormNotice: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("659397"),
  o = n("145131"),
  l = n("329272"),
  u = n("818810"),
  c = n("468701");
let d = a.Card.Types,
  p = {
    LEFT: "left",
    RIGHT: "right"
  };

function h(e) {
  let t, n, {
      type: r = a.Card.Types.DANGER,
      imageData: d,
      button: h,
      className: f,
      iconClassName: E,
      title: _,
      body: m,
      style: S,
      align: g = o.default.Align.START
    } = e,
    T = o.default.Direction.HORIZONTAL;
  if (null != d) {
    let {
      position: e,
      ...n
    } = d;
    t = (0, i.jsx)(o.default.Child, {
      grow: 0,
      shrink: 0,
      children: (0, i.jsx)("img", {
        alt: "",
        className: s(c.icon, E),
        ...n
      })
    }), e === p.RIGHT && (T = o.default.Direction.HORIZONTAL_REVERSE)
  } else null != h && (n = h);
  let I = !0;
  return r === a.Card.Types.PRIMARY && (I = !1), (0, i.jsx)(a.Card, {
    className: s(c.formNotice, f),
    type: r,
    style: S,
    children: (0, i.jsxs)(o.default, {
      direction: T,
      align: g,
      children: [t, (0, i.jsxs)(o.default.Child, {
        children: [null != _ && "" !== _ ? (0, i.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          className: s(c.formNoticeTitle, {
            [c.whiteText]: I
          }),
          faded: !0,
          children: _
        }) : null, (0, i.jsx)(l.FormText, {
          className: s(c.formNoticeBody, {
            [c.whiteText]: I
          }),
          children: m
        }), n]
      })]
    })
  })
}
h.Types = a.Card.Types