n.d(t, {
    HV: function () {
        return o;
    },
    RI: function () {
        return i;
    },
    k5: function () {
        return c;
    },
    kR: function () {
        return s;
    },
    zY: function () {
        return d;
    }
});
var a = n(626135),
    r = n(981631);
function i(e) {
    let { selectedTab: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function s(e) {
    let { selectedCategoryId: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function c(e) {
    let { source: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
function o(e) {
    let { gameId: t, source: n } = e;
    a.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
        game_id: t,
        source: n
    });
}
function d(e) {
    let { gameId: t } = e;
    a.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP, { game_id: t });
}
