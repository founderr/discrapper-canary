n.d(t, {
  S: function() {
    return s
  }
});
var i = n(137006);

function s(e, t) {
  var n;
  let {
    scope: s,
    handler: l
  } = t, a = {
    scope: s,
    handler: l
  }, r = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request, o = null;
  return null != r && (a.validation = function(e) {
    return null == o && (o = r(e)), o
  }), a
}