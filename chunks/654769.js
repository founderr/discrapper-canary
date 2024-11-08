n(47120), n(177593);
var i,
    o = n(392711),
    a = n.n(o),
    r = n(525654),
    c = n.n(r),
    l = n(579806),
    u = n(292959),
    s = n(246946),
    d = n(626135),
    _ = n(358085),
    f = n(557177),
    b = n(998502),
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
let m = _.isPlatformEmbedded && (0, _.isWindows)(),
    h = m && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (m && !h) {
    let [e, , t] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = (m && C) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    T = a().throttle(f.GN, 1000, { leading: !0 });
function A() {
    b.ZP.flashFrame(!1);
}
m && (window.addEventListener('focus', A), b.ZP.on('MAIN_WINDOW_FOCUS', A));
let v = window.Notification;
h &&
    (b.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    b.ZP.send('NOTIFICATIONS_CLEAR'),
    (i = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], b.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            p(this, 'id', v._id++),
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
                b.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    p(i, 'permission', 'granted'),
    p(i, '_id', 0),
    (v = i));
function R() {
    return null != v && 'granted' === v.permission;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, t, void 0, n) : (0, f.GN)(e, t);
}
function w(e) {
    return (s.Z.disableNotifications && null == e.overrideStreamerMode) || !R() || (_.isPlatformEmbedded && !b.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: R,
    requestPermission: function (e) {
        null != v &&
            v.requestPermission(() => {
                null != e && e(R());
            });
    },
    showNotification: function (e, t, n, i, o) {
        var r, c, l, s;
        let f;
        if (w(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && S(o.sound, null !== (c = o.volume) && void 0 !== c ? c : 1, o.soundpack);
            return;
        }
        null != o.sound && S(o.sound, null !== (l = o.volume) && void 0 !== l ? l : 1, o.soundpack);
        let p = null !== (s = null == o ? void 0 : o.tag) && void 0 !== s ? s : null;
        (0, _.isLinux)() && (n = a().escape(n));
        let h = {
            icon: e,
            body: n,
            tag: p,
            silent: !0
        };
        m && u.Z.taskbarFlash && b.ZP.flashFrame(!0);
        try {
            f = new v(t, h);
        } catch (e) {
            return null;
        }
        return (null === (r = o.onShown) || void 0 === r || r.call(o),
        !o.omitViewTracking && d.default.track(g.rMx.NOTIFICATION_VIEWED, i),
        (f.onclick = () => {
            var e;
            _.isPlatformEmbedded ? b.ZP.focus() : (window.focus(), f.close()), !o.omitClickTracking && d.default.track(g.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
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
    disabled: w
};
