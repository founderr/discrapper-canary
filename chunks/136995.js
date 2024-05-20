"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("287734"),
  a = n("125015"),
  o = n("585483"),
  l = n("871499"),
  u = n("981631"),
  d = n("689938");

function _(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ..._
  } = e, c = n ? l.CenterControlButton : l.default, E = t.isManaged() || !t.isPrivate() ? d.default.Messages.CONNECT : d.default.Messages.JOIN_CALL, I = r.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
  return r.useEffect(() => (o.ComponentDispatch.subscribe(u.ComponentActions.CALL_ACCEPT, I), () => {
    o.ComponentDispatch.unsubscribe(u.ComponentActions.CALL_ACCEPT, I)
  }), [I]), (0, i.jsx)(c, {
    ..._,
    iconComponent: a.default,
    label: E,
    onClick: I
  })
}