t(47120), t(177593);
var o,
    i = t(392711),
    r = t.n(i),
    c = t(525654),
    a = t.n(c),
    l = t(579806),
    u = t(292959),
    s = t(246946),
    d = t(626135),
    _ = t(358085),
    f = t(557177),
    g = t(998502),
    b = t(981631);
function h(e, n, t) {
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
let m = _.isPlatformEmbedded && (0, _.isWindows)(),
    p = m && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (m && !p) {
    let [e, , n] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(n) >= 15063;
}
let I = (m && C) || ('Chrome' === a().name && 47 > parseFloat(a().version)) || ('Firefox' === a().name && 52 > parseFloat(a().version)),
    T = r().throttle(f.GN, 1000, { leading: !0 });
function S() {
    g.ZP.flashFrame(!1);
}
m && (window.addEventListener('focus', S), g.ZP.on('MAIN_WINDOW_FOCUS', S));
let w = window.Notification;
p &&
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
            h(this, 'id', w._id++),
                h(this, 'title', void 0),
                h(this, 'body', void 0),
                h(this, 'icon', void 0),
                h(this, 'onshow', function () {}),
                h(this, 'onclick', function () {}),
                h(this, 'onclose', function () {}),
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
    h(o, 'permission', 'granted'),
    h(o, '_id', 0),
    (w = o));
function R() {
    return null != w && 'granted' === w.permission;
}
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        t = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, n, void 0, t) : (0, f.GN)(e, n);
}
function v(e) {
    return (s.Z.disableNotifications && null == e.overrideStreamerMode) || !R() || (_.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications());
}
n.Z = {
    hasPermission: R,
    requestPermission: function (e) {
        null != w &&
            w.requestPermission(() => {
                null != e && e(R());
            });
    },
    showNotification: function (e, n, t, o, i) {
        var c, a, l, s;
        let f;
        if (v(i)) {
            null != i.sound && !1 !== i.playSoundIfDisabled && O(i.sound, null !== (a = i.volume) && void 0 !== a ? a : 1, i.soundpack);
            return;
        }
        null != i.sound && O(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
        let h = null !== (s = null == i ? void 0 : i.tag) && void 0 !== s ? s : null;
        (0, _.isLinux)() && (t = r().escape(t));
        let p = {
            icon: e,
            body: t,
            tag: h,
            silent: !0
        };
        m && u.Z.taskbarFlash && g.ZP.flashFrame(!0);
        try {
            f = new w(n, p);
        } catch (e) {
            return null;
        }
        return (null === (c = i.onShown) || void 0 === c || c.call(i),
        !i.omitViewTracking && d.default.track(b.rMx.NOTIFICATION_VIEWED, o),
        (f.onclick = () => {
            var e;
            _.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), f.close()), !i.omitClickTracking && d.default.track(b.rMx.NOTIFICATION_CLICKED, o), null === (e = i.onClick) || void 0 === e || e.call(i);
        }),
        I && setTimeout(() => f.close(), 5000),
        C)
            ? f
            : {
                  close() {
                      var e;
                      null == f || null === (e = f.onclose) || void 0 === e || e.call(f);
                  }
              };
    },
    disabled: v
};
