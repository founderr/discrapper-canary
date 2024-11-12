n(47120), n(177593);
var r,
    a = n(392711),
    l = n.n(a),
    i = n(525654),
    o = n.n(i),
    c = n(579806),
    s = n(292959),
    d = n(246946),
    u = n(626135),
    h = n(358085),
    m = n(557177),
    x = n(998502),
    f = n(981631);
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
let b = h.isPlatformEmbedded && (0, h.isWindows)(),
    g = b && 10 > parseFloat(c.Z.os.release),
    v = !0;
if (b && !g) {
    let [e, , t] = c.Z.os.release.split('.');
    v = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let C = (b && v) || ('Chrome' === o().name && 47 > parseFloat(o().version)) || ('Firefox' === o().name && 52 > parseFloat(o().version)),
    j = l().throttle(m.GN, 1000, { leading: !0 });
function _() {
    x.ZP.flashFrame(!1);
}
b && (window.addEventListener('focus', _), x.ZP.on('MAIN_WINDOW_FOCUS', _));
let T = window.Notification;
g &&
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
            p(this, 'id', T._id++),
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
                x.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    p(r, 'permission', 'granted'),
    p(r, '_id', 0),
    (T = r));
function S() {
    return null != T && 'granted' === T.permission;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? j(e, t, void 0, n) : (0, m.GN)(e, t);
}
function N(e) {
    return (d.Z.disableNotifications && null == e.overrideStreamerMode) || !S() || (h.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: S,
    requestPermission: function (e) {
        null != T &&
            T.requestPermission(() => {
                null != e && e(S());
            });
    },
    showNotification: function (e, t, n, r, a) {
        var i, o, c, d;
        let m;
        if (N(a)) {
            null != a.sound && !1 !== a.playSoundIfDisabled && y(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1, a.soundpack);
            return;
        }
        null != a.sound && y(a.sound, null !== (c = a.volume) && void 0 !== c ? c : 1, a.soundpack);
        let p = null !== (d = null == a ? void 0 : a.tag) && void 0 !== d ? d : null;
        (0, h.isLinux)() && (n = l().escape(n));
        let g = {
            icon: e,
            body: n,
            tag: p,
            silent: !0
        };
        b && s.Z.taskbarFlash && x.ZP.flashFrame(!0);
        try {
            m = new T(t, g);
        } catch (e) {
            return null;
        }
        return (null === (i = a.onShown) || void 0 === i || i.call(a),
        !a.omitViewTracking && u.default.track(f.rMx.NOTIFICATION_VIEWED, r),
        (m.onclick = () => {
            var e;
            h.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), m.close()), !a.omitClickTracking && u.default.track(f.rMx.NOTIFICATION_CLICKED, r), null === (e = a.onClick) || void 0 === e || e.call(a);
        }),
        C && setTimeout(() => m.close(), 5000),
        v)
            ? m
            : {
                  close() {
                      var e;
                      null == m || null === (e = m.onclose) || void 0 === e || e.call(m);
                  }
              };
    },
    disabled: N
};
