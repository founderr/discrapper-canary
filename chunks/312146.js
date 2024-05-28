"use strict";
i.r(l), i.d(l, {
  useEligibleForGuildMediaChannelPostPreviewEmbed: function() {
    return s
  },
  useGuildEligibleForMediaChannels: function() {
    return a
  }
});
var n = i("818083"),
  t = i("981631");
let r = (0, n.createExperiment)({
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

function a(e) {
  var l;
  let {
    enabled: i
  } = r.useExperiment({
    guildId: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : t.EMPTY_STRING_SNOWFLAKE_ID,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && i
}
let d = (0, n.createExperiment)({
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

function s() {
  let {
    enabledForUser: e
  } = d.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}