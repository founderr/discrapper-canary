"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return R
  }
}), n("222007"), n("506083");
var i = n("37983"),
  a = n("884691"),
  r = n("917351"),
  l = n("249654"),
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
  A = n("780571"),
  m = n("377502"),
  C = n("103603"),
  v = n("736393"),
  g = n("170213"),
  I = n("49111"),
  T = n("719347"),
  N = n("782340"),
  L = n("386672");
let y = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, a, r;
      let l = {
        ...e,
        filename: (0, v.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, u.isImageFile)(e.filename) || (0, u.isVideoFile)(e.filename))) return l;
      return {
        ...l,
        width: null !== (a = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : g.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (r = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== r ? r : g.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: I.MessageTypes.DEFAULT,
        channelId: I.EMPTY_STRING_CHANNEL_ID
      }),
      timestamp: new Date(l.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: I.MessageStates.SENT
    })
  },
  P = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let a = (e, t, n) => {
        let a = g.DEFAULT_MEDIA_MAX_WIDTH,
          l = g.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, C.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: g.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: g.DEFAULT_MEDIA_MAX_HEIGHT
          });
          a = (0, r.clamp)(Math.round(t.width * e), 0, g.DEFAULT_MEDIA_MAX_WIDTH), l = (0, r.clamp)(Math.round(t.height * e), 0, g.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? a : "100%",
            height: n ? l : "100%"
          },
          children: (0, i.jsx)(p.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? a : "100%",
            height: n ? l : "100%",
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
      l = 1 === n.length;
    return (0, i.jsx)("div", {
      className: L.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(m.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: T.MediaLayoutType.MOSAIC,
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
  R = e => {
    var t;
    let {
      flaggedContent: n
    } = e, r = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), [l, c] = a.useState({}), [d, f] = a.useState(!0), p = n[0], m = y(p, l), C = (0, E.default)(m, {
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
    }, [p.attachments]), "" === m.content && 0 === m.attachments.length) ? null : (0, i.jsxs)("div", {
      className: L.classificationEvidenceContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), d ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)("div", {
        className: L.classificationEvidenceCard,
        children: (0, i.jsx)(A.default, {
          compact: !1,
          childrenHeader: (0, h.default)({
            author: {
              ...r,
              colorString: "",
              nick: null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : ""
            },
            message: m,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(P, {
            message: m
          }),
          childrenMessageContent: (0, _.default)({
            message: m
          }, C.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }