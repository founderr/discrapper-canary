var i = r(47120);
var a = r(108131),
    s = r.n(a),
    o = r(442837),
    l = r(570140),
    u = r(147913),
    c = r(662896),
    d = r(710845),
    f = r(339085),
    _ = r(926491),
    h = r(592125),
    p = r(430824),
    m = r(709054),
    g = r(38618);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = 2000,
    I = new d.Z('EntityVersionsManager');
class T extends u.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', y);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', y);
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                GUILD_CREATE: S,
                DELETED_ENTITY_IDS: b
            });
    }
}
function b(e) {
    var n;
    let r = null === (n = p.Z.getGuild(e.guild_id)) || void 0 === n ? void 0 : n.name;
    I.fileOnly('received deleted guild entities (id: '.concat(e.guild_id, ', name: ').concat(r, ')')),
        o.ZP.Emitter.batched(() => {
            null != e.channels && R(e.guild_id, new Set(e.channels)), null != e.roles && O(e.guild_id, new Set(e.roles)), null != e.emojis && D(e.guild_id, new Set(e.emojis)), null != e.stickers && L(e.guild_id, new Set(e.stickers));
        });
}
function y() {
    c.Z.getAll().then((e) => {
        e.forEach((e) => A(e));
    });
}
function S(e) {
    let { guild: n } = e;
    n.unableToSyncDeletes && A(n.id);
}
function A(e) {
    setTimeout(() => N(e), Math.ceil(Math.random() * v));
}
function N(e) {
    var n, r, i;
    let a = null === (n = p.Z.getGuild(e)) || void 0 === n ? void 0 : n.name;
    I.fileOnly('requesting deleted guild entities (id: '.concat(e, ', name: ').concat(a, ')'));
    let s = C(Object.keys(h.Z.getMutableBasicGuildChannelsForGuild(e))),
        o = C(Object.keys(p.Z.getRoles(e))),
        l = C(f.ZP.getGuildEmoji(e).map((e) => e.id)),
        u = C(null !== (i = null === (r = _.Z.getStickersByGuildId(e)) || void 0 === r ? void 0 : r.map((e) => e.id)) && void 0 !== i ? i : []);
    g.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, s, o, l, u);
}
function C(e) {
    return s().v3(e.sort().join(',')).toString();
}
function R(e, n) {
    let r = m.default.keys(h.Z.getMutableBasicGuildChannelsForGuild(e));
    I.fileOnly('syncChannels', {
        channelIdsInMemory: r,
        channelIdsFromServer: n
    }),
        r.forEach((r) => {
            !n.has(r) &&
                l.Z.dispatch({
                    type: 'CHANNEL_DELETE',
                    channel: {
                        guild_id: e,
                        id: r,
                        parent_id: void 0
                    }
                });
        });
}
function O(e, n) {
    m.default.keys(p.Z.getRoles(e)).forEach((r) => {
        !n.has(r) &&
            l.Z.dispatch({
                type: 'GUILD_ROLE_DELETE',
                guildId: e,
                roleId: r
            });
    });
}
function D(e, n) {
    let r = f.ZP.getGuildEmoji(e),
        i = r.filter((e) => n.has(e.id));
    r.length !== i.length &&
        l.Z.dispatch({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e,
            emojis: i
        });
}
function L(e, n) {
    var r;
    let i = null !== (r = _.Z.getStickersByGuildId(e)) && void 0 !== r ? r : [],
        a = i.filter((e) => n.has(e.id));
    i.length !== a.length &&
        l.Z.dispatch({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e,
            stickers: a
        });
}
n.Z = new T();
