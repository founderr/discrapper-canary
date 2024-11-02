n.d(t, {
    m: function () {
        return C;
    }
}),
    n(47120);
var i = n(192379),
    l = n(707019),
    r = n.n(l),
    a = n(881052),
    s = n(726521),
    o = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    h = n(823162),
    m = n(268699),
    p = n(9389),
    f = n(687683),
    g = n(981631);
function C(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: C } = e,
        x = (0, p.Z)(),
        [v, _] = i.useState(!1),
        [I, E] = i.useState(!1),
        [b, S] = i.useState(!1),
        [Z, T] = i.useState(!1),
        [N, j] = i.useState(!1),
        A = v || I || b,
        y = i.useCallback(
            async (e) => {
                if (!A) {
                    _(!0);
                    try {
                        await (0, h.e4)(e), T(!0), null == n || n();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == C || C(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [A, n, C]
        ),
        P = i.useCallback(
            async (e) => {
                if (!A) {
                    E(!0);
                    try {
                        await (0, h.gN)(e), j(!0), null == l || l();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == C || C(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [A, l, C]
        ),
        M = i.useCallback(
            async (e) => {
                if (A) return;
                E(!0);
                let t = r()(e, f.t$);
                try {
                    for (let e of t) await (0, h.r_)(e);
                    j(!0), null == l || l();
                } catch (t) {
                    let e = new a.Hx(t);
                    null == C || C(e);
                } finally {
                    E(!1);
                }
            },
            [A, l, C]
        ),
        R = i.useCallback(
            async (e) => {
                if (A) return;
                if (null != t && null == o.Z.getMutualGuilds(t.id)) {
                    S(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0
                        });
                    } catch (e) {
                    } finally {
                        S(!1);
                    }
                }
                let n = async () => {
                    var n;
                    let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: f.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != i ? i : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await y(e);
                };
                (0, m.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: f.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != i ? i : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [y, A, t]
        ),
        L = i.useCallback(
            (e, t, n) => {
                let i = (i, l) => {
                        l && u.kJ.updateSetting(i),
                            i && null != t && (0, s.zd)(t),
                            y(e.id),
                            d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                action: f.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: l,
                                non_spam_retraining_opt_in: i
                            }),
                            null != n && n();
                    },
                    l = u.kJ.getSetting();
                null == l
                    ? (0, m.V)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: f.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id
                              });
                          }
                      })
                    : i(l);
            },
            [y]
        );
    return {
        acceptMessageRequest: x ? R : y,
        rejectMessageRequest: P,
        rejectAll: M,
        markAsNotSpam: L,
        isAcceptLoading: v,
        isRejectLoading: I,
        isUserProfileLoading: b,
        isOptimisticAccepted: Z,
        isOptimisticRejected: N
    };
}
