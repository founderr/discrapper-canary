var n = r(599295),
  a = r(692378),
  o = r(383237),
  s = r(470079),
  i = r(639519),
  c = r.n(i),
  u = r(456519),
  l = r(3339),
  b = r(652621),
  f = r(398420),
  h = r(893361),
  d = [
'getItemString',
'keyPath',
'labelRenderer',
'styling',
'value',
'valueRenderer',
'isCustomNode'
  ];

function p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
var n = Object.getOwnPropertySymbols(e);
t && (n = n.filter(function(t) {
  return Object.getOwnPropertyDescriptor(e, t).enumerable;
})), r.push.apply(r, n);
  }
  return r;
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
var r = null != arguments[t] ? arguments[t] : {};
t % 2 ? p(Object(r), !0).forEach(function(t) {
  (0, a.Z)(e, t, r[t]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
});
  }
  return e;
}
var y = function(e) {
  var t = e.getItemString,
r = e.keyPath,
a = e.labelRenderer,
i = e.styling,
c = e.value,
p = e.valueRenderer,
y = e.isCustomNode,
g = (0, o.Z)(e, d),
m = y(c) ? 'Custom' : (0, u.Z)(c),
w = {
  getItemString: t,
  key: r[0],
  keyPath: r,
  labelRenderer: a,
  nodeType: m,
  styling: i,
  value: c,
  valueRenderer: p
},
O = v(v(v({}, g), w), {}, {
  data: c,
  isCustomNode: y
});
  switch (m) {
case 'Object':
case 'Error':
case 'WeakMap':
case 'WeakSet':
  return s.createElement(l.Z, O);
case 'Array':
  return s.createElement(b.Z, O);
case 'Iterable':
case 'Map':
case 'Set':
  return s.createElement(f.Z, O);
case 'String':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function(e) {
      return '"'.concat(e, '"');
    }
  }));
case 'Number':
case 'Custom':
  return s.createElement(h.Z, w);
case 'Boolean':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function(e) {
      return e ? 'true' : 'false';
    }
  }));
case 'Date':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function(e) {
      return e.toISOString();
    }
  }));
case 'Null':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function() {
      return 'null';
    }
  }));
case 'Undefined':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function() {
      return 'undefined';
    }
  }));
case 'Function':
case 'Symbol':
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function(e) {
      return e.toString();
    }
  }));
default:
  return s.createElement(h.Z, (0, n.Z)({}, w, {
    valueGetter: function() {
      return '<'.concat(m, '>');
    }
  }));
  }
};
y.propTypes = {
  getItemString: c().func.isRequired,
  keyPath: c().arrayOf(c().oneOfType([
c().string,
c().number
  ]).isRequired).isRequired,
  labelRenderer: c().func.isRequired,
  styling: c().func.isRequired,
  value: c().any,
  valueRenderer: c().func.isRequired,
  isCustomNode: c().func.isRequired
}, t.Z = y;