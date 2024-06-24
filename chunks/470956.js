n.d(t, {
  Es: function() {
    return h
  },
  Eu: function() {
    return E
  },
  Yp: function() {
    return p
  },
  bt: function() {
    return m
  }
}), n(47120);
var l = n(470079),
  i = n(392711),
  s = n(442837),
  a = n(413523),
  r = n(314897),
  o = n(878884),
  c = n(19780),
  u = n(979651),
  d = n(413402);

function h(e, t) {
  let n = (0, d.M)(),
    a = (0, s.e7)([o.Z], () => n ? o.Z.getDesyncedVoiceStates(e) : null);
  return l.useMemo(() => (function(e, t) {
    if (!(0, d.i)() || null == e || 0 === e.length) return t;
    let n = null != t ? [...t] : [];
    return e.forEach(e => {
      n.splice((0, i.sortedIndexBy)(n, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), n
  })(a, t), [a, t])
}

function m(e, t) {
  let n = function(e) {
    let t = (0, d.M)();
    return (0, s.e7)([o.Z], () => t ? o.Z.getDesyncedParticipants(e) : null)
  }(e);
  return l.useMemo(() => (function(e, t) {
    if (!(0, d.i)() || null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, i.sortedIndexBy)(n, e, e => (0, a.Yr)(e)), 0, e)
    }), n
  })(n, t), [n, t])
}

function p(e, t) {
  let n = (0, d.M)(),
    i = (0, s.e7)([o.Z], () => n ? o.Z.getDesyncedUserIds(e) : null);
  return l.useMemo(() => {
    let e = new Set;
    return t.forEach(t => e.add(t)), null == i || i.forEach(t => e.add(t)), e
  }, [i, t])
}

function E(e, t) {
  let n = (0, d.M)(),
    [i, a] = l.useState(!1),
    o = (0, s.e7)([r.default], () => r.default.getId() === t),
    h = (0, s.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && c.Z.isUserConnected(t)),
    m = (0, s.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
  return l.useEffect(() => {
    h && a(!0)
  }, [h]), n && !o && i && m
}