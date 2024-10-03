n.d(t, {
    Ce: function () {
        return p;
    },
    GN: function () {
        return _;
    },
    PJ: function () {
        return f;
    },
    fH: function () {
        return E;
    },
    hz: function () {
        return i;
    },
    t1: function () {
        return h;
    },
    v0: function () {
        return r;
    }
});
var r,
    i,
    a,
    o = n(47120);
var s = n(652874),
    l = n(868888),
    u = n(731965),
    c = n(433517),
    d = n(963202);
!(function (e) {
    (e.ADMIN_UPSELL = 'admin_upsell'), (e.GET_STARTED = 'get_started'), (e.DISCOVERY = 'discovery'), (e.PLAYSTYLE = 'playstyle'), (e.TRAITS = 'traits'), (e.GAMES = 'games'), (e.SAVED_GUILDS = 'saved_guilds'), (e.PREFERENCES = 'preferences');
})(r || (r = {})),
    !(function (e) {
        (e.NONE = 'none'), (e.VALORANT = 'valorant'), (e.GENSHIN = 'genshin');
    })(i || (i = {})),
    !(function (e) {
        (e.USER_UPSELL = 'user_upsell'), (e.USER_ONBOARDING = 'user_onboarding');
    })(a || (a = {}));
let _ = (0, s.Z)(
    (0, l.tJ)(
        (e) => ({
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            completedNux: !1,
            userUpsellScreen: 'user_upsell',
            loadingGameApplication: !1,
            savedGuildIds: [],
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            dismissedPilotAdminNux: !1,
            entrypointGameId: null,
            setSavedGuildIds: (t) => (0, u.j)(() => e({ savedGuildIds: t })),
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
                    return null !== (t = c.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => c.K.set(e, t),
                removeItem: (e) => c.K.remove(e)
            }),
            partialize: (e) => ({
                mode: e.mode,
                game: e.game,
                completedNux: e.completedNux,
                savedGuildIds: e.savedGuildIds,
                selectedGames: e.selectedGames,
                selectedPlaystyle: e.selectedPlaystyle,
                selectedTraits: e.selectedTraits,
                dismissedPilotAdminNux: e.dismissedPilotAdminNux
            })
        }
    )
);
function E(e, t) {
    let n = _.getState().mode,
        r = _.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, d.rx)('setClanDiscoveryMode'),
            n = _.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
    }
    (0, u.j)(() => {
        let i = null != t ? t : r;
        _.setState({
            mode: e,
            previousMode: n,
            completedNux: i
        });
    });
}
function f() {
    (0, u.j)(() => {
        _.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            userUpsellScreen: 'user_upsell',
            savedGuildIds: [],
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
        r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: r,
        traits: e.selectedTraits
    };
}
function p() {
    (0, u.j)(() => {
        _.setState({ dismissedPilotAdminNux: !0 }), E('discovery');
    });
}
