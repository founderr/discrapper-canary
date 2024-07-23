o.d(n, {
  VO: function() {
return d;
  },
  f0: function() {
return s;
  },
  fS: function() {
return c;
  }
});
var t = o(652874),
  i = o(626135),
  a = o(981631);
let r = {
guildId: void 0,
channelId: void 0,
channelType: void 0,
viewerSwipes: 0,
thumbnailSwipes: 0,
selectedItemChanges: 0,
numMediaItems: 0
  },
  l = (0, t.Z)(() => r);

function c(e, n, o, t) {
  l.setState({
...r,
guildId: e,
channelId: n,
channelType: o,
numMediaItems: t
  });
}

function d() {
  let e = l.getState();
  i.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
guild_id: e.guildId,
channel_id: e.channelId,
channel_type: e.channelType,
number_viewer_swipes: e.viewerSwipes,
number_thumbnail_swipes: e.thumbnailSwipes,
number_selected_item_changes: e.selectedItemChanges,
number_media_items: e.numMediaItems
  }), l.setState({
...r
  });
}

function s() {
  l.setState(e => ({
selectedItemChanges: e.selectedItemChanges + 1
  }));
}