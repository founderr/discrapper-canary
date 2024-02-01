"use strict";
t.r(e), t.d(e, {
  init: function() {
    return a
  },
  close: function() {
    return r
  },
  setSection: function() {
    return o
  },
  updateChannel: function() {
    return D
  },
  saveChannel: function() {
    return d
  },
  deleteChannel: function() {
    return s
  },
  default: function() {
    return A
  }
}), t("702976");
var E = t("872717"),
  n = t("913144"),
  l = t("81732");
t("21121"), t("693051");
var C = t("263024");
t("492114");
var F = t("42203"),
  i = t("54239"),
  u = t("49111");

function a(B, e, t) {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: B,
    location: e,
    subsection: t
  })
}

function r() {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function o(B) {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: B
  })
}

function D(B) {
  let {
    name: e,
    type: t,
    topic: E,
    bitrate: l,
    userLimit: C,
    nsfw: F,
    flags: i,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: a,
    defaultAutoArchiveDuration: r,
    template: o,
    defaultReactionEmoji: D,
    rtcRegion: d,
    videoQualityMode: s,
    autoArchiveDuration: A,
    locked: c,
    invitable: f,
    availableTags: _,
    defaultSortOrder: N,
    defaultForumLayout: T,
    iconEmoji: h,
    themeColor: m
  } = B;
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: e,
    channelType: t,
    topic: E,
    bitrate: l,
    userLimit: C,
    nsfw: F,
    flags: i,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: a,
    defaultAutoArchiveDuration: r,
    template: o,
    defaultReactionEmoji: D,
    rtcRegion: d,
    videoQualityMode: s,
    autoArchiveDuration: A,
    locked: c,
    invitable: f,
    availableTags: _,
    defaultSortOrder: N,
    defaultForumLayout: T,
    iconEmoji: h,
    themeColor: m
  })
}
async function d(B, e) {
  let {
    name: t,
    type: i,
    position: a,
    topic: r,
    bitrate: o,
    userLimit: D,
    nsfw: d,
    flags: s,
    permissionOverwrites: A,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: f,
    defaultAutoArchiveDuration: _,
    template: N,
    defaultReactionEmoji: T,
    rtcRegion: h,
    videoQualityMode: m,
    autoArchiveDuration: v,
    locked: I,
    invitable: S,
    availableTags: p,
    defaultSortOrder: L,
    defaultForumLayout: g,
    iconEmoji: O,
    themeColor: y
  } = e, U = F.default.getChannel(B);
  return n.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await C.default.unarchiveThreadIfNecessary(B), E.default.patch({
    url: u.Endpoints.CHANNEL(B),
    body: {
      name: t,
      type: i,
      position: a,
      topic: r,
      bitrate: o,
      user_limit: D,
      nsfw: d,
      flags: s,
      permission_overwrites: A,
      rate_limit_per_user: c,
      default_thread_rate_limit_per_user: f,
      default_auto_archive_duration: _,
      template: N,
      rtc_region: h,
      video_quality_mode: m,
      auto_archive_duration: v,
      locked: I,
      invitable: S,
      default_reaction_emoji: null != T ? {
        emoji_id: null == T ? void 0 : T.emojiId,
        emoji_name: null == T ? void 0 : T.emojiName
      } : null === T ? null : void 0,
      available_tags: null == p ? void 0 : p.map(B => ({
        id: B.id,
        name: B.name,
        emoji_id: B.emojiId,
        emoji_name: B.emojiName,
        moderated: B.moderated
      })),
      default_sort_order: L,
      default_forum_layout: g,
      icon_emoji: null != O ? {
        id: O.id,
        name: O.name
      } : null === O ? null : void 0,
      theme_color: y
    },
    oldFormErrors: !0
  }).then(e => {
    n.default.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: B
    });
    let t = null == U ? void 0 : U.getGuildId();
    return null != t && !(null == U ? void 0 : U.isThread()) && l.default.checkGuildTemplateDirty(t), e
  }, B => (n.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: B.body
  }), B))
}

function s(B) {
  let e = F.default.getChannel(B);
  E.default.delete({
    url: u.Endpoints.CHANNEL(B),
    oldFormErrors: !0
  }).then(() => {
    let B = null == e ? void 0 : e.getGuildId();
    null != B && !(null == e ? void 0 : e.isThread()) && l.default.checkGuildTemplateDirty(B), r()
  })
}
var A = {
  init: a,
  open: function(B, e, t) {
    a(B, e, t), (0, i.pushLayer)(u.Layers.CHANNEL_SETTINGS)
  },
  close: r,
  setSection: o,
  selectPermissionOverwrite: function(B) {
    n.default.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: B
    })
  },
  updateChannel: D,
  saveChannel: d,
  deleteChannel: s,
  updateVoiceChannelStatus: function(B, e) {
    return E.default.put({
      url: u.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(B),
      body: {
        status: e
      }
    })
  }
}