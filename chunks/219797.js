t.d(n, {
  L9: function() {
    return x
  },
  ZK: function() {
    return D
  },
  d4: function() {
    return N
  },
  dS: function() {
    return g
  },
  jY: function() {
    return L
  },
  q7: function() {
    return A
  },
  vZ: function() {
    return v
  }
}), t(789020);
var i = t(735250),
  r = t(470079),
  l = t(442837),
  a = t(993365),
  u = t(981729),
  o = t(481060),
  c = t(543651),
  s = t(394779),
  d = t(519320),
  _ = t(592125),
  f = t(52824),
  m = t(630388),
  E = t(591759),
  S = t(850908),
  h = t(524444),
  p = t(981631),
  I = t(689938),
  C = t(559266);

function g(e) {
  let n = e.item.originalItem;
  return (0, h.Yi)({
    ...e,
    alt: n.description,
    src: (0, f.q)({
      proxyURL: n.proxy_url,
      url: n.url
    }),
    original: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    renderForwardComponent: (0, s.s)(e.message, {
      type: "attachment",
      attachmentId: n.id
    })
  })
}

function v(e) {
  let n = e.item.originalItem,
    t = r.useCallback(() => {
      var e;
      return (0, m.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, p.J0y.IS_CLIP) ? (0, i.jsxs)(u.DY, {
        text: I.Z.Messages.CLIPS_BETA_TAG_HOVER,
        className: C.clipPill,
        children: [(0, i.jsx)(o.ClipsIcon, {
          size: "xs",
          color: "currentColor"
        }), (0, i.jsx)(a.x, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: I.Z.Messages.CLIP_TAG
        })]
      }) : null
    }, [n]),
    l = E.Z.toURLSafe(n.proxy_url);
  return null == l ? null : (l.searchParams.append("format", "jpeg"), (0, h.lV)({
    ...e,
    alt: n.description,
    poster: l.toString(),
    fileSize: n.size,
    fileName: (0, S.Z)(n),
    src: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    renderOverlayContent: t,
    renderForwardComponent: (0, s.s)(e.message, {
      type: "attachment",
      attachmentId: n.id
    })
  }))
}

function A(e) {
  let n = e.item.originalItem;
  return (0, h.hX)({
    ...e,
    fileSize: n.size,
    fileName: (0, S.Z)(n),
    src: n.url
  })
}

function L(e) {
  let {
    message: n,
    item: t
  } = e, i = t.originalItem, l = r.useCallback((e, t, r) => {
    var l;
    (0, d.tb)(n.id, null !== (l = i.duration_secs) && void 0 !== l ? l : null, t, n.author.id)
  }, [n, i.duration_secs]), a = r.useCallback((e, t) => {
    var r;
    (0, d.EW)(n.id, null !== (r = i.duration_secs) && void 0 !== r ? r : null, e, n.author.id, t)
  }, [n, i.duration_secs]), u = r.useCallback(e => {
    var t;
    (0, d.Np)(n.id, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : null)
  }, [n]);
  return (0, h.wj)({
    ...e,
    fileSize: i.size,
    fileName: (0, S.Z)(i),
    src: i.url,
    durationSecs: i.duration_secs,
    waveform: i.waveform,
    onPlay: l,
    onPause: a,
    onError: u
  })
}

function N(e) {
  let n = e.item.originalItem;
  return (0, h.xi)({
    ...e,
    url: n.url,
    fileName: (0, S.Z)(n),
    fileSize: n.size,
    contentType: n.content_type
  })
}

function D(e) {
  let n = e.item.originalItem;
  return (0, h.ur)({
    ...e,
    url: n.url,
    fileName: (0, S.Z)(n),
    fileSize: n.size
  })
}

function x(e) {
  if ("CLIP" === e.item.type) return (0, i.jsx)(y, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function y(e) {
  var n;
  let {
    attachment: t,
    message: r
  } = e, a = r.channel_id, u = (0, l.e7)([_.Z], () => {
    var e;
    return null === (e = _.Z.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id
  }), {
    clip_created_at: o,
    clip_participants: s,
    title: d,
    application: f
  } = t;
  return (0, i.jsx)(c.Z, {
    createdAt: null != o ? Date.parse(o) : void 0,
    participantIds: null !== (n = null == s ? void 0 : s.map(e => {
      let {
        id: n
      } = e;
      return n
    })) && void 0 !== n ? n : [],
    applicationId: null == f ? void 0 : f.id,
    title: d,
    guildId: u
  })
}