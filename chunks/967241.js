"use strict";
a.r(t), a.d(t, {
  openThreadSidebarForViewing: function() {
    return S
  },
  openThreadSidebarForCreating: function() {
    return A
  },
  closeThreadSidebar: function() {
    return O
  },
  closeAndClearThreadSidebar: function() {
    return x
  }
});
var i = a("627445"),
  s = a.n(i),
  r = a("917351"),
  n = a.n(r),
  l = a("913144"),
  o = a("295426"),
  d = a("244201"),
  c = a("716241"),
  u = a("565298"),
  h = a("393414"),
  f = a("144491"),
  p = a("845579"),
  _ = a("474643"),
  m = a("18494"),
  g = a("800762"),
  C = a("659500"),
  T = a("648564"),
  E = a("49111"),
  v = a("724210");

function S(e, t, a) {
  d.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE);
  let i = !n.isEmpty(g.default.getVoiceStatesForChannel(e.id));
  if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
    l.default.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != a ? (0, f.transitionToThread)(e, a) : (0, f.transitionToChannel)(e.id);
    return
  }
  s(null != e.parent_id, "all threads must have parents");
  let r = m.default.getChannelId();
  e.parent_id !== r && !(0, v.isGuildHomeChannel)(r) && (0, f.transitionToChannel)(e.parent_id), (0, h.transitionTo)(E.Routes.CHANNEL_THREAD_VIEW((0, u.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(r) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? T.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
    C.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function A(e, t, a) {
  s(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), s(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(E.AnalyticEvents.THREAD_CREATION_STARTED, {
    location: a,
    channel_id: e.id,
    guild_id: e.guild_id
  }), d.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, f.transitionToChannel)(e.id);
  let i = _.default.getDraft(e.id, _.DraftType.FirstThreadMessage);
  if ("" === i) {
    let t = _.default.getDraft(e.id, _.DraftType.ChannelMessage);
    o.default.saveDraft(e.id, "", _.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, _.DraftType.FirstThreadMessage)
  }
  setTimeout(() => {
    l.default.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? void 0 : t.id,
      location: a
    })
  }, 0)
}

function O(e, t) {
  (0, h.transitionTo)(E.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function x(e) {
  l.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), l.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: _.DraftType.FirstThreadMessage
  }), l.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: _.DraftType.ThreadSettings
  })
}