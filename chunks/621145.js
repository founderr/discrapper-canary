n.d(i, {
  Z: function() {
    return D
  }
}), n(47120), n(773603);
var t = n(735250),
  a = n(470079),
  l = n(392711),
  s = n(442837),
  o = n(481060),
  r = n(640108),
  c = n(118139),
  d = n(169525),
  m = n(786761),
  u = n(3148),
  h = n(219797),
  _ = n(524444),
  A = n(25015),
  p = n(963550),
  x = n(845080),
  I = n(594174),
  E = n(998951),
  T = n(310043),
  g = n(69750),
  C = n(956664),
  f = n(709054),
  S = n(788080),
  v = n(800530),
  N = n(981631),
  L = n(768760),
  j = n(554958);
let y = (e, i) => {
    let n = e.attachments.map(e => {
      var n, t, a, l;
      let s = {
        ...e,
        filename: (0, S.eS)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return s;
      return {
        ...s,
        width: null !== (a = null === (n = i[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : v.Sv,
        height: null !== (l = null === (t = i[e.id]) || void 0 === t ? void 0 : t.height) && void 0 !== l ? l : v.EY
      }
    });
    return (0, m.e5)({
      ...(0, u.ZP)({
        nonce: e.id,
        content: e.content,
        type: N.uaV.DEFAULT,
        channelId: N.lds
      }),
      timestamp: new Date(f.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: N.yb.SENT
    })
  },
  O = e => {
    let {
      message: i
    } = e, {
      attachments: n
    } = i;
    if (0 === n.length) return null;
    let a = (e, i, n) => {
        let a = v.Sv,
          s = v.EY;
        if (null != i.width && null != i.height) {
          let e = (0, C.Dc)({
            width: i.width,
            height: i.height,
            maxWidth: v.Sv,
            maxHeight: v.EY
          });
          a = (0, l.clamp)(Math.round(i.width * e), 0, v.Sv), s = (0, l.clamp)(Math.round(i.height * e), 0, v.EY)
        }
        return (0, t.jsx)("div", {
          style: {
            width: n ? a : "100%",
            height: n ? s : "100%"
          },
          children: (0, t.jsx)(r.ZP, {
            className: e.className,
            forceExternal: !1,
            src: i.url,
            width: n ? a : "100%",
            height: n ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: r.ZP.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: i.filename,
            fileSize: null == i.size ? void 0 : i.size.toString(),
            playable: !0,
            renderLinkComponent: _.iT,
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

    function o(e, i) {
      return (0, d.dn)(e.originalItem, i)
    }
    return (0, t.jsx)("div", {
      className: j.classificationEvidenceMessageAttachment,
      children: (0, t.jsx)(T.Z, {
        items: n.map(e => ({
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, g.aw)(e, !0),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type
          },
          message: i,
          mediaLayoutType: L.hV.MOSAIC,
          autoPlayGif: !1,
          canRemoveItem: !1,
          isSingleMosaicItem: s,
          onRemoveItem: l.noop,
          renderVideoComponent: i => a(i, e, s),
          renderImageComponent: e => (0, t.jsx)(h.dS, {
            ...e,
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1
          }),
          renderAudioComponent: h.q7,
          renderPlaintextFilePreview: h.d4,
          renderGenericFileComponent: h.ZK,
          renderMosaicItemFooter: h.L9,
          getObscureReason: o,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function D(e) {
  var i;
  let {
    flaggedContent: n
  } = e, l = (0, s.e7)([I.default], () => I.default.getCurrentUser()), [r, d] = a.useState({}), [m, u] = a.useState(!0), h = n[0], _ = y(h, r), T = (0, A.Z)(_, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (a.useEffect(() => {
    Promise.all(h.attachments.filter(e => {
      let {
        filename: i
      } = e;
      return (0, c.CO)(i) || (0, c.NU)(i)
    }).map(e => {
      var i;
      return (i = e, new Promise((e, n) => {
        if ((0, c.CO)(i.filename)) {
          let t = new Image;
          t.src = i.url, t.onload = () => {
            e(t)
          }, t.onerror = () => {
            n()
          }
        } else if ((0, c.NU)(i.filename)) {
          let t = document.createElement("video");
          t.src = i.url, t.onloadedmetadata = () => {
            let i = t.videoWidth;
            e({
              width: i,
              height: t.videoHeight
            })
          }, t.onerror = () => {
            n()
          }
        } else e({
          width: 0,
          height: 0
        })
      })).then(i => d(n => ({
        ...n,
        [e.id]: i
      })))
    })).finally(() => u(!1))
  }, [h.attachments]), "" === _.content && 0 === _.attachments.length) ? null : (0, t.jsx)("div", {
    className: j.classificationEvidenceCard,
    children: m ? (0, t.jsx)(o.Spinner, {}) : (0, t.jsx)(E.Z, {
      compact: !1,
      childrenHeader: (0, x.Z)({
        author: {
          ...l,
          colorString: "",
          nick: null !== (i = null == l ? void 0 : l.username) && void 0 !== i ? i : ""
        },
        message: _,
        channel: void 0,
        guildId: void 0,
        compact: !1,
        animateAvatar: !1,
        isGroupStart: !0,
        roleIcon: void 0,
        hideTimestamp: !1
      }),
      childrenAccessories: (0, t.jsx)(O, {
        message: _
      }),
      childrenMessageContent: (0, p.Z)({
        message: _
      }, T.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}