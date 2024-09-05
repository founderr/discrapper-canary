n(47120), n(177593);
var i,
    o = n(392711),
    r = n.n(o),
    a = n(525654),
    c = n.n(a),
    l = n(579806),
    s = n(292959),
    u = n(246946),
    d = n(626135),
    g = n(358085),
    h = n(557177),
    f = n(998502),
    _ = n(981631);
function m(e, t, n) {
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
let p = g.isPlatformEmbedded && (0, g.isWindows)(),
    b = p && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (p && !b) {
    let [e, , t] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = (p && C) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    S = r().throttle(h.GN, 1000, { leading: !0 });
function v() {
    f.ZP.flashFrame(!1);
}
p && (window.addEventListener('focus', v), f.ZP.on('MAIN_WINDOW_FOCUS', v));
let R = window.Notification;
b &&
    (f.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    f.ZP.send('NOTIFICATIONS_CLEAR'),
    (i = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], f.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            m(this, 'id', R._id++),
                m(this, 'title', void 0),
                m(this, 'body', void 0),
                m(this, 'icon', void 0),
                m(this, 'onshow', function () {}),
                m(this, 'onclick', function () {}),
                m(this, 'onclose', function () {}),
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
    m(i, 'permission', 'granted'),
    m(i, '_id', 0),
    (R = i));
function E() {
    return null != R && 'granted' === R.permission;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? S(e, t, void 0, n) : (0, h.GN)(e, t);
}
function w(e) {
    return (u.Z.disableNotifications && null == e.overrideStreamerMode) || !E() || (g.isPlatformEmbedded && !f.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: E,
    requestPermission: function (e) {
        null != R &&
            R.requestPermission(() => {
                null != e && e(E());
            });
    },
    showNotification: function (e, t, n, i, o) {
        var a, c, l, u;
        let h;
        if (w(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && T(o.sound, null !== (c = o.volume) && void 0 !== c ? c : 1, o.soundpack);
            return;
        }
        null != o.sound && T(o.sound, null !== (l = o.volume) && void 0 !== l ? l : 1, o.soundpack);
        let m = null !== (u = null == o ? void 0 : o.tag) && void 0 !== u ? u : null;
        (0, g.isLinux)() && (n = r().escape(n));
        let b = {
            icon: e,
            body: n,
            tag: m,
            silent: !0
        };
        p && s.Z.taskbarFlash && f.ZP.flashFrame(!0);
        try {
            h = new R(t, b);
        } catch (e) {
            return null;
        }
        return (null === (a = o.onShown) || void 0 === a || a.call(o),
        !o.omitViewTracking && d.default.track(_.rMx.NOTIFICATION_VIEWED, i),
        (h.onclick = () => {
            var e;
            g.isPlatformEmbedded ? f.ZP.focus() : (window.focus(), h.close()), !o.omitClickTracking && d.default.track(_.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
        }),
        I && setTimeout(() => h.close(), 5000),
        C)
            ? h
            : {
                  close() {
                      var e;
                      null == h || null === (e = h.onclose) || void 0 === e || e.call(h);
                  }
              };
    },
    disabled: w
};
