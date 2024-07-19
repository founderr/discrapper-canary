n.d(t, {
  O: function() {
return d;
  },
  h: function() {
return c;
  }
}), n(47120);
var i = n(470079),
  a = n(338545),
  s = n(442837),
  r = n(393238),
  l = n(607070),
  o = n(87894);

function c() {
  let e = i.useRef(null),
[t, n] = i.useState('lg'),
[a, s] = i.useState(void 0);
  return (0, r.P)(e, e => {
let {
  width: t,
  scrollHeight: i
} = e;
return (s(i), null == t || t > o.j2) ? n('lg') : t > o.Z0 ? n('sm') : n('xs');
  }), {
containerRef: e,
size: t,
height: a
  };
}

function d(e) {
  let {
initiallyExpanded: t
  } = e, [n, r] = i.useState(t), [o, c] = i.useState(!1), d = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), u = i.useCallback(() => {
r(e => !e), c(!0);
  }, []), {
expansionSpring: _
  } = (0, a.useSpring)({
expansionSpring: n ? 1 : 0,
config: {
  tension: 450,
  friction: 45
},
immediate: d,
onRest: () => c(!1)
  });
  return {
expansionSpring: _,
isAnimating: o,
isExpanded: n,
toggleExpanded: u
  };
}