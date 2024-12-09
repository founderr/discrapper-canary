n.d(t, {
    CR: function () {
        return r;
    },
    eM: function () {
        return o;
    },
    m3: function () {
        return s;
    }
});
var i = n(570140),
    l = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function r(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && s(t, n(t));
}
function s(e, t) {
    var n, r;
    let s = o(e),
        a = l.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null,
        gameId: null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : null,
        widgetType: e.widget,
        visible: s && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
