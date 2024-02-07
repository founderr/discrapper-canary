"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007");
var n = s("37983");
s("884691");
var r = s("414456"),
  l = s.n(r),
  i = s("77078"),
  a = s("446674"),
  o = s("265586"),
  u = s("606292"),
  d = s("688318"),
  c = s("635357"),
  f = s("184900"),
  E = s("845962"),
  _ = s("506885"),
  p = s("697218"),
  I = s("153160"),
  S = s("426188"),
  h = s("49111"),
  m = s("782340"),
  C = s("416465"),
  T = s("513002");
let x = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, a.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: r
    } = (0, d.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, u.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
    });
    return (0, n.jsx)("img", {
      src: r,
      alt: t.label,
      className: C.avatarDecoration
    })
  },
  P = e => {
    var t;
    let {
      profileEffect: s
    } = e, r = (0, a.useStateFromStores)([E.default], () => E.default.getProfileEffectById(s.id)), {
      accessibilityLabel: l,
      thumbnailPreviewSrc: i,
      title: o
    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
    return (0, n.jsxs)("div", {
      className: C.profileEffectContainer,
      children: [(0, n.jsx)("img", {
        src: T,
        alt: l,
        className: C.profileEffectBackground
      }), (0, n.jsx)("img", {
        className: C.profileEffect,
        src: i,
        alt: o
      })]
    })
  };
var R = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: r
  } = e, {
    product: u
  } = (0, S.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), T = (0, a.useStateFromStores)([p.default], () => p.default.getCurrentUser());
  if (null == u || null == s) return null;
  let [R] = u.items, v = null != d && d.id !== (null == T ? void 0 : T.id);
  return (0, n.jsxs)("div", {
    className: r,
    children: [(0, n.jsxs)("div", {
      className: C.previewTitleContainer,
      children: [(0, n.jsx)(i.FormTitle, {
        className: C.previewTitle,
        children: m.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), v && (0, n.jsx)(i.Popout, {
        preload: () => (0, _.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, n.jsx)(f.default, {
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
        children: e => (0, n.jsx)(i.Clickable, {
          ...e,
          className: C.previewLink,
          children: (0, n.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: m.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, n.jsxs)("div", {
      className: l(C.previewContainer, {
        [C.previewContainerError]: null != E
      }),
      children: [R.type === o.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(x, {
        avatarDecoration: R
      }), R.type === o.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(P, {
        profileEffect: R
      }), (0, n.jsxs)("div", {
        className: C.previewTextContainer,
        children: [(0, n.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: u.name
        }), (0, n.jsx)(i.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: R.type === o.CollectiblesItemType.AVATAR_DECORATION ? m.default.Messages.USER_SETTINGS_AVATAR_DECORATION : R.type === o.CollectiblesItemType.PROFILE_EFFECT ? m.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/semibold",
        children: (0, I.formatPrice)(s.amount, s.currency)
      })]
    }), null != E && (0, n.jsx)(i.Text, {
      className: C.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}