n.d(t, {
    n: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(442837),
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
    E = n(388032),
    p = n(190417);
function I(e) {
    let { message: t, forwardOptions: n, sendLabel: I, canSend: S, selectedDestinations: A, isSending: C, onSend: v, showPreview: L } = e,
        b = (0, d.Z)(),
        T = (0, f.nm)(A),
        N = (0, f.y)(A),
        x = (0, _.Ad)(),
        P = (0, a.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [y, Z] = i.useState(() => (0, c.eK)(P)),
        { textValue: R, richValue: w } = y,
        [O, D] = i.useState(!1),
        M = i.useCallback(() => D(!0), []),
        j = i.useCallback(() => D(!1), []),
        U = i.useCallback(
            (e, n, l) => {
                Z({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    x(t.channel_id, t.id);
            },
            [x, t]
        ),
        k = i.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(R);
        }, [t.channel_id, v, R]),
        G = i.useCallback(
            () =>
                !S || R.length > b
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (k(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [k, R, b, S]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: p.footerWithMessage,
        children: [
            L &&
                (0, l.jsx)('div', {
                    className: p.forwardPreviewWrapper,
                    children: (0, l.jsx)(m.O, {
                        message: t,
                        forwardOptions: n,
                        channel: T
                    })
                }),
            (0, l.jsxs)('div', {
                className: p.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: p.messageInput,
                                onChange: U,
                                placeholder: E.intl.string(E.t.ZroO3N),
                                channel: T,
                                textValue: R,
                                richValue: w,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: j,
                                onFocus: M,
                                focused: O,
                                onSubmit: G,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(r.Button, {
                                className: p.sendWithMessage,
                                submitting: C,
                                disabled: !S || R.length > b,
                                onClick: k,
                                children: I
                            })
                        ]
                    }),
                    N.length > 0 &&
                        R.length > 0 &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: E.intl.format(E.t.xJFpio, {
                                count: N.length,
                                channelNames: N.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
