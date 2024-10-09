n.d(t, {
    m: function () {
        return E;
    }
}),
    n(47120);
var i = n(470079),
    s = n(707019),
    a = n.n(s),
    l = n(881052),
    r = n(726521),
    o = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    h = n(823162),
    p = n(268699),
    m = n(9389),
    _ = n(687683),
    f = n(981631);
function E(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: s, onError: E } = e,
        g = (0, m.Z)(),
        [C, I] = i.useState(!1),
        [T, x] = i.useState(!1),
        [v, S] = i.useState(!1),
        [N, A] = i.useState(!1),
        [Z, M] = i.useState(!1),
        b = C || T || v,
        R = i.useCallback(
            async (e) => {
                if (!b) {
                    I(!0);
                    try {
                        await (0, h.e4)(e), A(!0), null == n || n();
                    } catch (t) {
                        let e = new l.Hx(t);
                        null == E || E(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [b, n, E]
        ),
        L = i.useCallback(
            async (e) => {
                if (!b) {
                    x(!0);
                    try {
                        await (0, h.gN)(e), M(!0), null == s || s();
                    } catch (t) {
                        let e = new l.Hx(t);
                        null == E || E(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [b, s, E]
        ),
        P = i.useCallback(
            async (e) => {
                if (b) return;
                x(!0);
                let t = a()(e, _.t$);
                try {
                    for (let e of t) await (0, h.r_)(e);
                    M(!0), null == s || s();
                } catch (t) {
                    let e = new l.Hx(t);
                    null == E || E(e);
                } finally {
                    x(!1);
                }
            },
            [b, s, E]
        ),
        j = i.useCallback(
            async (e) => {
                if (b) return;
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
                    d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                        action: _.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != i ? i : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await R(e);
                };
                (0, p.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                        d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                            action: _.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != i ? i : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [R, b, t]
        ),
        O = i.useCallback(
            (e, t, n) => {
                let i = (i, s) => {
                        s && u.kJ.updateSetting(i),
                            i && null != t && (0, r.zd)(t),
                            R(e.id),
                            d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                                action: _.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: s,
                                non_spam_retraining_opt_in: i
                            }),
                            null != n && n();
                    },
                    s = u.kJ.getSetting();
                null == s
                    ? (0, p.V)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: _.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id
                              });
                          }
                      })
                    : i(s);
            },
            [R]
        );
    return {
        acceptMessageRequest: g ? j : R,
        rejectMessageRequest: L,
        rejectAll: P,
        markAsNotSpam: O,
        isAcceptLoading: C,
        isRejectLoading: T,
        isUserProfileLoading: v,
        isOptimisticAccepted: N,
        isOptimisticRejected: Z
    };
}
