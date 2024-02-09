"use strict";
n.r(t), n.d(t, {
  howLong: function() {
    return p
  },
  getActivityPlatform: function() {
    return m
  },
  getProfileInfo: function() {
    return h
  }
}), n("222007");
var l = n("509043"),
  i = n("376556"),
  a = n("429928"),
  s = n("36539"),
  r = n("388491"),
  o = n("713135"),
  u = n("49111");
let d = e => "".concat(e).length < 13 ? 1e3 * e : e,
  c = e => {
    let t = Date.now() / 1e3;
    return null != e.end ? f(t, d(e.end) / 1e3) : null != e.start ? f(d(e.start) / 1e3, t) : {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  f = (e, t) => {
    let n = Math.max(t - e, 0);
    return {
      hours: Math.floor(n / 3600) % 24,
      minutes: Math.floor(n / 60) % 60,
      seconds: Math.floor(n) % 60
    }
  },
  p = e => {
    let t = c(e);
    return t.hours > 0 ? "".concat(t.hours, " hours") : t.minutes > 0 ? "".concat(t.minutes, " minutes") : "".concat(t.seconds, " seconds")
  },
  m = e => (0, a.default)(e) ? i.default.get(u.PlatformTypes.SPOTIFY) : (0, s.default)(e) ? i.default.get(u.PlatformTypes.XBOX) : null != e.platform && [u.ActivityGamePlatforms.PS4, u.ActivityGamePlatforms.PS5].includes(e.platform) ? i.default.get(u.PlatformTypes.PLAYSTATION) : e.name === i.default.get(u.PlatformTypes.LEAGUE_OF_LEGENDS).name ? i.default.get(u.PlatformTypes.LEAGUE_OF_LEGENDS) : void(e.type, u.ActivityTypes.PLAYING),
  h = (e, t) => {
    var n;
    let i = o.default.getUserProfile(e.id),
      [a, s] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
      u = (0, r.getProfileTheme)(a),
      d = null != s ? (0, l.int2hex)(s) : t;
    return {
      color: d,
      theme: d === t ? "dark" : u
    }
  }