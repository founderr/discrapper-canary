t.d(n, {
  VO: function() {
return u;
  },
  f0: function() {
return d;
  },
  fS: function() {
return s;
  }
});
var i = t(652874),
  o = t(626135),
  a = t(981631);
let l = {
guildId: void 0,
channelId: void 0,
channelType: void 0,
viewerSwipes: 0,
thumbnailSwipes: 0,
selectedItemChanges: 0,
numMediaItems: 0
  },
  r = (0, i.Z)(() => l);

function s(e, n, t, i) {
  r.setState({
...l,
guildId: e,
channelId: n,
channelType: t,
numMediaItems: i
  });
}

function u() {
  let e = r.getState();
  o.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
guild_id: e.guildId,
channel_id: e.channelId,
channel_type: e.channelType,
number_viewer_swipes: e.viewerSwipes,
number_thumbnail_swipes: e.thumbnailSwipes,
number_selected_item_changes: e.selectedItemChanges,
number_media_items: e.numMediaItems
  }), r.setState({
...l
  });
}

function d() {
  r.setState(e => ({
selectedItemChanges: e.selectedItemChanges + 1
  }));
}