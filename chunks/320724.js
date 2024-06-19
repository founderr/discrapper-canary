t.d(s, {
  K: function() {
    return l
  },
  P: function() {
    return r
  }
}), t(411104);
var n = t(570140),
  i = t(358085),
  a = t(998502);

function l() {
  if (!(0, i.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  a.ZP.setCandidateGamesCallback(e => {
    n.Z.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), n.Z.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function r() {
  if (!(0, i.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  a.ZP.clearCandidateGamesCallback(), n.Z.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}