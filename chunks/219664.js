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
  T = a("592125"),
  S = a("496675"),
  E = a("332475"),
  N = a("730845"),
  M = a("84017"),
  A = a("897353"),
  v = a("113039"),
  I = a("26290"),
  j = a("456269"),
  O = a("109590"),
  R = a("368844"),
  b = a("73315"),
  L = a("404616"),
  F = a("510060"),
  P = a("983200"),
  y = a("196255"),
  D = a("858543"),
  w = a("482062"),
  U = a("883728"),
  k = a("710352"),
  H = a("981631"),
  B = a("689938"),
  G = a("850994");

function V(e) {
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
  } = e, E = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a.parent_id)), N = a.id, M = n.useRef(null), A = (0, o.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
    firstMessage: v,
    loaded: b
  } = (0, O.useFirstForumPostMessage)(a), {
    firstMedia: P
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: v,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, j.useMessageCount)(a), {
    isNew: W,
    hasUnreads: K
  } = (0, j.useForumPostReadStates)(a), X = n.useRef(null), {
    handleLeftClick: Z,
    handleRightClick: Q
  } = (0, U.default)({
    facepileRef: X,
    goToThread: l,
    channel: a
  });
  n.useEffect(() => {
    null == C || C(M.current, N)
  }, [C, N]);
  let J = (0, o.useStateFromStores)([S.default], () => S.default.can(H.Permissions.MANAGE_MESSAGES, a)),
    $ = _.GifAutoPlay.useSetting(),
    ee = _.RenderSpoilers.useSetting(),
    et = (0, x.default)(ee, J),
    ea = (0, R.useForumPostMediaThumbnail)(v, E, !1),
    [es, en] = (0, F.getFrameDimensions)(h.width - 2 * F.IMAGE_PADDING),
    el = (0, j.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
    er = (0, L.useHighlightedChannelName)(a),
    ei = (null == v ? void 0 : v.blocked) || null == (null != c ? c : P),
    {
      onFocus: eo,
      ...eu
    } = (0, w.useForumGridItem)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    ed = a.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: M,
    onClick: Z,
    onFocus: eo,
    onContextMenu: Q,
    className: r()(G.container, m, {
      [G.isOpen]: A
    }),
    style: {
      ...h
    },
    children: [(0, s.jsx)(d.Clickable, {
      onClick: Z,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: Q,
      "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: a.name,
        count: V
      }),
      className: G.focusTarget,
      ...eu
    }), (0, s.jsxs)("div", {
      className: G.header,
      children: [(0, s.jsxs)("div", {
        className: G.authorRow,
        children: [(0, s.jsxs)("div", {
          className: G.rowGroup,
          children: [(0, s.jsx)(y.default, {
            channel: a,
            message: v
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: G.postCreationTimestamp,
            children: el
          })]
        }), W ? (0, s.jsx)(I.TextBadge, {
          className: r()(G.newBadge),
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: B.default.Messages.NEW
        }) : null]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: G.title,
          color: K ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * F.GRID_POST_CONTROLS_MARGIN, "px")
          },
          children: er
        })
      })]
    }), (0, s.jsx)("div", {
      className: G.postBody,
      children: (0, s.jsx)(d.FocusBlock, {
        children: ei ? (0, s.jsx)(q, {
          channel: a,
          firstMessage: v,
          isFirstMessageLoaded: b,
          containerWidth: h.width,
          hasUnreads: K
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(Y, {
            mediaAttachments: ea,
            globalSpoilerRenderSetting: et,
            containerWidth: es,
            containerHeight: ed ? 9 / 16 * es : en,
            canAutoPlay: $,
            shouldMaintainAspectRatio: ed
          }), (0, s.jsx)("div", {
            className: G.tagsRow,
            children: (0, s.jsx)(D.default, {
              channel: a,
              tagsClassName: G.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: G.footer,
      children: (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsx)(z, {
          channel: a,
          firstMessage: v,
          facepileRef: X
        })
      })
    })]
  })
}

function z(e) {
  let {
    channel: t,
    facepileRef: a,
    firstMessage: n
  } = e, l = (0, j.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: G.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: G.messageCountContainer,
        children: (0, s.jsx)(L.MessageCount, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), l.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: G.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: G.typing,
          children: [(0, s.jsx)(L.Facepile, {
            channel: t,
            userIds: l,
            facepileRef: a
          }), (0, s.jsx)("div", {
            className: G.dots,
            children: (0, s.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(c.default, {
            channel: t,
            className: G.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [r || null == n ? null : (0, s.jsx)(L.DefaultReaction, {
        firstMessage: n,
        channel: t
      }), null == n ? null : (0, s.jsx)(L.MostUsedReaction, {
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
  } = e, m = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a));
  return null == m ? null : (0, s.jsx)(V, {
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
let W = e => e.preventDefault(),
  K = n.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, C.renderImageComponent)(e)
    })
  }),
  Y = n.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: a,
      containerWidth: l,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: u = !1
    } = e, {
      containsVideo: d,
      containsGif: c
    } = n.useMemo(() => (0, R.messageContainsGifOrVideo)(t), [t]), x = n.useMemo(() => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX), [t]), C = (0, P.useImageContainerStyles)({
      numAttachments: x.length,
      containerWidth: l,
      containerHeight: i
    }), _ = (0, P.useImageDimensionStyles)({
      imageContainerStyles: C,
      containerWidth: l,
      containerHeight: i
    }), p = (0, h.useShouldRedactExplicitContentForForum)(), T = n.useMemo(() => x.map((e, t) => {
      var n;
      let [l, i] = (0, g.getForumPostShouldObscure)(e, !a, p), h = (0, g.getObscuredAlt)(i), x = {
        ..._[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && l ? h : e.alt,
        onClick: W,
        shouldRenderAccessory: !c && !d
      }, T = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, S = o && !l ? e.src : T;
      return (0, s.jsxs)("div", {
        className: G.bodyMediaFrame,
        style: C[t],
        children: [u ? (0, s.jsx)(m.default, {
          ...x,
          src: S,
          backgroundSrc: T,
          aspectRatio: x.maxWidth / x.maxHeight,
          alt: null !== (n = x.alt) && void 0 !== n ? n : "",
          className: r()(G.mediaPostContainer, {
            [G.obscured]: l
          }),
          imageChildClassName: G.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(E.default, {
          ...x,
          className: G.mediaContainer,
          imageClassName: r()(G.thumbnailOverride, {
            [G.obscured]: l
          })
        }) : (0, s.jsx)(K, {
          ...x,
          autoPlay: o && !l,
          containerClassName: G.mosaicMediaContainer,
          imageClassName: r()(G.imageCover, {
            [G.obscured]: l
          }),
          responsive: !0
        }), l && (0, s.jsx)("div", {
          className: G.obscuredTagContainer,
          children: (0, s.jsx)(b.default, {
            obscureReason: i,
            iconClassname: G.obscuredTag
          })
        })]
      }, e.src)
    }), [o, c, d, a, C, _, x, u, p]);
    return (0, s.jsxs)("div", {
      className: G.bodyMedia,
      style: {
        width: l,
        height: i
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: T
      }), (c || d) && (0, s.jsxs)("div", {
        className: G.mediaIconsRow,
        children: [d && (0, s.jsx)(A.default, {
          width: "22px",
          height: "22px",
          className: G.mediaIcon
        }), c && (0, s.jsx)(N.default, {
          className: G.mediaIcon
        })]
      }), t.length > P.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(X, {
        text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
        icon: M.default,
        pillClassName: G.moreImagesPill,
        iconClassName: G.moreImagesPillIcon,
        textClassName: G.moreImagesPillText
      })]
    })
  });

function X(e) {
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

function q(e) {
  let {
    channel: t,
    firstMessage: a,
    isFirstMessageLoaded: l,
    containerWidth: i,
    hasUnreads: o
  } = e, [u, c] = (0, F.getFrameDimensions)(i - 2 * F.IMAGE_PADDING), {
    content: m
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: a,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, D.useTagsRowHooks)({
    channel: t,
    isNew: !1
  }), f = n.useMemo(() => ({
    width: u,
    height: c
  }), [u, c]), g = o ? G.textContentUnread : G.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: G.contentPreview,
      style: f,
      children: [(0, s.jsxs)("div", {
        className: G.content,
        children: [l && null == a && (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), l && null != a && (0, s.jsx)(v.default, {
          message: a,
          content: m,
          className: g
        })]
      }), (0, s.jsx)("div", {
        className: r()(G.textContentFooter, {
          [G.noTags]: !h
        }),
        children: h ? (0, s.jsx)(D.default, {
          channel: t,
          tagsClassName: G.tagPill,
          className: G.__invalid_row
        }) : null
      })]
    })
  })
}