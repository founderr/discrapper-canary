r.d(t, {
    gi: function () {
        return i;
    },
    yo: function () {
        return E;
    }
});
var n = r(370336),
    a = r(394798),
    _ = r(305625),
    o = r(696486);
function i(e, t) {
    let { fingerprint: r, span: i, breadcrumbs: E, sdkProcessingMetadata: c } = t;
    (function (e, t) {
        let { extra: r, tags: a, user: _, contexts: o, level: i, transactionName: E } = t,
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
            i && (e.level = i),
            E && 'transaction' !== e.type && (e.transaction = E);
    })(e, t),
        i &&
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
            })(e, i),
        (function (e, t) {
            (e.fingerprint = e.fingerprint ? (0, a.lE)(e.fingerprint) : []), t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        })(e, r),
        (function (e, t) {
            let r = [...(e.breadcrumbs || []), ...t];
            e.breadcrumbs = r.length ? r : void 0;
        })(e, E),
        (function (e, t) {
            e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...t
            };
        })(e, c);
}
function E(e, t) {
    let { extra: r, tags: n, user: a, contexts: _, level: o, sdkProcessingMetadata: i, breadcrumbs: E, fingerprint: s, eventProcessors: l, attachments: u, propagationContext: I, transactionName: R, span: A } = t;
    c(e, 'extra', r),
        c(e, 'tags', n),
        c(e, 'user', a),
        c(e, 'contexts', _),
        c(e, 'sdkProcessingMetadata', i),
        o && (e.level = o),
        R && (e.transactionName = R),
        A && (e.span = A),
        E.length && (e.breadcrumbs = [...e.breadcrumbs, ...E]),
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
