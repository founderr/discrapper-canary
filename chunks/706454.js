n.r(t);
var r,
    i = n(442837),
    a = n(570140),
    o = n(209185),
    s = n(581883);
function l(e, t, n) {
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
let u = n(689938).Z.getDefaultLocale();
function c() {
    var e, t;
    let n = null === (t = s.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
    return null != n && '' !== n && n !== u && ((u = n), o.i(u), !0);
}
function d(e) {
    (u = e.locale), o.i(u);
}
class _ extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), c(), o.i(u);
    }
    get locale() {
        return u;
    }
}
l(_, 'displayName', 'LocaleStore'),
    (t.default = new _(a.Z, {
        OVERLAY_INITIALIZE: c,
        CACHE_LOADED: c,
        CONNECTION_OPEN: c,
        USER_SETTINGS_PROTO_UPDATE: c,
        USER_SETTINGS_LOCALE_OVERRIDE: d
    }));
