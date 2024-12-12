r.d(n, {
    $: function () {
        return c;
    },
    v: function () {
        return u;
    }
});
var i = r(131704),
    a = r(592125),
    s = r(496675),
    o = r(981631);
let l = o.S7T.VIEW_CHANNEL | o.S7T.READ_MESSAGE_HISTORY;
function u(e) {
    return null != e && (e.type === o.d4z.DM || e.type === o.d4z.GROUP_DM || ((0, i.Qm)(e.type) && s.Z.canBasicChannel(l, e)));
}
function c(e) {
    return null != e && u(a.Z.getBasicChannel(e));
}
