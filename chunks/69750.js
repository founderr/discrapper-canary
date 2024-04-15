"use strict";
n.r(t), n.d(t, {
  getMosaicMediaTypeForAttachment: function() {
    return O
  },
  isGroupableMedia: function() {
    return N
  },
  isVisualMedia: function() {
    return v
  },
  messageAttachmentToMosaicMediaItem: function() {
    return S
  }
}), n("789020"), n("47120");
var i = n("735250"),
  l = n("470079"),
  a = n("120356"),
  o = n.n(a),
  s = n("481060"),
  r = n("163268"),
  u = n("25610"),
  d = n("976853"),
  c = n("118139"),
  m = n("169525"),
  h = n("65838"),
  I = n("196050"),
  f = n("68588"),
  M = n("941797"),
  p = n("465670"),
  g = n("740727"),
  _ = n("630388"),
  C = n("956664"),
  A = n("768760"),
  E = n("981631"),
  x = n("689938"),
  y = n("914367");
let T = /\.(mp3|m4a|ogg|wav|flac)$/i,
  v = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
  N = e => "IMAGE" === e || "VIDEO" === e;

function S(e, t) {
  return {
    uniqueId: e.id,
    originalItem: e,
    type: O(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type
  }
}

function O(e, t) {
  let {
    filename: n,
    width: i,
    height: l
  } = e;
  if (t && null != i && i > 0 && null != l && l > 0) {
    if ((0, c.isImageFile)(n)) return "IMAGE";
    if (!(0, c.isVideoFile)(n) || null == e.proxy_url) return "INVALID";
    else {
      var a;
      return (0, _.hasFlag)(null !== (a = e.flags) && void 0 !== a ? a : 0, E.MessageAttachmentFlags.IS_CLIP) ? "CLIP" : "VIDEO"
    }
  }
  if (null != t && T.test(n) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(n)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}
let j = e => {
  let t, n, {
    downloadURL: l,
    downloadMimeType: a,
    onRemoveItem: r,
    isVisualMediaType: u
  } = e;
  return (null != l && null != a && (t = (0, i.jsx)(s.Tooltip, {
    text: x.default.Messages.DOWNLOAD,
    children: e => (0, i.jsx)(I.default, {
      ...e,
      target: "_blank",
      rel: "noreferrer noopener",
      className: y.hoverButton,
      iconClassName: y.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: l,
      mimeType: a
    })
  })), null != r && (n = (0, i.jsx)(s.Tooltip, {
    text: x.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
    children: e => (0, i.jsx)(s.Clickable, {
      ...e,
      className: o()(y.hoverButton, y.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: r,
      "aria-label": x.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(g.default, {
        width: 20,
        height: 20
      })
    })
  })), null == n && null == t) ? null : (0, i.jsxs)("div", {
    className: o()(y.hoverButtonGroup, {
      [y.nonMediaMosaicItem]: !u
    }),
    children: [t, n]
  })
};

function F(e) {
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
    renderVideoComponent: f,
    renderAudioComponent: g,
    renderPlaintextFilePreview: _,
    renderGenericFileComponent: E,
    className: T,
    imgContainerClassName: v,
    imgClassName: N,
    focusable: S,
    hiddenSpoilers: O,
    mediaLayoutType: F,
    maxWidth: L,
    maxHeight: D,
    hasFooter: P,
    useFullWidth: w,
    isVisualMediaType: V,
    onVideoControlsShow: b,
    onVideoControlsHide: G
  } = e, {
    width: H,
    height: k,
    spoiler: B,
    type: R,
    contentType: W
  } = n, [U, z] = l.useState(!1), X = (0, d.default)(t.getChannelId()), q = l.useMemo(() => null != W && -1 !== W.indexOf("/") ? W.split("/") : ["unknown", "unknown"], [W]), K = l.useCallback(() => {
    u(n)
  }, [n, u]), Y = l.useCallback(() => {
    if (F === A.MediaLayoutType.MOSAIC) {
      let e = !X && ["VIDEO", "CLIP", "AUDIO"].includes(R) || "OTHER" === R;
      if (V) {
        if (null == H || null == k) return null;
        let e = (0, C.getRatio)({
          width: H,
          height: k,
          maxWidth: A.MEDIA_MOSAIC_MAX_WIDTH,
          maxHeight: A.MEDIA_MOSAIC_MAX_HEIGHT
        });
        if (!w && (e * H < A.MINIMUM_MEDIA_MOSAIC_DIM || e * k < A.MINIMUM_MEDIA_MOSAIC_DIM)) return null
      }
      return !U && (0, i.jsx)(j, {
        downloadURL: e ? n.downloadUrl : void 0,
        downloadMimeType: e ? q : void 0,
        onRemoveItem: r ? K : void 0,
        isVisualMediaType: V
      })
    }
    return r && (0, i.jsx)(s.Clickable, {
      className: B ? y.spoilerRemoveMosaicItemButton : y.removeMosaicItemButton,
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      onClick: () => u(n),
      "aria-label": x.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(p.default, {
        width: 16,
        height: 16
      })
    })
  }, [F, r, B, R, V, U, n, q, K, H, k, w, u, X]);
  switch (R) {
    case "IMAGE":
      return (0, i.jsx)(M.GIFAccessoryContext.Consumer, {
        children: e => I({
          item: n,
          message: t,
          width: H,
          height: k,
          autoPlay: a && !O,
          onClick: c,
          onContextMenu: m,
          shouldHideMediaOptions: X,
          renderAccessory: e,
          renderAdjacentContent: Y,
          containerClassName: T,
          className: v,
          imageClassName: N,
          shouldLink: S,
          hiddenSpoilers: O,
          responsive: !0,
          mediaLayoutType: F,
          maxWidth: L,
          maxHeight: D,
          useFullWidth: w
        })
      });
    case "VIDEO":
    case "CLIP":
      return f({
        item: n,
        message: t,
        width: H,
        height: k,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: Y,
        naturalWidth: H,
        naturalHeight: k,
        className: o()(T, {
          [y.hasFooter]: P
        }),
        playable: S,
        responsive: !0,
        mediaLayoutType: F,
        maxWidth: L,
        maxHeight: D,
        useFullWidth: w,
        mimeType: q,
        onControlsShow: b,
        onControlsHide: G,
        downloadable: !X,
        mediaPlayerClassName: P ? y.hasFooter : void 0
      });
    case "AUDIO":
      return g({
        item: n,
        message: t,
        className: T,
        playable: S,
        mimeType: q,
        renderAdjacentContent: Y,
        onVolumeShow: () => z(!0),
        onVolumeHide: () => z(!1),
        onPlay: h
      });
    case "PLAINTEXT_PREVIEW":
      return _({
        item: n,
        message: t,
        className: T,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: Y
      });
    case "OTHER":
      return E({
        item: n,
        message: t,
        className: T,
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
    message: s,
    getObscureReason: d,
    useFullWidth: c,
    mediaLayoutType: h,
    isSingleMosaicItem: I,
    footer: M,
    ...p
  } = e, {
    width: g,
    height: _,
    type: E
  } = a, x = d(a, (0, u.useShouldRedactExplicitContent)(s.channel_id, s.author.id)), [T, N] = l.useState(null != x), S = h === A.MediaLayoutType.MOSAIC, O = !S && (null != g && g < 200 || null != _ && _ < 50);
  let j = "IMAGE" === (t = E) || "VIDEO" === t,
    L = v(E),
    D = I && null != x && (0, r.isExplicitMediaBelowConstraints)(g, _),
    [P, w] = l.useState(!1),
    V = () => {
      w(!0)
    },
    b = () => {
      w(!1)
    },
    G = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, i.jsx)(F, {
        ...p,
        item: a,
        message: s,
        getObscureReason: d,
        hiddenSpoilers: e,
        className: o()(n, y.mosaicItemContent, {
          [y.obscured]: T && !O,
          [y.hiddenSpoiler]: T && x === m.ObscureReason.SPOILER,
          [y.hiddenExplicit]: T && null != x && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(x),
          [y.hiddenMosaicItem]: T && e,
          [y.inline]: T && O
        }),
        focusable: !e,
        mediaLayoutType: h,
        hasFooter: null != M,
        useFullWidth: !!D || c,
        isVisualMediaType: L,
        onVideoControlsShow: V,
        onVideoControlsHide: b
      })
    };
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: o()(y.mosaicItem, {
        [y.mosaicItemNoJustify]: j,
        [y.mosaicItemFullWidth]: c,
        [y.mosaicItemMediaMosaic]: S,
        [y.hideOverflow]: S && L,
        [y.mosaicItemWithFooter]: null != M
      }),
      children: [null != x ? (0, i.jsx)(f.default, {
        type: f.default.Types.ATTACHMENT,
        inline: O,
        reason: x,
        isSingleMosaicItem: I,
        obscured: T,
        containerStyles: function(e, t, n) {
          if (!t) return;
          let i = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, C.fit)({
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
        }(a, j, h),
        obscurityControlClassName: o()({
          [y.obscureVideoSpacing]: "VIDEO" === E && I && !T && P
        }),
        onToggleObscurity: () => N(e => !e),
        children: e => G(e)
      }) : G(), M]
    })
  })
}