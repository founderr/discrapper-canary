n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(904245),
    u = n(541716),
    c = n(419922),
    d = n(665906),
    _ = n(271383),
    E = n(496675),
    f = n(594174),
    h = n(626135),
    p = n(709054),
    m = n(838440),
    I = n(981631),
    T = n(385920);
function g(e) {
    let { channel: t, message: n, currentUser: r } = e;
    return (0, o.e7)([E.Z, _.ZP], () => {
        var e;
        let i = t.guild_id;
        if (null == r || null == i) return !1;
        let a = (0, d.xl)(t),
            o = E.Z.can(I.Plq.SEND_MESSAGES, t),
            s = null === (e = _.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending,
            l = n.author.bot;
        return o && !a && !s && !l;
    });
}
function S(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (p.default.extractTimestamp(n.id) + p.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function A(e) {
    let { channel: t, message: n, sticker: r } = e,
        i = {
            channel: t,
            message: n,
            shouldMention: !0,
            showMentionToggle: !0
        };
    l.Z.sendGreetMessage(t.id, r.id, l.Z.getSendMessageOptionsForReply(i));
}
function v(e) {
    let { sticker: t, event: n, eventProperties: r } = e;
    null != n &&
        h.default.track(n, {
            ...r,
            sticker_id: t.id
        });
}
function N(e) {
    let { currentUser: t, channel: n, message: r, buttonLabels: o, stickers: l, event: d, eventProperties: _ } = e,
        [E, f] = a.useState(!1),
        h = a.useMemo(
            () =>
                S({
                    assets: l,
                    currentUser: t,
                    message: r
                }),
            [l, t, r]
        ),
        p = a.useMemo(
            () =>
                S({
                    assets: o,
                    currentUser: t,
                    message: r
                }),
            [o, t, r]
        ),
        I = a.useCallback(async () => {
            let { valid: e } = await (0, m.v)({
                type: u.I.FORM,
                content: '',
                channel: n
            });
            e &&
                (A({
                    channel: n,
                    message: r,
                    sticker: h
                }),
                v({
                    sticker: h,
                    event: d,
                    eventProperties: _
                }));
        }, [n, r, h, d, _]);
    return (0, i.jsxs)(s.Button, {
        className: T.CTAMessageButtonOuter,
        innerClassName: T.CTAMessageButton,
        color: s.ButtonColors.PRIMARY,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onClick: I,
        children: [
            (0, i.jsx)(c.ZP, {
                className: T.CTAMessageSticker,
                isInteracting: E,
                sticker: h,
                size: 28
            }),
            p
        ]
    });
}
function O(e) {
    let { channel: t, message: n, buttonLabels: r, stickers: a, event: o, eventProperties: s } = e,
        l = f.default.getCurrentUser(),
        u = g({
            channel: t,
            message: n,
            currentUser: l
        });
    return null != l && u
        ? (0, i.jsx)('div', {
              className: T.CTAMessage,
              children: (0, i.jsx)(N, {
                  currentUser: l,
                  channel: t,
                  message: n,
                  buttonLabels: r,
                  stickers: a,
                  event: o,
                  eventProperties: s
              })
          })
        : null;
}
