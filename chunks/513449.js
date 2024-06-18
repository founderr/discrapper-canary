"use strict";
n.d(t, {
  Ku: function() {
    return c
  },
  MV: function() {
    return d
  }
});
var i = n(470079),
  r = n(652874),
  s = n(442837),
  o = n(496675),
  a = n(944486),
  l = n(146085),
  u = n(643632);
let _ = (0, r.Z)(e => ({
  isOnStartStageScreen: !0
}));

function c(e) {
  _.setState({
    isOnStartStageScreen: e
  })
}

function d(e) {
  let t = (0, s.e7)([a.Z], () => a.Z.getVoiceChannelId() === e.id),
    n = (0, s.e7)([o.Z], () => o.Z.can(l.yP, e), [e]),
    r = (0, u.Z)(e.id),
    _ = n && !r;
  i.useEffect(() => {
    t ? !_ && c(!1) : c(_)
  }, [t, _])
}
t.ZP = _