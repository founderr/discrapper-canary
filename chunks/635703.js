n.r(t), n.d(t, {
  openCreateGuildModal: function() {
    return I
  },
  updateCreateGuildModal: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var s = n(481060),
  r = n(390885),
  a = n(626135),
  i = n(299402),
  o = n(675999),
  c = n(981631),
  u = n(630724);

function _(e, t, n, s) {
  return (0, l.jsx)(i.Z, {
    onSuccess: t => {
      r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == s || s(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case o._m.GUILD_TEMPLATES:
          r.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES), a.default.track(c.rMx.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case o._m.CUSTOMIZE_GUILD:
          r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE), a.default.track(c.rMx.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case o._m.CREATION_INTENT:
          a.default.track(c.rMx.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case o._m.JOIN_GUILD:
          r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD), a.default.track(c.rMx.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: !0,
    ...e
  })
}
let I = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: l
    } = e;
    (0, s.openModal)(e => _(e, t, n, l), {
      modalKey: o.PU
    })
  },
  E = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, s.updateModal)(o.PU, e => _(e, t, n))
  }