let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: function () {
            return A;
        },
        getToken: function () {
            return b;
        },
        hideToken: function () {
            return T;
        },
        init: function () {
            return v;
        },
        removeToken: function () {
            return y;
        },
        setToken: function () {
            return I;
        },
        showToken: function () {
            return S;
        }
    }),
    n(47120),
    n(724458);
var a = n(433517),
    s = n(231338);
let o = 'dQw4w9WgXcQ:';
function l(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return (e[n] = r), e;
    }, {});
}
let u = null,
    c = window.DiscordNative;
null != c && (u = c.safeStorage);
let d = !1,
    f = {},
    _ = {},
    p = !1,
    h = !1;
function m() {
    if (p) {
        a.K.remove(s.B1), a.K.remove(s.XM);
        return;
    }
    null != i ? a.K.set(s.B1, i) : a.K.remove(s.B1), a.K.set(s.XM, _);
}
function g(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o)
          ? {
                decryptedToken: u.decryptString(e.substring(o.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function E(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? ''.concat(o).concat(u.encryptString(e)) : e;
}
function v() {
    if (h) return;
    (i = a.K.get(s.B1)), (_ = a.K.get(s.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(i);
    (d = t),
        (r = e),
        (f = l(
            Object.entries(_)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = g(n);
                    return (d = i || d), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                })
        )),
        (h = !0);
}
function b(e) {
    return (v(), null != e) ? f[e] : r;
}
function I(e, t) {
    if (null == e) {
        y(t);
        return;
    }
    (r = e), null != t && (f[t] = e), d ? A() : ((i = r), (_ = f), m());
}
function T() {
    if (!p) (p = !0), m();
}
function S() {
    if (!!p) (p = !1), m();
}
function y(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete _[e]), t === r && ((r = null), (i = null)), m(), null != t;
}
function A() {
    (null == u ? void 0 : u.isEncryptionAvailable())
        ? (null != r && (i = E(r)),
          (_ = l(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, E(n)];
              })
          )),
          (d = !0))
        : ((i = r), (_ = f)),
        m();
}
