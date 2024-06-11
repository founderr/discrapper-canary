"use strict";
i.r(t), i.d(t, {
  getMosaicMediaTypeForAttachment: function() {
    return _
  },
  getMosaicMediaTypeForUnfurledMediaItem: function() {
    return S
  },
  isGroupableMedia: function() {
    return N
  },
  isVisualMedia: function() {
    return v
  },
  messageAttachmentToMosaicMediaItem: function() {
    return O
  }
}), i("789020"), i("47120");
var n = i("735250"),
  s = i("470079"),
  a = i("120356"),
  l = i.n(a),
  o = i("481060"),
  r = i("163268"),
  u = i("25610"),
  d = i("976853"),
  m = i("118139"),
  c = i("169525"),
  h = i("65838"),
  I = i("196050"),
  M = i("68588"),
  p = i("941797"),
  x = i("465670"),
  f = i("740727"),
  C = i("630388"),
  g = i("956664"),
  y = i("768760"),
  T = i("981631"),
  A = i("689938"),
  E = i("361811");
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  v = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
  N = e => "IMAGE" === e || "VIDEO" === e;

function O(e, t) {
  return {
    uniqueId: e.id,
    originalItem: e,
    type: _(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type
  }
}

function _(e, t) {
  let {
    filename: i,
    width: n,
    height: s
  } = e;
  if (t && null != n && n > 0 && null != s && s > 0) {
    if ((0, m.isImageFile)(i)) return "IMAGE";
    if (!(0, m.isVideoFile)(i) || null == e.proxy_url) return "INVALID";
    else {
      var a;
      return (0, C.hasFlag)(null !== (a = e.flags) && void 0 !== a ? a : 0, T.MessageAttachmentFlags.IS_CLIP) ? "CLIP" : "VIDEO"
    }
  }
  if (null != t && j.test(i) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(i)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}

function S(e, t) {
  let {
    contentType: i,
    width: n,
    height: s
  } = e;
  if (t && n > 0 && s > 0) return (0, m.isImageContentType)(i) ? "IMAGE" : (0, m.isVideoContentType)(i) ? "VIDEO" : "INVALID";
  return "OTHER"
}
let w = e => {
  let t, i, {
    downloadURL: s,
    downloadMimeType: a,
    onRemoveItem: r,
    isVisualMediaType: u
  } = e;
  return (null != s && null != a && (t = (0, n.jsx)(o.Tooltip, {
    text: A.default.Messages.DOWNLOAD,
    children: e => (0, n.jsx)(I.default, {
      ...e,
      target: "_blank",
      rel: "noreferrer noopener",
      className: E.hoverButton,
      iconClassName: E.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: s,
      mimeType: a
    })
  })), null != r && (i = (0, n.jsx)(o.Tooltip, {
    text: A.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
    children: e => (0, n.jsx)(o.Clickable, {
      ...e,
      className: l()(E.hoverButton, E.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: r,
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, n.jsx)(f.default, {
        width: 20,
        height: 20
      })
    })
  })), null == i && null == t) ? null : (0, n.jsxs)("div", {
    className: l()(E.hoverButtonGroup, {
      [E.nonMediaMosaicItem]: !u
    }),
    children: [t, i]
  })
};

function D(e) {
  let {
    message: t,
    item: i,
    autoPlayGif: a,
    canRemoveItem: r,
    onRemoveItem: u,
    onClick: m,
    onContextMenu: c,
    onPlay: h,
    renderImageComponent: I,
    renderVideoComponent: M,
    renderAudioComponent: f,
    renderPlaintextFilePreview: C,
    renderGenericFileComponent: T,
    className: j,
    imgContainerClassName: v,
    imgClassName: N,
    focusable: O,
    hiddenSpoilers: _,
    mediaLayoutType: S,
    maxWidth: D,
    maxHeight: F,
    hasFooter: H,
    useFullWidth: L,
    isVisualMediaType: V,
    onVideoControlsShow: G,
    onVideoControlsHide: P
  } = e, {
    width: b,
    height: W,
    spoiler: B,
    type: R,
    contentType: k
  } = i, [X, U] = s.useState(!1), q = (0, d.default)(t.getChannelId()), z = s.useMemo(() => null != k && -1 !== k.indexOf("/") ? k.split("/") : ["unknown", "unknown"], [k]), J = s.useCallback(() => {
    u(i)
  }, [i, u]), $ = s.useCallback(() => {
    if (S === y.MediaLayoutType.MOSAIC) {
      let e = !q && ["VIDEO", "CLIP", "AUDIO"].includes(R) || "OTHER" === R;
      if (V) {
        if (null == b || null == W) return null;
        let e = (0, g.getRatio)({
          width: b,
          height: W,
          maxWidth: y.MEDIA_MOSAIC_MAX_WIDTH,
          maxHeight: y.MEDIA_MOSAIC_MAX_HEIGHT
        });
        if (!L && (e * b < y.MINIMUM_MEDIA_MOSAIC_DIM || e * W < y.MINIMUM_MEDIA_MOSAIC_DIM)) return null
      }
      return !X && (0, n.jsx)(w, {
        downloadURL: e ? i.downloadUrl : void 0,
        downloadMimeType: e ? z : void 0,
        onRemoveItem: r ? J : void 0,
        isVisualMediaType: V
      })
    }
    return r && (0, n.jsx)(o.Clickable, {
      className: B ? E.spoilerRemoveMosaicItemButton : E.removeMosaicItemButton,
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      onClick: () => u(i),
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, n.jsx)(x.default, {
        width: 16,
        height: 16
      })
    })
  }, [S, r, B, R, V, X, i, z, J, b, W, L, u, q]);
  switch (R) {
    case "IMAGE":
      return (0, n.jsx)(p.GIFAccessoryContext.Consumer, {
        children: e => (0, n.jsx)(I, {
          item: i,
          message: t,
          width: b,
          height: W,
          autoPlay: a && !_,
          onClick: m,
          onContextMenu: c,
          shouldHideMediaOptions: q,
          renderAccessory: e,
          renderAdjacentContent: $,
          containerClassName: j,
          className: v,
          imageClassName: N,
          shouldLink: O,
          hiddenSpoilers: _,
          responsive: !0,
          mediaLayoutType: S,
          maxWidth: D,
          maxHeight: F,
          useFullWidth: L
        })
      });
    case "VIDEO":
    case "CLIP":
      return (0, n.jsx)(M, {
        item: i,
        message: t,
        width: b,
        height: W,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $,
        naturalWidth: b,
        naturalHeight: W,
        className: l()(j, {
          [E.hasFooter]: H
        }),
        playable: O,
        responsive: !0,
        mediaLayoutType: S,
        maxWidth: D,
        maxHeight: F,
        useFullWidth: L,
        mimeType: z,
        onControlsShow: G,
        onControlsHide: P,
        downloadable: !q,
        mediaPlayerClassName: H ? E.hasFooter : void 0
      });
    case "AUDIO":
      return (0, n.jsx)(f, {
        item: i,
        message: t,
        className: j,
        playable: O,
        mimeType: z,
        renderAdjacentContent: $,
        onVolumeShow: () => U(!0),
        onVolumeHide: () => U(!1),
        onPlay: h
      });
    case "PLAINTEXT_PREVIEW":
      return (0, n.jsx)(C, {
        item: i,
        message: t,
        className: j,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $
      });
    case "OTHER":
      return (0, n.jsx)(T, {
        item: i,
        message: t,
        className: j,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $
      });
    case "INVALID":
      return null
  }
}
t.default = function(e) {
  var t;
  let {
    className: i,
    item: a,
    message: o,
    getObscureReason: d,
    useFullWidth: m,
    mediaLayoutType: h,
    isSingleMosaicItem: I,
    footer: p,
    ...x
  } = e, {
    width: f,
    height: C,
    type: T
  } = a, A = d(a, (0, u.useShouldRedactExplicitContent)(o.channel_id, o.author.id)), [j, N] = s.useState(null != A), O = h === y.MediaLayoutType.MOSAIC, _ = !O && (null != f && f < 200 || null != C && C < 50);
  let S = "IMAGE" === (t = T) || "VIDEO" === t,
    w = v(T),
    F = I && null != A && (0, r.isExplicitMediaBelowConstraints)(f, C),
    [H, L] = s.useState(!1),
    V = () => {
      L(!0)
    },
    G = () => {
      L(!1)
    },
    P = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(D, {
        ...x,
        item: a,
        message: o,
        getObscureReason: d,
        hiddenSpoilers: e,
        className: l()(i, E.mosaicItemContent, {
          [E.obscured]: j && !_,
          [E.hiddenSpoiler]: j && A === c.ObscureReason.SPOILER,
          [E.hiddenExplicit]: j && null != A && [c.ObscureReason.EXPLICIT_CONTENT, c.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(A),
          [E.hiddenMosaicItem]: j && e,
          [E.inline]: j && _
        }),
        focusable: !e,
        mediaLayoutType: h,
        hasFooter: null != p,
        useFullWidth: !!F || m,
        isVisualMediaType: w,
        onVideoControlsShow: V,
        onVideoControlsHide: G
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: l()(E.mosaicItem, {
        [E.mosaicItemNoJustify]: S,
        [E.mosaicItemFullWidth]: m,
        [E.mosaicItemMediaMosaic]: O,
        [E.hideOverflow]: O && w,
        [E.mosaicItemWithFooter]: null != p
      }),
      children: [null != A ? (0, n.jsx)(M.default, {
        type: M.default.Types.ATTACHMENT,
        inline: _,
        reason: A,
        isSingleMosaicItem: I,
        obscured: j,
        containerStyles: function(e, t, i) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, g.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...i !== y.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(a, S, h),
        obscurityControlClassName: l()({
          [E.obscureVideoSpacing]: "VIDEO" === T && I && !j && H
        }),
        onToggleObscurity: () => N(e => !e),
        children: e => P(e)
      }) : P(), p]
    })
  })
}