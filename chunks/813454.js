"use strict";
l.r(a), l.d(a, {
  default: function() {
    return j
  }
}), l("47120");
var t = l("735250"),
  i = l("470079"),
  n = l("866442"),
  r = l("442837"),
  s = l("481060"),
  o = l("220082"),
  u = l("583405"),
  d = l("208567"),
  c = l("943217"),
  f = l("793397"),
  m = l("888778"),
  v = l("695346"),
  p = l("451478"),
  g = l("311715"),
  h = l("768581"),
  S = l("654904"),
  I = l("200299"),
  A = l("486324"),
  y = l("228168"),
  T = l("689938"),
  x = l("361142");

function P(e) {
  let {
    backgroundColor: a,
    disabledInputs: l,
    onUpsellClick: i
  } = e;
  return (0, t.jsx)("div", {
    className: x.banner,
    style: {
      backgroundColor: a
    },
    children: !l && (0, t.jsx)(s.Clickable, {
      onClick: i,
      className: x.upsell,
      children: (0, t.jsx)(s.Heading, {
        variant: "eyebrow",
        color: "always-white",
        children: T.default.Messages.USER_SETTINGS_UNLOCK_BANNER
      })
    })
  })
}

function E(e) {
  let {
    backgroundColor: a,
    displayProfile: n,
    previewBanner: o,
    isTryItOutFlow: u,
    disabledInputs: c,
    onBannerChange: P
  } = e, E = (0, r.useStateFromStores)([p.default], () => p.default.isFocused()), [j, N] = i.useState(!1), U = v.GifAutoPlay.getSetting(), {
    bannerSrc: C
  } = (0, m.default)({
    displayProfile: n,
    overrideBannerSrc: null != o ? o : void 0,
    size: (0, f.getUserBannerSize)(y.UserProfileTypes.BITE_SIZE),
    canAnimate: U ? E : j
  });
  return (0, t.jsxs)("div", {
    onMouseEnter: () => N(!0),
    onMouseLeave: () => N(!1),
    children: [(0, t.jsx)(d.default, {
      className: x.imageUploader,
      showRemoveButton: !1,
      disabled: c,
      image: C,
      makeURL: () => C,
      imageStyle: {
        backgroundColor: a
      },
      imageClassName: x.banner,
      hint: T.default.Messages.CHANGE_BANNER,
      hideSize: !0,
      maxFileSizeBytes: I.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onChange: (e, a) => {
        if (null == e || null == a) return P(null);
        (0, s.openModalLazy)(async () => {
          let {
            default: i
          } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
          return l => (0, t.jsx)(i, {
            onCrop: P,
            uploadType: A.UploadTypes.BANNER,
            file: a,
            imgURI: e,
            allowSkip: !0,
            ...l
          })
        })
      },
      onFileSizeError: S.showFileSizeErrorModal,
      onOpenImageSelectModal: () => {
        var e;
        let a = null !== (e = null == n ? void 0 : n.guildId) && void 0 !== e ? e : void 0;
        (0, S.handleOpenSelectImageModal)(A.UploadTypes.BANNER, a, u)
      }
    }), !U && (0, h.isAnimatedImageURL)(C) && (0, t.jsx)(g.default, {
      className: x.gifTag
    })]
  })
}

function j(e) {
  var a;
  let {
    displayProfile: l,
    canUsePremiumCustomization: i,
    previewAvatar: r,
    previewBanner: d,
    previewPrimaryColor: f,
    previewProfileEffectId: m,
    pendingAccentColor: v,
    isTryItOutFlow: p,
    disabledInputs: g,
    forProfileEffectModal: h,
    onBannerChange: S,
    onUpsellClick: I
  } = e, A = (0, o.default)(r, (0, s.useToken)(s.tokens.unsafe_rawColors.PRIMARY_530).hsl(), !1), T = null !== (a = null != v ? v : f) && void 0 !== a ? a : (0, n.hex2int)(A), x = (0, u.default)(T).hsl;
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)(c.default, {
      profileType: y.UserProfileTypes.BITE_SIZE,
      hasBanner: null != d,
      isPremium: i,
      hasThemeColors: null != f,
      hasProfileEffect: null != m,
      overrideBannerWidth: h ? 280 : void 0,
      children: i ? (0, t.jsx)(E, {
        backgroundColor: x,
        displayProfile: l,
        previewBanner: d,
        isTryItOutFlow: p,
        disabledInputs: g,
        onBannerChange: S
      }) : (0, t.jsx)(P, {
        backgroundColor: x,
        disabledInputs: g,
        onUpsellClick: I
      })
    })
  })
}