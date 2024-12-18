n(47120), n(177593);
var r,
    a = n(392711),
    l = n.n(a),
    i = n(525654),
    o = n.n(i),
    s = n(579806),
    c = n(292959),
    d = n(246946),
    u = n(626135),
    h = n(358085),
    m = n(557177),
    x = n(998502),
    p = n(981631);
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
let g = h.isPlatformEmbedded && (0, h.isWindows)(),
    b = g && 10 > parseFloat(s.Z.os.release),
    v = !0;
if (g && !b) {
    let [e, , t] = s.Z.os.release.split('.');
    v = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let j = (g && v) || ('Chrome' === o().name && 47 > parseFloat(o().version)) || ('Firefox' === o().name && 52 > parseFloat(o().version)),
    C = l().throttle(m.GN, 1000, { leading: !0 });
function T() {
    x.ZP.flashFrame(!1);
}
g && (window.addEventListener('focus', T), x.ZP.on('MAIN_WINDOW_FOCUS', T));
let _ = window.Notification;
b &&
    (x.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    x.ZP.send('NOTIFICATIONS_CLEAR'),
    (r = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], x.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            f(this, 'id', _._id++),
                f(this, 'title', void 0),
                f(this, 'body', void 0),
                f(this, 'icon', void 0),
                f(this, 'onshow', function () {}),
                f(this, 'onclick', function () {}),
                f(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = t),
                (this.icon = n),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                x.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    f(r, 'permission', 'granted'),
    f(r, '_id', 0),
    (_ = r));
function S() {
    return null != _ && 'granted' === _.permission;
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? C(e, t, void 0, n) : (0, m.GN)(e, t);
}
function y(e) {
    return (d.Z.disableNotifications && null == e.overrideStreamerMode) || !S() || (h.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: S,
    requestPermission: function (e) {
        null != _ &&
            _.requestPermission(() => {
                null != e && e(S());
            });
    },
    showNotification: function (e, t, n, r, a) {
        var i, o, s, d;
        let m;
        if (y(a)) {
            null != a.sound && !1 !== a.playSoundIfDisabled && N(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1, a.soundpack);
            return;
        }
        null != a.sound && N(a.sound, null !== (s = a.volume) && void 0 !== s ? s : 1, a.soundpack);
        let f = null !== (d = null == a ? void 0 : a.tag) && void 0 !== d ? d : null;
        (0, h.isLinux)() && (n = l().escape(n));
        let b = {
            icon: e,
            body: n,
            tag: f,
            silent: !0
        };
        g && c.Z.taskbarFlash && x.ZP.flashFrame(!0);
        try {
            m = new _(t, b);
        } catch (e) {
            return null;
        }
        return (null === (i = a.onShown) || void 0 === i || i.call(a),
        !a.omitViewTracking && u.default.track(p.rMx.NOTIFICATION_VIEWED, r),
        (m.onclick = () => {
            var e;
            h.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), m.close()), !a.omitClickTracking && u.default.track(p.rMx.NOTIFICATION_CLICKED, r), null === (e = a.onClick) || void 0 === e || e.call(a);
        }),
        j && setTimeout(() => m.close(), 5000),
        v)
            ? m
            : {
                  close() {
                      var e;
                      null == m || null === (e = m.onclose) || void 0 === e || e.call(m);
                  }
              };
    },
    disabled: y
};
