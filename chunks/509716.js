r.d(n, {
    f: function () {
        return c;
    }
});
var i = r(47120);
var a = r(456007),
    s = r(895924),
    o = r(351133),
    l = r(689079),
    u = r(388032);
function c(e) {
    let { option: n, content: r, guildId: i, channelId: c, allowEmptyValues: d, commandOrigin: f = s.bB.CHAT } = e,
        _ = null != r ? (0, a.KF)({ content: r }, 'content').trim() : '',
        h = n.required,
        p = '' === _;
    if (!(null != r))
        return h
            ? {
                  success: !1,
                  error: u.intl.string(u.t.JZJQLy)
              }
            : { success: !0 };
    if (p)
        return d
            ? { success: !0 }
            : h
              ? {
                    success: !1,
                    error: u.intl.string(u.t.JZJQLy)
                }
              : {
                    success: !1,
                    error: (0, l.al)(n)
                };
    let m =
            r.length > 1
                ? {
                      type: 'text',
                      text: _
                  }
                : r[0],
        g = o.Z[n.type](m, n, c, i, f);
    return !g.success && null == g.error && (g.error = (0, l.al)(n)), g;
}
