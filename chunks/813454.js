"use strict";
l.r(a), l.d(a, {
  default: function() {
    return U
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
  A = l("200299"),
  I = l("486324"),
  x = l("228168"),
  y = l("689938"),
  E = l("361142");

function T(e) {
  let {
    backgroundColor: a,
    disabledInputs: l,
    onUpsellClick: i
  } = e;
  return (0, t.jsx)("div", {
    className: E.banner,
    style: {
      backgroundColor: a
    },
    children: !l && (0, t.jsx)(s.Clickable, {
      onClick: i,
      className: E.upsell,
      children: (0, t.jsx)(s.Heading, {
        variant: "eyebrow",
        color: "always-white",
        children: y.default.Messages.USER_SETTINGS_UNLOCK_BANNER
      })
    })
  })
}

function P(e) {
  let {
    backgroundColor: a,
    displayProfile: n,
    pendingBanner: o,
    isTryItOutFlow: u,
    disabledInputs: c,
    onBannerChange: T
  } = e, P = (0, r.useStateFromStores)([p.default], () => p.default.isFocused()), [U, j] = i.useState(!1), N = v.GifAutoPlay.getSetting(), {
    bannerSrc: C
  } = (0, m.default)({
    displayProfile: n,
    overrideBannerSrc: null != o ? o : void 0,
    size: (0, f.getUserBannerSize)(x.UserProfileTypes.BITE_SIZE),
    canAnimate: N ? P : U
  });
  return (0, t.jsxs)("div", {
    onMouseEnter: () => j(!0),
    onMouseLeave: () => j(!1),
    children: [(0, t.jsx)(d.default, {
      className: E.imageUploader,
      showRemoveButton: !1,
      disabled: c,
      image: C,
      makeURL: () => C,
      imageStyle: {
        backgroundColor: a
      },
      imageClassName: E.banner,
      hint: y.default.Messages.CHANGE_BANNER,
      hideSize: !0,
      maxFileSizeBytes: A.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onChange: (e, a) => {
        if (null == e || null == a) return T(null);
        (0, s.openModalLazy)(async () => {
          let {
            default: i
          } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
          return l => (0, t.jsx)(i, {
            onCrop: T,
            uploadType: I.UploadTypes.BANNER,
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
        (0, S.handleOpenSelectImageModal)(I.UploadTypes.BANNER, a, u)
      }
    }), !N && (0, h.isAnimatedImageURL)(C) && (0, t.jsx)(g.default, {
      className: E.gifTag
    })]
  })
}

function U(e) {
  var a;
  let {
    displayProfile: l,
    canUsePremiumCustomization: i,
    pendingBanner: r,
    pendingAccentColor: d,
    previewAvatar: f,
    previewThemeColors: m,
    previewProfileEffectId: v,
    isTryItOutFlow: p,
    disabledInputs: g,
    forProfileEffectModal: h,
    onBannerChange: S,
    onUpsellClick: A
  } = e, I = (0, o.default)(f, (0, s.useToken)(s.tokens.unsafe_rawColors.PRIMARY_530).hsl(), !1), y = null !== (a = null != d ? d : null == m ? void 0 : m[0]) && void 0 !== a ? a : (0, n.hex2int)(I), E = (0, u.default)(y).hsl;
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)(c.default, {
      profileType: x.UserProfileTypes.BITE_SIZE,
      hasBanner: null != v || (null == l ? void 0 : l.getPreviewBanner(r, !1)) != null,
      isPremium: i,
      hasThemeColors: (null == l ? void 0 : l.canUsePremiumProfileCustomization) || i,
      hasProfileEffect: null != v,
      overrideBannerWidth: h ? 280 : void 0,
      children: i ? (0, t.jsx)(P, {
        backgroundColor: E,
        displayProfile: l,
        pendingBanner: r,
        isTryItOutFlow: p,
        disabledInputs: g,
        onBannerChange: S
      }) : (0, t.jsx)(T, {
        backgroundColor: E,
        disabledInputs: g,
        onUpsellClick: A
      })
    })
  })
}