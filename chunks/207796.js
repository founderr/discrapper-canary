n.d(t, {
    GN: function () {
        return A;
    },
    PJ: function () {
        return m;
    }
});
var r,
    i,
    l,
    o,
    u,
    c,
    a = n(280836),
    s = n(454000),
    d = n(731965),
    p = n(433517);
n(963202), ((r = o || (o = {})).ADMIN_UPSELL = 'admin_upsell'), (r.GET_STARTED = 'get_started'), (r.DISCOVERY = 'discovery'), (r.PLAYSTYLE = 'playstyle'), (r.TRAITS = 'traits'), (r.GAMES = 'games'), (r.SAVED_GUILDS = 'saved_guilds'), (r.PREFERENCES = 'preferences'), ((i = u || (u = {})).NONE = 'none'), (i.VALORANT = 'valorant'), (i.GENSHIN = 'genshin'), ((l = c || (c = {})).USER_UPSELL = 'user_upsell'), (l.USER_ONBOARDING = 'user_onboarding');
let A = (0, s.F)()(
    (0, a.tJ)(
        (e) => ({
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            completedNux: !1,
            userUpsellScreen: 'user_upsell',
            loadingGameApplication: !1,
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            entrypointGameId: null,
            setGame: (t) => (0, d.j)(() => e({ game: t })),
            setSelectedGames: (t) => {
                (0, d.j)(() =>
                    e({
                        selectedGames: t,
                        completedNux: !0
                    })
                );
            },
            setSelectedPlaystyle: (t) =>
                (0, d.j)(() =>
                    e({
                        selectedPlaystyle: t,
                        completedNux: !0
                    })
                ),
            setSelectedTraits: (t) =>
                (0, d.j)(() =>
                    e({
                        selectedTraits: t,
                        completedNux: !0
                    })
                ),
            setUserUpsellScreen: (t) => (0, d.j)(() => e({ userUpsellScreen: t }))
        }),
        {
            name: 'clan-discovery',
            storage: (0, a.FL)(() => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = p.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => p.K.set(e, t),
                removeItem: (e) => p.K.remove(e)
            })),
            partialize: (e) => ({
                mode: e.mode,
                game: e.game,
                completedNux: e.completedNux,
                selectedGames: e.selectedGames,
                selectedPlaystyle: e.selectedPlaystyle,
                selectedTraits: e.selectedTraits,
                dismissedPilotAdminNux: e.dismissedPilotAdminNux,
                dismissedSignupAdmin: e.dismissedSignupAdmin
            })
        }
    )
);
function m() {
    (0, d.j)(() => {
        A.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            userUpsellScreen: 'user_upsell',
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            entrypointGameId: null
        });
    });
}
