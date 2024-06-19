n.d(t, {
  Z: function() {
    return m
  },
  r: function() {
    return l
  }
}), n(653041);
var l, i, s = n(481060),
  a = n(620662),
  r = n(933557),
  o = n(377171),
  c = n(699516),
  u = n(594174),
  d = n(981631),
  h = n(689938);

function m(e) {
  let {
    canAttachFiles: t,
    canStartThreads: n,
    useSlate: l,
    canUseApplicationCommands: i,
    hasClips: m,
    channel: p,
    activities: E,
    newClipsCount: g,
    canPostPolls: f,
    canLaunchActivities: C,
    appContext: _
  } = e, I = [];
  return t && (I.push({
    type: "UPLOAD_A_FILE",
    icon: s.FileUpIcon,
    display: h.Z.Messages.CHAT_ATTACH_UPLOAD_A_FILE
  }), I.push({
    type: "UPLOAD_TEXT_AS_FILE",
    icon: s.FileUpIcon,
    display: h.Z.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
  })), m && t && _ !== d.IlC.POPOUT && I.push({
    type: "CLIPS",
    icon: s.ClipsIcon,
    display: h.Z.Messages.CLIPS_SHARE_A_CLIP,
    badgeVal: g,
    badgeColor: o.Z.BG_BRAND
  }), n && I.push({
    type: "CREATE_THREAD",
    icon: s.ThreadPlusIcon,
    display: h.Z.Messages.CREATE_THREAD
  }), f && I.push({
    type: "POLL",
    icon: s.PollsIcon,
    display: h.Z.Messages.CREATE_POLL
  }), l && i && I.push({
    type: "SLASH_COMMAND",
    icon: s.AppsIcon,
    display: h.Z.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
  }), C && I.push({
    type: "ACTIVITY",
    icon: s.ActivitiesIcon,
    display: h.Z.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL
  }), E.forEach(e => {
    if (!(0, a.Z)(e, d.xjy.EMBEDDED)) e.type === d.IIU.PLAYING && (0, a.Z)(e, d.xjy.JOIN) && I.push({
      type: "INVITE_TO_GAME",
      icon: s.DpadIcon,
      display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
        channel: (0, r.F6)(p, u.default, c.Z, !0),
        game: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.IIU.LISTENING && (0, a.Z)(e, d.xjy.SYNC) && I.push({
      type: "INVITE_TO_LISTEN",
      icon: s.UserPlayIcon,
      display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
        channel: (0, r.F6)(p, u.default, c.Z, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    }), e.type === d.IIU.WATCHING && (0, a.Z)(e, d.xjy.SYNC) && I.push({
      type: "INVITE_TO_WATCH",
      icon: s.EyeIcon,
      display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
        channel: (0, r.F6)(p, u.default, c.Z, !0),
        name: null != e ? e.name : ""
      }),
      activity: e
    })
  }), I
}(i = l || (l = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", i.INVITE_TO_WATCH = "INVITE_TO_WATCH", i.CREATE_THREAD = "CREATE_THREAD", i.SLASH_COMMAND = "SLASH_COMMAND", i.CLIPS = "CLIPS", i.POLL = "POLL", i.ACTIVITY = "ACTIVITY"