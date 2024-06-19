s.d(n, {
  Ui: function() {
    return i
  },
  p$: function() {
    return r
  }
});
var a = s(818083),
  l = s(981631);
let t = (0, a.B)({
  kind: "guild",
  id: "2023-03_guild_media_channel",
  label: "Media Channel",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables guild to create a media channel",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  var n;
  let {
    enabled: s
  } = t.useExperiment({
    guildId: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : l.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && s
}
let o = (0, a.B)({
  kind: "user",
  id: "2023-04_guild_media_channel_post_preview_embed_users",
  label: "Guild Role Subscription Users",
  defaultConfig: {
    enabledForUser: !1
  },
  treatments: [{
    id: 1,
    label: "Enables for users Guild Media Post Preview Embeds",
    config: {
      enabledForUser: !0
    }
  }]
});

function r() {
  let {
    enabledForUser: e
  } = o.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}