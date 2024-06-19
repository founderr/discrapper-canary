n.d(t, {
  L: function() {
    return o
  },
  a: function() {
    return u
  }
});
var l = n(442837),
  i = n(480294),
  s = n(451478),
  r = n(817915),
  a = n(981631);

function o() {
  let e = (0, l.e7)([s.Z], () => s.Z.windowSize().width);
  return function(e, t) {
    return e > r.t && t
  }(e, (0, l.e7)([i.Z], () => i.Z.hasConsented(a.pjP.PERSONALIZATION)))
}

function u() {
  let e = s.Z.windowSize().width;
  return function(e, t) {
    return e > r.t && t
  }(e, i.Z.hasConsented(a.pjP.PERSONALIZATION))
}

function c(e, t) {
  return e > r.t && t
}