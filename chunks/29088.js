"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var l = n("808742"),
  a = n("204947"),
  s = n("152311"),
  i = n("502651"),
  r = n("49111"),
  u = n("782340");

function o(e) {
  return {
    [r.ActivityTypes.STREAMING]: e ? u.default.Messages.UNFORMATTED_STREAMING : u.default.Messages.STREAMING,
    [r.ActivityTypes.LISTENING]: e ? u.default.Messages.UNFORMATTED_LISTENING_TO : u.default.Messages.LISTENING_TO,
    [r.ActivityTypes.WATCHING]: e ? u.default.Messages.UNFORMATTED_WATCHING : u.default.Messages.WATCHING,
    [r.ActivityTypes.COMPETING]: e ? u.default.Messages.UNFORMATTED_COMPETING : u.default.Messages.COMPETING
  }
}

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    c = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(n)[r.ActivityTypes.STREAMING].format({
    name: e.name
  });
  if (c && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, l.getHangStatusText)(e);
  if (null == e || null == e.name) return null;
  if ((0, i.default)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return o(n)[r.ActivityTypes.STREAMING].format({
      name: t
    })
  }
  return (0, s.default)(e) ? (0, a.default)(e.name) : function(e, t, n) {
    let l = o(n);
    switch (e) {
      case r.ActivityTypes.LISTENING:
      case r.ActivityTypes.WATCHING:
      case r.ActivityTypes.COMPETING:
        return l[e].format({
          name: t
        });
      case r.ActivityTypes.CUSTOM_STATUS:
      case r.ActivityTypes.HANG_STATUS:
        return null;
      case r.ActivityTypes.PLAYING:
      default:
        return n ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
          game: t
        }) : u.default.Messages.PLAYING_GAME.format({
          game: t
        })
    }
  }(e.type, e.name, n)
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
    let a = e;
    null != t && (a = [...a, null]);
    let s = null;
    for (let e of a) {
      let a = c(e, t, n, l);
      if (null != a) return {
        activity: e,
        activityText: a
      };
      (null == e ? void 0 : e.type) === r.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (s = e)
    }
    return (null == s ? void 0 : s.emoji) != null ? {
      activity: s,
      activityText: null
    } : null
  }
  return c(e, t, n, l)
}