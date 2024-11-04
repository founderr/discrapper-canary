var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140),
    c = n(430824),
    d = n(981631);
class u extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], d.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.hasFeature(d.oNc.BANNER) && Date.now() - t >= d.Hqc;
    }
}
(a = 'GuildBoostingNoticeStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new u(o.Z));
