i.d(t, {
    CR: function () {
        return s;
    },
    eM: function () {
        return o;
    },
    m3: function () {
        return r;
    }
});
var n = i(570140),
    l = i(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function s(e, t, i) {
    (e.locked !== t.locked || e.pinned !== t.pinned || i(e) !== i(t) || o(e) !== o(t)) && r(t, i(t));
}
function r(e, t) {
    var i, s;
    let r = o(e),
        a = l.Z.getGame();
    n.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (i = null == a ? void 0 : a.name) && void 0 !== i ? i : null,
        gameId: null !== (s = null == a ? void 0 : a.id) && void 0 !== s ? s : null,
        widgetType: e.widget,
        visible: r && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
