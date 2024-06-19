n.d(t, {
  Es: function() {
    return c
  },
  Yp: function() {
    return d
  },
  bt: function() {
    return u
  }
}), n(47120);
var l = n(470079),
  i = n(392711),
  s = n(442837),
  a = n(413523),
  r = n(878884),
  o = n(413402);

function c(e, t) {
  let n = (0, o.M)(),
    a = (0, s.e7)([r.Z], () => n ? r.Z.getDesyncedVoiceStates(e) : null);
  return l.useMemo(() => (function(e, t) {
    if (!(0, o.i)() || null == e || 0 === e.length) return t;
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

function u(e, t) {
  let n = function(e) {
    let t = (0, o.M)();
    return (0, s.e7)([r.Z], () => t ? r.Z.getDesyncedParticipants(e) : null)
  }(e);
  return l.useMemo(() => (function(e, t) {
    if (!(0, o.i)() || null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, i.sortedIndexBy)(n, e, e => (0, a.Yr)(e)), 0, e)
    }), n
  })(n, t), [n, t])
}

function d(e, t) {
  let n = (0, o.M)(),
    i = (0, s.e7)([r.Z], () => n ? r.Z.getDesyncedUserIds(e) : null);
  return l.useMemo(() => {
    let e = new Set;
    return t.forEach(t => e.add(t)), null == i || i.forEach(t => e.add(t)), e
  }, [i, t])
}