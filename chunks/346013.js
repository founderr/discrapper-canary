"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("153832"),
  d = n("831209"),
  c = n("399606"),
  E = n("481060"),
  f = n("607070"),
  _ = n("100527"),
  T = n("367907"),
  I = n("1585"),
  m = n("841762"),
  N = n("336197"),
  p = n("118139"),
  S = n("348238"),
  C = n("38267"),
  A = n("484459"),
  h = n("103575"),
  g = n("695346"),
  M = n("271383"),
  O = n("594174"),
  R = n("976644"),
  v = n("806361"),
  L = n("768581"),
  P = n("900849"),
  D = n("506071"),
  x = n("495114"),
  y = n("170140"),
  U = n("981631"),
  j = n("959517"),
  b = n("689938"),
  G = n("75497"),
  B = n("527455");

function k(e) {
  var t, n, l;
  let {
    embedUrl: r,
    message: k,
    channel: F
  } = e, w = (0, y.useMediaPostEmbedData)(r, k), {
    setPopout: H
  } = (0, C.default)(k.id, j.DEFAULT_POPOUTS), V = (0, S.useContextMenuMessage)(k, F, H, !0), Y = g.GifAutoPlay.useSetting(), K = (0, D.useIsWindowFocused)(), [W, z] = a.useState(!1), [Q, q] = a.useState((null == w ? void 0 : w.coverImage) == null), J = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), Z = (0, c.useStateFromStores)([M.default, O.default], () => {
    var e;
    return M.default.isMember(null == w ? void 0 : w.guildId, null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [w]), [X, $] = (0, c.useStateFromStoresArray)([M.default], () => {
    var e;
    let t = (null == w ? void 0 : w.authorId) != null ? M.default.getMember(w.guildId, w.authorId) : null;
    return [null !== (e = null == t ? void 0 : t.colorString) && void 0 !== e ? e : "inherit", null == t ? void 0 : t.colorRoleId]
  }), {
    reducedMotion: ee
  } = a.useContext(E.AccessibilityPreferencesContext), [et, en] = a.useState(!1), es = a.useCallback(() => {
    z(!0)
  }, [z]), ea = a.useCallback(() => {
    z(!1)
  }, [z]), el = a.useCallback(async () => {
    null != w && ((0, T.trackWithMetadata)(U.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: w.threadId,
      channel_id: F.id,
      can_access: w.canAccess,
      is_member: Z
    }), w.canAccess ? (0, N.default)(U.Routes.CHANNEL(w.guildId, w.threadId, w.messageId)) : Z ? (0, N.default)(U.Routes.CHANNEL(w.guildId, w.parentChannelId)) : await P.startLurking(w.guildId, {}, {
      channelId: w.parentChannelId
    }))
  }, [w, F, Z]), ei = a.useCallback(() => (o()((null == w ? void 0 : w.authorId) != null, "Author Id cannot be null when loading user profile"), (0, A.default)(w.authorId, w.avatarUrl, {
    guildId: w.guildId,
    channelId: F.id
  })), [w, F]);
  if (null == w) return null;
  let er = (e, t) => (o()(null != w.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(h.default, {
      ...e,
      location: "MediaPostEmbed",
      userId: w.authorId,
      guildId: w.guildId,
      channelId: F.id,
      messageId: k.id,
      roleId: $,
      newAnalyticsLocations: t
    })),
    eo = (0, L.getAvatarDecorationURL)({
      avatarDecoration: null === (t = w.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, I.getDecorationSizeForAvatarSize)(E.AvatarSizes.SIZE_40),
      canAnimate: et
    }),
    eu = null === (n = w.user) || void 0 === n ? void 0 : n.getAvatarURL(w.guildId, 40, et),
    ed = () => {
      !ee.enabled && en(e => !e)
    },
    ec = w.coverImage,
    eE = null != ec && (0, p.isAnimatedImageUrl)(ec);
  return (0, s.jsxs)("div", {
    className: G.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: G.thumbnailContainer,
      onMouseEnter: es,
      onMouseLeave: ea,
      children: [!Q && (!0 === w.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: B,
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i()(G.thumbnail, {
          [G.spoiler]: w.shouldSpoiler
        }),
        onContextMenu: V,
        onError: () => q(!0)
      }) : (0, s.jsx)(m.default, {
        src: !(K && (Y || W)) && eE ? "".concat(ec, "?format=png") : ec,
        backgroundSrc: "".concat(ec, "?format=png"),
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i()(G.thumbnail, {
          [G.spoiler]: w.shouldSpoiler
        }),
        imageChildClassName: G.thumbnailImage,
        onContextMenu: V,
        onError: () => q(!0)
      })), null != w.coverImageOverlayText && (0, s.jsx)(E.Clickable, {
        onClick: el,
        children: (0, s.jsx)("div", {
          className: G.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: G.thumbnailOverlayCta,
            children: [(0, s.jsx)(x.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(E.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: w.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: G.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: G.descriptionHeader,
        children: [(0, s.jsx)(E.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: G.descriptionHeaderText,
          children: w.title
        }), (0, s.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i()(G.descriptionHeaderText, G.descriptionSubtitle),
          children: w.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: G.descriptionFooter,
        children: [null != eu && (0, s.jsx)(E.Popout, {
          renderPopout: e => er(e, [_.default.AVATAR]),
          position: "right",
          spacing: 12,
          preload: null == w.authorId ? void 0 : ei,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: ed,
            onMouseLeave: ed,
            children: (0, s.jsx)(E.Avatar, {
              ...e,
              size: E.AvatarSizes.SIZE_40,
              src: eu,
              "aria-label": b.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: eo
            })
          })
        }), (0, s.jsxs)("div", {
          className: G.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: G.descriptionFooterChannelName,
            children: [null != w.channelName && (0, s.jsx)(v.default, {
              className: G.mediaChannelIcon
            }), (0, s.jsx)(E.Clickable, {
              onClick: el,
              className: G.channelName,
              children: (0, s.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (l = w.channelName) && void 0 !== l ? l : w.guildName
              })
            })]
          }), null != w.authorName && (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: G.descriptionFooterAuthorContainer,
            children: b.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: w.authorName,
              authorNameHook: () => (0, s.jsx)(E.Popout, {
                renderPopout: e => er(e, [_.default.USERNAME]),
                position: "right",
                preload: null == w.authorId ? void 0 : ei,
                children: e => (0, s.jsx)(E.NameWithRoleAnchor, {
                  ...e,
                  name: w.authorName,
                  color: X,
                  className: G.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), w.canAccess ? (0, s.jsx)(E.Button, {
          color: E.ButtonColors.BRAND,
          onClick: el,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        }) : (0, s.jsx)(R.default, {
          pauseAnimation: J,
          onClick: el,
          className: i()(G.__invalid_ctaButtonContent, G.subscribeButton),
          color: E.Button.Colors.CUSTOM,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        })]
      })]
    })]
  })
}