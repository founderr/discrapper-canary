n.d(t, {
  C4: function() {
return G;
  },
  Dd: function() {
return d;
  },
  E5: function() {
return l;
  },
  Fm: function() {
return eE;
  },
  JY: function() {
return ew;
  },
  Me: function() {
return ea;
  },
  Pr: function() {
return _;
  },
  Q2: function() {
return u;
  },
  Q4: function() {
return s;
  },
  Us: function() {
return c;
  },
  X: function() {
return r;
  },
  Xr: function() {
return o;
  },
  aV: function() {
return eP;
  },
  az: function() {
return K;
  },
  bE: function() {
return eu;
  },
  f9: function() {
return P;
  },
  nI: function() {
return a;
  },
  o8: function() {
return b;
  },
  os: function() {
return w;
  },
  p5: function() {
return V;
  },
  sf: function() {
return eo;
  },
  tA: function() {
return ed;
  },
  v_: function() {
return J;
  },
  yX: function() {
return eD;
  }
}), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(653041);
var r, i, a, s, o, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, N = n(230367),
  v = n(320215),
  O = n(240773),
  R = n(495852),
  C = n(381499),
  y = n(835913),
  D = n(397696);
(E = r || (r = {}))[E.UNSPECIFIED = 0] = 'UNSPECIFIED', E[E.MENTIONS = 1] = 'MENTIONS', E[E.UNREADS = 2] = 'UNREADS', E[E.TODOS = 3] = 'TODOS', E[E.FOR_YOU = 4] = 'FOR_YOU', E[E.GAME_INVITES = 5] = 'GAME_INVITES', E[E.BOOKMARKS = 6] = 'BOOKMARKS', (f = i || (i = {}))[f.NO_PROGRESS = 0] = 'NO_PROGRESS', f[f.JOIN_GUILD = 1] = 'JOIN_GUILD', f[f.INVITE_USER = 2] = 'INVITE_USER', f[f.CONTACT_SYNC = 4] = 'CONTACT_SYNC', (h = a || (a = {}))[h.NO_GUILD_ONBOARDING = 0] = 'NO_GUILD_ONBOARDING', h[h.GUILD_NOTICE_SHOWN = 1] = 'GUILD_NOTICE_SHOWN', h[h.GUILD_NOTICE_CLEARED = 2] = 'GUILD_NOTICE_CLEARED', (p = s || (s = {}))[p.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = 'UNSET_EXPLICIT_CONTENT_REDACTION', p[p.SHOW = 1] = 'SHOW', p[p.BLUR = 2] = 'BLUR', p[p.BLOCK = 3] = 'BLOCK', (m = o || (o = {}))[m.DEFAULT_UNSET = 0] = 'DEFAULT_UNSET', m[m.DISABLED = 1] = 'DISABLED', m[m.NON_FRIENDS = 2] = 'NON_FRIENDS', m[m.FRIENDS_AND_NON_FRIENDS = 3] = 'FRIENDS_AND_NON_FRIENDS', (I = l || (l = {}))[I.OFF = 0] = 'OFF', I[I.ON_FOR_LARGE_GUILDS = 1] = 'ON_FOR_LARGE_GUILDS', (T = u || (u = {}))[T.UNSET = 0] = 'UNSET', T[T.DARK = 1] = 'DARK', T[T.LIGHT = 2] = 'LIGHT', T[T.DARKER = 3] = 'DARKER', T[T.MIDNIGHT = 4] = 'MIDNIGHT', (g = c || (c = {}))[g.MINT_APPLE = 0] = 'MINT_APPLE', g[g.CITRUS_SHERBERT = 1] = 'CITRUS_SHERBERT', g[g.RETRO_RAINCLOUD = 2] = 'RETRO_RAINCLOUD', g[g.HANAMI = 3] = 'HANAMI', g[g.SUNRISE = 4] = 'SUNRISE', g[g.COTTON_CANDY = 5] = 'COTTON_CANDY', g[g.LOFI_VIBES = 6] = 'LOFI_VIBES', g[g.DESERT_KHAKI = 7] = 'DESERT_KHAKI', g[g.SUNSET = 8] = 'SUNSET', g[g.CHROMA_GLOW = 9] = 'CHROMA_GLOW', g[g.FOREST = 10] = 'FOREST', g[g.CRIMSON_MOON = 11] = 'CRIMSON_MOON', g[g.MIDNIGHT_BLURPLE = 12] = 'MIDNIGHT_BLURPLE', g[g.MARS = 13] = 'MARS', g[g.DUSK = 14] = 'DUSK', g[g.UNDER_THE_SEA = 15] = 'UNDER_THE_SEA', g[g.EASTER_EGG = 16] = 'EASTER_EGG', g[g.RETRO_STORM = 17] = 'RETRO_STORM', g[g.NEON_NIGHTS = 18] = 'NEON_NIGHTS', g[g.SEPIA = 19] = 'SEPIA', g[g.STRAWBERRY_LEMONADE = 20] = 'STRAWBERRY_LEMONADE', g[g.AURORA = 21] = 'AURORA', g[g.BLURPLE_TWILIGHT = 22] = 'BLURPLE_TWILIGHT', (S = d || (d = {}))[S.UNSET_FAVORITE_CHANNEL_TYPE = 0] = 'UNSET_FAVORITE_CHANNEL_TYPE', S[S.REFERENCE_ORIGINAL = 1] = 'REFERENCE_ORIGINAL', S[S.CATEGORY = 2] = 'CATEGORY', (A = _ || (_ = {}))[A.UNSPECIFIED = 0] = 'UNSPECIFIED', A[A.ALL = 1] = 'ALL', A[A.BOOKMARKS = 2] = 'BOOKMARKS', A[A.REMINDERS = 3] = 'REMINDERS';
class L extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.versions = D.L.internalBinaryRead(e, e.uint32(), n, i.versions);
      break;
    case 2:
      i.inbox = P.internalBinaryRead(e, e.uint32(), n, i.inbox);
      break;
    case 3:
      i.guilds = w.internalBinaryRead(e, e.uint32(), n, i.guilds);
      break;
    case 4:
      i.userContent = K.internalBinaryRead(e, e.uint32(), n, i.userContent);
      break;
    case 5:
      i.voiceAndVideo = J.internalBinaryRead(e, e.uint32(), n, i.voiceAndVideo);
      break;
    case 6:
      i.textAndImages = ea.internalBinaryRead(e, e.uint32(), n, i.textAndImages);
      break;
    case 7:
      i.notifications = eo.internalBinaryRead(e, e.uint32(), n, i.notifications);
      break;
    case 8:
      i.privacy = eu.internalBinaryRead(e, e.uint32(), n, i.privacy);
      break;
    case 9:
      i.debug = ed.internalBinaryRead(e, e.uint32(), n, i.debug);
      break;
    case 10:
      i.gameLibrary = eE.internalBinaryRead(e, e.uint32(), n, i.gameLibrary);
      break;
    case 11:
      i.status = eh.internalBinaryRead(e, e.uint32(), n, i.status);
      break;
    case 12:
      i.localization = eT.internalBinaryRead(e, e.uint32(), n, i.localization);
      break;
    case 13:
      i.appearance = eN.internalBinaryRead(e, e.uint32(), n, i.appearance);
      break;
    case 14:
      i.guildFolders = eC.internalBinaryRead(e, e.uint32(), n, i.guildFolders);
      break;
    case 15:
      i.favorites = eb.internalBinaryRead(e, e.uint32(), n, i.favorites);
      break;
    case 16:
      i.audioContextSettings = eG.internalBinaryRead(e, e.uint32(), n, i.audioContextSettings);
      break;
    case 17:
      i.communities = eB.internalBinaryRead(e, e.uint32(), n, i.communities);
      break;
    case 18:
      i.broadcast = ej.internalBinaryRead(e, e.uint32(), n, i.broadcast);
      break;
    case 19:
      i.clips = eK.internalBinaryRead(e, e.uint32(), n, i.clips);
      break;
    case 20:
      i.forLater = eq.internalBinaryRead(e, e.uint32(), n, i.forLater);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.versions && D.L.internalBinaryWrite(e.versions, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.inbox && P.internalBinaryWrite(e.inbox, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.guilds && w.internalBinaryWrite(e.guilds, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), e.userContent && K.internalBinaryWrite(e.userContent, t.tag(4, N.TD.LengthDelimited).fork(), n).join(), e.voiceAndVideo && J.internalBinaryWrite(e.voiceAndVideo, t.tag(5, N.TD.LengthDelimited).fork(), n).join(), e.textAndImages && ea.internalBinaryWrite(e.textAndImages, t.tag(6, N.TD.LengthDelimited).fork(), n).join(), e.notifications && eo.internalBinaryWrite(e.notifications, t.tag(7, N.TD.LengthDelimited).fork(), n).join(), e.privacy && eu.internalBinaryWrite(e.privacy, t.tag(8, N.TD.LengthDelimited).fork(), n).join(), e.debug && ed.internalBinaryWrite(e.debug, t.tag(9, N.TD.LengthDelimited).fork(), n).join(), e.gameLibrary && eE.internalBinaryWrite(e.gameLibrary, t.tag(10, N.TD.LengthDelimited).fork(), n).join(), e.status && eh.internalBinaryWrite(e.status, t.tag(11, N.TD.LengthDelimited).fork(), n).join(), e.localization && eT.internalBinaryWrite(e.localization, t.tag(12, N.TD.LengthDelimited).fork(), n).join(), e.appearance && eN.internalBinaryWrite(e.appearance, t.tag(13, N.TD.LengthDelimited).fork(), n).join(), e.guildFolders && eC.internalBinaryWrite(e.guildFolders, t.tag(14, N.TD.LengthDelimited).fork(), n).join(), e.favorites && eb.internalBinaryWrite(e.favorites, t.tag(15, N.TD.LengthDelimited).fork(), n).join(), e.audioContextSettings && eG.internalBinaryWrite(e.audioContextSettings, t.tag(16, N.TD.LengthDelimited).fork(), n).join(), e.communities && eB.internalBinaryWrite(e.communities, t.tag(17, N.TD.LengthDelimited).fork(), n).join(), e.broadcast && ej.internalBinaryWrite(e.broadcast, t.tag(18, N.TD.LengthDelimited).fork(), n).join(), e.clips && eK.internalBinaryWrite(e.clips, t.tag(19, N.TD.LengthDelimited).fork(), n).join(), e.forLater && eq.internalBinaryWrite(e.forLater, t.tag(20, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.PreloadedUserSettings', [{
    no: 1,
    name: 'versions',
    kind: 'message',
    T: () => D.L
  },
  {
    no: 2,
    name: 'inbox',
    kind: 'message',
    T: () => P
  },
  {
    no: 3,
    name: 'guilds',
    kind: 'message',
    T: () => w
  },
  {
    no: 4,
    name: 'user_content',
    kind: 'message',
    T: () => K
  },
  {
    no: 5,
    name: 'voice_and_video',
    kind: 'message',
    T: () => J
  },
  {
    no: 6,
    name: 'text_and_images',
    kind: 'message',
    T: () => ea
  },
  {
    no: 7,
    name: 'notifications',
    kind: 'message',
    T: () => eo
  },
  {
    no: 8,
    name: 'privacy',
    kind: 'message',
    T: () => eu
  },
  {
    no: 9,
    name: 'debug',
    kind: 'message',
    T: () => ed
  },
  {
    no: 10,
    name: 'game_library',
    kind: 'message',
    T: () => eE
  },
  {
    no: 11,
    name: 'status',
    kind: 'message',
    T: () => eh
  },
  {
    no: 12,
    name: 'localization',
    kind: 'message',
    T: () => eT
  },
  {
    no: 13,
    name: 'appearance',
    kind: 'message',
    T: () => eN
  },
  {
    no: 14,
    name: 'guild_folders',
    kind: 'message',
    T: () => eC
  },
  {
    no: 15,
    name: 'favorites',
    kind: 'message',
    T: () => eb
  },
  {
    no: 16,
    name: 'audio_context_settings',
    kind: 'message',
    T: () => eG
  },
  {
    no: 17,
    name: 'communities',
    kind: 'message',
    T: () => eB
  },
  {
    no: 18,
    name: 'broadcast',
    kind: 'message',
    T: () => ej
  },
  {
    no: 19,
    name: 'clips',
    kind: 'message',
    T: () => eK
  },
  {
    no: 20,
    name: 'for_later',
    kind: 'message',
    T: () => eq
  }
]);
  }
}
let b = new L();
class M extends R.C {
  create(e) {
let t = {
  currentTab: 0,
  viewedTutorial: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.currentTab = e.int32();
      break;
    case 2:
      i.viewedTutorial = e.bool();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.currentTab && t.tag(1, N.TD.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, N.TD.Varint).bool(e.viewedTutorial);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.InboxSettings', [{
    no: 1,
    name: 'current_tab',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.InboxTab',
      r,
      'INBOX_TAB_'
    ]
  },
  {
    no: 2,
    name: 'viewed_tutorial',
    kind: 'scalar',
    T: 8
  }
]);
  }
}
let P = new M();
class U extends R.C {
  create(e) {
let t = {
  guilds: {}
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.guilds, e, n);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      s = G.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds');
  }
}
e[null != a ? a : '0'] = null != s ? s : G.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.guilds))
  t.tag(1, N.TD.LengthDelimited).fork().tag(1, N.TD.Bit64).fixed64(r), t.tag(2, N.TD.LengthDelimited).fork(), G.internalBinaryWrite(e.guilds[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.AllGuildSettings', [{
  no: 1,
  name: 'guilds',
  kind: 'map',
  K: 6,
  V: {
    kind: 'message',
    T: () => G
  }
}]);
  }
}
let w = new U();
class x extends R.C {
  create(e) {
let t = {
  channels: {},
  hubProgress: 0,
  guildOnboardingProgress: 0,
  dismissedGuildContent: new Uint8Array(0),
  disableRaidAlertPush: !1,
  disableRaidAlertNag: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      this.binaryReadMap1(i.channels, e, n);
      break;
    case 2:
      i.hubProgress = e.uint32();
      break;
    case 3:
      i.guildOnboardingProgress = e.uint32();
      break;
    case 4:
      i.guildRecentsDismissedAt = y.E.internalBinaryRead(e, e.uint32(), n, i.guildRecentsDismissedAt);
      break;
    case 5:
      i.dismissedGuildContent = e.bytes();
      break;
    case 6:
      i.joinSound = eZ.internalBinaryRead(e, e.uint32(), n, i.joinSound);
      break;
    case 7:
      i.mobileRedesignChannelListSettings = eS.internalBinaryRead(e, e.uint32(), n, i.mobileRedesignChannelListSettings);
      break;
    case 8:
      i.disableRaidAlertPush = e.bool();
      break;
    case 9:
      i.disableRaidAlertNag = e.bool();
      break;
    case 10:
      i.customNotificationSoundConfig = Z.internalBinaryRead(e, e.uint32(), n, i.customNotificationSoundConfig);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      s = V.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels');
  }
}
e[null != a ? a : '0'] = null != s ? s : V.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.channels))
  t.tag(1, N.TD.LengthDelimited).fork().tag(1, N.TD.Bit64).fixed64(r), t.tag(2, N.TD.LengthDelimited).fork(), V.internalBinaryWrite(e.channels[r], t, n), t.join().join();
0 !== e.hubProgress && t.tag(2, N.TD.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, N.TD.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && y.E.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, N.TD.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, N.TD.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && eZ.internalBinaryWrite(e.joinSound, t.tag(6, N.TD.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && eS.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, N.TD.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, N.TD.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, N.TD.Varint).bool(e.disableRaidAlertNag), e.customNotificationSoundConfig && Z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.GuildSettings', [{
    no: 1,
    name: 'channels',
    kind: 'map',
    K: 6,
    V: {
      kind: 'message',
      T: () => V
    }
  },
  {
    no: 2,
    name: 'hub_progress',
    kind: 'scalar',
    T: 13
  },
  {
    no: 3,
    name: 'guild_onboarding_progress',
    kind: 'scalar',
    T: 13
  },
  {
    no: 4,
    name: 'guild_recents_dismissed_at',
    kind: 'message',
    T: () => y.E
  },
  {
    no: 5,
    name: 'dismissed_guild_content',
    kind: 'scalar',
    T: 12
  },
  {
    no: 6,
    name: 'join_sound',
    kind: 'message',
    T: () => eZ
  },
  {
    no: 7,
    name: 'mobile_redesign_channel_list_settings',
    kind: 'message',
    T: () => eS
  },
  {
    no: 8,
    name: 'disable_raid_alert_push',
    kind: 'scalar',
    T: 8
  },
  {
    no: 9,
    name: 'disable_raid_alert_nag',
    kind: 'scalar',
    T: 8
  },
  {
    no: 10,
    name: 'custom_notification_sound_config',
    kind: 'message',
    T: () => Z
  }
]);
  }
}
let G = new x();
class k extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.id = C.wA.internalBinaryRead(e, e.uint32(), n, i.id);
      break;
    case 2:
      i.name = C.Gm.internalBinaryRead(e, e.uint32(), n, i.name);
      break;
    case 3:
      i.color = C.wA.internalBinaryRead(e, e.uint32(), n, i.color);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.id && C.wA.internalBinaryWrite(e.id, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.name && C.Gm.internalBinaryWrite(e.name, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.color && C.wA.internalBinaryWrite(e.color, t.tag(3, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ChannelIconEmoji', [{
    no: 1,
    name: 'id',
    kind: 'message',
    T: () => C.wA
  },
  {
    no: 2,
    name: 'name',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 3,
    name: 'color',
    kind: 'message',
    T: () => C.wA
  }
]);
  }
}
let B = new k();
class F extends R.C {
  create(e) {
let t = {
  collapsedInInbox: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.collapsedInInbox = e.bool();
      break;
    case 2:
      i.iconEmoji = B.internalBinaryRead(e, e.uint32(), n, i.iconEmoji);
      break;
    case 3:
      i.customNotificationSoundConfig = Z.internalBinaryRead(e, e.uint32(), n, i.customNotificationSoundConfig);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
!1 !== e.collapsedInInbox && t.tag(1, N.TD.Varint).bool(e.collapsedInInbox), e.iconEmoji && B.internalBinaryWrite(e.iconEmoji, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.customNotificationSoundConfig && Z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ChannelSettings', [{
    no: 1,
    name: 'collapsed_in_inbox',
    kind: 'scalar',
    T: 8
  },
  {
    no: 2,
    name: 'icon_emoji',
    kind: 'message',
    T: () => B
  },
  {
    no: 3,
    name: 'custom_notification_sound_config',
    kind: 'message',
    T: () => Z
  }
]);
  }
}
let V = new F();
class H extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.notificationSoundPackId = C.Gm.internalBinaryRead(e, e.uint32(), n, i.notificationSoundPackId);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.notificationSoundPackId && C.Gm.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.CustomNotificationSoundConfig', [{
  no: 1,
  name: 'notification_sound_pack_id',
  kind: 'message',
  T: () => C.Gm
}]);
  }
}
let Z = new H();
class Y extends R.C {
  create(e) {
let t = {
  lastDismissedVersion: 0
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.lastDismissedVersion = e.uint32();
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.lastDismissedVersion && t.tag(1, N.TD.Varint).uint32(e.lastDismissedVersion);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.RecurringDismissibleContentState', [{
  no: 1,
  name: 'last_dismissed_version',
  kind: 'scalar',
  T: 13
}]);
  }
}
let j = new Y();
class W extends R.C {
  create(e) {
let t = {
  dismissedContents: new Uint8Array(0),
  lastReceivedChangelogId: '0',
  recurringDismissibleContentStates: {}
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.dismissedContents = e.bytes();
      break;
    case 2:
      i.lastDismissedOutboundPromotionStartDate = C.Gm.internalBinaryRead(e, e.uint32(), n, i.lastDismissedOutboundPromotionStartDate);
      break;
    case 3:
      i.premiumTier0ModalDismissedAt = y.E.internalBinaryRead(e, e.uint32(), n, i.premiumTier0ModalDismissedAt);
      break;
    case 4:
      i.guildOnboardingUpsellDismissedAt = y.E.internalBinaryRead(e, e.uint32(), n, i.guildOnboardingUpsellDismissedAt);
      break;
    case 5:
      i.safetyUserSentimentNoticeDismissedAt = y.E.internalBinaryRead(e, e.uint32(), n, i.safetyUserSentimentNoticeDismissedAt);
      break;
    case 6:
      i.lastReceivedChangelogId = e.fixed64().toString();
      break;
    case 7:
      this.binaryReadMap7(i.recurringDismissibleContentStates, e, n);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap7(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.int32();
      break;
    case 2:
      s = j.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states');
  }
}
e[null != a ? a : 0] = null != s ? s : j.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of (e.dismissedContents.length && t.tag(1, N.TD.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && C.Gm.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && y.E.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && y.E.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, N.TD.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && y.E.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, N.TD.LengthDelimited).fork(), n).join(), '0' !== e.lastReceivedChangelogId && t.tag(6, N.TD.Bit64).fixed64(e.lastReceivedChangelogId), Object.keys(e.recurringDismissibleContentStates)))
  t.tag(7, N.TD.LengthDelimited).fork().tag(1, N.TD.Varint).int32(parseInt(r)), t.tag(2, N.TD.LengthDelimited).fork(), j.internalBinaryWrite(e.recurringDismissibleContentStates[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.UserContentSettings', [{
    no: 1,
    name: 'dismissed_contents',
    kind: 'scalar',
    T: 12
  },
  {
    no: 2,
    name: 'last_dismissed_outbound_promotion_start_date',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 3,
    name: 'premium_tier_0_modal_dismissed_at',
    kind: 'message',
    T: () => y.E
  },
  {
    no: 4,
    name: 'guild_onboarding_upsell_dismissed_at',
    kind: 'message',
    T: () => y.E
  },
  {
    no: 5,
    name: 'safety_user_sentiment_notice_dismissed_at',
    kind: 'message',
    T: () => y.E
  },
  {
    no: 6,
    name: 'last_received_changelog_id',
    kind: 'scalar',
    T: 6
  },
  {
    no: 7,
    name: 'recurring_dismissible_content_states',
    kind: 'map',
    K: 5,
    V: {
      kind: 'message',
      T: () => j
    }
  }
]);
  }
}
let K = new W();
class z extends R.C {
  create(e) {
let t = {
  id: '0',
  assetHash: ''
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.id = e.fixed64().toString();
      break;
    case 2:
      i.assetHash = e.string();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
'0' !== e.id && t.tag(1, N.TD.Bit64).fixed64(e.id), '' !== e.assetHash && t.tag(2, N.TD.LengthDelimited).string(e.assetHash);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.VideoFilterAsset', [{
    no: 1,
    name: 'id',
    kind: 'scalar',
    T: 6
  },
  {
    no: 2,
    name: 'asset_hash',
    kind: 'scalar',
    T: 9
  }
]);
  }
}
let q = new z();
class Q extends R.C {
  create(e) {
let t = {
  useBlur: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.useBlur = e.bool();
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
!1 !== e.useBlur && t.tag(1, N.TD.Varint).bool(e.useBlur);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.VideoFilterBackgroundBlur', [{
  no: 1,
  name: 'use_blur',
  kind: 'scalar',
  T: 8
}]);
  }
}
let X = new Q();
class $ extends R.C {
  create(e) {
let t = {
  videoBackgroundFilterDesktop: {
    oneofKind: void 0
  }
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.videoBackgroundFilterDesktop = {
        oneofKind: 'blur',
        blur: X.internalBinaryRead(e, e.uint32(), n, i.videoBackgroundFilterDesktop.blur)
      };
      break;
    case 2:
      i.videoBackgroundFilterDesktop = {
        oneofKind: 'presetOption',
        presetOption: e.uint32()
      };
      break;
    case 3:
      i.videoBackgroundFilterDesktop = {
        oneofKind: 'customAsset',
        customAsset: q.internalBinaryRead(e, e.uint32(), n, i.videoBackgroundFilterDesktop.customAsset)
      };
      break;
    case 5:
      i.alwaysPreviewVideo = C.D5.internalBinaryRead(e, e.uint32(), n, i.alwaysPreviewVideo);
      break;
    case 6:
      i.afkTimeout = C.yC.internalBinaryRead(e, e.uint32(), n, i.afkTimeout);
      break;
    case 7:
      i.streamNotificationsEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.streamNotificationsEnabled);
      break;
    case 8:
      i.nativePhoneIntegrationEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.nativePhoneIntegrationEnabled);
      break;
    case 9:
      i.soundboardSettings = eV.internalBinaryRead(e, e.uint32(), n, i.soundboardSettings);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
'blur' === e.videoBackgroundFilterDesktop.oneofKind && X.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), 'presetOption' === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, N.TD.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), 'customAsset' === e.videoBackgroundFilterDesktop.oneofKind && q.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && C.D5.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, N.TD.LengthDelimited).fork(), n).join(), e.afkTimeout && C.yC.internalBinaryWrite(e.afkTimeout, t.tag(6, N.TD.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && C.D5.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, N.TD.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && C.D5.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, N.TD.LengthDelimited).fork(), n).join(), e.soundboardSettings && eV.internalBinaryWrite(e.soundboardSettings, t.tag(9, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.VoiceAndVideoSettings', [{
    no: 1,
    name: 'blur',
    kind: 'message',
    oneof: 'videoBackgroundFilterDesktop',
    T: () => X
  },
  {
    no: 2,
    name: 'preset_option',
    kind: 'scalar',
    oneof: 'videoBackgroundFilterDesktop',
    T: 13
  },
  {
    no: 3,
    name: 'custom_asset',
    kind: 'message',
    oneof: 'videoBackgroundFilterDesktop',
    T: () => q
  },
  {
    no: 5,
    name: 'always_preview_video',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 6,
    name: 'afk_timeout',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 7,
    name: 'stream_notifications_enabled',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 8,
    name: 'native_phone_integration_enabled',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 9,
    name: 'soundboard_settings',
    kind: 'message',
    T: () => eV
  }
]);
  }
}
let J = new $();
class ee extends R.C {
  create(e) {
let t = {
  explicitContentGuilds: 0,
  explicitContentFriendDm: 0,
  explicitContentNonFriendDm: 0
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.explicitContentGuilds = e.int32();
      break;
    case 2:
      i.explicitContentFriendDm = e.int32();
      break;
    case 3:
      i.explicitContentNonFriendDm = e.int32();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.explicitContentGuilds && t.tag(1, N.TD.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, N.TD.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, N.TD.Varint).int32(e.explicitContentNonFriendDm);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ExplicitContentSettings', [{
    no: 1,
    name: 'explicit_content_guilds',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.ExplicitContentRedaction',
      s
    ]
  },
  {
    no: 2,
    name: 'explicit_content_friend_dm',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.ExplicitContentRedaction',
      s
    ]
  },
  {
    no: 3,
    name: 'explicit_content_non_friend_dm',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.ExplicitContentRedaction',
      s
    ]
  }
]);
  }
}
let et = new ee();
class en extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.profanity = C.D5.internalBinaryRead(e, e.uint32(), n, i.profanity);
      break;
    case 2:
      i.sexualContent = C.D5.internalBinaryRead(e, e.uint32(), n, i.sexualContent);
      break;
    case 3:
      i.slurs = C.D5.internalBinaryRead(e, e.uint32(), n, i.slurs);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.profanity && C.D5.internalBinaryWrite(e.profanity, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.sexualContent && C.D5.internalBinaryWrite(e.sexualContent, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.slurs && C.D5.internalBinaryWrite(e.slurs, t.tag(3, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.KeywordFilterSettings', [{
    no: 1,
    name: 'profanity',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 2,
    name: 'sexual_content',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 3,
    name: 'slurs',
    kind: 'message',
    T: () => C.D5
  }
]);
  }
}
let er = new en();
class ei extends R.C {
  create(e) {
let t = {
  emojiPickerCollapsedSections: [],
  stickerPickerCollapsedSections: [],
  soundboardPickerCollapsedSections: [],
  dmSpamFilterV2: 0
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.diversitySurrogate = C.Gm.internalBinaryRead(e, e.uint32(), n, i.diversitySurrogate);
      break;
    case 2:
      i.useRichChatInput = C.D5.internalBinaryRead(e, e.uint32(), n, i.useRichChatInput);
      break;
    case 3:
      i.useThreadSidebar = C.D5.internalBinaryRead(e, e.uint32(), n, i.useThreadSidebar);
      break;
    case 4:
      i.renderSpoilers = C.Gm.internalBinaryRead(e, e.uint32(), n, i.renderSpoilers);
      break;
    case 5:
      i.emojiPickerCollapsedSections.push(e.string());
      break;
    case 6:
      i.stickerPickerCollapsedSections.push(e.string());
      break;
    case 7:
      i.viewImageDescriptions = C.D5.internalBinaryRead(e, e.uint32(), n, i.viewImageDescriptions);
      break;
    case 8:
      i.showCommandSuggestions = C.D5.internalBinaryRead(e, e.uint32(), n, i.showCommandSuggestions);
      break;
    case 9:
      i.inlineAttachmentMedia = C.D5.internalBinaryRead(e, e.uint32(), n, i.inlineAttachmentMedia);
      break;
    case 10:
      i.inlineEmbedMedia = C.D5.internalBinaryRead(e, e.uint32(), n, i.inlineEmbedMedia);
      break;
    case 11:
      i.gifAutoPlay = C.D5.internalBinaryRead(e, e.uint32(), n, i.gifAutoPlay);
      break;
    case 12:
      i.renderEmbeds = C.D5.internalBinaryRead(e, e.uint32(), n, i.renderEmbeds);
      break;
    case 13:
      i.renderReactions = C.D5.internalBinaryRead(e, e.uint32(), n, i.renderReactions);
      break;
    case 14:
      i.animateEmoji = C.D5.internalBinaryRead(e, e.uint32(), n, i.animateEmoji);
      break;
    case 15:
      i.animateStickers = C.yC.internalBinaryRead(e, e.uint32(), n, i.animateStickers);
      break;
    case 16:
      i.enableTtsCommand = C.D5.internalBinaryRead(e, e.uint32(), n, i.enableTtsCommand);
      break;
    case 17:
      i.messageDisplayCompact = C.D5.internalBinaryRead(e, e.uint32(), n, i.messageDisplayCompact);
      break;
    case 19:
      i.explicitContentFilter = C.yC.internalBinaryRead(e, e.uint32(), n, i.explicitContentFilter);
      break;
    case 20:
      i.viewNsfwGuilds = C.D5.internalBinaryRead(e, e.uint32(), n, i.viewNsfwGuilds);
      break;
    case 21:
      i.convertEmoticons = C.D5.internalBinaryRead(e, e.uint32(), n, i.convertEmoticons);
      break;
    case 22:
      i.expressionSuggestionsEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.expressionSuggestionsEnabled);
      break;
    case 23:
      i.viewNsfwCommands = C.D5.internalBinaryRead(e, e.uint32(), n, i.viewNsfwCommands);
      break;
    case 24:
      i.useLegacyChatInput = C.D5.internalBinaryRead(e, e.uint32(), n, i.useLegacyChatInput);
      break;
    case 25:
      i.soundboardPickerCollapsedSections.push(e.string());
      break;
    case 26:
      i.dmSpamFilter = C.yC.internalBinaryRead(e, e.uint32(), n, i.dmSpamFilter);
      break;
    case 27:
      i.dmSpamFilterV2 = e.int32();
      break;
    case 28:
      i.includeStickersInAutocomplete = C.D5.internalBinaryRead(e, e.uint32(), n, i.includeStickersInAutocomplete);
      break;
    case 29:
      i.explicitContentSettings = et.internalBinaryRead(e, e.uint32(), n, i.explicitContentSettings);
      break;
    case 30:
      i.keywordFilterSettings = er.internalBinaryRead(e, e.uint32(), n, i.keywordFilterSettings);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.diversitySurrogate && C.Gm.internalBinaryWrite(e.diversitySurrogate, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.useRichChatInput && C.D5.internalBinaryWrite(e.useRichChatInput, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.useThreadSidebar && C.D5.internalBinaryWrite(e.useThreadSidebar, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), e.renderSpoilers && C.Gm.internalBinaryWrite(e.renderSpoilers, t.tag(4, N.TD.LengthDelimited).fork(), n).join();
for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
  t.tag(5, N.TD.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
  t.tag(6, N.TD.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
e.viewImageDescriptions && C.D5.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, N.TD.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && C.D5.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, N.TD.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && C.D5.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, N.TD.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && C.D5.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, N.TD.LengthDelimited).fork(), n).join(), e.gifAutoPlay && C.D5.internalBinaryWrite(e.gifAutoPlay, t.tag(11, N.TD.LengthDelimited).fork(), n).join(), e.renderEmbeds && C.D5.internalBinaryWrite(e.renderEmbeds, t.tag(12, N.TD.LengthDelimited).fork(), n).join(), e.renderReactions && C.D5.internalBinaryWrite(e.renderReactions, t.tag(13, N.TD.LengthDelimited).fork(), n).join(), e.animateEmoji && C.D5.internalBinaryWrite(e.animateEmoji, t.tag(14, N.TD.LengthDelimited).fork(), n).join(), e.animateStickers && C.yC.internalBinaryWrite(e.animateStickers, t.tag(15, N.TD.LengthDelimited).fork(), n).join(), e.enableTtsCommand && C.D5.internalBinaryWrite(e.enableTtsCommand, t.tag(16, N.TD.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && C.D5.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, N.TD.LengthDelimited).fork(), n).join(), e.explicitContentFilter && C.yC.internalBinaryWrite(e.explicitContentFilter, t.tag(19, N.TD.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && C.D5.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, N.TD.LengthDelimited).fork(), n).join(), e.convertEmoticons && C.D5.internalBinaryWrite(e.convertEmoticons, t.tag(21, N.TD.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && C.D5.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, N.TD.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && C.D5.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, N.TD.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && C.D5.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, N.TD.LengthDelimited).fork(), n).join();
for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
  t.tag(25, N.TD.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
e.dmSpamFilter && C.yC.internalBinaryWrite(e.dmSpamFilter, t.tag(26, N.TD.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, N.TD.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && C.D5.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, N.TD.LengthDelimited).fork(), n).join(), e.explicitContentSettings && et.internalBinaryWrite(e.explicitContentSettings, t.tag(29, N.TD.LengthDelimited).fork(), n).join(), e.keywordFilterSettings && er.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.TextAndImagesSettings', [{
    no: 1,
    name: 'diversity_surrogate',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 2,
    name: 'use_rich_chat_input',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 3,
    name: 'use_thread_sidebar',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 4,
    name: 'render_spoilers',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 5,
    name: 'emoji_picker_collapsed_sections',
    kind: 'scalar',
    repeat: 2,
    T: 9
  },
  {
    no: 6,
    name: 'sticker_picker_collapsed_sections',
    kind: 'scalar',
    repeat: 2,
    T: 9
  },
  {
    no: 7,
    name: 'view_image_descriptions',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 8,
    name: 'show_command_suggestions',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 9,
    name: 'inline_attachment_media',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 10,
    name: 'inline_embed_media',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 11,
    name: 'gif_auto_play',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 12,
    name: 'render_embeds',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 13,
    name: 'render_reactions',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 14,
    name: 'animate_emoji',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 15,
    name: 'animate_stickers',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 16,
    name: 'enable_tts_command',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 17,
    name: 'message_display_compact',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 19,
    name: 'explicit_content_filter',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 20,
    name: 'view_nsfw_guilds',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 21,
    name: 'convert_emoticons',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 22,
    name: 'expression_suggestions_enabled',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 23,
    name: 'view_nsfw_commands',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 24,
    name: 'use_legacy_chat_input',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 25,
    name: 'soundboard_picker_collapsed_sections',
    kind: 'scalar',
    repeat: 2,
    T: 9
  },
  {
    no: 26,
    name: 'dm_spam_filter',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 27,
    name: 'dm_spam_filter_v2',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.DmSpamFilterV2',
      o
    ]
  },
  {
    no: 28,
    name: 'include_stickers_in_autocomplete',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 29,
    name: 'explicit_content_settings',
    kind: 'message',
    T: () => et
  },
  {
    no: 30,
    name: 'keyword_filter_settings',
    kind: 'message',
    T: () => er
  }
]);
  }
}
let ea = new ei();
class es extends R.C {
  create(e) {
let t = {
  notificationCenterAckedBeforeId: '0',
  focusModeExpiresAtMs: '0'
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.showInAppNotifications = C.D5.internalBinaryRead(e, e.uint32(), n, i.showInAppNotifications);
      break;
    case 2:
      i.notifyFriendsOnGoLive = C.D5.internalBinaryRead(e, e.uint32(), n, i.notifyFriendsOnGoLive);
      break;
    case 3:
      i.notificationCenterAckedBeforeId = e.fixed64().toString();
      break;
    case 4:
      i.enableBurstReactionNotifications = C.D5.internalBinaryRead(e, e.uint32(), n, i.enableBurstReactionNotifications);
      break;
    case 5:
      i.quietMode = C.D5.internalBinaryRead(e, e.uint32(), n, i.quietMode);
      break;
    case 6:
      i.focusModeExpiresAtMs = e.fixed64().toString();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.showInAppNotifications && C.D5.internalBinaryWrite(e.showInAppNotifications, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && C.D5.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), '0' !== e.notificationCenterAckedBeforeId && t.tag(3, N.TD.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && C.D5.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, N.TD.LengthDelimited).fork(), n).join(), e.quietMode && C.D5.internalBinaryWrite(e.quietMode, t.tag(5, N.TD.LengthDelimited).fork(), n).join(), '0' !== e.focusModeExpiresAtMs && t.tag(6, N.TD.Bit64).fixed64(e.focusModeExpiresAtMs);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.NotificationSettings', [{
    no: 1,
    name: 'show_in_app_notifications',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 2,
    name: 'notify_friends_on_go_live',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 3,
    name: 'notification_center_acked_before_id',
    kind: 'scalar',
    T: 6
  },
  {
    no: 4,
    name: 'enable_burst_reaction_notifications',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 5,
    name: 'quiet_mode',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 6,
    name: 'focus_mode_expires_at_ms',
    kind: 'scalar',
    T: 6
  }
]);
  }
}
let eo = new es();
class el extends R.C {
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
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.allowActivityPartyPrivacyFriends = C.D5.internalBinaryRead(e, e.uint32(), n, i.allowActivityPartyPrivacyFriends);
      break;
    case 2:
      i.allowActivityPartyPrivacyVoiceChannel = C.D5.internalBinaryRead(e, e.uint32(), n, i.allowActivityPartyPrivacyVoiceChannel);
      break;
    case 3:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.restrictedGuildIds.push(e.fixed64().toString());
      else
        i.restrictedGuildIds.push(e.fixed64().toString());
      break;
    case 4:
      i.defaultGuildsRestricted = e.bool();
      break;
    case 7:
      i.allowAccessibilityDetection = e.bool();
      break;
    case 8:
      i.detectPlatformAccounts = C.D5.internalBinaryRead(e, e.uint32(), n, i.detectPlatformAccounts);
      break;
    case 9:
      i.passwordless = C.D5.internalBinaryRead(e, e.uint32(), n, i.passwordless);
      break;
    case 10:
      i.contactSyncEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.contactSyncEnabled);
      break;
    case 11:
      i.friendSourceFlags = C.yC.internalBinaryRead(e, e.uint32(), n, i.friendSourceFlags);
      break;
    case 12:
      i.friendDiscoveryFlags = C.yC.internalBinaryRead(e, e.uint32(), n, i.friendDiscoveryFlags);
      break;
    case 13:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.activityRestrictedGuildIds.push(e.fixed64().toString());
      else
        i.activityRestrictedGuildIds.push(e.fixed64().toString());
      break;
    case 14:
      i.defaultGuildsActivityRestricted = e.int32();
      break;
    case 15:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
      else
        i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
      break;
    case 16:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
      else
        i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
      break;
    case 17:
      i.defaultMessageRequestRestricted = C.D5.internalBinaryRead(e, e.uint32(), n, i.defaultMessageRequestRestricted);
      break;
    case 18:
      i.dropsOptedOut = C.D5.internalBinaryRead(e, e.uint32(), n, i.dropsOptedOut);
      break;
    case 19:
      i.nonSpamRetrainingOptIn = C.D5.internalBinaryRead(e, e.uint32(), n, i.nonSpamRetrainingOptIn);
      break;
    case 20:
      i.familyCenterEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabled);
      break;
    case 21:
      i.familyCenterEnabledV2 = C.D5.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabledV2);
      break;
    case 22:
      i.hideLegacyUsername = C.D5.internalBinaryRead(e, e.uint32(), n, i.hideLegacyUsername);
      break;
    case 23:
      i.inappropriateConversationWarnings = C.D5.internalBinaryRead(e, e.uint32(), n, i.inappropriateConversationWarnings);
      break;
    case 24:
      i.recentGamesEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.recentGamesEnabled);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (e.allowActivityPartyPrivacyFriends && C.D5.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && C.D5.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
  t.tag(3, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.restrictedGuildIds.length; n++)
    t.fixed64(e.restrictedGuildIds[n]);
  t.join();
}
if (!1 !== e.defaultGuildsRestricted && t.tag(4, N.TD.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, N.TD.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && C.D5.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, N.TD.LengthDelimited).fork(), n).join(), e.passwordless && C.D5.internalBinaryWrite(e.passwordless, t.tag(9, N.TD.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && C.D5.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, N.TD.LengthDelimited).fork(), n).join(), e.friendSourceFlags && C.yC.internalBinaryWrite(e.friendSourceFlags, t.tag(11, N.TD.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && C.yC.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, N.TD.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
  t.tag(13, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.activityRestrictedGuildIds.length; n++)
    t.fixed64(e.activityRestrictedGuildIds[n]);
  t.join();
}
if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, N.TD.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
  t.tag(15, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
    t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
  t.join();
}
if (e.messageRequestRestrictedGuildIds.length) {
  t.tag(16, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
    t.fixed64(e.messageRequestRestrictedGuildIds[n]);
  t.join();
}
e.defaultMessageRequestRestricted && C.D5.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, N.TD.LengthDelimited).fork(), n).join(), e.dropsOptedOut && C.D5.internalBinaryWrite(e.dropsOptedOut, t.tag(18, N.TD.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && C.D5.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, N.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && C.D5.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, N.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && C.D5.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, N.TD.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && C.D5.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, N.TD.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && C.D5.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, N.TD.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && C.D5.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.PrivacySettings', [{
    no: 1,
    name: 'allow_activity_party_privacy_friends',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 2,
    name: 'allow_activity_party_privacy_voice_channel',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 3,
    name: 'restricted_guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 4,
    name: 'default_guilds_restricted',
    kind: 'scalar',
    T: 8
  },
  {
    no: 7,
    name: 'allow_accessibility_detection',
    kind: 'scalar',
    T: 8
  },
  {
    no: 8,
    name: 'detect_platform_accounts',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 9,
    name: 'passwordless',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 10,
    name: 'contact_sync_enabled',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 11,
    name: 'friend_source_flags',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 12,
    name: 'friend_discovery_flags',
    kind: 'message',
    T: () => C.yC
  },
  {
    no: 13,
    name: 'activity_restricted_guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 14,
    name: 'default_guilds_activity_restricted',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault',
      l
    ]
  },
  {
    no: 15,
    name: 'activity_joining_restricted_guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 16,
    name: 'message_request_restricted_guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 17,
    name: 'default_message_request_restricted',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 18,
    name: 'drops_opted_out',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 19,
    name: 'non_spam_retraining_opt_in',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 20,
    name: 'family_center_enabled',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 21,
    name: 'family_center_enabled_v2',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 22,
    name: 'hide_legacy_username',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 23,
    name: 'inappropriate_conversation_warnings',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 24,
    name: 'recent_games_enabled',
    kind: 'message',
    T: () => C.D5
  }
]);
  }
}
let eu = new el();
class ec extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.rtcPanelShowVoiceStates = C.D5.internalBinaryRead(e, e.uint32(), n, i.rtcPanelShowVoiceStates);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.rtcPanelShowVoiceStates && C.D5.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.DebugSettings', [{
  no: 1,
  name: 'rtc_panel_show_voice_states',
  kind: 'message',
  T: () => C.D5
}]);
  }
}
let ed = new ec();
class e_ extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.installShortcutDesktop = C.D5.internalBinaryRead(e, e.uint32(), n, i.installShortcutDesktop);
      break;
    case 2:
      i.installShortcutStartMenu = C.D5.internalBinaryRead(e, e.uint32(), n, i.installShortcutStartMenu);
      break;
    case 3:
      i.disableGamesTab = C.D5.internalBinaryRead(e, e.uint32(), n, i.disableGamesTab);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.installShortcutDesktop && C.D5.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && C.D5.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.disableGamesTab && C.D5.internalBinaryWrite(e.disableGamesTab, t.tag(3, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.GameLibrarySettings', [{
    no: 1,
    name: 'install_shortcut_desktop',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 2,
    name: 'install_shortcut_start_menu',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 3,
    name: 'disable_games_tab',
    kind: 'message',
    T: () => C.D5
  }
]);
  }
}
let eE = new e_();
class ef extends R.C {
  create(e) {
let t = {
  statusExpiresAtMs: '0'
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.status = C.Gm.internalBinaryRead(e, e.uint32(), n, i.status);
      break;
    case 2:
      i.customStatus = em.internalBinaryRead(e, e.uint32(), n, i.customStatus);
      break;
    case 3:
      i.showCurrentGame = C.D5.internalBinaryRead(e, e.uint32(), n, i.showCurrentGame);
      break;
    case 4:
      i.statusExpiresAtMs = e.fixed64().toString();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.status && C.Gm.internalBinaryWrite(e.status, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.customStatus && em.internalBinaryWrite(e.customStatus, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.showCurrentGame && C.D5.internalBinaryWrite(e.showCurrentGame, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), '0' !== e.statusExpiresAtMs && t.tag(4, N.TD.Bit64).fixed64(e.statusExpiresAtMs);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.StatusSettings', [{
    no: 1,
    name: 'status',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 2,
    name: 'custom_status',
    kind: 'message',
    T: () => em
  },
  {
    no: 3,
    name: 'show_current_game',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 4,
    name: 'status_expires_at_ms',
    kind: 'scalar',
    T: 6
  }
]);
  }
}
let eh = new ef();
class ep extends R.C {
  create(e) {
let t = {
  text: '',
  emojiId: '0',
  emojiName: '',
  expiresAtMs: '0',
  createdAtMs: '0'
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.text = e.string();
      break;
    case 2:
      i.emojiId = e.fixed64().toString();
      break;
    case 3:
      i.emojiName = e.string();
      break;
    case 4:
      i.expiresAtMs = e.fixed64().toString();
      break;
    case 5:
      i.createdAtMs = e.fixed64().toString();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.text && t.tag(1, N.TD.LengthDelimited).string(e.text), '0' !== e.emojiId && t.tag(2, N.TD.Bit64).fixed64(e.emojiId), '' !== e.emojiName && t.tag(3, N.TD.LengthDelimited).string(e.emojiName), '0' !== e.expiresAtMs && t.tag(4, N.TD.Bit64).fixed64(e.expiresAtMs), '0' !== e.createdAtMs && t.tag(5, N.TD.Bit64).fixed64(e.createdAtMs);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.CustomStatus', [{
    no: 1,
    name: 'text',
    kind: 'scalar',
    T: 9
  },
  {
    no: 2,
    name: 'emoji_id',
    kind: 'scalar',
    T: 6
  },
  {
    no: 3,
    name: 'emoji_name',
    kind: 'scalar',
    T: 9
  },
  {
    no: 4,
    name: 'expires_at_ms',
    kind: 'scalar',
    T: 6
  },
  {
    no: 5,
    name: 'created_at_ms',
    kind: 'scalar',
    T: 6
  }
]);
  }
}
let em = new ep();
class eI extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.locale = C.Gm.internalBinaryRead(e, e.uint32(), n, i.locale);
      break;
    case 2:
      i.timezoneOffset = C.T4.internalBinaryRead(e, e.uint32(), n, i.timezoneOffset);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.locale && C.Gm.internalBinaryWrite(e.locale, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.timezoneOffset && C.T4.internalBinaryWrite(e.timezoneOffset, t.tag(2, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.LocalizationSettings', [{
    no: 1,
    name: 'locale',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 2,
    name: 'timezone_offset',
    kind: 'message',
    T: () => C.T4
  }
]);
  }
}
let eT = new eI();
class eg extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.layout = C.Gm.internalBinaryRead(e, e.uint32(), n, i.layout);
      break;
    case 2:
      i.messagePreviews = C.Gm.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.layout && C.Gm.internalBinaryWrite(e.layout, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && C.Gm.internalBinaryWrite(e.messagePreviews, t.tag(2, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ChannelListSettings', [{
    no: 1,
    name: 'layout',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 2,
    name: 'message_previews',
    kind: 'message',
    T: () => C.Gm
  }
]);
  }
}
let eS = new eg();
class eA extends R.C {
  create(e) {
let t = {
  theme: 0,
  developerMode: !1,
  mobileRedesignDisabled: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.theme = e.int32();
      break;
    case 2:
      i.developerMode = e.bool();
      break;
    case 3:
      i.clientThemeSettings = eO.internalBinaryRead(e, e.uint32(), n, i.clientThemeSettings);
      break;
    case 4:
      i.mobileRedesignDisabled = e.bool();
      break;
    case 6:
      i.channelListLayout = C.Gm.internalBinaryRead(e, e.uint32(), n, i.channelListLayout);
      break;
    case 7:
      i.messagePreviews = C.Gm.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
      break;
    case 8:
      i.searchResultExactCountEnabled = C.D5.internalBinaryRead(e, e.uint32(), n, i.searchResultExactCountEnabled);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.theme && t.tag(1, N.TD.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, N.TD.Varint).bool(e.developerMode), e.clientThemeSettings && eO.internalBinaryWrite(e.clientThemeSettings, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, N.TD.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && C.Gm.internalBinaryWrite(e.channelListLayout, t.tag(6, N.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && C.Gm.internalBinaryWrite(e.messagePreviews, t.tag(7, N.TD.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && C.D5.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.AppearanceSettings', [{
    no: 1,
    name: 'theme',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.Theme',
      u
    ]
  },
  {
    no: 2,
    name: 'developer_mode',
    kind: 'scalar',
    T: 8
  },
  {
    no: 3,
    name: 'client_theme_settings',
    kind: 'message',
    T: () => eO
  },
  {
    no: 4,
    name: 'mobile_redesign_disabled',
    kind: 'scalar',
    T: 8
  },
  {
    no: 6,
    name: 'channel_list_layout',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 7,
    name: 'message_previews',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 8,
    name: 'search_result_exact_count_enabled',
    kind: 'message',
    T: () => C.D5
  }
]);
  }
}
let eN = new eA();
class ev extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (2 === t)
    i.backgroundGradientPresetId = C.yC.internalBinaryRead(e, e.uint32(), n, i.backgroundGradientPresetId);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.backgroundGradientPresetId && C.yC.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ClientThemeSettings', [{
  no: 2,
  name: 'background_gradient_preset_id',
  kind: 'message',
  T: () => C.yC
}]);
  }
}
let eO = new ev();
class eR extends R.C {
  create(e) {
let t = {
  folders: [],
  guildPositions: []
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.folders.push(eD.internalBinaryRead(e, e.uint32(), n));
      break;
    case 2:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.guildPositions.push(e.fixed64().toString());
      else
        i.guildPositions.push(e.fixed64().toString());
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
for (let r = 0; r < e.folders.length; r++)
  eD.internalBinaryWrite(e.folders[r], t.tag(1, N.TD.LengthDelimited).fork(), n).join();
if (e.guildPositions.length) {
  t.tag(2, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.guildPositions.length; n++)
    t.fixed64(e.guildPositions[n]);
  t.join();
}
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.GuildFolders', [{
    no: 1,
    name: 'folders',
    kind: 'message',
    repeat: 1,
    T: () => eD
  },
  {
    no: 2,
    name: 'guild_positions',
    kind: 'scalar',
    repeat: 1,
    T: 6
  }
]);
  }
}
let eC = new eR();
class ey extends R.C {
  create(e) {
let t = {
  guildIds: []
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.guildIds.push(e.fixed64().toString());
      else
        i.guildIds.push(e.fixed64().toString());
      break;
    case 2:
      i.id = C.r1.internalBinaryRead(e, e.uint32(), n, i.id);
      break;
    case 3:
      i.name = C.Gm.internalBinaryRead(e, e.uint32(), n, i.name);
      break;
    case 4:
      i.color = C.wA.internalBinaryRead(e, e.uint32(), n, i.color);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (e.guildIds.length) {
  t.tag(1, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.guildIds.length; n++)
    t.fixed64(e.guildIds[n]);
  t.join();
}
e.id && C.r1.internalBinaryWrite(e.id, t.tag(2, N.TD.LengthDelimited).fork(), n).join(), e.name && C.Gm.internalBinaryWrite(e.name, t.tag(3, N.TD.LengthDelimited).fork(), n).join(), e.color && C.wA.internalBinaryWrite(e.color, t.tag(4, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.GuildFolder', [{
    no: 1,
    name: 'guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 2,
    name: 'id',
    kind: 'message',
    T: () => C.r1
  },
  {
    no: 3,
    name: 'name',
    kind: 'message',
    T: () => C.Gm
  },
  {
    no: 4,
    name: 'color',
    kind: 'message',
    T: () => C.wA
  }
]);
  }
}
let eD = new ey();
class eL extends R.C {
  create(e) {
let t = {
  favoriteChannels: {},
  muted: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      this.binaryReadMap1(i.favoriteChannels, e, n);
      break;
    case 2:
      i.muted = e.bool();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      s = eP.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels');
  }
}
e[null != a ? a : '0'] = null != s ? s : eP.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.favoriteChannels))
  t.tag(1, N.TD.LengthDelimited).fork().tag(1, N.TD.Bit64).fixed64(r), t.tag(2, N.TD.LengthDelimited).fork(), eP.internalBinaryWrite(e.favoriteChannels[r], t, n), t.join().join();
!1 !== e.muted && t.tag(2, N.TD.Varint).bool(e.muted);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.Favorites', [{
    no: 1,
    name: 'favorite_channels',
    kind: 'map',
    K: 6,
    V: {
      kind: 'message',
      T: () => eP
    }
  },
  {
    no: 2,
    name: 'muted',
    kind: 'scalar',
    T: 8
  }
]);
  }
}
let eb = new eL();
class eM extends R.C {
  create(e) {
let t = {
  nickname: '',
  type: 0,
  position: 0,
  parentId: '0'
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.nickname = e.string();
      break;
    case 2:
      i.type = e.int32();
      break;
    case 3:
      i.position = e.uint32();
      break;
    case 4:
      i.parentId = e.fixed64().toString();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.nickname && t.tag(1, N.TD.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, N.TD.Varint).int32(e.type), 0 !== e.position && t.tag(3, N.TD.Varint).uint32(e.position), '0' !== e.parentId && t.tag(4, N.TD.Bit64).fixed64(e.parentId);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteChannel', [{
    no: 1,
    name: 'nickname',
    kind: 'scalar',
    T: 9
  },
  {
    no: 2,
    name: 'type',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.FavoriteChannelType',
      d
    ]
  },
  {
    no: 3,
    name: 'position',
    kind: 'scalar',
    T: 13
  },
  {
    no: 4,
    name: 'parent_id',
    kind: 'scalar',
    T: 6
  }
]);
  }
}
let eP = new eM();
class eU extends R.C {
  create(e) {
let t = {
  muted: !1,
  volume: 0,
  modifiedAt: '0',
  soundboardMuted: !1
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.muted = e.bool();
      break;
    case 2:
      i.volume = e.float();
      break;
    case 3:
      i.modifiedAt = e.fixed64().toString();
      break;
    case 4:
      i.soundboardMuted = e.bool();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
!1 !== e.muted && t.tag(1, N.TD.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, N.TD.Bit32).float(e.volume), '0' !== e.modifiedAt && t.tag(3, N.TD.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, N.TD.Varint).bool(e.soundboardMuted);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.AudioContextSetting', [{
    no: 1,
    name: 'muted',
    kind: 'scalar',
    T: 8
  },
  {
    no: 2,
    name: 'volume',
    kind: 'scalar',
    T: 2
  },
  {
    no: 3,
    name: 'modified_at',
    kind: 'scalar',
    T: 6
  },
  {
    no: 4,
    name: 'soundboard_muted',
    kind: 'scalar',
    T: 8
  }
]);
  }
}
let ew = new eU();
class ex extends R.C {
  create(e) {
let t = {
  user: {},
  stream: {}
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      this.binaryReadMap1(i.user, e, n);
      break;
    case 2:
      this.binaryReadMap2(i.stream, e, n);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      s = ew.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user');
  }
}
e[null != a ? a : '0'] = null != s ? s : ew.create();
  }
  binaryReadMap2(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, s;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      s = ew.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream');
  }
}
e[null != a ? a : '0'] = null != s ? s : ew.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.user))
  t.tag(1, N.TD.LengthDelimited).fork().tag(1, N.TD.Bit64).fixed64(r), t.tag(2, N.TD.LengthDelimited).fork(), ew.internalBinaryWrite(e.user[r], t, n), t.join().join();
for (let r of Object.keys(e.stream))
  t.tag(2, N.TD.LengthDelimited).fork().tag(1, N.TD.Bit64).fixed64(r), t.tag(2, N.TD.LengthDelimited).fork(), ew.internalBinaryWrite(e.stream[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.AudioSettings', [{
    no: 1,
    name: 'user',
    kind: 'map',
    K: 6,
    V: {
      kind: 'message',
      T: () => ew
    }
  },
  {
    no: 2,
    name: 'stream',
    kind: 'map',
    K: 6,
    V: {
      kind: 'message',
      T: () => ew
    }
  }
]);
  }
}
let eG = new ex();
class ek extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.disableHomeAutoNav = C.D5.internalBinaryRead(e, e.uint32(), n, i.disableHomeAutoNav);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.disableHomeAutoNav && C.D5.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.CommunitiesSettings', [{
  no: 1,
  name: 'disable_home_auto_nav',
  kind: 'message',
  T: () => C.D5
}]);
  }
}
let eB = new ek();
class eF extends R.C {
  create(e) {
let t = {
  volume: 0
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.volume = e.float();
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.volume && t.tag(1, N.TD.Bit32).float(e.volume);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.SoundboardSettings', [{
  no: 1,
  name: 'volume',
  kind: 'scalar',
  T: 2
}]);
  }
}
let eV = new eF();
class eH extends R.C {
  create(e) {
let t = {
  soundId: '0',
  guildId: '0'
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.soundId = e.fixed64().toString();
      break;
    case 2:
      i.guildId = e.fixed64().toString();
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
'0' !== e.soundId && t.tag(1, N.TD.Bit64).fixed64(e.soundId), '0' !== e.guildId && t.tag(2, N.TD.Bit64).fixed64(e.guildId);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.CustomCallSound', [{
    no: 1,
    name: 'sound_id',
    kind: 'scalar',
    T: 6
  },
  {
    no: 2,
    name: 'guild_id',
    kind: 'scalar',
    T: 6
  }
]);
  }
}
let eZ = new eH();
class eY extends R.C {
  create(e) {
let t = {
  allowedGuildIds: [],
  allowedUserIds: []
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.allowFriends = C.D5.internalBinaryRead(e, e.uint32(), n, i.allowFriends);
      break;
    case 2:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.allowedGuildIds.push(e.fixed64().toString());
      else
        i.allowedGuildIds.push(e.fixed64().toString());
      break;
    case 3:
      if (r === N.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.allowedUserIds.push(e.fixed64().toString());
      else
        i.allowedUserIds.push(e.fixed64().toString());
      break;
    case 4:
      i.autoBroadcast = C.D5.internalBinaryRead(e, e.uint32(), n, i.autoBroadcast);
      break;
    default:
      let a = n.readUnknownField;
      if ('throw' === a)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (e.allowFriends && C.D5.internalBinaryWrite(e.allowFriends, t.tag(1, N.TD.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
  t.tag(2, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.allowedGuildIds.length; n++)
    t.fixed64(e.allowedGuildIds[n]);
  t.join();
}
if (e.allowedUserIds.length) {
  t.tag(3, N.TD.LengthDelimited).fork();
  for (let n = 0; n < e.allowedUserIds.length; n++)
    t.fixed64(e.allowedUserIds[n]);
  t.join();
}
e.autoBroadcast && C.D5.internalBinaryWrite(e.autoBroadcast, t.tag(4, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.BroadcastSettings', [{
    no: 1,
    name: 'allow_friends',
    kind: 'message',
    T: () => C.D5
  },
  {
    no: 2,
    name: 'allowed_guild_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 3,
    name: 'allowed_user_ids',
    kind: 'scalar',
    repeat: 1,
    T: 6
  },
  {
    no: 4,
    name: 'auto_broadcast',
    kind: 'message',
    T: () => C.D5
  }
]);
  }
}
let ej = new eY();
class eW extends R.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.allowVoiceRecording = C.D5.internalBinaryRead(e, e.uint32(), n, i.allowVoiceRecording);
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.allowVoiceRecording && C.D5.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, N.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ClipsSettings', [{
  no: 1,
  name: 'allow_voice_recording',
  kind: 'message',
  T: () => C.D5
}]);
  }
}
let eK = new eW();
class ez extends R.C {
  create(e) {
let t = {
  currentTab: 0
};
return globalThis.Object.defineProperty(t, O.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, v.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  a = e.pos + t;
for (; e.pos < a;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.currentTab = e.int32();
  else {
    let a = n.readUnknownField;
    if ('throw' === a)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== a && (!0 === a ? N.z.onRead : a)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.currentTab && t.tag(1, N.TD.Varint).int32(e.currentTab);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? N.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ForLaterSettings', [{
  no: 1,
  name: 'current_tab',
  kind: 'enum',
  T: () => [
    'discord_protos.discord_users.v1.ForLaterTab',
    _,
    'FOR_LATER_TAB_'
  ]
}]);
  }
}
let eq = new ez();