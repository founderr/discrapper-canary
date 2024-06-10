"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  r = n("979554"),
  i = n("442837"),
  o = n("481060"),
  d = n("1585"),
  u = n("125988"),
  c = n("987209"),
  f = n("589266"),
  E = n("731896"),
  S = n("447452"),
  C = n("484459"),
  p = n("594174"),
  T = n("937615"),
  m = n("583434"),
  I = n("981631"),
  _ = n("689938"),
  x = n("530244"),
  P = n("223223"),
  N = n("97045");
let A = e => {
    let {
      avatarDecoration: t
    } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, u.default)({
      user: n,
      avatarDecorationOverride: t,
      size: (0, d.getDecorationSizeForAvatarSize)(o.AvatarSizes.SIZE_40)
    });
    return (0, a.jsx)("img", {
      src: l,
      alt: t.label,
      className: x.avatarDecoration
    })
  },
  v = e => {
    var t;
    let {
      profileEffect: n
    } = e, l = (0, E.useProfileEffectPreset)(n.id), {
      accessibilityLabel: s,
      thumbnailPreviewSrc: r,
      title: i
    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {}, {
      updatedOnAllSurfaces: o
    } = (0, S.useSimplifiedProfileExperiment)({
      location: "ProfileEffectPreview"
    });
    return (0, a.jsxs)("div", {
      className: x.profileEffectContainer,
      children: [(0, a.jsx)("img", {
        src: o ? N : P,
        alt: s,
        className: x.profileEffectBackground
      }), (0, a.jsx)("img", {
        className: x.profileEffect,
        src: r,
        alt: i
      })]
    })
  };
t.default = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: n,
    className: l
  } = e, {
    product: d
  } = (0, m.useFetchCollectiblesProduct)(t), {
    giftRecipient: u,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), S = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser());
  if (null == d || null == n) return null;
  let [P] = d.items, N = null != u && u.id !== (null == S ? void 0 : S.id);
  return (0, a.jsxs)("div", {
    className: l,
    children: [(0, a.jsxs)("div", {
      className: x.previewTitleContainer,
      children: [(0, a.jsx)(o.FormTitle, {
        className: x.previewTitle,
        children: _.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), N && (0, a.jsx)(o.Popout, {
        preload: () => (0, C.default)(u.id, u.getAvatarURL(null, 80)),
        renderPopout: e => (0, a.jsx)(f.default, {
          ...e,
          location: "CollectiblesGiftPreview",
          user: u,
          pendingAvatar: u.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: P.type === r.CollectiblesItemType.AVATAR_DECORATION ? P : null,
          pendingProfileEffectId: P.type === r.CollectiblesItemType.PROFILE_EFFECT ? P.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: I.NOOP,
          onBannerChange: I.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, a.jsx)(o.Clickable, {
          ...e,
          className: x.previewLink,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: _.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, u.id)]
    }), (0, a.jsxs)("div", {
      className: s()(x.previewContainer, {
        [x.previewContainerError]: null != E
      }),
      children: [P.type === r.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(A, {
        avatarDecoration: P
      }), P.type === r.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)(v, {
        profileEffect: P
      }), (0, a.jsxs)("div", {
        className: x.previewTextContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.name
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: P.type === r.CollectiblesItemType.AVATAR_DECORATION ? _.default.Messages.USER_SETTINGS_AVATAR_DECORATION : P.type === r.CollectiblesItemType.PROFILE_EFFECT ? _.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: (0, T.formatPrice)(n.amount, n.currency)
      })]
    }), null != E && (0, a.jsx)(o.Text, {
      className: x.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}