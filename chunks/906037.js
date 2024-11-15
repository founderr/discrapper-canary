n.d(t, {
    CR: function () {
        return a;
    },
    eM: function () {
        return s;
    },
    m3: function () {
        return l;
    }
});
var i = n(570140),
    r = n(449224);
function s(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && l(t, n(t));
}
function l(e, t) {
    var n, a;
    let l = s(e),
        o = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
        gameId: null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : null,
        widgetType: e.widget,
        visible: l && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
