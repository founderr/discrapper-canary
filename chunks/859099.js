n(47120);
var r = n(780384),
    i = n(147913),
    a = n(844070),
    s = n(922611),
    o = n(981631),
    l = n(388032);
function u(e) {
    let { relationship: t } = e,
        n = (0, s.JX)({ location: 'RelationshipManager.handleRelationshipAdd' }) && t.userIgnored;
    t.type === o.OGo.PENDING_INCOMING && !n && (r.uv.announce(l.intl.formatToPlainString(l.t.zH0kCw, { username: t.user.username })), a.T(t.user));
}
function c(e) {
    let { user: t } = e;
    r.uv.announce(l.intl.formatToPlainString(l.t['/+7xk5'], { username: t.username })), a.z(t);
}
class d extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                RELATIONSHIP_ADD: u,
                FRIEND_REQUEST_ACCEPTED: c
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
t.Z = new d();
