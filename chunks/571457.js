n.d(t, {
    $X: function () {
        return u;
    },
    HV: function () {
        return o;
    },
    RI: function () {
        return s;
    },
    k5: function () {
        return l;
    },
    kR: function () {
        return r;
    },
    zY: function () {
        return c;
    }
});
var i = n(626135),
    a = n(981631);
function s(e) {
    let { selectedTab: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function r(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function l(e) {
    let { source: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
function o(e) {
    let { gameId: t, source: n } = e;
    i.default.track(a.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
        game_id: t,
        source: n
    });
}
function c(e) {
    let { gameId: t } = e;
    i.default.track(a.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP, { game_id: t });
}
function u(e) {
    let { gameId: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, { game_id: t });
}
