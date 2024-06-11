"use strict";
n.r(t), n.d(t, {
  AllGuildSettings: function() {
    return M
  },
  AudioContextSetting: function() {
    return ev
  },
  BackgroundGradientPresetId: function() {
    return d
  },
  ChannelSettings: function() {
    return w
  },
  DebugSettings: function() {
    return er
  },
  DmSpamFilterV2: function() {
    return o
  },
  ExplicitContentRedaction: function() {
    return a
  },
  FavoriteChannel: function() {
    return eg
  },
  FavoriteChannelType: function() {
    return _
  },
  GameLibrarySettings: function() {
    return ea
  },
  GuildActivityStatusRestrictionDefault: function() {
    return l
  },
  GuildFolder: function() {
    return ep
  },
  GuildOnboardingProgress: function() {
    return s
  },
  GuildSettings: function() {
    return P
  },
  InboxSettings: function() {
    return v
  },
  InboxTab: function() {
    return i
  },
  NotificationSettings: function() {
    return ee
  },
  PreloadedUserSettings: function() {
    return g
  },
  PrivacySettings: function() {
    return en
  },
  TextAndImagesSettings: function() {
    return J
  },
  Theme: function() {
    return u
  },
  UserContentSettings: function() {
    return V
  },
  VoiceAndVideoSettings: function() {
    return K
  }
}), n("47120"), n("411104"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("653041");
var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N = n("578012"),
  p = n("381499"),
  O = n("835913"),
  C = n("397696");
(c = i || (i = {}))[c.UNSPECIFIED = 0] = "UNSPECIFIED", c[c.MENTIONS = 1] = "MENTIONS", c[c.UNREADS = 2] = "UNREADS", c[c.TODOS = 3] = "TODOS", c[c.FOR_YOU = 4] = "FOR_YOU", c[c.GAME_INVITES = 5] = "GAME_INVITES", (E = r || (r = {}))[E.NO_PROGRESS = 0] = "NO_PROGRESS", E[E.JOIN_GUILD = 1] = "JOIN_GUILD", E[E.INVITE_USER = 2] = "INVITE_USER", E[E.CONTACT_SYNC = 4] = "CONTACT_SYNC", (I = s || (s = {}))[I.NO_GUILD_ONBOARDING = 0] = "NO_GUILD_ONBOARDING", I[I.GUILD_NOTICE_SHOWN = 1] = "GUILD_NOTICE_SHOWN", I[I.GUILD_NOTICE_CLEARED = 2] = "GUILD_NOTICE_CLEARED", (T = a || (a = {}))[T.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION", T[T.SHOW = 1] = "SHOW", T[T.BLUR = 2] = "BLUR", T[T.BLOCK = 3] = "BLOCK", (f = o || (o = {}))[f.DEFAULT_UNSET = 0] = "DEFAULT_UNSET", f[f.DISABLED = 1] = "DISABLED", f[f.NON_FRIENDS = 2] = "NON_FRIENDS", f[f.FRIENDS_AND_NON_FRIENDS = 3] = "FRIENDS_AND_NON_FRIENDS", (S = l || (l = {}))[S.OFF = 0] = "OFF", S[S.ON_FOR_LARGE_GUILDS = 1] = "ON_FOR_LARGE_GUILDS", (h = u || (u = {}))[h.UNSET = 0] = "UNSET", h[h.DARK = 1] = "DARK", h[h.LIGHT = 2] = "LIGHT", h[h.DARKER = 3] = "DARKER", h[h.MIDNIGHT = 4] = "MIDNIGHT", (A = d || (d = {}))[A.MINT_APPLE = 0] = "MINT_APPLE", A[A.CITRUS_SHERBERT = 1] = "CITRUS_SHERBERT", A[A.RETRO_RAINCLOUD = 2] = "RETRO_RAINCLOUD", A[A.HANAMI = 3] = "HANAMI", A[A.SUNRISE = 4] = "SUNRISE", A[A.COTTON_CANDY = 5] = "COTTON_CANDY", A[A.LOFI_VIBES = 6] = "LOFI_VIBES", A[A.DESERT_KHAKI = 7] = "DESERT_KHAKI", A[A.SUNSET = 8] = "SUNSET", A[A.CHROMA_GLOW = 9] = "CHROMA_GLOW", A[A.FOREST = 10] = "FOREST", A[A.CRIMSON_MOON = 11] = "CRIMSON_MOON", A[A.MIDNIGHT_BLURPLE = 12] = "MIDNIGHT_BLURPLE", A[A.MARS = 13] = "MARS", A[A.DUSK = 14] = "DUSK", A[A.UNDER_THE_SEA = 15] = "UNDER_THE_SEA", A[A.EASTER_EGG = 16] = "EASTER_EGG", A[A.RETRO_STORM = 17] = "RETRO_STORM", A[A.NEON_NIGHTS = 18] = "NEON_NIGHTS", A[A.SEPIA = 19] = "SEPIA", A[A.STRAWBERRY_LEMONADE = 20] = "STRAWBERRY_LEMONADE", A[A.AURORA = 21] = "AURORA", A[A.BLURPLE_TWILIGHT = 22] = "BLURPLE_TWILIGHT", (m = _ || (_ = {}))[m.UNSET_FAVORITE_CHANNEL_TYPE = 0] = "UNSET_FAVORITE_CHANNEL_TYPE", m[m.REFERENCE_ORIGINAL = 1] = "REFERENCE_ORIGINAL", m[m.CATEGORY = 2] = "CATEGORY";
class R extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.versions = C.Versions.internalBinaryRead(e, e.uint32(), n, r.versions);
          break;
        case 2:
          r.inbox = v.internalBinaryRead(e, e.uint32(), n, r.inbox);
          break;
        case 3:
          r.guilds = M.internalBinaryRead(e, e.uint32(), n, r.guilds);
          break;
        case 4:
          r.userContent = V.internalBinaryRead(e, e.uint32(), n, r.userContent);
          break;
        case 5:
          r.voiceAndVideo = K.internalBinaryRead(e, e.uint32(), n, r.voiceAndVideo);
          break;
        case 6:
          r.textAndImages = J.internalBinaryRead(e, e.uint32(), n, r.textAndImages);
          break;
        case 7:
          r.notifications = ee.internalBinaryRead(e, e.uint32(), n, r.notifications);
          break;
        case 8:
          r.privacy = en.internalBinaryRead(e, e.uint32(), n, r.privacy);
          break;
        case 9:
          r.debug = er.internalBinaryRead(e, e.uint32(), n, r.debug);
          break;
        case 10:
          r.gameLibrary = ea.internalBinaryRead(e, e.uint32(), n, r.gameLibrary);
          break;
        case 11:
          r.status = el.internalBinaryRead(e, e.uint32(), n, r.status);
          break;
        case 12:
          r.localization = ec.internalBinaryRead(e, e.uint32(), n, r.localization);
          break;
        case 13:
          r.appearance = ef.internalBinaryRead(e, e.uint32(), n, r.appearance);
          break;
        case 14:
          r.guildFolders = em.internalBinaryRead(e, e.uint32(), n, r.guildFolders);
          break;
        case 15:
          r.favorites = eC.internalBinaryRead(e, e.uint32(), n, r.favorites);
          break;
        case 16:
          r.audioContextSettings = eM.internalBinaryRead(e, e.uint32(), n, r.audioContextSettings);
          break;
        case 17:
          r.communities = eP.internalBinaryRead(e, e.uint32(), n, r.communities);
          break;
        case 18:
          r.broadcast = eB.internalBinaryRead(e, e.uint32(), n, r.broadcast);
          break;
        case 19:
          r.clips = eV.internalBinaryRead(e, e.uint32(), n, r.clips);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.versions && C.Versions.internalBinaryWrite(e.versions, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.inbox && v.internalBinaryWrite(e.inbox, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.guilds && M.internalBinaryWrite(e.guilds, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), e.userContent && V.internalBinaryWrite(e.userContent, t.tag(4, N.WireType.LengthDelimited).fork(), n).join(), e.voiceAndVideo && K.internalBinaryWrite(e.voiceAndVideo, t.tag(5, N.WireType.LengthDelimited).fork(), n).join(), e.textAndImages && J.internalBinaryWrite(e.textAndImages, t.tag(6, N.WireType.LengthDelimited).fork(), n).join(), e.notifications && ee.internalBinaryWrite(e.notifications, t.tag(7, N.WireType.LengthDelimited).fork(), n).join(), e.privacy && en.internalBinaryWrite(e.privacy, t.tag(8, N.WireType.LengthDelimited).fork(), n).join(), e.debug && er.internalBinaryWrite(e.debug, t.tag(9, N.WireType.LengthDelimited).fork(), n).join(), e.gameLibrary && ea.internalBinaryWrite(e.gameLibrary, t.tag(10, N.WireType.LengthDelimited).fork(), n).join(), e.status && el.internalBinaryWrite(e.status, t.tag(11, N.WireType.LengthDelimited).fork(), n).join(), e.localization && ec.internalBinaryWrite(e.localization, t.tag(12, N.WireType.LengthDelimited).fork(), n).join(), e.appearance && ef.internalBinaryWrite(e.appearance, t.tag(13, N.WireType.LengthDelimited).fork(), n).join(), e.guildFolders && em.internalBinaryWrite(e.guildFolders, t.tag(14, N.WireType.LengthDelimited).fork(), n).join(), e.favorites && eC.internalBinaryWrite(e.favorites, t.tag(15, N.WireType.LengthDelimited).fork(), n).join(), e.audioContextSettings && eM.internalBinaryWrite(e.audioContextSettings, t.tag(16, N.WireType.LengthDelimited).fork(), n).join(), e.communities && eP.internalBinaryWrite(e.communities, t.tag(17, N.WireType.LengthDelimited).fork(), n).join(), e.broadcast && eB.internalBinaryWrite(e.broadcast, t.tag(18, N.WireType.LengthDelimited).fork(), n).join(), e.clips && eV.internalBinaryWrite(e.clips, t.tag(19, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings", [{
      no: 1,
      name: "versions",
      kind: "message",
      T: () => C.Versions
    }, {
      no: 2,
      name: "inbox",
      kind: "message",
      T: () => v
    }, {
      no: 3,
      name: "guilds",
      kind: "message",
      T: () => M
    }, {
      no: 4,
      name: "user_content",
      kind: "message",
      T: () => V
    }, {
      no: 5,
      name: "voice_and_video",
      kind: "message",
      T: () => K
    }, {
      no: 6,
      name: "text_and_images",
      kind: "message",
      T: () => J
    }, {
      no: 7,
      name: "notifications",
      kind: "message",
      T: () => ee
    }, {
      no: 8,
      name: "privacy",
      kind: "message",
      T: () => en
    }, {
      no: 9,
      name: "debug",
      kind: "message",
      T: () => er
    }, {
      no: 10,
      name: "game_library",
      kind: "message",
      T: () => ea
    }, {
      no: 11,
      name: "status",
      kind: "message",
      T: () => el
    }, {
      no: 12,
      name: "localization",
      kind: "message",
      T: () => ec
    }, {
      no: 13,
      name: "appearance",
      kind: "message",
      T: () => ef
    }, {
      no: 14,
      name: "guild_folders",
      kind: "message",
      T: () => em
    }, {
      no: 15,
      name: "favorites",
      kind: "message",
      T: () => eC
    }, {
      no: 16,
      name: "audio_context_settings",
      kind: "message",
      T: () => eM
    }, {
      no: 17,
      name: "communities",
      kind: "message",
      T: () => eP
    }, {
      no: 18,
      name: "broadcast",
      kind: "message",
      T: () => eB
    }, {
      no: 19,
      name: "clips",
      kind: "message",
      T: () => eV
    }])
  }
}
let g = new R;
class L extends N.MessageType {
  create(e) {
    let t = {
      currentTab: 0,
      viewedTutorial: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.currentTab = e.int32();
          break;
        case 2:
          r.viewedTutorial = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.currentTab && t.tag(1, N.WireType.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, N.WireType.Varint).bool(e.viewedTutorial);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.InboxSettings", [{
      no: 1,
      name: "current_tab",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.InboxTab", i, "INBOX_TAB_"]
    }, {
      no: 2,
      name: "viewed_tutorial",
      kind: "scalar",
      T: 8
    }])
  }
}
let v = new L;
class D extends N.MessageType {
  create(e) {
    let t = {
      guilds: {}
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.guilds, e, n);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, a;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          a = P.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds")
      }
    }
    e[null != s ? s : "0"] = null != a ? a : P.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.guilds)) t.tag(1, N.WireType.LengthDelimited).fork().tag(1, N.WireType.Bit64).fixed64(i), t.tag(2, N.WireType.LengthDelimited).fork(), P.internalBinaryWrite(e.guilds[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AllGuildSettings", [{
      no: 1,
      name: "guilds",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => P
      }
    }])
  }
}
let M = new D;
class y extends N.MessageType {
  create(e) {
    let t = {
      channels: {},
      hubProgress: 0,
      guildOnboardingProgress: 0,
      dismissedGuildContent: new Uint8Array(0),
      disableRaidAlertPush: !1,
      disableRaidAlertNag: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.channels, e, n);
          break;
        case 2:
          r.hubProgress = e.uint32();
          break;
        case 3:
          r.guildOnboardingProgress = e.uint32();
          break;
        case 4:
          r.guildRecentsDismissedAt = O.Timestamp.internalBinaryRead(e, e.uint32(), n, r.guildRecentsDismissedAt);
          break;
        case 5:
          r.dismissedGuildContent = e.bytes();
          break;
        case 6:
          r.joinSound = ew.internalBinaryRead(e, e.uint32(), n, r.joinSound);
          break;
        case 7:
          r.mobileRedesignChannelListSettings = eI.internalBinaryRead(e, e.uint32(), n, r.mobileRedesignChannelListSettings);
          break;
        case 8:
          r.disableRaidAlertPush = e.bool();
          break;
        case 9:
          r.disableRaidAlertNag = e.bool();
          break;
        case 10:
          r.customNotificationSoundConfig = B.internalBinaryRead(e, e.uint32(), n, r.customNotificationSoundConfig);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, a;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          a = w.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels")
      }
    }
    e[null != s ? s : "0"] = null != a ? a : w.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.channels)) t.tag(1, N.WireType.LengthDelimited).fork().tag(1, N.WireType.Bit64).fixed64(i), t.tag(2, N.WireType.LengthDelimited).fork(), w.internalBinaryWrite(e.channels[i], t, n), t.join().join();
    0 !== e.hubProgress && t.tag(2, N.WireType.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, N.WireType.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && O.Timestamp.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, N.WireType.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, N.WireType.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && ew.internalBinaryWrite(e.joinSound, t.tag(6, N.WireType.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && eI.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, N.WireType.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, N.WireType.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, N.WireType.Varint).bool(e.disableRaidAlertNag), e.customNotificationSoundConfig && B.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildSettings", [{
      no: 1,
      name: "channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => w
      }
    }, {
      no: 2,
      name: "hub_progress",
      kind: "scalar",
      T: 13
    }, {
      no: 3,
      name: "guild_onboarding_progress",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "guild_recents_dismissed_at",
      kind: "message",
      T: () => O.Timestamp
    }, {
      no: 5,
      name: "dismissed_guild_content",
      kind: "scalar",
      T: 12
    }, {
      no: 6,
      name: "join_sound",
      kind: "message",
      T: () => ew
    }, {
      no: 7,
      name: "mobile_redesign_channel_list_settings",
      kind: "message",
      T: () => eI
    }, {
      no: 8,
      name: "disable_raid_alert_push",
      kind: "scalar",
      T: 8
    }, {
      no: 9,
      name: "disable_raid_alert_nag",
      kind: "scalar",
      T: 8
    }, {
      no: 10,
      name: "custom_notification_sound_config",
      kind: "message",
      T: () => B
    }])
  }
}
let P = new y;
class U extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.id = p.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.id);
          break;
        case 2:
          r.name = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.name);
          break;
        case 3:
          r.color = p.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.color);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.id && p.UInt64Value.internalBinaryWrite(e.id, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.name && p.StringValue.internalBinaryWrite(e.name, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.color && p.UInt64Value.internalBinaryWrite(e.color, t.tag(3, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelIconEmoji", [{
      no: 1,
      name: "id",
      kind: "message",
      T: () => p.UInt64Value
    }, {
      no: 2,
      name: "name",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 3,
      name: "color",
      kind: "message",
      T: () => p.UInt64Value
    }])
  }
}
let b = new U;
class G extends N.MessageType {
  create(e) {
    let t = {
      collapsedInInbox: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.collapsedInInbox = e.bool();
          break;
        case 2:
          r.iconEmoji = b.internalBinaryRead(e, e.uint32(), n, r.iconEmoji);
          break;
        case 3:
          r.customNotificationSoundConfig = B.internalBinaryRead(e, e.uint32(), n, r.customNotificationSoundConfig);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.collapsedInInbox && t.tag(1, N.WireType.Varint).bool(e.collapsedInInbox), e.iconEmoji && b.internalBinaryWrite(e.iconEmoji, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.customNotificationSoundConfig && B.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelSettings", [{
      no: 1,
      name: "collapsed_in_inbox",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "icon_emoji",
      kind: "message",
      T: () => b
    }, {
      no: 3,
      name: "custom_notification_sound_config",
      kind: "message",
      T: () => B
    }])
  }
}
let w = new G;
class k extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.notificationSoundPackId = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.notificationSoundPackId);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.notificationSoundPackId && p.StringValue.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [{
      no: 1,
      name: "notification_sound_pack_id",
      kind: "message",
      T: () => p.StringValue
    }])
  }
}
let B = new k;
class x extends N.MessageType {
  create(e) {
    let t = {
      dismissedContents: new Uint8Array(0),
      lastReceivedChangelogId: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.dismissedContents = e.bytes();
          break;
        case 2:
          r.lastDismissedOutboundPromotionStartDate = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.lastDismissedOutboundPromotionStartDate);
          break;
        case 3:
          r.premiumTier0ModalDismissedAt = O.Timestamp.internalBinaryRead(e, e.uint32(), n, r.premiumTier0ModalDismissedAt);
          break;
        case 4:
          r.guildOnboardingUpsellDismissedAt = O.Timestamp.internalBinaryRead(e, e.uint32(), n, r.guildOnboardingUpsellDismissedAt);
          break;
        case 5:
          r.safetyUserSentimentNoticeDismissedAt = O.Timestamp.internalBinaryRead(e, e.uint32(), n, r.safetyUserSentimentNoticeDismissedAt);
          break;
        case 6:
          r.lastReceivedChangelogId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.dismissedContents.length && t.tag(1, N.WireType.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && p.StringValue.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && O.Timestamp.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && O.Timestamp.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, N.WireType.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && O.Timestamp.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, N.WireType.LengthDelimited).fork(), n).join(), "0" !== e.lastReceivedChangelogId && t.tag(6, N.WireType.Bit64).fixed64(e.lastReceivedChangelogId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.UserContentSettings", [{
      no: 1,
      name: "dismissed_contents",
      kind: "scalar",
      T: 12
    }, {
      no: 2,
      name: "last_dismissed_outbound_promotion_start_date",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 3,
      name: "premium_tier_0_modal_dismissed_at",
      kind: "message",
      T: () => O.Timestamp
    }, {
      no: 4,
      name: "guild_onboarding_upsell_dismissed_at",
      kind: "message",
      T: () => O.Timestamp
    }, {
      no: 5,
      name: "safety_user_sentiment_notice_dismissed_at",
      kind: "message",
      T: () => O.Timestamp
    }, {
      no: 6,
      name: "last_received_changelog_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let V = new x;
class F extends N.MessageType {
  create(e) {
    let t = {
      id: "0",
      assetHash: ""
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.id = e.fixed64().toString();
          break;
        case 2:
          r.assetHash = e.string();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.id && t.tag(1, N.WireType.Bit64).fixed64(e.id), "" !== e.assetHash && t.tag(2, N.WireType.LengthDelimited).string(e.assetHash);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VideoFilterAsset", [{
      no: 1,
      name: "id",
      kind: "scalar",
      T: 6
    }, {
      no: 2,
      name: "asset_hash",
      kind: "scalar",
      T: 9
    }])
  }
}
let H = new F;
class Y extends N.MessageType {
  create(e) {
    let t = {
      useBlur: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.useBlur = e.bool();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.useBlur && t.tag(1, N.WireType.Varint).bool(e.useBlur);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [{
      no: 1,
      name: "use_blur",
      kind: "scalar",
      T: 8
    }])
  }
}
let j = new Y;
class W extends N.MessageType {
  create(e) {
    let t = {
      videoBackgroundFilterDesktop: {
        oneofKind: void 0
      }
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "blur",
            blur: j.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.blur)
          };
          break;
        case 2:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "presetOption",
            presetOption: e.uint32()
          };
          break;
        case 3:
          r.videoBackgroundFilterDesktop = {
            oneofKind: "customAsset",
            customAsset: H.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.customAsset)
          };
          break;
        case 5:
          r.alwaysPreviewVideo = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.alwaysPreviewVideo);
          break;
        case 6:
          r.afkTimeout = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.afkTimeout);
          break;
        case 7:
          r.streamNotificationsEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.streamNotificationsEnabled);
          break;
        case 8:
          r.nativePhoneIntegrationEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.nativePhoneIntegrationEnabled);
          break;
        case 9:
          r.soundboardSettings = eb.internalBinaryRead(e, e.uint32(), n, r.soundboardSettings);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "blur" === e.videoBackgroundFilterDesktop.oneofKind && j.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), "presetOption" === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, N.WireType.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), "customAsset" === e.videoBackgroundFilterDesktop.oneofKind && H.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && p.BoolValue.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, N.WireType.LengthDelimited).fork(), n).join(), e.afkTimeout && p.UInt32Value.internalBinaryWrite(e.afkTimeout, t.tag(6, N.WireType.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && p.BoolValue.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, N.WireType.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && p.BoolValue.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, N.WireType.LengthDelimited).fork(), n).join(), e.soundboardSettings && eb.internalBinaryWrite(e.soundboardSettings, t.tag(9, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [{
      no: 1,
      name: "blur",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T: () => j
    }, {
      no: 2,
      name: "preset_option",
      kind: "scalar",
      oneof: "videoBackgroundFilterDesktop",
      T: 13
    }, {
      no: 3,
      name: "custom_asset",
      kind: "message",
      oneof: "videoBackgroundFilterDesktop",
      T: () => H
    }, {
      no: 5,
      name: "always_preview_video",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 6,
      name: "afk_timeout",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 7,
      name: "stream_notifications_enabled",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 8,
      name: "native_phone_integration_enabled",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 9,
      name: "soundboard_settings",
      kind: "message",
      T: () => eb
    }])
  }
}
let K = new W;
class z extends N.MessageType {
  create(e) {
    let t = {
      explicitContentGuilds: 0,
      explicitContentFriendDm: 0,
      explicitContentNonFriendDm: 0
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.explicitContentGuilds = e.int32();
          break;
        case 2:
          r.explicitContentFriendDm = e.int32();
          break;
        case 3:
          r.explicitContentNonFriendDm = e.int32();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.explicitContentGuilds && t.tag(1, N.WireType.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, N.WireType.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, N.WireType.Varint).int32(e.explicitContentNonFriendDm);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ExplicitContentSettings", [{
      no: 1,
      name: "explicit_content_guilds",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", a]
    }, {
      no: 2,
      name: "explicit_content_friend_dm",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", a]
    }, {
      no: 3,
      name: "explicit_content_non_friend_dm",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", a]
    }])
  }
}
let Z = new z;
class Q extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.profanity = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.profanity);
          break;
        case 2:
          r.sexualContent = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.sexualContent);
          break;
        case 3:
          r.slurs = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.slurs);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.profanity && p.BoolValue.internalBinaryWrite(e.profanity, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.sexualContent && p.BoolValue.internalBinaryWrite(e.sexualContent, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.slurs && p.BoolValue.internalBinaryWrite(e.slurs, t.tag(3, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.KeywordFilterSettings", [{
      no: 1,
      name: "profanity",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 2,
      name: "sexual_content",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 3,
      name: "slurs",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let X = new Q;
class q extends N.MessageType {
  create(e) {
    let t = {
      emojiPickerCollapsedSections: [],
      stickerPickerCollapsedSections: [],
      soundboardPickerCollapsedSections: [],
      dmSpamFilterV2: 0
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.diversitySurrogate = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.diversitySurrogate);
          break;
        case 2:
          r.useRichChatInput = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useRichChatInput);
          break;
        case 3:
          r.useThreadSidebar = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useThreadSidebar);
          break;
        case 4:
          r.renderSpoilers = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.renderSpoilers);
          break;
        case 5:
          r.emojiPickerCollapsedSections.push(e.string());
          break;
        case 6:
          r.stickerPickerCollapsedSections.push(e.string());
          break;
        case 7:
          r.viewImageDescriptions = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewImageDescriptions);
          break;
        case 8:
          r.showCommandSuggestions = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showCommandSuggestions);
          break;
        case 9:
          r.inlineAttachmentMedia = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inlineAttachmentMedia);
          break;
        case 10:
          r.inlineEmbedMedia = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inlineEmbedMedia);
          break;
        case 11:
          r.gifAutoPlay = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.gifAutoPlay);
          break;
        case 12:
          r.renderEmbeds = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.renderEmbeds);
          break;
        case 13:
          r.renderReactions = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.renderReactions);
          break;
        case 14:
          r.animateEmoji = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.animateEmoji);
          break;
        case 15:
          r.animateStickers = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.animateStickers);
          break;
        case 16:
          r.enableTtsCommand = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.enableTtsCommand);
          break;
        case 17:
          r.messageDisplayCompact = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.messageDisplayCompact);
          break;
        case 19:
          r.explicitContentFilter = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.explicitContentFilter);
          break;
        case 20:
          r.viewNsfwGuilds = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewNsfwGuilds);
          break;
        case 21:
          r.convertEmoticons = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.convertEmoticons);
          break;
        case 22:
          r.expressionSuggestionsEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.expressionSuggestionsEnabled);
          break;
        case 23:
          r.viewNsfwCommands = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.viewNsfwCommands);
          break;
        case 24:
          r.useLegacyChatInput = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.useLegacyChatInput);
          break;
        case 25:
          r.soundboardPickerCollapsedSections.push(e.string());
          break;
        case 26:
          r.dmSpamFilter = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.dmSpamFilter);
          break;
        case 27:
          r.dmSpamFilterV2 = e.int32();
          break;
        case 28:
          r.includeStickersInAutocomplete = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.includeStickersInAutocomplete);
          break;
        case 29:
          r.explicitContentSettings = Z.internalBinaryRead(e, e.uint32(), n, r.explicitContentSettings);
          break;
        case 30:
          r.keywordFilterSettings = X.internalBinaryRead(e, e.uint32(), n, r.keywordFilterSettings);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.diversitySurrogate && p.StringValue.internalBinaryWrite(e.diversitySurrogate, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.useRichChatInput && p.BoolValue.internalBinaryWrite(e.useRichChatInput, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.useThreadSidebar && p.BoolValue.internalBinaryWrite(e.useThreadSidebar, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), e.renderSpoilers && p.StringValue.internalBinaryWrite(e.renderSpoilers, t.tag(4, N.WireType.LengthDelimited).fork(), n).join();
    for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++) t.tag(5, N.WireType.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
    for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++) t.tag(6, N.WireType.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
    e.viewImageDescriptions && p.BoolValue.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, N.WireType.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && p.BoolValue.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, N.WireType.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && p.BoolValue.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, N.WireType.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && p.BoolValue.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, N.WireType.LengthDelimited).fork(), n).join(), e.gifAutoPlay && p.BoolValue.internalBinaryWrite(e.gifAutoPlay, t.tag(11, N.WireType.LengthDelimited).fork(), n).join(), e.renderEmbeds && p.BoolValue.internalBinaryWrite(e.renderEmbeds, t.tag(12, N.WireType.LengthDelimited).fork(), n).join(), e.renderReactions && p.BoolValue.internalBinaryWrite(e.renderReactions, t.tag(13, N.WireType.LengthDelimited).fork(), n).join(), e.animateEmoji && p.BoolValue.internalBinaryWrite(e.animateEmoji, t.tag(14, N.WireType.LengthDelimited).fork(), n).join(), e.animateStickers && p.UInt32Value.internalBinaryWrite(e.animateStickers, t.tag(15, N.WireType.LengthDelimited).fork(), n).join(), e.enableTtsCommand && p.BoolValue.internalBinaryWrite(e.enableTtsCommand, t.tag(16, N.WireType.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && p.BoolValue.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, N.WireType.LengthDelimited).fork(), n).join(), e.explicitContentFilter && p.UInt32Value.internalBinaryWrite(e.explicitContentFilter, t.tag(19, N.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && p.BoolValue.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, N.WireType.LengthDelimited).fork(), n).join(), e.convertEmoticons && p.BoolValue.internalBinaryWrite(e.convertEmoticons, t.tag(21, N.WireType.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && p.BoolValue.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, N.WireType.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && p.BoolValue.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, N.WireType.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && p.BoolValue.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, N.WireType.LengthDelimited).fork(), n).join();
    for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++) t.tag(25, N.WireType.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
    e.dmSpamFilter && p.UInt32Value.internalBinaryWrite(e.dmSpamFilter, t.tag(26, N.WireType.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, N.WireType.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && p.BoolValue.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, N.WireType.LengthDelimited).fork(), n).join(), e.explicitContentSettings && Z.internalBinaryWrite(e.explicitContentSettings, t.tag(29, N.WireType.LengthDelimited).fork(), n).join(), e.keywordFilterSettings && X.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.TextAndImagesSettings", [{
      no: 1,
      name: "diversity_surrogate",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 2,
      name: "use_rich_chat_input",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 3,
      name: "use_thread_sidebar",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 4,
      name: "render_spoilers",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 5,
      name: "emoji_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 6,
      name: "sticker_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 7,
      name: "view_image_descriptions",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 8,
      name: "show_command_suggestions",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 9,
      name: "inline_attachment_media",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 10,
      name: "inline_embed_media",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 11,
      name: "gif_auto_play",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 12,
      name: "render_embeds",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 13,
      name: "render_reactions",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 14,
      name: "animate_emoji",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 15,
      name: "animate_stickers",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 16,
      name: "enable_tts_command",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 17,
      name: "message_display_compact",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 19,
      name: "explicit_content_filter",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 20,
      name: "view_nsfw_guilds",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 21,
      name: "convert_emoticons",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 22,
      name: "expression_suggestions_enabled",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 23,
      name: "view_nsfw_commands",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 24,
      name: "use_legacy_chat_input",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 25,
      name: "soundboard_picker_collapsed_sections",
      kind: "scalar",
      repeat: 2,
      T: 9
    }, {
      no: 26,
      name: "dm_spam_filter",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 27,
      name: "dm_spam_filter_v2",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", o]
    }, {
      no: 28,
      name: "include_stickers_in_autocomplete",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 29,
      name: "explicit_content_settings",
      kind: "message",
      T: () => Z
    }, {
      no: 30,
      name: "keyword_filter_settings",
      kind: "message",
      T: () => X
    }])
  }
}
let J = new q;
class $ extends N.MessageType {
  create(e) {
    let t = {
      notificationCenterAckedBeforeId: "0",
      focusModeExpiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.showInAppNotifications = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showInAppNotifications);
          break;
        case 2:
          r.notifyFriendsOnGoLive = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.notifyFriendsOnGoLive);
          break;
        case 3:
          r.notificationCenterAckedBeforeId = e.fixed64().toString();
          break;
        case 4:
          r.enableBurstReactionNotifications = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.enableBurstReactionNotifications);
          break;
        case 5:
          r.quietMode = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.quietMode);
          break;
        case 6:
          r.focusModeExpiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.showInAppNotifications && p.BoolValue.internalBinaryWrite(e.showInAppNotifications, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && p.BoolValue.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), "0" !== e.notificationCenterAckedBeforeId && t.tag(3, N.WireType.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && p.BoolValue.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, N.WireType.LengthDelimited).fork(), n).join(), e.quietMode && p.BoolValue.internalBinaryWrite(e.quietMode, t.tag(5, N.WireType.LengthDelimited).fork(), n).join(), "0" !== e.focusModeExpiresAtMs && t.tag(6, N.WireType.Bit64).fixed64(e.focusModeExpiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.NotificationSettings", [{
      no: 1,
      name: "show_in_app_notifications",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 2,
      name: "notify_friends_on_go_live",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 3,
      name: "notification_center_acked_before_id",
      kind: "scalar",
      T: 6
    }, {
      no: 4,
      name: "enable_burst_reaction_notifications",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 5,
      name: "quiet_mode",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 6,
      name: "focus_mode_expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let ee = new $;
class et extends N.MessageType {
  create(e) {
    let t = {
      restrictedGuildIds: [],
      defaultGuildsRestricted: !1,
      allowAccessibilityDetection: !1,
      activityRestrictedGuildIds: [],
      defaultGuildsActivityRestricted: 0,
      activityJoiningRestrictedGuildIds: [],
      messageRequestRestrictedGuildIds: []
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.allowActivityPartyPrivacyFriends = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyFriends);
          break;
        case 2:
          r.allowActivityPartyPrivacyVoiceChannel = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowActivityPartyPrivacyVoiceChannel);
          break;
        case 3:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.restrictedGuildIds.push(e.fixed64().toString());
          else r.restrictedGuildIds.push(e.fixed64().toString());
          break;
        case 4:
          r.defaultGuildsRestricted = e.bool();
          break;
        case 7:
          r.allowAccessibilityDetection = e.bool();
          break;
        case 8:
          r.detectPlatformAccounts = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.detectPlatformAccounts);
          break;
        case 9:
          r.passwordless = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.passwordless);
          break;
        case 10:
          r.contactSyncEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.contactSyncEnabled);
          break;
        case 11:
          r.friendSourceFlags = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.friendSourceFlags);
          break;
        case 12:
          r.friendDiscoveryFlags = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.friendDiscoveryFlags);
          break;
        case 13:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.activityRestrictedGuildIds.push(e.fixed64().toString());
          else r.activityRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 14:
          r.defaultGuildsActivityRestricted = e.int32();
          break;
        case 15:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
          else r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 16:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
          else r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
          break;
        case 17:
          r.defaultMessageRequestRestricted = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.defaultMessageRequestRestricted);
          break;
        case 18:
          r.dropsOptedOut = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.dropsOptedOut);
          break;
        case 19:
          r.nonSpamRetrainingOptIn = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.nonSpamRetrainingOptIn);
          break;
        case 20:
          r.familyCenterEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabled);
          break;
        case 21:
          r.familyCenterEnabledV2 = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabledV2);
          break;
        case 22:
          r.hideLegacyUsername = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.hideLegacyUsername);
          break;
        case 23:
          r.inappropriateConversationWarnings = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.inappropriateConversationWarnings);
          break;
        case 24:
          r.recentGamesEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.recentGamesEnabled);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.allowActivityPartyPrivacyFriends && p.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && p.BoolValue.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
      t.tag(3, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
      t.join()
    }
    if (!1 !== e.defaultGuildsRestricted && t.tag(4, N.WireType.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, N.WireType.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && p.BoolValue.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, N.WireType.LengthDelimited).fork(), n).join(), e.passwordless && p.BoolValue.internalBinaryWrite(e.passwordless, t.tag(9, N.WireType.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && p.BoolValue.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, N.WireType.LengthDelimited).fork(), n).join(), e.friendSourceFlags && p.UInt32Value.internalBinaryWrite(e.friendSourceFlags, t.tag(11, N.WireType.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && p.UInt32Value.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, N.WireType.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
      t.tag(13, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
      t.join()
    }
    if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, N.WireType.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
      t.tag(15, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++) t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
      t.join()
    }
    if (e.messageRequestRestrictedGuildIds.length) {
      t.tag(16, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++) t.fixed64(e.messageRequestRestrictedGuildIds[n]);
      t.join()
    }
    e.defaultMessageRequestRestricted && p.BoolValue.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, N.WireType.LengthDelimited).fork(), n).join(), e.dropsOptedOut && p.BoolValue.internalBinaryWrite(e.dropsOptedOut, t.tag(18, N.WireType.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && p.BoolValue.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, N.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && p.BoolValue.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, N.WireType.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && p.BoolValue.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, N.WireType.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && p.BoolValue.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, N.WireType.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && p.BoolValue.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, N.WireType.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && p.BoolValue.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.PrivacySettings", [{
      no: 1,
      name: "allow_activity_party_privacy_friends",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 2,
      name: "allow_activity_party_privacy_voice_channel",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 3,
      name: "restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 4,
      name: "default_guilds_restricted",
      kind: "scalar",
      T: 8
    }, {
      no: 7,
      name: "allow_accessibility_detection",
      kind: "scalar",
      T: 8
    }, {
      no: 8,
      name: "detect_platform_accounts",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 9,
      name: "passwordless",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 10,
      name: "contact_sync_enabled",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 11,
      name: "friend_source_flags",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 12,
      name: "friend_discovery_flags",
      kind: "message",
      T: () => p.UInt32Value
    }, {
      no: 13,
      name: "activity_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 14,
      name: "default_guilds_activity_restricted",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", l]
    }, {
      no: 15,
      name: "activity_joining_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 16,
      name: "message_request_restricted_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 17,
      name: "default_message_request_restricted",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 18,
      name: "drops_opted_out",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 19,
      name: "non_spam_retraining_opt_in",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 20,
      name: "family_center_enabled",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 21,
      name: "family_center_enabled_v2",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 22,
      name: "hide_legacy_username",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 23,
      name: "inappropriate_conversation_warnings",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 24,
      name: "recent_games_enabled",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let en = new et;
class ei extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.rtcPanelShowVoiceStates = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.rtcPanelShowVoiceStates);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.rtcPanelShowVoiceStates && p.BoolValue.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.DebugSettings", [{
      no: 1,
      name: "rtc_panel_show_voice_states",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let er = new ei;
class es extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.installShortcutDesktop = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.installShortcutDesktop);
          break;
        case 2:
          r.installShortcutStartMenu = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.installShortcutStartMenu);
          break;
        case 3:
          r.disableGamesTab = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.disableGamesTab);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.installShortcutDesktop && p.BoolValue.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && p.BoolValue.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.disableGamesTab && p.BoolValue.internalBinaryWrite(e.disableGamesTab, t.tag(3, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GameLibrarySettings", [{
      no: 1,
      name: "install_shortcut_desktop",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 2,
      name: "install_shortcut_start_menu",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 3,
      name: "disable_games_tab",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let ea = new es;
class eo extends N.MessageType {
  create(e) {
    let t = {
      statusExpiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.status = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.status);
          break;
        case 2:
          r.customStatus = ed.internalBinaryRead(e, e.uint32(), n, r.customStatus);
          break;
        case 3:
          r.showCurrentGame = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.showCurrentGame);
          break;
        case 4:
          r.statusExpiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.status && p.StringValue.internalBinaryWrite(e.status, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.customStatus && ed.internalBinaryWrite(e.customStatus, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.showCurrentGame && p.BoolValue.internalBinaryWrite(e.showCurrentGame, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), "0" !== e.statusExpiresAtMs && t.tag(4, N.WireType.Bit64).fixed64(e.statusExpiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.StatusSettings", [{
      no: 1,
      name: "status",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 2,
      name: "custom_status",
      kind: "message",
      T: () => ed
    }, {
      no: 3,
      name: "show_current_game",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 4,
      name: "status_expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let el = new eo;
class eu extends N.MessageType {
  create(e) {
    let t = {
      text: "",
      emojiId: "0",
      emojiName: "",
      expiresAtMs: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.text = e.string();
          break;
        case 2:
          r.emojiId = e.fixed64().toString();
          break;
        case 3:
          r.emojiName = e.string();
          break;
        case 4:
          r.expiresAtMs = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.text && t.tag(1, N.WireType.LengthDelimited).string(e.text), "0" !== e.emojiId && t.tag(2, N.WireType.Bit64).fixed64(e.emojiId), "" !== e.emojiName && t.tag(3, N.WireType.LengthDelimited).string(e.emojiName), "0" !== e.expiresAtMs && t.tag(4, N.WireType.Bit64).fixed64(e.expiresAtMs);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomStatus", [{
      no: 1,
      name: "text",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "emoji_id",
      kind: "scalar",
      T: 6
    }, {
      no: 3,
      name: "emoji_name",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "expires_at_ms",
      kind: "scalar",
      T: 6
    }])
  }
}
let ed = new eu;
class e_ extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.locale = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.locale);
          break;
        case 2:
          r.timezoneOffset = p.Int32Value.internalBinaryRead(e, e.uint32(), n, r.timezoneOffset);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.locale && p.StringValue.internalBinaryWrite(e.locale, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.timezoneOffset && p.Int32Value.internalBinaryWrite(e.timezoneOffset, t.tag(2, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.LocalizationSettings", [{
      no: 1,
      name: "locale",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 2,
      name: "timezone_offset",
      kind: "message",
      T: () => p.Int32Value
    }])
  }
}
let ec = new e_;
class eE extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.layout = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.layout);
          break;
        case 2:
          r.messagePreviews = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.layout && p.StringValue.internalBinaryWrite(e.layout, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && p.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(2, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ChannelListSettings", [{
      no: 1,
      name: "layout",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 2,
      name: "message_previews",
      kind: "message",
      T: () => p.StringValue
    }])
  }
}
let eI = new eE;
class eT extends N.MessageType {
  create(e) {
    let t = {
      theme: 0,
      developerMode: !1,
      mobileRedesignDisabled: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.theme = e.int32();
          break;
        case 2:
          r.developerMode = e.bool();
          break;
        case 3:
          r.clientThemeSettings = eh.internalBinaryRead(e, e.uint32(), n, r.clientThemeSettings);
          break;
        case 4:
          r.mobileRedesignDisabled = e.bool();
          break;
        case 6:
          r.channelListLayout = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.channelListLayout);
          break;
        case 7:
          r.messagePreviews = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
          break;
        case 8:
          r.searchResultExactCountEnabled = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.searchResultExactCountEnabled);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.theme && t.tag(1, N.WireType.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, N.WireType.Varint).bool(e.developerMode), e.clientThemeSettings && eh.internalBinaryWrite(e.clientThemeSettings, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, N.WireType.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && p.StringValue.internalBinaryWrite(e.channelListLayout, t.tag(6, N.WireType.LengthDelimited).fork(), n).join(), e.messagePreviews && p.StringValue.internalBinaryWrite(e.messagePreviews, t.tag(7, N.WireType.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && p.BoolValue.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AppearanceSettings", [{
      no: 1,
      name: "theme",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.Theme", u]
    }, {
      no: 2,
      name: "developer_mode",
      kind: "scalar",
      T: 8
    }, {
      no: 3,
      name: "client_theme_settings",
      kind: "message",
      T: () => eh
    }, {
      no: 4,
      name: "mobile_redesign_disabled",
      kind: "scalar",
      T: 8
    }, {
      no: 6,
      name: "channel_list_layout",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 7,
      name: "message_previews",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 8,
      name: "search_result_exact_count_enabled",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let ef = new eT;
class eS extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (2 === t) r.backgroundGradientPresetId = p.UInt32Value.internalBinaryRead(e, e.uint32(), n, r.backgroundGradientPresetId);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.backgroundGradientPresetId && p.UInt32Value.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ClientThemeSettings", [{
      no: 2,
      name: "background_gradient_preset_id",
      kind: "message",
      T: () => p.UInt32Value
    }])
  }
}
let eh = new eS;
class eA extends N.MessageType {
  create(e) {
    let t = {
      folders: [],
      guildPositions: []
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.folders.push(ep.internalBinaryRead(e, e.uint32(), n));
          break;
        case 2:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.guildPositions.push(e.fixed64().toString());
          else r.guildPositions.push(e.fixed64().toString());
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    for (let i = 0; i < e.folders.length; i++) ep.internalBinaryWrite(e.folders[i], t.tag(1, N.WireType.LengthDelimited).fork(), n).join();
    if (e.guildPositions.length) {
      t.tag(2, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildFolders", [{
      no: 1,
      name: "folders",
      kind: "message",
      repeat: 1,
      T: () => ep
    }, {
      no: 2,
      name: "guild_positions",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let em = new eA;
class eN extends N.MessageType {
  create(e) {
    let t = {
      guildIds: []
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.guildIds.push(e.fixed64().toString());
          else r.guildIds.push(e.fixed64().toString());
          break;
        case 2:
          r.id = p.Int64Value.internalBinaryRead(e, e.uint32(), n, r.id);
          break;
        case 3:
          r.name = p.StringValue.internalBinaryRead(e, e.uint32(), n, r.name);
          break;
        case 4:
          r.color = p.UInt64Value.internalBinaryRead(e, e.uint32(), n, r.color);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.guildIds.length) {
      t.tag(1, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
      t.join()
    }
    e.id && p.Int64Value.internalBinaryWrite(e.id, t.tag(2, N.WireType.LengthDelimited).fork(), n).join(), e.name && p.StringValue.internalBinaryWrite(e.name, t.tag(3, N.WireType.LengthDelimited).fork(), n).join(), e.color && p.UInt64Value.internalBinaryWrite(e.color, t.tag(4, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildFolder", [{
      no: 1,
      name: "guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 2,
      name: "id",
      kind: "message",
      T: () => p.Int64Value
    }, {
      no: 3,
      name: "name",
      kind: "message",
      T: () => p.StringValue
    }, {
      no: 4,
      name: "color",
      kind: "message",
      T: () => p.UInt64Value
    }])
  }
}
let ep = new eN;
class eO extends N.MessageType {
  create(e) {
    let t = {
      favoriteChannels: {},
      muted: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.favoriteChannels, e, n);
          break;
        case 2:
          r.muted = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, a;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          a = eg.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels")
      }
    }
    e[null != s ? s : "0"] = null != a ? a : eg.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.favoriteChannels)) t.tag(1, N.WireType.LengthDelimited).fork().tag(1, N.WireType.Bit64).fixed64(i), t.tag(2, N.WireType.LengthDelimited).fork(), eg.internalBinaryWrite(e.favoriteChannels[i], t, n), t.join().join();
    !1 !== e.muted && t.tag(2, N.WireType.Varint).bool(e.muted);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.Favorites", [{
      no: 1,
      name: "favorite_channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => eg
      }
    }, {
      no: 2,
      name: "muted",
      kind: "scalar",
      T: 8
    }])
  }
}
let eC = new eO;
class eR extends N.MessageType {
  create(e) {
    let t = {
      nickname: "",
      type: 0,
      position: 0,
      parentId: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.nickname = e.string();
          break;
        case 2:
          r.type = e.int32();
          break;
        case 3:
          r.position = e.uint32();
          break;
        case 4:
          r.parentId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.nickname && t.tag(1, N.WireType.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, N.WireType.Varint).int32(e.type), 0 !== e.position && t.tag(3, N.WireType.Varint).uint32(e.position), "0" !== e.parentId && t.tag(4, N.WireType.Bit64).fixed64(e.parentId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteChannel", [{
      no: 1,
      name: "nickname",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "type",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", _]
    }, {
      no: 3,
      name: "position",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "parent_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let eg = new eR;
class eL extends N.MessageType {
  create(e) {
    let t = {
      muted: !1,
      volume: 0,
      modifiedAt: "0",
      soundboardMuted: !1
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.muted = e.bool();
          break;
        case 2:
          r.volume = e.float();
          break;
        case 3:
          r.modifiedAt = e.fixed64().toString();
          break;
        case 4:
          r.soundboardMuted = e.bool();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.muted && t.tag(1, N.WireType.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, N.WireType.Bit32).float(e.volume), "0" !== e.modifiedAt && t.tag(3, N.WireType.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, N.WireType.Varint).bool(e.soundboardMuted);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AudioContextSetting", [{
      no: 1,
      name: "muted",
      kind: "scalar",
      T: 8
    }, {
      no: 2,
      name: "volume",
      kind: "scalar",
      T: 2
    }, {
      no: 3,
      name: "modified_at",
      kind: "scalar",
      T: 6
    }, {
      no: 4,
      name: "soundboard_muted",
      kind: "scalar",
      T: 8
    }])
  }
}
let ev = new eL;
class eD extends N.MessageType {
  create(e) {
    let t = {
      user: {},
      stream: {}
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.user, e, n);
          break;
        case 2:
          this.binaryReadMap2(r.stream, e, n);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, a;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          a = ev.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user")
      }
    }
    e[null != s ? s : "0"] = null != a ? a : ev.create()
  }
  binaryReadMap2(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, a;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          a = ev.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream")
      }
    }
    e[null != s ? s : "0"] = null != a ? a : ev.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.user)) t.tag(1, N.WireType.LengthDelimited).fork().tag(1, N.WireType.Bit64).fixed64(i), t.tag(2, N.WireType.LengthDelimited).fork(), ev.internalBinaryWrite(e.user[i], t, n), t.join().join();
    for (let i of Object.keys(e.stream)) t.tag(2, N.WireType.LengthDelimited).fork().tag(1, N.WireType.Bit64).fixed64(i), t.tag(2, N.WireType.LengthDelimited).fork(), ev.internalBinaryWrite(e.stream[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.AudioSettings", [{
      no: 1,
      name: "user",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => ev
      }
    }, {
      no: 2,
      name: "stream",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => ev
      }
    }])
  }
}
let eM = new eD;
class ey extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.disableHomeAutoNav = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.disableHomeAutoNav);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.disableHomeAutoNav && p.BoolValue.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CommunitiesSettings", [{
      no: 1,
      name: "disable_home_auto_nav",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let eP = new ey;
class eU extends N.MessageType {
  create(e) {
    let t = {
      volume: 0
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.volume = e.float();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.volume && t.tag(1, N.WireType.Bit32).float(e.volume);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.SoundboardSettings", [{
      no: 1,
      name: "volume",
      kind: "scalar",
      T: 2
    }])
  }
}
let eb = new eU;
class eG extends N.MessageType {
  create(e) {
    let t = {
      soundId: "0",
      guildId: "0"
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.soundId = e.fixed64().toString();
          break;
        case 2:
          r.guildId = e.fixed64().toString();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.soundId && t.tag(1, N.WireType.Bit64).fixed64(e.soundId), "0" !== e.guildId && t.tag(2, N.WireType.Bit64).fixed64(e.guildId);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.CustomCallSound", [{
      no: 1,
      name: "sound_id",
      kind: "scalar",
      T: 6
    }, {
      no: 2,
      name: "guild_id",
      kind: "scalar",
      T: 6
    }])
  }
}
let ew = new eG;
class ek extends N.MessageType {
  create(e) {
    let t = {
      allowedGuildIds: [],
      allowedUserIds: []
    };
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.allowFriends = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowFriends);
          break;
        case 2:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedGuildIds.push(e.fixed64().toString());
          else r.allowedGuildIds.push(e.fixed64().toString());
          break;
        case 3:
          if (i === N.WireType.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.allowedUserIds.push(e.fixed64().toString());
          else r.allowedUserIds.push(e.fixed64().toString());
          break;
        case 4:
          r.autoBroadcast = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.autoBroadcast);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.allowFriends && p.BoolValue.internalBinaryWrite(e.allowFriends, t.tag(1, N.WireType.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
      t.tag(2, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
      t.join()
    }
    if (e.allowedUserIds.length) {
      t.tag(3, N.WireType.LengthDelimited).fork();
      for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
      t.join()
    }
    e.autoBroadcast && p.BoolValue.internalBinaryWrite(e.autoBroadcast, t.tag(4, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.BroadcastSettings", [{
      no: 1,
      name: "allow_friends",
      kind: "message",
      T: () => p.BoolValue
    }, {
      no: 2,
      name: "allowed_guild_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 3,
      name: "allowed_user_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }, {
      no: 4,
      name: "auto_broadcast",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let eB = new ek;
class ex extends N.MessageType {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, N.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, N.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      if (1 === t) r.allowVoiceRecording = p.BoolValue.internalBinaryRead(e, e.uint32(), n, r.allowVoiceRecording);
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== s && (!0 === s ? N.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.allowVoiceRecording && p.BoolValue.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, N.WireType.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? N.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ClipsSettings", [{
      no: 1,
      name: "allow_voice_recording",
      kind: "message",
      T: () => p.BoolValue
    }])
  }
}
let eV = new ex