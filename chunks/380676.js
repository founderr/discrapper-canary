"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return R
  }
}), n("222007"), n("506083");
var i = n("37983"),
  a = n("884691"),
  l = n("917351"),
  r = n("249654"),
  s = n("446674"),
  o = n("77078"),
  u = n("651693"),
  c = n("692038"),
  d = n("815297"),
  f = n("933629"),
  E = n("39331"),
  _ = n("596368"),
  h = n("227439"),
  S = n("697218"),
  p = n("170113"),
  m = n("780571"),
  A = n("377502"),
  I = n("103603"),
  g = n("736393"),
  C = n("170213"),
  v = n("49111"),
  T = n("719347"),
  N = n("782340"),
  y = n("386672");
let L = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, a, l;
      let r = {
        ...e,
        filename: (0, g.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, u.isImageFile)(e.filename) || (0, u.isVideoFile)(e.filename))) return r;
      return {
        ...r,
        width: null !== (a = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : C.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : C.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: v.MessageTypes.DEFAULT,
        channelId: v.EMPTY_STRING_CHANNEL_ID
      }),
      timestamp: new Date(r.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: v.MessageStates.SENT
    })
  },
  w = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let a = (e, t, n) => {
        let a = C.DEFAULT_MEDIA_MAX_WIDTH,
          r = C.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, I.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: C.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: C.DEFAULT_MEDIA_MAX_HEIGHT
          });
          a = (0, l.clamp)(Math.round(t.width * e), 0, C.DEFAULT_MEDIA_MAX_WIDTH), r = (0, l.clamp)(Math.round(t.height * e), 0, C.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? a : "100%",
            height: n ? r : "100%"
          },
          children: (0, i.jsx)(p.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? a : "100%",
            height: n ? r : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: p.default.Types.VIDEO,
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
      r = 1 === n.length;
    return (0, i.jsx)("div", {
      className: y.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(A.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: T.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: r,
          onRemoveAttachment: l.noop,
          renderVideoComponent: t => a(t, e, r),
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
  R = e => {
    var t;
    let {
      flaggedContent: n
    } = e, l = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), [r, c] = a.useState({}), [d, f] = a.useState(!0), p = n[0], A = L(p, r), I = (0, E.default)(A, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return (a.useEffect(() => {
      Promise.all(p.attachments.filter(e => {
        let {
          filename: t
        } = e;
        return (0, u.isImageFile)(t) || (0, u.isVideoFile)(t)
      }).map(e => {
        var t;
        return (t = e, new Promise((e, n) => {
          if ((0, u.isImageFile)(t.filename)) {
            let i = new Image;
            i.src = t.url, i.onload = () => {
              e(i)
            }, i.onerror = () => {
              n()
            }
          } else if ((0, u.isVideoFile)(t.filename)) {
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
    }, [p.attachments]), "" === A.content && 0 === A.attachments.length) ? null : (0, i.jsxs)("div", {
      className: y.classificationEvidenceContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), d ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)("div", {
        className: y.classificationEvidenceCard,
        children: (0, i.jsx)(m.default, {
          compact: !1,
          childrenHeader: (0, h.default)({
            author: {
              ...l,
              colorString: "",
              nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
            },
            message: A,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(w, {
            message: A
          }),
          childrenMessageContent: (0, _.default)({
            message: A
          }, I.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }