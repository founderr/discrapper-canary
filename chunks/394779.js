t.d(n, {
  s: function() {
return h;
  }
});
var i = t(735250),
  o = t(470079),
  a = t(120356),
  c = t.n(a),
  r = t(481060),
  l = t(346610),
  d = t(868643),
  s = t(912332),
  u = t(503349),
  _ = t(689938),
  f = t(691523);

function m() {
  (0, r.closeModal)(u.c);
}

function I(e) {
  let {
className: n,
channelId: t,
messageId: a,
target: l
  } = e, d = o.useCallback(() => {
if ('embed' === l.type) {
  (0, s.l8)({
    messageId: a,
    channelId: t,
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
  channelId: t,
  source: 'media-viewer',
  forwardOptions: {
    onlyAttachmentIds: [l.attachmentId]
  },
  onRequestSent: m
});
  }, [
t,
a,
l
  ]);
  return (0, i.jsx)(r.Clickable, {
className: c()(f.container, n),
onClick: d,
children: (0, i.jsx)(r.Text, {
  className: f.text,
  variant: 'text-sm/medium',
  color: 'always-white',
  children: _.Z.Messages.MESSAGE_ACTION_FORWARD
})
  });
}

function h(e, n) {
  let {
canForwardMessages: t
  } = (0, l.WT)({
location: 'ForwardLink'
  }, {
autoTrackExposure: !1
  });
  return t && (0, d.h)(e) ? t => {
let {
  className: o
} = t;
return (0, i.jsx)(I, {
  className: o,
  channelId: e.channel_id,
  messageId: e.id,
  target: n
});
  } : () => null;
}