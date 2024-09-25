n.d(t, {
    v: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(570140),
    s = n(468026),
    l = n(673750),
    u = n(300429),
    c = n(594174),
    d = n(626135),
    _ = n(760729),
    E = n(74538),
    f = n(981631),
    h = n(689938);
function p(e, t) {
    (0, a.openModal)((n) =>
        (0, i.jsx)(s.default, {
            title: h.Z.Messages.MESSAGE_TOO_LONG_HEADER,
            body: h.Z.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                currentLength: e,
                maxLength: t
            }),
            confirmText: h.Z.Messages.OKAY,
            ...n
        })
    ),
        d.default.track(f.rMx.OPEN_MODAL, {
            type: 'Message Too Long Alert',
            message_content_length: e
        });
}
function m(e) {
    var t;
    let { openWarningPopout: n, type: r, content: c, stickers: d, uploads: E, channel: m, restrictMentions: I, respectCooldown: T, userCanUsePremiumMessageLength: g, resolve: S } = e;
    if (0 === c.length && !(null === (t = r.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == d || 0 === d.length) && (null == E || 0 === E.length)) {
        S({
            valid: !1,
            failureReason: f.zYc.EMPTY_MESSAGE
        });
        return;
    }
    let A = g ? f.en1 : f.J6R,
        v = !g;
    if (c.length > A) {
        v && null != m
            ? o.Z.dispatch({
                  type: 'MESSAGE_LENGTH_UPSELL',
                  channel: m,
                  content: c
              })
            : p(c.length, A),
            S({
                valid: !1,
                failureReason: f.zYc.MESSAGE_TOO_LONG
            });
        return;
    }
    if (null != m) {
        if (null != m.getGuildId() && T && u.Z.getSlowmodeCooldownGuess(m.id) > 0) {
            S({
                valid: !1,
                failureReason: f.zYc.SLOWMODE_COOLDOWN
            });
            return;
        }
        if (null != n)
            for (let { check: e, analyticsType: t, animation: r } of _.$) {
                let i = e(c, m, I);
                if (!1 !== i) {
                    n({
                        analyticsType: t,
                        channel: m,
                        onCancel: () =>
                            S({
                                valid: !1,
                                failureReason: f.zYc.SHOUTING_CANCELLED
                            }),
                        onConfirm: () => S({ valid: !0 }),
                        popoutText: i,
                        animation: r
                    });
                    return;
                }
            }
    }
    if (l.ZP.isFull()) {
        (0, a.openModal)(
            (e) =>
                (0, i.jsx)(s.default, {
                    title: h.Z.Messages.MESSAGE_RATE_LIMITED_HEADER,
                    body: h.Z.Messages.MESSAGE_RATE_LIMITED_BODY,
                    confirmText: h.Z.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                    ...e
                }),
            { onCloseRequest: f.dG4 }
        ),
            S({
                valid: !1,
                failureReason: f.zYc.RATE_LIMITED
            });
        return;
    }
    S({ valid: !0 });
}
function I(e) {
    let { openWarningPopout: t, type: n, content: r, stickers: i, uploads: a, channel: o, restrictMentions: s = !0, respectCooldown: l = !0 } = e,
        u = E.ZP.canUseIncreasedMessageLength(c.default.getCurrentUser());
    return new Promise((e) =>
        m({
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: o,
            restrictMentions: s,
            respectCooldown: l,
            userCanUsePremiumMessageLength: u,
            resolve: e
        })
    );
}
