r.d(t, {
  L: function() {
return E;
  }
});
var n = r(599295),
  a = r(383237),
  o = r(521464),
  s = r(157680),
  i = r(337309),
  c = r(774375),
  u = r(748024),
  l = r(692378),
  b = r(922474),
  f = r(470079),
  h = r(639519),
  d = r.n(h),
  p = r(852153),
  v = r(140201),
  y = r(667929),
  g = [
'data',
'keyPath',
'postprocessValue',
'hideRoot',
'theme',
'invertTheme'
  ];

function m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
var n = Object.getOwnPropertySymbols(e);
t && (n = n.filter(function(t) {
  return Object.getOwnPropertyDescriptor(e, t).enumerable;
})), r.push.apply(r, n);
  }
  return r;
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
var r = null != arguments[t] ? arguments[t] : {};
t % 2 ? m(Object(r), !0).forEach(function(t) {
  (0, l.Z)(e, t, r[t]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(t) {
  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
});
  }
  return e;
}
var O = function(e) {
  return e;
};

function k(e) {
  var t, r, n, a, o = (t = e.theme, r = e, (a = Object.keys(n = {
getArrowStyle: 'arrow',
getListStyle: 'nestedNodeChildren',
getItemStringStyle: 'nestedNodeItemString',
getLabelStyle: 'label',
getValueStyle: 'valueText'
  }).filter(function(e) {
return r[e];
  })).length > 0 && (t = 'string' == typeof t ? {
extend: t
  } : w({}, t), a.forEach(function(e) {
console.error('Styling method "'.concat(e, '" is deprecated, use "theme" property instead')), t[n[e]] = function(t) {
  for (var n = t.style, a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
    o[s - 1] = arguments[s];
  return {
    style: w(w({}, n), r[e].apply(r, o))
  };
};
  })), t);
  return e.invertTheme && (o = (0, y.y7)(o)), {
styling: (0, v.Z)(o)
  };
}
var E = function(e) {
  (0, i.Z)(b, e);
  var t, r, l = (t = b, r = function() {
if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
  return !1;
if ('function' == typeof Proxy)
  return !0;
try {
  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
} catch (e) {
  return !1;
}
  }(), function() {
var e, n = (0, u.Z)(t);
return e = r ? Reflect.construct(n, arguments, (0, u.Z)(this).constructor) : n.apply(this, arguments), (0, c.Z)(this, e);
  });

  function b(e) {
var t;
return (0, o.Z)(this, b), (t = l.call(this, e)).state = k(e), t;
  }
  return (0, s.Z)(b, [{
  key: 'UNSAFE_componentWillReceiveProps',
  value: function(e) {
    var t = this;
    [
      'theme',
      'invertTheme'
    ].find(function(r) {
      return e[r] !== t.props[r];
    }) && this.setState(k(e));
  }
},
{
  key: 'shouldComponentUpdate',
  value: function(e) {
    var t = this;
    return !!Object.keys(e).find(function(r) {
      return 'keyPath' === r ? e[r].join('/') !== t.props[r].join('/') : e[r] !== t.props[r];
    });
  }
},
{
  key: 'render',
  value: function() {
    var e = this.props,
      t = e.data,
      r = e.keyPath,
      o = e.postprocessValue,
      s = e.hideRoot,
      i = (e.theme, e.invertTheme, (0, a.Z)(e, g)),
      c = this.state.styling;
    return f.createElement('ul', c('tree'), f.createElement(p.Z, (0, n.Z)({}, w({
      postprocessValue: o,
      hideRoot: s,
      styling: c
    }, i), {
      keyPath: s ? [] : r,
      value: o(t)
    })));
  }
}
  ]), b;
}(f.Component);
(0, l.Z)(E, 'propTypes', {
  data: d().any,
  hideRoot: d().bool,
  theme: d().oneOfType([
d().object,
d().string
  ]),
  invertTheme: d().bool,
  keyPath: d().arrayOf(d().oneOfType([
d().string,
d().number
  ])),
  postprocessValue: d().func,
  sortObjectKeys: d().oneOfType([
d().func,
d().bool
  ])
}), (0, l.Z)(E, 'defaultProps', {
  shouldExpandNode: function(e, t, r) {
return 0 === r;
  },
  hideRoot: !1,
  keyPath: ['root'],
  getItemString: function(e, t, r, n) {
return f.createElement('span', null, r, ' ', n);
  },
  labelRenderer: function(e) {
var t = (0, b.Z)(e, 1)[0];
return f.createElement('span', null, t, ':');
  },
  valueRenderer: O,
  postprocessValue: O,
  isCustomNode: function() {
return !1;
  },
  collectionLimit: 50,
  invertTheme: !0
});