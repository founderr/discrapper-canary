"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
}), l("222007");
var a = l("808742"),
  n = l("204947"),
  s = l("152311"),
  i = l("502651"),
  r = l("49111"),
  u = l("782340");

function o(e) {
  return {
    [r.ActivityTypes.STREAMING]: e ? u.default.Messages.UNFORMATTED_STREAMING : u.default.Messages.STREAMING,
    [r.ActivityTypes.LISTENING]: e ? u.default.Messages.UNFORMATTED_LISTENING_TO : u.default.Messages.LISTENING_TO,
    [r.ActivityTypes.WATCHING]: e ? u.default.Messages.UNFORMATTED_WATCHING : u.default.Messages.WATCHING,
    [r.ActivityTypes.COMPETING]: e ? u.default.Messages.UNFORMATTED_COMPETING : u.default.Messages.COMPETING
  }
}

function c(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    c = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(l)[r.ActivityTypes.STREAMING].format({
    name: e.name
  });
  if (c && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, a.getHangStatusText)(e);
  if (null == e || null == e.name) return null;
  if ((0, i.default)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return o(l)[r.ActivityTypes.STREAMING].format({
      name: t
    })
  }
  return (0, s.default)(e) ? (0, n.default)(e.name) : function(e, t, l) {
    let a = o(l);
    switch (e) {
      case r.ActivityTypes.LISTENING:
      case r.ActivityTypes.WATCHING:
      case r.ActivityTypes.COMPETING:
        return a[e].format({
          name: t
        });
      case r.ActivityTypes.CUSTOM_STATUS:
      case r.ActivityTypes.HANG_STATUS:
        return null;
      case r.ActivityTypes.PLAYING:
      default:
        return l ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
          game: t
        }) : u.default.Messages.PLAYING_GAME.format({
          game: t
        })
    }
  }(e.type, e.name, l)
}

function d(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
    let n = e;
    null != t && (n = [...n, null]);
    let s = null;
    for (let e of n) {
      let n = c(e, t, l, a);
      if (null != n) return {
        activity: e,
        activityText: n
      };
      (null == e ? void 0 : e.type) === r.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (s = e)
    }
    return (null == s ? void 0 : s.emoji) != null ? {
      activity: s,
      activityText: null
    } : null
  }
  return c(e, t, l, a)
}