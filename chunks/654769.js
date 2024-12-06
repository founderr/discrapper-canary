n(47120), n(177593);
var i,
    o = n(392711),
    a = n.n(o),
    r = n(525654),
    c = n.n(r),
    l = n(579806),
    s = n(292959),
    u = n(246946),
    d = n(626135),
    h = n(358085),
    _ = n(557177),
    g = n(998502),
    p = n(981631);
function b(e, t, n) {
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
let f = h.isPlatformEmbedded && (0, h.isWindows)(),
    m = f && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (f && !m) {
    let [e, , t] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = (f && C) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    T = a().throttle(_.GN, 1000, { leading: !0 });
function R() {
    g.ZP.flashFrame(!1);
}
f && (window.addEventListener('focus', R), g.ZP.on('MAIN_WINDOW_FOCUS', R));
let A = window.Notification;
m &&
    (g.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    g.ZP.send('NOTIFICATIONS_CLEAR'),
    (i = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], g.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            b(this, 'id', A._id++),
                b(this, 'title', void 0),
                b(this, 'body', void 0),
                b(this, 'icon', void 0),
                b(this, 'onshow', function () {}),
                b(this, 'onclick', function () {}),
                b(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = t),
                (this.icon = n),
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
    b(i, 'permission', 'granted'),
    b(i, '_id', 0),
    (A = i));
function S() {
    return null != A && 'granted' === A.permission;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, t, void 0, n) : (0, _.GN)(e, t);
}
function w(e) {
    return (u.Z.disableNotifications && null == e.overrideStreamerMode) || !S() || (h.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: S,
    requestPermission: function (e) {
        null != A &&
            A.requestPermission(() => {
                null != e && e(S());
            });
    },
    showNotification: function (e, t, n, i, o) {
        var r, c, l, u;
        let _;
        if (w(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && v(o.sound, null !== (c = o.volume) && void 0 !== c ? c : 1, o.soundpack);
            return;
        }
        null != o.sound && v(o.sound, null !== (l = o.volume) && void 0 !== l ? l : 1, o.soundpack);
        let b = null !== (u = null == o ? void 0 : o.tag) && void 0 !== u ? u : null;
        (0, h.isLinux)() && (n = a().escape(n));
        let m = {
            icon: e,
            body: n,
            tag: b,
            silent: !0
        };
        f && s.Z.taskbarFlash && g.ZP.flashFrame(!0);
        try {
            _ = new A(t, m);
        } catch (e) {
            return null;
        }
        return (null === (r = o.onShown) || void 0 === r || r.call(o),
        !o.omitViewTracking && d.default.track(p.rMx.NOTIFICATION_VIEWED, i),
        (_.onclick = () => {
            var e;
            h.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), _.close()), !o.omitClickTracking && d.default.track(p.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
        }),
        I && setTimeout(() => _.close(), 5000),
        C)
            ? _
            : {
                  close() {
                      var e;
                      null == _ || null === (e = _.onclose) || void 0 === e || e.call(_);
                  }
              };
    },
    disabled: w
};
