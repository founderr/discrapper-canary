t.d(n, {
    n: function () {
        return x;
    }
}),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(106351),
    r = t(442837),
    i = t(481060),
    o = t(541716),
    u = t(752305),
    c = t(893718),
    d = t(849522),
    h = t(987509),
    f = t(131704),
    m = t(592125),
    g = t(823379),
    _ = t(784384),
    E = t(822869),
    S = t(912332),
    M = t(646746),
    v = t(689938),
    p = t(463061);
function x(e) {
    let { message: n, forwardOptions: t, sendLabel: x, canSend: N, selectedDestinations: C, isSending: Z, onSend: A, showPreview: b } = e,
        L = (0, d.Z)(),
        R = C.map(h.hl).find(g.lm),
        I = (0, r.e7)([m.Z], () => m.Z.getChannel(R), [R]),
        w = s.useMemo(
            () =>
                null != I
                    ? I
                    : (0, f.kt)({
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
            (e, t, l) => {
                P({
                    textValue: t,
                    richValue: l
                }),
                    T(n.channel_id, n.id);
            },
            [T, n]
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
        className: p.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: p.forwardPreviewWrapper,
                    children: (0, l.jsx)(M.O, {
                        message: n,
                        forwardOptions: t
                    })
                }),
            (0, l.jsxs)('div', {
                className: p.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            (0, l.jsx)(c.Z, {
                                innerClassName: p.messageInput,
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
                                className: p.sendWithMessage,
                                submitting: Z,
                                disabled: !N || D.length > L,
                                onClick: B,
                                children: x
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
