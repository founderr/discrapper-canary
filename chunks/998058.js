a.d(l, {
  i: function() {
    return r
  }
});
var n = a(544891),
  s = a(570140),
  t = a(881052),
  i = a(981631);
let r = async e => {
  try {
    var l;
    let a = await n.tn.get({
        url: i.ANM.SIMILAR_GAMES(e)
      }),
      t = (null !== (l = a.body.similar_games) && void 0 !== l ? l : []).filter(l => l !== e);
    s.Z.dispatch({
      type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
      applicationId: e,
      games: t
    })
  } catch (e) {
    throw new t.Hx(e)
  }
}