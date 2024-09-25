let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: function () {
            return C;
        },
        getToken: function () {
            return A;
        },
        hideToken: function () {
            return N;
        },
        init: function () {
            return S;
        },
        removeToken: function () {
            return R;
        },
        setToken: function () {
            return v;
        },
        showToken: function () {
            return O;
        }
    });
var a = n(47120);
var o = n(724458);
var s = n(433517),
    l = n(231338);
let u = 'dQw4w9WgXcQ:';
function c(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return (e[n] = r), e;
    }, {});
}
let d = null,
    _ = window.DiscordNative;
null != _ && (d = _.safeStorage);
let E = !1,
    f = {},
    h = {},
    p = !1,
    m = !1;
function I() {
    if (p) {
        s.K.remove(l.B1), s.K.remove(l.XM);
        return;
    }
    null != i ? s.K.set(l.B1, i) : s.K.remove(l.B1), s.K.set(l.XM, h);
}
function T(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == d ? void 0 : d.isEncryptionAvailable()) && e.startsWith(u)
          ? {
                decryptedToken: d.decryptString(e.substring(u.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function g(e) {
    return (null == d ? void 0 : d.isEncryptionAvailable()) && !e.startsWith(u) ? ''.concat(u).concat(d.encryptString(e)) : e;
}
function S() {
    if (m) return;
    (i = s.K.get(l.B1)), (h = s.K.get(l.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = T(i);
    (E = t),
        (r = e),
        (f = c(
            Object.entries(h)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = T(n);
                    return (E = i || E), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                })
        )),
        (m = !0);
}
function A(e) {
    return (S(), null != e) ? f[e] : r;
}
function v(e, t) {
    if (null == e) {
        R(t);
        return;
    }
    (r = e), null != t && (f[t] = e), E ? C() : ((i = r), (h = f), I());
}
function N() {
    if (!p) (p = !0), I();
}
function O() {
    if (!!p) (p = !1), I();
}
function R(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete h[e]), t === r && ((r = null), (i = null)), I(), null != t;
}
function C() {
    (null == d ? void 0 : d.isEncryptionAvailable())
        ? (null != r && (i = g(r)),
          (h = c(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, g(n)];
              })
          )),
          (E = !0))
        : ((i = r), (h = f)),
        I();
}
