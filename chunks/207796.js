n.d(t, {
    Ce: function () {
        return b;
    },
    GN: function () {
        return x;
    },
    PJ: function () {
        return p;
    },
    fH: function () {
        return f;
    },
    hz: function () {
        return o;
    },
    t1: function () {
        return g;
    },
    v0: function () {
        return i;
    }
});
var r,
    a,
    l,
    i,
    o,
    s,
    c = n(652874),
    d = n(868888),
    u = n(731965),
    m = n(433517),
    h = n(963202);
((r = i || (i = {})).ADMIN_UPSELL = 'admin_upsell'), (r.GET_STARTED = 'get_started'), (r.DISCOVERY = 'discovery'), (r.PLAYSTYLE = 'playstyle'), (r.TRAITS = 'traits'), (r.GAMES = 'games'), (r.SAVED_GUILDS = 'saved_guilds'), (r.PREFERENCES = 'preferences'), ((a = o || (o = {})).NONE = 'none'), (a.VALORANT = 'valorant'), (a.GENSHIN = 'genshin'), ((l = s || (s = {})).USER_UPSELL = 'user_upsell'), (l.USER_ONBOARDING = 'user_onboarding');
let x = (0, c.Z)(
    (0, d.tJ)(
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
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = m.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => m.K.set(e, t),
                removeItem: (e) => m.K.remove(e)
            }),
            partialize: (e) => ({
                mode: e.mode,
                game: e.game,
                completedNux: e.completedNux,
                selectedGames: e.selectedGames,
                selectedPlaystyle: e.selectedPlaystyle,
                selectedTraits: e.selectedTraits,
                dismissedPilotAdminNux: e.dismissedPilotAdminNux
            })
        }
    )
);
function f(e, t) {
    let n = x.getState().mode,
        r = x.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, h.rx)('setClanDiscoveryMode'),
            n = x.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
    }
    (0, u.j)(() => {
        x.setState({
            mode: e,
            previousMode: n,
            completedNux: null != t ? t : r
        });
    });
}
function p() {
    (0, u.j)(() => {
        x.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
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
function g(e) {
    var t;
    let n = e.selectedGames,
        r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: r,
        traits: e.selectedTraits
    };
}
function b() {
    (0, u.j)(() => {
        x.setState({ dismissedPilotAdminNux: !0 }), f('discovery');
    });
}
