"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("152584"),
  r = n("316272"),
  o = n("929423"),
  u = n("783142"),
  d = n("697218"),
  c = n("719923"),
  f = n("75015");
class E extends r.default {
  _initialize() {
    l.default.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    l.default.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    let {
      imageSrc: t,
      file: l,
      uploadType: r,
      guildId: E,
      isTryItOutFlow: _
    } = e, h = null != E ? o.setPendingAvatar : i.setPendingAvatar, C = null != E ? o.setPendingBanner : u.setPendingBanner, I = d.default.getCurrentUser();
    if (r === f.UploadTypes.AVATAR) {
      if (_) {
        (0, u.setTryItOutAvatar)(t);
        return
      }
      let e = c.default.canUseAnimatedAvatar(I);
      if (e || "image/gif" !== l.type) {
        h(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("745544").then(n.bind(n, "745544"));
        return n => (0, a.jsx)(e, {
          avatarSrc: t,
          onSubscribe: () => h(t),
          ...n
        })
      })
    } else if (r === f.UploadTypes.BANNER) {
      if (_) {
        (0, u.setTryItOutBanner)(t);
        return
      }
      let e = c.default.canUsePremiumProfileCustomization(I);
      if (e) {
        C(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("745544").then(n.bind(n, "745544"));
        return n => (0, a.jsx)(e, {
          bannerSrc: t,
          onSubscribe: () => C(t),
          ...n
        })
      })
    }
  }
}
var _ = new E