n.d(t, {
  X: function() {
    return r
  }
}), n(724458), n(442837);
var l = n(868854),
  i = n(801077),
  s = n(674563);

function r() {
  let e = (0, l.a)();
  return function(e, t) {
    let n = e.reduce((e, t) => {
      var n;
      let l = null !== (n = t.party.currentActivities.filter(e => null != e.game.name && e.game.type === s.wW.GAME).map(e => e.game.name)) && void 0 !== n ? n : [];
      return e.concat(l)
    }, []);
    return {
      now_playing_visible: t,
      now_playing_num_cards: e.length,
      now_playing_games_detected: n
    }
  }(i.Z.nowPlayingCards, e)
}