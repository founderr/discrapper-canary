n(47120);
var r = n(200651);
n(192379);
var i = n(525654),
    a = n.n(i),
    s = n(481060),
    o = n(570140),
    l = n(468026),
    u = n(317770),
    c = n(63063),
    d = n(981631),
    f = n(388032);
class _ extends u.Z {
    _initialize() {
        o.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        o.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handlePermission'),
            (i = (e) => {
                let { kind: t, granted: n } = e,
                    i = 'Firefox' === a().name ? d.BhN.ENABLE_MIC_FIREFOX : d.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    (0, s.openModal)((t) =>
                        (0, r.jsx)(l.default, {
                            title: e ? f.intl.string(f.t.OqloHx) : f.intl.string(f.t['kI+OOT']),
                            body: e ? f.intl.string(f.t.l3P7Ky) : f.intl.string(f.t.l3jwOT),
                            onConfirm: () => window.open(c.Z.getArticleURL(i), '_blank'),
                            confirmText: f.intl.string(f.t.psXQHB),
                            ...t
                        })
                    );
                }
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = new _();
