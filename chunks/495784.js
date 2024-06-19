var s = n(913527),
  a = n.n(s),
  l = n(704215),
  i = n(951716),
  r = n(605236),
  o = n(972830),
  c = n(430824),
  d = n(594174),
  u = n(374023),
  _ = n(709054),
  N = n(645792),
  E = n(981631),
  m = n(921944);
t.Z = {
  init(e) {
    let {
      hasModalOpen: t,
      openModal: n
    } = e;
    if (!u.s.isDisallowPopupsSet())(0, o.h)(() => {
      if ((0, i.Z)()) return;
      let e = d.default.getCurrentUser(),
        s = null != e && 7 > a()().diff(a()(_.default.extractTimestamp(e.id)), "days"),
        o = null != Object.values(c.Z.getGuilds()).find(e => e.hasFeature(E.oNc.HUB)),
        u = !(0, r.un)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
      !(s || t() || o || !u) && (0, N.b)() && (N.Z.trackExposure({
        location: "8b792a_1"
      }), n(), (0, r.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL))
    })
  },
  hideHubUpsell() {
    (0, r.EW)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, {
      dismissAction: m.L.AUTO
    })
  }
}