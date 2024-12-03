n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(904245),
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
        { placeholder: E, accessibilityLabel: x } = (0, s.Z)(n),
        [C, Z] = o.useState(() => (0, u.H2)()),
        { textValue: _, richValue: I } = C,
        [S, b] = o.useState(!1),
        N = o.useCallback(() => b(!0), []),
        O = o.useCallback(() => b(!1), []),
        y = o.useCallback((e, t, n) => {
            Z({
                textValue: t,
                richValue: n
            });
        }, []),
        j = o.useCallback(
            () =>
                _.length > g
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (l.Z.sendMessage(n.id, d.ZP.parse(n, _), !1),
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
        accessibilityLabel: x,
        channel: n,
        textValue: _,
        richValue: I,
        type: a.I.OVERLAY_INLINE_REPLY,
        onBlur: O,
        onFocus: N,
        focused: S,
        onSubmit: j,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
