"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007"), n("506083");
var i = n("37983"),
  a = n("884691"),
  l = n("917351"),
  r = n("446674"),
  s = n("77078"),
  o = n("651693"),
  u = n("692038"),
  c = n("815297"),
  d = n("933629"),
  f = n("39331"),
  E = n("596368"),
  _ = n("227439"),
  h = n("697218"),
  S = n("170113"),
  p = n("780571"),
  m = n("377502"),
  A = n("103603"),
  g = n("299039"),
  I = n("736393"),
  C = n("170213"),
  v = n("49111"),
  T = n("719347"),
  N = n("543069");
let y = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, a, l;
      let r = {
        ...e,
        filename: (0, I.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, o.isImageFile)(e.filename) || (0, o.isVideoFile)(e.filename))) return r;
      return {
        ...r,
        width: null !== (a = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : C.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : C.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, u.createMessageRecord)({
      ...(0, c.default)({
        nonce: e.id,
        content: e.content,
        type: v.MessageTypes.DEFAULT,
        channelId: v.EMPTY_STRING_CHANNEL_ID
      }),
      timestamp: new Date(g.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: v.MessageStates.SENT
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
          r = C.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, A.getRatio)({
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
          children: (0, i.jsx)(S.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? a : "100%",
            height: n ? r : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: S.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: d.renderMaskedLinkComponent,
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
      className: N.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(m.default, {
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
          renderImageComponent: e => (0, d.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: d.renderAudioComponent,
          renderPlaintextFilePreview: d.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function w(e) {
  var t;
  let {
    flaggedContent: n
  } = e, l = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), [u, c] = a.useState({}), [d, S] = a.useState(!0), m = n[0], A = y(m, u), g = (0, f.default)(A, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (a.useEffect(() => {
    Promise.all(m.attachments.filter(e => {
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
    })).finally(() => S(!1))
  }, [m.attachments]), "" === A.content && 0 === A.attachments.length) ? null : (0, i.jsx)("div", {
    className: N.classificationEvidenceCard,
    children: d ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(p.default, {
      compact: !1,
      childrenHeader: (0, _.default)({
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
      childrenAccessories: (0, i.jsx)(L, {
        message: A
      }),
      childrenMessageContent: (0, E.default)({
        message: A
      }, g.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}