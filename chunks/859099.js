var i = r(47120);
var a = r(780384),
    s = r(147913),
    o = r(844070),
    l = r(922611),
    u = r(981631),
    c = r(388032);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function f(e) {
    let { relationship: n } = e,
        r = (0, l.JX)({ location: 'RelationshipManager.handleRelationshipAdd' }) && n.userIgnored;
    n.type === u.OGo.PENDING_INCOMING && !r && (a.uv.announce(c.intl.formatToPlainString(c.t.zH0kCw, { username: n.user.username })), o.T(n.user));
}
function _(e) {
    let { user: n } = e;
    a.uv.announce(c.intl.formatToPlainString(c.t['/+7xk5'], { username: n.username })), o.z(n);
}
class h extends s.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                RELATIONSHIP_ADD: f,
                FRIEND_REQUEST_ACCEPTED: _
            });
    }
}
n.Z = new h();
