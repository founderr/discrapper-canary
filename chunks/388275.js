n.d(t, {
    n: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    s = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(703558),
    f = n(784384),
    _ = n(822869),
    g = n(912332),
    m = n(646746),
    p = n(388032),
    E = n(190417);
function I(e) {
    let { message: t, forwardOptions: n, sendLabel: I, canSend: S, selectedDestinations: A, isSending: C, onSend: v, showPreview: b } = e,
        L = (0, d.Z)(),
        x = (0, f.nm)(A),
        N = (0, f.y)(A),
        T = (0, _.Ad)(),
        P = (0, i.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [y, Z] = a.useState(() => (0, c.eK)(P)),
        { textValue: w, richValue: R } = y,
        [O, D] = a.useState(!1),
        j = a.useCallback(() => D(!0), []),
        M = a.useCallback(() => D(!1), []),
        k = a.useCallback(
            (e, n, l) => {
                Z({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    T(t.channel_id, t.id);
            },
            [T, t]
        ),
        F = a.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(w);
        }, [t.channel_id, v, w]),
        U = a.useCallback(
            () =>
                !S || w.length > L
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (F(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [F, w, L, S]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: E.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: E.forwardPreviewWrapper,
                    children: (0, l.jsx)(m.O, {
                        message: t,
                        forwardOptions: n,
                        channel: x
                    })
                }),
            (0, l.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: E.messageInput,
                                onChange: k,
                                placeholder: p.intl.string(p.t.ZroO3N),
                                channel: x,
                                textValue: w,
                                richValue: R,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: M,
                                onFocus: j,
                                focused: O,
                                onSubmit: U,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(r.Button, {
                                className: E.sendWithMessage,
                                submitting: C,
                                disabled: !S || w.length > L,
                                onClick: F,
                                children: I
                            })
                        ]
                    }),
                    N.length > 0 &&
                        w.length > 0 &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: p.intl.format(p.t.xJFpio, {
                                count: N.length,
                                channelNames: N.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
