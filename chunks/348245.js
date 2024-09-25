let r;
var i = n(47120);
var a = n(266067),
    o = n(259443),
    s = n(433517),
    l = n(570140),
    u = n(668781),
    c = n(904245),
    d = n(593472),
    _ = n(147913),
    E = n(89892),
    f = n(702321),
    h = n(38618),
    p = n(897473),
    m = n(131704),
    I = n(433355),
    T = n(592125),
    g = n(430824),
    S = n(306680),
    A = n(944486),
    v = n(914010),
    N = n(70956),
    O = n(198620),
    R = n(981631),
    C = n(176505),
    y = n(689938);
function b(e, t, n) {
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
let L = new o.Y('MessageManager');
function D(e) {
    let { guildId: t, channelId: n, messageId: r, forceFetch: i, isPreload: a, jumpType: o, skipLocalFetch: s, logFailures: l } = e;
    if (null == n) {
        l && L.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, C.AB)(n)) {
        l && L.log('Skipping fetch because channelId is a static route');
        return;
    }
    let u = T.Z.getChannel(n);
    if ((null == u ? void 0 : u.type) === R.d4z.GUILD_STORE || ((null == u ? void 0 : u.type) != null && R.TPd.GUILD_THREADS_ONLY.has(u.type))) {
        l && L.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let _ = E.Z.getOrCreate(n);
    _.some(O.k5) && (L.log('Found expired attachment link, clearing messages'), E.Z.clear(n), (_ = E.Z.getOrCreate(n))),
        null != _.jumpTargetId &&
            null == r &&
            ((_ = _.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: d.SR.ANIMATED
            })),
            E.Z.commit(_)),
        null != _.focusTargetId && null == r && ((_ = _.mutate({ focusTargetId: null })), E.Z.commit(_));
    let p = i;
    if ((!a || h.Z.isConnected() || _.loadingMore ? (_.loadingMore || (_.ready && !_.cached) ? (null != r ? (p = !0) : l && L.log('Skipping fetch because no other conditions matched')) : null == t || null != g.Z.getGuild(t) ? (p = !0) : l && L.log('Skipping fetch we are connected and have loaded messages')) : (p = !0), (0, f.Z)(n) && S.ZP.hasUnread(n) && (p = !0), p)) {
        if ((E.Z.commit(_.mutate({ loadingMore: !0 })), null != r))
            c.Z.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: s,
                jumpType: o
            });
        else if ((null == u ? void 0 : u.isThread()) && U(n))
            L.log('Jumping to start of thread '.concat(u.id)),
                c.Z.fetchMessages({
                    channelId: n,
                    limit: R.AQB,
                    jump: {
                        messageId: n,
                        flash: !1
                    },
                    isPreload: a,
                    skipLocalFetch: s
                });
        else if ((null == u ? void 0 : u.isThread()) && S.ZP.hasTrackedUnread(u.id) && !_.ready) {
            let e = S.ZP.getTrackedAckMessageId(u.id);
            L.log('Jumping to most recent message in thread '.concat(u.id, ' - ').concat(e)),
                c.Z.fetchMessages({
                    channelId: n,
                    limit: R.AQB,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: a,
                    skipLocalFetch: s
                });
        } else
            c.Z.fetchMessages({
                channelId: n,
                limit: R.AQB,
                isPreload: a,
                skipLocalFetch: s,
                jump: { jumpType: d.SR.ANIMATED }
            });
    }
}
let M = 90 * N.Z.Millis.DAY,
    P = 'viewedThreadIds';
function U(e) {
    if (S.ZP.hasOpenedThread(e)) return !1;
    if (null == r) {
        var t;
        r = null !== (t = s.K.get(P, {})) && void 0 !== t ? t : {};
    }
    if (e in r) return !1;
    r[e] = Date.now();
    let n = Date.now() - M;
    for (let e in r) r[e] < n && delete r[e];
    return s.K.set(P, r), !0;
}
function w() {
    let e = A.Z.getChannelId();
    if (null != e) {
        let n = T.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, a.LX)(location.pathname, {
                path: R.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            D({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
            }),
                B(n.getGuildId(), n.id);
        }
    }
}
function x() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = A.Z.getChannelId();
    if (null != r) {
        let i = T.Z.getChannel(r);
        null != i
            ? ((0, m.Qm)(i.type)
                  ? D({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && L.log('Skipping fetch because the selected channel is not a text channel'),
              B(i.getGuildId(), i.id))
            : n && L.log('Skipping fetch because channel is null');
    } else n && L.log('Skipping fetch because there is no selected channel');
}
function G(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    D({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        B(t, n);
}
function k(e) {
    let { guildId: t, channelId: n } = e;
    D({
        guildId: t,
        channelId: n
    });
}
function B(e, t) {
    let n = I.ZP.getCurrentSidebarChannelId(t);
    if (null != n)
        D({
            guildId: e,
            channelId: n,
            messageId: I.ZP.getCurrentSidebarMessageId(t)
        });
}
function F() {
    let e = A.Z.getChannelId(),
        t = v.Z.getGuildId();
    if (null == t || null == e) return;
    let n = I.ZP.getSidebarState(e);
    if ((null == n ? void 0 : n.type) !== p.tI.VIEW_CHANNEL) B(t, e);
}
function Z(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === R.e3s &&
        (D({
            guildId: t,
            channelId: n
        }),
        B(t, n));
}
function V(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        A.Z.getChannelId(r) === t.id &&
        D({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function H(e) {
    let { channelId: t } = e;
    c.Z.fetchMessages({
        channelId: t,
        limit: R.AQB
    });
}
function Y(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === R.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            u.Z.show({
                title: y.Z.Messages.RATE_LIMITED,
                body: y.Z.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({ retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let j = {};
function W(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let o = null !== (t = j[n]) && void 0 !== t ? t : 0;
    if (Date.now() - o < 10 * N.Z.Millis.SECOND) return;
    j[n] = Date.now();
    let s = A.Z.getChannelId(),
        l = I.ZP.getCurrentSidebarChannelId(s),
        u = n === s || n === l;
    i &&
        h.Z.isConnected() &&
        u &&
        c.Z.fetchMessages({
            channelId: n,
            limit: R.AQB,
            jump: r
        });
}
function K(e) {
    let { channelId: t, messageRecord: n, reason: r } = e;
    null != n &&
        l.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function z(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = A.Z.getChannelId();
    if (null == n) return !1;
    c.Z.fetchNewLocalMessages(n, R.AQB);
}
class q extends _.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', w);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', w);
    }
    constructor(...e) {
        super(...e),
            b(this, 'fetchMessages', D),
            b(this, 'loadSelectedChannelIfNecessary', x),
            b(this, 'stores', new Map().set(I.ZP, F)),
            b(this, 'actions', {
                APP_STATE_UPDATE: z,
                OVERLAY_INITIALIZE: w,
                CHANNEL_SELECT: G,
                VOICE_CHANNEL_SELECT: k,
                THREAD_CREATE: V,
                THREAD_LIST_SYNC: () => x(),
                CHANNEL_CREATE: V,
                CHANNEL_PRELOAD: Z,
                THREAD_CREATE_LOCAL: H,
                GUILD_CREATE: () => x(),
                MESSAGE_END_EDIT: Y,
                LOAD_MESSAGES_SUCCESS: W,
                UPLOAD_FAIL: K,
                CHANNEL_DELETE: () => x(),
                THREAD_DELETE: () => x()
            });
    }
}
t.Z = new q();
