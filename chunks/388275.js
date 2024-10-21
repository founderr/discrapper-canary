n.d(t, {
    n: function () {
        return g;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    s = n(481060),
    i = n(541716),
    r = n(752305),
    o = n(893718),
    c = n(849522),
    u = n(784384),
    d = n(822869),
    h = n(912332),
    _ = n(646746),
    f = n(689938),
    E = n(463061);
function g(e) {
    let { message: t, forwardOptions: n, sendLabel: g, canSend: m, selectedDestinations: S, isSending: A, onSend: I, showPreview: p } = e,
        C = (0, c.Z)(),
        N = (0, u.nm)(S),
        L = (0, u.y)(S),
        v = (0, d.Ad)(),
        [T, b] = a.useState(() => (0, r.H2)()),
        { textValue: x, richValue: Z } = T,
        [y, M] = a.useState(!1),
        P = a.useCallback(() => M(!0), []),
        R = a.useCallback(() => M(!1), []),
        O = a.useCallback(
            (e, n, l) => {
                b({
                    textValue: n,
                    richValue: l
                }),
                    v(t.channel_id, t.id);
            },
            [v, t]
        ),
        D = a.useCallback(() => {
            I(x);
        }, [x, I]),
        w = a.useCallback(
            () =>
                !m || x.length > C
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (D(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [D, x, C, m]
        );
    return (0, l.jsxs)(s.ModalFooter, {
        className: E.footerWithMessage,
        children: [
            p &&
                (0, l.jsx)('div', {
                    className: E.forwardPreviewWrapper,
                    children: (0, l.jsx)(_.O, {
                        message: t,
                        forwardOptions: n,
                        channel: N
                    })
                }),
            (0, l.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, l.jsx)(o.Z, {
                                innerClassName: E.messageInput,
                                onChange: O,
                                placeholder: f.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                                channel: N,
                                textValue: x,
                                richValue: Z,
                                type: i.I.FORWARD_MESSAGE_INPUT,
                                onBlur: R,
                                onFocus: P,
                                focused: y,
                                onSubmit: w,
                                parentModalKey: h.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0
                            }),
                            (0, l.jsx)(s.Button, {
                                className: E.sendWithMessage,
                                submitting: A,
                                disabled: !m || x.length > C,
                                onClick: D,
                                children: g
                            })
                        ]
                    }),
                    L.length > 0 &&
                        x.length > 0 &&
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: f.Z.Messages.MESSAGE_FORWARD_SLOWMODE_WARNING.format({
                                count: L.length,
                                channelNames: L.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
