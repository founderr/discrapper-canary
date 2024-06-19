n.d(t, {
  IV: function() {
    return o
  },
  P: function() {
    return u
  },
  fH: function() {
    return c
  },
  sk: function() {
    return E
  },
  xt: function() {
    return d
  }
});
var s = n(166459),
  i = n(966390),
  l = n(476326),
  a = n(703558),
  r = n(398805);
async function o(e, t, n) {
  let s = (0, r.Yk)(t, n),
    i = await fetch(n);
  return c(e, t, new File([await i.blob()], s, {
    type: "image/gif"
  })), n
}

function c(e, t, n) {
  let i = {
    id: t,
    channelId: e,
    file: n,
    platform: l.ow.WEB
  };
  s.Z.addFile({
    file: i,
    channelId: e,
    draftType: a.d.Poll
  })
}
async function u(e, t, n) {
  s.Z.remove(e, t, a.d.Poll)
}
async function d(e) {
  s.Z.clearAll(e, a.d.Poll)
}
async function E(e) {
  let {
    channel: t,
    items: n,
    poll: s,
    nonce: l,
    maxSizeCallback: r
  } = e;
  return i.Z.uploadFiles({
    channelId: t.id,
    uploads: n,
    draftType: a.d.Poll,
    parsedMessage: {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    },
    options: {
      nonce: l,
      poll: s
    },
    raiseEndpointErrors: !0
  })
}