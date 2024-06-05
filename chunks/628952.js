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
  S = n("484459"),
  C = n("594174"),
  p = n("937615"),
  T = n("583434"),
  m = n("981631"),
  I = n("689938"),
  _ = n("530244"),
  x = n("223223");
let N = e => {
    let {
      avatarDecoration: t
    } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
      avatarDecorationSrc: l
    } = (0, u.default)({
      user: n,
      avatarDecorationOverride: t,
      size: (0, d.getDecorationSizeForAvatarSize)(o.AvatarSizes.SIZE_40)
    });
    return (0, a.jsx)("img", {
      src: l,
      alt: t.label,
      className: _.avatarDecoration
    })
  },
  P = e => {
    var t;
    let {
      profileEffect: n
    } = e, l = (0, E.useProfileEffectPreset)(n.id), {
      accessibilityLabel: s,
      thumbnailPreviewSrc: r,
      title: i
    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {};
    return (0, a.jsxs)("div", {
      className: _.profileEffectContainer,
      children: [(0, a.jsx)("img", {
        src: x,
        alt: s,
        className: _.profileEffectBackground
      }), (0, a.jsx)("img", {
        className: _.profileEffect,
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
  } = (0, T.useFetchCollectiblesProduct)(t), {
    giftRecipient: u,
    giftRecipientError: E
  } = (0, c.useGiftContext)(), x = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser());
  if (null == d || null == n) return null;
  let [A] = d.items, h = null != u && u.id !== (null == x ? void 0 : x.id);
  return (0, a.jsxs)("div", {
    className: l,
    children: [(0, a.jsxs)("div", {
      className: _.previewTitleContainer,
      children: [(0, a.jsx)(o.FormTitle, {
        className: _.previewTitle,
        children: I.default.Messages.COLLECTIBLES_GIFT_LABEL
      }), h && (0, a.jsx)(o.Popout, {
        preload: () => (0, S.default)(u.id, u.getAvatarURL(null, 80)),
        renderPopout: e => (0, a.jsx)(f.default, {
          ...e,
          location: "CollectiblesGiftPreview",
          user: u,
          pendingAvatar: u.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: A.type === r.CollectiblesItemType.AVATAR_DECORATION ? A : null,
          pendingProfileEffectId: A.type === r.CollectiblesItemType.PROFILE_EFFECT ? A.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: m.NOOP,
          onBannerChange: m.NOOP,
          hideRecentGames: !0,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, a.jsx)(o.Clickable, {
          ...e,
          className: _.previewLink,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: I.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, u.id)]
    }), (0, a.jsxs)("div", {
      className: s()(_.previewContainer, {
        [_.previewContainerError]: null != E
      }),
      children: [A.type === r.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(N, {
        avatarDecoration: A
      }), A.type === r.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)(P, {
        profileEffect: A
      }), (0, a.jsxs)("div", {
        className: _.previewTextContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.name
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: A.type === r.CollectiblesItemType.AVATAR_DECORATION ? I.default.Messages.USER_SETTINGS_AVATAR_DECORATION : A.type === r.CollectiblesItemType.PROFILE_EFFECT ? I.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: (0, p.formatPrice)(n.amount, n.currency)
      })]
    }), null != E && (0, a.jsx)(o.Text, {
      className: _.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: E
    })]
  })
}