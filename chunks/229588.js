n.d(t, {
    f: function () {
        return c;
    }
});
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = !1,
    l = null,
    u = null;
function c(e) {
    d({ locale: e });
}
function d(e) {
    let { locale: t } = e;
    (s = !0), (l = t);
}
function _(e) {
    let { locale: t } = e;
    t === l && ((s = !1), (u = null), (l = null));
}
function E(e) {
    let { error: t, locale: n } = e;
    n === l && ((s = !1), (u = null != t ? t : null), (l = null));
}
class f extends (r = i.ZP.Store) {
    isLoading() {
        return s;
    }
    getError() {
        return u;
    }
}
o(f, 'displayName', 'I18nLoaderStore'),
    (t.Z = new f(a.Z, {
        I18N_LOAD_START: d,
        I18N_LOAD_SUCCESS: _,
        I18N_LOAD_ERROR: E
    }));
