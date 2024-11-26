n.d(t, {
    v: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(673750),
    l = n(300429),
    u = n(594174),
    c = n(626135),
    d = n(760729),
    f = n(74538),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { openWarningPopout: t, type: n, content: h, stickers: m, uploads: g, channel: E, restrictMentions: v = !0, respectCooldown: I = !0 } = e,
        T = f.ZP.canUseIncreasedMessageLength(u.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            var t, n, u;
            let { openWarningPopout: f, type: h, content: m, stickers: g, uploads: E, channel: v, restrictMentions: I, respectCooldown: T, userCanUsePremiumMessageLength: b, resolve: S } = e;
            if (0 === m.length && !(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == g || 0 === g.length) && (null == E || 0 === E.length)) {
                S({
                    valid: !1,
                    failureReason: _.zYc.EMPTY_MESSAGE
                });
                return;
            }
            let y = b ? _.en1 : _.J6R;
            if (m.length > y) {
                if (b || null == v) {
                    (n = m.length),
                        (u = y),
                        (0, i.openModal)((e) =>
                            (0, r.jsx)(s.default, {
                                title: p.intl.string(p.t.l8rYLi),
                                body: p.intl.formatToPlainString(p.t.FfjF19, {
                                    currentLength: n,
                                    maxLength: u
                                }),
                                confirmText: p.intl.string(p.t.BddRzc),
                                ...e
                            })
                        ),
                        c.default.track(_.rMx.OPEN_MODAL, {
                            type: 'Message Too Long Alert',
                            message_content_length: n
                        });
                } else
                    a.Z.dispatch({
                        type: 'MESSAGE_LENGTH_UPSELL',
                        channel: v,
                        content: m
                    });
                S({
                    valid: !1,
                    failureReason: _.zYc.MESSAGE_TOO_LONG
                });
                return;
            }
            if (null != v) {
                if (null != v.getGuildId() && T && l.Z.getSlowmodeCooldownGuess(v.id) > 0) {
                    S({
                        valid: !1,
                        failureReason: _.zYc.SLOWMODE_COOLDOWN
                    });
                    return;
                }
                if (null != f)
                    for (let { check: e, analyticsType: t, animation: n } of d.$) {
                        let r = e(m, v, I);
                        if (!1 !== r) {
                            f({
                                analyticsType: t,
                                channel: v,
                                onCancel: () =>
                                    S({
                                        valid: !1,
                                        failureReason: _.zYc.SHOUTING_CANCELLED
                                    }),
                                onConfirm: () => S({ valid: !0 }),
                                popoutText: r,
                                animation: n
                            });
                            return;
                        }
                    }
            }
            if (o.ZP.isFull()) {
                (0, i.openModal)(
                    (e) =>
                        (0, r.jsx)(s.default, {
                            title: p.intl.string(p.t['7Q4eo6']),
                            body: p.intl.string(p.t.gi6XHh),
                            confirmText: p.intl.string(p.t.Z4U1g4),
                            ...e
                        }),
                    { onCloseRequest: _.dG4 }
                ),
                    S({
                        valid: !1,
                        failureReason: _.zYc.RATE_LIMITED
                    });
                return;
            }
            S({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: h,
            stickers: m,
            uploads: g,
            channel: E,
            restrictMentions: v,
            respectCooldown: I,
            userCanUsePremiumMessageLength: T,
            resolve: e
        })
    );
}
