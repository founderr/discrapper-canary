let i, a;
r.r(n),
    r.d(n, {
        encryptAndStoreTokens: function () {
            return R;
        },
        getToken: function () {
            return y;
        },
        hideToken: function () {
            return A;
        },
        init: function () {
            return b;
        },
        removeToken: function () {
            return C;
        },
        setToken: function () {
            return S;
        },
        showToken: function () {
            return N;
        }
    });
var s = r(47120);
var o = r(724458);
var l = r(433517),
    u = r(231338);
let c = 'dQw4w9WgXcQ:';
function d(e) {
    return [...e].reduce((e, n) => {
        let [r, i] = n;
        return (e[r] = i), e;
    }, {});
}
let f = null,
    _ = window.DiscordNative;
null != _ && (f = _.safeStorage);
let h = !1,
    p = {},
    m = {},
    g = !1,
    E = !1;
function v() {
    if (g) {
        l.K.remove(u.B1), l.K.remove(u.XM);
        return;
    }
    null != a ? l.K.set(u.B1, a) : l.K.remove(u.B1), l.K.set(u.XM, m);
}
function I(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == f ? void 0 : f.isEncryptionAvailable()) && e.startsWith(c)
          ? {
                decryptedToken: f.decryptString(e.substring(c.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function T(e) {
    return (null == f ? void 0 : f.isEncryptionAvailable()) && !e.startsWith(c) ? ''.concat(c).concat(f.encryptString(e)) : e;
}
function b() {
    if (E) return;
    (a = l.K.get(u.B1)), (m = l.K.get(u.XM) || {});
    let { decryptedToken: e, wasEncrypted: n } = I(a);
    (h = n),
        (i = e),
        (p = d(
            Object.entries(m)
                .map((e) => {
                    let [n, r] = e,
                        { decryptedToken: i, wasEncrypted: a } = I(r);
                    return (h = a || h), [n, i];
                })
                .filter((e) => {
                    let [n, r] = e;
                    return null != r;
                })
        )),
        (E = !0);
}
function y(e) {
    return (b(), null != e) ? p[e] : i;
}
function S(e, n) {
    if (null == e) {
        C(n);
        return;
    }
    (i = e), null != n && (p[n] = e), h ? R() : ((a = i), (m = p), v());
}
function A() {
    if (!g) (g = !0), v();
}
function N() {
    if (!!g) (g = !1), v();
}
function C(e) {
    let n = i;
    return null != e && ((n = p[e]), delete p[e], delete m[e]), n === i && ((i = null), (a = null)), v(), null != n;
}
function R() {
    (null == f ? void 0 : f.isEncryptionAvailable())
        ? (null != i && (a = T(i)),
          (m = d(
              Object.entries(p).map((e) => {
                  let [n, r] = e;
                  return [n, T(r)];
              })
          )),
          (h = !0))
        : ((a = i), (m = p)),
        v();
}
