n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(904245),
    o = n(13245),
    a = n(655687),
    s = n(541716),
    u = n(752305),
    c = n(893718),
    d = n(957730),
    h = n(849522),
    f = n(145597),
    p = n(981631),
    m = n(750617);
function v(e) {
    let { id: t, channel: n, onSend: v } = e,
        g = (0, h.Z)(),
        { placeholder: E, accessibilityLabel: _ } = (0, a.Z)(n),
        [C, S] = l.useState(() => (0, u.H2)()),
        { textValue: Z, richValue: I } = C,
        [x, N] = l.useState(!1),
        O = l.useCallback(() => N(!0), []),
        T = l.useCallback(() => N(!1), []),
        y = l.useCallback((e, t, n) => {
            S({
                textValue: t,
                richValue: n
            });
        }, []),
        b = l.useCallback(
            () =>
                Z.length > g
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (r.Z.sendMessage(n.id, d.ZP.parse(n, Z), !1),
                      o.Z.setInputLocked(!0, (0, f.QF)()),
                      o.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == v || v(Z),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [Z, g, n, t, v]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: m.textArea,
        onChange: y,
        placeholder: E,
        accessibilityLabel: _,
        channel: n,
        textValue: Z,
        richValue: I,
        type: s.I.OVERLAY_INLINE_REPLY,
        onBlur: T,
        onFocus: O,
        focused: x,
        onSubmit: b,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
