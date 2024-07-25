t.d(n, {
  Z: function() {
return f;
  }
});
var l = t(735250);
t(470079);
var r = t(512722),
  i = t.n(r),
  a = t(442837),
  o = t(52396),
  s = t(592125),
  c = t(970184),
  u = t(151200),
  d = t(96513);

function m(e) {
  let {
contentInventoryEntry: n
  } = e, t = (0, c.CJ)();
  i()(null != t, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
  let {
channelId: r
  } = t, d = (0, a.e7)([s.Z], () => s.Z.getChannel(r));
  i()(null != d, 'channel must be defined');
  let {
parsedEntry: m
  } = (0, o.B3)();
  return (0, l.jsx)(u.Z, {
...m,
entry: n,
channel: d
  });
}

function f(e) {
  return (0, l.jsx)(o.r4, {
location: d._.EMBED,
entry: e.contentInventoryEntry,
errorFallback: null,
children: (0, l.jsx)(m, {
  ...e
})
  });
}