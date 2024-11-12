var r,
    i,
    a = n(957578).Buffer,
    s = n(180756),
    o = n(138031),
    l = n(275227),
    u = n(871230),
    c = n.g.crypto && n.g.crypto.subtle,
    d = {
        sha: 'SHA-1',
        'sha-1': 'SHA-1',
        sha1: 'SHA-1',
        sha256: 'SHA-256',
        'sha-256': 'SHA-256',
        sha384: 'SHA-384',
        'sha-384': 'SHA-384',
        'sha-512': 'SHA-512',
        sha512: 'SHA-512'
    },
    f = [];
function _() {
    return i ? i : (i = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout);
}
function p(e, t, n, r, i) {
    return c
        .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
        .then(function (e) {
            return c.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: t,
                    iterations: n,
                    hash: { name: i }
                },
                e,
                r << 3
            );
        })
        .then(function (e) {
            return a.from(e);
        });
}
e.exports = function (e, t, i, h, m, g) {
    'function' == typeof m && ((g = m), (m = void 0));
    var E = d[(m = m || 'sha1').toLowerCase()];
    if (!E || 'function' != typeof n.g.Promise) {
        _()(function () {
            var n;
            try {
                n = l(e, t, i, h, m);
            } catch (e) {
                return g(e);
            }
            g(null, n);
        });
        return;
    }
    if ((s(i, h), (e = u(e, o, 'Password')), (t = u(t, o, 'Salt')), 'function' != typeof g)) throw Error('No callback provided to pbkdf2');
    !(function (e, t) {
        e.then(
            function (e) {
                _()(function () {
                    t(null, e);
                });
            },
            function (e) {
                _()(function () {
                    t(e);
                });
            }
        );
    })(
        (function (e) {
            if ((n.g.process && !n.g.process.browser) || !c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
            if (void 0 !== f[e]) return f[e];
            var t = p((r = r || a.alloc(8)), r, 10, 128, e)
                .then(function () {
                    return !0;
                })
                .catch(function () {
                    return !1;
                });
            return (f[e] = t), t;
        })(E).then(function (n) {
            return n ? p(e, t, i, h, E) : l(e, t, i, h, m);
        }),
        g
    );
};
