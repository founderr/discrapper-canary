s.d(t, {
  C7: function() {
    return l
  },
  kE: function() {
    return o
  },
  ws: function() {
    return r
  }
});
var n = s(399606),
  a = s(914788),
  i = s(292352);

function r(e) {
  return (0, n.Wu)([a.Z], () => a.Z.getActionsForDisplayType(e))
}

function l(e) {
  return (0, n.e7)([a.Z], () => a.Z.getTotalForDisplayType(e))
}

function o() {
  return (0, n.e7)([a.Z], () => Object.values(i.MY).some(e => a.Z.getTotalForDisplayType(e) > 0))
}