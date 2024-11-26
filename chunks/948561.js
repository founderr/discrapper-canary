n.d(t, {
    b2: function () {
        return O;
    }
}),
    n(47120),
    n(724458);
var r = n(952639),
    i = n.n(r),
    a = n(605906),
    s = n.n(a),
    o = n(286379),
    l = n(570140),
    u = n(147913),
    c = n(786761),
    d = n(797614),
    f = n(869765),
    _ = n(314897),
    p = n(433355),
    h = n(592125),
    m = n(375954),
    g = n(944486),
    E = n(914010),
    v = n(709054),
    I = n(93735),
    T = n(522664),
    b = n(651530),
    S = n(247206),
    y = n(735020),
    A = n(774863),
    N = n(799525),
    C = n(981631),
    R = n(526761);
let O = 3000,
    D = {};
function L(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function x() {
    Object.values(D).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (D = {});
}
function w(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = L(e);
    if (null != D[n]) {
        let { timeout: r } = D[n];
        return (
            clearTimeout(r),
            (function (e, t) {
                let { setAt: n } = D[L(e)];
                if (t === S.Pq.UPDATE) {
                    var r, i;
                    let t = null !== (r = e.attachments) && void 0 !== r ? r : [],
                        n = null !== (i = e.embeds) && void 0 !== i ? i : [],
                        a = t.filter((e) =>
                            (0, S.KP)(
                                {
                                    type: S.lJ.Attachment,
                                    media: e
                                },
                                !0
                            )
                        ),
                        s = n.filter((e) =>
                            (0, S.KP)(
                                {
                                    type: S.lJ.Embed,
                                    media: e
                                },
                                !0
                            )
                        );
                    (0, S.xx)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: a.length,
                        numOfExplicitEmbeds: s.length
                    });
                }
                (0, S.OP)(n, t);
            })(e, t),
            delete D[n],
            !0
        );
    }
    return !1;
}
let P = (e, t) => {
    if (0 !== e.length) {
        if (t) {
            (0, T.gx)(e);
            return;
        }
        (0, T.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function M(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(I.N7) : e;
    i.forEach((e) => {
        let t = L(e);
        null == D[t] &&
            (d.Z.increment({ name: o.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (w(e, S.Pq.TIMEOUT)) {
                            let t = m.Z.getMessage(e.channel_id, e.id),
                                { attachmentIds: n, embedIds: r } = (0, I.ZW)(t);
                            (0, S.Hc)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: r
                            }),
                                l.Z.dispatch({
                                    type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
                                    messageId: e.id,
                                    channelId: e.channel_id
                                });
                        }
                    })(e);
                }, O)
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              P(
                  i.filter((e) => null != D[L(e)]),
                  a
              );
          }, 800 * Math.random())
        : P(i, a);
}
function k(e) {
    let t = A.Z.validContentScanVersion;
    return e.reduce((e, n) => {
        var r, i, a, s, o, l, u, c;
        null == e[n.channel_id] &&
            (e[n.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let d = e[n.channel_id];
        return (
            (d.numOfAttachments += null !== (o = null === (r = n.attachments) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0),
            (d.numOfEmbeds += null !== (l = null === (i = n.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0),
            (d.numOfAttachmentsPendingScan += null !== (u = null === (a = n.attachments) || void 0 === a ? void 0 : a.filter((e) => (0, I.CN)(e, t)).length) && void 0 !== u ? u : 0),
            (d.numOfEmbedsPendingScan += null !== (c = null == n ? void 0 : null === (s = n.embeds) || void 0 === s ? void 0 : s.filter((e) => (0, I.fj)(e, t)).length) && void 0 !== c ? c : 0),
            {
                ...e,
                [n.channel_id]: d
            }
        );
    }, {});
}
function U(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r } = (function (e) {
        let t = e.filter((e) => (0, I.OR)(e) && (0, S.HH)(e)),
            n = e
                .map((e) => {
                    if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, I.OR)(e.referenced_message) && (0, S.HH)(e.referenced_message)) return e.referenced_message;
                })
                .filter(function (e) {
                    return null != e;
                });
        n.length > 0 && (t = [...t, ...n]);
        let r = s()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return {
            messagesPendingScan: r.filter((e) => (0, I.xG)(e)),
            attributesByChannelId: k(r)
        };
    })(e);
    return (
        v.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, S.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        !!(n.length > 0) && (M(n, t), !0)
    );
}
function B(e) {
    var t, n, r, i, a, s;
    let { message: o } = e;
    if (!(0, b.Kh)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === _.default.getId() || (null == o.embeds && null == o.attachments) || ((null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (r = o.attachments) || void 0 === r ? void 0 : r.length) === 0)) return !1;
    if (!(0, I.N7)(o)) {
        let e = null !== (s = null !== (a = m.Z.getMessage(o.channel_id, o.id)) && void 0 !== a ? a : y.Z.getMessage(o.id, o.channel_id)) && void 0 !== s ? s : null === (i = f.Z.getMessage(o.channel_id, o.id)) || void 0 === i ? void 0 : i.message;
        null != e && !(0, I.N7)((0, c.wi)(e, o)) && w(e, S.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        u = p.ZP.getCurrentSidebarChannelId(l);
    if (!(o.channel_id === l || o.channel_id === u)) return !1;
    let d = m.Z.getMessage(o.channel_id, o.id);
    return null != d && U([d], { isMessageUpdate: !0 });
}
function G(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: s } = e;
    if (!(0, b.Kh)() || a || s || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === _.default.getId()) return !1;
    let o = g.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(o),
        u = r === o || r === l,
        c = h.Z.getChannel(r);
    if (!u) return !1;
    let d = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
        f = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
    return U([i], { jitter: d && f });
}
function Z(e) {
    let { channelId: t, messages: n } = e;
    if (!(0, b.Kh)() || null == t || null == n) return !1;
    let r = g.Z.getChannelId(),
        i = p.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && U(n);
}
function F(e) {
    let { messages: t } = e;
    if (!(0, b.Kh)() || null == t) return !1;
    let n = i()(t);
    return U(s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function V(e) {
    let { guildId: t, threads: n } = e;
    return !!(null != n && (0, b.Kh)()) && E.Z.getGuildId() === t && U(v.default.keys(n).map((e) => n[e].first_message));
}
function j(e) {
    let { guildId: t, firstMessages: n } = e;
    return !!(null != n && (0, b.Kh)()) && E.Z.getGuildId() === t && U(n, { forceBatchScan: !0 });
}
function H(e) {
    (0, N.U)();
    let { channelId: t } = e;
    return !!(null != t && (0, b.Kh)()) && t === g.Z.getChannelId() && K(t);
}
function Y(e) {
    let { settings: t, local: n } = e;
    if (!(0, b.Kh)() || !n || t.type !== R.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = g.Z.getChannelId();
    return null != r && K(r);
}
function W(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!(0, b.Kh)() && !!n && K(t);
}
function K(e) {
    let t = m.Z.getMessages(e);
    return (
        0 !== t.length &&
        (function (e) {
            let { messagesPendingScan: t, attributesByChannelId: n } = (function (e) {
                let t = e.filter((e) => (0, I.OR)(e) && (0, S.HH)(e)),
                    n = e
                        .map((e) => {
                            if (C.OBS.has(e.type) && null != e.messageReference) {
                                let t = f.Z.getMessageByReference(e.messageReference);
                                if (t.state === f.Y.LOADED && null != t.message && (0, I.OR)(t.message) && (0, S.HH)(t.message)) return t.message;
                            }
                        })
                        .filter(function (e) {
                            return null != e;
                        });
                n.length > 0 && (t = [...t, ...n]);
                let r = s()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
                return {
                    messagesPendingScan: r.filter((e) => (0, I.xG)(e)),
                    attributesByChannelId: k(r)
                };
            })(e);
            return (
                v.default.entries(n).forEach((e) => {
                    let [t, n] = e;
                    (0, S.IV)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                    });
                }),
                !!(t.length > 0) && (M(t), !0)
            );
        })(t)
    );
}
class z extends u.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                LOAD_MESSAGES_SUCCESS: Z,
                LOAD_FORUM_POSTS: V,
                LOAD_THREADS_SUCCESS: j,
                LOAD_ARCHIVED_THREADS_SUCCESS: j,
                MESSAGE_CREATE: G,
                MESSAGE_UPDATE: B,
                LOGOUT: x,
                SEARCH_FINISH: F,
                MOD_VIEW_SEARCH_FINISH: F,
                CHANNEL_SELECT: H,
                LOAD_PINNED_MESSAGES_SUCCESS: F,
                USER_SETTINGS_PROTO_UPDATE: Y,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: W
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
t.ZP = new z();
