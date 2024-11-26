n(47120);
var r = n(108131),
    i = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(147913),
    l = n(662896),
    u = n(710845),
    c = n(339085),
    d = n(926491),
    f = n(592125),
    _ = n(430824),
    p = n(709054),
    h = n(38618);
let m = new u.Z('EntityVersionsManager');
class g extends o.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', v);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', v);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                GUILD_CREATE: I,
                DELETED_ENTITY_IDS: E
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
function E(e) {
    var t;
    let n = null === (t = _.Z.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
    m.fileOnly('received deleted guild entities (id: '.concat(e.guild_id, ', name: ').concat(n, ')')),
        a.ZP.Emitter.batched(() => {
            null != e.channels &&
                (function (e, t) {
                    let n = p.default.keys(f.Z.getMutableBasicGuildChannelsForGuild(e));
                    m.fileOnly('syncChannels', {
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
                })(e.guild_id, new Set(e.channels)),
                null != e.roles &&
                    (function (e, t) {
                        p.default.keys(_.Z.getRoles(e)).forEach((n) => {
                            !t.has(n) &&
                                s.Z.dispatch({
                                    type: 'GUILD_ROLE_DELETE',
                                    guildId: e,
                                    roleId: n
                                });
                        });
                    })(e.guild_id, new Set(e.roles)),
                null != e.emojis &&
                    (function (e, t) {
                        let n = c.ZP.getGuildEmoji(e),
                            r = n.filter((e) => t.has(e.id));
                        n.length !== r.length &&
                            s.Z.dispatch({
                                type: 'GUILD_EMOJIS_UPDATE',
                                guildId: e,
                                emojis: r
                            });
                    })(e.guild_id, new Set(e.emojis)),
                null != e.stickers &&
                    (function (e, t) {
                        var n;
                        let r = null !== (n = d.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [],
                            i = r.filter((e) => t.has(e.id));
                        r.length !== i.length &&
                            s.Z.dispatch({
                                type: 'GUILD_STICKERS_UPDATE',
                                guildId: e,
                                stickers: i
                            });
                    })(e.guild_id, new Set(e.stickers));
        });
}
function v() {
    l.Z.getAll().then((e) => {
        e.forEach((e) => T(e));
    });
}
function I(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && T(t.id);
}
function T(e) {
    setTimeout(
        () =>
            (function (e) {
                var t, n, r;
                let i = null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
                m.fileOnly('requesting deleted guild entities (id: '.concat(e, ', name: ').concat(i, ')'));
                let a = b(Object.keys(f.Z.getMutableBasicGuildChannelsForGuild(e))),
                    s = b(Object.keys(_.Z.getRoles(e))),
                    o = b(c.ZP.getGuildEmoji(e).map((e) => e.id)),
                    l = b(null !== (r = null === (n = d.Z.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== r ? r : []);
                h.Z.getSocket().getDeletedEntityIdsNotMatchingHash(e, a, s, o, l);
            })(e),
        Math.ceil(2000 * Math.random())
    );
}
function b(e) {
    return i().v3(e.sort().join(',')).toString();
}
t.Z = new g();
