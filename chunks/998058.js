s.d(a, {
  i: function() {
return i;
  }
});
var n = s(544891),
  t = s(570140),
  l = s(881052),
  r = s(981631);
let i = async e => {
  try {
var a;
let s = await n.tn.get({
    url: r.ANM.SIMILAR_GAMES(e)
  }),
  l = (null !== (a = s.body.similar_games) && void 0 !== a ? a : []).filter(a => a !== e);
t.Z.dispatch({
  type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
  applicationId: e,
  games: l
});
  } catch (e) {
throw new l.Hx(e);
  }
};