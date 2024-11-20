n.d(t, {
    CR: function () {
        return a;
    },
    eM: function () {
        return s;
    },
    m3: function () {
        return o;
    }
});
var i = n(570140),
    r = n(449224);
function s(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && o(t, n(t));
}
function o(e, t) {
    var n, a;
    let o = s(e),
        l = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null,
        gameId: null !== (a = null == l ? void 0 : l.id) && void 0 !== a ? a : null,
        widgetType: e.widget,
        visible: o && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
