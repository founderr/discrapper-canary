"use strict";
n.r(t), n.d(t, {
  AudioComponentForMessageAttachment: function() {
    return S
  },
  GenericFileComponentForMessageAttachment: function() {
    return A
  },
  ImageComponentForMessageAttachment: function() {
    return h
  },
  MosaicItemFooterForMessageAttachment: function() {
    return M
  },
  PlaintextFilePreviewForMessageAttachment: function() {
    return g
  },
  VideoComponentForMessageAttachment: function() {
    return N
  },
  VoiceMessageAudioComponentForMessageAttachment: function() {
    return C
  }
}), n("789020");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("993365"),
  r = n("981729"),
  o = n("543651"),
  u = n("519320"),
  d = n("592125"),
  c = n("529653"),
  f = n("52824"),
  E = n("630388"),
  _ = n("591759"),
  m = n("524444"),
  T = n("981631"),
  I = n("689938"),
  p = n("978577");

function h(e) {
  let t = e.item.originalItem;
  return (0, m.renderImageComponent)({
    ...e,
    alt: t.description,
    src: (0, f.getBestEffortSrcUrl)({
      proxyURL: t.proxy_url,
      url: t.url
    }),
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version
  })
}

function N(e) {
  let t = e.item.originalItem,
    n = a.useCallback(() => {
      var e;
      return (0, E.hasFlag)(null !== (e = t.flags) && void 0 !== e ? e : 0, T.MessageAttachmentFlags.IS_CLIP) ? (0, s.jsxs)(r.TooltipContainer, {
        text: I.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: p.clipPill,
        children: [(0, s.jsx)(c.default, {}), (0, s.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: I.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [t]),
    l = _.default.toURLSafe(t.proxy_url);
  return null == l ? null : (l.searchParams.append("format", "jpeg"), (0, m.renderVideoComponent)({
    ...e,
    alt: t.description,
    poster: l.toString(),
    fileSize: t.size,
    fileName: t.filename,
    src: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version,
    renderOverlayContent: n
  }))
}

function S(e) {
  let t = e.item.originalItem;
  return (0, m.renderAudioComponent)({
    ...e,
    fileSize: t.size,
    fileName: t.filename,
    src: t.url
  })
}

function C(e) {
  let {
    message: t,
    item: n
  } = e, s = n.originalItem, l = a.useCallback((e, n, a) => {
    var l;
    (0, u.logVoiceMessagePlaybackStarted)(t.id, null !== (l = s.duration_secs) && void 0 !== l ? l : null, n, t.author.id)
  }, [t, s.duration_secs]), i = a.useCallback((e, n) => {
    var a;
    (0, u.logVoiceMessagePlaybackEnded)(t.id, null !== (a = s.duration_secs) && void 0 !== a ? a : null, e, t.author.id, n)
  }, [t, s.duration_secs]), r = a.useCallback(e => {
    var n;
    (0, u.logVoiceMessagePlaybackFailed)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null)
  }, [t]);
  return (0, m.renderVoiceMessageAudioComponent)({
    ...e,
    fileSize: s.size,
    fileName: s.filename,
    src: s.url,
    durationSecs: s.duration_secs,
    waveform: s.waveform,
    onPlay: l,
    onPause: i,
    onError: r
  })
}

function g(e) {
  let t = e.item.originalItem;
  return (0, m.renderPlaintextFilePreview)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size,
    contentType: t.content_type
  })
}

function A(e) {
  let t = e.item.originalItem;
  return (0, m.renderGenericFileComponent)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size
  })
}

function M(e) {
  if ("CLIP" === e.item.type) return (0, s.jsx)(v, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function v(e) {
  var t;
  let {
    attachment: n,
    message: a
  } = e, i = a.channel_id, r = (0, l.useStateFromStores)([d.default], () => {
    var e;
    return null === (e = d.default.getBasicChannel(i)) || void 0 === e ? void 0 : e.guild_id
  }), {
    clip_created_at: u,
    clip_participants: c,
    title: f,
    application: E
  } = n;
  return (0, s.jsx)(o.default, {
    createdAt: null != u ? Date.parse(u) : void 0,
    participantIds: null !== (t = null == c ? void 0 : c.map(e => {
      let {
        id: t
      } = e;
      return t
    })) && void 0 !== t ? t : [],
    applicationId: null == E ? void 0 : E.id,
    title: f,
    guildId: r
  })
}