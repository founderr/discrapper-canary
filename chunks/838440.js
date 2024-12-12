r.d(n, {
    v: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(570140),
    l = r(468026),
    u = r(673750),
    c = r(300429),
    d = r(594174),
    f = r(626135),
    _ = r(760729),
    h = r(74538),
    p = r(981631),
    m = r(388032);
function g(e, n) {
    (0, s.openModal)((r) =>
        (0, a.jsx)(l.default, {
            title: m.intl.string(m.t.l8rYLi),
            body: m.intl.formatToPlainString(m.t.FfjF19, {
                currentLength: e,
                maxLength: n
            }),
            confirmText: m.intl.string(m.t.BddRzc),
            ...r
        })
    ),
        f.default.track(p.rMx.OPEN_MODAL, {
            type: 'Message Too Long Alert',
            message_content_length: e
        });
}
function E(e) {
    var n;
    let { openWarningPopout: r, type: i, content: d, stickers: f, uploads: h, channel: E, restrictMentions: v, respectCooldown: I, userCanUsePremiumMessageLength: T, resolve: b } = e;
    if (0 === d.length && !(null === (n = i.submit) || void 0 === n ? void 0 : n.allowEmptyMessage) && (null == f || 0 === f.length) && (null == h || 0 === h.length)) {
        b({
            valid: !1,
            failureReason: p.zYc.EMPTY_MESSAGE
        });
        return;
    }
    let y = T ? p.en1 : p.J6R,
        S = !T;
    if (d.length > y) {
        S && null != E
            ? o.Z.dispatch({
                  type: 'MESSAGE_LENGTH_UPSELL',
                  channel: E,
                  content: d
              })
            : g(d.length, y),
            b({
                valid: !1,
                failureReason: p.zYc.MESSAGE_TOO_LONG
            });
        return;
    }
    if (null != E) {
        if (null != E.getGuildId() && I && c.Z.getSlowmodeCooldownGuess(E.id) > 0) {
            b({
                valid: !1,
                failureReason: p.zYc.SLOWMODE_COOLDOWN
            });
            return;
        }
        if (null != r)
            for (let { check: e, analyticsType: n, animation: i } of _.$) {
                let a = e(d, E, v);
                if (!1 !== a) {
                    r({
                        analyticsType: n,
                        channel: E,
                        onCancel: () =>
                            b({
                                valid: !1,
                                failureReason: p.zYc.SHOUTING_CANCELLED
                            }),
                        onConfirm: () => b({ valid: !0 }),
                        popoutText: a,
                        animation: i
                    });
                    return;
                }
            }
    }
    if (u.ZP.isFull()) {
        (0, s.openModal)(
            (e) =>
                (0, a.jsx)(l.default, {
                    title: m.intl.string(m.t['7Q4eo6']),
                    body: m.intl.string(m.t.gi6XHh),
                    confirmText: m.intl.string(m.t.Z4U1g4),
                    ...e
                }),
            { onCloseRequest: p.dG4 }
        ),
            b({
                valid: !1,
                failureReason: p.zYc.RATE_LIMITED
            });
        return;
    }
    b({ valid: !0 });
}
function v(e) {
    let { openWarningPopout: n, type: r, content: i, stickers: a, uploads: s, channel: o, restrictMentions: l = !0, respectCooldown: u = !0 } = e,
        c = h.ZP.canUseIncreasedMessageLength(d.default.getCurrentUser());
    return new Promise((e) =>
        E({
            openWarningPopout: n,
            type: r,
            content: i,
            stickers: a,
            uploads: s,
            channel: o,
            restrictMentions: l,
            respectCooldown: u,
            userCanUsePremiumMessageLength: c,
            resolve: e
        })
    );
}
