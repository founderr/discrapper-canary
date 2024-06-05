"use strict";
n.r(t), n.d(t, {
  useEnsureSyncedChannelParticipants: function() {
    return d
  },
  useEnsureSyncedChannelVoiceStates: function() {
    return u
  }
}), n("47120");
var a = n("470079"),
  l = n("392711"),
  s = n("442837"),
  i = n("413523"),
  r = n("878884"),
  o = n("413402");

function u(e, t) {
  let n = (0, o.useIsRTCVoiceStateDesyncExperimentEnabled)(),
    i = (0, s.useStateFromStores)([r.default], () => n ? r.default.getDesyncedVoiceStates(e) : null);
  return a.useMemo(() => (function(e, t) {
    if (!(0, o.isRTCVoiceStateDesyncExperimentEnabled)() || null == e || 0 === e.length) return t;
    let n = null != t ? [...t] : [];
    return e.forEach(e => {
      n.splice((0, l.sortedIndexBy)(n, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), n
  })(i, t), [i, t])
}

function d(e, t) {
  let n = function(e) {
    let t = (0, o.useIsRTCVoiceStateDesyncExperimentEnabled)();
    return (0, s.useStateFromStores)([r.default], () => t ? r.default.getDesyncedParticipants(e) : null)
  }(e);
  return a.useMemo(() => (function(e, t) {
    if (!(0, o.isRTCVoiceStateDesyncExperimentEnabled)() || null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, l.sortedIndexBy)(n, e, e => (0, i.sortKey)(e)), 0, e)
    }), n
  })(n, t), [n, t])
}