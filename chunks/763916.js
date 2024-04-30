"use strict";
a.r(t);
var n = a("570140"),
  s = a("812206"),
  l = a("877481"),
  i = a("592745");

function r(e) {
  let {
    gameId: t
  } = e;
  ! function(e) {
    let t;
    let a = i.default.launchableGames[e],
      r = s.default.getApplication(e);
    (t = null != r ? l.default.isLaunchable(r) : l.default.isGameLaunchable(e)).then(t => {
      t !== a && n.default.dispatch({
        type: "GAME_LAUNCHABLE_UPDATE",
        gameId: e,
        isLaunchable: t
      })
    })
  }(t)
}
t.default = {
  initialize() {
    n.default.subscribe("CHECK_LAUNCHABLE_GAME", r)
  }
}