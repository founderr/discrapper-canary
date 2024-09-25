n.d(t, {
    b2: function () {
        return M;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(952639),
    o = n.n(a),
    s = n(605906),
    l = n.n(s),
    u = n(286379),
    c = n(570140),
    d = n(147913),
    _ = n(786761),
    E = n(797614),
    f = n(869765),
    h = n(314897),
    p = n(433355),
    m = n(592125),
    I = n(375954),
    T = n(944486),
    g = n(914010),
    S = n(709054),
    A = n(93735),
    v = n(522664),
    N = n(651530),
    O = n(163268),
    R = n(735020),
    C = n(774863),
    y = n(799525),
    b = n(981631),
    L = n(526761);
function D(e, t, n) {
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
let M = 3000,
    P = 800,
    U = {};
function w(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function x() {
    Object.values(U).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (U = {});
}
function G(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = w(e);
    if (null != U[n]) {
        let { timeout: r } = U[n];
        return clearTimeout(r), k(e, t), delete U[n], !0;
    }
    return !1;
}
function k(e, t) {
    let { setAt: n } = U[w(e)];
    if (t === O.Pq.UPDATE) {
        var r, i;
        let t = null !== (r = e.attachments) && void 0 !== r ? r : [],
            n = null !== (i = e.embeds) && void 0 !== i ? i : [],
            a = t.filter((e) =>
                (0, O.KP)(
                    {
                        type: O.lJ.Attachment,
                        media: e
                    },
                    !0
                )
            ),
            o = n.filter((e) =>
                (0, O.KP)(
                    {
                        type: O.lJ.Embed,
                        media: e
                    },
                    !0
                )
            );
        (0, O.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: o.length
        });
    }
    (0, O.OP)(n, t);
}
function B(e) {
    if (G(e, O.Pq.TIMEOUT)) {
        let t = I.Z.getMessage(e.channel_id, e.id),
            { attachmentIds: n, embedIds: r } = (0, A.ZW)(t);
        (0, O.Hc)({
            channelId: e.channel_id,
            messageId: e.id,
            attachmentIds: n,
            embedIds: r
        }),
            c.Z.dispatch({
                type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
                messageId: e.id,
                channelId: e.channel_id
            });
    }
}
let F = (e, t) => {
    if (0 !== e.length) {
        if (t) {
            (0, v.gx)(e);
            return;
        }
        (0, v.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function Z(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(A.N7) : e;
    i.forEach((e) => {
        let t = w(e);
        null == U[t] &&
            (E.Z.increment({ name: u.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (U[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    B(e);
                }, M)
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              F(
                  i.filter((e) => null != U[w(e)]),
                  a
              );
          }, Math.random() * P)
        : F(i, a);
}
function V(e) {
    let t = C.Z.validContentScanVersion;
    return e.reduce((e, n) => {
        var r, i, a, o, s, l, u, c;
        null == e[n.channel_id] &&
            (e[n.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let d = e[n.channel_id];
        return (
            (d.numOfAttachments += null !== (s = null === (r = n.attachments) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0),
            (d.numOfEmbeds += null !== (l = null === (i = n.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0),
            (d.numOfAttachmentsPendingScan += null !== (u = null === (a = n.attachments) || void 0 === a ? void 0 : a.filter((e) => (0, A.CN)(e, t)).length) && void 0 !== u ? u : 0),
            (d.numOfEmbedsPendingScan += null !== (c = null == n ? void 0 : null === (o = n.embeds) || void 0 === o ? void 0 : o.filter((e) => (0, A.fj)(e, t)).length) && void 0 !== c ? c : 0),
            {
                ...e,
                [n.channel_id]: d
            }
        );
    }, {});
}
function H(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, A.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, A.OR)(e.referenced_message) && (0, O.HH)(e.referenced_message)) return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = l()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: i.filter((e) => (0, A.xG)(e)),
        attributesByChannelId: V(i)
    };
}
function Y(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, A.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (b.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, A.OR)(t.message) && (0, O.HH)(t.message)) return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = l()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: i.filter((e) => (0, A.xG)(e)),
        attributesByChannelId: V(i)
    };
}
function j(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r } = H(e);
    return (
        S.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        !!(n.length > 0) && (Z(n, t), !0)
    );
}
function W(e) {
    let { messagesPendingScan: t, attributesByChannelId: n } = Y(e);
    return (
        S.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        !!(t.length > 0) && (Z(t), !0)
    );
}
function K(e) {
    var t, n, r, i, a, o;
    let { message: s } = e;
    if (!(0, N.Kh)() || null == s.channel_id || null == s.id || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === h.default.getId() || (null == s.embeds && null == s.attachments) || ((null === (n = s.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (r = s.attachments) || void 0 === r ? void 0 : r.length) === 0)) return !1;
    if (!(0, A.N7)(s)) {
        let e = null !== (o = null !== (a = I.Z.getMessage(s.channel_id, s.id)) && void 0 !== a ? a : R.Z.getMessage(s.id, s.channel_id)) && void 0 !== o ? o : null === (i = f.Z.getMessage(s.channel_id, s.id)) || void 0 === i ? void 0 : i.message;
        null != e && !(0, A.N7)((0, _.wi)(e, s)) && G(e, O.Pq.UPDATE);
    }
    let l = T.Z.getChannelId(),
        u = p.ZP.getCurrentSidebarChannelId(l);
    if (!(s.channel_id === l || s.channel_id === u)) return !1;
    let c = I.Z.getMessage(s.channel_id, s.id);
    return null != c && j([c], { isMessageUpdate: !0 });
}
function z(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: o } = e;
    if (!(0, N.Kh)() || a || o || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === h.default.getId()) return !1;
    let s = T.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(s),
        u = r === s || r === l,
        c = m.Z.getChannel(r);
    if (!u) return !1;
    let d = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
        _ = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
    return j([i], { jitter: d && _ });
}
function q(e) {
    let { channelId: t, messages: n } = e;
    if (!(0, N.Kh)() || null == t || null == n) return !1;
    let r = T.Z.getChannelId(),
        i = p.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && j(n);
}
function Q(e) {
    let { messages: t } = e;
    if (!(0, N.Kh)() || null == t) return !1;
    let n = o()(t);
    return j(l()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function X(e) {
    let { guildId: t, threads: n } = e;
    return !!(null != n && (0, N.Kh)()) && g.Z.getGuildId() === t && j(S.default.keys(n).map((e) => n[e].first_message));
}
function $(e) {
    let { guildId: t, firstMessages: n } = e;
    return !!(null != n && (0, N.Kh)()) && g.Z.getGuildId() === t && j(n, { forceBatchScan: !0 });
}
function J(e) {
    (0, y.U)();
    let { channelId: t } = e;
    return !!(null != t && (0, N.Kh)()) && t === T.Z.getChannelId() && en(t);
}
function ee(e) {
    let { settings: t, local: n } = e;
    if (!(0, N.Kh)() || !n || t.type !== L.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = T.Z.getChannelId();
    return null != r && en(r);
}
function et(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!(0, N.Kh)() && !!n && en(t);
}
function en(e) {
    let t = I.Z.getMessages(e);
    return 0 !== t.length && W(t);
}
class er extends d.Z {
    constructor(...e) {
        super(...e),
            D(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: q,
                LOAD_FORUM_POSTS: X,
                LOAD_THREADS_SUCCESS: $,
                LOAD_ARCHIVED_THREADS_SUCCESS: $,
                MESSAGE_CREATE: z,
                MESSAGE_UPDATE: K,
                LOGOUT: x,
                SEARCH_FINISH: Q,
                MOD_VIEW_SEARCH_FINISH: Q,
                CHANNEL_SELECT: J,
                LOAD_PINNED_MESSAGES_SUCCESS: Q,
                USER_SETTINGS_PROTO_UPDATE: ee,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: et
            });
    }
}
t.ZP = new er();
