n.d(t, {
    $X: function () {
        return u;
    },
    HV: function () {
        return o;
    },
    RI: function () {
        return r;
    },
    k5: function () {
        return l;
    },
    kR: function () {
        return i;
    },
    zY: function () {
        return c;
    }
});
var a = n(626135),
    s = n(981631);
function r(e) {
    let { selectedTab: t } = e;
    a.default.track(s.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function i(e) {
    let { selectedCategoryId: t } = e;
    a.default.track(s.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function l(e) {
    let { source: t } = e;
    a.default.track(s.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
function o(e) {
    let { gameId: t, source: n } = e;
    a.default.track(s.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
        game_id: t,
        source: n
    });
}
function c(e) {
    let { gameId: t } = e;
    a.default.track(s.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP, { game_id: t });
}
function u(e) {
    let { gameId: t } = e;
    a.default.track(s.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, { game_id: t });
}
