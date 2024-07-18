r.d(t, {
  Z: function() {
return o;
  }
});
var n = r(693598),
  a = r(15393);

function o(e, t) {
  if (t && ('object' === (0, n.Z)(t) || 'function' == typeof t))
return t;
  if (void 0 !== t)
throw TypeError('Derived constructors may only return object or undefined');
  return (0, a.Z)(e);
}