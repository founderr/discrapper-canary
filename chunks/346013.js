"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("153832"),
  d = n("831209"),
  c = n("399606"),
  f = n("481060"),
  E = n("607070"),
  _ = n("100527"),
  m = n("367907"),
  T = n("1585"),
  I = n("841762"),
  h = n("336197"),
  p = n("118139"),
  N = n("348238"),
  S = n("38267"),
  C = n("484459"),
  g = n("103575"),
  A = n("695346"),
  M = n("271383"),
  R = n("594174"),
  v = n("806361"),
  O = n("768581"),
  x = n("900849"),
  L = n("506071"),
  D = n("495114"),
  P = n("170140"),
  y = n("981631"),
  U = n("959517"),
  j = n("689938"),
  b = n("902168"),
  F = n("527455");

function B(e) {
  var t, n, l;
  let {
    embedUrl: r,
    message: B,
    channel: G
  } = e, k = (0, P.useMediaPostEmbedData)(r, B), {
    setPopout: w
  } = (0, S.default)(B.id, U.DEFAULT_POPOUTS), H = (0, N.useContextMenuMessage)(B, G, w, !0), V = A.GifAutoPlay.useSetting(), Y = (0, L.useIsWindowFocused)(), [K, W] = a.useState(!1), [z, Q] = a.useState((null == k ? void 0 : k.coverImage) == null), q = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion), X = (0, c.useStateFromStores)([M.default, R.default], () => {
    var e;
    return M.default.isMember(null == k ? void 0 : k.guildId, null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [k]), Z = (0, c.useStateFromStores)([M.default], () => (null == k ? void 0 : k.authorId) != null ? M.default.getMember(k.guildId, k.authorId) : null), [J, $] = a.useMemo(() => {
    var e;
    return [null !== (e = null == Z ? void 0 : Z.colorString) && void 0 !== e ? e : "inherit", null == Z ? void 0 : Z.colorRoleId]
  }, [Z]), {
    reducedMotion: ee
  } = a.useContext(f.AccessibilityPreferencesContext), [et, en] = a.useState(!1), es = a.useCallback(() => {
    W(!0)
  }, [W]), ea = a.useCallback(() => {
    W(!1)
  }, [W]), el = a.useCallback(async () => {
    null != k && ((0, m.trackWithMetadata)(y.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: k.threadId,
      channel_id: G.id,
      can_access: k.canAccess,
      is_member: X
    }), k.canAccess ? (0, h.default)(y.Routes.CHANNEL(k.guildId, k.threadId, k.messageId)) : X ? (0, h.default)(y.Routes.CHANNEL(k.guildId, k.parentChannelId)) : await x.startLurking(k.guildId, {}, {
      channelId: k.parentChannelId
    }))
  }, [k, G, X]), ei = a.useCallback(() => (o()((null == k ? void 0 : k.authorId) != null, "Author Id cannot be null when loading user profile"), (0, C.maybeFetchUserProfileForPopout)(k.authorId, k.avatarUrl, {
    guildId: k.guildId,
    channelId: G.id
  })), [k, G]);
  if (null == k) return null;
  let er = (e, t) => (o()(null != k.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(g.default, {
      ...e,
      location: "MediaPostEmbed",
      userId: k.authorId,
      guildId: k.guildId,
      channelId: G.id,
      messageId: B.id,
      roleId: $,
      newAnalyticsLocations: t
    })),
    eo = (0, O.getAvatarDecorationURL)({
      avatarDecoration: (null == Z ? void 0 : Z.avatarDecoration) != null ? null == Z ? void 0 : Z.avatarDecoration : null === (t = k.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, T.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_40),
      canAnimate: et
    }),
    eu = null === (n = k.user) || void 0 === n ? void 0 : n.getAvatarURL(k.guildId, 40, et),
    ed = () => {
      !ee.enabled && en(e => !e)
    },
    ec = k.coverImage,
    ef = null != ec && (0, p.isAnimatedImageUrl)(ec);
  return (0, s.jsxs)("div", {
    className: b.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: b.thumbnailContainer,
      onMouseEnter: es,
      onMouseLeave: ea,
      children: [!z && (!0 === k.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: F,
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i()(b.thumbnail, {
          [b.spoiler]: k.shouldSpoiler
        }),
        onContextMenu: H,
        onError: () => Q(!0)
      }) : (0, s.jsx)(I.default, {
        src: !(Y && (V || K)) && ef ? "".concat(ec, "?format=png") : ec,
        backgroundSrc: "".concat(ec, "?format=png"),
        alt: j.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i()(b.thumbnail, {
          [b.spoiler]: k.shouldSpoiler
        }),
        imageChildClassName: b.thumbnailImage,
        onContextMenu: H,
        onError: () => Q(!0)
      })), null != k.coverImageOverlayText && (0, s.jsx)(f.Clickable, {
        onClick: el,
        children: (0, s.jsx)("div", {
          className: b.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: b.thumbnailOverlayCta,
            children: [(0, s.jsx)(D.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: k.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: b.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: b.descriptionHeader,
        children: [(0, s.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: b.descriptionHeaderText,
          children: k.title
        }), (0, s.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i()(b.descriptionHeaderText, b.descriptionSubtitle),
          children: k.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: b.descriptionFooter,
        children: [null != eu && (0, s.jsx)(f.Popout, {
          renderPopout: e => er(e, [_.default.AVATAR]),
          position: "right",
          spacing: 12,
          preload: null == k.authorId ? void 0 : ei,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: ed,
            onMouseLeave: ed,
            children: (0, s.jsx)(f.Avatar, {
              ...e,
              size: f.AvatarSizes.SIZE_40,
              src: eu,
              "aria-label": j.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: eo
            })
          })
        }), (0, s.jsxs)("div", {
          className: b.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: b.descriptionFooterChannelName,
            children: [null != k.channelName && (0, s.jsx)(v.default, {
              className: b.mediaChannelIcon
            }), (0, s.jsx)(f.Clickable, {
              onClick: el,
              className: b.channelName,
              children: (0, s.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (l = k.channelName) && void 0 !== l ? l : k.guildName
              })
            })]
          }), null != k.authorName && (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: b.descriptionFooterAuthorContainer,
            children: j.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: k.authorName,
              authorNameHook: () => (0, s.jsx)(f.Popout, {
                renderPopout: e => er(e, [_.default.USERNAME]),
                position: "right",
                preload: null == k.authorId ? void 0 : ei,
                children: e => (0, s.jsx)(f.NameWithRoleAnchor, {
                  ...e,
                  name: k.authorName,
                  color: J,
                  className: b.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), k.canAccess ? (0, s.jsx)(f.Button, {
          color: f.ButtonColors.BRAND,
          onClick: el,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        }) : (0, s.jsx)(f.ShinyButton, {
          pauseAnimation: q,
          onClick: el,
          className: i()(b.__invalid_ctaButtonContent, b.subscribeButton),
          color: f.Button.Colors.CUSTOM,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: k.ctaText
          })
        })]
      })]
    })]
  })
}