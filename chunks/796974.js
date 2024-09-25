var r,
    i = n(442837),
    a = n(902704),
    o = n(570140);
function s(e, t, n) {
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
let l = {},
    u = {},
    c = { scrollTop: 0 };
function d(e) {
    return {
        guildId: e,
        scrollTop: null,
        scrollTo: null
    };
}
function _(e) {
    let { channelId: t, scrollTop: n, scrollHeight: r, offsetHeight: i } = e,
        o = l[t];
    if (null == n || null == r || null == i) {
        if (null == o) return !1;
        delete l[t];
    } else {
        let e = {
            channelId: t,
            scrollTop: n,
            scrollHeight: r,
            offsetHeight: i
        };
        if (null != o && (0, a.Z)(o, e)) return !1;
        l[t] = e;
    }
}
function E(e) {
    let { scrollTop: t } = e;
    c.scrollTop = t;
}
function f(e) {
    let { channelId: t } = e;
    h(t) && delete l[t];
}
function h(e) {
    if (null == l[e]) return;
    let { scrollTop: t, scrollHeight: n, offsetHeight: r } = l[e];
    return t === n - r;
}
function p(e) {
    let { guildId: t, scrollTop: n, scrollTo: r } = e;
    null == u[t] && (u[t] = d(t)), void 0 !== n && (u[t].scrollTop = n);
    let i = !1;
    return void 0 !== r && ((i = u[t].scrollTo !== r), (u[t].scrollTo = r)), null != r || i;
}
class m extends (r = i.ZP.Store) {
    percentageScrolled(e) {
        if (null != l[e]) {
            let { scrollTop: t, scrollHeight: n } = l[e];
            return t / n;
        }
        return 1;
    }
    getChannelDimensions(e) {
        return l[e];
    }
    getGuildDimensions(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : d(e);
    }
    getGuildListDimensions() {
        return c;
    }
    isAtBottom(e) {
        return h(e);
    }
}
s(m, 'displayName', 'DimensionStore'),
    (t.Z = new m(o.Z, {
        UPDATE_CHANNEL_DIMENSIONS: _,
        UPDATE_CHANNEL_LIST_DIMENSIONS: p,
        UPDATE_GUILD_LIST_DIMENSIONS: E,
        CALL_CREATE: f
    }));
