var i,
    a,
    s = r(957578).Buffer,
    o = r(180756),
    l = r(138031),
    u = r(275227),
    c = r(871230),
    d = r.g.crypto && r.g.crypto.subtle,
    f = {
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
function h(e) {
    if ((r.g.process && !r.g.process.browser) || !d || !d.importKey || !d.deriveBits) return Promise.resolve(!1);
    if (void 0 !== _[e]) return _[e];
    var n = m((i = i || s.alloc(8)), i, 10, 128, e)
        .then(function () {
            return !0;
        })
        .catch(function () {
            return !1;
        });
    return (_[e] = n), n;
}
function p() {
    return a ? a : (a = r.g.process && r.g.process.nextTick ? r.g.process.nextTick : r.g.queueMicrotask ? r.g.queueMicrotask : r.g.setImmediate ? r.g.setImmediate : r.g.setTimeout);
}
function m(e, n, r, i, a) {
    return d
        .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
        .then(function (e) {
            return d.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: n,
                    iterations: r,
                    hash: { name: a }
                },
                e,
                i << 3
            );
        })
        .then(function (e) {
            return s.from(e);
        });
}
function g(e, n) {
    e.then(
        function (e) {
            p()(function () {
                n(null, e);
            });
        },
        function (e) {
            p()(function () {
                n(e);
            });
        }
    );
}
e.exports = function (e, n, i, a, s, d) {
    'function' == typeof s && ((d = s), (s = void 0));
    var _ = f[(s = s || 'sha1').toLowerCase()];
    if (!_ || 'function' != typeof r.g.Promise) {
        p()(function () {
            var r;
            try {
                r = u(e, n, i, a, s);
            } catch (e) {
                return d(e);
            }
            d(null, r);
        });
        return;
    }
    if ((o(i, a), (e = c(e, l, 'Password')), (n = c(n, l, 'Salt')), 'function' != typeof d)) throw Error('No callback provided to pbkdf2');
    g(
        h(_).then(function (r) {
            return r ? m(e, n, i, a, _) : u(e, n, i, a, s);
        }),
        d
    );
};
