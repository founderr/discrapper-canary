t(733860);
var i,
    a,
    s,
    l,
    r = t(392711),
    o = t.n(r),
    u = t(442837),
    d = t(570140),
    c = t(163268),
    E = t(786761),
    M = t(706454),
    g = t(592125),
    f = t(271383),
    m = t(430824),
    I = t(375954),
    _ = t(699516),
    Z = t(594174);
let S = {};
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = g.Z.getChannel(e),
        s = null != a ? a.getGuildId() : null;
    return {
        id: e,
        messages: n.map((e) => (0, E.e5)(e)),
        guildId: s,
        loaded: t,
        loading: i
    };
}
function A(e) {
    let { channel: n } = e;
    delete S[n.id];
}
function N() {
    o().forEach(S, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', _.Z.isBlockedForMessage(e)));
    });
}
class v extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, m.Z, f.ZP, I.Z, Z.default, M.default);
    }
    getPinnedMessages(e) {
        var n;
        return null !== (n = S[e]) && void 0 !== n ? n : void 0;
    }
    loaded(e) {
        return null != S[e] && S[e].loaded;
    }
}
(l = 'ChannelPinsStore'),
    (s = 'displayName') in (a = v)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (n.Z = new v(d.Z, {
        CONNECTION_OPEN: function () {
            S = {};
        },
        GUILD_DELETE: function (e) {
            let { guild: n } = e;
            S = o()(S)
                .filter((e) => e.guildId !== n.id)
                .keyBy('id')
                .value();
        },
        MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
                t = e.message.channel_id;
            if (null == t) return !1;
            let i = S[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
                if (null != i) {
                    let a = o().findIndex(i.messages, (e) => e.id === n);
                    if (a >= 0) {
                        let n = i.messages[a],
                            s = (0, E.wi)(n, e.message);
                        if (s !== n) {
                            let e = i.messages.slice();
                            (e[a] = s), (S[t].messages = e);
                        }
                    }
                }
                return;
            }
            if (e.message.pinned) {
                if (null == i) {
                    (i = h(t, [e.message], !1)), (S[t] = i);
                    return;
                }
                i.messages = i.messages.slice();
                let a = o().findIndex(i.messages, (e) => e.id === n);
                -1 === a ? i.messages.unshift((0, E.e5)(e.message)) : (i.messages[a] = (0, E.wi)(i.messages[a], e.message)), (S[t] = i);
            } else {
                if (null == i) return;
                let e = o().findIndex(i.messages, (e) => e.id === n);
                if (-1 === e) return;
                (i.messages = i.messages.slice()), i.messages.splice(e, 1), (S[t] = i);
            }
        },
        MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
                i = S[t];
            if (null == i || 0 === o().remove(i.messages, (e) => e.id === n).length) return !1;
            (i.messages = i.messages.slice()), (S[t] = i);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
                i = S[t];
            if (null != i) i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
        },
        LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            S[n] = h(n, [], !1, !0);
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            S[n] = h(n, t, !0);
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete S[n];
        },
        CHANNEL_DELETE: A,
        THREAD_DELETE: A,
        RELATIONSHIP_ADD: N,
        RELATIONSHIP_REMOVE: N,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
                i = S[t];
            if (null == i) return;
            let a = o().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== a) (i.messages = i.messages.slice()), (i.messages[a] = (0, c.Cm)(i.messages[a])), (S[t] = i);
        }
    }));
