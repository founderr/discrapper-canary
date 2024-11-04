var i = n(570140),
    r = n(812206),
    a = n(877481),
    l = n(592745);
function s(e) {
    let { gameId: t } = e;
    !(function (e) {
        let t;
        let n = l.Z.launchableGames[e],
            s = r.Z.getApplication(e);
        (t = null != s ? a.Z.isLaunchable(s) : a.Z.isGameLaunchable(e)).then((t) => {
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
        i.Z.subscribe('CHECK_LAUNCHABLE_GAME', s);
    }
};
