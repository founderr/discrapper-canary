n.d(t, {
    CR: function () {
        return r;
    },
    eM: function () {
        return a;
    },
    m3: function () {
        return o;
    }
});
var i = n(570140),
    s = n(449224);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function r(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && o(t, n(t));
}
function o(e, t) {
    var n, r;
    let o = a(e),
        l = s.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null,
        gameId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
        widgetType: e.widget,
        visible: o && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
