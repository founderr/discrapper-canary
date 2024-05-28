"use strict";
n.r(t), n.d(t, {
  getMosaicMediaTypeForAttachment: function() {
    return _
  },
  getMosaicMediaTypeForUnfurledMediaItem: function() {
    return w
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
}), n("789020"), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("120356"),
  l = n.n(a),
  o = n("481060"),
  r = n("163268"),
  u = n("25610"),
  d = n("976853"),
  c = n("118139"),
  m = n("169525"),
  h = n("65838"),
  I = n("196050"),
  M = n("68588"),
  f = n("941797"),
  p = n("465670"),
  x = n("740727"),
  C = n("630388"),
  g = n("956664"),
  A = n("768760"),
  T = n("981631"),
  y = n("689938"),
  E = n("361811");
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
    filename: n,
    width: i,
    height: s
  } = e;
  if (t && null != i && i > 0 && null != s && s > 0) {
    if ((0, c.isImageFile)(n)) return "IMAGE";
    if (!(0, c.isVideoFile)(n) || null == e.proxy_url) return "INVALID";
    else {
      var a;
      return (0, C.hasFlag)(null !== (a = e.flags) && void 0 !== a ? a : 0, T.MessageAttachmentFlags.IS_CLIP) ? "CLIP" : "VIDEO"
    }
  }
  if (null != t && j.test(n) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(n)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}

function w(e, t) {
  let {
    contentType: n,
    width: i,
    height: s
  } = e;
  if (t && i > 0 && s > 0) return (0, c.isImageContentType)(n) ? "IMAGE" : (0, c.isVideoContentType)(n) ? "VIDEO" : "INVALID";
  return "OTHER"
}
let S = e => {
  let t, n, {
    downloadURL: s,
    downloadMimeType: a,
    onRemoveItem: r,
    isVisualMediaType: u
  } = e;
  return (null != s && null != a && (t = (0, i.jsx)(o.Tooltip, {
    text: y.default.Messages.DOWNLOAD,
    children: e => (0, i.jsx)(I.default, {
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
  })), null != r && (n = (0, i.jsx)(o.Tooltip, {
    text: y.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
    children: e => (0, i.jsx)(o.Clickable, {
      ...e,
      className: l()(E.hoverButton, E.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: r,
      "aria-label": y.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(x.default, {
        width: 20,
        height: 20
      })
    })
  })), null == n && null == t) ? null : (0, i.jsxs)("div", {
    className: l()(E.hoverButtonGroup, {
      [E.nonMediaMosaicItem]: !u
    }),
    children: [t, n]
  })
};

function D(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: a,
    canRemoveItem: r,
    onRemoveItem: u,
    onClick: c,
    onContextMenu: m,
    onPlay: h,
    renderImageComponent: I,
    renderVideoComponent: M,
    renderAudioComponent: x,
    renderPlaintextFilePreview: C,
    renderGenericFileComponent: T,
    className: j,
    imgContainerClassName: v,
    imgClassName: N,
    focusable: O,
    hiddenSpoilers: _,
    mediaLayoutType: w,
    maxWidth: D,
    maxHeight: F,
    hasFooter: L,
    useFullWidth: H,
    isVisualMediaType: V,
    onVideoControlsShow: G,
    onVideoControlsHide: R
  } = e, {
    width: P,
    height: W,
    spoiler: b,
    type: B,
    contentType: k
  } = n, [X, U] = s.useState(!1), q = (0, d.default)(t.getChannelId()), z = s.useMemo(() => null != k && -1 !== k.indexOf("/") ? k.split("/") : ["unknown", "unknown"], [k]), J = s.useCallback(() => {
    u(n)
  }, [n, u]), Y = s.useCallback(() => {
    if (w === A.MediaLayoutType.MOSAIC) {
      let e = !q && ["VIDEO", "CLIP", "AUDIO"].includes(B) || "OTHER" === B;
      if (V) {
        if (null == P || null == W) return null;
        let e = (0, g.getRatio)({
          width: P,
          height: W,
          maxWidth: A.MEDIA_MOSAIC_MAX_WIDTH,
          maxHeight: A.MEDIA_MOSAIC_MAX_HEIGHT
        });
        if (!H && (e * P < A.MINIMUM_MEDIA_MOSAIC_DIM || e * W < A.MINIMUM_MEDIA_MOSAIC_DIM)) return null
      }
      return !X && (0, i.jsx)(S, {
        downloadURL: e ? n.downloadUrl : void 0,
        downloadMimeType: e ? z : void 0,
        onRemoveItem: r ? J : void 0,
        isVisualMediaType: V
      })
    }
    return r && (0, i.jsx)(o.Clickable, {
      className: b ? E.spoilerRemoveMosaicItemButton : E.removeMosaicItemButton,
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      onClick: () => u(n),
      "aria-label": y.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(p.default, {
        width: 16,
        height: 16
      })
    })
  }, [w, r, b, B, V, X, n, z, J, P, W, H, u, q]);
  switch (B) {
    case "IMAGE":
      return (0, i.jsx)(f.GIFAccessoryContext.Consumer, {
        children: e => (0, i.jsx)(I, {
          item: n,
          message: t,
          width: P,
          height: W,
          autoPlay: a && !_,
          onClick: c,
          onContextMenu: m,
          shouldHideMediaOptions: q,
          renderAccessory: e,
          renderAdjacentContent: Y,
          containerClassName: j,
          className: v,
          imageClassName: N,
          shouldLink: O,
          hiddenSpoilers: _,
          responsive: !0,
          mediaLayoutType: w,
          maxWidth: D,
          maxHeight: F,
          useFullWidth: H
        })
      });
    case "VIDEO":
    case "CLIP":
      return (0, i.jsx)(M, {
        item: n,
        message: t,
        width: P,
        height: W,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: Y,
        naturalWidth: P,
        naturalHeight: W,
        className: l()(j, {
          [E.hasFooter]: L
        }),
        playable: O,
        responsive: !0,
        mediaLayoutType: w,
        maxWidth: D,
        maxHeight: F,
        useFullWidth: H,
        mimeType: z,
        onControlsShow: G,
        onControlsHide: R,
        downloadable: !q,
        mediaPlayerClassName: L ? E.hasFooter : void 0
      });
    case "AUDIO":
      return (0, i.jsx)(x, {
        item: n,
        message: t,
        className: j,
        playable: O,
        mimeType: z,
        renderAdjacentContent: Y,
        onVolumeShow: () => U(!0),
        onVolumeHide: () => U(!1),
        onPlay: h
      });
    case "PLAINTEXT_PREVIEW":
      return (0, i.jsx)(C, {
        item: n,
        message: t,
        className: j,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: Y
      });
    case "OTHER":
      return (0, i.jsx)(T, {
        item: n,
        message: t,
        className: j,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: Y
      });
    case "INVALID":
      return null
  }
}
t.default = function(e) {
  var t;
  let {
    className: n,
    item: a,
    message: o,
    getObscureReason: d,
    useFullWidth: c,
    mediaLayoutType: h,
    isSingleMosaicItem: I,
    footer: f,
    ...p
  } = e, {
    width: x,
    height: C,
    type: T
  } = a, y = d(a, (0, u.useShouldRedactExplicitContent)(o.channel_id, o.author.id)), [j, N] = s.useState(null != y), O = h === A.MediaLayoutType.MOSAIC, _ = !O && (null != x && x < 200 || null != C && C < 50);
  let w = "IMAGE" === (t = T) || "VIDEO" === t,
    S = v(T),
    F = I && null != y && (0, r.isExplicitMediaBelowConstraints)(x, C),
    [L, H] = s.useState(!1),
    V = () => {
      H(!0)
    },
    G = () => {
      H(!1)
    },
    R = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, i.jsx)(D, {
        ...p,
        item: a,
        message: o,
        getObscureReason: d,
        hiddenSpoilers: e,
        className: l()(n, E.mosaicItemContent, {
          [E.obscured]: j && !_,
          [E.hiddenSpoiler]: j && y === m.ObscureReason.SPOILER,
          [E.hiddenExplicit]: j && null != y && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(y),
          [E.hiddenMosaicItem]: j && e,
          [E.inline]: j && _
        }),
        focusable: !e,
        mediaLayoutType: h,
        hasFooter: null != f,
        useFullWidth: !!F || c,
        isVisualMediaType: S,
        onVideoControlsShow: V,
        onVideoControlsHide: G
      })
    };
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: l()(E.mosaicItem, {
        [E.mosaicItemNoJustify]: w,
        [E.mosaicItemFullWidth]: c,
        [E.mosaicItemMediaMosaic]: O,
        [E.hideOverflow]: O && S,
        [E.mosaicItemWithFooter]: null != f
      }),
      children: [null != y ? (0, i.jsx)(M.default, {
        type: M.default.Types.ATTACHMENT,
        inline: _,
        reason: y,
        isSingleMosaicItem: I,
        obscured: j,
        containerStyles: function(e, t, n) {
          if (!t) return;
          let i = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, g.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            i = t
          }
          return {
            ...n !== A.MediaLayoutType.MOSAIC && {
              maxWidth: null != i ? i : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(a, w, h),
        obscurityControlClassName: l()({
          [E.obscureVideoSpacing]: "VIDEO" === T && I && !j && L
        }),
        onToggleObscurity: () => N(e => !e),
        children: e => R(e)
      }) : R(), f]
    })
  })
}