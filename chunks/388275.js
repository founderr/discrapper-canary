n.d(t, {
    n: function () {
        return A;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    s = n(442837),
    i = n(481060),
    r = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(703558),
    _ = n(784384),
    f = n(822869),
    E = n(912332),
    g = n(646746),
    m = n(689938),
    S = n(463061);
function A(e) {
    let { message: t, forwardOptions: n, sendLabel: A, canSend: I, selectedDestinations: p, isSending: C, onSend: N, showPreview: L } = e,
        v = (0, d.Z)(),
        T = (0, _.nm)(p),
        b = (0, _.y)(p),
        x = (0, f.Ad)(),
        Z = (0, s.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [M, y] = a.useState(() => (0, c.eK)(Z)),
        { textValue: P, richValue: R } = M,
        [O, D] = a.useState(!1),
        w = a.useCallback(() => D(!0), []),
        G = a.useCallback(() => D(!1), []),
        j = a.useCallback(
            (e, n, l) => {
                y({
                    textValue: n,
                    richValue: l
                }),
                    r.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t]
        ),
        U = a.useCallback(() => {
            r.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), N(P);
        }, [t.channel_id, N, P]),
        F = a.useCallback(
            () =>
                !I || P.length > v
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (U(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [U, P, v, I]
        );
    return (0, l.jsxs)(i.ModalFooter, {
        className: S.footerWithMessage,
        children: [
            L &&
                (0, l.jsx)('div', {
                    className: S.forwardPreviewWrapper,
                    children: (0, l.jsx)(g.O, {
                        message: t,
                        forwardOptions: n,
                        channel: T
                    })
                }),
            (0, l.jsxs)('div', {
                className: S.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: S.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: S.messageInput,
                                onChange: j,
                                placeholder: m.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                                channel: T,
                                textValue: P,
                                richValue: R,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: G,
                                onFocus: w,
                                focused: O,
                                onSubmit: F,
                                parentModalKey: E.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0
                            }),
                            (0, l.jsx)(i.Button, {
                                className: S.sendWithMessage,
                                submitting: C,
                                disabled: !I || P.length > v,
                                onClick: U,
                                children: A
                            })
                        ]
                    }),
                    b.length > 0 &&
                        P.length > 0 &&
                        (0, l.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: m.Z.Messages.MESSAGE_FORWARD_SLOWMODE_WARNING.format({
                                count: b.length,
                                channelNames: b.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
