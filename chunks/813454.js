"use strict";
l.r(a), l.d(a, {
  default: function() {
    return j
  }
}), l("47120");
var t = l("735250"),
  i = l("470079"),
  r = l("866442"),
  n = l("442837"),
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
  T = l("486324"),
  A = l("228168"),
  E = l("689938"),
  y = l("361142");

function P(e) {
  let {
    backgroundColor: a,
    disabledInputs: l,
    onUpsellClick: i
  } = e;
  return (0, t.jsx)("div", {
    className: y.banner,
    style: {
      backgroundColor: a
    },
    children: !l && (0, t.jsx)(s.Clickable, {
      onClick: i,
      className: y.upsell,
      children: (0, t.jsx)(s.Heading, {
        variant: "eyebrow",
        color: "always-white",
        children: E.default.Messages.USER_SETTINGS_UNLOCK_BANNER
      })
    })
  })
}

function x(e) {
  let {
    backgroundColor: a,
    displayProfile: r,
    previewBanner: o,
    isTryItOutFlow: u,
    disabledInputs: c,
    onBannerChange: P
  } = e, x = (0, n.useStateFromStores)([p.default], () => p.default.isFocused()), [j, U] = i.useState(!1), C = v.GifAutoPlay.getSetting(), {
    bannerSrc: N
  } = (0, m.default)({
    displayProfile: r,
    overrideBannerSrc: null != o ? o : void 0,
    size: (0, f.getUserBannerSize)(A.UserProfileTypes.BITE_SIZE),
    canAnimate: C ? x : j
  });
  return (0, t.jsxs)("div", {
    onMouseEnter: () => U(!0),
    onMouseLeave: () => U(!1),
    children: [(0, t.jsx)(d.default, {
      className: y.imageUploader,
      showRemoveButton: !1,
      disabled: c,
      image: N,
      makeURL: () => N,
      imageStyle: {
        backgroundColor: a
      },
      imageClassName: y.banner,
      hint: E.default.Messages.CHANGE_BANNER,
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
            uploadType: T.UploadTypes.BANNER,
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
        let a = null !== (e = null == r ? void 0 : r.guildId) && void 0 !== e ? e : void 0;
        (0, S.handleOpenSelectImageModal)(T.UploadTypes.BANNER, a, u)
      }
    }), !C && (0, h.isAnimatedImageURL)(N) && (0, t.jsx)(g.default, {
      className: y.gifTag
    })]
  })
}

function j(e) {
  var a;
  let {
    displayProfile: l,
    canUsePremiumCustomization: i,
    previewAvatar: n,
    previewBanner: d,
    previewPrimaryColor: f,
    previewProfileEffectId: m,
    pendingAccentColor: v,
    isTryItOutFlow: p,
    disabledInputs: g,
    forProfileEffectModal: h,
    onBannerChange: S,
    onUpsellClick: I
  } = e, T = (0, o.default)(n, (0, s.useToken)(s.tokens.unsafe_rawColors.PRIMARY_530).hsl(), !1), E = null !== (a = null != v ? v : f) && void 0 !== a ? a : (0, r.hex2int)(T), y = (0, u.default)(E).hsl;
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)(c.default, {
      profileType: A.UserProfileTypes.BITE_SIZE,
      hasBanner: null != d,
      isPremium: i,
      hasThemeColors: null != f,
      hasProfileEffect: null != m,
      overrideBannerWidth: h ? 280 : void 0,
      children: i ? (0, t.jsx)(x, {
        backgroundColor: y,
        displayProfile: l,
        previewBanner: d,
        isTryItOutFlow: p,
        disabledInputs: g,
        onBannerChange: S
      }) : (0, t.jsx)(P, {
        backgroundColor: y,
        disabledInputs: g,
        onUpsellClick: I
      })
    })
  })
}