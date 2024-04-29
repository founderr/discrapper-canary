"use strict";
a.r(t), a.d(t, {
  default: function() {
    return F
  }
}), a("47120"), a("773603");
var i = a("735250"),
  n = a("470079"),
  l = a("392711"),
  s = a("442837"),
  o = a("481060"),
  r = a("118139"),
  c = a("169525"),
  d = a("786761"),
  u = a("3148"),
  m = a("219797"),
  _ = a("524444"),
  A = a("25015"),
  f = a("963550"),
  h = a("845080"),
  E = a("594174"),
  I = a("715246"),
  T = a("998951"),
  g = a("310043"),
  p = a("69750"),
  x = a("956664"),
  S = a("709054"),
  C = a("788080"),
  v = a("800530"),
  L = a("981631"),
  N = a("768760"),
  D = a("879429");
let M = (e, t) => {
    let a = e.attachments.map(e => {
      var a, i, n, l;
      let s = {
        ...e,
        filename: (0, C.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, r.isImageFile)(e.filename) || (0, r.isVideoFile)(e.filename))) return s;
      return {
        ...s,
        width: null !== (n = null === (a = t[e.id]) || void 0 === a ? void 0 : a.width) && void 0 !== n ? n : v.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== l ? l : v.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, d.createMessageRecord)({
      ...(0, u.default)({
        nonce: e.id,
        content: e.content,
        type: L.MessageTypes.DEFAULT,
        channelId: L.EMPTY_STRING_SNOWFLAKE_ID
      }),
      timestamp: new Date(S.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: L.MessageStates.SENT
    })
  },
  y = e => {
    let {
      message: t
    } = e, {
      attachments: a
    } = t;
    if (0 === a.length) return null;
    let n = (e, t, a) => {
        let n = v.DEFAULT_MEDIA_MAX_WIDTH,
          s = v.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, x.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: v.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: v.DEFAULT_MEDIA_MAX_HEIGHT
          });
          n = (0, l.clamp)(Math.round(t.width * e), 0, v.DEFAULT_MEDIA_MAX_WIDTH), s = (0, l.clamp)(Math.round(t.height * e), 0, v.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: a ? n : "100%",
            height: a ? s : "100%"
          },
          children: (0, i.jsx)(I.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: a ? n : "100%",
            height: a ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: I.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: _.renderMaskedLinkComponent,
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

    function o(e, t) {
      return (0, c.getObscureReasonForAttachment)(e.originalItem, t)
    }
    return (0, i.jsx)("div", {
      className: D.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(g.default, {
        items: a.map(e => ({
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, p.getMosaicMediaTypeForAttachment)(e, !0),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type
          },
          message: t,
          mediaLayoutType: N.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          canRemoveItem: !1,
          isSingleMosaicItem: s,
          onRemoveItem: l.noop,
          renderVideoComponent: t => n(t, e, s),
          renderImageComponent: e => (0, i.jsx)(m.ImageComponentForMessageAttachment, {
            ...e,
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1
          }),
          renderAudioComponent: m.AudioComponentForMessageAttachment,
          renderPlaintextFilePreview: m.PlaintextFilePreviewForMessageAttachment,
          renderGenericFileComponent: m.GenericFileComponentForMessageAttachment,
          renderMosaicItemFooter: m.MosaicItemFooterForMessageAttachment,
          getObscureReason: o,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function F(e) {
  var t;
  let {
    flaggedContent: a
  } = e, l = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), [c, d] = n.useState({}), [u, m] = n.useState(!0), _ = a[0], I = M(_, c), g = (0, A.default)(I, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (n.useEffect(() => {
    Promise.all(_.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, r.isImageFile)(t) || (0, r.isVideoFile)(t)
    }).map(e => {
      var t;
      return (t = e, new Promise((e, a) => {
        if ((0, r.isImageFile)(t.filename)) {
          let i = new Image;
          i.src = t.url, i.onload = () => {
            e(i)
          }, i.onerror = () => {
            a()
          }
        } else if ((0, r.isVideoFile)(t.filename)) {
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
      })).then(t => d(a => ({
        ...a,
        [e.id]: t
      })))
    })).finally(() => m(!1))
  }, [_.attachments]), "" === I.content && 0 === I.attachments.length) ? null : (0, i.jsx)("div", {
    className: D.classificationEvidenceCard,
    children: u ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(T.default, {
      compact: !1,
      childrenHeader: (0, h.default)({
        author: {
          ...l,
          colorString: "",
          nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
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
      childrenAccessories: (0, i.jsx)(y, {
        message: I
      }),
      childrenMessageContent: (0, f.default)({
        message: I
      }, g.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}