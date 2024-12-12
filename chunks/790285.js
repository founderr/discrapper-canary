r.d(n, {
    MT: function () {
        return s;
    },
    TG: function () {
        return l;
    },
    wB: function () {
        return o;
    }
});
var i = r(149765),
    a = r(981631);
function s(e) {
    return i.e$(e.permissions, a.Plq.VIEW_CHANNEL);
}
function o(e, n) {
    return null != n && (!!i.e$(n.deny, a.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && i.e$(n.deny, a.Plq.CONNECT)));
}
function l(e, n) {
    return !(null == n || o(e, n)) && !!i.e$(n.allow, a.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || i.e$(n.allow, a.Plq.CONNECT));
}
