"use strict";
r.r(t), r.d(t, {
  renderStreams: function() {
    return y
  },
  renderTwoColumns: function() {
    return h
  }
}), r("653041"), r("47120");
var a = r("735250");
r("470079");
var n = r("120356"),
  i = r.n(n),
  s = r("481060"),
  l = r("763520"),
  o = r("131951"),
  d = r("226961"),
  u = r("285952"),
  c = r("40300"),
  m = r("513547"),
  f = r("746057"),
  p = r("611273");

function h(e) {
  let t = [],
    r = 0;
  for (e.length % 2 != 0 && e.push((0, a.jsx)(u.default, {
      basis: "50%",
      grow: 0
    }, r++)); e.length > 0;) t.push((0, a.jsx)(u.default, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, r++));
  return t
}
let g = {
  ssrc: 1,
  codec: 2
};

function y(e, t, r, n) {
  return e.map(e => {
    let u = [];
    for (let t of Object.keys(e).sort((e, t) => {
        let r = g[e],
          a = g[t];
        if (r !== a) return void 0 === r ? 1 : void 0 === a ? -1 : r - a;
        return d.graphs[e] !== d.graphs[t] ? d.graphs[e] ? 1 : -1 : e > t ? 1 : -1
      })) {
      let n = e[t];
      !m.hidden[t] && void 0 !== n && u.push((0, a.jsx)(m.Item, {
        section: r,
        label: t,
        value: n
      }, t))
    }
    return (0, a.jsxs)(s.FormSection, {
      className: p.marginBottom40,
      title: e.type,
      titleClassName: f.sectionHeader,
      children: ["video" === e.type && null != t && null != r && null != n && function(e, t, r, n) {
        let s = n.get(t, r, e.ssrc);
        return null != s ? (0, a.jsx)("div", {
          className: i()(f.videoWrapper, p.marginBottom40),
          children: (0, a.jsx)(c.default, {
            streamId: s,
            videoComponent: o.default.getMediaEngine().Video,
            paused: !1,
            videoSpinnerContext: l.VideoSpinnerContext.REPLAY_VIDEO_STREAM,
            userId: r
          })
        }) : null
      }(e, t, r, n), h(u)]
    }, "".concat(e.type, " + ").concat(e.ssrc))
  })
}