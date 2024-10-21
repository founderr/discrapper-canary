n.d(t, {
    Ce: function () {
        return m;
    },
    GN: function () {
        return f;
    },
    PJ: function () {
        return p;
    },
    fH: function () {
        return h;
    },
    hz: function () {
        return o;
    },
    t1: function () {
        return I;
    },
    v0: function () {
        return s;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(903797),
    c = n(60071),
    d = n(731965),
    _ = n(433517),
    E = n(963202);
((r = s || (s = {})).ADMIN_UPSELL = 'admin_upsell'), (r.GET_STARTED = 'get_started'), (r.DISCOVERY = 'discovery'), (r.PLAYSTYLE = 'playstyle'), (r.TRAITS = 'traits'), (r.GAMES = 'games'), (r.SAVED_GUILDS = 'saved_guilds'), (r.PREFERENCES = 'preferences'), ((i = o || (o = {})).NONE = 'none'), (i.VALORANT = 'valorant'), (i.GENSHIN = 'genshin'), ((a = l || (l = {})).USER_UPSELL = 'user_upsell'), (a.USER_ONBOARDING = 'user_onboarding');
let f = (0, u.Z)(
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
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = _.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => _.K.set(e, t),
                removeItem: (e) => _.K.remove(e)
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
function h(e, t) {
    let n = f.getState().mode,
        r = f.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, E.rx)('setClanDiscoveryMode'),
            n = f.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
    }
    (0, d.j)(() => {
        f.setState({
            mode: e,
            previousMode: n,
            completedNux: null != t ? t : r
        });
    });
}
function p() {
    (0, d.j)(() => {
        f.setState({
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
function I(e) {
    var t;
    let n = e.selectedGames,
        r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: r,
        traits: e.selectedTraits
    };
}
function m() {
    (0, d.j)(() => {
        f.setState({ dismissedPilotAdminNux: !0 }), h('discovery');
    });
}
