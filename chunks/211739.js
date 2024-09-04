_.d(E, {
    N5: function () {
        return a;
    },
    c4: function () {
        return n;
    },
    lc: function () {
        return M;
    },
    mJ: function () {
        return s;
    }
});
var t = _(570140);
function n(e) {
    t.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function s(e) {
    t.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function a(e) {
    t.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function M(e) {
    t.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
