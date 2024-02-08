"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  l = n("265586"),
  a = n("446674"),
  u = n("77078"),
  o = n("606292"),
  d = n("688318"),
  c = n("635357"),
  f = n("184900"),
  p = n("845962"),
  S = n("506885"),
  E = n("697218"),
  m = n("153160"),
  _ = n("426188"),
  I = n("49111"),
  C = n("782340"),
  T = n("416465"),
  x = n("513002");
let h = e => {
    let {
      avatarDecoration: t
    } = e, n = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), {
      avatarDecorationSrc: i
    } = (0, d.default)({
      user: n,
      avatarDecorationOverride: t,
      size: (0, o.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_40)
    });
    return (0, s.jsx)("img", {
      src: i,
      alt: t.label,
      className: T.avatarDecoration
    })
  },
  g = e => {
    var t;
    let {
      profileEffect: n
    } = e, i = (0, a.useStateFromStores)([p.default], () => p.default.getProfileEffectById(n.id)), {
      accessibilityLabel: r,
      thumbnailPreviewSrc: l,
      title: u
    } = null !== (t = null == i ? void 0 : i.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)("div", {
      className: T.profileEffectContainer,
      children: [(0, s.jsx)("img", {
        src: x,
        alt: r,
        className: T.profileEffectBackground
      }), (0, s.jsx)("img", {
        className: T.profileEffect,
        src: l,
        alt: u
      })]
    })
  };
var P = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: n,
    className: i
  } = e, {
    product: o
  } = (0, _.useFetchCollectiblesProduct)(t), {
    giftRecipient: d,
    giftRecipientError: p
  } = (0, c.useGiftContext)(), x = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser());
  if (null == o || null == n) return null;
  let [P] = o.items, A = null != d && d.id !== (null == x ? void 0 : x.id);
  return (0, s.jsxs)("div", {
    className: i,
    children: [(0, s.jsxs)("div", {
      className: T.previewTitleContainer,
      children: [(0, s.jsx)(u.FormTitle, {
        className: T.previewTitle,
        children: C.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), A && (0, s.jsx)(u.Popout, {
        preload: () => (0, S.default)(d.id, d.getAvatarURL(null, 80)),
        renderPopout: e => (0, s.jsx)(f.default, {
          ...e,
          user: d,
          pendingAvatar: d.getAvatarURL(null, (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: P.type === l.CollectiblesItemType.AVATAR_DECORATION ? P : null,
          pendingProfileEffectId: P.type === l.CollectiblesItemType.PROFILE_EFFECT ? P.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: I.NOOP,
          onBannerChange: I.NOOP,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, s.jsx)(u.Clickable, {
          ...e,
          className: T.previewLink,
          children: (0, s.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: C.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, d.id)]
    }), (0, s.jsxs)("div", {
      className: r(T.previewContainer, {
        [T.previewContainerError]: null != p
      }),
      children: [P.type === l.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(h, {
        avatarDecoration: P
      }), P.type === l.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(g, {
        profileEffect: P
      }), (0, s.jsxs)("div", {
        className: T.previewTextContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: o.name
        }), (0, s.jsx)(u.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: P.type === l.CollectiblesItemType.AVATAR_DECORATION ? C.default.Messages.USER_SETTINGS_AVATAR_DECORATION : P.type === l.CollectiblesItemType.PROFILE_EFFECT ? C.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, s.jsx)(u.Text, {
        variant: "text-md/semibold",
        children: (0, m.formatPrice)(n.amount, n.currency)
      })]
    }), null != p && (0, s.jsx)(u.Text, {
      className: T.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: p
    })]
  })
}