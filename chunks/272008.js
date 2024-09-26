n.d(t, {
    AH: function () {
        return A;
    },
    Ag: function () {
        return M;
    },
    CS: function () {
        return I;
    },
    EW: function () {
        return b;
    },
    OR: function () {
        return D;
    },
    QB: function () {
        return v;
    },
    T0: function () {
        return L;
    },
    Wf: function () {
        return C;
    },
    eT: function () {
        return y;
    },
    gl: function () {
        return O;
    },
    is: function () {
        return T;
    },
    m0: function () {
        return S;
    },
    nE: function () {
        return R;
    },
    pf: function () {
        return N;
    },
    w: function () {
        return P;
    },
    xw: function () {
        return g;
    }
});
var r = n(411104);
var i = n(990547),
    a = n(544891),
    o = n(570140),
    s = n(479531),
    l = n(573261),
    u = n(617136),
    c = n(705006),
    d = n(569984),
    _ = n(497505),
    E = n(918701),
    f = n(566078),
    h = n(981631),
    p = n(689938);
let m = 5;
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await a.tn.post({
                url: h.ANM.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0
            })
        ).body;
        if (null != n.quest_user_status)
            o.Z.dispatch({
                type: 'QUESTS_USER_STATUS_UPDATE',
                user_status: n.quest_user_status
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, m) };
    } catch (r) {
        var n;
        let e = new s.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: _.HW.RATE_LIMITED,
                        message: p.Z.Messages.RATE_LIMITED,
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : p.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR;
        return {
            errorHints: [
                {
                    type: _.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function T(e) {
    await a.tn.post({ url: h.ANM.QUEST_ON_CONSOLE_STOP(e) });
}
async function g() {
    if (!d.Z.isFetchingCurrentQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), c.Z.recordQuestRequestAttempt(h.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (await a.tn.get({ url: h.ANM.QUESTS_CURRENT_QUESTS })).body.quests
                .filter((e) => (0, E.Qe)(e))
                .map((e) => (0, E.WP)(e))
                .filter((e) => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || f.r.build(e.config).rewardPlatforms.length > 0;
                });
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                c.Z.recordQuestRequestApiResponse(h.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new s.Z(e)
            }),
                c.Z.recordQuestRequestApiResponse(h.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function S(e) {
    let { questId: t, streamKey: n, terminal: r = !1 } = e;
    try {
        var a;
        let e = await l.Z.post({
            url: h.ANM.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                terminal: r
            },
            trackedActionData: {
                event: i.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    terminal: r,
                    is_overlay: __OVERLAY__,
                    stack_trace: null !== (a = Error().stack) && void 0 !== a ? a : '',
                    is_playtime_eligible: !0
                }
            }
        });
        o.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, E.U3)(e.body),
            questId: t,
            streamKey: n
        });
    } catch (e) {
        o.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new s.Z(e),
            questId: t,
            streamKey: n
        });
    }
}
async function A(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, u._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !d.Z.isEnrolling(e))
    ) {
        o.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await a.tn.post({
                url: h.ANM.QUESTS_ENROLL(e),
                body: { location: t.questContent }
            });
            o.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, E.U3)(n.body)
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function v(e, t, n) {
    if (!d.Z.isClaimingReward(e)) {
        o.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await a.tn.post({
                    url: h.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    }
                }),
                i = (0, E.Xh)(r.body);
            return (
                0 === i.errors.length
                    ? o.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: i
                      })
                    : o.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: i.errors,
                          questId: e
                      }),
                i
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function N(e) {
    if (!d.Z.isFetchingRewardCode(e)) {
        o.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await a.tn.get({ url: h.ANM.QUESTS_REWARD_CODE(e) });
            o.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, E.yI)(t.body)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function O(e, t) {
    let n = d.Z.isDismissingContent(e),
        r = (0, E.GN)(t);
    if (!n && r) {
        o.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await a.tn.post({
                url: h.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {}
            });
            o.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, E.U3)(n.body)
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new s.Z(t),
                questId: e
            });
        }
    }
}
function R(e) {
    o.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await a.tn.post({
            url: h.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t }
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, E.U3)(n.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function y(e) {
    try {
        let t = await a.tn.del({
            url: h.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {}
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, E.U3)(t.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function L(e) {
    try {
        let t = await a.tn.del({
            url: h.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {}
        });
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, E.U3)(t.body)
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
function b(e) {
    o.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function D(e, t) {
    o.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function M() {
    if (!d.Z.isFetchingClaimedQuests) {
        o.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (await a.tn.get({ url: h.ANM.QUESTS_CLAIMED_QUESTS })).body.quests.map((e) => (0, E.hQ)(e));
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            o.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new s.Z(e)
            });
        }
    }
}
async function P(e) {
    o.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await a.tn.get({ url: h.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e) });
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: (0, E.q6)(t.body.quest),
            placement: e
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
            error: new s.Z(t),
            placement: e
        });
    }
}
