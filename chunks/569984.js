let r, i, a, s, o, l, u, c, d, _, E, f, h, p, I, m;
n(47120);
var T,
    S,
    g,
    A,
    N = n(392711),
    R = n(754700),
    O = n(887003),
    v = n(442837),
    C = n(570140),
    L = n(497505),
    D = n(918701),
    y = n(5881),
    b = n(46140);
function M() {
    (r = !1), (i = !1), (a = new Map()), (s = new Map()), (o = 0), (l = new Set()), (u = new Set()), (c = new Set()), (d = new Set()), (E = new Map()), (f = new Map()), (h = new Map()), (p = null), (I = new Map()), (_ = new Set()), (m = new Map());
}
M();
function P(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = {
            ...n,
            ...t
        };
        !(function (e, t) {
            var n, r, i, a;
            if (null != t.userStatus)
                for (let s of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) {
                    if (!(0, N.isNil)(s)) R.T.DESKTOP.has(s.eventName) && ((null === (i = s.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) != null ? _.add(e) : (null === (a = s.heartbeat) || void 0 === a ? void 0 : a.lastBeatAt) == null && _.delete(e));
                }
        })(e, t),
            a.set(e, r);
    }
}
function U(e, t) {
    let n = new Map(E);
    n.set(e, t), (E = n);
}
function w(e) {
    null != h.get(e) && (h = new Map(h)).delete(e);
}
function x(e) {
    let t = new Set(l);
    t.delete(e), (l = t);
}
function G(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
class k extends (T = v.ZP.Store) {
    get quests() {
        return a;
    }
    get claimedQuests() {
        return s;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return i;
    }
    get lastFetchedCurrentQuests() {
        return o;
    }
    get questDeliveryOverride() {
        return a.get(null != p ? p : '');
    }
    get questToDeliverForPlacement() {
        return m;
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
        return null !== (t = I.get(e)) && void 0 !== t ? t : null;
    }
}
(A = 'QuestsStore'),
    (g = 'displayName') in (S = k)
        ? Object.defineProperty(S, g, {
              value: A,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[g] = A),
    (t.Z = new k(C.Z, {
        LOGOUT: function () {
            M();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            (o = Date.now()), (r = !0);
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((r = !1), (a = new Map()), t)) a.set(e.id, e), e.targetedContent.includes(L.jn.QUEST_BAR) && (0, y.T)({ location: b.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (o = 0), (r = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((i = !1), (s = new Map()), t)) s.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            i = !1;
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { quest: t, placement: n } = e;
            null == t ? m.delete(n) : m.set(n, t);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            m.delete(t);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: r } = e;
            _.add(t), P(t, { userStatus: r }), w(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null == h.get(n) &&
                (h = new Map(h)).set(n, {
                    questId: t,
                    streamKey: n,
                    firstFailedAt: Date.now()
                });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(l);
            n.add(t), (l = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), x(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            x(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(c);
            n.add(t), (c = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let { questId: t, rewardCode: n } = e,
                r = new Set(c);
            r.delete(t),
                (c = r),
                !(function (e, t) {
                    U(e, t);
                    let n = a.get(e),
                        r = null == n ? void 0 : n.userStatus;
                    null != r &&
                        null == r.claimedAt &&
                        P(e, {
                            userStatus: {
                                ...r,
                                claimedAt: t.claimedAt
                            }
                        });
                })(t, n);
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(c);
            n.delete(t), (c = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.add(t), (u = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                r = new Set(u);
            r.delete(t),
                (u = r),
                !(function (e, t) {
                    let n = new Map(f);
                    n.set(e, t.items), (f = n);
                    let r = a.get(e),
                        i = null == r ? void 0 : r.userStatus;
                    if (null != i && null == i.claimedAt) {
                        var s;
                        let n = (function (e) {
                            var t;
                            let { entitlements: n } = e,
                                r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
                            return (null == r ? void 0 : r.tag) !== O.w.REWARD_CODE ? null : r.rewardCode;
                        })({ entitlements: t });
                        null != n && U(e, n),
                            P(e, {
                                userStatus: {
                                    ...i,
                                    claimedAt: t.claimedAt,
                                    claimedTier: null !== (s = null == n ? void 0 : n.tier) && void 0 !== s ? s : null
                                }
                            });
                    }
                })(t, n);
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.delete(t), (u = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(d);
            n.add(t), (d = n);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), G(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            G(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e;
            (0, y.T)({ location: b.dr.QUESTS_STORE }).log('Received user status update for '.concat(t.quest_id), t), P(t.quest_id, { userStatus: (0, D.U3)(t) });
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            w(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            w(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), null == t.claimedAt && (E = new Map(E)).delete(t.questId), null == t.enrolledAt && (I = new Map(I)).delete(t.questId);
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            p = p === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (I = new Map(I)), null == n ? I.delete(t) : I.set(t, n);
        }
    }));
