r.d(t, {
    $k: function () {
        return d;
    },
    Dp: function () {
        return g;
    },
    Gx: function () {
        return M;
    },
    HN: function () {
        return P;
    },
    HR: function () {
        return A;
    },
    Hb: function () {
        return N;
    },
    Tt: function () {
        return f;
    },
    XU: function () {
        return p;
    },
    _4: function () {
        return L;
    },
    ed: function () {
        return C;
    },
    i0: function () {
        return R;
    },
    j5: function () {
        return h;
    },
    ve: function () {
        return l;
    },
    wy: function () {
        return T;
    },
    yc: function () {
        return U;
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
    I = r(793373),
    u = r(99342);
let l = 0,
    R = 1;
function A(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { data: a, op: _, parent_span_id: o, status: i, origin: E } = p(e);
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
function T(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { parent_span_id: a } = p(e);
    return (0, n.Jr)({
        parent_span_id: a,
        span_id: t,
        trace_id: r
    });
}
function N(e) {
    let { traceId: t, spanId: r } = e.spanContext(),
        n = f(e);
    return (0, a.$p)(t, r, n);
}
function d(e) {
    return 'number' == typeof e ? O(e) : Array.isArray(e) ? e[0] + e[1] / 1000000000 : e instanceof Date ? O(e.getTime()) : (0, _.ph)();
}
function O(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function p(e) {
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
            let { attributes: a, startTime: _, name: o, endTime: i, parentSpanId: E, status: I } = e;
            return (0, n.Jr)({
                span_id: t,
                trace_id: r,
                data: a,
                description: o,
                parent_span_id: E,
                start_timestamp: d(_),
                timestamp: d(i) || void 0,
                status: L(I),
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
function f(e) {
    let { traceFlags: t } = e.spanContext();
    return t === R;
}
function L(e) {
    return e && e.code !== I.pq ? (e.code === I.OP ? 'ok' : e.message || 'unknown_error') : void 0;
}
let S = '_sentryChildSpans',
    D = '_sentryRootSpan';
function h(e, t) {
    let r = e[D] || e;
    (0, n.xp)(t, D, r), e[S] ? e[S].add(t) : (0, n.xp)(e, S, new Set([t]));
}
function C(e, t) {
    e[S] && e[S].delete(t);
}
function g(e) {
    let t = new Set();
    return (
        !(function e(r) {
            if (!t.has(r)) {
                if (f(r)) for (let n of (t.add(r), r[S] ? Array.from(r[S]) : [])) e(n);
            }
        })(e),
        Array.from(t)
    );
}
function M(e) {
    return e[D] || e;
}
function P() {
    let e = (0, i.c)(),
        t = (0, o.G)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, u.Y)((0, E.nZ)());
}
function U(e, t, r, n, a, _) {
    let o = P();
    o && (0, c.V)(o, e, t, r, n, a, _);
}
