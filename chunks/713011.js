r.d(n, {
    F: function () {
        return s;
    }
});
var i = r(573654),
    a = r(964742);
function s(e) {
    return function () {
        var n = e.getMonitor(),
            r = e.getRegistry();
        o(n);
        var i = n.getSourceId();
        return null != i && (r.getSource(i, !0).endDrag(n, i), r.unpinSource()), { type: a.Bs };
    };
}
function o(e) {
    (0, i.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
}
