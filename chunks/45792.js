n.d(t, {
  S: function() {
    return i
  }
});
var s = n(137006);

function i(e, t) {
  var n;
  let {
    scope: i,
    handler: l
  } = t, a = {
    scope: i,
    handler: l
  }, r = null === (n = s.m[e]) || void 0 === n ? void 0 : n.request, o = null;
  return null != r && (a.validation = function(e) {
    return null == o && (o = r(e)), o
  }), a
}