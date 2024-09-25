n.d(t, {
    m: function () {
        return l;
    }
});
var r = n(573654),
    i = n(158545),
    a = n(144459),
    o = n(964742),
    s = {
        type: o.TL,
        payload: {
            clientOffset: null,
            sourceClientOffset: null
        }
    };
function l(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
            r = n.publishSource,
            a = void 0 === r || r,
            l = n.clientOffset,
            E = n.getSourceClientOffset,
            f = e.getMonitor(),
            h = e.getRegistry();
        e.dispatch((0, i.T)(l)), u(t, f, h);
        var p = _(t, f);
        if (null === p) {
            e.dispatch(s);
            return;
        }
        var m = null;
        if (l) {
            if (!E) throw Error('getSourceClientOffset must be defined');
            c(E), (m = E(p));
        }
        e.dispatch((0, i.T)(l, m));
        var I = h.getSource(p).beginDrag(f, p);
        if (null != I) {
            d(I), h.pinSource(p);
            var T = h.getSourceType(p);
            return {
                type: o.qu,
                payload: {
                    itemType: T,
                    item: I,
                    sourceId: p,
                    clientOffset: l || null,
                    sourceClientOffset: m || null,
                    isSourcePublic: !!a
                }
            };
        }
    };
}
function u(e, t, n) {
    (0, r.k)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
        e.forEach(function (e) {
            (0, r.k)(n.getSource(e), 'Expected sourceIds to be registered.');
        });
}
function c(e) {
    (0, r.k)('function' == typeof e, 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function d(e) {
    (0, r.k)((0, a.Kn)(e), 'Item must be an object.');
}
function _(e, t) {
    for (var n = null, r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
            n = e[r];
            break;
        }
    return n;
}
