t.d(a, {
  Ui: function() {
    return i
  },
  p$: function() {
    return d
  }
});
var n = t(818083),
  o = t(981631);
let r = (0, n.B)({
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
  var a;
  let {
    enabled: t
  } = r.useExperiment({
    guildId: null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : o.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && t
}
let l = (0, n.B)({
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

function d() {
  let {
    enabledForUser: e
  } = l.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}