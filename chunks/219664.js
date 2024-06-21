"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(683860),
  o = n(442837),
  c = n(692547),
  d = n(481060),
  u = n(738619),
  m = n(841762),
  h = n(25610),
  g = n(406432),
  x = n(169525),
  _ = n(255269),
  E = n(930282),
  f = n(524444),
  C = n(695346),
  T = n(433355),
  N = n(592125),
  I = n(496675),
  S = n(456269),
  p = n(109590),
  v = n(368844),
  M = n(73315),
  j = n(404616),
  A = n(510060),
  R = n(983200),
  O = n(196255),
  b = n(858543),
  Z = n(482062),
  L = n(883728),
  P = n(710352),
  D = n(981631),
  y = n(689938),
  U = n(698405);

function F(e) {
  let {
    id: t,
    channel: n,
    goToThread: a,
    overrideMedia: u,
    className: m,
    coords: h,
    gridCoords: g,
    gridSectionBoundaries: x,
    observePostVisibilityAnalytics: E
  } = e, f = (0, o.e7)([N.Z], () => N.Z.getChannel(n.parent_id)), M = n.id, R = l.useRef(null), F = (0, o.e7)([T.ZP], () => T.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id), {
    firstMessage: H,
    loaded: k
  } = (0, p.cl)(n), {
    firstMedia: G
  } = (0, S.mX)({
    firstMessage: H,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, S.nP)(n), {
    isNew: W,
    hasUnreads: q
  } = (0, S.J$)(n), K = l.useRef(null), {
    handleLeftClick: Y,
    handleRightClick: X
  } = (0, L.Z)({
    facepileRef: K,
    goToThread: a,
    channel: n
  });
  l.useEffect(() => {
    null == E || E(R.current, M)
  }, [E, M]);
  let J = (0, o.e7)([I.Z], () => I.Z.can(D.Plq.MANAGE_MESSAGES, n)),
    Q = C.QK.useSetting(),
    $ = C.cC.useSetting(),
    ee = (0, _.Z)($, J),
    et = (0, v.aU)(H, f, !1),
    [en, es] = (0, A.rI)(h.width - 2 * A.LT),
    el = (0, S.xw)(n, i.z.CREATION_DATE, P.R6.POSTED_DURATION_AGO),
    ea = (0, j.NN)(n),
    er = (null == H ? void 0 : H.blocked) || null == (null != u ? u : G),
    {
      onFocus: ei,
      ...eo
    } = (0, Z.nX)({
      id: t,
      row: g.row,
      column: g.column,
      section: g.section,
      boundaries: x
    }),
    ec = n.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: R,
    onClick: Y,
    onFocus: ei,
    onContextMenu: X,
    className: r()(U.container, m, {
      [U.isOpen]: F
    }),
    style: {
      ...h
    },
    children: [(0, s.jsx)(d.Clickable, {
      onClick: Y,
      focusProps: {
        ringTarget: R
      },
      onContextMenu: X,
      "aria-label": y.Z.Messages.FORUM_POST_ARIA_LABEL.format({
        title: n.name,
        count: V
      }),
      className: U.focusTarget,
      ...eo
    }), (0, s.jsxs)("div", {
      className: U.header,
      children: [(0, s.jsxs)("div", {
        className: U.authorRow,
        children: [(0, s.jsxs)("div", {
          className: U.rowGroup,
          children: [(0, s.jsx)(O.Z, {
            channel: n,
            message: H
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: U.postCreationTimestamp,
            children: el
          })]
        }), W ? (0, s.jsx)(d.TextBadge, {
          className: r()(U.newBadge),
          color: c.Z.unsafe_rawColors.BRAND_260.css,
          text: y.Z.Messages.NEW
        }) : null]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: U.title,
          color: q ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * A.I8, "px")
          },
          children: ea
        })
      })]
    }), (0, s.jsx)("div", {
      className: U.postBody,
      children: (0, s.jsx)(d.FocusBlock, {
        children: er ? (0, s.jsx)(z, {
          channel: n,
          firstMessage: H,
          isFirstMessageLoaded: k,
          containerWidth: h.width,
          hasUnreads: q
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(B, {
            mediaAttachments: et,
            globalSpoilerRenderSetting: ee,
            containerWidth: en,
            containerHeight: ec ? 9 / 16 * en : es,
            canAutoPlay: Q,
            shouldMaintainAspectRatio: ec
          }), (0, s.jsx)("div", {
            className: U.tagsRow,
            children: (0, s.jsx)(b.ZP, {
              channel: n,
              tagsClassName: U.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: U.footer,
      children: (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsx)(w, {
          channel: n,
          firstMessage: H,
          facepileRef: K
        })
      })
    })]
  })
}

function w(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: l
  } = e, a = (0, S.Q)(t), r = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: U.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: U.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: U.messageCountContainer,
        children: (0, s.jsx)(j.m9, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), a.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: U.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: U.typing,
          children: [(0, s.jsx)(j.og, {
            channel: t,
            userIds: a,
            facepileRef: n
          }), (0, s.jsx)("div", {
            className: U.dots,
            children: (0, s.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(u.Z, {
            channel: t,
            className: U.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: U.controlsGroup,
      children: [r || null == l ? null : (0, s.jsx)(j.kZ, {
        firstMessage: l,
        channel: t
      }), null == l ? null : (0, s.jsx)(j.au, {
        firstMessage: l,
        channel: t
      })]
    })]
  })
}
t.Z = l.memo(function(e) {
  let {
    id: t,
    threadId: n,
    goToThread: l,
    overrideMedia: a,
    className: r,
    coords: i,
    gridCoords: c,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: u
  } = e, m = (0, o.e7)([N.Z], () => N.Z.getChannel(n));
  return null == m ? null : (0, s.jsx)(F, {
    id: t,
    channel: m,
    goToThread: l,
    overrideMedia: a,
    className: r,
    coords: i,
    gridCoords: c,
    observePostVisibilityAnalytics: u,
    gridSectionBoundaries: d
  })
});
let H = e => e.preventDefault(),
  k = l.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, f.Yi)(e)
    })
  }),
  B = l.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: n,
      containerWidth: a,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: c = !1
    } = e, {
      containsVideo: u,
      containsGif: _
    } = l.useMemo(() => (0, v.cp)(t), [t]), E = l.useMemo(() => t.slice(R.$x, R.GV), [t]), f = (0, R.tu)({
      numAttachments: E.length,
      containerWidth: a,
      containerHeight: i
    }), C = (0, R.S$)({
      imageContainerStyles: f,
      containerWidth: a,
      containerHeight: i
    }), T = (0, h.m)(), N = l.useMemo(() => E.map((e, t) => {
      var l;
      let [a, i] = (0, x.As)(e, !n, T), h = (0, x.MC)(i), E = {
        ...C[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && a ? h : e.alt,
        onClick: H,
        shouldRenderAccessory: !_ && !u,
        renderForwardComponent: D.VqG
      }, N = (0, g.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src, I = o && !a ? e.src : N;
      return (0, s.jsxs)("div", {
        className: U.bodyMediaFrame,
        style: f[t],
        children: [c ? (0, s.jsx)(m.Z, {
          ...E,
          src: I,
          backgroundSrc: N,
          aspectRatio: E.maxWidth / E.maxHeight,
          alt: null !== (l = E.alt) && void 0 !== l ? l : "",
          className: r()(U.mediaPostContainer, {
            [U.obscured]: a
          }),
          imageChildClassName: U.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(d.Image, {
          ...E,
          className: U.mediaContainer,
          imageClassName: r()(U.thumbnailOverride, {
            [U.obscured]: a
          })
        }) : (0, s.jsx)(k, {
          ...E,
          autoPlay: o && !a,
          containerClassName: U.mosaicMediaContainer,
          imageClassName: r()(U.imageCover, {
            [U.obscured]: a
          }),
          responsive: !0
        }), a && (0, s.jsx)("div", {
          className: U.obscuredTagContainer,
          children: (0, s.jsx)(M.Z, {
            obscureReason: i,
            iconClassname: U.obscuredTag
          })
        })]
      }, e.src)
    }), [o, _, u, n, f, C, E, c, T]);
    return (0, s.jsxs)("div", {
      className: U.bodyMedia,
      style: {
        width: a,
        height: i
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: N
      }), (_ || u) && (0, s.jsxs)("div", {
        className: U.mediaIconsRow,
        children: [u && (0, s.jsx)(d.PlayIcon, {
          color: "currentColor",
          size: "custom",
          width: 22,
          height: 22,
          className: U.mediaIcon
        }), _ && (0, s.jsx)(d.GifIcon, {
          size: "custom",
          width: 29,
          height: 29,
          color: "currentColor",
          className: U.mediaIcon
        })]
      }), t.length > R.Vn && (0, s.jsx)(G, {
        text: (t.length - R.Vn).toString(),
        icon: d.ImageIcon,
        pillClassName: U.moreImagesPill,
        iconClassName: U.moreImagesPillIcon,
        textClassName: U.moreImagesPillText
      })]
    })
  });

function G(e) {
  let {
    text: t,
    icon: n,
    pillClassName: l,
    iconClassName: a,
    textClassName: r
  } = e;
  return (0, s.jsxs)("div", {
    className: l,
    children: [(0, s.jsx)(n, {
      className: a,
      color: "currentColor"
    }), (0, s.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: r,
      children: ["+", t]
    })]
  })
}

function z(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    containerWidth: i,
    hasUnreads: o
  } = e, [c, u] = (0, A.rI)(i - 2 * A.LT), {
    content: m
  } = (0, S.mX)({
    firstMessage: n,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, b.DM)({
    channel: t,
    isNew: !1
  }), g = l.useMemo(() => ({
    width: c,
    height: u
  }), [c, u]), x = o ? U.textContentUnread : U.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: U.contentPreview,
      style: g,
      children: [(0, s.jsxs)("div", {
        className: U.content,
        children: [a && null == n && (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: y.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), a && null != n && (0, s.jsx)(E.ZP, {
          message: n,
          content: m,
          className: x
        })]
      }), (0, s.jsx)("div", {
        className: r()(U.textContentFooter, {
          [U.noTags]: !h
        }),
        children: h ? (0, s.jsx)(b.ZP, {
          channel: t,
          tagsClassName: U.tagPill,
          className: U.__invalid_row
        }) : null
      })]
    })
  })
}