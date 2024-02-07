"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("222007");
var n = a("808742"),
  l = a("204947"),
  s = a("152311"),
  i = a("502651"),
  r = a("49111"),
  u = a("782340");

function o(e) {
  return {
    [r.ActivityTypes.STREAMING]: e ? u.default.Messages.UNFORMATTED_STREAMING : u.default.Messages.STREAMING,
    [r.ActivityTypes.LISTENING]: e ? u.default.Messages.UNFORMATTED_LISTENING_TO : u.default.Messages.LISTENING_TO,
    [r.ActivityTypes.WATCHING]: e ? u.default.Messages.UNFORMATTED_WATCHING : u.default.Messages.WATCHING,
    [r.ActivityTypes.COMPETING]: e ? u.default.Messages.UNFORMATTED_COMPETING : u.default.Messages.COMPETING
  }
}

function c(e, t) {
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    c = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(a)[r.ActivityTypes.STREAMING].format({
    name: e.name
  });
  if (c && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, n.getHangStatusText)(e);
  if (null == e || null == e.name) return null;
  if ((0, i.default)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return o(a)[r.ActivityTypes.STREAMING].format({
      name: t
    })
  }
  return (0, s.default)(e) ? (0, l.default)(e.name) : function(e, t, a) {
    let n = o(a);
    switch (e) {
      case r.ActivityTypes.LISTENING:
      case r.ActivityTypes.WATCHING:
      case r.ActivityTypes.COMPETING:
        return n[e].format({
          name: t
        });
      case r.ActivityTypes.CUSTOM_STATUS:
      case r.ActivityTypes.HANG_STATUS:
        return null;
      case r.ActivityTypes.PLAYING:
      default:
        return a ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
          game: t
        }) : u.default.Messages.PLAYING_GAME.format({
          game: t
        })
    }
  }(e.type, e.name, a)
}

function d(e, t) {
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
    let l = e;
    null != t && (l = [...l, null]);
    let s = null;
    for (let e of l) {
      let l = c(e, t, a, n);
      if (null != l) return {
        activity: e,
        activityText: l
      };
      (null == e ? void 0 : e.type) === r.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (s = e)
    }
    return (null == s ? void 0 : s.emoji) != null ? {
      activity: s,
      activityText: null
    } : null
  }
  return c(e, t, a, n)
}