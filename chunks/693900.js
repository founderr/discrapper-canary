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
  a = n(338545),
  r = n(442837),
  l = n(481060),
  i = n(393238),
  c = n(110924),
  d = n(607070);
let u = o.createContext({
  springConfig: {},
  isExpanded: !1
});

function p(e) {
  let t = o.useMemo(() => ({
springConfig: e.springConfig,
isExpanded: e.isExpanded
  }), [
e.springConfig,
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
isExpanded: x
  } = o.useContext(u), m = (0, r.e7)([d.Z], () => d.Z.useReducedMotion), {
ref: g,
height: f = null
  } = (0, i.Z)(), _ = null !== (t = (0, c.Z)(f)) && void 0 !== t ? t : null, [{
height: C
  }, h] = (0, l.useSpring)(() => ({
from: {
  height: 0
},
config: p
  }));
  return o.useLayoutEffect(() => {
null !== f && h({
  height: f,
  immediate: !x || m || null === _
});
  }, [
f,
h,
x,
m,
_
  ]), (0, s.jsx)(a.animated.div, {
style: {
  height: null === _ ? 'auto' : C,
  overflow: 'hidden'
},
children: (0, s.jsx)('div', {
  style: {
    overflow: 'hidden'
  },
  ref: g,
  children: n
})
  });
}