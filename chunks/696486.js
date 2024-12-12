r.d(t, {
    $k: function () {
        return d;
    },
    Dp: function () {
        return P;
    },
    Gx: function () {
        return g;
    },
    HN: function () {
        return U;
    },
    HR: function () {
        return A;
    },
    Hb: function () {
        return N;
    },
    Tt: function () {
        return L;
    },
    XU: function () {
        return O;
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
        return S;
    },
    ve: function () {
        return u;
    },
    wy: function () {
        return T;
    },
    yc: function () {
        return M;
    }
});
var a = r(370336),
    n = r(370541),
    _ = r(101284),
    o = r(833873),
    E = r(356442),
    i = r(263449),
    c = r(899195),
    s = r(988097),
    l = r(793373),
    I = r(99342);
let u = 0,
    R = 1;
function A(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { data: n, op: _, parent_span_id: o, status: E, origin: i } = O(e);
    return (0, a.Jr)({
        parent_span_id: o,
        span_id: t,
        trace_id: r,
        data: n,
        op: _,
        status: E,
        origin: i
    });
}
function T(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { parent_span_id: n } = O(e);
    return (0, a.Jr)({
        parent_span_id: n,
        span_id: t,
        trace_id: r
    });
}
function N(e) {
    let { traceId: t, spanId: r } = e.spanContext(),
        a = L(e);
    return (0, n.$p)(t, r, a);
}
function d(e) {
    return 'number' == typeof e ? f(e) : Array.isArray(e) ? e[0] + e[1] / 1000000000 : e instanceof Date ? f(e.getTime()) : (0, _.ph)();
}
function f(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function O(e) {
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
            let { attributes: n, startTime: _, name: o, endTime: E, parentSpanId: i, status: l } = e;
            return (0, a.Jr)({
                span_id: t,
                trace_id: r,
                data: n,
                description: o,
                parent_span_id: i,
                start_timestamp: d(_),
                timestamp: d(E) || void 0,
                status: p(l),
                op: n[s.$J],
                origin: n[s.S3],
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
function L(e) {
    let { traceFlags: t } = e.spanContext();
    return t === R;
}
function p(e) {
    return e && e.code !== l.pq ? (e.code === l.OP ? 'ok' : e.message || 'unknown_error') : void 0;
}
let h = '_sentryChildSpans',
    D = '_sentryRootSpan';
function S(e, t) {
    let r = e[D] || e;
    (0, a.xp)(t, D, r), e[h] ? e[h].add(t) : (0, a.xp)(e, h, new Set([t]));
}
function C(e, t) {
    e[h] && e[h].delete(t);
}
function P(e) {
    let t = new Set();
    return (
        !(function e(r) {
            if (!t.has(r)) {
                if (L(r)) for (let a of (t.add(r), r[h] ? Array.from(r[h]) : [])) e(a);
            }
        })(e),
        Array.from(t)
    );
}
function g(e) {
    return e[D] || e;
}
function U() {
    let e = (0, E.c)(),
        t = (0, o.G)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, I.Y)((0, i.nZ)());
}
function M(e, t, r, a, n, _) {
    let o = U();
    o && (0, c.V)(o, e, t, r, a, n, _);
}
