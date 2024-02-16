"use strict";
a.r(t), a.d(t, {
  isMediaAttachment: function() {
    return S
  },
  getAttachmentKind: function() {
    return j
  },
  default: function() {
    return F
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
  h = a("605160"),
  m = a("903962"),
  A = a("165405"),
  _ = a("410889"),
  g = a("725962"),
  I = a("505684"),
  M = a("328620"),
  p = a("522049"),
  E = a("945330"),
  f = a("228220"),
  C = a("568734"),
  x = a("103603"),
  v = a("719347"),
  y = a("49111"),
  T = a("782340"),
  N = a("494112");
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  S = e => "IMAGE" === e || "VIDEO" === e;

function j(e, t) {
  let {
    filename: a,
    width: n,
    height: l
  } = e;
  if (t && null != n && n > 0 && null != l && l > 0) return (0, u.isImageFile)(a) ? "IMAGE" : (0, u.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
  if (null != t && O.test(a) && null != e.url) return "AUDIO";
  if (null != e.url && (0, m.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}
let D = e => {
    let t, a, {
      downloadURL: l,
      downloadMimeType: i,
      onRemoveAttachment: o,
      isAttachmentMediaType: d
    } = e;
    return (null != l && null != i && (t = (0, n.jsx)(r.Tooltip, {
      text: T.default.Messages.DOWNLOAD,
      children: e => (0, n.jsx)(g.default, {
        ...e,
        target: "_blank",
        rel: "noreferrer noopener",
        className: N.hoverButton,
        iconClassName: N.downloadHoverButtonIcon,
        focusProps: {
          offset: 2
        },
        href: l,
        mimeType: i
      })
    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
      text: T.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
      children: e => (0, n.jsx)(r.Clickable, {
        ...e,
        className: s(N.hoverButton, N.removeAttachmentHoverButton),
        focusProps: {
          offset: 2
        },
        onClick: o,
        "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(f.default, {
          width: 20,
          height: 20
        })
      })
    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
      className: s(N.hoverButtonGroup, {
        [N.nonMediaAttachment]: !d
      }),
      children: [t, a]
    })
  },
  L = e => {
    let {
      message: t,
      attachment: a,
      inlineMedia: i,
      autoPlayGif: o,
      canRemoveAttachment: d,
      onRemoveAttachment: u,
      onClick: h,
      onContextMenu: m,
      onPlay: g,
      renderImageComponent: I,
      renderVideoComponent: f,
      renderAudioComponent: O,
      renderPlaintextFilePreview: S,
      className: L,
      imgContainerClassName: F,
      imgClassName: w,
      focusable: b,
      hiddenSpoilers: P,
      mediaLayoutType: G,
      maxWidth: V,
      maxHeight: k,
      hasFooter: H,
      useFullWidth: B,
      isAttachmentMediaType: R
    } = e, {
      width: K,
      height: W,
      description: X,
      spoiler: U
    } = a, z = j(a, i), [Y, q] = l.useState(!1), J = (0, c.default)(t.getChannelId()), Q = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), $ = l.useCallback(() => {
      u(a)
    }, [a, u]), Z = l.useCallback((e, n, l) => {
      if (t.hasFlag(y.MessageFlags.IS_VOICE_MESSAGE)) {
        var i;
        (0, A.logVoiceMessagePlaybackStarted)(t.id, null !== (i = a.duration_secs) && void 0 !== i ? i : null, n, t.author.id)
      } else null == g || g(e, n, l)
    }, [t, a.duration_secs, g]), ee = l.useCallback((e, n) => {
      var l;
      t.hasFlag(y.MessageFlags.IS_VOICE_MESSAGE) && (0, A.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
    }, [t, a.duration_secs]), et = l.useCallback(e => {
      var a;
      t.hasFlag(y.MessageFlags.IS_VOICE_MESSAGE) && (0, A.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
    }, [t]), ea = l.useCallback(() => {
      if (G === v.MediaLayoutType.MOSAIC) {
        let e = !J && "VIDEO" === z || !J && "AUDIO" === z || "OTHER" === z;
        if (R) {
          if (null == K || null == W) return null;
          let e = (0, x.getRatio)({
            width: K,
            height: W,
            maxWidth: v.MEDIA_MOSAIC_MAX_WIDTH,
            maxHeight: v.MEDIA_MOSAIC_MAX_HEIGHT
          });
          if (!B && (e * K < v.MINIMUM_MEDIA_MOSAIC_DIM || e * W < v.MINIMUM_MEDIA_MOSAIC_DIM)) return null
        }
        return !Y && (0, n.jsx)(D, {
          downloadURL: e ? a.url : void 0,
          downloadMimeType: e ? Q : void 0,
          onRemoveAttachment: d ? $ : void 0,
          isAttachmentMediaType: R
        })
      }
      return d && (0, n.jsx)(r.Clickable, {
        className: U ? N.spoilerRemoveAttachmentButton : N.removeAttachmentButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => u(a),
        "aria-label": T.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(E.default, {
          width: 16,
          height: 16
        })
      })
    }, [G, d, U, z, R, Y, a, Q, $, K, W, B, u, J]), en = l.useCallback(() => {
      var e;
      return (0, C.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, y.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
        text: T.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: N.clipPill,
        children: [(0, n.jsx)(p.default, {}), (0, n.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: T.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [a]);
    switch (z) {
      case "IMAGE":
        return (0, n.jsx)(M.GIFAccessoryContext.Consumer, {
          children: e => I({
            alt: X,
            src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
            original: a.url,
            placeholder: a.placeholder,
            placeholderVersion: a.placeholder_version,
            width: K,
            height: W,
            autoPlay: o && !P,
            onClick: h,
            onContextMenu: m,
            shouldHideMediaOptions: J,
            renderAccessory: e,
            renderAdjacentContent: ea,
            containerClassName: L,
            className: F,
            imageClassName: w,
            shouldLink: b,
            hiddenSpoilers: P,
            responsive: !0,
            mediaLayoutType: G,
            maxWidth: V,
            maxHeight: k,
            useFullWidth: B
          })
        });
      case "VIDEO":
        let el = new URL(a.proxy_url);
        return el.searchParams.append("format", "jpeg"), f({
          poster: el.toString(),
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          placeholder: a.placeholder,
          placeholderVersion: a.placeholder_version,
          width: K,
          height: W,
          onClick: h,
          onContextMenu: m,
          renderOverlayContent: en,
          renderAdjacentContent: ea,
          naturalWidth: K,
          naturalHeight: W,
          className: s(L, {
            [N.hasFooter]: H
          }),
          playable: b,
          responsive: !0,
          mediaLayoutType: G,
          maxWidth: V,
          maxHeight: k,
          useFullWidth: B,
          mimeType: Q,
          onPlay: g,
          downloadable: !J,
          mediaPlayerClassName: H ? N.hasFooter : void 0
        });
      case "AUDIO":
        return O({
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          className: L,
          playable: b,
          mimeType: Q,
          durationSecs: a.duration_secs,
          waveform: a.waveform,
          renderAdjacentContent: ea,
          onVolumeShow: () => q(!0),
          onVolumeHide: () => q(!1),
          onPlay: Z,
          onPause: ee,
          onError: et
        });
      case "PLAINTEXT_PREVIEW":
        return S({
          attachment: a,
          className: L,
          onClick: h,
          onContextMenu: m,
          renderAdjacentContent: ea
        });
      case "OTHER":
        return (0, n.jsx)(_.default, {
          url: a.url,
          filename: a.filename,
          size: a.size,
          onClick: h,
          onContextMenu: m,
          className: L,
          renderAdjacentContent: ea
        });
      case "INVALID":
        return null
    }
  };
var F = e => {
  var t;
  let {
    className: a,
    attachment: i,
    message: r,
    inlineMedia: c,
    useFullWidth: u,
    mediaLayoutType: m,
    canRemoveAttachment: A,
    isSingleMosaicItem: _,
    footer: g,
    ...M
  } = e, {
    width: p,
    height: E
  } = i, f = (0, d.useShouldRedactExplicitContent)(r.channel_id, r.author.id), C = (0, h.getObscureReason)(i, f), [y, T] = l.useState(null != C), O = m === v.MediaLayoutType.MOSAIC, D = !O && (null != p && p < 200 || null != E && E < 50), F = j(i, c);
  let w = "IMAGE" === (t = F) || "VIDEO" === t,
    b = S(j(i, c)),
    P = _ && null != C && (0, o.isExplicitMediaBelowConstraints)(p, E),
    G = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(L, {
        ...M,
        attachment: i,
        message: r,
        inlineMedia: c,
        hiddenSpoilers: e,
        canRemoveAttachment: A,
        className: s(a, N.attachmentContentItem, {
          [N.obscured]: y && !D,
          [N.hiddenSpoiler]: y && C === h.ObscureReason.SPOILER,
          [N.hiddenExplicit]: y && null != C && [h.ObscureReason.EXPLICIT_CONTENT, h.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(C),
          [N.hiddenAttachment]: y && e,
          [N.inline]: y && D
        }),
        focusable: !e,
        mediaLayoutType: m,
        hasFooter: null != g,
        useFullWidth: !!P || u,
        isAttachmentMediaType: b
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: s(N.messageAttachment, {
        [N.messageAttachmentNoJustify]: w,
        [N.messageAttachmentFullWidth]: u,
        [N.messageAttachmentMediaMosaic]: O,
        [N.hideOverflow]: O && b,
        [N.messageAttachmentWithFooter]: null != g
      }),
      children: [null != C ? (0, n.jsx)(I.default, {
        type: I.default.Types.ATTACHMENT,
        inline: D,
        reason: C,
        isSingleMosaicItem: _,
        obscured: y,
        containerStyles: function(e, t, a) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, x.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...a !== v.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(i, w, m),
        obscurityControlClassName: s({
          [N.obscureVideo]: "VIDEO" === F && _ && !y
        }),
        onToggleObscurity: () => T(e => !e),
        children: e => G(e)
      }) : G(), g]
    })
  })
}