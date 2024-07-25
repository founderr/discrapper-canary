t.d(n, {
  B3: function() {
return _;
  },
  r4: function() {
return v;
  }
}), t(411104);
var l = t(735250),
  r = t(470079),
  i = t(512722),
  a = t.n(i),
  o = t(876215),
  s = t(775379),
  c = t(498187),
  u = t(482417),
  d = t(301419),
  m = t(397035);
let f = r.createContext(void 0);

function _() {
  let e = r.useContext(f);
  return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}

function p(e) {
  let {
entry: n,
...t
  } = e;
  switch (n.content_type) {
case o.s.TOP_ARTIST:
  return (0, l.jsx)(C, {
    entry: n,
    ...t
  });
case o.s.TOP_GAME:
  return (0, l.jsx)(h, {
    entry: n,
    ...t
  });
case o.s.PLAYED_GAME:
  return (0, l.jsx)(x, {
    entry: n,
    ...t
  });
case o.s.WATCHED_MEDIA:
  return (0, l.jsx)(E, {
    entry: n,
    ...t
  });
case o.s.LISTENED_SESSION:
  return (0, l.jsx)(I, {
    entry: n,
    ...t
  });
default:
  throw Error('Unsupported content type: '.concat(n.content_type));
  }
}

function v(e) {
  let {
errorFallback: n,
...t
  } = e;
  return (0, l.jsx)(s.S, {
fallback: n,
children: (0, l.jsx)(p, {
  ...t
})
  });
}

function C(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, d.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(f.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function h(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, c.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(f.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function x(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, c.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(f.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function E(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, m.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(f.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function I(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, u.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(f.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}