n.d(t, {
  n: function() {
return x;
  },
  t: function() {
return p;
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(338545),
  a = n(442837),
  i = n(481060),
  l = n(393238),
  c = n(110924),
  d = n(607070);
let u = o.createContext({
  springConfig: {},
  onHeightChange: () => {},
  isExpanded: !1
});

function p(e) {
  let t = o.useMemo(() => ({
springConfig: e.springConfig,
isExpanded: e.isExpanded,
onHeightChange: e.onHeightChange
  }), [
e.springConfig,
e.onHeightChange,
e.isExpanded
  ]);
  return (0, s.jsx)(u.Provider, {
value: t,
children: e.children
  });
}

function x(e) {
  var t;
  let {
children: n
  } = e, {
springConfig: p,
isExpanded: x,
onHeightChange: m
  } = o.useContext(u), g = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), {
ref: C,
height: f = null
  } = (0, l.Z)(), _ = null !== (t = (0, c.Z)(f)) && void 0 !== t ? t : null, [{
height: h
  }, E] = (0, i.useSpring)(() => ({
from: {
  height: 0
},
config: p
  }));
  return o.useLayoutEffect(() => {
if (null === _ || null === f)
  return;
let e = f - _;
0 !== e && m(e);
  }, [
f,
_,
m,
x
  ]), o.useLayoutEffect(() => {
null !== f && E({
  height: f,
  immediate: !x || g || null === _
});
  }, [
f,
E,
x,
g,
_
  ]), (0, s.jsx)(r.animated.div, {
style: {
  height: null === _ ? 'auto' : h,
  overflow: 'hidden'
},
children: (0, s.jsx)('div', {
  style: {
    overflow: 'hidden'
  },
  ref: C,
  children: n
})
  });
}