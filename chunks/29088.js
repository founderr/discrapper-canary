"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("222007");
var r = l("808742"),
  a = l("204947"),
  n = l("152311"),
  s = l("502651"),
  i = l("49111"),
  o = l("782340");

function u(e) {
  return {
    [i.ActivityTypes.STREAMING]: e ? o.default.Messages.UNFORMATTED_STREAMING : o.default.Messages.STREAMING,
    [i.ActivityTypes.LISTENING]: e ? o.default.Messages.UNFORMATTED_LISTENING_TO : o.default.Messages.LISTENING_TO,
    [i.ActivityTypes.WATCHING]: e ? o.default.Messages.UNFORMATTED_WATCHING : o.default.Messages.WATCHING,
    [i.ActivityTypes.COMPETING]: e ? o.default.Messages.UNFORMATTED_COMPETING : o.default.Messages.COMPETING
  }
}

function d(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    d = arguments.length > 3 ? arguments[3] : void 0;
  if (null != e && e.type === i.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== i.ActivityTypes.PLAYING ? o.default.Messages.SHARING_SCREEN : u(l)[i.ActivityTypes.STREAMING].format({
    name: e.name
  });
  if (d && null != e && e.type === i.ActivityTypes.HANG_STATUS) return (0, r.getHangStatusText)(e);
  if (null == e || null == e.name) return null;
  if ((0, s.default)(e)) {
    let t = null != e.details && "" !== e.details ? e.details : e.name;
    return u(l)[i.ActivityTypes.STREAMING].format({
      name: t
    })
  }
  return (0, n.default)(e) ? (0, a.default)(e.name) : function(e, t, l) {
    let r = u(l);
    switch (e) {
      case i.ActivityTypes.LISTENING:
      case i.ActivityTypes.WATCHING:
      case i.ActivityTypes.COMPETING:
        return r[e].format({
          name: t
        });
      case i.ActivityTypes.CUSTOM_STATUS:
      case i.ActivityTypes.HANG_STATUS:
        return null;
      case i.ActivityTypes.PLAYING:
      default:
        return l ? o.default.Messages.UNFORMATTED_PLAYING_GAME.format({
          game: t
        }) : o.default.Messages.PLAYING_GAME.format({
          game: t
        })
    }
  }(e.type, e.name, l)
}

function c(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0;
  if (Array.isArray(e)) {
    let a = e;
    null != t && (a = [...a, null]);
    let n = null;
    for (let e of a) {
      let a = d(e, t, l, r);
      if (null != a) return {
        activity: e,
        activityText: a
      };
      (null == e ? void 0 : e.type) === i.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (n = e)
    }
    return (null == n ? void 0 : n.emoji) != null ? {
      activity: n,
      activityText: null
    } : null
  }
  return d(e, t, l, r)
}