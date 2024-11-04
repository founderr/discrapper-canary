n.d(t, {
    CR: function () {
        return l;
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
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && a(t, n(t));
}
function a(e, t) {
    var n, l;
    let a = s(e),
        o = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
        gameId: null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : null,
        widgetType: e.widget,
        visible: a && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
