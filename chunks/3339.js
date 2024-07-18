var n = r(599295),
  a = r(383237),
  o = r(470079),
  s = r(639519),
  i = r.n(s),
  c = r(863850),
  u = ['data'];

function l(e) {
  var t = Object.getOwnPropertyNames(e).length;
  return ''.concat(t, ' ').concat(1 !== t ? 'keys' : 'key');
}
var b = function(e) {
  var t = e.data,
r = (0, a.Z)(e, u);
  return o.createElement(c.Z, (0, n.Z)({}, r, {
data: t,
nodeType: 'Object',
nodeTypeIndicator: 'Error' === r.nodeType ? 'Error()' : '{}',
createItemString: l,
expandable: Object.getOwnPropertyNames(t).length > 0
  }));
};
b.propTypes = {
  data: i().object,
  nodeType: i().string.isRequired
}, t.Z = b;