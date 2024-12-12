var i = r(789020);
var a = r(47120);
var s = r(533800),
    o = r(147913),
    l = r(305325),
    u = r(82085),
    c = r(630388),
    d = r(461014),
    f = r(981631);
function _(e, n, r) {
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
function h(e) {
    var n;
    let { guild: r, flags: i } = e.invite;
    if (null != r && (null == r ? void 0 : null === (n = r.features) || void 0 === n ? void 0 : n.includes(f.oNc.HUB))) {
        u.Z.onOpenHubInvite(e.invite);
        return;
    }
    !(0, c.yE)(null != i ? i : 0, s.$.IS_GUEST_INVITE) && null != r && (0, d.u)(r) && (0, l.hk)(r.id);
}
class p extends o.Z {
    constructor(...e) {
        super(...e), _(this, 'actions', { INVITE_ACCEPT_SUCCESS: h });
    }
}
n.Z = new p();
