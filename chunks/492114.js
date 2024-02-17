"use strict";
let a, s, l, i, r, o;
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("808653"), n("702976"), n("222007");
var u = n("917351"),
  d = n.n(u),
  c = n("866227"),
  f = n.n(c),
  h = n("446674"),
  C = n("872717"),
  p = n("913144"),
  m = n("233069"),
  E = n("813006"),
  g = n("517763"),
  S = n("766274"),
  _ = n("42203"),
  A = n("49111");
let T = A.FormStates.CLOSED,
  M = {},
  I = {},
  N = !1,
  v = !1,
  L = null,
  x = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

function R(e) {
  let t = _.default.getChannel(e.channelId);
  if (null == t) return O();
  T = A.FormStates.OPEN, i = l = t, L = "location" in e && null != e.location ? e.location : null, s = "subsection" in e ? e.subsection : null, null != i && (i = i.set("nsfw", i.isNSFW())), r = _.default.getChannel(i.parent_id), o = i.getGuildId(), M = {}, y({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != a ? a : A.ChannelSettingsSections.OVERVIEW,
    subsection: s
  })
}

function y(e) {
  a = e.section, s = e.subsection, null != i && a === A.ChannelSettingsSections.INSTANT_INVITES && (N = !0, C.default.get({
    url: A.Endpoints.INSTANT_INVITES(i.id),
    oldFormErrors: !0
  }).then(e => {
    N = !1, p.default.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  }, () => N = !1))
}

function O() {
  v = !1, T = A.FormStates.CLOSED, a = null, i = l = null, r = null, I = {}
}
let D = d.debounce(() => {
  if (null == i || null == l) return !1;
  let e = i.toJS(),
    t = l.toJS(),
    n = x.every(n => e[n] === t[n]);
  n && i !== l && (i = l, b.emitChange())
}, 500);

function j(e) {
  return new g.default({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new S.default(e.inviter) : null,
    channel: (0, m.createChannelRecordFromInvite)(e.channel),
    guild: null != e.guild ? new E.default(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: f(e.created_at),
    type: e.type
  })
}
class P extends h.default.Store {
  initialize() {
    this.waitFor(_.default)
  }
  hasChanges() {
    return i !== l
  }
  isOpen() {
    return v
  }
  getSection() {
    return a
  }
  getInvites() {
    return {
      invites: I,
      loading: N
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return i
  }
  getFormState() {
    return T
  }
  getCategory() {
    return r
  }
  getProps() {
    return {
      submitting: T === A.FormStates.SUBMITTING,
      errors: M,
      channel: i,
      section: a,
      subsection: s,
      invites: I,
      selectedOverwriteId: o,
      hasChanges: this.hasChanges(),
      analyticsLocation: L
    }
  }
}
P.displayName = "ChannelSettingsStore";
let b = new P(p.default, {
  CHANNEL_SETTINGS_INIT: R,
  CHANNEL_SETTINGS_OPEN: function(e) {
    v = !0, R(e)
  },
  CHANNEL_SETTINGS_SUBMIT: function() {
    T = A.FormStates.SUBMITTING, M = {}
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
    l = i, T = A.FormStates.OPEN
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    T = A.FormStates.OPEN, M = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
      let a = e.errors[n];
      return (0, u.isArray)(a) ? t[n] = a.join("\n") : t[n] = a, t
    }, {})
  },
  CHANNEL_SETTINGS_CLOSE: O,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function(e) {
    let {
      overwriteId: t
    } = e;
    o = t
  },
  CHANNEL_SETTINGS_UPDATE: function(e) {
    let {
      name: t,
      channelType: n,
      topic: a,
      bitrate: s,
      userLimit: l,
      nsfw: r,
      flags: o,
      rateLimitPerUser: u,
      defaultThreadRateLimitPerUser: d,
      autoArchiveDuration: c,
      locked: f,
      invitable: h,
      defaultAutoArchiveDuration: C,
      template: p,
      defaultReactionEmoji: m,
      rtcRegion: E,
      videoQualityMode: g,
      availableTags: S,
      defaultSortOrder: _,
      defaultForumLayout: A,
      iconEmoji: T,
      themeColor: M
    } = e;
    if (null == i) return !1;
    null != t && (i = i.set("name", t)), null != a && (i = i.set("topic", a)), null != s && (i = i.set("bitrate", s)), null != l && (i = i.set("userLimit", l)), null != r && (i = i.set("nsfw", r)), null != o && (i = i.set("flags", o)), null != u && (i = i.set("rateLimitPerUser", u)), null != d && (i = i.set("defaultThreadRateLimitPerUser", d)), null != c && (i = i.set("threadMetadata", {
      ...i.threadMetadata,
      autoArchiveDuration: c
    })), null != f && (i = i.set("threadMetadata", {
      ...i.threadMetadata,
      locked: f
    })), null != h && (i = i.set("threadMetadata", {
      ...i.threadMetadata,
      invitable: h
    })), null != C && (i = i.set("defaultAutoArchiveDuration", C)), null != p && (i = i.set("template", p)), null != n && (i = i.set("type", n)), void 0 !== E && (i = i.set("rtcRegion", E)), null != g && (i = i.set("videoQualityMode", g)), void 0 !== m && (i = i.set("defaultReactionEmoji", m)), null != S && (i = i.set("availableTags", S)), null != _ && (i = i.set("defaultSortOrder", _)), null != A && (i = i.set("defaultForumLayout", A)), void 0 !== T && (i = i.set("iconEmoji", T)), null != M && (i = i.set("themeColor", M)), D()
  },
  CHANNEL_SETTINGS_SET_SECTION: y,
  CHANNEL_SETTINGS_LOADED_INVITES: function(e) {
    I = {}, e.invites.forEach(e => {
      I[e.code] = j(e)
    })
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == i) return !1;
    let n = !1;
    for (let e of t)(function(e) {
      if (null == l || l.id !== e) return !1;
      if (l === i) {
        let t = _.default.getChannel(e);
        if (null == t) return !1;
        i = l = t, r = _.default.getChannel(i.parent_id)
      } else {
        let t = _.default.getChannel(e);
        if (null == t) return !1;
        l = t, null != i && (i = i.set("permissionOverwrites", l.permissionOverwrites), r = _.default.getChannel(i.parent_id))
      }
      return !0
    })(e.id) && null != i && (null != o && null == i.permissionOverwrites[o] && (o = i.getGuildId()), n = !0);
    return n
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    if (null == i || i.id !== t) return !1;
    T = A.FormStates.CLOSED
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    I = {
      ...I
    }, delete I[e.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    I = {
      ...I,
      [e.invite.code]: j(e.invite)
    }
  }
});
var H = b