n.d(t, {
    Z: function () {
        return g;
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
    d = n(893718),
    c = n(957730),
    h = n(849522),
    f = n(145597),
    p = n(981631),
    m = n(561990);
function g(e) {
    let { id: t, channel: n, onSend: g } = e,
        v = (0, h.Z)(),
        { placeholder: E, accessibilityLabel: Z } = (0, s.Z)(n),
        [C, x] = l.useState(() => (0, u.H2)()),
        { textValue: S, richValue: I } = C,
        [_, O] = l.useState(!1),
        N = l.useCallback(() => O(!0), []),
        y = l.useCallback(() => O(!1), []),
        T = l.useCallback((e, t, n) => {
            x({
                textValue: t,
                richValue: n
            });
        }, []),
        j = l.useCallback(
            () =>
                S.length > v
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (o.Z.sendMessage(n.id, c.ZP.parse(n, S), !1),
                      r.Z.setInputLocked(!0, (0, f.QF)()),
                      r.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == g || g(S),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [S, v, n, t, g]
        );
    return (0, i.jsx)(d.Z, {
        innerClassName: m.textArea,
        onChange: T,
        placeholder: E,
        accessibilityLabel: Z,
        channel: n,
        textValue: S,
        richValue: I,
        type: a.I.OVERLAY_INLINE_REPLY,
        onBlur: y,
        onFocus: N,
        focused: _,
        onSubmit: j,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
