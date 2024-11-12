n.d(t, {
    m: function () {
        return l;
    }
});
var r = n(573654),
    i = n(158545),
    a = n(144459),
    s = n(964742),
    o = {
        type: s.TL,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            l = n.publishSource,
            u = n.clientOffset,
            c = n.getSourceClientOffset,
            d = e.getMonitor(),
            f = e.getRegistry();
        e.dispatch((0, i.T)(u)),
            (function (e, t, n) {
                (0, r.k)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
                    e.forEach(function (e) {
                        (0, r.k)(n.getSource(e), 'Expected sourceIds to be registered.');
                    });
            })(t, d, f);
        var _ = (function (e, t) {
            for (var n = null, r = e.length - 1; r >= 0; r--)
                if (t.canDragSource(e[r])) {
                    n = e[r];
                    break;
                }
            return n;
        })(t, d);
        if (null === _) {
            e.dispatch(o);
            return;
        }
        var p = null;
        if (u) {
            if (!c) throw Error('getSourceClientOffset must be defined');
            (function (e) {
                (0, r.k)('function' == typeof e, 'When clientOffset is provided, getSourceClientOffset must be a function.');
            })(c),
                (p = c(_));
        }
        e.dispatch((0, i.T)(u, p));
        var h = f.getSource(_).beginDrag(d, _);
        if (null != h) {
            (function (e) {
                (0, r.k)((0, a.Kn)(e), 'Item must be an object.');
            })(h),
                f.pinSource(_);
            var m = f.getSourceType(_);
            return {
                type: s.qu,
                payload: {
                    itemType: m,
                    item: h,
                    sourceId: _,
                    clientOffset: u || null,
                    sourceClientOffset: p || null,
                    isSourcePublic: !!(void 0 === l || l)
                }
            };
        }
    };
}
