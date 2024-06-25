n.d(t, {
  Z: function() {
    return y
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(772848),
  u = n(831209),
  d = n(399606),
  E = n(481060),
  _ = n(607070),
  I = n(100527),
  T = n(367907),
  m = n(1585),
  N = n(841762),
  h = n(336197),
  C = n(406432),
  S = n(348238),
  A = n(38267),
  g = n(484459),
  p = n(103575),
  f = n(695346),
  R = n(271383),
  O = n(594174),
  M = n(768581),
  x = n(900849),
  v = n(506071),
  L = n(495114),
  Z = n(170140),
  P = n(981631),
  D = n(959517),
  j = n(689938),
  U = n(84427),
  b = n(527455);

function y(e) {
  var t, n, l;
  let {
    embedUrl: r,
    message: y,
    channel: B
  } = e, k = (0, Z.J)(r, y), {
    setPopout: G
  } = (0, A.Z)(y.id, D.d$), F = (0, S.qo)(y, B, G, !0), V = f.QK.useSetting(), w = (0, v.n)(), [H, Y] = i.useState(!1), [W, K] = i.useState((null == k ? void 0 : k.coverImage) == null), z = (0, d.e7)([_.Z], () => _.Z.useReducedMotion), Q = (0, d.e7)([R.ZP, O.default], () => {
    var e;
    return R.ZP.isMember(null == k ? void 0 : k.guildId, null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [k]), X = (0, d.e7)([R.ZP], () => (null == k ? void 0 : k.authorId) != null ? R.ZP.getMember(k.guildId, k.authorId) : null), [q, J] = i.useMemo(() => {
    var e;
    return [null !== (e = null == X ? void 0 : X.colorString) && void 0 !== e ? e : "inherit", null == X ? void 0 : X.colorRoleId]
  }, [X]), {
    reducedMotion: $
  } = i.useContext(E.AccessibilityPreferencesContext), [ee, et] = i.useState(!1), en = i.useCallback(() => {
    Y(!0)
  }, [Y]), es = i.useCallback(() => {
    Y(!1)
  }, [Y]), ei = i.useCallback(async () => {
    null != k && ((0, T.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: k.threadId,
      channel_id: B.id,
      can_access: k.canAccess,
      is_member: Q
    }), k.canAccess ? (0, h.Z)(P.Z5c.CHANNEL(k.guildId, k.threadId, k.messageId)) : Q ? (0, h.Z)(P.Z5c.CHANNEL(k.guildId, k.parentChannelId)) : await x.Ub(k.guildId, {}, {
      channelId: k.parentChannelId
    }))
  }, [k, B, Q]), el = i.useCallback(() => (o()((null == k ? void 0 : k.authorId) != null, "Author Id cannot be null when loading user profile"), (0, g.W)(k.authorId, k.avatarUrl, {
    guildId: k.guildId,
    channelId: B.id
  })), [k, B]);
  if (null == k) return null;
  let ea = (e, t) => (o()(null != k.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(p.Z, {
      ...e,
      location: "MediaPostEmbed",
      userId: k.authorId,
      guildId: k.guildId,
      channelId: B.id,
      messageId: y.id,
      roleId: J,
      newAnalyticsLocations: t
    })),
    er = (0, M.NZ)({
      avatarDecoration: (null == X ? void 0 : X.avatarDecoration) != null ? null == X ? void 0 : X.avatarDecoration : null === (t = k.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, m.y9)(E.AvatarSizes.SIZE_40),
      canAnimate: ee
    }),
    eo = null === (n = k.user) || void 0 === n ? void 0 : n.getAvatarURL(k.guildId, 40, ee),
    ec = () => {
      if (!$.enabled) et(e => !e)
    },
    eu = k.coverImage,
    ed = null != eu && (0, C.d$)(eu);
  return (0, s.jsxs)("div", {
    className: U.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: U.thumbnailContainer,
      onMouseEnter: en,
      onMouseLeave: es,
      children: [!W && (!0 === k.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: b,
        alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: a()(U.thumbnail, {
          [U.spoiler]: k.shouldSpoiler
        }),
        onContextMenu: F,
        onError: () => K(!0)
      }) : (0, s.jsx)(N.Z, {
        src: !(w && (V || H)) && ed ? "".concat(eu, "?format=png") : eu,
        backgroundSrc: "".concat(eu, "?format=png"),
        alt: j.Z.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: a()(U.thumbnail, {
          [U.spoiler]: k.shouldSpoiler
        }),
        imageChildClassName: U.thumbnailImage,
        onContextMenu: F,
        onError: () => K(!0)
      })), null != k.coverImageOverlayText && (0, s.jsx)(E.Clickable, {
        onClick: ei,
        children: (0, s.jsx)("div", {
          className: U.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: U.thumbnailOverlayCta,
            children: [(0, s.jsx)(L.Z, {
              color: u.Z.WHITE
            }), (0, s.jsx)(E.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: k.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: U.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: U.descriptionHeader,
        children: [(0, s.jsx)(E.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: U.descriptionHeaderText,
          children: k.title
        }), (0, s.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: a()(U.descriptionHeaderText, U.descriptionSubtitle),
          children: k.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: U.descriptionFooter,
        children: [null != eo && (0, s.jsx)(E.Popout, {
          renderPopout: e => ea(e, [I.Z.AVATAR]),
          position: "right",
          spacing: 12,
          preload: null == k.authorId ? void 0 : el,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: ec,
            onMouseLeave: ec,
            children: (0, s.jsx)(E.Avatar, {
              ...e,
              size: E.AvatarSizes.SIZE_40,
              src: eo,
              "aria-label": j.Z.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: er
            })
          })
        }), (0, s.jsxs)("div", {
          className: U.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: U.descriptionFooterChannelName,
            children: [null != k.channelName && (0, s.jsx)(E.ImageSparkleIcon, {
              size: "md",
              color: "currentColor",
              className: U.mediaChannelIcon
            }), (0, s.jsx)(E.Clickable, {
              onClick: ei,
              className: U.channelName,
              children: (0, s.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (l = k.channelName) && void 0 !== l ? l : k.guildName
              })
            })]
          }), null != k.authorName && (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: U.descriptionFooterAuthorContainer,
            children: j.Z.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: k.authorName,
              authorNameHook: () => (0, s.jsx)(E.Popout, {
                renderPopout: e => ea(e, [I.Z.USERNAME]),
                position: "right",
                preload: null == k.authorId ? void 0 : el,
                children: e => (0, s.jsx)(E.NameWithRoleAnchor, {
                  ...e,
                  name: k.authorName,
                  color: q,
                  className: U.authorName
                })
              }, (0, c.Z)())
            })
          })]
        }), k.canAccess ? (0, s.jsx)(E.Button, {
          color: E.ButtonColors.BRAND,
          onClick: ei,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        }) : (0, s.jsx)(E.ShinyButton, {
          pauseAnimation: z,
          onClick: ei,
          className: a()(U.__invalid_ctaButtonContent, U.subscribeButton),
          color: E.Button.Colors.CUSTOM,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        })]
      })]
    })]
  })
}