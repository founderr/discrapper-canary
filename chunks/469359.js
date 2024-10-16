let n, a, _;
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
        t = u(e, !0);
    c.m.document.addEventListener('click', t, !1),
        c.m.document.addEventListener('keypress', t, !1),
        ['EventTarget', 'Node'].forEach((t) => {
            let r = c.m[t] && c.m[t].prototype;
            if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
                (0, E.hl)(r, 'addEventListener', function (t) {
                    return function (r, n, a) {
                        if ('click' === r || 'keypress' == r)
                            try {
                                let n = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
                                    _ = (n[r] = n[r] || { refCount: 0 });
                                if (!_.handler) {
                                    let n = u(e);
                                    (_.handler = n), t.call(this, r, n, a);
                                }
                                _.refCount++;
                            } catch (e) {}
                        return t.call(this, r, n, a);
                    };
                }),
                    (0, E.hl)(r, 'removeEventListener', function (e) {
                        return function (t, r, n) {
                            if ('click' === t || 'keypress' == t)
                                try {
                                    let r = this.__sentry_instrumentation_handlers__ || {},
                                        a = r[t];
                                    a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, n), (a.handler = void 0), delete r[t]), 0 === Object.keys(r).length && delete this.__sentry_instrumentation_handlers__);
                                } catch (e) {}
                            return e.call(this, t, r, n);
                        };
                    });
        });
}
function u(e, t = !1) {
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
        let u = 'keypress' === r.type ? 'input' : r.type;
        !(function (e) {
            if (e.type !== a) return !1;
            try {
                if (!e.target || e.target._sentryId !== _) return !1;
            } catch (e) {}
            return !0;
        })(r) &&
            (e({
                event: r,
                name: u,
                global: t
            }),
            (a = r.type),
            (_ = l ? l._sentryId : void 0)),
            clearTimeout(n),
            (n = c.m.setTimeout(() => {
                (_ = void 0), (a = void 0);
            }, 1000));
    };
}
