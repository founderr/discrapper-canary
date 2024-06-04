"use strict";
n.r(t), n.d(t, {
  useEnsureSyncedChannelParticipants: function() {
    return c
  },
  useEnsureSyncedChannelVoiceStates: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  l = n("392711"),
  s = n("442837"),
  i = n("413523"),
  r = n("878884"),
  o = n("19780"),
  u = n("413402");

function d(e, t) {
  let n = (0, s.useStateFromStoresArray)([o.default, r.default], () => o.default.getChannelId() !== e ? [] : r.default.desyncedVoiceStates);
  return a.useMemo(() => (function(e, t) {
    if (!(0, u.isRTCVoiceStateDesyncExperimentEnabled)() || null == e || 0 === e.length) return t;
    let n = null != t ? [...t] : [];
    return e.forEach(e => {
      n.splice((0, l.sortedIndexBy)(n, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), n
  })(n, t), [n, t])
}

function c(e, t, n) {
  let d = (0, s.useStateFromStoresArray)([o.default, r.default], () => o.default.getChannelId() !== e ? [] : r.default.desyncedParticipants);
  return a.useMemo(() => (function(e, t) {
    if (!(0, u.isRTCVoiceStateDesyncExperimentEnabled)() || null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, l.sortedIndexBy)(n, e, e => (0, i.sortKey)(e)), 0, e)
    }), n
  })(d, n), [d, n])
}