r.d(n, {
    j: function () {
        return c;
    },
    r: function () {
        return l;
    }
});
var i = r(99815),
    a = r(81063),
    s = r(463031);
function o(e) {
    var n;
    let a = e.users[0],
        s = null == a ? void 0 : null === (n = a.statistics[i.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === n ? void 0 : n.value;
    try {
        return null != s ? r(624119)('./champion_'.concat(s, '.jpg')).default : r(721191).Z;
    } catch {
        return r(721191).Z;
    }
}
function l(e) {
    return e.leaderboard_id === s.z ? o(e) : null != e.settings.splash_asset_id ? (0, a.getAssetImage)(e.settings.application_id, e.settings.splash_asset_id) : null;
}
function u(e) {
    var n, a;
    let s = null == e ? void 0 : null === (n = e.users) || void 0 === n ? void 0 : n[0],
        o = null == s ? void 0 : null === (a = s.statistics[i.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === a ? void 0 : a.value;
    try {
        return null != o ? r(692425)('./champion_'.concat(o, '.jpg')).default : null;
    } catch {
        return null;
    }
}
function c(e) {
    return e.leaderboard_id === s.z ? u(e) : (0, a.getAssetImage)(e.settings.application_id, e.settings.winner_asset_id);
}
