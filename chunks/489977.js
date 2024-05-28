"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("809206"),
  r = n("317770"),
  o = n("18438"),
  u = n("350327"),
  d = n("594174"),
  c = n("74538"),
  f = n("486324");
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
    let C = d.default.getCurrentUser(),
      h = null != r ? o.setPendingAvatar : i.setPendingAvatar;
    if (c.default.canUseAnimatedAvatar(C) || "image/gif" !== l.type) {
      h(t);
      return
    }
    if (null != C) return (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("65866"), n.e("49838")]).then(n.bind(n, "844594"));
      return n => (0, a.jsx)(e, {
        user: C,
        imageSrc: t,
        uploadType: f.UploadTypes.AVATAR,
        onSubscribe: () => h(t),
        ...n
      })
    })
  },
  C = e => {
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
      } = await Promise.all([n.e("99387"), n.e("65866"), n.e("49838")]).then(n.bind(n, "844594"));
      return n => (0, a.jsx)(e, {
        user: r,
        imageSrc: t,
        uploadType: f.UploadTypes.BANNER,
        onSubscribe: () => E(t),
        ...n
      })
    })
  };
class h extends r.default {
  _initialize() {
    l.default.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    l.default.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    return e.uploadType === f.UploadTypes.AVATAR ? E(e) : e.uploadType === f.UploadTypes.BANNER ? C(e) : void 0
  }
}
t.default = new h