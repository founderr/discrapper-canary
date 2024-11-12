n.r(t);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(241601),
    c = n(424395),
    d = n(581883),
    f = n(388032);
let _ = c.vJ ? f.intl.currentLocale : f.intl.defaultLocale;
function p() {
    var e, t;
    let n = null === (t = d.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
    return null != n && '' !== n && n !== _ && ((_ = n), (0, u._2)(_), !0);
}
class h extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z), p(), (0, u._2)(_);
    }
    get locale() {
        return _;
    }
}
(a = 'LocaleStore'),
    (i = 'displayName') in (r = h)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.default = new h(l.Z, {
        OVERLAY_INITIALIZE: p,
        CACHE_LOADED: p,
        CONNECTION_OPEN: p,
        USER_SETTINGS_PROTO_UPDATE: p,
        USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
            (_ = e.locale), (0, u._2)(_);
        }
    }));
