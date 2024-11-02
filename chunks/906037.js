n.d(t, {
    CR: function () {
        return o;
    },
    eM: function () {
        return s;
    },
    m3: function () {
        return a;
    }
});
var i = n(570140),
    r = n(449224);
function s(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && a(t, n(t));
}
function a(e, t) {
    var n, o;
    let a = s(e),
        l = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null,
        gameId: null !== (o = null == l ? void 0 : l.id) && void 0 !== o ? o : null,
        widgetType: e.widget,
        visible: a && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
