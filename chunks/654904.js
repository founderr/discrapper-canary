"use strict";
n.r(t), n.d(t, {
  getPreviewAvatar: function() {
    return f
  },
  getPreviewName: function() {
    return S
  },
  getPreviewProfileEffectId: function() {
    return h
  },
  handleOpenSelectImageModal: function() {
    return I
  },
  isColorDark: function() {
    return A
  },
  showFileSizeErrorModal: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("866442"),
  s = n("481060"),
  a = n("531643"),
  o = n("768581"),
  l = n("403182"),
  u = n("51144"),
  d = n("661543"),
  _ = n("200299"),
  c = n("486324"),
  E = n("689938");

function I(e, t, r, a) {
  (0, s.openModalLazy)(async () => {
    let {
      default: s
    } = await Promise.all([n.e("99387"), n.e("89289")]).then(n.bind(n, "28130"));
    return n => (0, i.jsx)(s, {
      filters: a,
      maxFileSizeBytes: _.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      imageSpecifications: e === c.UploadTypes.BANNER && E.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
      onComplete: (n, i) => (0, d.maybeOpenProfilePreviewModal)({
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

function T() {
  (0, a.openUploadError)({
    title: E.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: E.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, l.sizeString)(_.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    })
  })
}

function f(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (null != e) return e;
  let {
    size: r = 80,
    canAnimate: s = !0
  } = i, a = null === e;
  return a && null == t ? o.default.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, s) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, s)
}

function S(e) {
  var t;
  let {
    pendingNickname: n,
    pendingGlobalName: i,
    user: r,
    guildMember: s
  } = e, a = "" === n ? null : null != n ? n : null == s ? void 0 : s.nick;
  return null !== (t = null != a ? a : "" === i ? null : i) && void 0 !== t ? t : u.default.getName(r)
}

function h(e) {
  var t, n;
  let {
    pendingProfileEffectId: i,
    displayProfile: r
  } = e, s = null == r ? void 0 : null === (t = r._userProfile) || void 0 === t ? void 0 : t.profileEffectId, a = null == r ? void 0 : null === (n = r._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId, o = null === i;
  return o && null != a ? s : o ? null : null != i ? i : null == r ? void 0 : r.profileEffectId
}

function A(e) {
  return (null != e ? (0, r.getDarkness)(e) : 1) > .25
}