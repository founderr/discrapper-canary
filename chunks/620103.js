"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("837899"),
  u = n("849467"),
  d = n("155207"),
  c = n("980423"),
  f = n("215536"),
  h = n("232027"),
  m = a.memo(function(e) {
    let {
      label: t,
      participantCount: n,
      onClick: a,
      className: s,
      collapsed: m,
      speakers: p,
      channel: E,
      isStreamLive: S
    } = e;
    return (0, l.jsxs)(r.Clickable, {
      onClick: a,
      className: i(h.container, s),
      children: [null == p ? (0, l.jsx)(d.default, {
        width: 20,
        height: 20,
        className: h.micIcon
      }) : (0, l.jsx)(u.default, {
        width: 20,
        height: 20,
        className: h.micIcon
      }), (0, l.jsxs)(r.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        className: h.text,
        children: [t, " — ", n]
      }), m && null != E && null != p && p.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.default, {
          channel: E,
          speakers: p
        }), S && (0, l.jsx)(c.default, {})]
      }), (0, l.jsx)(o.default, {
        width: 20,
        height: 20,
        className: i(h.downIcon, {
          [h.upIcon]: m
        })
      })]
    })
  })