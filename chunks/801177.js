"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("748820"),
  d = n("171210"),
  c = n("65597"),
  E = n("77078"),
  f = n("206230"),
  _ = n("716241"),
  T = n("606292"),
  I = n("955735"),
  m = n("537325"),
  N = n("651693"),
  p = n("380986"),
  S = n("969706"),
  A = n("506885"),
  C = n("981601"),
  h = n("845579"),
  g = n("26989"),
  M = n("697218"),
  O = n("181114"),
  R = n("752531"),
  L = n("315102"),
  v = n("794818"),
  P = n("866190"),
  D = n("781083"),
  x = n("159938"),
  y = n("49111"),
  U = n("894488"),
  j = n("782340"),
  b = n("960392"),
  G = n("760238");

function B(e) {
  var t, n, a;
  let {
    embedUrl: r,
    message: B,
    channel: k
  } = e, F = (0, x.useMediaPostEmbedData)(r, B), {
    setPopout: w
  } = (0, S.default)(B.id, U.DEFAULT_POPOUTS), H = (0, p.useContextMenuMessage)(B, k, w, !0), V = h.GifAutoPlay.useSetting(), Y = (0, P.useIsWindowFocused)(), [K, W] = l.useState(!1), [z, Q] = l.useState((null == F ? void 0 : F.coverImage) == null), Z = (0, c.default)([f.default], () => f.default.useReducedMotion), J = (0, c.default)([g.default, M.default], () => {
    var e;
    return g.default.isMember(null == F ? void 0 : F.guildId, null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [F]), X = (0, c.default)([g.default], () => {
    var e, t;
    return (null == F ? void 0 : F.authorId) == null ? "inherit" : null !== (t = null === (e = g.default.getMember(F.guildId, F.authorId)) || void 0 === e ? void 0 : e.colorString) && void 0 !== t ? t : "inherit"
  }), {
    reducedMotion: q
  } = l.useContext(E.AccessibilityPreferencesContext), [$, ee] = l.useState(!1), et = l.useCallback(() => {
    W(!0)
  }, [W]), en = l.useCallback(() => {
    W(!1)
  }, [W]), es = l.useCallback(async () => {
    null != F && ((0, _.trackWithMetadata)(y.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: F.threadId,
      channel_id: k.id,
      can_access: F.canAccess,
      is_member: J
    }), F.canAccess ? (0, m.default)(y.Routes.CHANNEL(F.guildId, F.threadId, F.messageId)) : J ? (0, m.default)(y.Routes.CHANNEL(F.guildId, F.parentChannelId)) : await v.startLurking(F.guildId, {}, {
      channelId: F.parentChannelId
    }))
  }, [F, k, J]), el = l.useCallback(() => (o((null == F ? void 0 : F.authorId) != null, "Author Id cannot be null when loading user profile"), (0, A.default)(F.authorId, F.avatarUrl, {
    guildId: F.guildId,
    channelId: k.id
  })), [F, k]);
  if (null == F) return null;
  let ea = e => (o(null != F.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(C.default, {
      ...e,
      userId: F.authorId,
      guildId: F.guildId,
      channelId: k.id
    })),
    ei = (0, L.getAvatarDecorationURL)({
      avatarDecoration: null === (t = F.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, T.getDecorationSizeForAvatarSize)(E.AvatarSizes.SIZE_40),
      canAnimate: $
    }),
    er = null === (n = F.user) || void 0 === n ? void 0 : n.getAvatarURL(F.guildId, 40, $),
    eo = () => {
      !q.enabled && ee(e => !e)
    },
    eu = F.coverImage,
    ed = null != eu && (0, N.isAnimatedImageUrl)(eu);
  return (0, s.jsxs)("div", {
    className: b.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: b.thumbnailContainer,
      onMouseEnter: et,
      onMouseLeave: en,
      children: [!z && (!0 === F.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: G,
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i(b.thumbnail, {
          [b.spoiler]: F.shouldSpoiler
        }),
        onContextMenu: H,
        onError: () => Q(!0)
      }) : (0, s.jsx)(I.default, {
        src: !(Y && (V || K)) && ed ? "".concat(eu, "?format=png") : eu,
        backgroundSrc: "".concat(eu, "?format=png"),
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i(b.thumbnail, {
          [b.spoiler]: F.shouldSpoiler
        }),
        imageChildClassName: b.thumbnailImage,
        onContextMenu: H,
        onError: () => Q(!0)
      })), null != F.coverImageOverlayText && (0, s.jsx)(E.Clickable, {
        onClick: es,
        children: (0, s.jsx)("div", {
          className: b.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: b.thumbnailOverlayCta,
            children: [(0, s.jsx)(D.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(E.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: F.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: b.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: b.descriptionHeader,
        children: [(0, s.jsx)(E.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: b.descriptionHeaderText,
          children: F.title
        }), (0, s.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i(b.descriptionHeaderText, b.descriptionSubtitle),
          children: F.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: b.descriptionFooter,
        children: [null != er && (0, s.jsx)(E.Popout, {
          renderPopout: ea,
          position: "right",
          spacing: 12,
          preload: null == F.authorId ? void 0 : el,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: eo,
            onMouseLeave: eo,
            children: (0, s.jsx)(E.Avatar, {
              ...e,
              size: E.AvatarSizes.SIZE_40,
              src: er,
              "aria-label": j.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: ei
            })
          })
        }), (0, s.jsxs)("div", {
          className: b.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: b.descriptionFooterChannelName,
            children: [null != F.channelName && (0, s.jsx)(R.default, {
              className: b.mediaChannelIcon
            }), (0, s.jsx)(E.Clickable, {
              onClick: es,
              className: b.channelName,
              children: (0, s.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (a = F.channelName) && void 0 !== a ? a : F.guildName
              })
            })]
          }), null != F.authorName && (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: b.descriptionFooterAuthorContainer,
            children: j.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: F.authorName,
              authorNameHook: () => (0, s.jsx)(E.Popout, {
                renderPopout: ea,
                position: "right",
                preload: null == F.authorId ? void 0 : el,
                children: e => (0, s.jsx)(E.NameWithRoleAnchor, {
                  ...e,
                  name: F.authorName,
                  color: X,
                  className: b.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), F.canAccess ? (0, s.jsx)(E.Button, {
          color: E.ButtonColors.BRAND,
          onClick: es,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: F.ctaText
          })
        }) : (0, s.jsx)(O.default, {
          pauseAnimation: Z,
          onClick: es,
          className: i(b.ctaButtonContent, b.subscribeButton),
          color: E.Button.Colors.CUSTOM,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: F.ctaText
          })
        })]
      })]
    })]
  })
}