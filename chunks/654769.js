t(47120), t(177593);
var o,
    i = t(392711),
    r = t.n(i),
    a = t(525654),
    c = t.n(a),
    l = t(579806),
    u = t(292959),
    s = t(246946),
    d = t(626135),
    f = t(358085),
    _ = t(557177),
    g = t(998502),
    b = t(981631);
function p(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let h = f.isPlatformEmbedded && (0, f.isWindows)(),
    m = h && 10 > parseFloat(l.Z.os.release),
    I = !0;
if (h && !m) {
    let [e, , n] = l.Z.os.release.split('.');
    I = parseInt(e) > 10 || parseInt(n) >= 15063;
}
let C = (h && I) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    T = r().throttle(_.GN, 1000, { leading: !0 });
function R() {
    g.ZP.flashFrame(!1);
}
h && (window.addEventListener('focus', R), g.ZP.on('MAIN_WINDOW_FOCUS', R));
let w = window.Notification;
m &&
    (g.ZP.on('NOTIFICATION_CLICK', (e, n) => {
        let t = null[n];
        null != t && (t.onclick(), t.close());
    }),
    g.ZP.send('NOTIFICATIONS_CLEAR'),
    (o = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], g.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: n, icon: t }) {
            p(this, 'id', w._id++),
                p(this, 'title', void 0),
                p(this, 'body', void 0),
                p(this, 'icon', void 0),
                p(this, 'onshow', function () {}),
                p(this, 'onclick', function () {}),
                p(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = n),
                (this.icon = t),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                g.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    p(o, 'permission', 'granted'),
    p(o, '_id', 0),
    (w = o));
function S() {
    return null != w && 'granted' === w.permission;
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        t = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, n, void 0, t) : (0, _.GN)(e, n);
}
function O(e) {
    return (s.Z.disableNotifications && null == e.overrideStreamerMode) || !S() || (f.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications());
}
n.Z = {
    hasPermission: S,
    requestPermission: function (e) {
        null != w &&
            w.requestPermission(() => {
                null != e && e(S());
            });
    },
    showNotification: function (e, n, t, o, i) {
        var a, c, l, s;
        let _;
        if (O(i)) {
            null != i.sound && !1 !== i.playSoundIfDisabled && v(i.sound, null !== (c = i.volume) && void 0 !== c ? c : 1, i.soundpack);
            return;
        }
        null != i.sound && v(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
        let p = null !== (s = null == i ? void 0 : i.tag) && void 0 !== s ? s : null;
        (0, f.isLinux)() && (t = r().escape(t));
        let m = {
            icon: e,
            body: t,
            tag: p,
            silent: !0
        };
        h && u.Z.taskbarFlash && g.ZP.flashFrame(!0);
        try {
            _ = new w(n, m);
        } catch (e) {
            return null;
        }
        return (null === (a = i.onShown) || void 0 === a || a.call(i),
        !i.omitViewTracking && d.default.track(b.rMx.NOTIFICATION_VIEWED, o),
        (_.onclick = () => {
            var e;
            f.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), _.close()), !i.omitClickTracking && d.default.track(b.rMx.NOTIFICATION_CLICKED, o), null === (e = i.onClick) || void 0 === e || e.call(i);
        }),
        C && setTimeout(() => _.close(), 5000),
        I)
            ? _
            : {
                  close() {
                      var e;
                      null == _ || null === (e = _.onclose) || void 0 === e || e.call(_);
                  }
              };
    },
    disabled: O
};
