t(47120);
var s = t(735250);
t(470079);
var a = t(120356),
  l = t.n(a),
  i = t(979554),
  r = t(442837),
  o = t(481060),
  d = t(1585),
  c = t(125988),
  u = t(987209),
  E = t(589266),
  C = t(731896),
  f = t(447452),
  h = t(484459),
  p = t(594174),
  x = t(937615),
  T = t(583434),
  m = t(981631),
  I = t(689938),
  v = t(33175),
  S = t(223223),
  g = t(97045);
let _ = e => {
    let {
      avatarDecoration: n
    } = e, t = (0, r.e7)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: a
    } = (0, c.Z)({
      user: t,
      avatarDecorationOverride: n,
      size: (0, d.y9)(o.AvatarSizes.SIZE_40)
    });
    return (0, s.jsx)("img", {
      src: a,
      alt: n.label,
      className: v.avatarDecoration
    })
  },
  N = e => {
    var n;
    let {
      profileEffect: t
    } = e, a = (0, C.V)(t.id), {
      accessibilityLabel: l,
      thumbnailPreviewSrc: i,
      title: r
    } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {}, {
      updatedOnAllSurfaces: o
    } = (0, f.t)({
      location: "ProfileEffectPreview"
    });
    return (0, s.jsxs)("div", {
      className: v.profileEffectContainer,
      children: [(0, s.jsx)("img", {
        src: o ? g : S,
        alt: l,
        className: v.profileEffectBackground
      }), (0, s.jsx)("img", {
        className: v.profileEffect,
        src: i,
        alt: r
      })]
    })
  };
n.Z = e => {
  let {
    selectedSkuId: n,
    selectedSkuPricePreview: t,
    className: a
  } = e, {
    product: d
  } = (0, T.T)(n), {
    giftRecipient: c,
    giftRecipientError: C
  } = (0, u.wD)(), f = (0, r.e7)([p.default], () => p.default.getCurrentUser());
  if (null == d || null == t) return null;
  let [S] = d.items, g = null != c && c.id !== (null == f ? void 0 : f.id);
  return (0, s.jsxs)("div", {
    className: a,
    children: [(0, s.jsxs)("div", {
      className: v.previewTitleContainer,
      children: [(0, s.jsx)(o.FormTitle, {
        className: v.previewTitle,
        children: I.Z.Messages.COLLECTIBLES_GIFT_LABEL
      }), g && (0, s.jsx)(o.Popout, {
        preload: () => (0, h.Z)(c.id, c.getAvatarURL(null, 80)),
        renderPopout: e => (0, s.jsx)(E.Z, {
          ...e,
          location: "CollectiblesGiftPreview",
          user: c,
          pendingAvatar: c.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: S.type === i.Z.AVATAR_DECORATION ? S : null,
          pendingProfileEffectId: S.type === i.Z.PROFILE_EFFECT ? S.id : null,
          canUsePremiumCustomization: !0,
          onAvatarChange: m.dG4,
          onBannerChange: m.dG4,
          disabledInputs: !0
        }),
        align: "center",
        position: "right",
        children: e => (0, s.jsx)(o.Clickable, {
          ...e,
          className: v.previewLink,
          children: (0, s.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: I.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, c.id)]
    }), (0, s.jsxs)("div", {
      className: l()(v.previewContainer, {
        [v.previewContainerError]: null != C
      }),
      children: [S.type === i.Z.AVATAR_DECORATION && (0, s.jsx)(_, {
        avatarDecoration: S
      }), S.type === i.Z.PROFILE_EFFECT && (0, s.jsx)(N, {
        profileEffect: S
      }), (0, s.jsxs)("div", {
        className: v.previewTextContainer,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.name
        }), (0, s.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: S.type === i.Z.AVATAR_DECORATION ? I.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : S.type === i.Z.PROFILE_EFFECT ? I.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, s.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: (0, x.T4)(t.amount, t.currency)
      })]
    }), null != C && (0, s.jsx)(o.Text, {
      className: v.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: C
    })]
  })
}