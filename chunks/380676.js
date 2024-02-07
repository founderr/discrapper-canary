"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return y
  }
}), n("222007"), n("506083");
var i = n("37983"),
  r = n("884691"),
  l = n("917351"),
  a = n("249654"),
  s = n("446674"),
  o = n("77078"),
  u = n("651693"),
  c = n("692038"),
  d = n("815297"),
  f = n("933629"),
  E = n("39331"),
  _ = n("596368"),
  S = n("227439"),
  h = n("697218"),
  p = n("170113"),
  I = n("780571"),
  T = n("377502"),
  C = n("103603"),
  v = n("736393"),
  m = n("170213"),
  N = n("49111"),
  A = n("719347"),
  g = n("782340"),
  L = n("161730");
let R = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, r, l;
      let a = {
        ...e,
        filename: (0, v.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, u.isImageFile)(e.filename) || (0, u.isVideoFile)(e.filename))) return a;
      return {
        ...a,
        width: null !== (r = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== r ? r : m.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : m.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: N.MessageTypes.DEFAULT,
        channelId: ""
      }),
      timestamp: new Date(a.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: N.MessageStates.SENT
    })
  },
  U = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let r = (e, t, n) => {
        let r = m.DEFAULT_MEDIA_MAX_WIDTH,
          a = m.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, C.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: m.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: m.DEFAULT_MEDIA_MAX_HEIGHT
          });
          r = (0, l.clamp)(Math.round(t.width * e), 0, m.DEFAULT_MEDIA_MAX_WIDTH), a = (0, l.clamp)(Math.round(t.height * e), 0, m.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? r : "100%",
            height: n ? a : "100%"
          },
          children: (0, i.jsx)(p.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? r : "100%",
            height: n ? a : "100%",
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
      a = 1 === n.length;
    return (0, i.jsx)("div", {
      className: L.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(T.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: A.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: a,
          onRemoveAttachment: l.noop,
          renderVideoComponent: t => r(t, e, a),
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
  y = e => {
    var t;
    let {
      flaggedContent: n
    } = e, l = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), [a, c] = r.useState({}), [d, f] = r.useState(!0), p = n[0], T = R(p, a), C = (0, E.default)(T, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return (r.useEffect(() => {
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
    }, [p.attachments]), "" === T.content && 0 === T.attachments.length) ? null : (0, i.jsxs)("div", {
      className: L.classificationEvidenceContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), d ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)("div", {
        className: L.classificationEvidenceCard,
        children: (0, i.jsx)(I.default, {
          compact: !1,
          childrenHeader: (0, S.default)({
            author: {
              ...l,
              colorString: "",
              nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
            },
            message: T,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(U, {
            message: T
          }),
          childrenMessageContent: (0, _.default)({
            message: T
          }, C.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }