t.d(n, {
  Z: function() {
return _;
  }
});
var l = t(735250);
t(470079);
var r = t(512722),
  i = t.n(r),
  a = t(442837),
  o = t(52396),
  s = t(628123),
  c = t(592125),
  u = t(970184),
  d = t(151200),
  m = t(96513);

function f(e) {
  let {
contentInventoryEntry: n
  } = e, t = (0, u.CJ)();
  i()(null != t, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
  let {
channelId: r
  } = t, s = (0, a.e7)([c.Z], () => c.Z.getChannel(r));
  i()(null != s, 'channel must be defined');
  let {
parsedEntry: m
  } = (0, o.B3)();
  return (0, l.jsx)(d.Z, {
...m,
entry: n,
channel: s
  });
}

function _(e) {
  return (0, l.jsx)(s.Z, {
children: (0, l.jsx)(o.r4, {
  location: m._.EMBED,
  entry: e.contentInventoryEntry,
  errorFallback: null,
  children: (0, l.jsx)(f, {
    ...e
  })
})
  });
}