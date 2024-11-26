r.d(t, {
    BO: function () {
        return i;
    },
    Cd: function () {
        return f;
    },
    HY: function () {
        return d;
    },
    Jd: function () {
        return E;
    },
    KQ: function () {
        return R;
    },
    R: function () {
        return s;
    },
    V$: function () {
        return I;
    },
    f4: function () {
        return u;
    },
    gv: function () {
        return c;
    },
    mL: function () {
        return N;
    },
    zQ: function () {
        return A;
    }
});
var a = r(967752),
    n = r(202811),
    _ = r(370336),
    o = r(899517);
function E(e, t = []) {
    return [e, t];
}
function i(e, t) {
    let [r, a] = e;
    return [r, [...a, t]];
}
function c(e, t) {
    for (let r of e[1]) {
        let e = r[0].type;
        if (t(r, e)) return !0;
    }
    return !1;
}
function s(e, t) {
    return c(e, (e, r) => t.includes(r));
}
function l(e) {
    return o.n.__SENTRY__ && o.n.__SENTRY__.encodePolyfill ? o.n.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e);
}
function I(e) {
    let [t, r] = e,
        a = JSON.stringify(t);
    function _(e) {
        'string' == typeof a ? (a = 'string' == typeof e ? a + e : [l(a), e]) : a.push('string' == typeof e ? l(e) : e);
    }
    for (let e of r) {
        let [t, r] = e;
        if (
            (_(`
${JSON.stringify(t)}
`),
            'string' == typeof r || r instanceof Uint8Array)
        )
            _(r);
        else {
            let e;
            try {
                e = JSON.stringify(r);
            } catch (t) {
                e = JSON.stringify((0, n.Fv)(r));
            }
            _(e);
        }
    }
    return 'string' == typeof a
        ? a
        : (function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  r = 0;
              for (let a of e) t.set(a, r), (r += a.length);
              return t;
          })(a);
}
function u(e) {
    let t = 'string' == typeof e ? l(e) : e;
    function r(e) {
        let r = t.subarray(0, e);
        return (t = t.subarray(e + 1)), r;
    }
    function a() {
        var e;
        let a = t.indexOf(10);
        return a < 0 && (a = t.length), JSON.parse(((e = r(a)), o.n.__SENTRY__ && o.n.__SENTRY__.decodePolyfill ? o.n.__SENTRY__.decodePolyfill(e) : new TextDecoder().decode(e)));
    }
    let n = a(),
        _ = [];
    for (; t.length; ) {
        let e = a(),
            t = 'number' == typeof e.length ? e.length : void 0;
        _.push([e, t ? r(t) : a()]);
    }
    return [n, _];
}
function R(e) {
    return [{ type: 'span' }, e];
}
function A(e) {
    let t = 'string' == typeof e.data ? l(e.data) : e.data;
    return [
        (0, _.Jr)({
            type: 'attachment',
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        }),
        t
    ];
}
let T = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    profile_chunk: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
    check_in: 'monitor',
    feedback: 'feedback',
    span: 'span',
    statsd: 'metric_bucket'
};
function N(e) {
    return T[e];
}
function d(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: r } = e.sdk;
    return {
        name: t,
        version: r
    };
}
function f(e, t, r, n) {
    let o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!r && n && { dsn: (0, a.RA)(n) }),
        ...(o && { trace: (0, _.Jr)({ ...o }) })
    };
}
