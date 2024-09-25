var r = n(789020);
var i = n(47120);
var a = n(533800),
    o = n(147913),
    s = n(305325),
    l = n(82085),
    u = n(630388),
    c = n(981631);
function d(e, t, n) {
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
function _(e) {
    var t, n, r;
    let { guild: i, flags: o } = e.invite;
    if (null != i && (null == i ? void 0 : null === (t = i.features) || void 0 === t ? void 0 : t.includes(c.oNc.HUB))) {
        l.Z.onOpenHubInvite(e.invite);
        return;
    }
    !(0, u.yE)(null != o ? o : 0, a.$.IS_GUEST_INVITE) && null != i && (null == i ? void 0 : null === (n = i.features) || void 0 === n ? void 0 : n.includes(c.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == i ? void 0 : null === (r = i.features) || void 0 === r ? void 0 : r.includes(c.oNc.PREVIEW_ENABLED)) && (0, s.hk)(i.id);
}
class E extends o.Z {
    constructor(...e) {
        super(...e), d(this, 'actions', { INVITE_ACCEPT_SUCCESS: _ });
    }
}
t.Z = new E();
