n.d(t, {
  AJ: function() {
return E;
  },
  zP: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(393903),
  u = n(689938),
  c = n(657795);

function d(e) {
  let {
itemGapPx: t,
items: n,
maxLines: r
  } = e, [a, s] = i.useState(0), [o, u] = i.useState(0), c = i.useRef([]), d = i.useRef(0), _ = i.useRef(0), E = i.useRef(null), f = (0, l.y)(e => {
let t = null == e ? void 0 : e.getBoundingClientRect().width;
null != t && u(t);
  }), h = i.useCallback((e, t) => {
c.current[e] = t;
  }, []);
  return i.useLayoutEffect(() => {
var e;
if (null == E.current)
  return;
c.current.length = n.length, d.current = null !== (e = E.current.getBoundingClientRect().width) && void 0 !== e ? e : 0;
let i = function(e) {
  let {
    items: t,
    maxLines: n,
    itemWidths: r,
    itemGapPx: i,
    containerWidth: a,
    overflowWidth: s
  } = e, o = 0, l = 0, u = 0;
  for (let e = 0; e < t.length; e++) {
    let c = r[e];
    if (isNaN(c) || c > a)
      continue;
    let d = o === n - 1,
      _ = e === t.length - 1;
    if (!(Math.round(l + c + (d && !_ ? s + i : 0)) < Math.round(a))) {
      if (d)
        break;
      o++, l = 0;
    }
    u = e, l += c + i;
  }
  return u;
}({
  items: n,
  maxLines: r,
  itemGapPx: t,
  containerWidth: o,
  itemWidths: c.current,
  overflowWidth: d.current
});
i !== _.current && (_.current = i, s(e => e + 1));
  }, [
o,
t,
n,
r
  ]), i.useMemo(() => ({
lastVisibleIndex: _.current,
containerRef: f,
onItemLayout: h,
overflowItemsRef: E,
version: a
  }), [
f,
h,
a
  ]);
}

function _(e) {
  let {
items: t,
renderItem: n
  } = e;
  return (0, r.jsx)(o.Tooltip, {
text: (0, r.jsx)('div', {
  className: c.tooltip,
  children: t.map(n)
}),
'aria-label': 'overflow',
children: e => (0, r.jsx)('div', {
  ...e,
  children: n(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
    count: t.length
  }))
})
  });
}

function E(e) {
  let {
onItemLayout: t,
index: n,
children: a
  } = e, s = i.useRef(null);
  return i.useLayoutEffect(() => {
if (null != s.current)
  t(n, s.current.getBoundingClientRect().width);
  }), (0, r.jsx)('div', {
ref: s,
children: a
  });
}
t.ZP = function(e) {
  let {
className: t,
items: n,
renderItem: a,
itemGapPx: o = 0,
maxLines: l
  } = e, {
lastVisibleIndex: f,
containerRef: h,
onItemLayout: p,
overflowItemsRef: m
  } = d({
items: n,
itemGapPx: o,
maxLines: l
  }), I = i.useMemo(() => n.slice(0, f + 1), [
n,
f
  ]), T = i.useMemo(() => n.slice(f + 1), [
n,
f
  ]);
  return (0, r.jsxs)('div', {
className: s()(t, c.items),
ref: h,
children: [
  (0, r.jsxs)('div', {
    'aria-hidden': !0,
    className: c.measurements,
    children: [
      (0, r.jsx)('div', {
        className: c.itemMeasurements,
        children: n.map((e, t) => (0, r.jsx)(E, {
          index: t,
          onItemLayout: p,
          children: a(e)
        }, e))
      }),
      (0, r.jsx)('div', {
        className: c.overflowMeasurement,
        ref: m,
        children: a(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: Number('1'.concat(n.length))
        }))
      })
    ]
  }),
  I.map(a),
  T.length > 0 && (0, r.jsx)(_, {
    items: T,
    renderItem: a
  })
]
  });
};