"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return x
  }
}), n("222007"), n("506083");
var i = n("37983"),
  l = n("884691"),
  a = n("917351"),
  s = n("249654"),
  r = n("446674"),
  o = n("77078"),
  u = n("651693"),
  c = n("692038"),
  d = n("815297"),
  f = n("933629"),
  h = n("39331"),
  p = n("596368"),
  E = n("227439"),
  _ = n("697218"),
  C = n("170113"),
  S = n("780571"),
  I = n("377502"),
  g = n("103603"),
  A = n("736393"),
  v = n("170213"),
  m = n("49111"),
  T = n("719347"),
  y = n("782340"),
  w = n("161730");
let L = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, l, a;
      let s = {
        ...e,
        filename: (0, A.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, u.isImageFile)(e.filename) || (0, u.isVideoFile)(e.filename))) return s;
      return {
        ...s,
        width: null !== (l = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== l ? l : v.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (a = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== a ? a : v.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: m.MessageTypes.DEFAULT,
        channelId: ""
      }),
      timestamp: new Date(s.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: m.MessageStates.SENT
    })
  },
  N = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let l = (e, t, n) => {
        let l = v.DEFAULT_MEDIA_MAX_WIDTH,
          s = v.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, g.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: v.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: v.DEFAULT_MEDIA_MAX_HEIGHT
          });
          l = (0, a.clamp)(Math.round(t.width * e), 0, v.DEFAULT_MEDIA_MAX_WIDTH), s = (0, a.clamp)(Math.round(t.height * e), 0, v.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? l : "100%",
            height: n ? s : "100%"
          },
          children: (0, i.jsx)(C.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? l : "100%",
            height: n ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: C.default.Types.VIDEO,
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
      s = 1 === n.length;
    return (0, i.jsx)("div", {
      className: w.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(I.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: T.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: s,
          onRemoveAttachment: a.noop,
          renderVideoComponent: t => l(t, e, s),
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
  x = e => {
    var t;
    let {
      flaggedContent: n
    } = e, a = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), [s, c] = l.useState({}), [d, f] = l.useState(!0), C = n[0], I = L(C, s), g = (0, h.default)(I, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return (l.useEffect(() => {
      Promise.all(C.attachments.filter(e => {
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
    }, [C.attachments]), "" === I.content && 0 === I.attachments.length) ? null : (0, i.jsxs)("div", {
      className: w.classificationEvidenceContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: y.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), d ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)("div", {
        className: w.classificationEvidenceCard,
        children: (0, i.jsx)(S.default, {
          compact: !1,
          childrenHeader: (0, E.default)({
            author: {
              ...a,
              colorString: "",
              nick: null !== (t = null == a ? void 0 : a.username) && void 0 !== t ? t : ""
            },
            message: I,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(N, {
            message: I
          }),
          childrenMessageContent: (0, p.default)({
            message: I
          }, g.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }