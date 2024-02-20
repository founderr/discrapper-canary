"use strict";
n.r(t), n.d(t, {
  users: function() {
    return I
  },
  ASSISTANT_WUMPUS_VOICE_USER: function() {
    return f
  },
  transformUser: function() {
    return R
  },
  mergeUser: function() {
    return L
  },
  default: function() {
    return V
  }
}), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
var r = n("917351"),
  i = n("446674"),
  o = n("913144"),
  l = n("234251"),
  u = n("560208"),
  a = n("400205"),
  s = n("946028"),
  E = n("517001"),
  _ = n("766274"),
  c = n("568734"),
  d = n("271938"),
  T = n("49111"),
  A = n("646718");
let I = {},
  S = 0,
  f = "47835198259242069";

function O(e, t, n) {
  let r = e;
  r = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), I[e.id] = r;
  let i = e !== r;
  return i && S++, i
}

function R(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, E.getPremiumTypeFromRawValue)(e.premium_type);
  void 0 !== n && (e.premiumType = n, delete e.premium_type);
  let r = e.nsfw_allowed;
  null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
  let i = e.public_flags;
  null != i && (e.publicFlags = i, delete e.public_flags);
  let o = e.purchased_flags;
  void 0 !== o && (e.purchasedFlags = o, delete e.purchased_flags);
  let u = e.premium_usage_flags;
  void 0 !== u && (e.premiumUsageFlags = u, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let a = e.avatar_decoration_data;
  void 0 !== a && (e.avatarDecorationData = (0, l.parseAvatarDecorationData)(a), delete e.avatar_decoration_data);
  let s = e.global_name;
  return void 0 !== s && (e.globalName = s, delete e.global_name), e
}

function N(e) {
  return e.id !== d.default.getId()
}

function L(e) {
  let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = I[e.id],
    i = void 0 !== e.id && e.id === d.default.getId();
  if (null == r) void 0 !== (t = (r = new _.default(e)).premiumType) && i && (r.premiumType = p((0, E.isStaffEnv)(r), r.premiumType));
  else if (n) {
    var o;
    let n = R(e);
    void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && i && (0, E.isStaffEnvRawData)(n) && (n = function(e) {
      var t;
      let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        r = p((0, E.isStaffEnvRawData)(e), n);
      return void 0 !== e.premiumType ? e.premiumType = r : void 0 !== e.premium_type && (e.premium_type = r), e
    }(n)), r = r.merge(n)
  }(0, E.validatePremiumType)((0, E.isStaffEnv)(r), t, r.premiumType);
  let l = I[e.id] !== r;
  return I[e.id] = r, l && S++, l
}

function p(e, t) {
  if (!e) return t;
  let n = a.default.getPremiumTypeOverride(),
    r = a.default.getPremiumTypeActual();
  return n === A.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? r : n
}

function C(e, t) {
  var n, r, i, o, l;
  if (null != e.author && "SENDING" !== e.state && N(e.author) && L(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
      N(e) && L(e, t)
    }), (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && N(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && L(e.interaction.user, t), null === (o = e.attachments) || void 0 === o || o.forEach(e => {
      var n;
      null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
        N(e) && L(e, t)
      })
    }), (null === (l = e.resolved) || void 0 === l ? void 0 : l.users) != null)
    for (let n in e.resolved.users) {
      let r = e.resolved.users[n];
      N(r) && L(r, t)
    }
}

function m(e) {
  null != e.application.bot && L(e.application.bot)
}

function P(e) {
  if (null != e.users) {
    for (let t of e.users)
      if (!(t.id in I && !("incomplete" in t))) I[t.id] = new _.default(t)
  }
}

function h(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => C(e, !0)), !1
}

function D(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => h({
    messages: e
  })), !1
}

function g(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => C(e, !0)), null != n && n.forEach(e => L(e.user, !0))
}

function U(e) {
  let {
    message: t
  } = e;
  if (C(t, !0), null != t.flags && c.hasFlag(t.flags, T.MessageFlags.URGENT)) {
    let e = I[d.default.getId()];
    return null != e && (I[d.default.getId()] = e.set("flags", c.setFlag(e.flags, T.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
  }
  return !1
}
let M = ["username", "avatar", "global_name", "discriminator", "bot"];

function v(e) {
  return L(e.user)
}

function G(e) {
  return !!e.isMember && L(e.user)
}

function y(e) {
  let t = L(e.user),
    n = I[e.user.id];
  if (null == n) return t;
  let {
    avatar: r,
    guildId: i
  } = e;
  return O(n, i, r) || t
}

function F(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == I[e.id] && (I[e.id] = new _.default(e))
  })
}

function b(e) {
  return L(e.member.user)
}

function B(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: r
  } = t, i = !1;
  return null != n && (i = i || L(n)), null != r && (i = i || L(r)), i
}
class H extends i.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getUserStoreVersion() {
    return S
  }
  getUser(e) {
    if (null != e) return I[e]
  }
  getUsers() {
    return I
  }
  forEach(e) {
    for (let t in I)
      if (!1 === e(I[t])) break
  }
  findByTag(e, t) {
    for (let n in I) {
      let r = I[n];
      if (null != t && r.username === e && r.discriminator === t) return r;
      if (null == t && r.username === e && r.isPomelo()) return r
    }
  }
  filter(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = [];
    for (let t in I) {
      let r = I[t];
      e(r) && n.push(r)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
  }
  getCurrentUser() {
    return I[d.default.getId()]
  }
}
H.displayName = "UserStore";
var V = new H(o.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      users: n,
      guilds: r
    } = e;
    delete t.premium, delete t.banner_color, L(t), n.forEach(e => {
      L(e)
    }), r.forEach(e => {
      e.members.forEach(t => {
        let n = I[t.user.id];
        null != n && O(n, e.id, t.avatar)
      })
    });
    let i = I[d.default.getId()];
    null != i && (I[f] = new _.default({
      id: f,
      username: "Wumpus",
      discriminator: "0",
      globalName: "Wumpus",
      avatar: "c1f86b313385cb97985f1b118851c28c"
    }))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      lazyPrivateChannels: n
    } = e;
    t.forEach(e => {
      e.members.forEach(t => {
        let n = I[t.user.id];
        null != n && O(n, e.id, t.avatar)
      })
    }), null == n || n.forEach(e => {
      var t;
      null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
        L(e)
      })
    })
  },
  UPDATE_CLIENT_PREMIUM_TYPE: function(e) {
    let {
      user: t
    } = e;
    L(t)
  },
  OVERLAY_INITIALIZE: P,
  CACHE_LOADED: P,
  CACHE_LOADED_LAZY: P,
  USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    t.id !== d.default.getId() && L(t)
  },
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    L(t)
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let t = I[e.user.id];
      if (null == t) return !1;
      let n = M.reduce((n, i) => {
        if (e.user.hasOwnProperty(i)) {
          let o = t.set((0, r.camelCase)(i), e.user[i]);
          n = n || o !== t, t = o
        }
        return n
      }, !1);
      return !!n && (I[t.id] = t, n)
    }).some(e => e)
  },
  SEARCH_FINISH: D,
  MOD_VIEW_SEARCH_FINISH: D,
  LOAD_MESSAGES_SUCCESS: h,
  LOAD_MESSAGES_AROUND_SUCCESS: h,
  LOAD_PINNED_MESSAGES_SUCCESS: h,
  LOAD_RECENT_MENTIONS_SUCCESS: h,
  THREAD_LIST_SYNC: function(e) {
    let {
      mostRecentMessages: t
    } = e;
    return null == t || t.forEach(e => C(e, !1)), !1
  },
  MESSAGE_CREATE: U,
  MESSAGE_UPDATE: U,
  GUILD_SETTINGS_LOADED_BANS: function(e) {
    let {
      bans: t
    } = e;
    t.forEach(e => L(e.user))
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t
    } = e;
    t.forEach(e => L(e.user))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.members.forEach(e => {
      let {
        user: {
          id: n,
          username: r,
          avatar: i,
          discriminator: o,
          bot: l
        },
        avatar: u
      } = e;
      n !== d.default.getId() && L({
        id: n,
        username: r,
        avatar: i,
        discriminator: o,
        bot: l
      });
      let a = I[n];
      null != a && O(a, t.id, u)
    })
  },
  GUILD_BAN_ADD: v,
  GUILD_BAN_REMOVE: v,
  CHANNEL_RECIPIENT_ADD: G,
  CHANNEL_RECIPIENT_REMOVE: G,
  GUILD_JOIN_REQUEST_CREATE: B,
  GUILD_JOIN_REQUEST_UPDATE: B,
  GUILD_MEMBER_ADD: y,
  GUILD_MEMBER_UPDATE: y,
  GUILD_MEMBERS_CHUNK: function(e) {
    let {
      members: t,
      guildId: n
    } = e;
    return t.reduce((e, t) => {
      let r = L(t.user),
        i = I[t.user.id];
      if (null == i) return r || e;
      let {
        avatar: o
      } = t;
      return O(i, n, o) || r || e
    }, !1)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      members: t
    } = e, n = !1;
    return t.forEach(e => {
      null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
    }), n
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      addedMembers: t
    } = e, n = !1;
    return null == t || t.forEach(e => {
      null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
    }), n
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        rawRecipients: t
      }
    } = e;
    return null != t && t.forEach(e => L(e)), !1
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let {
        rawRecipients: e
      }
      of t) null != e && e.forEach(e => L(e));
    return !1
  },
  RELATIONSHIP_ADD: function(e) {
    return L(e.relationship.user)
  },
  LOAD_RELATIONSHIPS_SUCCESS: function(e) {
    let {
      relationships: t
    } = e;
    return t.reduce((e, t) => L(t.user) || e, !1)
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    return L(e.suggestion.suggested_user)
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestions: t
    } = e;
    return t.reduce((e, t) => L(t.suggested_user) || e, !1)
  },
  AUDIT_LOG_FETCH_SUCCESS: F,
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: F,
  LOBBY_CREATE: function(e) {
    let {
      lobby: t
    } = e;
    return t.members.reduce((e, t) => L(t.user) || e, !1)
  },
  LOBBY_MEMBER_CONNECT: b,
  LOBBY_MEMBER_UPDATE: b,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return null != t.user && L(t.user)
  },
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedBoosts: t
    } = e;
    t.forEach(e => {
      let {
        user: t
      } = e;
      null != t && L(t)
    })
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, u.getMessagesFromGuildFeedFetch)(t).forEach(e => C(e, !0))
  },
  LOAD_THREADS_SUCCESS: g,
  LOAD_ARCHIVED_THREADS_SUCCESS: g,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).forEach(e => {
      let {
        first_message: t,
        most_recent_message: n,
        owner: r
      } = e;
      null != t && C(t, !0), null != n && C(n, !0), null != r && null != r.user && L(r.user, !0)
    })
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
    let {
      guildScheduledEventUsers: t,
      guildId: n
    } = e;
    t.forEach(e => {
      let {
        user: t,
        member: r
      } = e;
      if (null == t) return;
      L(t);
      let i = I[t.id],
        o = null == r ? void 0 : r.avatar;
      null != i && null != o && O(i, n, o)
    })
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    t.forEach(e => {
      null != e.other_user && L(e.other_user)
    })
  },
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
    let {
      item: t
    } = e;
    null != t.other_user && L(t.other_user)
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
    let {
      supplementalData: t
    } = e;
    Object.values(t).forEach(e => {
      let {
        message_preview: t
      } = e;
      null != t && C(t, !0)
    })
  },
  STORE_APPLICATION_INTERACTION_FAKE_USER: function(e) {
    let {
      user: t
    } = e;
    L(t)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.members) && void 0 !== t ? t : []) L(r.user) && (n = !0), null != I[r.user.id] && O(I[r.user.id], e.guildId, r.avatar) && (n = !0);
    return n
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(I, r.id) && (n = L(r) || n);
    return n
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
    let {
      integrations: t
    } = e;
    t.forEach(e => m((0, s.createPrivateChannelIntegration)(e)))
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
    let {
      integration: t
    } = e;
    m((0, s.createPrivateChannelIntegration)(t))
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
    let {
      integration: t
    } = e;
    m((0, s.createPrivateChannelIntegration)(t))
  },
  FAMILY_CENTER_INITIAL_LOAD: function(e) {
    let {
      users: t,
      familyCenterTeenActivity: n
    } = e, {
      users: r
    } = n, i = [...t, ...r];
    return i.reduce((e, t) => L(t) || e, !1)
  },
  FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => L(t) || e, !1)
  },
  FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: function(e) {
    let {
      familyCenterTeenActivity: t
    } = e;
    if (void 0 === t) return;
    let {
      users: n
    } = t;
    return n.reduce((e, t) => L(t) || e, !1)
  },
  FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: function(e) {
    let {
      familyCenterTeenActivity: t
    } = e, {
      users: n
    } = t;
    return n.reduce((e, t) => L(t) || e, !1)
  },
  FAMILY_CENTER_REQUEST_LINK_SUCCESS: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => L(t) || e, !1)
  },
  FRIEND_FINDER_PYMK_LOADED: function(e) {
    let {
      users: t
    } = e;
    return t.reduce((e, t) => L(t) || e, !1)
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      members: t
    } = e, n = d.default.getId();
    return t.reduce((e, t) => {
      if (t.member.user.id === n) return e;
      let r = L(t.member.user);
      return r || e
    }, !1)
  }
})