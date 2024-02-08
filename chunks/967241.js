"use strict";
n.r(t), n.d(t, {
  openThreadSidebarForViewing: function() {
    return I
  },
  openThreadSidebarForCreating: function() {
    return _
  },
  closeThreadSidebar: function() {
    return y
  },
  closeAndClearThreadSidebar: function() {
    return A
  }
});
var l = n("627445"),
  i = n.n(l),
  a = n("917351"),
  s = n.n(a),
  r = n("913144"),
  o = n("295426"),
  u = n("244201"),
  d = n("716241"),
  c = n("565298"),
  f = n("393414"),
  p = n("144491"),
  m = n("845579"),
  h = n("474643"),
  E = n("18494"),
  S = n("800762"),
  g = n("659500"),
  C = n("648564"),
  T = n("49111"),
  v = n("724210");

function I(e, t, n) {
  u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
  let l = !s.isEmpty(S.default.getVoiceStatesForChannel(e.id));
  if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
    r.default.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
    return
  }
  i(null != e.parent_id, "all threads must have parents");
  let a = E.default.getChannelId();
  e.parent_id !== a && !(0, v.isGuildHomeChannel)(a) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(a) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
    g.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function _(e, t, n) {
  i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
    location: n,
    channel_id: e.id,
    guild_id: e.guild_id
  }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
  let l = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
  if ("" === l) {
    let t = h.default.getDraft(e.id, h.DraftType.ChannelMessage);
    o.default.saveDraft(e.id, "", h.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, h.DraftType.FirstThreadMessage)
  }
  setTimeout(() => {
    r.default.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? void 0 : t.id,
      location: n
    })
  }, 0)
}

function y(e, t) {
  (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), r.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function A(e) {
  r.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), r.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: h.DraftType.FirstThreadMessage
  }), r.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: h.DraftType.ThreadSettings
  })
}