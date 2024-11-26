let a, n, _;
r.d(t, {
    O: function () {
        return s;
    }
});
var o = r(578346),
    E = r(370336),
    i = r(394798),
    c = r(395848);
function s(e) {
    (0, o.Hj)('dom', e), (0, o.D2)('dom', l);
}
function l() {
    if (!c.m.document) return;
    let e = o.rK.bind(null, 'dom'),
        t = I(e, !0);
    c.m.document.addEventListener('click', t, !1),
        c.m.document.addEventListener('keypress', t, !1),
        ['EventTarget', 'Node'].forEach((t) => {
            let r = c.m[t] && c.m[t].prototype;
            if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
                (0, E.hl)(r, 'addEventListener', function (t) {
                    return function (r, a, n) {
                        if ('click' === r || 'keypress' == r)
                            try {
                                let a = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
                                    _ = (a[r] = a[r] || { refCount: 0 });
                                if (!_.handler) {
                                    let a = I(e);
                                    (_.handler = a), t.call(this, r, a, n);
                                }
                                _.refCount++;
                            } catch (e) {}
                        return t.call(this, r, a, n);
                    };
                }),
                    (0, E.hl)(r, 'removeEventListener', function (e) {
                        return function (t, r, a) {
                            if ('click' === t || 'keypress' == t)
                                try {
                                    let r = this.__sentry_instrumentation_handlers__ || {},
                                        n = r[t];
                                    n && (n.refCount--, n.refCount <= 0 && (e.call(this, t, n.handler, a), (n.handler = void 0), delete r[t]), 0 === Object.keys(r).length && delete this.__sentry_instrumentation_handlers__);
                                } catch (e) {}
                            return e.call(this, t, r, a);
                        };
                    });
        });
}
function I(e, t = !1) {
    return (r) => {
        var o, s;
        if (!r || r._sentryCaptured) return;
        let l = (function (e) {
            try {
                return e.target;
            } catch (e) {
                return null;
            }
        })(r);
        if (((o = r.type), (s = l), 'keypress' === o && (!s || !s.tagName || ('INPUT' !== s.tagName && 'TEXTAREA' !== s.tagName && !s.isContentEditable)))) return;
        (0, E.xp)(r, '_sentryCaptured', !0), l && !l._sentryId && (0, E.xp)(l, '_sentryId', (0, i.DM)());
        let I = 'keypress' === r.type ? 'input' : r.type;
        !(function (e) {
            if (e.type !== n) return !1;
            try {
                if (!e.target || e.target._sentryId !== _) return !1;
            } catch (e) {}
            return !0;
        })(r) &&
            (e({
                event: r,
                name: I,
                global: t
            }),
            (n = r.type),
            (_ = l ? l._sentryId : void 0)),
            clearTimeout(a),
            (a = c.m.setTimeout(() => {
                (_ = void 0), (n = void 0);
            }, 1000));
    };
}
