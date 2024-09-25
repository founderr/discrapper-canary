var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = { topEmojisByGuildId: {} },
    l = s,
    u = {};
function c() {
    (l = s), (u = {});
}
function d(e) {
    let { guildId: t } = e;
    u[t] = !0;
}
function _(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    (l.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (u[t] = !1);
}
class E extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : s;
    }
    getState() {
        return l;
    }
    getTopEmojiIdsByGuildId(e) {
        return l.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
        return u[e];
    }
}
o(E, 'displayName', 'TopEmojiStore'),
    o(E, 'persistKey', 'TopEmojiStore'),
    (t.Z = new E(a.Z, {
        LOGOUT: c,
        TOP_EMOJIS_FETCH: d,
        TOP_EMOJIS_FETCH_SUCCESS: _
    }));
