var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(430824),
    d = n(981631);
class u extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], d.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.hasFeature(d.oNc.BANNER) && Date.now() - t >= d.Hqc;
    }
}
(l = 'GuildBoostingNoticeStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(s.Z));
