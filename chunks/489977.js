var s = n(735250);
n(470079);
var i = n(481060),
  l = n(570140),
  a = n(809206),
  r = n(317770),
  o = n(18438),
  c = n(350327),
  u = n(594174),
  d = n(74538),
  E = n(486324);
let h = e => {
    let {
      imageSrc: t,
      file: l,
      guildId: r,
      isTryItOutFlow: h
    } = e;
    if (h) {
      (0, c.c_)(t);
      return
    }
    let _ = u.default.getCurrentUser(),
      I = null != r ? o.I5 : a.I5;
    if (d.ZP.canUseAnimatedAvatar(_) || "image/gif" !== l.type) {
      I(t);
      return
    }
    if (null != _) return (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("4934"), n.e("49838")]).then(n.bind(n, 844594));
      return n => (0, s.jsx)(e, {
        user: _,
        imageSrc: t,
        uploadType: E.pC.AVATAR,
        onSubscribe: () => I(t),
        ...n
      })
    })
  },
  _ = e => {
    let {
      imageSrc: t,
      guildId: l,
      isTryItOutFlow: a
    } = e;
    if (a) {
      (0, c.f4)(t);
      return
    }
    let r = u.default.getCurrentUser(),
      h = null != l ? o.g_ : c.g_;
    if (d.ZP.canUsePremiumProfileCustomization(r)) {
      h(t);
      return
    }
    if (null != r) return (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("4934"), n.e("49838")]).then(n.bind(n, 844594));
      return n => (0, s.jsx)(e, {
        user: r,
        imageSrc: t,
        uploadType: E.pC.BANNER,
        onSubscribe: () => h(t),
        ...n
      })
    })
  };
class I extends r.Z {
  _initialize() {
    l.Z.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    l.Z.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === E.pC.AVATAR ? h(e) : e.uploadType === E.pC.BANNER ? _(e) : void 0
  }
}
t.Z = new I