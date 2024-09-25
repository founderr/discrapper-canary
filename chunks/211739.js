n.d(t, {
    N5: function () {
        return o;
    },
    c4: function () {
        return i;
    },
    lc: function () {
        return s;
    },
    mJ: function () {
        return a;
    }
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
