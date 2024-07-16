n.d(t, {
  Z: function() {
return d;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(704215),
  r = n(243778),
  o = n(375954),
  c = n(423490);

function d(e) {
  let {
children: t
  } = e, n = (0, s.e7)([o.Z], () => o.Z.hasCurrentUserSentMessageSinceAppStart()), d = a.useMemo(() => {
let e = [];
return n && e.push(l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
  }, [n]);
  return (0, i.jsx)(r.Z, {
contentTypes: d,
children: e => {
  let {
    visibleContent: n
  } = e;
  if (n === l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2)
    return (0, i.jsx)(c.Q, {
      children: t
    });
  return t;
}
  });
}