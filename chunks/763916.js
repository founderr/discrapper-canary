var i = n(570140),
    r = n(812206),
    l = n(877481),
    a = n(592745);
function o(e) {
    let { gameId: t } = e;
    !(function (e) {
        let t;
        let n = a.Z.launchableGames[e],
            o = r.Z.getApplication(e);
        (t = null != o ? l.Z.isLaunchable(o) : l.Z.isGameLaunchable(e)).then((t) => {
            t !== n &&
                i.Z.dispatch({
                    type: 'GAME_LAUNCHABLE_UPDATE',
                    gameId: e,
                    isLaunchable: t
                });
        });
    })(t);
}
t.Z = {
    initialize() {
        i.Z.subscribe('CHECK_LAUNCHABLE_GAME', o);
    }
};
