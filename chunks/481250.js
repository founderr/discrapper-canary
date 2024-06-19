r.d(t, {
  V: function() {
    return C
  },
  a: function() {
    return v
  }
}), r(653041), r(47120);
var n = r(735250);
r(470079);
var a = r(120356),
  i = r.n(a),
  s = r(481060),
  o = r(304680),
  l = r(763520),
  c = r(131951),
  d = r(226961),
  u = r(285952),
  m = r(40300),
  p = r(513547),
  h = r(65154),
  g = r(16281),
  f = r(331651);
let y = {
  [h.Z.NO_OVERRIDE]: "None",
  [h.Z.LOW]: "Low Quality Stream",
  [h.Z.HIGH]: "High Quality Stream"
};

function v(e) {
  let t = [],
    r = 0;
  for (e.length % 2 != 0 && e.push((0, n.jsx)(u.Z, {
      basis: "50%",
      grow: 0
    }, r++)); e.length > 0;) t.push((0, n.jsx)(u.Z, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, r++));
  return t
}
let D = {
  ssrc: 1,
  codec: 2
};

function C(e, t, r, a, C) {
  return e.map((E, R) => {
    var Z, S;
    let F = [];
    for (let e of Object.keys(E).sort((e, t) => {
        let r = D[e],
          n = D[t];
        if (r !== n) return void 0 === r ? 1 : void 0 === n ? -1 : r - n;
        return d.Pz[e] !== d.Pz[t] ? d.Pz[e] ? 1 : -1 : e > t ? 1 : -1
      })) {
      let t = E[e];
      if (!p.al[e] && void 0 !== t) F.push((0, n.jsx)(p.ck, {
        section: a,
        label: e,
        value: t
      }, e))
    }
    return (0, n.jsxs)(s.FormSection, {
      className: f.marginBottom40,
      title: E.type,
      titleClassName: g.sectionHeader,
      children: ["video" === E.type && null != r && null != a && null != C && function(e, t, r, a) {
        let s = a.get(t, r, e.ssrc);
        return null != s ? (0, n.jsx)("div", {
          className: i()(g.videoWrapper, f.marginBottom40),
          children: (0, n.jsx)(m.Z, {
            streamId: s,
            videoComponent: c.Z.getMediaEngine().Video,
            paused: !1,
            videoSpinnerContext: l.m.REPLAY_VIDEO_STREAM,
            userId: r
          })
        }) : null
      }(E, r, a, C), v(F), "video" === E.type && R === e.length - 1 && null != r && null != a && null != C && (Z = a, S = t, (0, n.jsx)(u.Z, {
        className: f.marginBottom20,
        children: (0, n.jsxs)(u.Z.Child, {
          basis: "100%",
          children: [(0, n.jsx)(s.FormTitle, {
            tag: s.FormTitleTags.H5,
            className: f.marginBottom8,
            children: "Simulcast Override"
          }), (0, n.jsx)(s.SingleSelect, {
            value: d.ZP.getSimulcastDebugOverride(Z, S),
            onChange: e => {
              o.MS(Z, S, e)
            },
            options: Object.values(h.Z).map(e => ({
              value: e,
              label: y[e]
            }))
          })]
        })
      }))]
    }, "".concat(E.type, " + ").concat(E.ssrc))
  })
}