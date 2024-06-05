"use strict";
l.r(t), l.d(t, {
  endMediaViewerSession: function() {
    return d
  },
  incrementSelectedItemChanges: function() {
    return u
  },
  startMediaViewerSession: function() {
    return o
  }
});
var n = l("652874"),
  r = l("626135"),
  s = l("981631");
let i = {
    guildId: void 0,
    channelId: void 0,
    channelType: void 0,
    viewerSwipes: 0,
    thumbnailSwipes: 0,
    selectedItemChanges: 0,
    numMediaItems: 0
  },
  a = (0, n.default)(() => i);

function o(e, t, l, n) {
  a.setState({
    ...i,
    guildId: e,
    channelId: t,
    channelType: l,
    numMediaItems: n
  })
}

function d() {
  let e = a.getState();
  r.default.track(s.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
    guild_id: e.guildId,
    channel_id: e.channelId,
    channel_type: e.channelType,
    number_viewer_swipes: e.viewerSwipes,
    number_thumbnail_swipes: e.thumbnailSwipes,
    number_selected_item_changes: e.selectedItemChanges,
    number_media_items: e.numMediaItems
  }), a.setState({
    ...i
  })
}

function u() {
  a.setState(e => ({
    selectedItemChanges: e.selectedItemChanges + 1
  }))
}