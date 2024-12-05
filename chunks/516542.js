n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(904245),
    r = n(13245),
    s = n(655687),
    a = n(541716),
    u = n(752305),
    c = n(893718),
    d = n(957730),
    h = n(849522),
    f = n(145597),
    p = n(981631),
    m = n(640784);
function v(e) {
    let { id: t, channel: n, onSend: v } = e,
        g = (0, h.Z)(),
        { placeholder: E, accessibilityLabel: C } = (0, s.Z)(n),
        [x, Z] = l.useState(() => (0, u.H2)()),
        { textValue: _, richValue: S } = x,
        [I, N] = l.useState(!1),
        b = l.useCallback(() => N(!0), []),
        O = l.useCallback(() => N(!1), []),
        y = l.useCallback((e, t, n) => {
            Z({
                textValue: t,
                richValue: n
            });
        }, []),
        j = l.useCallback(
            () =>
                _.length > g
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (o.Z.sendMessage(n.id, d.ZP.parse(n, _), !1),
                      r.Z.setInputLocked(!0, (0, f.QF)()),
                      r.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == v || v(_),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [_, g, n, t, v]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: m.textArea,
        onChange: y,
        placeholder: E,
        accessibilityLabel: C,
        channel: n,
        textValue: _,
        richValue: S,
        type: a.I.OVERLAY_INLINE_REPLY,
        onBlur: O,
        onFocus: b,
        focused: I,
        onSubmit: j,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
