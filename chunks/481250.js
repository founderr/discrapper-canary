"use strict";
a.r(t), a.d(t, {
  renderStreams: function() {
    return v
  },
  renderTwoColumns: function() {
    return S
  }
}), a("653041"), a("47120");
var r = a("735250");
a("470079");
var n = a("120356"),
  i = a.n(n),
  l = a("481060"),
  s = a("304680"),
  o = a("763520"),
  u = a("131951"),
  d = a("226961"),
  c = a("285952"),
  m = a("40300"),
  f = a("513547"),
  p = a("65154"),
  h = a("746057"),
  g = a("611273");
let y = {
  [p.SimulcastOverrideQuality.NO_OVERRIDE]: "None",
  [p.SimulcastOverrideQuality.LOW]: "Low Quality Stream",
  [p.SimulcastOverrideQuality.HIGH]: "High Quality Stream"
};

function S(e) {
  let t = [],
    a = 0;
  for (e.length % 2 != 0 && e.push((0, r.jsx)(c.default, {
      basis: "50%",
      grow: 0
    }, a++)); e.length > 0;) t.push((0, r.jsx)(c.default, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, a++));
  return t
}
let C = {
  ssrc: 1,
  codec: 2
};

function v(e, t, a, n, v) {
  return e.map((D, E) => {
    var R, T;
    let F = [];
    for (let e of Object.keys(D).sort((e, t) => {
        let a = C[e],
          r = C[t];
        if (a !== r) return void 0 === a ? 1 : void 0 === r ? -1 : a - r;
        return d.graphs[e] !== d.graphs[t] ? d.graphs[e] ? 1 : -1 : e > t ? 1 : -1
      })) {
      let t = D[e];
      !f.hidden[e] && void 0 !== t && F.push((0, r.jsx)(f.Item, {
        section: n,
        label: e,
        value: t
      }, e))
    }
    return (0, r.jsxs)(l.FormSection, {
      className: g.marginBottom40,
      title: D.type,
      titleClassName: h.sectionHeader,
      children: ["video" === D.type && null != a && null != n && null != v && function(e, t, a, n) {
        let l = n.get(t, a, e.ssrc);
        return null != l ? (0, r.jsx)("div", {
          className: i()(h.videoWrapper, g.marginBottom40),
          children: (0, r.jsx)(m.default, {
            streamId: l,
            videoComponent: u.default.getMediaEngine().Video,
            paused: !1,
            videoSpinnerContext: o.VideoSpinnerContext.REPLAY_VIDEO_STREAM,
            userId: a
          })
        }) : null
      }(D, a, n, v), S(F), "video" === D.type && E === e.length - 1 && null != a && null != n && null != v && (R = n, T = t, (0, r.jsx)(c.default, {
        className: g.marginBottom20,
        children: (0, r.jsxs)(c.default.Child, {
          basis: "100%",
          children: [(0, r.jsx)(l.FormTitle, {
            tag: l.FormTitleTags.H5,
            className: g.marginBottom8,
            children: "Simulcast Override"
          }), (0, r.jsx)(l.SingleSelect, {
            value: d.default.getSimulcastDebugOverride(R, T),
            onChange: e => {
              s.setSimulcastDebugOverride(R, T, e)
            },
            options: Object.values(p.SimulcastOverrideQuality).map(e => ({
              value: e,
              label: y[e]
            }))
          })]
        })
      }))]
    }, "".concat(D.type, " + ").concat(D.ssrc))
  })
}