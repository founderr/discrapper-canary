var r = n(47120);
var i = n(780384),
    a = n(147913),
    o = n(844070),
    s = n(981631),
    l = n(689938);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    e.relationship.type === s.OGo.PENDING_INCOMING && (i.uv.announce(l.Z.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({ username: e.relationship.user.username })), o.T(e.relationship.user));
}
function d(e) {
    let { user: t } = e;
    i.uv.announce(l.Z.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({ username: t.username })), o.z(t);
}
class _ extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                RELATIONSHIP_ADD: c,
                FRIEND_REQUEST_ACCEPTED: d
            });
    }
}
t.Z = new _();
