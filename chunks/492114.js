"use strict";
let E, l, n, C, F, i;
t.r(e), t.d(e, {
  default: function() {
    return G
  }
}), t("808653"), t("702976"), t("222007");
var u = t("917351"),
  a = t.n(u),
  r = t("866227"),
  o = t.n(r),
  D = t("446674"),
  d = t("872717"),
  s = t("913144"),
  A = t("233069"),
  c = t("813006"),
  f = t("517763"),
  N = t("766274"),
  _ = t("42203"),
  T = t("49111");
let h = T.FormStates.CLOSED,
  m = {},
  v = {},
  I = !1,
  S = !1,
  p = null,
  L = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

function g(B) {
  let e = _.default.getChannel(B.channelId);
  if (null == e) return y();
  h = T.FormStates.OPEN, C = n = e, p = "location" in B && null != B.location ? B.location : null, l = "subsection" in B ? B.subsection : null, null != C && (C = C.set("nsfw", C.isNSFW())), F = _.default.getChannel(C.parent_id), i = C.getGuildId(), m = {}, O({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != E ? E : T.ChannelSettingsSections.OVERVIEW,
    subsection: l
  })
}

function O(B) {
  E = B.section, l = B.subsection, null != C && E === T.ChannelSettingsSections.INSTANT_INVITES && (I = !0, d.default.get({
    url: T.Endpoints.INSTANT_INVITES(C.id),
    oldFormErrors: !0
  }).then(B => {
    I = !1, s.default.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: B.body
    })
  }, () => I = !1))
}

function y() {
  S = !1, h = T.FormStates.CLOSED, E = null, C = n = null, F = null, v = {}
}
let U = a.debounce(() => {
  if (null == C || null == n) return !1;
  let B = C.toJS(),
    e = n.toJS(),
    t = L.every(t => B[t] === e[t]);
  t && C !== n && (C = n, j.emitChange())
}, 500);

function M(B) {
  return new f.default({
    code: B.code,
    temporary: B.temporary,
    revoked: B.revoked,
    inviter: null != B.inviter ? new N.default(B.inviter) : null,
    channel: (0, A.createChannelRecordFromInvite)(B.channel),
    guild: null != B.guild ? new c.default(B.guild) : null,
    uses: B.uses,
    maxUses: B.max_uses,
    maxAge: B.max_age,
    createdAt: o(B.created_at),
    type: B.type
  })
}
class R extends D.default.Store {
  initialize() {
    this.waitFor(_.default)
  }
  hasChanges() {
    return C !== n
  }
  isOpen() {
    return S
  }
  getSection() {
    return E
  }
  getInvites() {
    return {
      invites: v,
      loading: I
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return C
  }
  getFormState() {
    return h
  }
  getCategory() {
    return F
  }
  getProps() {
    return {
      submitting: h === T.FormStates.SUBMITTING,
      errors: m,
      channel: C,
      section: E,
      subsection: l,
      invites: v,
      selectedOverwriteId: i,
      hasChanges: this.hasChanges(),
      analyticsLocation: p
    }
  }
}
R.displayName = "ChannelSettingsStore";
let j = new R(s.default, {
  CHANNEL_SETTINGS_INIT: g,
  CHANNEL_SETTINGS_OPEN: function(B) {
    S = !0, g(B)
  },
  CHANNEL_SETTINGS_SUBMIT: function() {
    h = T.FormStates.SUBMITTING, m = {}
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
    n = C, h = T.FormStates.OPEN
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function(B) {
    var e;
    h = T.FormStates.OPEN, m = Object.keys(null !== (e = B.errors) && void 0 !== e ? e : {}).reduce((e, t) => {
      let E = B.errors[t];
      return (0, u.isArray)(E) ? e[t] = E.join("\n") : e[t] = E, e
    }, {})
  },
  CHANNEL_SETTINGS_CLOSE: y,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function(B) {
    let {
      overwriteId: e
    } = B;
    i = e
  },
  CHANNEL_SETTINGS_UPDATE: function(B) {
    let {
      name: e,
      channelType: t,
      topic: E,
      bitrate: l,
      userLimit: n,
      nsfw: F,
      flags: i,
      rateLimitPerUser: u,
      defaultThreadRateLimitPerUser: a,
      autoArchiveDuration: r,
      locked: o,
      invitable: D,
      defaultAutoArchiveDuration: d,
      template: s,
      defaultReactionEmoji: A,
      rtcRegion: c,
      videoQualityMode: f,
      availableTags: N,
      defaultSortOrder: _,
      defaultForumLayout: T,
      iconEmoji: h,
      themeColor: m
    } = B;
    if (null == C) return !1;
    null != e && (C = C.set("name", e)), null != E && (C = C.set("topic", E)), null != l && (C = C.set("bitrate", l)), null != n && (C = C.set("userLimit", n)), null != F && (C = C.set("nsfw", F)), null != i && (C = C.set("flags", i)), null != u && (C = C.set("rateLimitPerUser", u)), null != a && (C = C.set("defaultThreadRateLimitPerUser", a)), null != r && (C = C.set("threadMetadata", {
      ...C.threadMetadata,
      autoArchiveDuration: r
    })), null != o && (C = C.set("threadMetadata", {
      ...C.threadMetadata,
      locked: o
    })), null != D && (C = C.set("threadMetadata", {
      ...C.threadMetadata,
      invitable: D
    })), null != d && (C = C.set("defaultAutoArchiveDuration", d)), null != s && (C = C.set("template", s)), null != t && (C = C.set("type", t)), void 0 !== c && (C = C.set("rtcRegion", c)), null != f && (C = C.set("videoQualityMode", f)), void 0 !== A && (C = C.set("defaultReactionEmoji", A)), null != N && (C = C.set("availableTags", N)), null != _ && (C = C.set("defaultSortOrder", _)), null != T && (C = C.set("defaultForumLayout", T)), void 0 !== h && (C = C.set("iconEmoji", h)), null != m && (C = C.set("themeColor", m)), U()
  },
  CHANNEL_SETTINGS_SET_SECTION: O,
  CHANNEL_SETTINGS_LOADED_INVITES: function(B) {
    v = {}, B.invites.forEach(B => {
      v[B.code] = M(B)
    })
  },
  CHANNEL_UPDATES: function(B) {
    let {
      channels: e
    } = B;
    if (null == C) return !1;
    let t = !1;
    for (let B of e)(function(B) {
      if (null == n || n.id !== B) return !1;
      if (n === C) {
        let e = _.default.getChannel(B);
        if (null == e) return !1;
        C = n = e, F = _.default.getChannel(C.parent_id)
      } else {
        let e = _.default.getChannel(B);
        if (null == e) return !1;
        n = e, null != C && (C = C.set("permissionOverwrites", n.permissionOverwrites), F = _.default.getChannel(C.parent_id))
      }
      return !0
    })(B.id) && null != C && (null != i && null == C.permissionOverwrites[i] && (i = C.getGuildId()), t = !0);
    return t
  },
  CHANNEL_DELETE: function(B) {
    let {
      channel: {
        id: e
      }
    } = B;
    if (null == C || C.id !== e) return !1;
    h = T.FormStates.CLOSED
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(B) {
    v = {
      ...v
    }, delete v[B.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(B) {
    v = {
      ...v,
      [B.invite.code]: M(B.invite)
    }
  }
});
var G = j