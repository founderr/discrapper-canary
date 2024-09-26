let r, i, a, o, s, l, u, c, d, _, E, f, h, p, m, I;
var T,
    g = n(47120);
var S = n(392711);
var A = n(754700),
    v = n(887003),
    N = n(442837),
    O = n(481060),
    R = n(570140),
    C = n(497505),
    y = n(918701),
    L = n(5881),
    b = n(46140),
    D = n(689938);
function M(e, t, n) {
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
function P() {
    (r = !1), (i = !1), (a = new Map()), (o = new Map()), (s = 0), (l = new Set()), (u = new Set()), (c = new Set()), (d = new Set()), (E = new Map()), (f = new Map()), (h = new Map()), (p = null), (m = new Map()), (_ = new Set()), (I = new Map());
}
function U(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) {
            if (!(0, S.isNil)(o)) A.T.DESKTOP.has(o.eventName) && ((null === (i = o.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) != null ? _.add(e) : (null === (a = o.heartbeat) || void 0 === a ? void 0 : a.lastBeatAt) == null && _.delete(e));
        }
}
function w(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = {
            ...n,
            ...t
        };
        U(e, t), a.set(e, r);
    }
}
function x(e, t) {
    let n = new Map(E);
    n.set(e, t), (E = n);
}
function G(e, t) {
    x(e, t);
    let n = a.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r &&
        null == r.claimedAt &&
        w(e, {
            userStatus: {
                ...r,
                claimedAt: t.claimedAt
            }
        });
}
function k(e) {
    var t;
    let { entitlements: n } = e,
        r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== v.w.REWARD_CODE ? null : r.rewardCode;
}
function B(e, t) {
    let n = new Map(f);
    n.set(e, t.items), (f = n);
    let r = a.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var o;
        let n = k({ entitlements: t });
        null != n && x(e, n),
            w(e, {
                userStatus: {
                    ...i,
                    claimedAt: t.claimedAt,
                    claimedTier: null !== (o = null == n ? void 0 : n.tier) && void 0 !== o ? o : null
                }
            });
    }
}
function F(e) {
    null != h.get(e) && (h = new Map(h)).delete(e);
}
function Z() {
    P();
}
function V() {
    (s = Date.now()), (r = !0);
}
function H(e) {
    let { quests: t } = e;
    for (let e of ((r = !1), (a = new Map()), t)) a.set(e.id, e), e.targetedContent.includes(C.jn.QUEST_BAR) && (0, L.T)({ location: b.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
}
function Y() {
    (s = 0), (r = !1);
}
function j() {
    i = !0;
}
function W(e) {
    let { quests: t } = e;
    for (let e of ((i = !1), (o = new Map()), t)) o.set(e.id, e);
}
function K() {
    i = !1;
}
function z(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    _.add(t), w(t, { userStatus: r }), F(n);
}
function q(e) {
    let { questId: t, streamKey: n } = e;
    null == h.get(n) &&
        (h = new Map(h)).set(n, {
            questId: t,
            streamKey: n,
            firstFailedAt: Date.now()
        });
}
function Q(e) {
    let { streamKey: t } = e;
    F(t);
}
function X(e) {
    let t = new Set(l);
    t.delete(e), (l = t);
}
function $(e) {
    let { questId: t } = e,
        n = new Set(l);
    n.add(t), (l = n);
}
function J(e) {
    let { enrolledQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), X(t.questId);
}
function ee(e) {
    let { questId: t } = e;
    X(t);
    let n = a.get(t);
    null != n && (0, y.zK)(n, b.S7.FRACTIONS_QUEST) && (0, O.showToast)((0, O.createToast)(D.Z.Messages.QUESTS_NITRO_ENROLL_FAILURE_TOAST, O.ToastType.FAILURE));
}
function et(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function en(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(c);
    r.delete(t), (c = r), G(t, n);
}
function er(e) {
    let { questId: t } = e,
        n = new Set(c);
    n.delete(t), (c = n);
}
function ei(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.add(t), (u = n);
}
function ea(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(u);
    r.delete(t), (u = r), B(t, n);
}
function eo(e) {
    let { questId: t } = e,
        n = new Set(u);
    n.delete(t), (u = n);
}
function es(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
function el(e) {
    let { questId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function eu(e) {
    let { dismissedQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), es(t.questId);
}
function ec(e) {
    let { questId: t } = e;
    es(t);
}
function ed(e) {
    let { streamKey: t } = e;
    F(t);
}
function e_(e) {
    let { user_status: t } = e;
    (0, L.T)({ location: b.dr.QUESTS_STORE }).log('Received user status update for '.concat(t.quest_id), t), w(t.quest_id, { userStatus: (0, y.U3)(t) });
}
function eE(e) {
    let { previewQuestUserStatus: t } = e;
    w(t.questId, { userStatus: t }), null == t.claimedAt && (E = new Map(E)).delete(t.questId), null == t.enrolledAt && (m = new Map(m)).delete(t.questId);
}
function ef(e) {
    let { questId: t } = e;
    p = p === t ? null : t;
}
function eh(e) {
    let { questId: t, platform: n } = e;
    (m = new Map(m)), null == n ? m.delete(t) : m.set(t, n);
}
function ep(e) {
    let { quest: t, placement: n } = e;
    null == t ? I.delete(n) : I.set(n, t);
}
function em(e) {
    let { placement: t } = e;
    I.delete(t);
}
P();
class eI extends (T = N.ZP.Store) {
    get quests() {
        return a;
    }
    get claimedQuests() {
        return o;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return i;
    }
    get lastFetchedCurrentQuests() {
        return s;
    }
    get questDeliveryOverride() {
        return a.get(null != p ? p : '');
    }
    get questToDeliverForPlacement() {
        return I;
    }
    isEnrolling(e) {
        return l.has(e);
    }
    isClaimingReward(e) {
        return u.has(e);
    }
    isFetchingRewardCode(e) {
        return c.has(e);
    }
    isDismissingContent(e) {
        return d.has(e);
    }
    getRewardCode(e) {
        return E.get(e);
    }
    getRewards(e) {
        return f.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return h.get(e);
    }
    getQuest(e) {
        return a.get(e);
    }
    isProgressingOnDesktop(e) {
        return _.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null !== (t = m.get(e)) && void 0 !== t ? t : null;
    }
}
M(eI, 'displayName', 'QuestsStore'),
    (t.Z = new eI(R.Z, {
        LOGOUT: Z,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: V,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: H,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: Y,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: j,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: W,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: K,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: ep,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: em,
        QUESTS_SEND_HEARTBEAT_SUCCESS: z,
        QUESTS_SEND_HEARTBEAT_FAILURE: q,
        QUESTS_ENROLL_BEGIN: $,
        QUESTS_ENROLL_SUCCESS: J,
        QUESTS_ENROLL_FAILURE: ee,
        QUESTS_FETCH_REWARD_CODE_BEGIN: et,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: en,
        QUESTS_FETCH_REWARD_CODE_FAILURE: er,
        QUESTS_CLAIM_REWARD_BEGIN: ei,
        QUESTS_CLAIM_REWARD_SUCCESS: ea,
        QUESTS_CLAIM_REWARD_FAILURE: eo,
        QUESTS_DISMISS_CONTENT_BEGIN: el,
        QUESTS_DISMISS_CONTENT_SUCCESS: eu,
        QUESTS_DISMISS_CONTENT_FAILURE: ec,
        QUESTS_USER_STATUS_UPDATE: e_,
        STREAM_CLOSE: Q,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ed,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eE,
        QUESTS_DELIVERY_OVERRIDE: ef,
        QUESTS_SELECT_TASK_PLATFORM: eh
    }));
