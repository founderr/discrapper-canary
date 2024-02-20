"use strict";
E.r(_), E.d(_, {
  GIFType: function() {
    return t
  },
  FrecencyUserSettings: function() {
    return a
  },
  FavoriteGIFs: function() {
    return i
  },
  FavoriteGIF: function() {
    return s
  },
  FavoriteStickers: function() {
    return N
  },
  StickerFrecency: function() {
    return S
  },
  FavoriteEmojis: function() {
    return l
  },
  EmojiFrecency: function() {
    return C
  },
  ApplicationCommandFrecency: function() {
    return u
  },
  FrecencyItem: function() {
    return U
  },
  FavoriteSoundboardSounds: function() {
    return P
  },
  PlayedSoundFrecency: function() {
    return p
  },
  ApplicationFrecency: function() {
    return y
  },
  GuildAndChannelFrecency: function() {
    return H
  }
}), E("222007"), E("70102"), E("424973");
var t, o, I = E("849266"),
  T = E("959714");
(o = t || (t = {}))[o.NONE = 0] = "NONE", o[o.IMAGE = 1] = "IMAGE", o[o.VIDEO = 2] = "VIDEO";
class r extends I.MessageType {
  create(e) {
    let _ = {};
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      r = e.pos + _;
    for (; e.pos < r;) {
      let [_, t] = e.tag();
      switch (_) {
        case 1:
          o.versions = T.Versions.internalBinaryRead(e, e.uint32(), E, o.versions);
          break;
        case 2:
          o.favoriteGifs = i.internalBinaryRead(e, e.uint32(), E, o.favoriteGifs);
          break;
        case 3:
          o.favoriteStickers = N.internalBinaryRead(e, e.uint32(), E, o.favoriteStickers);
          break;
        case 4:
          o.stickerFrecency = S.internalBinaryRead(e, e.uint32(), E, o.stickerFrecency);
          break;
        case 5:
          o.favoriteEmojis = l.internalBinaryRead(e, e.uint32(), E, o.favoriteEmojis);
          break;
        case 6:
          o.emojiFrecency = C.internalBinaryRead(e, e.uint32(), E, o.emojiFrecency);
          break;
        case 7:
          o.applicationCommandFrecency = u.internalBinaryRead(e, e.uint32(), E, o.applicationCommandFrecency);
          break;
        case 8:
          o.favoriteSoundboardSounds = P.internalBinaryRead(e, e.uint32(), E, o.favoriteSoundboardSounds);
          break;
        case 9:
          o.applicationFrecency = y.internalBinaryRead(e, e.uint32(), E, o.applicationFrecency);
          break;
        case 10:
          o.heardSoundFrecency = h.internalBinaryRead(e, e.uint32(), E, o.heardSoundFrecency);
          break;
        case 11:
          o.playedSoundFrecency = p.internalBinaryRead(e, e.uint32(), E, o.playedSoundFrecency);
          break;
        case 12:
          o.guildAndChannelFrecency = H.internalBinaryRead(e, e.uint32(), E, o.guildAndChannelFrecency);
          break;
        default:
          let r = E.readUnknownField;
          if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
          let a = e.skip(t);
          !1 !== r && (!0 === r ? I.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, a)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    e.versions && T.Versions.internalBinaryWrite(e.versions, _.tag(1, I.WireType.LengthDelimited).fork(), E).join(), e.favoriteGifs && i.internalBinaryWrite(e.favoriteGifs, _.tag(2, I.WireType.LengthDelimited).fork(), E).join(), e.favoriteStickers && N.internalBinaryWrite(e.favoriteStickers, _.tag(3, I.WireType.LengthDelimited).fork(), E).join(), e.stickerFrecency && S.internalBinaryWrite(e.stickerFrecency, _.tag(4, I.WireType.LengthDelimited).fork(), E).join(), e.favoriteEmojis && l.internalBinaryWrite(e.favoriteEmojis, _.tag(5, I.WireType.LengthDelimited).fork(), E).join(), e.emojiFrecency && C.internalBinaryWrite(e.emojiFrecency, _.tag(6, I.WireType.LengthDelimited).fork(), E).join(), e.applicationCommandFrecency && u.internalBinaryWrite(e.applicationCommandFrecency, _.tag(7, I.WireType.LengthDelimited).fork(), E).join(), e.favoriteSoundboardSounds && P.internalBinaryWrite(e.favoriteSoundboardSounds, _.tag(8, I.WireType.LengthDelimited).fork(), E).join(), e.applicationFrecency && y.internalBinaryWrite(e.applicationFrecency, _.tag(9, I.WireType.LengthDelimited).fork(), E).join(), e.heardSoundFrecency && h.internalBinaryWrite(e.heardSoundFrecency, _.tag(10, I.WireType.LengthDelimited).fork(), E).join(), e.playedSoundFrecency && p.internalBinaryWrite(e.playedSoundFrecency, _.tag(11, I.WireType.LengthDelimited).fork(), E).join(), e.guildAndChannelFrecency && H.internalBinaryWrite(e.guildAndChannelFrecency, _.tag(12, I.WireType.LengthDelimited).fork(), E).join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings", [{
      no: 1,
      name: "versions",
      kind: "message",
      T: () => T.Versions
    }, {
      no: 2,
      name: "favorite_gifs",
      kind: "message",
      T: () => i
    }, {
      no: 3,
      name: "favorite_stickers",
      kind: "message",
      T: () => N
    }, {
      no: 4,
      name: "sticker_frecency",
      kind: "message",
      T: () => S
    }, {
      no: 5,
      name: "favorite_emojis",
      kind: "message",
      T: () => l
    }, {
      no: 6,
      name: "emoji_frecency",
      kind: "message",
      T: () => C
    }, {
      no: 7,
      name: "application_command_frecency",
      kind: "message",
      T: () => u
    }, {
      no: 8,
      name: "favorite_soundboard_sounds",
      kind: "message",
      T: () => P
    }, {
      no: 9,
      name: "application_frecency",
      kind: "message",
      T: () => y
    }, {
      no: 10,
      name: "heard_sound_frecency",
      kind: "message",
      T: () => h
    }, {
      no: 11,
      name: "played_sound_frecency",
      kind: "message",
      T: () => p
    }, {
      no: 12,
      name: "guild_and_channel_frecency",
      kind: "message",
      T: () => H
    }])
  }
}
let a = new r;
class n extends I.MessageType {
  create(e) {
    let _ = {
      gifs: {},
      hideTooltip: !1
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      switch (_) {
        case 1:
          this.binaryReadMap1(o.gifs, e, E);
          break;
        case 2:
          o.hideTooltip = e.bool();
          break;
        default:
          let T = E.readUnknownField;
          if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
          let r = e.skip(t);
          !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = s.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs")
      }
    }
    e[null != I ? I : ""] = null != T ? T : s.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.gifs)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), s.internalBinaryWrite(e.gifs[t], _, E), _.join().join();
    !1 !== e.hideTooltip && _.tag(2, I.WireType.Varint).bool(e.hideTooltip);
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteGIFs", [{
      no: 1,
      name: "gifs",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => s
      }
    }, {
      no: 2,
      name: "hide_tooltip",
      kind: "scalar",
      T: 8
    }])
  }
}
let i = new n;
class A extends I.MessageType {
  create(e) {
    let _ = {
      format: 0,
      src: "",
      width: 0,
      height: 0,
      order: 0
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      switch (_) {
        case 1:
          o.format = e.int32();
          break;
        case 2:
          o.src = e.string();
          break;
        case 3:
          o.width = e.uint32();
          break;
        case 4:
          o.height = e.uint32();
          break;
        case 5:
          o.order = e.uint32();
          break;
        default:
          let T = E.readUnknownField;
          if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
          let r = e.skip(t);
          !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    0 !== e.format && _.tag(1, I.WireType.Varint).int32(e.format), "" !== e.src && _.tag(2, I.WireType.LengthDelimited).string(e.src), 0 !== e.width && _.tag(3, I.WireType.Varint).uint32(e.width), 0 !== e.height && _.tag(4, I.WireType.Varint).uint32(e.height), 0 !== e.order && _.tag(5, I.WireType.Varint).uint32(e.order);
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteGIF", [{
      no: 1,
      name: "format",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.GIFType", t]
    }, {
      no: 2,
      name: "src",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "width",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "height",
      kind: "scalar",
      T: 13
    }, {
      no: 5,
      name: "order",
      kind: "scalar",
      T: 13
    }])
  }
}
let s = new A;
class R extends I.MessageType {
  create(e) {
    let _ = {
      stickerIds: []
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) {
        if (t === I.WireType.LengthDelimited)
          for (let _ = e.int32() + e.pos; e.pos < _;) o.stickerIds.push(e.fixed64().toString());
        else o.stickerIds.push(e.fixed64().toString())
      } else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    if (e.stickerIds.length) {
      _.tag(1, I.WireType.LengthDelimited).fork();
      for (let E = 0; E < e.stickerIds.length; E++) _.fixed64(e.stickerIds[E]);
      _.join()
    }
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteStickers", [{
      no: 1,
      name: "sticker_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let N = new R;
class O extends I.MessageType {
  create(e) {
    let _ = {
      stickers: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.stickers, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.fixed64().toString();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers")
      }
    }
    e[null != I ? I : "0"] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.stickers)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.Bit64).fixed64(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.stickers[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.StickerFrecency", [{
      no: 1,
      name: "stickers",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let S = new O;
class L extends I.MessageType {
  create(e) {
    let _ = {
      emojis: []
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) o.emojis.push(e.string());
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    for (let E = 0; E < e.emojis.length; E++) _.tag(1, I.WireType.LengthDelimited).string(e.emojis[E]);
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteEmojis", [{
      no: 1,
      name: "emojis",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let l = new L;
class D extends I.MessageType {
  create(e) {
    let _ = {
      emojis: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.emojis, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis")
      }
    }
    e[null != I ? I : ""] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.emojis)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.emojis[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.EmojiFrecency", [{
      no: 1,
      name: "emojis",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let C = new D;
class c extends I.MessageType {
  create(e) {
    let _ = {
      applicationCommands: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.applicationCommands, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands")
      }
    }
    e[null != I ? I : ""] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.applicationCommands)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.applicationCommands[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [{
      no: 1,
      name: "application_commands",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let u = new c;
class d extends I.MessageType {
  create(e) {
    let _ = {
      totalUses: 0,
      recentUses: [],
      frecency: 0,
      score: 0
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      switch (_) {
        case 1:
          o.totalUses = e.uint32();
          break;
        case 2:
          if (t === I.WireType.LengthDelimited)
            for (let _ = e.int32() + e.pos; e.pos < _;) o.recentUses.push(e.uint64().toString());
          else o.recentUses.push(e.uint64().toString());
          break;
        case 3:
          o.frecency = e.int32();
          break;
        case 4:
          o.score = e.int32();
          break;
        default:
          let T = E.readUnknownField;
          if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
          let r = e.skip(t);
          !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    if (0 !== e.totalUses && _.tag(1, I.WireType.Varint).uint32(e.totalUses), e.recentUses.length) {
      _.tag(2, I.WireType.LengthDelimited).fork();
      for (let E = 0; E < e.recentUses.length; E++) _.uint64(e.recentUses[E]);
      _.join()
    }
    0 !== e.frecency && _.tag(3, I.WireType.Varint).int32(e.frecency), 0 !== e.score && _.tag(4, I.WireType.Varint).int32(e.score);
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyItem", [{
      no: 1,
      name: "total_uses",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "recent_uses",
      kind: "scalar",
      repeat: 1,
      T: 4
    }, {
      no: 3,
      name: "frecency",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "score",
      kind: "scalar",
      T: 5
    }])
  }
}
let U = new d;
class M extends I.MessageType {
  create(e) {
    let _ = {
      soundIds: []
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) {
        if (t === I.WireType.LengthDelimited)
          for (let _ = e.int32() + e.pos; e.pos < _;) o.soundIds.push(e.fixed64().toString());
        else o.soundIds.push(e.fixed64().toString())
      } else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  internalBinaryWrite(e, _, E) {
    if (e.soundIds.length) {
      _.tag(1, I.WireType.LengthDelimited).fork();
      for (let E = 0; E < e.soundIds.length; E++) _.fixed64(e.soundIds[E]);
      _.join()
    }
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [{
      no: 1,
      name: "sound_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let P = new M;
class G extends I.MessageType {
  create(e) {
    let _ = {
      heardSounds: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.heardSounds, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds")
      }
    }
    e[null != I ? I : ""] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.heardSounds)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.heardSounds[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.HeardSoundFrecency", [{
      no: 1,
      name: "heard_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let h = new G;
class m extends I.MessageType {
  create(e) {
    let _ = {
      playedSounds: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.playedSounds, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds")
      }
    }
    e[null != I ? I : ""] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.playedSounds)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.playedSounds[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.PlayedSoundFrecency", [{
      no: 1,
      name: "played_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let p = new m;
class B extends I.MessageType {
  create(e) {
    let _ = {
      applications: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.applications, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.string();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications")
      }
    }
    e[null != I ? I : ""] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.applications)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.LengthDelimited).string(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.applications[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.ApplicationFrecency", [{
      no: 1,
      name: "applications",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let y = new B;
class g extends I.MessageType {
  create(e) {
    let _ = {
      guildAndChannels: {}
    };
    return globalThis.Object.defineProperty(_, I.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, I.reflectionMergePartial)(this, _, e), _
  }
  internalBinaryRead(e, _, E, t) {
    let o = null != t ? t : this.create(),
      T = e.pos + _;
    for (; e.pos < T;) {
      let [_, t] = e.tag();
      if (1 === _) this.binaryReadMap1(o.guildAndChannels, e, E);
      else {
        let T = E.readUnknownField;
        if ("throw" === T) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
        let r = e.skip(t);
        !1 !== T && (!0 === T ? I.UnknownFieldHandler.onRead : T)(this.typeName, o, _, t, r)
      }
    }
    return o
  }
  binaryReadMap1(e, _, E) {
    let t = _.uint32(),
      o = _.pos + t,
      I, T;
    for (; _.pos < o;) {
      let [e, t] = _.tag();
      switch (e) {
        case 1:
          I = _.fixed64().toString();
          break;
        case 2:
          T = U.internalBinaryRead(_, _.uint32(), E);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels")
      }
    }
    e[null != I ? I : "0"] = null != T ? T : U.create()
  }
  internalBinaryWrite(e, _, E) {
    for (let t of Object.keys(e.guildAndChannels)) _.tag(1, I.WireType.LengthDelimited).fork().tag(1, I.WireType.Bit64).fixed64(t), _.tag(2, I.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.guildAndChannels[t], _, E), _.join().join();
    let t = E.writeUnknownFields;
    return !1 !== t && (!0 == t ? I.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [{
      no: 1,
      name: "guild_and_channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => U
      }
    }])
  }
}
let H = new g