t.d(l, {
  VO: function() {
    return d
  },
  f0: function() {
    return u
  },
  fS: function() {
    return o
  }
});
var n = t(652874),
  r = t(626135),
  i = t(981631);
let s = {
    guildId: void 0,
    channelId: void 0,
    channelType: void 0,
    viewerSwipes: 0,
    thumbnailSwipes: 0,
    selectedItemChanges: 0,
    numMediaItems: 0
  },
  a = (0, n.Z)(() => s);

function o(e, l, t, n) {
  a.setState({
    ...s,
    guildId: e,
    channelId: l,
    channelType: t,
    numMediaItems: n
  })
}

function d() {
  let e = a.getState();
  r.default.track(i.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
    guild_id: e.guildId,
    channel_id: e.channelId,
    channel_type: e.channelType,
    number_viewer_swipes: e.viewerSwipes,
    number_thumbnail_swipes: e.thumbnailSwipes,
    number_selected_item_changes: e.selectedItemChanges,
    number_media_items: e.numMediaItems
  }), a.setState({
    ...s
  })
}

function u() {
  a.setState(e => ({
    selectedItemChanges: e.selectedItemChanges + 1
  }))
}