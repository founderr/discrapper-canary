var r = n(47120);
var i = n(108131),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(147913),
    u = n(662896),
    c = n(710845),
    d = n(339085),
    _ = n(926491),
    E = n(592125),
    f = n(430824),
    h = n(709054),
    p = n(38618);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = 2000,
    T = new c.Z('EntityVersionsManager');
class g extends l.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', A);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', A);
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_CREATE: v,
                DELETED_ENTITY_IDS: S
            });
    }
}
function S(e) {
    var t;
    let n = null === (t = f.Z.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
    T.fileOnly('received deleted guild entities (id: '.concat(e.guild_id, ', name: ').concat(n, ')')),
        o.ZP.Emitter.batched(() => {
            null != e.channels && C(e.guild_id, new Set(e.channels)), null != e.roles && y(e.guild_id, new Set(e.roles)), null != e.emojis && b(e.guild_id, new Set(e.emojis)), null != e.stickers && L(e.guild_id, new Set(e.stickers));
        });
}
function A() {
    u.Z.getAll().then((e) => {
        e.forEach((e) => N(e));
    });
}
function v(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && N(t.id);
}
function N(e) {
    setTimeout(() => O(e), Math.ceil(Math.random() * I));
}
function O(e) {
    var t, n, r;
    let i = null === (t = f.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
    T.fileOnly('requesting deleted guild entities (id: '.concat(e, ', name: ').concat(i, ')'));
    let a = R(Object.keys(E.Z.getMutableBasicGuildChannelsForGuild(e))),
        o = R(Object.keys(f.Z.getRoles(e))),
        s = R(d.ZP.getGuildEmoji(e).map((e) => e.id)),
        l = R(null !== (r = null === (n = _.Z.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== r ? r : []);
    p.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, o, s, l);
}
function R(e) {
    return a().v3(e.sort().join(',')).toString();
}
function C(e, t) {
    let n = h.default.keys(E.Z.getMutableBasicGuildChannelsForGuild(e));
    T.fileOnly('syncChannels', {
        channelIdsInMemory: n,
        channelIdsFromServer: t
    }),
        n.forEach((n) => {
            !t.has(n) &&
                s.Z.dispatch({
                    type: 'CHANNEL_DELETE',
                    channel: {
                        guild_id: e,
                        id: n,
                        parent_id: void 0
                    }
                });
        });
}
function y(e, t) {
    h.default.keys(f.Z.getRoles(e)).forEach((n) => {
        !t.has(n) &&
            s.Z.dispatch({
                type: 'GUILD_ROLE_DELETE',
                guildId: e,
                roleId: n
            });
    });
}
function b(e, t) {
    let n = d.ZP.getGuildEmoji(e),
        r = n.filter((e) => t.has(e.id));
    n.length !== r.length &&
        s.Z.dispatch({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e,
            emojis: r
        });
}
function L(e, t) {
    var n;
    let r = null !== (n = _.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [],
        i = r.filter((e) => t.has(e.id));
    r.length !== i.length &&
        s.Z.dispatch({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e,
            stickers: i
        });
}
t.Z = new g();
