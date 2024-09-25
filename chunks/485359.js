var r = n(47120);
var i = n(735250);
n(470079);
var a = n(525654),
    o = n.n(a),
    s = n(481060),
    l = n(570140),
    u = n(468026),
    c = n(317770),
    d = n(63063),
    _ = n(981631),
    E = n(689938);
function f(e, t, n) {
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
class h extends c.Z {
    _initialize() {
        l.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    _terminate() {
        l.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
    }
    constructor(...e) {
        super(...e),
            f(this, 'handlePermission', (e) => {
                let { kind: t, granted: n } = e,
                    r = 'Firefox' === o().name ? _.BhN.ENABLE_MIC_FIREFOX : _.BhN.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = 'audio' !== t;
                    (0, s.openModal)((t) =>
                        (0, i.jsx)(u.default, {
                            title: e ? E.Z.Messages.NO_CAMERA_TITLE : E.Z.Messages.NO_MIC_TITLE,
                            body: e ? E.Z.Messages.NO_CAMERA_BODY : E.Z.Messages.NO_MIC_BODY,
                            onConfirm: () => window.open(d.Z.getArticleURL(r), '_blank'),
                            confirmText: E.Z.Messages.HELP_DESK,
                            ...t
                        })
                    );
                }
            });
    }
}
t.Z = new h();
