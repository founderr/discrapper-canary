"use strict";
a.r(t), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("683860"),
  o = a("442837"),
  u = a("692547"),
  d = a("481060"),
  c = a("738619"),
  m = a("841762"),
  h = a("25610"),
  f = a("118139"),
  g = a("169525"),
  x = a("255269"),
  C = a("524444"),
  _ = a("695346"),
  p = a("433355"),
  S = a("592125"),
  T = a("496675"),
  E = a("730845"),
  N = a("84017"),
  M = a("897353"),
  A = a("113039"),
  I = a("456269"),
  v = a("109590"),
  j = a("368844"),
  O = a("73315"),
  R = a("404616"),
  b = a("510060"),
  F = a("983200"),
  L = a("196255"),
  P = a("858543"),
  y = a("482062"),
  D = a("883728"),
  U = a("710352"),
  w = a("981631"),
  k = a("689938"),
  H = a("850994");

function B(e) {
  let {
    id: t,
    channel: a,
    goToThread: l,
    overrideMedia: c,
    className: m,
    coords: h,
    gridCoords: f,
    gridSectionBoundaries: g,
    observePostVisibilityAnalytics: C
  } = e, E = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a.parent_id)), N = a.id, M = n.useRef(null), A = (0, o.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
    firstMessage: O,
    loaded: F
  } = (0, v.useFirstForumPostMessage)(a), {
    firstMedia: B
  } = (0, I.useForumPostFirstMessageMarkup)({
    firstMessage: O,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, I.useMessageCount)(a), {
    isNew: z,
    hasUnreads: K
  } = (0, I.useForumPostReadStates)(a), X = n.useRef(null), {
    handleLeftClick: q,
    handleRightClick: Z
  } = (0, D.default)({
    facepileRef: X,
    goToThread: l,
    channel: a
  });
  n.useEffect(() => {
    null == C || C(M.current, N)
  }, [C, N]);
  let Q = (0, o.useStateFromStores)([T.default], () => T.default.can(w.Permissions.MANAGE_MESSAGES, a)),
    J = _.GifAutoPlay.useSetting(),
    $ = _.RenderSpoilers.useSetting(),
    ee = (0, x.default)($, Q),
    et = (0, j.useForumPostMediaThumbnail)(O, E, !1),
    [ea, es] = (0, b.getFrameDimensions)(h.width - 2 * b.IMAGE_PADDING),
    en = (0, I.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, U.ForumTimestampFormats.POSTED_DURATION_AGO),
    el = (0, R.useHighlightedChannelName)(a),
    er = (null == O ? void 0 : O.blocked) || null == (null != c ? c : B),
    {
      onFocus: ei,
      ...eo
    } = (0, y.useForumGridItem)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    eu = a.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: M,
    onClick: q,
    onFocus: ei,
    onContextMenu: Z,
    className: r()(H.container, m, {
      [H.isOpen]: A
    }),
    style: {
      ...h
    },
    children: [(0, s.jsx)(d.Clickable, {
      onClick: q,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: Z,
      "aria-label": k.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: a.name,
        count: V
      }),
      className: H.focusTarget,
      ...eo
    }), (0, s.jsxs)("div", {
      className: H.header,
      children: [(0, s.jsxs)("div", {
        className: H.authorRow,
        children: [(0, s.jsxs)("div", {
          className: H.rowGroup,
          children: [(0, s.jsx)(L.default, {
            channel: a,
            message: O
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: H.postCreationTimestamp,
            children: en
          })]
        }), z ? (0, s.jsx)(d.TextBadge, {
          className: r()(H.newBadge),
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: k.default.Messages.NEW
        }) : null]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: H.title,
          color: K ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * b.GRID_POST_CONTROLS_MARGIN, "px")
          },
          children: el
        })
      })]
    }), (0, s.jsx)("div", {
      className: H.postBody,
      children: (0, s.jsx)(d.FocusBlock, {
        children: er ? (0, s.jsx)(Y, {
          channel: a,
          firstMessage: O,
          isFirstMessageLoaded: F,
          containerWidth: h.width,
          hasUnreads: K
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(W, {
            mediaAttachments: et,
            globalSpoilerRenderSetting: ee,
            containerWidth: ea,
            containerHeight: eu ? 9 / 16 * ea : es,
            canAutoPlay: J,
            shouldMaintainAspectRatio: eu
          }), (0, s.jsx)("div", {
            className: H.tagsRow,
            children: (0, s.jsx)(P.default, {
              channel: a,
              tagsClassName: H.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: H.footer,
      children: (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsx)(G, {
          channel: a,
          firstMessage: O,
          facepileRef: X
        })
      })
    })]
  })
}

function G(e) {
  let {
    channel: t,
    facepileRef: a,
    firstMessage: n
  } = e, l = (0, I.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: H.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: H.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: H.messageCountContainer,
        children: (0, s.jsx)(R.MessageCount, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), l.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: H.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: H.typing,
          children: [(0, s.jsx)(R.Facepile, {
            channel: t,
            userIds: l,
            facepileRef: a
          }), (0, s.jsx)("div", {
            className: H.dots,
            children: (0, s.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(c.default, {
            channel: t,
            className: H.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: H.controlsGroup,
      children: [r || null == n ? null : (0, s.jsx)(R.DefaultReaction, {
        firstMessage: n,
        channel: t
      }), null == n ? null : (0, s.jsx)(R.MostUsedReaction, {
        firstMessage: n,
        channel: t
      })]
    })]
  })
}
t.default = n.memo(function(e) {
  let {
    id: t,
    threadId: a,
    goToThread: n,
    overrideMedia: l,
    className: r,
    coords: i,
    gridCoords: u,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: c
  } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a));
  return null == m ? null : (0, s.jsx)(B, {
    id: t,
    channel: m,
    goToThread: n,
    overrideMedia: l,
    className: r,
    coords: i,
    gridCoords: u,
    observePostVisibilityAnalytics: c,
    gridSectionBoundaries: d
  })
});
let V = e => e.preventDefault(),
  z = n.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, C.renderImageComponent)(e)
    })
  }),
  W = n.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: a,
      containerWidth: l,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: u = !1
    } = e, {
      containsVideo: c,
      containsGif: x
    } = n.useMemo(() => (0, j.messageContainsGifOrVideo)(t), [t]), C = n.useMemo(() => t.slice(F.MOSAIC_MIN_INDEX, F.MOSAIC_MAX_INDEX), [t]), _ = (0, F.useImageContainerStyles)({
      numAttachments: C.length,
      containerWidth: l,
      containerHeight: i
    }), p = (0, F.useImageDimensionStyles)({
      imageContainerStyles: _,
      containerWidth: l,
      containerHeight: i
    }), S = (0, h.useShouldRedactExplicitContentForForum)(), T = n.useMemo(() => C.map((e, t) => {
      var n;
      let [l, i] = (0, g.getForumPostShouldObscure)(e, !a, S), h = (0, g.getObscuredAlt)(i), C = {
        ...p[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && l ? h : e.alt,
        onClick: V,
        shouldRenderAccessory: !x && !c
      }, T = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, E = o && !l ? e.src : T;
      return (0, s.jsxs)("div", {
        className: H.bodyMediaFrame,
        style: _[t],
        children: [u ? (0, s.jsx)(m.default, {
          ...C,
          src: E,
          backgroundSrc: T,
          aspectRatio: C.maxWidth / C.maxHeight,
          alt: null !== (n = C.alt) && void 0 !== n ? n : "",
          className: r()(H.mediaPostContainer, {
            [H.obscured]: l
          }),
          imageChildClassName: H.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(d.Image, {
          ...C,
          className: H.mediaContainer,
          imageClassName: r()(H.thumbnailOverride, {
            [H.obscured]: l
          })
        }) : (0, s.jsx)(z, {
          ...C,
          autoPlay: o && !l,
          containerClassName: H.mosaicMediaContainer,
          imageClassName: r()(H.imageCover, {
            [H.obscured]: l
          }),
          responsive: !0
        }), l && (0, s.jsx)("div", {
          className: H.obscuredTagContainer,
          children: (0, s.jsx)(O.default, {
            obscureReason: i,
            iconClassname: H.obscuredTag
          })
        })]
      }, e.src)
    }), [o, x, c, a, _, p, C, u, S]);
    return (0, s.jsxs)("div", {
      className: H.bodyMedia,
      style: {
        width: l,
        height: i
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: T
      }), (x || c) && (0, s.jsxs)("div", {
        className: H.mediaIconsRow,
        children: [c && (0, s.jsx)(M.default, {
          width: "22px",
          height: "22px",
          className: H.mediaIcon
        }), x && (0, s.jsx)(E.default, {
          className: H.mediaIcon
        })]
      }), t.length > F.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(K, {
        text: (t.length - (0, F.MOSAIC_MAX_IMAGE_COUNT)).toString(),
        icon: N.default,
        pillClassName: H.moreImagesPill,
        iconClassName: H.moreImagesPillIcon,
        textClassName: H.moreImagesPillText
      })]
    })
  });

function K(e) {
  let {
    text: t,
    icon: a,
    pillClassName: n,
    iconClassName: l,
    textClassName: r
  } = e;
  return (0, s.jsxs)("div", {
    className: n,
    children: [(0, s.jsx)(a, {
      className: l
    }), (0, s.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: r,
      children: ["+", t]
    })]
  })
}

function Y(e) {
  let {
    channel: t,
    firstMessage: a,
    isFirstMessageLoaded: l,
    containerWidth: i,
    hasUnreads: o
  } = e, [u, c] = (0, b.getFrameDimensions)(i - 2 * b.IMAGE_PADDING), {
    content: m
  } = (0, I.useForumPostFirstMessageMarkup)({
    firstMessage: a,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, P.useTagsRowHooks)({
    channel: t,
    isNew: !1
  }), f = n.useMemo(() => ({
    width: u,
    height: c
  }), [u, c]), g = o ? H.textContentUnread : H.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: H.contentPreview,
      style: f,
      children: [(0, s.jsxs)("div", {
        className: H.content,
        children: [l && null == a && (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: k.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), l && null != a && (0, s.jsx)(A.default, {
          message: a,
          content: m,
          className: g
        })]
      }), (0, s.jsx)("div", {
        className: r()(H.textContentFooter, {
          [H.noTags]: !h
        }),
        children: h ? (0, s.jsx)(P.default, {
          channel: t,
          tagsClassName: H.tagPill,
          className: H.__invalid_row
        }) : null
      })]
    })
  })
}