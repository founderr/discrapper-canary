n.d(t, {
    e5: function () {
        return y;
    },
    gx: function () {
        return b;
    },
    lp: function () {
        return x;
    },
    wi: function () {
        return L;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(913527),
    o = n.n(a),
    s = n(830121);
n(712057);
var l = n(292419),
    u = n(330044),
    c = n(378233),
    d = n(360742),
    _ = n(23750),
    E = n(598077),
    f = n(314897),
    h = n(699516),
    p = n(594174),
    m = n(408433),
    I = n(669079);
n(358085);
var T = n(51144),
    g = n(572804);
n(739566);
var S = n(959517),
    A = n(981631),
    v = n(689938);
let N = new E.Z({
    id: '???',
    username: '???'
});
function O(e) {
    var t;
    return null == e.author ? N : null != e.webhook_id ? new E.Z(e.author) : null !== (t = p.default.getUser(e.author.id)) && void 0 !== t ? t : new E.Z(e.author);
}
function R(e) {
    return !1;
}
function C(e) {
    var t;
    return new _.pi({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: D(e),
        embeds: P(e),
        components: (0, l.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], { includeEmojiSrc: !1 }),
        codedLinks: e.type === A.uaV.THREAD_CREATED ? [] : (0, s.ZP)(e.content)
    });
}
function y(e) {
    var t, n, r, i, a, o, s;
    let { reactions: l, interactionData: c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        E = C(e),
        p = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== i ? i : [],
        m = null !== (a = e.mention_roles) && void 0 !== a ? a : [],
        T = null !== (o = e.mention_channels) && void 0 !== o ? o : [],
        S = e.message_reference,
        v = O(e),
        N = null,
        y = null == e ? void 0 : e.gift_info,
        b = e.gifting_prompt,
        L = null != e.interaction ? d.Z.createFromServer(e.interaction) : null,
        D = e.type === A.uaV.THREAD_STARTER_MESSAGE ? (null === (r = e.referenced_message) || void 0 === r ? void 0 : null === (n = r.author) || void 0 === n ? void 0 : n.id) : void 0,
        P = e.type === A.uaV.PREMIUM_REFERRAL ? e.content : void 0,
        x = e.content;
    return (e.type === A.uaV.PREMIUM_REFERRAL && (x = ''), R(e))
        ? new _.ZP({
              ...N,
              id: e.id,
              channel_id: e.channel_id,
              type: A.uaV.DEFAULT,
              author: v,
              timestamp: E.timestamp,
              isUnsupported: !0
          })
        : new _.ZP({
              ...e,
              ...N,
              ...E.toJS(),
              author: v,
              webhookId: e.webhook_id,
              blocked: h.Z.isBlockedForMessage(e) || (null != D && h.Z.isBlocked(D)),
              mentionEveryone: e.mention_everyone,
              mentions: p,
              mentionRoles: m,
              mentionChannels: T,
              messageReference: S,
              mentioned: (0, g.Sz)({
                  userId: f.default.getId(),
                  channelId: e.channel_id,
                  mentionEveryone: null !== (s = e.mention_everyone) && void 0 !== s && s,
                  mentionUsers: p,
                  mentionRoles: m
              }),
              giftCodes: (0, I.Fp)(e) ? (0, I.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, I.Q_)(e.content),
              content: x,
              referralTrialOfferId: P,
              call: M(e.call, E.timestamp),
              messageSnapshots: w(e),
              reactions: U(null != l ? l : e.reactions, e.poll),
              interaction: L,
              interactionData: null != c ? c : e.interaction_data,
              interactionMetadata: e.interaction_metadata,
              roleSubscriptionData: e.role_subscription_data,
              purchaseNotification: e.purchase_notification,
              poll: null == e.poll ? void 0 : (0, u.Z)(e.poll),
              giftInfo: null == y ? void 0 : y,
              giftingPrompt: b
          });
}
function b(e, t) {
    return null != t.edited_timestamp
        ? {
              ...t,
              reactions: e.reactions,
              interaction_data: e.interaction_data
          }
        : {
              ...e,
              ...t
          };
}
function L(e, t) {
    if (null != t.edited_timestamp)
        return y(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e,
        r = !1;
    if ((null != t.call && (n = n.set('call', M(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', D(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', P(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', w(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new E.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, l.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions)) {
        var i;
        n = n.set('reactions', U(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set('poll', (0, u.Z)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                'mentions',
                t.mentions.map((e) => e.id)
            )),
            (r = !0)),
        null != t.mention_everyone && ((n = n.set('mentionEveryone', t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set('mentionRoles', t.mention_roles)), (r = !0)),
        r &&
            (n = n.set(
                'mentioned',
                (0, g.ZP)({
                    message: n,
                    userId: f.default.getId()
                })
            )),
        n
    );
}
function D(e) {
    return null == e.attachments
        ? []
        : e.attachments.map((e) => ({
              ...e,
              spoiler: e.filename.startsWith(S._j)
          }));
}
function M(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? o()(new Date(e.ended_timestamp)) : null,
            r = null != n ? o().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r
        };
    }
    return null;
}
function P(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, m.kC)(e.channel_id, e.id, t));
    return (0, m.o3)(t);
}
function U(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let r =
        null == t
            ? void 0
            : null === (n = t.results) || void 0 === n
              ? void 0
              : n.answer_counts.map((e) => ({
                    count_details: { vote: e.count },
                    me_vote: e.me_voted,
                    emoji: {
                        id: e.id.toString(),
                        name: '',
                        animated: !1
                    },
                    me: !1,
                    me_burst: !1,
                    count: e.count,
                    burst_count: 0
                }));
    return [...(null != e ? e : []), ...(null != r ? r : [])].map((e) => {
        let t = { ...e };
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0), (t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function w(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t } = e;
              return new _.Hx({ message: C(t) });
          });
}
let x = (e) => 0 === (0, c.cv)(e).length || '' !== e.content;
