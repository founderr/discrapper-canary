l.d(n, {
  hi: function() {
    return u
  },
  kH: function() {
    return h
  },
  rz: function() {
    return m
  }
}), l(789020), l(47120), l(653041), l(524437);
var t = l(549817);
l(581883);
var i = l(984933),
  s = l(271383),
  a = l(9156),
  r = l(630388),
  d = l(152376),
  o = l(398758),
  c = l(372897);

function u(e) {
  var n, l;
  let t = (0, o.r1)(e),
    i = null !== (l = null === (n = s.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== l ? l : 0,
    d = (0, r.yE)(i, c.q.COMPLETED_ONBOARDING),
    u = a.ZP.getOptedInChannels(e).size > 0;
  return !t && !d && !u
}

function h(e) {
  if (u(e)) {
    m(e);
    return
  } {
    let n = (0, o.r1)(e);
    (0, d.QG)(e, !n)
  }
}

function m(e) {
  let {
    include: n = new Set,
    exclude: l = new Set
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = i.ZP.getChannels(e), a = [...s[i.sH], ...s[i.Zb]].filter(e => {
    let {
      channel: n
    } = e;
    return !n.isThread() && !l.has(n.id)
  }).map(e => {
    let {
      channel: n
    } = e;
    return n.id
  });
  n.forEach(e => a.push(e)), t.Z.onboardExistingMember(e, new Set(a))
}