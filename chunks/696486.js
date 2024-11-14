r.d(t, {
    $k: function () {
        return d;
    },
    Dp: function () {
        return g;
    },
    Gx: function () {
        return U;
    },
    HN: function () {
        return P;
    },
    HR: function () {
        return N;
    },
    Hb: function () {
        return T;
    },
    Tt: function () {
        return O;
    },
    XU: function () {
        return L;
    },
    _4: function () {
        return p;
    },
    ed: function () {
        return C;
    },
    i0: function () {
        return R;
    },
    j5: function () {
        return D;
    },
    ve: function () {
        return I;
    },
    wy: function () {
        return A;
    },
    yc: function () {
        return M;
    }
});
var n = r(370336),
    a = r(370541),
    _ = r(101284),
    o = r(833873),
    i = r(356442),
    E = r(263449),
    c = r(899195),
    s = r(988097),
    l = r(793373),
    u = r(99342);
let I = 0,
    R = 1;
function N(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { data: a, op: _, parent_span_id: o, status: i, origin: E } = L(e);
    return (0, n.Jr)({
        parent_span_id: o,
        span_id: t,
        trace_id: r,
        data: a,
        op: _,
        status: i,
        origin: E
    });
}
function A(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { parent_span_id: a } = L(e);
    return (0, n.Jr)({
        parent_span_id: a,
        span_id: t,
        trace_id: r
    });
}
function T(e) {
    let { traceId: t, spanId: r } = e.spanContext(),
        n = O(e);
    return (0, a.$p)(t, r, n);
}
function d(e) {
    return 'number' == typeof e ? f(e) : Array.isArray(e) ? e[0] + e[1] / 1000000000 : e instanceof Date ? f(e.getTime()) : (0, _.ph)();
}
function f(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function L(e) {
    if (
        (function (e) {
            return 'function' == typeof e.getSpanJSON;
        })(e)
    )
        return e.getSpanJSON();
    try {
        let { spanId: t, traceId: r } = e.spanContext();
        if (
            (function (e) {
                return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
            })(e)
        ) {
            let { attributes: a, startTime: _, name: o, endTime: i, parentSpanId: E, status: l } = e;
            return (0, n.Jr)({
                span_id: t,
                trace_id: r,
                data: a,
                description: o,
                parent_span_id: E,
                start_timestamp: d(_),
                timestamp: d(i) || void 0,
                status: p(l),
                op: a[s.$J],
                origin: a[s.S3],
                _metrics_summary: (0, c.y)(e)
            });
        }
        return {
            span_id: t,
            trace_id: r
        };
    } catch (e) {
        return {};
    }
}
function O(e) {
    let { traceFlags: t } = e.spanContext();
    return t === R;
}
function p(e) {
    return e && e.code !== l.pq ? (e.code === l.OP ? 'ok' : e.message || 'unknown_error') : void 0;
}
let h = '_sentryChildSpans',
    S = '_sentryRootSpan';
function D(e, t) {
    let r = e[S] || e;
    (0, n.xp)(t, S, r), e[h] ? e[h].add(t) : (0, n.xp)(e, h, new Set([t]));
}
function C(e, t) {
    e[h] && e[h].delete(t);
}
function g(e) {
    let t = new Set();
    return (
        !(function e(r) {
            if (!t.has(r)) {
                if (O(r)) for (let n of (t.add(r), r[h] ? Array.from(r[h]) : [])) e(n);
            }
        })(e),
        Array.from(t)
    );
}
function U(e) {
    return e[S] || e;
}
function P() {
    let e = (0, i.c)(),
        t = (0, o.G)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, u.Y)((0, E.nZ)());
}
function M(e, t, r, n, a, _) {
    let o = P();
    o && (0, c.V)(o, e, t, r, n, a, _);
}
