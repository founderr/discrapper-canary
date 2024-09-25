var r,
    i,
    a = n(957578).Buffer,
    o = n(180756),
    s = n(138031),
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
    _ = [];
function E(e) {
    if ((n.g.process && !n.g.process.browser) || !c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
    if (void 0 !== _[e]) return _[e];
    var t = h((r = r || a.alloc(8)), r, 10, 128, e)
        .then(function () {
            return !0;
        })
        .catch(function () {
            return !1;
        });
    return (_[e] = t), t;
}
function f() {
    return i ? i : (i = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout);
}
function h(e, t, n, r, i) {
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
function p(e, t) {
    e.then(
        function (e) {
            f()(function () {
                t(null, e);
            });
        },
        function (e) {
            f()(function () {
                t(e);
            });
        }
    );
}
e.exports = function (e, t, r, i, a, c) {
    'function' == typeof a && ((c = a), (a = void 0));
    var _ = d[(a = a || 'sha1').toLowerCase()];
    if (!_ || 'function' != typeof n.g.Promise) {
        f()(function () {
            var n;
            try {
                n = l(e, t, r, i, a);
            } catch (e) {
                return c(e);
            }
            c(null, n);
        });
        return;
    }
    if ((o(r, i), (e = u(e, s, 'Password')), (t = u(t, s, 'Salt')), 'function' != typeof c)) throw Error('No callback provided to pbkdf2');
    p(
        E(_).then(function (n) {
            return n ? h(e, t, r, i, _) : l(e, t, r, i, a);
        }),
        c
    );
};
