"use strict";
i.r(e), i.d(e, {
  isSpotifyPlayable: function() {
    return f
  },
  ensureSpotifyPlayable: function() {
    return _
  },
  isSpotifyPremium: function() {
    return E
  },
  ensureSpotifyPremium: function() {
    return I
  }
}), i("70102"), i("860677"), i("222007");
var n = i("376556"),
  l = i("161454"),
  a = i("718517"),
  u = i("613691"),
  r = i("155815"),
  d = i("662285"),
  s = i("450484"),
  o = i("49111");
let c = 30 * a.default.Millis.SECOND;

function f(t) {
  return null != t.getActiveSocketAndDevice() || r.default.isProtocolRegistered()
}

function _() {
  let t = d.default.getActiveSocketAndDevice();
  if (null != t) return Promise.resolve(t);
  if (!r.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
  let e = d.default.getPlayableComputerDevices();
  if (l.default.isObservedAppRunning(n.default.get(o.PlatformTypes.SPOTIFY).name) && e.length > 0) {
    let {
      socket: t,
      device: i
    } = e[0];
    return (0, u.setActiveDevice)(t.accountId, i.id), Promise.resolve({
      socket: t,
      device: i
    })
  }
  return new Promise((t, i) => {
    let n = setTimeout(() => {
        d.default.removeChangeListener(l), i(Error("timeout launching spotify"))
      }, c),
      l = () => {
        let i = d.default.getPlayableComputerDevices();
        for (let {
            socket: a,
            device: r
          }
          of i) null == e.find(t => t.device.id === r.id) && (clearTimeout(n), d.default.removeChangeListener(l), setImmediate(() => {
          (0, u.setActiveDevice)(a.accountId, r.id), t({
            socket: a,
            device: r
          })
        }))
      };
    d.default.addChangeListener(l), window.open("".concat(s.SPOTIFY_APP_PROTOCOL, ":"))
  })
}

function E() {
  let t = d.default.getActiveSocketAndDevice();
  if (null == t) return null;
  let {
    socket: e
  } = t;
  return e.isPremium
}

function I() {
  let t = d.default.getActiveSocketAndDevice();
  if (null == t) return Promise.reject(Error("no active profile"));
  let {
    socket: e
  } = t;
  return e.isPremium ? Promise.resolve() : (0, u.getProfile)(e.accountId, e.accessToken).then(() => {
    if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"))
  })
}