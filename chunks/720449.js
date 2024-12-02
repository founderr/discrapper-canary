n.d(e, {
    Z: function () {
        return d;
    }
});
var a = n(913527),
    s = n.n(a),
    l = n(695346),
    i = n(626135),
    o = n(337953),
    r = n(875425),
    u = n(981631);
function d(t, e, n, a) {
    let d = t.trim();
    if (d.length > 0 || null != e) {
        var c;
        l.Ok.updateSetting({
            text: d.length > 0 ? d : '',
            expiresAtMs:
                null != n && n !== r.F.DONT_CLEAR
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
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != a ? a.location : null,
                emoji_type: null == (c = e) ? null : null != c.id ? 'custom' : 'unicode',
                text_len: d.length,
                clear_after: null != n ? ''.concat(n) : null
            });
    } else l.Ok.updateSetting(void 0);
}
