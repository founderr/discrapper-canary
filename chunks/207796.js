n.d(t, {
    Ce: function () {
        return N;
    },
    GN: function () {
        return I;
    },
    PJ: function () {
        return T;
    },
    fH: function () {
        return m;
    },
    hz: function () {
        return l;
    },
    t1: function () {
        return h;
    },
    v0: function () {
        return r;
    }
});
var i,
    a,
    s,
    r,
    l,
    o,
    c = n(652874),
    u = n(868888),
    d = n(731965),
    _ = n(433517),
    E = n(963202);
((i = r || (r = {})).ADMIN_UPSELL = 'admin_upsell'), (i.GET_STARTED = 'get_started'), (i.DISCOVERY = 'discovery'), (i.PLAYSTYLE = 'playstyle'), (i.TRAITS = 'traits'), (i.GAMES = 'games'), (i.SAVED_GUILDS = 'saved_guilds'), (i.PREFERENCES = 'preferences'), ((a = l || (l = {})).NONE = 'none'), (a.VALORANT = 'valorant'), (a.GENSHIN = 'genshin'), ((s = o || (o = {})).USER_UPSELL = 'user_upsell'), (s.USER_ONBOARDING = 'user_onboarding');
let I = (0, c.Z)(
    (0, u.tJ)(
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
function m(e, t) {
    let n = I.getState().mode,
        i = I.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, E.rx)('setClanDiscoveryMode'),
            n = I.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
    }
    (0, d.j)(() => {
        I.setState({
            mode: e,
            previousMode: n,
            completedNux: null != t ? t : i
        });
    });
}
function T() {
    (0, d.j)(() => {
        I.setState({
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
function h(e) {
    var t;
    let n = e.selectedGames,
        i = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: i,
        traits: e.selectedTraits
    };
}
function N() {
    (0, d.j)(() => {
        I.setState({ dismissedPilotAdminNux: !0 }), m('discovery');
    });
}
