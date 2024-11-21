let r;
n(47120);
var i = n(512969),
    a = n(259443),
    s = n(433517),
    o = n(570140),
    l = n(668781),
    u = n(904245),
    c = n(593472),
    d = n(147913),
    f = n(89892),
    _ = n(702321),
    p = n(38618),
    h = n(897473),
    m = n(131704),
    g = n(433355),
    E = n(592125),
    v = n(430824),
    I = n(306680),
    b = n(944486),
    T = n(914010),
    S = n(70956),
    y = n(198620),
    A = n(981631),
    N = n(176505),
    C = n(388032);
function R(e, t, n) {
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
let O = new a.Yd('MessageManager');
function D(e) {
    let { guildId: t, channelId: n, messageId: i, forceFetch: a, isPreload: o, jumpType: l, skipLocalFetch: d, logFailures: h } = e;
    if (null == n) {
        h && O.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, N.AB)(n)) {
        h && O.log('Skipping fetch because channelId is a static route');
        return;
    }
    let m = E.Z.getChannel(n);
    if ((null == m ? void 0 : m.type) === A.d4z.GUILD_STORE || ((null == m ? void 0 : m.type) != null && A.TPd.GUILD_THREADS_ONLY.has(m.type))) {
        h && O.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let g = f.Z.getOrCreate(n);
    g.some(y.k5) && (O.log('Found expired attachment link, clearing messages'), f.Z.clear(n), (g = f.Z.getOrCreate(n))),
        null != g.jumpTargetId &&
            null == i &&
            ((g = g.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: c.SR.ANIMATED
            })),
            f.Z.commit(g)),
        null != g.focusTargetId && null == i && ((g = g.mutate({ focusTargetId: null })), f.Z.commit(g));
    let b = a;
    if ((!o || p.Z.isConnected() || g.loadingMore ? (g.loadingMore || (g.ready && !g.cached) ? (null != i ? (b = !0) : h && O.log('Skipping fetch because no other conditions matched')) : null == t || null != v.Z.getGuild(t) ? (b = !0) : h && O.log('Skipping fetch we are connected and have loaded messages')) : (b = !0), (0, _.Z)(n) && I.ZP.hasUnread(n) && (b = !0), b)) {
        if ((f.Z.commit(g.mutate({ loadingMore: !0 })), null != i))
            u.Z.jumpToMessage({
                channelId: n,
                messageId: i,
                flash: !0,
                isPreload: o,
                skipLocalFetch: d,
                jumpType: l
            });
        else {
            if (
                (null == m ? void 0 : m.isThread()) &&
                (function (e) {
                    if (I.ZP.hasOpenedThread(e)) return !1;
                    if (null == r) {
                        var t;
                        r = null !== (t = s.K.get(x, {})) && void 0 !== t ? t : {};
                    }
                    if (e in r) return !1;
                    r[e] = Date.now();
                    let n = Date.now() - L;
                    for (let e in r) r[e] < n && delete r[e];
                    return s.K.set(x, r), !0;
                })(n)
            )
                return (
                    O.log('Jumping to start of thread '.concat(m.id)),
                    u.Z.fetchMessages({
                        channelId: n,
                        limit: A.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: o,
                        skipLocalFetch: d
                    })
                );
            if (!((null == m ? void 0 : m.isThread()) && I.ZP.hasTrackedUnread(m.id)) || g.ready)
                return u.Z.fetchMessages({
                    channelId: n,
                    limit: A.AQB,
                    isPreload: o,
                    skipLocalFetch: d,
                    jump: { jumpType: c.SR.ANIMATED }
                });
            else {
                let e = I.ZP.getTrackedAckMessageId(m.id);
                return (
                    O.log('Jumping to most recent message in thread '.concat(m.id, ' - ').concat(e)),
                    u.Z.fetchMessages({
                        channelId: n,
                        limit: A.AQB,
                        jump: {
                            messageId: e,
                            flash: !1,
                            offset: 1
                        },
                        isPreload: o,
                        skipLocalFetch: d
                    })
                );
            }
        }
    }
}
let L = 90 * S.Z.Millis.DAY,
    x = 'viewedThreadIds';
function w() {
    let e = b.Z.getChannelId();
    if (null != e) {
        let n = E.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, i.LX)(location.pathname, {
                path: A.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            D({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
            }),
                U(n.getGuildId(), n.id);
        }
    }
}
function M() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = b.Z.getChannelId();
    if (null != r) {
        let i = E.Z.getChannel(r);
        null != i
            ? ((0, m.Qm)(i.type)
                  ? D({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && O.log('Skipping fetch because the selected channel is not a text channel'),
              U(i.getGuildId(), i.id))
            : n && O.log('Skipping fetch because channel is null');
    } else n && O.log('Skipping fetch because there is no selected channel');
}
function P(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    D({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        U(t, n);
}
function k(e) {
    let { guildId: t, channelId: n } = e;
    D({
        guildId: t,
        channelId: n
    });
}
function U(e, t) {
    let n = g.ZP.getCurrentSidebarChannelId(t);
    if (null != n)
        D({
            guildId: e,
            channelId: n,
            messageId: g.ZP.getCurrentSidebarMessageId(t)
        });
}
function G() {
    let e = b.Z.getChannelId(),
        t = T.Z.getGuildId();
    if (null == t || null == e) return;
    let n = g.ZP.getSidebarState(e);
    if ((null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL) U(t, e);
}
function B(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === A.e3s &&
        (D({
            guildId: t,
            channelId: n
        }),
        U(t, n));
}
function Z(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        b.Z.getChannelId(r) === t.id &&
        D({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function F(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === A.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: C.intl.string(C.t['Whhv4+']),
                body: C.intl.formatToPlainString(C.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let V = {};
function j(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let s = null !== (t = V[n]) && void 0 !== t ? t : 0;
    if (Date.now() - s < 10 * S.Z.Millis.SECOND) return;
    V[n] = Date.now();
    let o = b.Z.getChannelId(),
        l = g.ZP.getCurrentSidebarChannelId(o),
        c = n === o || n === l;
    i &&
        p.Z.isConnected() &&
        c &&
        u.Z.fetchMessages({
            channelId: n,
            limit: A.AQB,
            jump: r
        });
}
function H(e) {
    let { channelId: t, messageRecord: n, reason: r } = e;
    null != n &&
        o.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function Y(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = b.Z.getChannelId();
    if (null == n) return !1;
    u.Z.fetchNewLocalMessages(n, A.AQB);
}
class W extends d.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', w);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', w);
    }
    constructor(...e) {
        super(...e),
            R(this, 'fetchMessages', D),
            R(this, 'loadSelectedChannelIfNecessary', M),
            R(this, 'stores', new Map().set(g.ZP, G)),
            R(this, 'actions', {
                APP_STATE_UPDATE: Y,
                OVERLAY_INITIALIZE: w,
                CHANNEL_SELECT: P,
                VOICE_CHANNEL_SELECT: k,
                THREAD_CREATE: Z,
                THREAD_LIST_SYNC: () => M(),
                CHANNEL_CREATE: Z,
                CHANNEL_PRELOAD: B,
                GUILD_CREATE: () => M(),
                MESSAGE_END_EDIT: F,
                LOAD_MESSAGES_SUCCESS: j,
                UPLOAD_FAIL: H,
                CHANNEL_DELETE: () => M(),
                THREAD_DELETE: () => M()
            });
    }
}
t.Z = new W();
