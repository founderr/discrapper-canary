n(789020), n(47120);
var r = n(533800),
    i = n(147913),
    a = n(305325),
    s = n(82085),
    o = n(630388),
    l = n(461014),
    u = n(981631);
function c(e) {
    var t;
    let { guild: n, flags: i } = e.invite;
    if (null != n && (null == n ? void 0 : null === (t = n.features) || void 0 === t ? void 0 : t.includes(u.oNc.HUB))) {
        s.Z.onOpenHubInvite(e.invite);
        return;
    }
    !(0, o.yE)(null != i ? i : 0, r.$.IS_GUEST_INVITE) && null != n && (0, l.u)(n) && (0, a.hk)(n.id);
}
class d extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { INVITE_ACCEPT_SUCCESS: c }),
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
