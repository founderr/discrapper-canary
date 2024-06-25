n.d(t, {
  Dx: function() {
    return E
  },
  aP: function() {
    return p
  }
}), n(653041), n(47120);
var l, i, s = n(470079),
  a = n(392711),
  r = n(442837),
  o = n(638730),
  c = n(358221),
  u = n(136015),
  d = n(565799),
  h = n(431328),
  m = n(501655);

function E(e) {
  let t = (0, h.Rk)(e, m.pV.AUDIENCE),
    [n, l] = s.useState(!1);
  return s.useEffect(() => {
    t > 100 ? l(!0) : t < 75 && l(!1)
  }, [t]), n ? 5e3 : 0
}

function p(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = function(e, t, n) {
      let l = (0, r.e7)([d.Z], () => [e, d.Z.getParticipantsVersion(e)], [e], u.Q),
        i = (0, r.e7)([c.Z], () => c.Z.getSelectedParticipantId(e), [e]);
      return s.useMemo(() => {
        let s = [],
          r = [],
          o = -1,
          c = [];
        if (n)
          for (let t of d.Z.getMutableParticipants(e, m.pV.SPEAKER))
            if (t.type === m.Ui.STREAM) t.id !== i && c.push(t), o++;
            else break;
        let u = (e, t, n) => {
            let l = n ? e.filter((e, t) => e.id !== i && t > o) : e,
              c = (0, a.chunk)(l, t);
            r.push(c), s.push(c.length)
          },
          h = null != i ? d.Z.getParticipant(e, i) : null;
        return (null == h ? void 0 : h.speaker) ? u([h], 1, !1) : u([], 1, !1), [m.pV.SPEAKER, m.pV.AUDIENCE].forEach(e => {
          u(d.Z.getMutableParticipants(l[0], e), t[e], e === m.pV.SPEAKER)
        }), u(c, 1, !1), [s, r]
      }, [l, t, i, n, e])
    }(e, t, l),
    [h, E] = i,
    [p, g] = (0, o.T)(i, n, [t[m.pV.AUDIENCE]]),
    f = [h[l ? 3 : 0], h[1], p[2]];
  return [f, [E[l ? 3 : 0], E[1], g[2]]]
}(i = l || (l = {}))[i.SELECTED = 0] = "SELECTED", i[i.SPEAKER = 1] = "SPEAKER", i[i.AUDIENCE = 2] = "AUDIENCE", i[i.MEDIA = 3] = "MEDIA"