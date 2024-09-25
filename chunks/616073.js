n.d(t, {
    Kq: function () {
        return A;
    },
    L0: function () {
        return b;
    },
    Ux: function () {
        return R;
    },
    Xe: function () {
        return y;
    },
    aQ: function () {
        return N;
    },
    bU: function () {
        return T;
    },
    qb: function () {
        return v;
    }
});
var r = n(470079),
    i = n(230012),
    a = n(133886),
    o = n(387103),
    s = n(182823),
    l = n(881085);
let u = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
    c = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);
function d(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            n = 'function' == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (n) return 'rtl' === n.direction;
        if (t.script) return u.has(t.script);
    }
    let t = e.split('-')[0];
    return c.has(t);
}
let _ = Symbol.for('react-aria.i18n.locale');
function E() {
    let e = ('undefined' != typeof window && window[_]) || ('undefined' != typeof navigator && (navigator.language || navigator.userLanguage)) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch (t) {
        e = 'en-US';
    }
    return {
        locale: e,
        direction: d(e) ? 'rtl' : 'ltr'
    };
}
let f = E(),
    h = new Set();
function p() {
    for (let e of ((f = E()), h)) e(f);
}
function m() {
    let e = (0, i.Av)(),
        [t, n] = (0, r.useState)(f);
    return ((0, r.useEffect)(
        () => (
            0 === h.size && window.addEventListener('languagechange', p),
            h.add(n),
            () => {
                h.delete(n), 0 === h.size && window.removeEventListener('languagechange', p);
            }
        ),
        []
    ),
    e)
        ? {
              locale: 'en-US',
              direction: 'ltr'
          }
        : t;
}
let I = r.createContext(null);
function T() {
    let e = m();
    return (0, r.useContext)(I) || e;
}
let g = new WeakMap();
function S(e) {
    let t = g.get(e);
    return !t && ((t = new a.J(e)), g.set(e, t)), t;
}
function A(e, t) {
    return (t && (0, a.J).getGlobalDictionaryForPackage(t)) || S(e);
}
function v(e, t) {
    let { locale: n } = T(),
        i = A(e, t);
    return (0, r.useMemo)(() => new a.E(n, i), [n, i]);
}
function N(e) {
    e = (0, s.vE)(null != e ? e : {}, O);
    let { locale: t } = T();
    return (0, r.useMemo)(() => new o.CN(t, e), [t, e]);
}
function O(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) if (t[r] !== e[r]) return !1;
    return !0;
}
function R(e = {}) {
    let { locale: t } = T();
    return (0, r.useMemo)(() => new l.e(t, e), [t, e]);
}
let C = new Map();
function y(e) {
    let { locale: t } = T(),
        n =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : '');
    if (C.has(n)) return C.get(n);
    let r = new Intl.Collator(t, e);
    return C.set(n, r), r;
}
function b(e) {
    let t = y({
            usage: 'search',
            ...e
        }),
        n = (0, r.useCallback)((e, n) => 0 === n.length || ((e = e.normalize('NFC')), (n = n.normalize('NFC')), 0 === t.compare(e.slice(0, n.length), n)), [t]),
        i = (0, r.useCallback)((e, n) => 0 === n.length || ((e = e.normalize('NFC')), (n = n.normalize('NFC')), 0 === t.compare(e.slice(-n.length), n)), [t]),
        a = (0, r.useCallback)(
            (e, n) => {
                if (0 === n.length) return !0;
                (e = e.normalize('NFC')), (n = n.normalize('NFC'));
                let r = 0,
                    i = n.length;
                for (; r + i <= e.length; r++) {
                    let a = e.slice(r, r + i);
                    if (0 === t.compare(n, a)) return !0;
                }
                return !1;
            },
            [t]
        );
    return (0, r.useMemo)(
        () => ({
            startsWith: n,
            endsWith: i,
            contains: a
        }),
        [n, i, a]
    );
}
