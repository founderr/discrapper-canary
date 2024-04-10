"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("47120"), a("773603");
var i = a("735250"),
  n = a("470079"),
  l = a("392711"),
  s = a("442837"),
  o = a("481060"),
  d = a("118139"),
  r = a("786761"),
  c = a("3148"),
  u = a("524444"),
  m = a("25015"),
  _ = a("963550"),
  A = a("845080"),
  f = a("594174"),
  h = a("715246"),
  E = a("998951"),
  I = a("310043"),
  T = a("956664"),
  g = a("709054"),
  p = a("788080"),
  x = a("800530"),
  S = a("981631"),
  C = a("768760"),
  v = a("479079");
let L = (e, t) => {
    let a = e.attachments.map(e => {
      var a, i, n, l;
      let s = {
        ...e,
        filename: (0, p.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, d.isImageFile)(e.filename) || (0, d.isVideoFile)(e.filename))) return s;
      return {
        ...s,
        width: null !== (n = null === (a = t[e.id]) || void 0 === a ? void 0 : a.width) && void 0 !== n ? n : x.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : x.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, r.createMessageRecord)({
      ...(0, c.default)({
        nonce: e.id,
        content: e.content,
        type: S.MessageTypes.DEFAULT,
        channelId: S.EMPTY_STRING_SNOWFLAKE_ID
      }),
      timestamp: new Date(g.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: S.MessageStates.SENT
    })
  },
  N = e => {
    let {
      message: t
    } = e, {
      attachments: a
    } = t;
    if (0 === a.length) return null;
    let n = (e, t, a) => {
        let n = x.DEFAULT_MEDIA_MAX_WIDTH,
          s = x.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, T.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: x.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: x.DEFAULT_MEDIA_MAX_HEIGHT
          });
          n = (0, l.clamp)(Math.round(t.width * e), 0, x.DEFAULT_MEDIA_MAX_WIDTH), s = (0, l.clamp)(Math.round(t.height * e), 0, x.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: a ? n : "100%",
            height: a ? s : "100%"
          },
          children: (0, i.jsx)(h.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: a ? n : "100%",
            height: a ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: h.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: u.renderMaskedLinkComponent,
            onClick: e.onClick,
            onPlay: e.onPlay,
            onEnded: e.onEnded,
            onVolumeChange: e.onVolumeChange,
            onMute: e.onMute,
            downloadable: !1
          })
        })
      },
      s = 1 === a.length;
    return (0, i.jsx)("div", {
      className: v.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(I.default, {
        attachments: a.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: C.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: s,
          onRemoveAttachment: l.noop,
          renderVideoComponent: t => n(t, e, s),
          renderImageComponent: e => (0, u.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: u.renderAudioComponent,
          renderPlaintextFilePreview: u.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function D(e) {
  var t;
  let {
    flaggedContent: a
  } = e, l = (0, s.useStateFromStores)([f.default], () => f.default.getCurrentUser()), [r, c] = n.useState({}), [u, h] = n.useState(!0), I = a[0], T = L(I, r), g = (0, m.default)(T, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (n.useEffect(() => {
    Promise.all(I.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, d.isImageFile)(t) || (0, d.isVideoFile)(t)
    }).map(e => {
      var t;
      return (t = e, new Promise((e, a) => {
        if ((0, d.isImageFile)(t.filename)) {
          let i = new Image;
          i.src = t.url, i.onload = () => {
            e(i)
          }, i.onerror = () => {
            a()
          }
        } else if ((0, d.isVideoFile)(t.filename)) {
          let i = document.createElement("video");
          i.src = t.url, i.onloadedmetadata = () => {
            let t = i.videoWidth;
            e({
              width: t,
              height: i.videoHeight
            })
          }, i.onerror = () => {
            a()
          }
        } else e({
          width: 0,
          height: 0
        })
      })).then(t => c(a => ({
        ...a,
        [e.id]: t
      })))
    })).finally(() => h(!1))
  }, [I.attachments]), "" === T.content && 0 === T.attachments.length) ? null : (0, i.jsx)("div", {
    className: v.classificationEvidenceCard,
    children: u ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(E.default, {
      compact: !1,
      childrenHeader: (0, A.default)({
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
      childrenAccessories: (0, i.jsx)(N, {
        message: T
      }),
      childrenMessageContent: (0, _.default)({
        message: T
      }, g.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}