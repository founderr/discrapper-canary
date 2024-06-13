"use strict";
n.r(t), n.d(t, {
  AudioComponentForMessageAttachment: function() {
    return I
  },
  GenericFileComponentForMessageAttachment: function() {
    return P
  },
  ImageComponentForMessageAttachment: function() {
    return h
  },
  MosaicItemFooterForMessageAttachment: function() {
    return F
  },
  PlaintextFilePreviewForMessageAttachment: function() {
    return M
  },
  VideoComponentForMessageAttachment: function() {
    return v
  },
  VoiceMessageAudioComponentForMessageAttachment: function() {
    return S
  }
}), n("789020");
var r = n("735250"),
  i = n("470079"),
  l = n("442837"),
  a = n("993365"),
  o = n("981729"),
  u = n("543651"),
  s = n("519320"),
  c = n("592125"),
  d = n("529653"),
  f = n("52824"),
  m = n("630388"),
  _ = n("591759"),
  g = n("850908"),
  p = n("524444"),
  C = n("981631"),
  E = n("689938"),
  A = n("978577");

function h(e) {
  let t = e.item.originalItem;
  return (0, p.renderImageComponent)({
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

function v(e) {
  let t = e.item.originalItem,
    n = i.useCallback(() => {
      var e;
      return (0, m.hasFlag)(null !== (e = t.flags) && void 0 !== e ? e : 0, C.MessageAttachmentFlags.IS_CLIP) ? (0, r.jsxs)(o.TooltipContainer, {
        text: E.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: A.clipPill,
        children: [(0, r.jsx)(d.default, {}), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: E.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [t]),
    l = _.default.toURLSafe(t.proxy_url);
  return null == l ? null : (l.searchParams.append("format", "jpeg"), (0, p.renderVideoComponent)({
    ...e,
    alt: t.description,
    poster: l.toString(),
    fileSize: t.size,
    fileName: (0, g.default)(t),
    src: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version,
    renderOverlayContent: n
  }))
}

function I(e) {
  let t = e.item.originalItem;
  return (0, p.renderAudioComponent)({
    ...e,
    fileSize: t.size,
    fileName: (0, g.default)(t),
    src: t.url
  })
}

function S(e) {
  let {
    message: t,
    item: n
  } = e, r = n.originalItem, l = i.useCallback((e, n, i) => {
    var l;
    (0, s.logVoiceMessagePlaybackStarted)(t.id, null !== (l = r.duration_secs) && void 0 !== l ? l : null, n, t.author.id)
  }, [t, r.duration_secs]), a = i.useCallback((e, n) => {
    var i;
    (0, s.logVoiceMessagePlaybackEnded)(t.id, null !== (i = r.duration_secs) && void 0 !== i ? i : null, e, t.author.id, n)
  }, [t, r.duration_secs]), o = i.useCallback(e => {
    var n;
    (0, s.logVoiceMessagePlaybackFailed)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null)
  }, [t]);
  return (0, p.renderVoiceMessageAudioComponent)({
    ...e,
    fileSize: r.size,
    fileName: (0, g.default)(r),
    src: r.url,
    durationSecs: r.duration_secs,
    waveform: r.waveform,
    onPlay: l,
    onPause: a,
    onError: o
  })
}

function M(e) {
  let t = e.item.originalItem;
  return (0, p.renderPlaintextFilePreview)({
    ...e,
    url: t.url,
    fileName: (0, g.default)(t),
    fileSize: t.size,
    contentType: t.content_type
  })
}

function P(e) {
  let t = e.item.originalItem;
  return (0, p.renderGenericFileComponent)({
    ...e,
    url: t.url,
    fileName: (0, g.default)(t),
    fileSize: t.size
  })
}

function F(e) {
  if ("CLIP" === e.item.type) return (0, r.jsx)(x, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function x(e) {
  var t;
  let {
    attachment: n,
    message: i
  } = e, a = i.channel_id, o = (0, l.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id
  }), {
    clip_created_at: s,
    clip_participants: d,
    title: f,
    application: m
  } = n;
  return (0, r.jsx)(u.default, {
    createdAt: null != s ? Date.parse(s) : void 0,
    participantIds: null !== (t = null == d ? void 0 : d.map(e => {
      let {
        id: t
      } = e;
      return t
    })) && void 0 !== t ? t : [],
    applicationId: null == m ? void 0 : m.id,
    title: f,
    guildId: o
  })
}