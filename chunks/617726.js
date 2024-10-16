r.d(t, {
    BO: function () {
        return i;
    },
    Cd: function () {
        return L;
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
        return u;
    },
    f4: function () {
        return I;
    },
    gv: function () {
        return c;
    },
    mL: function () {
        return T;
    },
    zQ: function () {
        return N;
    }
});
var n = r(967752),
    a = r(202811),
    _ = r(370336),
    o = r(899517);
function E(e, t = []) {
    return [e, t];
}
function i(e, t) {
    let [r, n] = e;
    return [r, [...n, t]];
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
function u(e) {
    let [t, r] = e,
        n = JSON.stringify(t);
    function _(e) {
        'string' == typeof n ? (n = 'string' == typeof e ? n + e : [l(n), e]) : n.push('string' == typeof e ? l(e) : e);
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
                e = JSON.stringify((0, a.Fv)(r));
            }
            _(e);
        }
    }
    return 'string' == typeof n
        ? n
        : (function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  r = 0;
              for (let n of e) t.set(n, r), (r += n.length);
              return t;
          })(n);
}
function I(e) {
    let t = 'string' == typeof e ? l(e) : e;
    function r(e) {
        let r = t.subarray(0, e);
        return (t = t.subarray(e + 1)), r;
    }
    function n() {
        var e;
        let n = t.indexOf(10);
        return n < 0 && (n = t.length), JSON.parse(((e = r(n)), o.n.__SENTRY__ && o.n.__SENTRY__.decodePolyfill ? o.n.__SENTRY__.decodePolyfill(e) : new TextDecoder().decode(e)));
    }
    let a = n(),
        _ = [];
    for (; t.length; ) {
        let e = n(),
            t = 'number' == typeof e.length ? e.length : void 0;
        _.push([e, t ? r(t) : n()]);
    }
    return [a, _];
}
function R(e) {
    return [{ type: 'span' }, e];
}
function N(e) {
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
let A = {
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
function T(e) {
    return A[e];
}
function d(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: r } = e.sdk;
    return {
        name: t,
        version: r
    };
}
function L(e, t, r, a) {
    let o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!r && a && { dsn: (0, n.RA)(a) }),
        ...(o && { trace: (0, _.Jr)({ ...o }) })
    };
}
