r.d(t, {
  Z: function() {
return k;
  }
});
var n = r(521464),
  a = r(157680),
  o = r(15393),
  s = r(337309),
  i = r(774375),
  c = r(748024),
  u = r(692378),
  l = r(870271),
  b = r(599295),
  f = r(470079),
  h = r(639519),
  d = r.n(h),
  p = r(949179),
  v = r(261411),
  y = r(852153),
  g = r(703205);

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
  (0, u.Z)(e, t, r[t]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(t) {
  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
});
  }
  return e;
}

function O(e) {
  return {
expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level)
  };
}
var k = function(e) {
  (0, s.Z)(d, e);
  var t, r, h = (t = d, r = function() {
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
var e, n = (0, c.Z)(t);
return e = r ? Reflect.construct(n, arguments, (0, c.Z)(this).constructor) : n.apply(this, arguments), (0, i.Z)(this, e);
  });

  function d(e) {
var t;
return (0, n.Z)(this, d), t = h.call(this, e), (0, u.Z)((0, o.Z)(t), 'handleClick', function() {
  t.props.expandable && t.setState({
    expanded: !t.state.expanded
  });
}), t.state = O(e), t;
  }
  return (0, a.Z)(d, [{
  key: 'UNSAFE_componentWillReceiveProps',
  value: function(e) {
    var t = O(e);
    O(this.props).expanded !== t.expanded && this.setState(t);
  }
},
{
  key: 'shouldComponentUpdate',
  value: function(e, t) {
    var r = this;
    return !!Object.keys(e).find(function(t) {
      return 'circularCache' !== t && ('keyPath' === t ? e[t].join('/') !== r.props[t].join('/') : e[t] !== r.props[t]);
    }) || t.expanded !== this.state.expanded;
  }
},
{
  key: 'render',
  value: function() {
    var e = this.props,
      t = e.getItemString,
      r = e.nodeTypeIndicator,
      n = e.nodeType,
      a = e.data,
      o = e.hideRoot,
      s = e.createItemString,
      i = e.styling,
      c = e.collectionLimit,
      u = e.keyPath,
      h = e.labelRenderer,
      d = e.expandable,
      m = this.state.expanded,
      O = m || o && 0 === this.props.level ? function e(t, r, n) {
        var a = t.nodeType,
          o = t.data,
          s = t.collectionLimit,
          i = t.circularCache,
          c = t.keyPath,
          u = t.postprocessValue,
          h = t.sortObjectKeys,
          d = [];
        return (0, v.Z)(a, o, h, s, r, n).forEach(function(r) {
          if (void 0 !== r.to)
            d.push(f.createElement(g.Z, (0, b.Z)({}, t, {
              key: 'ItemRange--'.concat(r.from, '-').concat(r.to),
              from: r.from,
              to: r.to,
              renderChildNodes: e
            })));
          else {
            var n = r.key,
              a = r.value,
              o = -1 !== i.indexOf(a);
            d.push(f.createElement(y.Z, (0, b.Z)({}, t, {
              postprocessValue: u,
              collectionLimit: s,
              key: 'Node--'.concat(n),
              keyPath: [n].concat((0, l.Z)(c)),
              value: u(a),
              circularCache: [].concat((0, l.Z)(i), [a]),
              isCircular: o,
              hideRoot: !1
            })));
          }
        }), d;
      }(w(w({}, this.props), {}, {
        level: this.props.level + 1
      })) : null,
      k = t(n, a, f.createElement('span', i('nestedNodeItemType', m), r), s(a, c), u),
      E = [
        u,
        n,
        m,
        d
      ];
    return o ? f.createElement('li', i.apply(void 0, ['rootNode'].concat(E)), f.createElement('ul', i.apply(void 0, ['rootNodeChildren'].concat(E)), O)) : f.createElement('li', i.apply(void 0, ['nestedNode'].concat(E)), d && f.createElement(p.Z, {
      styling: i,
      nodeType: n,
      expanded: m,
      onClick: this.handleClick
    }), f.createElement('label', (0, b.Z)({}, i.apply(void 0, [
      [
        'label',
        'nestedNodeLabel'
      ]
    ].concat(E)), {
      onClick: this.handleClick
    }), h.apply(void 0, E)), f.createElement('span', (0, b.Z)({}, i.apply(void 0, ['nestedNodeItemString'].concat(E)), {
      onClick: this.handleClick
    }), k), f.createElement('ul', i.apply(void 0, ['nestedNodeChildren'].concat(E)), O));
  }
}
  ]), d;
}(f.Component);
(0, u.Z)(k, 'propTypes', {
  getItemString: d().func.isRequired,
  nodeTypeIndicator: d().any,
  nodeType: d().string.isRequired,
  data: d().any,
  hideRoot: d().bool.isRequired,
  createItemString: d().func.isRequired,
  styling: d().func.isRequired,
  collectionLimit: d().number,
  keyPath: d().arrayOf(d().oneOfType([
d().string,
d().number
  ])).isRequired,
  labelRenderer: d().func.isRequired,
  shouldExpandNode: d().func,
  level: d().number.isRequired,
  sortObjectKeys: d().oneOfType([
d().func,
d().bool
  ]),
  isCircular: d().bool,
  expandable: d().bool
}), (0, u.Z)(k, 'defaultProps', {
  data: [],
  circularCache: [],
  level: 0,
  expandable: !0
});