"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  i = s("979554"),
  r = s("442837"),
  d = s("481060"),
  u = s("1585"),
  o = s("125988"),
  c = s("987209"),
  S = s("962746"),
  E = s("731896"),
  f = s("484459"),
  I = s("594174"),
  _ = s("937615"),
  T = s("583434"),
  C = s("981631"),
  N = s("689938"),
  A = s("530244"),
  p = s("223223");
let m = e => {
    let {
      avatarDecoration: t
    } = e, s = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, o.default)({
      user: s,
      avatarDecorationOverride: t,
      size: (0, u.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_40)
    });
    return (0, a.jsx)("img", {
      src: l,
      alt: t.label,
      className: A.avatarDecoration
    })
  },
  P = e => {
    var t;
    let {
      profileEffect: s
    } = e, l = (0, E.useProfileEffectPreset)(s.id), {
      accessibilityLabel: n,
      thumbnailPreviewSrc: i,
      title: r
    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {};
    return (0, a.jsxs)("div", {
      className: A.profileEffectContainer,
      children: [(0, a.jsx)("img", {
        src: p,
        alt: n,
        className: A.profileEffectBackground
      }), (0, a.jsx)("img", {
        className: A.profileEffect,
        src: i,
        alt: r
      })]
    })
  };
t.default = e => {
  let {
    selectedSkuId: t,
    selectedSkuPricePreview: s,
    className: l
  } = e, {
    product: u
  } = (0, T.useFetchCollectiblesProduct)(t), {
    giftRecipient: o,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), p = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser());
  if (null == u || null == s) return null;
  let [O] = u.items, g = null != o && o.id !== (null == p ? void 0 : p.id);
  return (0, a.jsxs)("div", {
    className: l,
    children: [(0, a.jsxs)("div", {
      className: A.previewTitleContainer,
      children: [(0, a.jsx)(d.FormTitle, {
        className: A.previewTitle,
        children: N.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), g && (0, a.jsx)(d.Popout, {
        preload: () => (0, f.default)(o.id, o.getAvatarURL(null, 80)),
        renderPopout: e => (0, a.jsx)(S.default, {
          ...e,
          user: o,
          pendingAvatar: o.getAvatarURL(null, (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: O.type === i.CollectiblesItemType.AVATAR_DECORATION ? O : null,
          pendingProfileEffectId: O.type === i.CollectiblesItemType.PROFILE_EFFECT ? O.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: C.NOOP,
          onBannerChange: C.NOOP,
          hideRecentGames: !0,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, a.jsx)(d.Clickable, {
          ...e,
          className: A.previewLink,
          children: (0, a.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: N.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, o.id)]
    }), (0, a.jsxs)("div", {
      className: n()(A.previewContainer, {
        [A.previewContainerError]: null != E
      }),
      children: [O.type === i.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(m, {
        avatarDecoration: O
      }), O.type === i.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)(P, {
        profileEffect: O
      }), (0, a.jsxs)("div", {
        className: A.previewTextContainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: u.name
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: O.type === i.CollectiblesItemType.AVATAR_DECORATION ? N.default.Messages.USER_SETTINGS_AVATAR_DECORATION : O.type === i.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: (0, _.formatPrice)(s.amount, s.currency)
      })]
    }), null != E && (0, a.jsx)(d.Text, {
      className: A.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}