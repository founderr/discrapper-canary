n.d(t, {
    CR: function () {
        return a;
    },
    eM: function () {
        return r;
    },
    m3: function () {
        return o;
    }
});
var i = n(570140),
    s = n(449224);
function r(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || r(e) !== r(t)) && o(t, n(t));
}
function o(e, t) {
    var n, a;
    let o = r(e),
        l = s.Z.getGame();
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
