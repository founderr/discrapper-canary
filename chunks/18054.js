"use strict";
n.r(t), n.d(t, {
  init: function() {
    return d
  },
  close: function() {
    return c
  },
  setSection: function() {
    return f
  },
  updateChannel: function() {
    return h
  },
  saveChannel: function() {
    return C
  },
  deleteChannel: function() {
    return p
  },
  default: function() {
    return E
  }
}), n("702976");
var a = n("872717"),
  s = n("913144"),
  l = n("81732");
n("21121"), n("693051");
var i = n("263024");
n("492114");
var r = n("42203"),
  o = n("54239"),
  u = n("49111");

function d(e, t, n) {
  s.default.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: e,
    location: t,
    subsection: n
  })
}

function c() {
  s.default.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function f(e) {
  s.default.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: e
  })
}

function h(e) {
  let {
    name: t,
    type: n,
    topic: a,
    bitrate: l,
    userLimit: i,
    nsfw: r,
    flags: o,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: f,
    defaultReactionEmoji: h,
    rtcRegion: C,
    videoQualityMode: p,
    autoArchiveDuration: E,
    locked: m,
    invitable: g,
    availableTags: _,
    defaultSortOrder: S,
    defaultForumLayout: T,
    iconEmoji: A,
    themeColor: M
  } = e;
  s.default.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: t,
    channelType: n,
    topic: a,
    bitrate: l,
    userLimit: i,
    nsfw: r,
    flags: o,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: d,
    defaultAutoArchiveDuration: c,
    template: f,
    defaultReactionEmoji: h,
    rtcRegion: C,
    videoQualityMode: p,
    autoArchiveDuration: E,
    locked: m,
    invitable: g,
    availableTags: _,
    defaultSortOrder: S,
    defaultForumLayout: T,
    iconEmoji: A,
    themeColor: M
  })
}
async function C(e, t) {
  let {
    name: n,
    type: o,
    position: d,
    topic: c,
    bitrate: f,
    userLimit: h,
    nsfw: C,
    flags: p,
    permissionOverwrites: E,
    rateLimitPerUser: m,
    defaultThreadRateLimitPerUser: g,
    defaultAutoArchiveDuration: _,
    template: S,
    defaultReactionEmoji: T,
    rtcRegion: A,
    videoQualityMode: M,
    autoArchiveDuration: I,
    locked: N,
    invitable: v,
    availableTags: L,
    defaultSortOrder: R,
    defaultForumLayout: y,
    iconEmoji: x,
    themeColor: O
  } = t, D = r.default.getChannel(e);
  return s.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await i.default.unarchiveThreadIfNecessary(e), a.default.patch({
    url: u.Endpoints.CHANNEL(e),
    body: {
      name: n,
      type: o,
      position: d,
      topic: c,
      bitrate: f,
      user_limit: h,
      nsfw: C,
      flags: p,
      permission_overwrites: E,
      rate_limit_per_user: m,
      default_thread_rate_limit_per_user: g,
      default_auto_archive_duration: _,
      template: S,
      rtc_region: A,
      video_quality_mode: M,
      auto_archive_duration: I,
      locked: N,
      invitable: v,
      default_reaction_emoji: null != T ? {
        emoji_id: null == T ? void 0 : T.emojiId,
        emoji_name: null == T ? void 0 : T.emojiName
      } : null === T ? null : void 0,
      available_tags: null == L ? void 0 : L.map(e => ({
        id: e.id,
        name: e.name,
        emoji_id: e.emojiId,
        emoji_name: e.emojiName,
        moderated: e.moderated
      })),
      default_sort_order: R,
      default_forum_layout: y,
      icon_emoji: null != x ? {
        id: x.id,
        name: x.name
      } : null === x ? null : void 0,
      theme_color: O
    },
    oldFormErrors: !0
  }).then(t => {
    s.default.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: e
    });
    let n = null == D ? void 0 : D.getGuildId();
    return null != n && !(null == D ? void 0 : D.isThread()) && l.default.checkGuildTemplateDirty(n), t
  }, e => (s.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function p(e) {
  let t = r.default.getChannel(e);
  a.default.delete({
    url: u.Endpoints.CHANNEL(e),
    oldFormErrors: !0
  }).then(() => {
    let e = null == t ? void 0 : t.getGuildId();
    null != e && !(null == t ? void 0 : t.isThread()) && l.default.checkGuildTemplateDirty(e), c()
  })
}
var E = {
  init: d,
  open: function(e, t, n) {
    d(e, t, n), (0, o.pushLayer)(u.Layers.CHANNEL_SETTINGS)
  },
  close: c,
  setSection: f,
  selectPermissionOverwrite: function(e) {
    s.default.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: e
    })
  },
  updateChannel: h,
  saveChannel: C,
  deleteChannel: p,
  updateVoiceChannelStatus: function(e, t) {
    return a.default.put({
      url: u.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
      body: {
        status: t
      }
    })
  }
}