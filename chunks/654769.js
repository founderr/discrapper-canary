n(47120), n(177593);
var i,
    o = n(392711),
    r = n.n(o),
    c = n(525654),
    a = n.n(c),
    l = n(579806),
    u = n(292959),
    s = n(246946),
    d = n(626135),
    g = n(358085),
    _ = n(557177),
    h = n(998502),
    f = n(981631);
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
let I = (p && C) || ('Chrome' === a().name && 47 > parseFloat(a().version)) || ('Firefox' === a().name && 52 > parseFloat(a().version)),
    S = r().throttle(_.GN, 1000, { leading: !0 });
function T() {
    h.ZP.flashFrame(!1);
}
p && (window.addEventListener('focus', T), h.ZP.on('MAIN_WINDOW_FOCUS', T));
let R = window.Notification;
b &&
    (h.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    h.ZP.send('NOTIFICATIONS_CLEAR'),
    (i = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], h.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
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
                h.ZP.send('NOTIFICATION_SHOW', {
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
function w() {
    return null != R && 'granted' === R.permission;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? S(e, t, void 0, n) : (0, _.GN)(e, t);
}
function E(e) {
    return (s.Z.disableNotifications && null == e.overrideStreamerMode) || !w() || (g.isPlatformEmbedded && !h.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: w,
    requestPermission: function (e) {
        null != R &&
            R.requestPermission(() => {
                null != e && e(w());
            });
    },
    showNotification: function (e, t, n, i, o) {
        var c, a, l, s;
        let _;
        if (E(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && O(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1, o.soundpack);
            return;
        }
        null != o.sound && O(o.sound, null !== (l = o.volume) && void 0 !== l ? l : 1, o.soundpack);
        let m = null !== (s = null == o ? void 0 : o.tag) && void 0 !== s ? s : null;
        (0, g.isLinux)() && (n = r().escape(n));
        let b = {
            icon: e,
            body: n,
            tag: m,
            silent: !0
        };
        p && u.Z.taskbarFlash && h.ZP.flashFrame(!0);
        try {
            _ = new R(t, b);
        } catch (e) {
            return null;
        }
        return (null === (c = o.onShown) || void 0 === c || c.call(o),
        !o.omitViewTracking && d.default.track(f.rMx.NOTIFICATION_VIEWED, i),
        (_.onclick = () => {
            var e;
            g.isPlatformEmbedded ? h.ZP.focus() : (window.focus(), _.close()), !o.omitClickTracking && d.default.track(f.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
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
    disabled: E
};
