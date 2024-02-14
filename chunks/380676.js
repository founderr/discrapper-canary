"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return P
  }
}), n("222007"), n("506083");
var i = n("37983"),
  a = n("884691"),
  r = n("917351"),
  l = n("249654"),
  s = n("446674"),
  u = n("77078"),
  o = n("651693"),
  c = n("692038"),
  d = n("815297"),
  f = n("933629"),
  E = n("39331"),
  _ = n("596368"),
  S = n("227439"),
  T = n("697218"),
  I = n("170113"),
  p = n("780571"),
  h = n("377502"),
  A = n("103603"),
  N = n("736393"),
  C = n("170213"),
  m = n("49111"),
  g = n("719347"),
  v = n("782340"),
  R = n("386672");
let U = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, a, r;
      let l = {
        ...e,
        filename: (0, N.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, o.isImageFile)(e.filename) || (0, o.isVideoFile)(e.filename))) return l;
      return {
        ...l,
        width: null !== (a = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : C.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (r = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== r ? r : C.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: m.MessageTypes.DEFAULT,
        channelId: ""
      }),
      timestamp: new Date(l.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: m.MessageStates.SENT
    })
  },
  L = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let a = (e, t, n) => {
        let a = C.DEFAULT_MEDIA_MAX_WIDTH,
          l = C.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, A.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: C.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: C.DEFAULT_MEDIA_MAX_HEIGHT
          });
          a = (0, r.clamp)(Math.round(t.width * e), 0, C.DEFAULT_MEDIA_MAX_WIDTH), l = (0, r.clamp)(Math.round(t.height * e), 0, C.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? a : "100%",
            height: n ? l : "100%"
          },
          children: (0, i.jsx)(I.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? a : "100%",
            height: n ? l : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: I.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: f.renderMaskedLinkComponent,
            onClick: e.onClick,
            onPlay: e.onPlay,
            onEnded: e.onEnded,
            onVolumeChange: e.onVolumeChange,
            onMute: e.onMute,
            downloadable: !1
          })
        })
      },
      l = 1 === n.length;
    return (0, i.jsx)("div", {
      className: R.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(h.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: g.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: l,
          onRemoveAttachment: r.noop,
          renderVideoComponent: t => a(t, e, l),
          renderImageComponent: e => (0, f.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: f.renderAudioComponent,
          renderPlaintextFilePreview: f.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  },
  P = e => {
    var t;
    let {
      flaggedContent: n
    } = e, r = (0, s.useStateFromStores)([T.default], () => T.default.getCurrentUser()), [l, c] = a.useState({}), [d, f] = a.useState(!0), I = n[0], h = U(I, l), A = (0, E.default)(h, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return (a.useEffect(() => {
      Promise.all(I.attachments.filter(e => {
        let {
          filename: t
        } = e;
        return (0, o.isImageFile)(t) || (0, o.isVideoFile)(t)
      }).map(e => {
        var t;
        return (t = e, new Promise((e, n) => {
          if ((0, o.isImageFile)(t.filename)) {
            let i = new Image;
            i.src = t.url, i.onload = () => {
              e(i)
            }, i.onerror = () => {
              n()
            }
          } else if ((0, o.isVideoFile)(t.filename)) {
            let i = document.createElement("video");
            i.src = t.url, i.onloadedmetadata = () => {
              let t = i.videoWidth,
                n = i.videoHeight;
              e({
                width: t,
                height: n
              })
            }, i.onerror = () => {
              n()
            }
          } else e({
            width: 0,
            height: 0
          })
        })).then(t => c(n => ({
          ...n,
          [e.id]: t
        })))
      })).finally(() => f(!1))
    }, [I.attachments]), "" === h.content && 0 === h.attachments.length) ? null : (0, i.jsxs)("div", {
      className: R.classificationEvidenceContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), d ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)("div", {
        className: R.classificationEvidenceCard,
        children: (0, i.jsx)(p.default, {
          compact: !1,
          childrenHeader: (0, S.default)({
            author: {
              ...r,
              colorString: "",
              nick: null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : ""
            },
            message: h,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(L, {
            message: h
          }),
          childrenMessageContent: (0, _.default)({
            message: h
          }, A.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }