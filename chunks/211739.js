e.d(t, {
    N5: function () {
        return u;
    },
    c4: function () {
        return r;
    },
    lc: function () {
        return a;
    },
    mJ: function () {
        return l;
    }
});
var i = e(570140);
function r(n) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: n
    });
}
function l(n) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: n
    });
}
function u(n) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: n
    });
}
function a(n) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: n
    });
}
