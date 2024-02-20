"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("860677");
var i, a = n("917351"),
  l = n.n(a),
  s = n("597755"),
  r = n.n(s),
  o = n("49671"),
  u = n("385649"),
  d = n("102985"),
  c = n("599110"),
  f = n("773336"),
  E = n("709681"),
  h = n("50885"),
  _ = n("49111");
let C = f.isPlatformEmbedded && (0, f.isWindows)(),
  S = C && 10 > parseFloat(o.default.os.release),
  g = !0;
if (C && !S) {
  let [e, , t] = o.default.os.release.split(".");
  g = parseInt(e) > 10 || parseInt(t) >= 15063
}
let T = C && g || "Chrome" === r.name && 47 > parseFloat(r.version) || "Firefox" === r.name && 52 > parseFloat(r.version),
  m = l.throttle(E.playSound, 1e3, {
    leading: !0
  });

function p() {
  h.default.flashFrame(!1)
}
C && (window.addEventListener("focus", p), h.default.on("MAIN_WINDOW_FOCUS", p));
let Notification = window.Notification;
if (S) {
  let e = {};
  h.default.on("NOTIFICATION_CLICK", (t, n) => {
    let i = e[n];
    null != i && (i.onclick(), i.close())
  }), h.default.send("NOTIFICATIONS_CLEAR"), (i = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != e[this.id] && (delete e[this.id], h.default.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: i
    }) {
      this.id = Notification._id++, this.onshow = function() {}, this.onclick = function() {}, this.onclose = function() {}, this.title = t, this.body = n, this.icon = i, setImmediate(() => this.onshow()), e[this.id] = this, h.default.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }).permission = "granted", i._id = 0, Notification = i
}

function I() {
  return null != Notification && "granted" === Notification.permission
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  e.includes("message") ? m(e, t) : (0, E.playSound)(e, t)
}

function N(e) {
  return d.default.disableNotifications && null == e.overrideStreamerMode || !I() || f.isPlatformEmbedded && !h.default.shouldDisplayNotifications()
}
var O = {
  hasPermission: I,
  requestPermission: function(e) {
    null != Notification && Notification.requestPermission(() => {
      null != e && e(I())
    })
  },
  showNotification: function(e, t, n, i, a) {
    var s, r, o, d;
    let E;
    if (N(a)) {
      null != a.sound && !1 !== a.playSoundIfDisabled && A(a.sound, null !== (r = a.volume) && void 0 !== r ? r : 1);
      return
    }
    null != a.sound && A(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1);
    let S = null !== (d = null == a ? void 0 : a.tag) && void 0 !== d ? d : null;
    (0, f.isLinux)() && (n = l.escape(n));
    let m = {
      icon: e,
      body: n,
      tag: S,
      silent: !0
    };
    C && u.default.taskbarFlash && h.default.flashFrame(!0);
    try {
      E = new Notification(t, m)
    } catch (e) {
      return null
    }
    return (null === (s = a.onShown) || void 0 === s || s.call(a), !a.omitViewTracking && c.default.track(_.AnalyticEvents.NOTIFICATION_VIEWED, i), E.onclick = () => {
      var e;
      f.isPlatformEmbedded ? h.default.focus() : (window.focus(), E.close()), !a.omitClickTracking && c.default.track(_.AnalyticEvents.NOTIFICATION_CLICKED, i), null === (e = a.onClick) || void 0 === e || e.call(a)
    }, T && setTimeout(() => E.close(), 5e3), g) ? E : {
      close() {
        var e;
        null == E || null === (e = E.onclose) || void 0 === e || e.call(E)
      }
    }
  },
  disabled: N
}