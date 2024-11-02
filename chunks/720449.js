n.d(e, {
    Z: function () {
        return u;
    }
});
var a = n(913527),
    s = n.n(a),
    l = n(695346),
    i = n(626135),
    o = n(337953),
    r = n(981631);
function u(t, e, n, a) {
    let u = t.trim();
    if (u.length > 0 || null != e) {
        var d;
        l.Ok.updateSetting({
            text: u.length > 0 ? u : '',
            expiresAtMs:
                null != n
                    ? String(
                          s()()
                              .add((0, o.Z)(n), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != e && null != e.id ? e.id : '0',
            emojiName: null != e ? e.name : '',
            createdAtMs: String(s()().toDate().getTime())
        }),
            i.default.track(r.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != a ? a.location : null,
                emoji_type: null == (d = e) ? null : null != d.id ? 'custom' : 'unicode',
                text_len: u.length,
                clear_after: null != n ? ''.concat(n) : null
            });
    } else l.Ok.updateSetting(void 0);
}
