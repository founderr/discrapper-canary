n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(904245),
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
function E(e) {
    let { id: t, channel: n, onSend: E } = e,
        v = (0, h.Z)(),
        { placeholder: g, accessibilityLabel: _ } = (0, a.Z)(n),
        [C, S] = r.useState(() => (0, u.H2)()),
        { textValue: I, richValue: Z } = C,
        [N, x] = r.useState(!1),
        O = r.useCallback(() => x(!0), []),
        T = r.useCallback(() => x(!1), []),
        A = r.useCallback((e, t, n) => {
            S({
                textValue: t,
                richValue: n
            });
        }, []),
        y = r.useCallback(
            () =>
                I.length > v
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (l.Z.sendMessage(n.id, d.ZP.parse(n, I), !1),
                      o.Z.setInputLocked(!0, (0, f.QF)()),
                      o.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == E || E(I),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [I, v, n, t, E]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: m.textArea,
        onChange: A,
        placeholder: g,
        accessibilityLabel: _,
        channel: n,
        textValue: I,
        richValue: Z,
        type: s.I.OVERLAY_INLINE_REPLY,
        onBlur: T,
        onFocus: O,
        focused: N,
        onSubmit: y,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
