"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("809206"),
  r = a("317770"),
  o = a("18438"),
  u = a("350327"),
  d = a("594174"),
  c = a("74538"),
  f = a("486324");
let E = e => {
    let {
      imageSrc: t,
      file: l,
      guildId: r,
      isTryItOutFlow: E
    } = e;
    if (E) {
      (0, u.setTryItOutAvatar)(t);
      return
    }
    let h = d.default.getCurrentUser(),
      _ = null != r ? o.setPendingAvatar : i.setPendingAvatar;
    if (c.default.canUseAnimatedAvatar(h) || "image/gif" !== l.type) {
      _(t);
      return
    }
    if (null != h) return (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("49838")]).then(a.bind(a, "844594"));
      return a => (0, n.jsx)(e, {
        user: h,
        imageSrc: t,
        uploadType: f.UploadTypes.AVATAR,
        onSubscribe: () => _(t),
        ...a
      })
    })
  },
  h = e => {
    let {
      imageSrc: t,
      guildId: l,
      isTryItOutFlow: i
    } = e;
    if (i) {
      (0, u.setTryItOutBanner)(t);
      return
    }
    let r = d.default.getCurrentUser(),
      E = null != l ? o.setPendingBanner : u.setPendingBanner;
    if (c.default.canUsePremiumProfileCustomization(r)) {
      E(t);
      return
    }
    if (null != r) return (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("49838")]).then(a.bind(a, "844594"));
      return a => (0, n.jsx)(e, {
        user: r,
        imageSrc: t,
        uploadType: f.UploadTypes.BANNER,
        onSubscribe: () => E(t),
        ...a
      })
    })
  };
class _ extends r.default {
  _initialize() {
    l.default.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    l.default.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === f.UploadTypes.AVATAR ? E(e) : e.uploadType === f.UploadTypes.BANNER ? h(e) : void 0
  }
}
t.default = new _