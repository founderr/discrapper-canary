var i = n(570140),
  s = n(812206),
  l = n(877481),
  a = n(592745);

function r(e) {
  let {
    gameId: t
  } = e;
  ! function(e) {
    let t;
    let n = a.Z.launchableGames[e],
      r = s.Z.getApplication(e);
    (t = null != r ? l.Z.isLaunchable(r) : l.Z.isGameLaunchable(e)).then(t => {
      t !== n && i.Z.dispatch({
        type: "GAME_LAUNCHABLE_UPDATE",
        gameId: e,
        isLaunchable: t
      })
    })
  }(t)
}
t.Z = {
  initialize() {
    i.Z.subscribe("CHECK_LAUNCHABLE_GAME", r)
  }
}