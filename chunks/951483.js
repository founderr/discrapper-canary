n.d(t, {
  Sr: function() {
    return S
  },
  Xq: function() {
    return x
  },
  Zg: function() {
    return L
  }
}), n(411104);
var l = n(186070),
  i = n(185514),
  s = n(360038),
  r = n(175724),
  a = n(705371),
  o = n(138976),
  u = n(167042),
  c = n(239748),
  d = n(337482),
  h = n(679080),
  p = n(510761),
  g = n(189509),
  m = n(673553),
  C = n(280492),
  E = n(746887),
  f = n(721383),
  _ = n(743810),
  I = n(981631),
  N = n(689938);

function Z() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = S[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let S = {
    [I.EkH.SERVER_NEXT]: p.nq,
    [I.EkH.SERVER_PREV]: p.X3,
    [I.EkH.CHANNEL_NEXT]: i.tQ,
    [I.EkH.CHANNEL_PREV]: i.x5,
    [I.EkH.NAVIGATE_BACK]: i.Nx,
    [I.EkH.NAVIGATE_FORWARD]: i.On,
    [I.EkH.UNREAD_NEXT]: _.pd,
    [I.EkH.UNREAD_PREV]: _.wk,
    [I.EkH.MENTION_CHANNEL_NEXT]: _.Nv,
    [I.EkH.MENTION_CHANNEL_PREV]: _.uX,
    [I.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [I.EkH.JUMP_TO_GUILD]: s.u,
    [I.EkH.SUBMIT]: g.z,
    [I.EkH.TEXTAREA_FOCUS]: m.U,
    [I.EkH.MARK_CHANNEL_READ]: r.f,
    [I.EkH.MARK_SERVER_READ]: a.l,
    [I.EkH.TOGGLE_MUTE]: C.iN,
    [I.EkH.TOGGLE_DEAFEN]: C.oV,
    [I.EkH.TOGGLE_CATEGORY_COLLAPSED]: E.u,
    [I.EkH.SCROLL_UP]: d.B2,
    [I.EkH.SCROLL_DOWN]: d.gN,
    [I.EkH.SEARCH_EMOJIS]: h.S,
    [I.EkH.TOGGLE_HOTKEYS]: f._,
    [I.EkH.JUMP_TO_FIRST_UNREAD]: o.O,
    [I.EkH.RETURN_TO_AUDIO_CHANNEL]: c.F,
    [I.EkH.CALL_ACCEPT]: l.IL,
    [I.EkH.CALL_START]: l.FI,
    [I.EkH.QUICKSWITCHER_SHOW]: u.$
  },
  x = {
    [I.EkH.QUICKSWITCHER_SHOW]: u.$
  };

function L() {
  return [{
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: Z(I.EkH.SERVER_PREV, I.EkH.SERVER_NEXT)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: Z(I.EkH.CHANNEL_PREV, I.EkH.CHANNEL_NEXT)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: Z(I.EkH.NAVIGATE_BACK, I.EkH.NAVIGATE_FORWARD)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: Z(I.EkH.UNREAD_PREV, I.EkH.UNREAD_NEXT)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: Z(I.EkH.MENTION_CHANNEL_PREV, I.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: Z(I.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: Z(I.EkH.MARK_SERVER_READ)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: Z(I.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: Z(I.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: Z(I.EkH.TOGGLE_MUTE)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: Z(I.EkH.TOGGLE_DEAFEN)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: Z(I.EkH.CALL_ACCEPT)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: Z(I.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: Z(I.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: Z(I.EkH.SCROLL_UP, I.EkH.SCROLL_DOWN)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: Z(I.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: Z(I.EkH.TEXTAREA_FOCUS)
  }, {
    description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: Z(I.EkH.QUICKSWITCHER_SHOW)
  }]
}