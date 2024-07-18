r.d(t, {
  Z: function() {
return p;
  }
});
var n = r(599295),
  a = r(521464),
  o = r(157680),
  s = r(15393),
  i = r(337309),
  c = r(774375),
  u = r(748024),
  l = r(692378),
  b = r(470079),
  f = r(639519),
  h = r.n(f),
  d = r(949179),
  p = function(e) {
(0, i.Z)(h, e);
var t, r, f = (t = h, r = function() {
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

function h(e) {
  var t;
  return (0, a.Z)(this, h), t = f.call(this, e), (0, l.Z)((0, s.Z)(t), 'handleClick', function() {
    t.setState({
      expanded: !t.state.expanded
    });
  }), t.state = {
    expanded: !1
  }, t;
}
return (0, o.Z)(h, [{
  key: 'render',
  value: function() {
    var e = this.props,
      t = e.styling,
      r = e.from,
      a = e.to,
      o = e.renderChildNodes,
      s = e.nodeType;
    return this.state.expanded ? b.createElement('div', t('itemRange', this.state.expanded), o(this.props, r, a)) : b.createElement('div', (0, n.Z)({}, t('itemRange', this.state.expanded), {
      onClick: this.handleClick
    }), b.createElement(d.Z, {
      nodeType: s,
      styling: t,
      expanded: !1,
      onClick: this.handleClick,
      arrowStyle: 'double'
    }), ''.concat(r, ' ... ').concat(a));
  }
}]), h;
  }(b.Component);
(0, l.Z)(p, 'propTypes', {
  styling: h().func.isRequired,
  from: h().number.isRequired,
  to: h().number.isRequired,
  renderChildNodes: h().func.isRequired,
  nodeType: h().string.isRequired
});