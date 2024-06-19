n.d(t, {
  Z: function() {
    return u
  }
}), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(704215),
  r = n(243778),
  o = n(375954),
  c = n(423490);

function u(e) {
  let {
    children: t
  } = e, n = (0, s.e7)([o.Z], () => o.Z.hasCurrentUserSentMessageSinceAppStart()), u = i.useMemo(() => {
    let e = [];
    return n && e.push(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
  }, [n]);
  return (0, l.jsx)(r.Z, {
    contentTypes: u,
    children: e => {
      let {
        visibleContent: n
      } = e;
      if (n === a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2) return (0, l.jsx)(c.Q, {
        children: t
      });
      return t
    }
  })
}