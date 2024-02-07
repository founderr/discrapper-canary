"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("77078"),
  a = n("446674"),
  o = n("265586"),
  u = n("606292"),
  d = n("688318"),
  c = n("635357"),
  f = n("184900"),
  E = n("845962"),
  p = n("506885"),
  _ = n("697218"),
  I = n("153160"),
  S = n("426188"),
  h = n("49111"),
  m = n("782340"),
  C = n("416465"),
  T = n("513002");
let x = e => {
    let {
      avatarDecoration: t
    } = e, n = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
      avatarDecorationSrc: r
    } = (0, d.default)({
      user: n,
      avatarDecorationOverride: t,
      size: (0, u.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
    });
    return (0, s.jsx)("img", {
      src: r,
      alt: t.label,
      className: C.avatarDecoration
    })
  },
  P = e => {
    var t;
    let {
      profileEffect: n
    } = e, r = (0, a.useStateFromStores)([E.default], () => E.default.getProfileEffectById(n.id)), {
      accessibilityLabel: l,
      thumbnailPreviewSrc: i,
      title: o
    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)("div", {
      className: C.profileEffectContainer,
      children: [(0, s.jsx)("img", {
        src: T,
        alt: l,
        className: C.profileEffectBackground
      }), (0, s.jsx)("img", {
        className: C.profileEffect,
        src: i,
        alt: o
      })]
    })
  };
var R = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: n,
    className: r
  } = e, {
    product: u
  } = (0, S.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), T = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser());
  if (null == u || null == n) return null;
  let [R] = u.items, g = null != d && d.id !== (null == T ? void 0 : T.id);
  return (0, s.jsxs)("div", {
    className: r,
    children: [(0, s.jsxs)("div", {
      className: C.previewTitleContainer,
      children: [(0, s.jsx)(i.FormTitle, {
        className: C.previewTitle,
        children: m.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), g && (0, s.jsx)(i.Popout, {
        preload: () => (0, p.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, s.jsx)(f.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, i.getAvatarSize)(i.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: R.type === o.CollectiblesItemType.AVATAR_DECORATION ? R : null,
          pendingProfileEffectId: R.type === o.CollectiblesItemType.PROFILE_EFFECT ? R.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: h.NOOP,
          onBannerChange: h.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, s.jsx)(i.Clickable, {
          ...e,
          className: C.previewLink,
          children: (0, s.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: m.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, s.jsxs)("div", {
      className: l(C.previewContainer, {
        [C.previewContainerError]: null != E
      }),
      children: [R.type === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(x, {
        avatarDecoration: R
      }), R.type === o.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(P, {
        profileEffect: R
      }), (0, s.jsxs)("div", {
        className: C.previewTextContainer,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: u.name
        }), (0, s.jsx)(i.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: R.type === o.CollectiblesItemType.AVATAR_DECORATION ? m.default.Messages.USER_SETTINGS_AVATAR_DECORATION : R.type === o.CollectiblesItemType.PROFILE_EFFECT ? m.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/semibold",
        children: (0, I.formatPrice)(n.amount, n.currency)
      })]
    }), null != E && (0, s.jsx)(i.Text, {
      className: C.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}