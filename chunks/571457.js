n.d(t, {
    $X: function () {
        return d;
    },
    HV: function () {
        return s;
    },
    RI: function () {
        return l;
    },
    k5: function () {
        return o;
    },
    kR: function () {
        return a;
    },
    zY: function () {
        return c;
    }
});
var i = n(626135),
    r = n(981631);
function l(e) {
    let { selectedTab: t } = e;
    i.default.track(r.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function a(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(r.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function o(e) {
    let { source: t } = e;
    i.default.track(r.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
function s(e) {
    let { gameId: t, source: n } = e;
    i.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
        game_id: t,
        source: n
    });
}
function c(e) {
    let { gameId: t } = e;
    i.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP, { game_id: t });
}
function d(e) {
    let { gameId: t } = e;
    i.default.track(r.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, { game_id: t });
}
