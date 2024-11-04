n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(933557),
    l = n(981631),
    r = n(388032);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.ZP)(e, !0),
        s = (0, i.ZP)(e, !1);
    if (null == e || null == n)
        return {
            placeholder: '',
            accessibilityLabel: ''
        };
    if (t)
        return {
            placeholder: r.intl.string(r.t.RRvRp6),
            accessibilityLabel: r.intl.string(r.t.RRvRp6)
        };
    if (e.isForumPost())
        return {
            placeholder: r.intl.formatToPlainString(r.t.Y6qWLS, { channel: n }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.KffKoa, { channel: s })
        };
    if (l.TPd.THREADS.has(e.type))
        return {
            placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: n }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.UZIMWV, { channel: s })
        };
    if (e.type === l.d4z.DM)
        return {
            placeholder: r.intl.formatToPlainString(r.t['4c+CAw'], { channel: n }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.fqOxbW, { channel: s })
        };
    return {
        placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: n }),
        accessibilityLabel: r.intl.formatToPlainString(r.t.ih7ZSE, { channel: s })
    };
}
