"use strict";
n.d(t, {
  NK: function() {
    return g
  },
  R6: function() {
    return p
  },
  ok: function() {
    return O
  },
  vN: function() {
    return R
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(570140),
  l = n(430742),
  u = n(40851),
  _ = n(367907),
  c = n(727429),
  d = n(703656),
  E = n(359110),
  I = n(695346),
  T = n(703558),
  h = n(944486),
  f = n(979651),
  S = n(585483),
  A = n(124368),
  N = n(981631),
  m = n(176505);

function O(e, t, n) {
  u.UI.dispatch(N.CkL.POPOUT_CLOSE);
  let i = !o().isEmpty(f.Z.getVoiceStatesForChannel(e.id));
  if (t || !I.vF.getSetting() || __OVERLAY__ || i) {
    a.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, E.ad)(e, n) : (0, E.Kh)(e.id);
    return
  }
  r()(null != e.parent_id, "all threads must have parents");
  let s = h.Z.getChannelId();
  e.parent_id !== s && !(0, m.ME)(s) && (0, E.Kh)(e.parent_id), (0, d.uL)(N.Z5c.CHANNEL_THREAD_VIEW((0, c.e)(e), (0, m.ME)(s) ? m.oC.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? A.on.FORUM : void 0), setTimeout(() => {
    S.S.dispatch(N.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function p(e, t, n) {
  if (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, _.yw)(N.rMx.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), u.UI.dispatch(N.CkL.POPOUT_CLOSE), h.Z.getChannelId() !== e.id && (0, E.Kh)(e.id), "" === T.Z.getDraft(e.id, T.d.FirstThreadMessage)) {
    let t = T.Z.getDraft(e.id, T.d.ChannelMessage);
    l.Z.saveDraft(e.id, "", T.d.ChannelMessage), l.Z.saveDraft(e.id, t, T.d.FirstThreadMessage)
  }
  setTimeout(() => {
    a.Z.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? void 0 : t.id,
      location: n
    })
  }, 0)
}

function R(e, t) {
  (0, d.uL)(N.Z5c.CHANNEL(e, (0, m.ME)(t) ? m.oC.GUILD_HOME : t)), a.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function g(e) {
  a.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), a.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: T.d.FirstThreadMessage
  }), a.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: T.d.ThreadSettings
  })
}