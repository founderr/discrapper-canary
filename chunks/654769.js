n(47120), n(177593);
var o,
    i = n(392711),
    a = n.n(i),
    r = n(525654),
    c = n.n(r),
    l = n(579806),
    s = n(292959),
    u = n(246946),
    d = n(626135),
    _ = n(358085),
    b = n(557177),
    f = n(998502),
    g = n(981631);
function p(e, t, n) {
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
let h = _.isPlatformEmbedded && (0, _.isWindows)(),
    m = h && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (h && !m) {
    let [e, , t] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = (h && C) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    T = a().throttle(b.GN, 1000, { leading: !0 });
function A() {
    f.ZP.flashFrame(!1);
}
h && (window.addEventListener('focus', A), f.ZP.on('MAIN_WINDOW_FOCUS', A));
let w = window.Notification;
m &&
    (f.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    f.ZP.send('NOTIFICATIONS_CLEAR'),
    (o = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], f.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            p(this, 'id', w._id++),
                p(this, 'title', void 0),
                p(this, 'body', void 0),
                p(this, 'icon', void 0),
                p(this, 'onshow', function () {}),
                p(this, 'onclick', function () {}),
                p(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = t),
                (this.icon = n),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                f.ZP.send('NOTIFICATION_SHOW', {
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
function R() {
    return null != w && 'granted' === w.permission;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, t, void 0, n) : (0, b.GN)(e, t);
}
function k(e) {
    return (u.Z.disableNotifications && null == e.overrideStreamerMode) || !R() || (_.isPlatformEmbedded && !f.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: R,
    requestPermission: function (e) {
        null != w &&
            w.requestPermission(() => {
                null != e && e(R());
            });
    },
    showNotification: function (e, t, n, o, i) {
        var r, c, l, u;
        let b;
        if (k(i)) {
            null != i.sound && !1 !== i.playSoundIfDisabled && v(i.sound, null !== (c = i.volume) && void 0 !== c ? c : 1, i.soundpack);
            return;
        }
        null != i.sound && v(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
        let p = null !== (u = null == i ? void 0 : i.tag) && void 0 !== u ? u : null;
        (0, _.isLinux)() && (n = a().escape(n));
        let m = {
            icon: e,
            body: n,
            tag: p,
            silent: !0
        };
        h && s.Z.taskbarFlash && f.ZP.flashFrame(!0);
        try {
            b = new w(t, m);
        } catch (e) {
            return null;
        }
        return (null === (r = i.onShown) || void 0 === r || r.call(i),
        !i.omitViewTracking && d.default.track(g.rMx.NOTIFICATION_VIEWED, o),
        (b.onclick = () => {
            var e;
            _.isPlatformEmbedded ? f.ZP.focus() : (window.focus(), b.close()), !i.omitClickTracking && d.default.track(g.rMx.NOTIFICATION_CLICKED, o), null === (e = i.onClick) || void 0 === e || e.call(i);
        }),
        I && setTimeout(() => b.close(), 5000),
        C)
            ? b
            : {
                  close() {
                      var e;
                      null == b || null === (e = b.onclose) || void 0 === e || e.call(b);
                  }
              };
    },
    disabled: k
};
