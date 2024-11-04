n.d(t, {
    n3: function () {
        return s;
    }
});
var i = n(823379),
    l = n(44136),
    r = n(354459);
function s(e, t, n) {
    return null == t || t.type === r.fO.ACTIVITY ? [] : [t.type === r.fO.STREAM ? e.find((e) => e.type === r.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, l.ZP)(e)) : null, t.type === r.fO.USER ? e.find((e) => e.type === r.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find((e) => e.type === r.fO.USER && e.id === n && (0, l.ZP)(e)) : null].filter(i.lm);
}
