t.d(n, {
  s: function() {
    return S
  }
});
var i = t(735250),
  r = t(470079),
  l = t(120356),
  a = t.n(l),
  u = t(481060),
  o = t(346610),
  c = t(868643),
  s = t(912332),
  d = t(503349),
  _ = t(689938),
  f = t(789447);

function m() {
  (0, u.closeModal)(d.c)
}

function E(e) {
  let {
    className: n,
    channelId: t,
    messageId: l,
    target: o
  } = e, c = r.useCallback(() => {
    if ("embed" === o.type) {
      (0, s.l8)({
        messageId: l,
        channelId: t,
        source: "media-viewer",
        forwardOptions: {
          onlyEmbedIndices: [o.embedIndex]
        },
        onRequestSent: m
      });
      return
    }(0, s.l8)({
      messageId: l,
      channelId: t,
      source: "media-viewer",
      forwardOptions: {
        onlyAttachmentIds: [o.attachmentId]
      },
      onRequestSent: m
    })
  }, [t, l, o]);
  return (0, i.jsx)(u.Clickable, {
    className: a()(f.container, n),
    onClick: c,
    children: (0, i.jsx)(u.Text, {
      className: f.text,
      variant: "text-sm/medium",
      color: "always-white",
      children: _.Z.Messages.MESSAGE_ACTION_FORWARD
    })
  })
}

function S(e, n) {
  let {
    canForwardMessages: t
  } = o.w.getCurrentConfig({
    location: "ForwardLink"
  }, {
    autoTrackExposure: !1
  });
  return t && (0, c.h)(e) ? t => {
    let {
      className: r
    } = t;
    return (0, i.jsx)(E, {
      className: r,
      channelId: e.channel_id,
      messageId: e.id,
      target: n
    })
  } : () => null
}