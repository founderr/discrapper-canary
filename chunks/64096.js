"use strict";
n.r(t), n.d(t, {
  AttachmentTypes: function() {
    return s
  },
  default: function() {
    return T
  }
}), n("424973");
var s, a, l = n("871388"),
  i = n("679653"),
  r = n("20606"),
  o = n("27618"),
  u = n("697218"),
  d = n("64791"),
  c = n("522049"),
  f = n("462579"),
  h = n("407535"),
  C = n("824326"),
  p = n("616225"),
  m = n("777987"),
  E = n("82636"),
  g = n("12724"),
  S = n("654276"),
  _ = n("49111"),
  A = n("782340");

function T(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: s,
    canUseApplicationCommands: a,
    hasClips: T,
    channel: M,
    activities: N,
    newClipsCount: I,
    canPostPolls: v,
    canLaunchActivities: L,
    appContext: x
  } = e, R = [];
  return t && (R.push({
    type: "UPLOAD_A_FILE",
    icon: h.default,
    display: A.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE
  }), R.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: g.default,
    display: A.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
  })), T && t && x !== _.AppContext.POPOUT && R.push({
    type: "CLIPS",
    icon: c.default,
    display: A.default.Messages.CLIPS_SHARE_A_CLIP,
    badgeVal: I,
    badgeColor: r.default.BG_BRAND
  }), n && R.push({
    type: "CREATE_THREAD",
    icon: S.default,
    display: A.default.Messages.CREATE_THREAD
  }), v && R.push({
    type: "POLL",
    icon: m.default,
    display: A.default.Messages.CREATE_POLL
  }), s && a && R.push({
    type: "SLASH_COMMAND",
    icon: d.default,
    display: A.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
  }), L && R.push({
    type: "ACTIVITY",
    icon: E.default,
    display: A.default.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL
  }), N.forEach(e => {
    !(0, l.default)(e, _.ActivityFlags.EMBEDDED) && (e.type === _.ActivityTypes.PLAYING && (0, l.default)(e, _.ActivityFlags.JOIN) && R.push({
      type: "INVITE_TO_GAME",
      icon: C.default,
      display: A.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
        channel: (0, i.computeChannelName)(M, u.default, o.default, !0),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === _.ActivityTypes.LISTENING && (0, l.default)(e, _.ActivityFlags.SYNC) && R.push({
      type: "INVITE_TO_LISTEN",
      icon: p.default,
      display: A.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
        channel: (0, i.computeChannelName)(M, u.default, o.default, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === _.ActivityTypes.WATCHING && (0, l.default)(e, _.ActivityFlags.SYNC) && R.push({
      type: "INVITE_TO_WATCH",
      icon: f.default,
      display: A.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
        channel: (0, i.computeChannelName)(M, u.default, o.default, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), R
}(a = s || (s = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", a.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", a.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", a.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", a.INVITE_TO_WATCH = "INVITE_TO_WATCH", a.CREATE_THREAD = "CREATE_THREAD", a.SLASH_COMMAND = "SLASH_COMMAND", a.CLIPS = "CLIPS", a.POLL = "POLL", a.ACTIVITY = "ACTIVITY"