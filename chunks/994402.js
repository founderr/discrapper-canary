"use strict";
a.r(t), a.d(t, {
  isMediaAttachment: function() {
    return j
  },
  getAttachmentKind: function() {
    return D
  },
  default: function() {
    return w
  }
}), a("222007"), a("702976"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var n = a("37983"),
  l = a("884691"),
  i = a("414456"),
  s = a.n(i),
  r = a("77078"),
  o = a("447435"),
  d = a("963119"),
  c = a("467475"),
  u = a("651693"),
  m = a("605160"),
  h = a("903962"),
  g = a("923873"),
  _ = a("165405"),
  A = a("410889"),
  M = a("725962"),
  I = a("505684"),
  p = a("328620"),
  E = a("522049"),
  f = a("945330"),
  C = a("228220"),
  x = a("568734"),
  v = a("103603"),
  y = a("719347"),
  T = a("49111"),
  N = a("782340"),
  O = a("494112");
let S = /\.(mp3|m4a|ogg|wav|flac)$/i,
  j = e => "IMAGE" === e || "VIDEO" === e;

function D(e, t) {
  let {
    filename: a,
    width: n,
    height: l
  } = e;
  if (t && null != n && n > 0 && null != l && l > 0) return (0, u.isImageFile)(a) ? "IMAGE" : (0, u.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
  if (null != t && S.test(a) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}
let L = e => {
    let t, a, {
      downloadURL: l,
      downloadMimeType: i,
      onRemoveAttachment: o,
      isAttachmentMediaType: d
    } = e;
    return (null != l && null != i && (t = (0, n.jsx)(r.Tooltip, {
      text: N.default.Messages.DOWNLOAD,
      children: e => (0, n.jsx)(M.default, {
        ...e,
        target: "_blank",
        rel: "noreferrer noopener",
        className: O.hoverButton,
        iconClassName: O.downloadHoverButtonIcon,
        focusProps: {
          offset: 2
        },
        href: l,
        mimeType: i
      })
    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
      text: N.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
      children: e => (0, n.jsx)(r.Clickable, {
        ...e,
        className: s(O.hoverButton, O.removeAttachmentHoverButton),
        focusProps: {
          offset: 2
        },
        onClick: o,
        "aria-label": N.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(C.default, {
          width: 20,
          height: 20
        })
      })
    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
      className: s(O.hoverButtonGroup, {
        [O.nonMediaAttachment]: !d
      }),
      children: [t, a]
    })
  },
  b = e => {
    let {
      message: t,
      attachment: a,
      inlineMedia: i,
      autoPlayGif: o,
      canRemoveAttachment: d,
      onRemoveAttachment: u,
      onClick: m,
      onContextMenu: h,
      onPlay: M,
      renderImageComponent: I,
      renderVideoComponent: C,
      renderAudioComponent: S,
      renderPlaintextFilePreview: j,
      className: b,
      imgContainerClassName: w,
      imgClassName: F,
      focusable: P,
      hiddenSpoilers: k,
      mediaLayoutType: B,
      maxWidth: G,
      maxHeight: V,
      noBorderBottomRadius: H,
      useFullWidth: R,
      isAttachmentMediaType: K
    } = e, {
      width: W,
      height: X,
      description: U,
      spoiler: z
    } = a, Y = D(a, i), [q, J] = l.useState(!1), Q = (0, c.default)(t.getChannelId()), {
      enabled: $
    } = g.default.useExperiment({
      location: "MessageAttachment"
    }, {
      autoTrackExposure: !1
    }), Z = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), ee = l.useCallback(() => {
      u(a)
    }, [a, u]), et = l.useCallback((e, n, l) => {
      if (t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE)) {
        var i;
        (0, _.logVoiceMessagePlaybackStarted)(t.id, null !== (i = a.duration_secs) && void 0 !== i ? i : null, n, t.author.id)
      } else null == M || M(e, n, l)
    }, [t, a.duration_secs, M]), ea = l.useCallback((e, n) => {
      var l;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, _.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
    }, [t, a.duration_secs]), en = l.useCallback(e => {
      var a;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, _.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
    }, [t]), el = l.useCallback(() => {
      if (B === y.MediaLayoutType.MOSAIC) {
        let e = !Q && "VIDEO" === Y || !Q && "AUDIO" === Y || "OTHER" === Y;
        if (K) {
          if (null == W || null == X) return null;
          let e = (0, v.getRatio)({
            width: W,
            height: X,
            maxWidth: y.MEDIA_MOSAIC_MAX_WIDTH,
            maxHeight: y.MEDIA_MOSAIC_MAX_HEIGHT
          });
          if (!R && (e * W < y.MINIMUM_MEDIA_MOSAIC_DIM || e * X < y.MINIMUM_MEDIA_MOSAIC_DIM)) return null
        }
        return !q && (0, n.jsx)(L, {
          downloadURL: e ? a.url : void 0,
          downloadMimeType: e ? Z : void 0,
          onRemoveAttachment: d ? ee : void 0,
          isAttachmentMediaType: K
        })
      }
      return d && (0, n.jsx)(r.Clickable, {
        className: z ? O.spoilerRemoveAttachmentButton : O.removeAttachmentButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => u(a),
        "aria-label": N.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(f.default, {
          width: 16,
          height: 16
        })
      })
    }, [B, d, z, Y, K, q, a, Z, ee, W, X, R, u, Q]), ei = l.useCallback(() => {
      var e;
      return (0, x.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, T.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
        text: N.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: O.clipPill,
        children: [(0, n.jsx)(E.default, {}), (0, n.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: N.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [a]);
    switch (Y) {
      case "IMAGE":
        return (0, n.jsx)(p.GIFAccessoryContext.Consumer, {
          children: e => I({
            alt: U,
            src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
            original: a.url,
            placeholder: a.placeholder,
            placeholderVersion: a.placeholder_version,
            showThumbhashPlaceholder: $,
            width: W,
            height: X,
            autoPlay: o && !k,
            onClick: m,
            onContextMenu: h,
            shouldHideMediaOptions: Q,
            renderAccessory: e,
            renderAdjacentContent: el,
            containerClassName: b,
            className: w,
            imageClassName: F,
            shouldLink: P,
            hiddenSpoilers: k,
            responsive: !0,
            mediaLayoutType: B,
            maxWidth: G,
            maxHeight: V,
            useFullWidth: R
          })
        });
      case "VIDEO":
        let es = new URL(a.proxy_url);
        return es.searchParams.append("format", "jpeg"), C({
          poster: es.toString(),
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          placeholder: a.placeholder,
          placeholderVersion: a.placeholder_version,
          showThumbhashPlaceholder: $,
          width: W,
          height: X,
          onClick: m,
          onContextMenu: h,
          renderOverlayContent: ei,
          renderAdjacentContent: el,
          naturalWidth: W,
          naturalHeight: X,
          className: s(b, {
            [O.noBorderBottomRadius]: H
          }),
          playable: P,
          responsive: !0,
          mediaLayoutType: B,
          maxWidth: G,
          maxHeight: V,
          useFullWidth: R,
          mimeType: Z,
          onPlay: M,
          downloadable: !Q,
          mediaPlayerClassName: H ? O.noBorderBottomRadius : void 0
        });
      case "AUDIO":
        return S({
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          className: b,
          playable: P,
          mimeType: Z,
          durationSecs: a.duration_secs,
          waveform: a.waveform,
          renderAdjacentContent: el,
          onVolumeShow: () => J(!0),
          onVolumeHide: () => J(!1),
          onPlay: et,
          onPause: ea,
          onError: en
        });
      case "PLAINTEXT_PREVIEW":
        return j({
          attachment: a,
          className: b,
          onClick: m,
          onContextMenu: h,
          renderAdjacentContent: el
        });
      case "OTHER":
        return (0, n.jsx)(A.default, {
          url: a.url,
          filename: a.filename,
          size: a.size,
          onClick: m,
          onContextMenu: h,
          className: b,
          renderAdjacentContent: el
        });
      case "INVALID":
        return null
    }
  };
var w = e => {
  var t;
  let {
    className: a,
    attachment: i,
    message: r,
    inlineMedia: c,
    useFullWidth: u,
    mediaLayoutType: h,
    canRemoveAttachment: g,
    isSingleMosaicItem: _,
    footer: A,
    ...M
  } = e, {
    width: p,
    height: E
  } = i, f = (0, d.useShouldRedactExplicitContent)(r.channel_id, r.author.id), C = (0, m.getObscureReason)(i, f), [x, T] = l.useState(null != C), N = h === y.MediaLayoutType.MOSAIC, S = !N && (null != p && p < 200 || null != E && E < 50), L = D(i, c);
  let w = "IMAGE" === (t = L) || "VIDEO" === t,
    F = j(D(i, c)),
    P = _ && null != C && (0, o.isExplicitMediaBelowConstraints)(p, E),
    k = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(b, {
        ...M,
        attachment: i,
        message: r,
        inlineMedia: c,
        hiddenSpoilers: e,
        canRemoveAttachment: g,
        className: s(a, O.attachmentContentItem, {
          [O.obscured]: x && !S,
          [O.hiddenSpoiler]: x && C === m.ObscureReason.SPOILER,
          [O.hiddenExplicit]: x && null != C && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(C),
          [O.hiddenAttachment]: x && e,
          [O.inline]: x && S
        }),
        focusable: !e,
        mediaLayoutType: h,
        noBorderBottomRadius: null != A,
        useFullWidth: !!P || u,
        isAttachmentMediaType: F
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: s(O.messageAttachment, {
        [O.messageAttachmentNoJustify]: w,
        [O.messageAttachmentFullWidth]: u,
        [O.messageAttachmentMediaMosaic]: N,
        [O.hideOverflow]: N && F,
        [O.messageAttachmentWithFooter]: null != A
      }),
      children: [null != C ? (0, n.jsx)(I.default, {
        type: I.default.Types.ATTACHMENT,
        inline: S,
        reason: C,
        isSingleMosaicItem: _,
        obscured: x,
        containerStyles: function(e, t, a) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, v.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...a !== y.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(i, w, h),
        obscurityControlClassName: s({
          [O.obscureVideo]: "VIDEO" === L && _ && !x
        }),
        onToggleObscurity: () => T(e => !e),
        children: e => k(e)
      }) : k(), A]
    })
  })
}