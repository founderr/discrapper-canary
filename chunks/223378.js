"use strict";
n.r(t), n.d(t, {
  useThrottleDurationForChannel: function() {
    return m
  },
  useStageChannelParticipantsListThrottled: function() {
    return p
  }
}), n("424973"), n("222007");
var l, a, s = n("884691"),
  i = n("917351"),
  r = n("446674"),
  o = n("560103"),
  u = n("191145"),
  d = n("334572"),
  c = n("488464"),
  f = n("567469"),
  h = n("998716");

function m(e) {
  let t = (0, f.useStageParticipantsCount)(e, h.StageChannelParticipantNamedIndex.AUDIENCE),
    [n, l] = s.useState(!1);
  return s.useEffect(() => {
    t > 100 ? l(!0) : t < 75 && l(!1)
  }, [t]), n ? 5e3 : 0
}

function p(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = function(e, t, n) {
      let l = (0, r.useStateFromStores)([c.default], () => [e, c.default.getParticipantsVersion(e)], [e], d.isVersionEqual),
        a = (0, r.useStateFromStores)([u.default], () => u.default.getSelectedParticipantId(e), [e]);
      return s.useMemo(() => {
        let s = [],
          r = [],
          o = -1,
          u = [];
        if (n) {
          let t = c.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER);
          for (let e of t)
            if (e.type === h.StageChannelParticipantTypes.STREAM) e.id !== a && u.push(e), o++;
            else break
        }
        let d = (e, t, n) => {
            let l = n ? e.filter((e, t) => e.id !== a && t > o) : e,
              u = (0, i.chunk)(l, t);
            r.push(u), s.push(u.length)
          },
          f = null != a ? c.default.getParticipant(e, a) : null;
        return (null == f ? void 0 : f.speaker) ? d([f], 1, !1) : d([], 1, !1), [h.StageChannelParticipantNamedIndex.SPEAKER, h.StageChannelParticipantNamedIndex.AUDIENCE].forEach(e => {
          d(c.default.getMutableParticipants(l[0], e), t[e], e === h.StageChannelParticipantNamedIndex.SPEAKER)
        }), d(u, 1, !1), [s, r]
      }, [l, t, a, n, e])
    }(e, t, l),
    [f, m] = a,
    [p, E] = (0, o.useThrottledState)(a, n, [t[h.StageChannelParticipantNamedIndex.AUDIENCE]]),
    g = [f[l ? 3 : 0], f[1], p[2]],
    S = [m[l ? 3 : 0], m[1], E[2]];
  return [g, S]
}(a = l || (l = {}))[a.SELECTED = 0] = "SELECTED", a[a.SPEAKER = 1] = "SPEAKER", a[a.AUDIENCE = 2] = "AUDIENCE", a[a.MEDIA = 3] = "MEDIA"