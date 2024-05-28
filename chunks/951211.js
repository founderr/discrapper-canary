"use strict";
n.r(t), n.d(t, {
  AttachmentTypes: function() {
    return a
  },
  default: function() {
    return I
  }
}), n("653041");
var a, l, s = n("620662"),
  i = n("933557"),
  r = n("377171"),
  o = n("699516"),
  u = n("594174"),
  d = n("582404"),
  c = n("529653"),
  f = n("794358"),
  h = n("897841"),
  m = n("975667"),
  p = n("432247"),
  E = n("603890"),
  C = n("944581"),
  g = n("524933"),
  S = n("411536"),
  _ = n("981631"),
  T = n("689938");

function I(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: a,
    canUseApplicationCommands: l,
    hasClips: I,
    channel: A,
    activities: v,
    newClipsCount: x,
    canPostPolls: N,
    canLaunchActivities: M,
    appContext: R
  } = e, y = [];
  return t && (y.push({
    type: "UPLOAD_A_FILE",
    icon: h.default,
    display: T.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE
  }), y.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: g.default,
    display: T.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
  })), I && t && R !== _.AppContext.POPOUT && y.push({
    type: "CLIPS",
    icon: c.default,
    display: T.default.Messages.CLIPS_SHARE_A_CLIP,
    badgeVal: x,
    badgeColor: r.default.BG_BRAND
  }), n && y.push({
    type: "CREATE_THREAD",
    icon: S.default,
    display: T.default.Messages.CREATE_THREAD
  }), N && y.push({
    type: "POLL",
    icon: E.default,
    display: T.default.Messages.CREATE_POLL
  }), a && l && y.push({
    type: "SLASH_COMMAND",
    icon: d.default,
    display: T.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
  }), M && y.push({
    type: "ACTIVITY",
    icon: C.default,
    display: T.default.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL
  }), v.forEach(e => {
    !(0, s.default)(e, _.ActivityFlags.EMBEDDED) && (e.type === _.ActivityTypes.PLAYING && (0, s.default)(e, _.ActivityFlags.JOIN) && y.push({
      type: "INVITE_TO_GAME",
      icon: m.default,
      display: T.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
        channel: (0, i.computeChannelName)(A, u.default, o.default, !0),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === _.ActivityTypes.LISTENING && (0, s.default)(e, _.ActivityFlags.SYNC) && y.push({
      type: "INVITE_TO_LISTEN",
      icon: p.default,
      display: T.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
        channel: (0, i.computeChannelName)(A, u.default, o.default, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === _.ActivityTypes.WATCHING && (0, s.default)(e, _.ActivityFlags.SYNC) && y.push({
      type: "INVITE_TO_WATCH",
      icon: f.default,
      display: T.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
        channel: (0, i.computeChannelName)(A, u.default, o.default, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    }))
  }), y
}(l = a || (a = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", l.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", l.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", l.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", l.INVITE_TO_WATCH = "INVITE_TO_WATCH", l.CREATE_THREAD = "CREATE_THREAD", l.SLASH_COMMAND = "SLASH_COMMAND", l.CLIPS = "CLIPS", l.POLL = "POLL", l.ACTIVITY = "ACTIVITY"