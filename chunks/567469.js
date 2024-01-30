"use strict";
n.r(t), n.d(t, {
  useStageParticipants: function() {
    return r
  },
  useStageParticipantsCount: function() {
    return s
  },
  useSortedRequestToSpeakParticipants: function() {
    return d
  },
  useActualStageSpeakerCount: function() {
    return o
  }
}), n("222007");
var l = n("446674"),
  u = n("334572"),
  i = n("488464"),
  a = n("998716");

function r(e, t) {
  let [n] = (0, l.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], u.isVersionEqual);
  return n
}

function s(e, t) {
  return (0, l.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
}

function d(e) {
  let [t] = (0, l.useStateFromStores)([i.default], () => {
    let t = i.default.getMutableRequestToSpeakParticipants(e);
    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
  }, [e], u.isVersionEqual);
  return t
}

function o(e) {
  return (0, l.useStateFromStores)([i.default], () => {
    let t = i.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.SPEAKER),
      n = t.filter(e => e.type === a.StageChannelParticipantTypes.VOICE);
    return n.length
  }, [e])
}