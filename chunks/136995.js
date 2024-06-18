"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(287734),
  a = n(585483),
  l = n(871499),
  u = n(981631),
  _ = n(689938);

function c(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ...c
  } = e, d = n ? l.d : l.Z, E = t.isManaged() || !t.isPrivate() ? _.Z.Messages.CONNECT : _.Z.Messages.JOIN_CALL, I = r.useCallback(() => o.default.selectVoiceChannel(t.id), [t.id]);
  return r.useEffect(() => (a.S.subscribe(u.CkL.CALL_ACCEPT, I), () => {
    a.S.unsubscribe(u.CkL.CALL_ACCEPT, I)
  }), [I]), (0, i.jsx)(d, {
    ...c,
    iconComponent: s.PhoneCallIcon,
    label: E,
    onClick: I
  })
}