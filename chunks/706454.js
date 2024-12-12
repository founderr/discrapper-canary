r.r(n);
var i,
    a = r(442837),
    s = r(570140),
    o = r(241601),
    l = r(424395),
    u = r(581883),
    c = r(388032);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = l.vJ ? c.intl.currentLocale : c.intl.defaultLocale;
function _() {
    var e, n;
    let r = null === (n = u.Z.settings.localization) || void 0 === n ? void 0 : null === (e = n.locale) || void 0 === e ? void 0 : e.value;
    return null != r && '' !== r && r !== f && ((f = r), (0, o._2)(f), !0);
}
function h(e) {
    (f = e.locale), (0, o._2)(f);
}
class p extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z), _(), (0, o._2)(f);
    }
    get locale() {
        return f;
    }
}
d(p, 'displayName', 'LocaleStore'),
    (n.default = new p(s.Z, {
        OVERLAY_INITIALIZE: _,
        CACHE_LOADED: _,
        CONNECTION_OPEN: _,
        USER_SETTINGS_PROTO_UPDATE: _,
        USER_SETTINGS_LOCALE_OVERRIDE: h
    }));
