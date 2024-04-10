"use strict";
n.r(t), n.d(t, {
  AudioComponentForMessageAttachment: function() {
    return C
  },
  GenericFileComponentForMessageAttachment: function() {
    return x
  },
  ImageComponentForMessageAttachment: function() {
    return g
  },
  MosaicItemFooterForMessageAttachment: function() {
    return y
  },
  PlaintextFilePreviewForMessageAttachment: function() {
    return E
  },
  VideoComponentForMessageAttachment: function() {
    return _
  },
  VoiceMessageAudioComponentForMessageAttachment: function() {
    return A
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
  m = n("630388"),
  h = n("591759"),
  I = n("524444"),
  f = n("981631"),
  p = n("689938"),
  M = n("722061");

function g(e) {
  let t = e.item.originalItem;
  return (0, I.renderImageComponent)({
    ...e,
    src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version
  })
}

function _(e) {
  let t = e.item.originalItem,
    n = l.useCallback(() => {
      var e;
      return (0, m.hasFlag)(null !== (e = t.flags) && void 0 !== e ? e : 0, f.MessageAttachmentFlags.IS_CLIP) ? (0, i.jsxs)(s.TooltipContainer, {
        text: p.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: M.clipPill,
        children: [(0, i.jsx)(c.default, {}), (0, i.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: p.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [t]),
    a = h.default.toURLSafe(t.proxy_url);
  return null == a ? null : (a.searchParams.append("format", "jpeg"), (0, I.renderVideoComponent)({
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

function C(e) {
  let t = e.item.originalItem;
  return (0, I.renderAudioComponent)({
    ...e,
    fileSize: t.size,
    fileName: t.filename,
    src: t.url
  })
}

function A(e) {
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
  return (0, I.renderVoiceMessageAudioComponent)({
    ...e,
    fileSize: i.size,
    fileName: i.filename,
    src: i.url,
    onPlay: a,
    onPause: o,
    onError: s
  })
}

function E(e) {
  let t = e.item.originalItem;
  return (0, I.renderPlaintextFilePreview)({
    ...e,
    url: t.proxy_url,
    fileName: t.filename,
    fileSize: t.size,
    contentType: t.content_type
  })
}

function x(e) {
  let t = e.item.originalItem;
  return (0, I.renderGenericFileComponent)({
    ...e,
    url: t.proxy_url,
    fileName: t.filename,
    fileSize: t.size
  })
}

function y(e) {
  if ("CLIP" === e.item.type) return (0, i.jsx)(T, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function T(e) {
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