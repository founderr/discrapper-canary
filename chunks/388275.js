n.d(t, {
    n: function () {
        return p;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(106351),
    i = n(442837),
    r = n(481060),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(987509),
    _ = n(131704),
    f = n(592125),
    E = n(823379),
    g = n(822869),
    m = n(912332),
    S = n(646746),
    A = n(689938),
    I = n(463061);
function p(e) {
    let { message: t, forwardOptions: n, sendLabel: p, canSend: C, selectedDestinations: N, isSending: L, onSend: v, showPreview: b } = e,
        T = (0, d.Z)(),
        x = N.map(h.hl).find(E.lm),
        Z = (0, i.e7)([f.Z], () => f.Z.getChannel(x), [x]),
        y = a.useMemo(
            () =>
                null != Z
                    ? Z
                    : (0, _.kt)({
                          id: '1',
                          type: s.d.DM
                      }),
            [Z]
        ),
        M = (0, g.Ad)(),
        [P, R] = a.useState(() => (0, c.H2)()),
        { textValue: O, richValue: D } = P,
        [w, G] = a.useState(!1),
        j = a.useCallback(() => G(!0), []),
        U = a.useCallback(() => G(!1), []),
        k = a.useCallback(
            (e, n, l) => {
                R({
                    textValue: n,
                    richValue: l
                }),
                    M(t.channel_id, t.id);
            },
            [M, t]
        ),
        F = a.useCallback(() => {
            v(O);
        }, [O, v]),
        H = a.useCallback(
            () =>
                !C || O.length > T
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (F(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [F, O, T, C]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: I.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: I.forwardPreviewWrapper,
                    children: (0, l.jsx)(S.O, {
                        message: t,
                        forwardOptions: n
                    })
                }),
            (0, l.jsxs)('div', {
                className: I.footerButtons,
                children: [
                    (0, l.jsx)(u.Z, {
                        innerClassName: I.messageInput,
                        onChange: k,
                        placeholder: A.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                        channel: y,
                        textValue: O,
                        richValue: D,
                        type: o.I.FORWARD_MESSAGE_INPUT,
                        onBlur: U,
                        onFocus: j,
                        focused: w,
                        onSubmit: H,
                        parentModalKey: m.so,
                        autoCompletePosition: 'bottom',
                        emojiPickerCloseOnModalOuterClick: !0
                    }),
                    (0, l.jsx)(r.Button, {
                        className: I.sendWithMessage,
                        submitting: L,
                        disabled: !C || O.length > T,
                        onClick: F,
                        children: p
                    })
                ]
            })
        ]
    });
}
