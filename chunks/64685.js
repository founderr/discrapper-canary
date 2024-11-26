r.d(t, {
    Uf: function () {
        return c;
    },
    cf: function () {
        return s;
    }
});
var a = r(573736),
    n = r(370336),
    _ = r(694043),
    o = r(101284),
    E = r(899517),
    i = r(578346);
function c(e, t) {
    let r = 'fetch';
    (0, i.Hj)(r, e), (0, i.D2)(r, () => l(void 0, t));
}
function s(e) {
    let t = 'fetch-body-resolved';
    (0, i.Hj)(t, e), (0, i.D2)(t, () => l(I));
}
function l(e, t = !1) {
    if (!t || !!(0, _.t$)())
        (0, n.hl)(E.n, 'fetch', function (t) {
            return function (...r) {
                let { method: _, url: c } = (function (e) {
                        if (0 === e.length)
                            return {
                                method: 'GET',
                                url: ''
                            };
                        if (2 === e.length) {
                            let [t, r] = e;
                            return {
                                url: R(t),
                                method: u(r, 'method') ? String(r.method).toUpperCase() : 'GET'
                            };
                        }
                        let t = e[0];
                        return {
                            url: R(t),
                            method: u(t, 'method') ? String(t.method).toUpperCase() : 'GET'
                        };
                    })(r),
                    s = {
                        args: r,
                        fetchData: {
                            method: _,
                            url: c
                        },
                        startTimestamp: 1000 * (0, o.ph)()
                    };
                !e && (0, i.rK)('fetch', { ...s });
                let l = Error().stack;
                return t.apply(E.n, r).then(
                    async (t) => {
                        if (e) e(t);
                        else {
                            let e = {
                                ...s,
                                endTimestamp: 1000 * (0, o.ph)(),
                                response: t
                            };
                            (0, i.rK)('fetch', e);
                        }
                        return t;
                    },
                    (t) => {
                        if (!e) {
                            let e = {
                                ...s,
                                endTimestamp: 1000 * (0, o.ph)(),
                                error: t
                            };
                            throw ((0, i.rK)('fetch', e), (0, a.VZ)(t) && void 0 === t.stack && ((t.stack = l), (0, n.xp)(t, 'framesToPop', 1)), t);
                        }
                    }
                );
            };
        });
}
async function I(e) {
    let t;
    try {
        t = e.clone();
    } catch (e) {}
    await (function (e, t) {
        if (e && e.body) {
            let a = e.body.getReader();
            async function r({ done: e }) {
                if (e) return Promise.resolve();
                try {
                    let e = await Promise.race([
                        a.read(),
                        new Promise((e) => {
                            setTimeout(() => {
                                e({ done: !0 });
                            }, 5000);
                        })
                    ]);
                    await r(e);
                } catch (e) {}
            }
            a.read()
                .then(r)
                .then(() => {
                    t();
                })
                .catch(() => {});
        }
    })(t, () => {
        (0, i.rK)('fetch-body-resolved', {
            endTimestamp: 1000 * (0, o.ph)(),
            response: e
        });
    });
}
function u(e, t) {
    return !!e && 'object' == typeof e && !!e[t];
}
function R(e) {
    return 'string' == typeof e ? e : e ? (u(e, 'url') ? e.url : e.toString ? e.toString() : '') : '';
}
