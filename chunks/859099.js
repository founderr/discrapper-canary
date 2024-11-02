n(47120);
var r = n(780384),
    i = n(147913),
    a = n(844070),
    s = n(981631),
    o = n(388032);
function l(e) {
    e.relationship.type === s.OGo.PENDING_INCOMING && (r.uv.announce(o.intl.formatToPlainString(o.t.zH0kCw, { username: e.relationship.user.username })), a.T(e.relationship.user));
}
function u(e) {
    let { user: t } = e;
    r.uv.announce(o.intl.formatToPlainString(o.t['/+7xk5'], { username: t.username })), a.z(t);
}
class c extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                RELATIONSHIP_ADD: l,
                FRIEND_REQUEST_ACCEPTED: u
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new c();
