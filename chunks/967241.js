"use strict";
n.r(t), n.d(t, {
  openThreadSidebarForViewing: function() {
    return _
  },
  openThreadSidebarForCreating: function() {
    return L
  },
  closeThreadSidebar: function() {
    return x
  },
  closeAndClearThreadSidebar: function() {
    return T
  }
});
var l = n("627445"),
  r = n.n(l),
  a = n("917351"),
  i = n.n(a),
  s = n("913144"),
  u = n("295426"),
  o = n("244201"),
  d = n("716241"),
  c = n("565298"),
  f = n("393414"),
  h = n("144491"),
  p = n("845579"),
  C = n("474643"),
  m = n("18494"),
  v = n("800762"),
  g = n("659500"),
  E = n("648564"),
  S = n("49111"),
  I = n("724210");

function _(e, t, n) {
  o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE);
  let l = !i.isEmpty(v.default.getVoiceStatesForChannel(e.id));
  if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
    s.default.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
    return
  }
  r(null != e.parent_id, "all threads must have parents");
  let a = m.default.getChannelId();
  e.parent_id !== a && !(0, I.isGuildHomeChannel)(a) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(S.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, I.isGuildHomeChannel)(a) ? I.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? E.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
    g.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function L(e, t, n) {
  r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
    location: n,
    channel_id: e.id,
    guild_id: e.guild_id
  }), o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
  let l = C.default.getDraft(e.id, C.DraftType.FirstThreadMessage);
  if ("" === l) {
    let t = C.default.getDraft(e.id, C.DraftType.ChannelMessage);
    u.default.saveDraft(e.id, "", C.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, C.DraftType.FirstThreadMessage)
  }
  setTimeout(() => {
    s.default.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? void 0 : t.id,
      location: n
    })
  }, 0)
}

function x(e, t) {
  (0, f.transitionTo)(S.Routes.CHANNEL(e, (0, I.isGuildHomeChannel)(t) ? I.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function T(e) {
  s.default.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), s.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: C.DraftType.FirstThreadMessage
  }), s.default.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: C.DraftType.ThreadSettings
  })
}