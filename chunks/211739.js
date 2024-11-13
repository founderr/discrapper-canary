e.d(t, {
    N5: function () {
        return l;
    },
    c4: function () {
        return a;
    },
    lc: function () {
        return u;
    },
    mJ: function () {
        return r;
    }
});
var i = e(570140);
function a(n) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: n
    });
}
function r(n) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: n
    });
}
function l(n) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: n
    });
}
function u(n) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: n
    });
}
