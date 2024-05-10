"use strict";
n.r(t);
var a = n("570140"),
  s = n("812206"),
  i = n("877481"),
  l = n("592745");

function r(e) {
  let {
    gameId: t
  } = e;
  ! function(e) {
    let t;
    let n = l.default.launchableGames[e],
      r = s.default.getApplication(e);
    (t = null != r ? i.default.isLaunchable(r) : i.default.isGameLaunchable(e)).then(t => {
      t !== n && a.default.dispatch({
        type: "GAME_LAUNCHABLE_UPDATE",
        gameId: e,
        isLaunchable: t
      })
    })
  }(t)
}
t.default = {
  initialize() {
    a.default.subscribe("CHECK_LAUNCHABLE_GAME", r)
  }
}