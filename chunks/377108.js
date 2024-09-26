n.d(t, {
    EO: function () {
        return r;
    },
    JM: function () {
        return m;
    },
    Lt: function () {
        return T;
    },
    ND: function () {
        return v;
    },
    PL: function () {
        return O;
    },
    UY: function () {
        return G;
    },
    YI: function () {
        return C;
    },
    _F: function () {
        return L;
    },
    h_: function () {
        return D;
    },
    ji: function () {
        return E;
    },
    lG: function () {
        return B;
    },
    ls: function () {
        return S;
    },
    pL: function () {
        return w;
    },
    wK: function () {
        return h;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(653041);
var s = n(230367),
    l = n(320215),
    u = n(240773),
    c = n(495852),
    d = n(397696);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.IMAGE = 1)] = 'IMAGE'), (e[(e.VIDEO = 2)] = 'VIDEO');
})(r || (r = {}));
class _ extends c.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.versions = d.L.internalBinaryRead(e, e.uint32(), n, i.versions);
                    break;
                case 2:
                    i.favoriteGifs = h.internalBinaryRead(e, e.uint32(), n, i.favoriteGifs);
                    break;
                case 3:
                    i.favoriteStickers = T.internalBinaryRead(e, e.uint32(), n, i.favoriteStickers);
                    break;
                case 4:
                    i.stickerFrecency = S.internalBinaryRead(e, e.uint32(), n, i.stickerFrecency);
                    break;
                case 5:
                    i.favoriteEmojis = v.internalBinaryRead(e, e.uint32(), n, i.favoriteEmojis);
                    break;
                case 6:
                    i.emojiFrecency = O.internalBinaryRead(e, e.uint32(), n, i.emojiFrecency);
                    break;
                case 7:
                    i.applicationCommandFrecency = C.internalBinaryRead(e, e.uint32(), n, i.applicationCommandFrecency);
                    break;
                case 8:
                    i.favoriteSoundboardSounds = D.internalBinaryRead(e, e.uint32(), n, i.favoriteSoundboardSounds);
                    break;
                case 9:
                    i.applicationFrecency = G.internalBinaryRead(e, e.uint32(), n, i.applicationFrecency);
                    break;
                case 10:
                    i.heardSoundFrecency = P.internalBinaryRead(e, e.uint32(), n, i.heardSoundFrecency);
                    break;
                case 11:
                    i.playedSoundFrecency = w.internalBinaryRead(e, e.uint32(), n, i.playedSoundFrecency);
                    break;
                case 12:
                    i.guildAndChannelFrecency = B.internalBinaryRead(e, e.uint32(), n, i.guildAndChannelFrecency);
                    break;
                case 13:
                    i.emojiReactionFrecency = O.internalBinaryRead(e, e.uint32(), n, i.emojiReactionFrecency);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && d.L.internalBinaryWrite(e.versions, t.tag(1, s.TD.LengthDelimited).fork(), n).join(), e.favoriteGifs && h.internalBinaryWrite(e.favoriteGifs, t.tag(2, s.TD.LengthDelimited).fork(), n).join(), e.favoriteStickers && T.internalBinaryWrite(e.favoriteStickers, t.tag(3, s.TD.LengthDelimited).fork(), n).join(), e.stickerFrecency && S.internalBinaryWrite(e.stickerFrecency, t.tag(4, s.TD.LengthDelimited).fork(), n).join(), e.favoriteEmojis && v.internalBinaryWrite(e.favoriteEmojis, t.tag(5, s.TD.LengthDelimited).fork(), n).join(), e.emojiFrecency && O.internalBinaryWrite(e.emojiFrecency, t.tag(6, s.TD.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && C.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, s.TD.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && D.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, s.TD.LengthDelimited).fork(), n).join(), e.applicationFrecency && G.internalBinaryWrite(e.applicationFrecency, t.tag(9, s.TD.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && P.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, s.TD.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && w.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, s.TD.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && B.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, s.TD.LengthDelimited).fork(), n).join(), e.emojiReactionFrecency && O.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, s.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FrecencyUserSettings', [
            {
                no: 1,
                name: 'versions',
                kind: 'message',
                T: () => d.L
            },
            {
                no: 2,
                name: 'favorite_gifs',
                kind: 'message',
                T: () => h
            },
            {
                no: 3,
                name: 'favorite_stickers',
                kind: 'message',
                T: () => T
            },
            {
                no: 4,
                name: 'sticker_frecency',
                kind: 'message',
                T: () => S
            },
            {
                no: 5,
                name: 'favorite_emojis',
                kind: 'message',
                T: () => v
            },
            {
                no: 6,
                name: 'emoji_frecency',
                kind: 'message',
                T: () => O
            },
            {
                no: 7,
                name: 'application_command_frecency',
                kind: 'message',
                T: () => C
            },
            {
                no: 8,
                name: 'favorite_soundboard_sounds',
                kind: 'message',
                T: () => D
            },
            {
                no: 9,
                name: 'application_frecency',
                kind: 'message',
                T: () => G
            },
            {
                no: 10,
                name: 'heard_sound_frecency',
                kind: 'message',
                T: () => P
            },
            {
                no: 11,
                name: 'played_sound_frecency',
                kind: 'message',
                T: () => w
            },
            {
                no: 12,
                name: 'guild_and_channel_frecency',
                kind: 'message',
                T: () => B
            },
            {
                no: 13,
                name: 'emoji_reaction_frecency',
                kind: 'message',
                T: () => O
            }
        ]);
    }
}
let E = new _();
class f extends c.C {
    create(e) {
        let t = {
            gifs: {},
            hideTooltip: !1
        };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(i.gifs, e, n);
                    break;
                case 2:
                    i.hideTooltip = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = m.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs');
            }
        }
        e[null != a ? a : ''] = null != o ? o : m.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.gifs)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), m.internalBinaryWrite(e.gifs[r], t, n), t.join().join();
        !1 !== e.hideTooltip && t.tag(2, s.TD.Varint).bool(e.hideTooltip);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteGIFs', [
            {
                no: 1,
                name: 'gifs',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => m
                }
            },
            {
                no: 2,
                name: 'hide_tooltip',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let h = new f();
class p extends c.C {
    create(e) {
        let t = {
            format: 0,
            src: '',
            width: 0,
            height: 0,
            order: 0
        };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.format = e.int32();
                    break;
                case 2:
                    i.src = e.string();
                    break;
                case 3:
                    i.width = e.uint32();
                    break;
                case 4:
                    i.height = e.uint32();
                    break;
                case 5:
                    i.order = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.format && t.tag(1, s.TD.Varint).int32(e.format), '' !== e.src && t.tag(2, s.TD.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, s.TD.Varint).uint32(e.width), 0 !== e.height && t.tag(4, s.TD.Varint).uint32(e.height), 0 !== e.order && t.tag(5, s.TD.Varint).uint32(e.order);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteGIF', [
            {
                no: 1,
                name: 'format',
                kind: 'enum',
                T: () => ['discord_protos.discord_users.v1.GIFType', r]
            },
            {
                no: 2,
                name: 'src',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'width',
                kind: 'scalar',
                T: 13
            },
            {
                no: 4,
                name: 'height',
                kind: 'scalar',
                T: 13
            },
            {
                no: 5,
                name: 'order',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let m = new p();
class I extends c.C {
    create(e) {
        let t = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) {
                if (r === s.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) i.stickerIds.push(e.fixed64().toString());
                else i.stickerIds.push(e.fixed64().toString());
            } else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.stickerIds.length) {
            t.tag(1, s.TD.LengthDelimited).fork();
            for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteStickers', [
            {
                no: 1,
                name: 'sticker_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let T = new I();
class g extends c.C {
    create(e) {
        let t = { stickers: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.stickers, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.stickers)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.Bit64).fixed64(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.stickers[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.StickerFrecency', [
            {
                no: 1,
                name: 'stickers',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let S = new g();
class A extends c.C {
    create(e) {
        let t = { emojis: [] };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.emojis.push(e.string());
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, s.TD.LengthDelimited).string(e.emojis[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteEmojis', [
            {
                no: 1,
                name: 'emojis',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let v = new A();
class N extends c.C {
    create(e) {
        let t = { emojis: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.emojis, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis');
            }
        }
        e[null != a ? a : ''] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.emojis)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.emojis[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.EmojiFrecency', [
            {
                no: 1,
                name: 'emojis',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let O = new N();
class R extends c.C {
    create(e) {
        let t = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.applicationCommands, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands');
            }
        }
        e[null != a ? a : ''] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.applicationCommands)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.applicationCommands[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ApplicationCommandFrecency', [
            {
                no: 1,
                name: 'application_commands',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let C = new R();
class y extends c.C {
    create(e) {
        let t = {
            totalUses: 0,
            recentUses: [],
            frecency: 0,
            score: 0
        };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.totalUses = e.uint32();
                    break;
                case 2:
                    if (r === s.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) i.recentUses.push(e.uint64().toString());
                    else i.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    i.frecency = e.int32();
                    break;
                case 4:
                    i.score = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if ((0 !== e.totalUses && t.tag(1, s.TD.Varint).uint32(e.totalUses), e.recentUses.length)) {
            t.tag(2, s.TD.LengthDelimited).fork();
            for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
            t.join();
        }
        0 !== e.frecency && t.tag(3, s.TD.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, s.TD.Varint).int32(e.score);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FrecencyItem', [
            {
                no: 1,
                name: 'total_uses',
                kind: 'scalar',
                T: 13
            },
            {
                no: 2,
                name: 'recent_uses',
                kind: 'scalar',
                repeat: 1,
                T: 4
            },
            {
                no: 3,
                name: 'frecency',
                kind: 'scalar',
                T: 5
            },
            {
                no: 4,
                name: 'score',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let L = new y();
class b extends c.C {
    create(e) {
        let t = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) {
                if (r === s.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) i.soundIds.push(e.fixed64().toString());
                else i.soundIds.push(e.fixed64().toString());
            } else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.soundIds.length) {
            t.tag(1, s.TD.LengthDelimited).fork();
            for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteSoundboardSounds', [
            {
                no: 1,
                name: 'sound_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let D = new b();
class M extends c.C {
    create(e) {
        let t = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.heardSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds');
            }
        }
        e[null != a ? a : ''] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.heardSounds)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.heardSounds[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.HeardSoundFrecency', [
            {
                no: 1,
                name: 'heard_sounds',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let P = new M();
class U extends c.C {
    create(e) {
        let t = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.playedSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds');
            }
        }
        e[null != a ? a : ''] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.playedSounds)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.playedSounds[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.PlayedSoundFrecency', [
            {
                no: 1,
                name: 'played_sounds',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let w = new U();
class x extends c.C {
    create(e) {
        let t = { applications: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.applications, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications');
            }
        }
        e[null != a ? a : ''] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.applications)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.applications[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ApplicationFrecency', [
            {
                no: 1,
                name: 'applications',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let G = new x();
class k extends c.C {
    create(e) {
        let t = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(t, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.guildAndChannels, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.guildAndChannels)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.Bit64).fixed64(r), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.guildAndChannels[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GuildAndChannelFrecency', [
            {
                no: 1,
                name: 'guild_and_channels',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => L
                }
            }
        ]);
    }
}
let B = new k();
