n.d(t, {
    f: function () {
        return u;
    }
});
var r = n(47120);
var i = n(456007),
    a = n(895924),
    o = n(351133),
    s = n(689079),
    l = n(689938);
function u(e) {
    let { option: t, content: n, guildId: r, channelId: u, allowEmptyValues: c, commandOrigin: d = a.bB.CHAT } = e,
        _ = null != n ? (0, i.KF)({ content: n }, 'content').trim() : '',
        E = t.required,
        f = '' === _;
    if (!(null != n))
        return E
            ? {
                  success: !1,
                  error: l.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
              }
            : { success: !0 };
    if (f)
        return c
            ? { success: !0 }
            : E
              ? {
                    success: !1,
                    error: l.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                }
              : {
                    success: !1,
                    error: (0, s.al)(t)
                };
    let h =
            n.length > 1
                ? {
                      type: 'text',
                      text: _
                  }
                : n[0],
        p = o.Z[t.type](h, t, u, r, d);
    return !p.success && null == p.error && (p.error = (0, s.al)(t)), p;
}
