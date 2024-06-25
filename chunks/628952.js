t(47120);
var a = t(735250);
t(470079);
var s = t(120356),
  i = t.n(s),
  l = t(979554),
  r = t(442837),
  o = t(481060),
  d = t(1585),
  c = t(125988),
  u = t(987209),
  E = t(25373),
  f = t(731896),
  h = t(484459),
  m = t(594174),
  v = t(937615),
  p = t(583434),
  C = t(689938),
  x = t(33175),
  I = t(223223);
let T = e => {
    let {
      avatarDecoration: n
    } = e, t = (0, r.e7)([m.default], () => m.default.getCurrentUser()), {
      avatarDecorationSrc: s
    } = (0, c.Z)({
      user: t,
      avatarDecorationOverride: n,
      size: (0, d.y9)(o.AvatarSizes.SIZE_40)
    });
    return (0, a.jsx)("img", {
      src: s,
      alt: n.label,
      className: x.avatarDecoration
    })
  },
  g = e => {
    var n;
    let {
      profileEffect: t
    } = e, s = (0, f.V)(t.id), {
      accessibilityLabel: i,
      thumbnailPreviewSrc: l,
      title: r
    } = null !== (n = null == s ? void 0 : s.config) && void 0 !== n ? n : {};
    return (0, a.jsxs)("div", {
      className: x.profileEffectContainer,
      children: [(0, a.jsx)("img", {
        src: I,
        alt: i,
        className: x.profileEffectBackground
      }), (0, a.jsx)("img", {
        className: x.profileEffect,
        src: l,
        alt: r
      })]
    })
  };
n.Z = e => {
  let {
    selectedSkuId: n,
    selectedSkuPricePreview: t,
    className: s
  } = e, {
    product: d
  } = (0, p.T)(n), {
    giftRecipient: c,
    giftRecipientError: f
  } = (0, u.wD)(), I = (0, r.e7)([m.default], () => m.default.getCurrentUser());
  if (null == d || null == t) return null;
  let [S] = d.items, A = null != c && c.id !== (null == I ? void 0 : I.id);
  return (0, a.jsxs)("div", {
    className: s,
    children: [(0, a.jsxs)("div", {
      className: x.previewTitleContainer,
      children: [(0, a.jsx)(o.FormTitle, {
        className: x.previewTitle,
        children: C.Z.Messages.COLLECTIBLES_GIFT_LABEL
      }), A && (0, a.jsx)(o.Popout, {
        preload: () => (0, h.Z)(c.id, c.getAvatarURL(null, 80)),
        renderPopout: e => (0, a.jsx)(E.Z, {
          ...e,
          user: c,
          pendingAvatar: c.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
          pendingAvatarDecoration: S.type === l.Z.AVATAR_DECORATION ? S : null,
          pendingProfileEffectId: S.type === l.Z.PROFILE_EFFECT ? S.id : null,
          canUsePremiumCustomization: !0,
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
            children: C.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
          })
        })
      }, c.id)]
    }), (0, a.jsxs)("div", {
      className: i()(x.previewContainer, {
        [x.previewContainerError]: null != f
      }),
      children: [S.type === l.Z.AVATAR_DECORATION && (0, a.jsx)(T, {
        avatarDecoration: S
      }), S.type === l.Z.PROFILE_EFFECT && (0, a.jsx)(g, {
        profileEffect: S
      }), (0, a.jsxs)("div", {
        className: x.previewTextContainer,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: d.name
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "header-secondary",
          children: S.type === l.Z.AVATAR_DECORATION ? C.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : S.type === l.Z.PROFILE_EFFECT ? C.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: (0, v.T4)(t.amount, t.currency)
      })]
    }), null != f && (0, a.jsx)(o.Text, {
      className: x.recipientError,
      variant: "text-sm/normal",
      color: "status-danger-background",
      children: f
    })]
  })
}