r.d(t, {
    gi: function () {
        return E;
    },
    yo: function () {
        return i;
    }
});
var n = r(370336),
    a = r(394798),
    _ = r(305625),
    o = r(696486);
function E(e, t) {
    let { fingerprint: r, span: E, breadcrumbs: i, sdkProcessingMetadata: c } = t;
    (function (e, t) {
        let { extra: r, tags: a, user: _, contexts: o, level: E, transactionName: i } = t,
            c = (0, n.Jr)(r);
        c &&
            Object.keys(c).length &&
            (e.extra = {
                ...c,
                ...e.extra
            });
        let s = (0, n.Jr)(a);
        s &&
            Object.keys(s).length &&
            (e.tags = {
                ...s,
                ...e.tags
            });
        let l = (0, n.Jr)(_);
        l &&
            Object.keys(l).length &&
            (e.user = {
                ...l,
                ...e.user
            });
        let u = (0, n.Jr)(o);
        u &&
            Object.keys(u).length &&
            (e.contexts = {
                ...u,
                ...e.contexts
            }),
            E && (e.level = E),
            i && 'transaction' !== e.type && (e.transaction = i);
    })(e, t),
        E &&
            (function (e, t) {
                (e.contexts = {
                    trace: (0, o.wy)(t),
                    ...e.contexts
                }),
                    (e.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, _.jC)(t),
                        ...e.sdkProcessingMetadata
                    });
                let r = (0, o.Gx)(t),
                    n = (0, o.XU)(r).description;
                n && !e.transaction && 'transaction' === e.type && (e.transaction = n);
            })(e, E),
        (function (e, t) {
            (e.fingerprint = e.fingerprint ? (0, a.lE)(e.fingerprint) : []), t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        })(e, r),
        (function (e, t) {
            let r = [...(e.breadcrumbs || []), ...t];
            e.breadcrumbs = r.length ? r : void 0;
        })(e, i),
        (function (e, t) {
            e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...t
            };
        })(e, c);
}
function i(e, t) {
    let { extra: r, tags: n, user: a, contexts: _, level: o, sdkProcessingMetadata: E, breadcrumbs: i, fingerprint: s, eventProcessors: l, attachments: u, propagationContext: I, transactionName: R, span: N } = t;
    c(e, 'extra', r),
        c(e, 'tags', n),
        c(e, 'user', a),
        c(e, 'contexts', _),
        c(e, 'sdkProcessingMetadata', E),
        o && (e.level = o),
        R && (e.transactionName = R),
        N && (e.span = N),
        i.length && (e.breadcrumbs = [...e.breadcrumbs, ...i]),
        s.length && (e.fingerprint = [...e.fingerprint, ...s]),
        l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
        u.length && (e.attachments = [...e.attachments, ...u]),
        (e.propagationContext = {
            ...e.propagationContext,
            ...I
        });
}
function c(e, t, r) {
    if (r && Object.keys(r).length) for (let n in ((e[t] = { ...e[t] }), r)) Object.prototype.hasOwnProperty.call(r, n) && (e[t][n] = r[n]);
}
