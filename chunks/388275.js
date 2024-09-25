n.d(t, {
    n: function () {
        return p;
    }
}),
    n(47120);
var l = n(735250),
    s = n(470079),
    a = n(106351),
    r = n(442837),
    i = n(481060),
    o = n(541716),
    u = n(752305),
    c = n(893718),
    d = n(849522),
    h = n(987509),
    m = n(131704),
    f = n(592125),
    g = n(823379),
    _ = n(784384),
    E = n(822869),
    S = n(912332),
    M = n(646746),
    v = n(689938),
    x = n(463061);
function p(e) {
    let { message: t, forwardOptions: n, sendLabel: p, canSend: N, selectedDestinations: C, isSending: Z, onSend: A, showPreview: b } = e,
        L = (0, d.Z)(),
        R = C.map(h.hl).find(g.lm),
        I = (0, r.e7)([f.Z], () => f.Z.getChannel(R), [R]),
        w = s.useMemo(
            () =>
                null != I
                    ? I
                    : (0, m.kt)({
                          id: '1',
                          type: a.d.DM
                      }),
            [I]
        ),
        y = (0, _.y)(C),
        T = (0, E.Ad)(),
        [j, P] = s.useState(() => (0, u.H2)()),
        { textValue: D, richValue: O } = j,
        [k, W] = s.useState(!1),
        G = s.useCallback(() => W(!0), []),
        U = s.useCallback(() => W(!1), []),
        F = s.useCallback(
            (e, n, l) => {
                P({
                    textValue: n,
                    richValue: l
                }),
                    T(t.channel_id, t.id);
            },
            [T, t]
        ),
        B = s.useCallback(() => {
            A(D);
        }, [D, A]),
        H = s.useCallback(
            () =>
                !N || D.length > L
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (B(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [B, D, L, N]
        );
    return (0, l.jsxs)(i.ModalFooter, {
        className: x.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: x.forwardPreviewWrapper,
                    children: (0, l.jsx)(M.O, {
                        message: t,
                        forwardOptions: n
                    })
                }),
            (0, l.jsxs)('div', {
                className: x.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: x.footerButtons,
                        children: [
                            (0, l.jsx)(c.Z, {
                                innerClassName: x.messageInput,
                                onChange: F,
                                placeholder: v.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                                channel: w,
                                textValue: D,
                                richValue: O,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: U,
                                onFocus: G,
                                focused: k,
                                onSubmit: H,
                                parentModalKey: S.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0
                            }),
                            (0, l.jsx)(i.Button, {
                                className: x.sendWithMessage,
                                submitting: Z,
                                disabled: !N || D.length > L,
                                onClick: B,
                                children: p
                            })
                        ]
                    }),
                    y.length > 0 &&
                        D.length > 0 &&
                        (0, l.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: v.Z.Messages.MESSAGE_FORWARD_SLOWMODE_WARNING.format({
                                count: y.length,
                                channelNames: y.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
