var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140),
    c = n(496675),
    d = n(981631);
function u() {
    return !0;
}
class h extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], u);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= d.Hqc && c.Z.can(d.Plq.ADMINISTRATOR, e);
    }
}
(a = 'InviteNoticeStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new h(o.Z));
