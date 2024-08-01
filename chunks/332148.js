var i = n(544891),
  s = n(570140),
  a = n(346479),
  r = n(624453),
  l = n(668781),
  o = n(981631),
  c = n(689938);
let u = {
  async pinMessage(e, t) {
let {
  id: n,
  name: s
} = e;
await a.Z.unarchiveThreadIfNecessary(e.id), i.tn.put({
  url: o.ANM.PIN(n, t),
  oldFormErrors: !0
}).catch(() => {
  let t;
  t = e.isPrivate() ? c.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
    maxPins: o.tG9
  }) : c.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
    maxPins: o.tG9,
    channelName: s
  }), l.Z.show({
    title: c.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
    body: t,
    confirmText: c.Z.Messages.OKAY
  });
});
  },
  async unpinMessage(e, t) {
await a.Z.unarchiveThreadIfNecessary(e.id), i.tn.del({
  url: o.ANM.PIN(e.id, t),
  oldFormErrors: !0
}).catch(() => l.Z.show({
  title: c.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
  body: c.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
  confirmText: c.Z.Messages.TRY_AGAIN,
  cancelText: c.Z.Messages.CANCEL,
  onConfirm: u.unpinMessage.bind(u, e, t)
}));
  },
  ackPins(e) {
s.Z.dispatch({
  type: 'CHANNEL_PINS_ACK',
  channelId: e
});
  },
  fetchPins(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = r.Z.getPinnedMessages(e);
if (!!t || null == n || !n.loaded && !n.loading)
  s.Z.dispatch({
    type: 'LOAD_PINNED_MESSAGES',
    channelId: e
  }), i.tn.get({
    url: o.ANM.PINS(e),
    retries: 2,
    oldFormErrors: !0
  }).then(t => {
    s.Z.dispatch({
      type: 'LOAD_PINNED_MESSAGES_SUCCESS',
      messages: t.body,
      channelId: e
    });
  }, () => {
    s.Z.dispatch({
      type: 'LOAD_PINNED_MESSAGES_FAILURE',
      channelId: e
    });
  });
  }
};
t.Z = u;