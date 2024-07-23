i.d(n, {
  s: function() {
return h;
  }
});
var t = i(735250),
  o = i(470079),
  a = i(120356),
  c = i.n(a),
  r = i(481060),
  l = i(346610),
  d = i(868643),
  s = i(912332),
  u = i(503349),
  _ = i(689938),
  f = i(903783);

function m() {
  (0, r.closeModal)(u.c);
}

function I(e) {
  let {
className: n,
channelId: i,
messageId: a,
target: l
  } = e, d = o.useCallback(() => {
if ('embed' === l.type) {
  (0, s.l8)({
    messageId: a,
    channelId: i,
    source: 'media-viewer',
    forwardOptions: {
      onlyEmbedIndices: [l.embedIndex]
    },
    onRequestSent: m
  });
  return;
}
(0, s.l8)({
  messageId: a,
  channelId: i,
  source: 'media-viewer',
  forwardOptions: {
    onlyAttachmentIds: [l.attachmentId]
  },
  onRequestSent: m
});
  }, [
i,
a,
l
  ]);
  return (0, t.jsx)(r.Clickable, {
className: c()(f.container, n),
onClick: d,
children: (0, t.jsx)(r.Text, {
  className: f.text,
  variant: 'text-sm/medium',
  color: 'always-white',
  children: _.Z.Messages.MESSAGE_ACTION_FORWARD
})
  });
}

function h(e, n) {
  let {
canForwardMessages: i
  } = l.w.getCurrentConfig({
location: 'ForwardLink'
  }, {
autoTrackExposure: !1
  });
  return i && (0, d.h)(e) ? i => {
let {
  className: o
} = i;
return (0, t.jsx)(I, {
  className: o,
  channelId: e.channel_id,
  messageId: e.id,
  target: n
});
  } : () => null;
}