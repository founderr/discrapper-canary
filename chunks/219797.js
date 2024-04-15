"use strict";
n.r(t), n.d(t, {
  AudioComponentForMessageAttachment: function() {
    return A
  },
  GenericFileComponentForMessageAttachment: function() {
    return y
  },
  ImageComponentForMessageAttachment: function() {
    return _
  },
  MosaicItemFooterForMessageAttachment: function() {
    return T
  },
  PlaintextFilePreviewForMessageAttachment: function() {
    return x
  },
  VideoComponentForMessageAttachment: function() {
    return C
  },
  VoiceMessageAudioComponentForMessageAttachment: function() {
    return E
  }
}), n("789020");
var i = n("735250"),
  l = n("470079"),
  a = n("442837"),
  o = n("993365"),
  s = n("981729"),
  r = n("543651"),
  u = n("519320"),
  d = n("592125"),
  c = n("529653"),
  m = n("52824"),
  h = n("630388"),
  I = n("591759"),
  f = n("524444"),
  M = n("981631"),
  p = n("689938"),
  g = n("722061");

function _(e) {
  let t = e.item.originalItem;
  return (0, f.renderImageComponent)({
    ...e,
    src: (0, m.getBestEffortSrcUrl)({
      proxyURL: t.proxy_url,
      url: t.url
    }),
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version
  })
}

function C(e) {
  let t = e.item.originalItem,
    n = l.useCallback(() => {
      var e;
      return (0, h.hasFlag)(null !== (e = t.flags) && void 0 !== e ? e : 0, M.MessageAttachmentFlags.IS_CLIP) ? (0, i.jsxs)(s.TooltipContainer, {
        text: p.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: g.clipPill,
        children: [(0, i.jsx)(c.default, {}), (0, i.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: p.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [t]),
    a = I.default.toURLSafe(t.proxy_url);
  return null == a ? null : (a.searchParams.append("format", "jpeg"), (0, f.renderVideoComponent)({
    ...e,
    poster: a.toString(),
    fileSize: t.size,
    fileName: t.filename,
    src: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version,
    renderOverlayContent: n
  }))
}

function A(e) {
  let t = e.item.originalItem;
  return (0, f.renderAudioComponent)({
    ...e,
    fileSize: t.size,
    fileName: t.filename,
    src: t.url
  })
}

function E(e) {
  let {
    message: t,
    item: n
  } = e, i = n.originalItem, a = l.useCallback((e, n, l) => {
    var a;
    (0, u.logVoiceMessagePlaybackStarted)(t.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, n, t.author.id)
  }, [t, i.duration_secs]), o = l.useCallback((e, n) => {
    var l;
    (0, u.logVoiceMessagePlaybackEnded)(t.id, null !== (l = i.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
  }, [t, i.duration_secs]), s = l.useCallback(e => {
    var n;
    (0, u.logVoiceMessagePlaybackFailed)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null)
  }, [t]);
  return (0, f.renderVoiceMessageAudioComponent)({
    ...e,
    fileSize: i.size,
    fileName: i.filename,
    src: i.url,
    onPlay: a,
    onPause: o,
    onError: s
  })
}

function x(e) {
  let t = e.item.originalItem;
  return (0, f.renderPlaintextFilePreview)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size,
    contentType: t.content_type
  })
}

function y(e) {
  let t = e.item.originalItem;
  return (0, f.renderGenericFileComponent)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size
  })
}

function T(e) {
  if ("CLIP" === e.item.type) return (0, i.jsx)(v, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function v(e) {
  var t;
  let {
    attachment: n,
    message: l
  } = e, o = l.channel_id, s = (0, a.useStateFromStores)([d.default], () => {
    var e;
    return null === (e = d.default.getBasicChannel(o)) || void 0 === e ? void 0 : e.guild_id
  }), {
    clip_created_at: u,
    clip_participants: c,
    title: m,
    application: h
  } = n;
  return (0, i.jsx)(r.default, {
    createdAt: null != u ? Date.parse(u) : void 0,
    participantIds: null !== (t = null == c ? void 0 : c.map(e => {
      let {
        id: t
      } = e;
      return t
    })) && void 0 !== t ? t : [],
    applicationId: null == h ? void 0 : h.id,
    title: m,
    guildId: s
  })
}