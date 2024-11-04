n(411104);
var i = n(570140),
    r = n(51025),
    a = n(314897),
    l = n(804739);
function s() {
    if (!(0, l.Q)()) return;
    let e = a.default.getToken(),
        t = a.default.getId();
    if (null == e) throw Error('missing user token');
    r.S1(e, t);
}
function o() {
    r.ob();
}
t.Z = {
    init() {
        i.Z.subscribe('CONNECTION_OPEN', s), i.Z.subscribe('LOGOUT', o);
    }
};
