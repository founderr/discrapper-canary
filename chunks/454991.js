n.d(t, {
    v: function () {
        return s;
    }
});
var r,
    i = n(433517),
    a = n(987650);
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
!(function (e) {
    (e.Version1 = 'OverlayStore'), (e.Version2 = 'overlayEnabled'), (e.Version3 = 'OverlayStore3');
})(r || (r = {}));
class s {
    static get enabled() {
        return s.load().enabled;
    }
    static get legacyEnabled() {
        return s.load().legacyEnabled;
    }
    static update(e) {
        let t = s.load();
        'boolean' == typeof e.enabled && (t.enabled = e.enabled), 'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save();
    }
    save() {
        let e = {
            enabled: this.enabled,
            legacyEnabled: this.legacyEnabled
        };
        i.K.set('OverlayStore3', e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        let e = i.K.get('OverlayStore');
        if (null != e) {
            let t = new s('boolean' == typeof e.enabled ? e.enabled : a.iP, !1);
            return t.save(), i.K.remove('OverlayStore'), t;
        }
        let t = i.K.get('overlayEnabled');
        if (null != t) {
            let e = new s('boolean' == typeof t ? t : a.iP, !1);
            return e.save(), i.K.remove('overlayEnabled'), e;
        }
        let n = i.K.get('OverlayStore3');
        if (null != n) {
            var r, o;
            return new s(null !== (r = n.enabled) && void 0 !== r ? r : a.iP, null !== (o = n.legacyEnabled) && void 0 !== o && o);
        }
        let l = new s(a.iP, !1);
        return l.save(), l;
    }
    constructor(e, t) {
        o(this, 'enabled', void 0), o(this, 'legacyEnabled', void 0), (this.enabled = e), (this.legacyEnabled = t);
    }
}
o(s, '_loaded', null);
