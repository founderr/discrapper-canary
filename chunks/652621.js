var n = r(599295),
  a = r(383237),
  o = r(470079),
  s = r(639519),
  i = r.n(s),
  c = r(863850),
  u = ['data'];

function l(e) {
  return ''.concat(e.length, ' ').concat(1 !== e.length ? 'items' : 'item');
}
var b = function(e) {
  var t = e.data,
r = (0, a.Z)(e, u);
  return o.createElement(c.Z, (0, n.Z)({}, r, {
data: t,
nodeType: 'Array',
nodeTypeIndicator: '[]',
createItemString: l,
expandable: t.length > 0
  }));
};
b.propTypes = {
  data: i().array
}, t.Z = b;