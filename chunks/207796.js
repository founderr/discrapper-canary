n.d(t, {
    GN: function () {
        return m;
    },
    PJ: function () {
        return x;
    }
});
var r,
    a,
    l,
    i,
    o,
    s,
    c = n(280836),
    d = n(454000),
    u = n(731965),
    h = n(433517);
n(963202), ((r = i || (i = {})).ADMIN_UPSELL = 'admin_upsell'), (r.GET_STARTED = 'get_started'), (r.DISCOVERY = 'discovery'), (r.PLAYSTYLE = 'playstyle'), (r.TRAITS = 'traits'), (r.GAMES = 'games'), (r.SAVED_GUILDS = 'saved_guilds'), (r.PREFERENCES = 'preferences'), ((a = o || (o = {})).NONE = 'none'), (a.VALORANT = 'valorant'), (a.GENSHIN = 'genshin'), ((l = s || (s = {})).USER_UPSELL = 'user_upsell'), (l.USER_ONBOARDING = 'user_onboarding');
let m = (0, d.F)()(
    (0, c.tJ)(
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
            setGame: (t) => (0, u.j)(() => e({ game: t })),
            setSelectedGames: (t) => {
                (0, u.j)(() =>
                    e({
                        selectedGames: t,
                        completedNux: !0
                    })
                );
            },
            setSelectedPlaystyle: (t) =>
                (0, u.j)(() =>
                    e({
                        selectedPlaystyle: t,
                        completedNux: !0
                    })
                ),
            setSelectedTraits: (t) =>
                (0, u.j)(() =>
                    e({
                        selectedTraits: t,
                        completedNux: !0
                    })
                ),
            setUserUpsellScreen: (t) => (0, u.j)(() => e({ userUpsellScreen: t }))
        }),
        {
            name: 'clan-discovery',
            storage: (0, c.FL)(() => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = h.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => h.K.set(e, t),
                removeItem: (e) => h.K.remove(e)
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
function x() {
    (0, u.j)(() => {
        m.setState({
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
