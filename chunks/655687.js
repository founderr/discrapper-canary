n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(933557),
    l = n(981631),
    a = n(388032);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.ZP)(e, !0),
        r = (0, i.ZP)(e, !1);
    if (null == e || null == n)
        return {
            placeholder: '',
            accessibilityLabel: ''
        };
    if (t)
        return {
            placeholder: a.intl.string(a.t.RRvRp6),
            accessibilityLabel: a.intl.string(a.t.RRvRp6)
        };
    if (e.isForumPost())
        return {
            placeholder: a.intl.formatToPlainString(a.t.Y6qWLS, { channel: n }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoa, { channel: r })
        };
    if (l.TPd.THREADS.has(e.type))
        return {
            placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: n }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWV, { channel: r })
        };
    if (e.type === l.d4z.DM)
        return {
            placeholder: a.intl.formatToPlainString(a.t['4c+CAw'], { channel: n }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbW, { channel: r })
        };
    return {
        placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: n }),
        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSE, { channel: r })
    };
}
