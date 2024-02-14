"use strict";
n.r(t), n.d(t, {
  handleOpenSelectImageModal: function() {
    return m
  },
  showFileSizeErrorModal: function() {
    return _
  },
  getPreviewAvatar: function() {
    return E
  },
  getPreviewNickname: function() {
    return T
  },
  getPreviewDisplayName: function() {
    return I
  },
  isColorDark: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("509043"),
  l = n("77078"),
  a = n("336522"),
  s = n("315102"),
  o = n("254490"),
  u = n("737403"),
  d = n("453252"),
  c = n("75015"),
  f = n("782340");

function m(e, t, r, a) {
  (0, l.openModalLazy)(async () => {
    let {
      default: l
    } = await n.el("420333").then(n.bind(n, "420333"));
    return n => (0, i.jsx)(l, {
      filters: a,
      maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      imageSpecifications: e === c.UploadTypes.BANNER && f.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
      onComplete: (n, i) => (0, u.maybeOpenProfilePreviewModal)({
        imageSrc: n,
        file: i,
        uploadType: e,
        guildId: t,
        isTryItOutFlow: r
      }),
      uploadType: e,
      showUpsellHeader: !0,
      ...n
    })
  })
}

function _() {
  (0, a.openUploadError)({
    title: f.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: f.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, o.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    })
  })
}

function E(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (null != e) return e;
  let {
    size: r = 80,
    canAnimate: l = !0
  } = i, a = null === e;
  return a && null == t ? s.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, l)
}

function T(e, t) {
  return "" === e ? null : null != e ? e : t
}

function I(e, t) {
  return "" === e ? null : null != e ? e : t
}

function C(e) {
  let t = null != e ? (0, r.getDarkness)(e) : 1;
  return t > .25
}