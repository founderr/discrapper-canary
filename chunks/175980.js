"use strict";
n.r(t), n.d(t, {
  OVERLAY_LAYOUT: function() {
    return T
  },
  OVERLAY_LOCKED_LAYOUT: function() {
    return A
  },
  getOverlayLayoutContent: function() {
    return L
  }
}), n("70102");
var l = n("102457"),
  a = n("55562"),
  s = n("953260"),
  i = n("798232"),
  r = n("278412"),
  o = n("222301"),
  u = n("735577"),
  d = n("714208"),
  c = n("24312"),
  f = n("30269"),
  h = n("271524"),
  C = n("333949"),
  p = n("945924"),
  m = n("648900"),
  E = n("838021"),
  g = n("347445"),
  S = n("493334"),
  I = n("49111"),
  _ = n("782340");

function N() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [I.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
    [I.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
    [I.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
    [I.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
    [I.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
    [I.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
    [I.KeybindActions.UNREAD_NEXT]: S.UNREAD_NEXT,
    [I.KeybindActions.UNREAD_PREV]: S.UNREAD_PREV,
    [I.KeybindActions.MENTION_CHANNEL_NEXT]: S.MENTION_NEXT,
    [I.KeybindActions.MENTION_CHANNEL_PREV]: S.MENTION_PREV,
    [I.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
    [I.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
    [I.KeybindActions.SUBMIT]: C.SUBMIT,
    [I.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
    [I.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
    [I.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
    [I.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
    [I.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
    [I.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: E.TOGGLE_CATEGORY_COLLAPSED,
    [I.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
    [I.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
    [I.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
    [I.KeybindActions.TOGGLE_HOTKEYS]: g.TOGGLE_HOTKEYS,
    [I.KeybindActions.JUMP_TO_FIRST_UNREAD]: o.JUMP_TO_FIRST_UNREAD,
    [I.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
    [I.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
    [I.KeybindActions.CALL_START]: l.CALL_START,
    [I.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  },
  A = {
    [I.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  };

function L() {
  return [{
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: N(I.KeybindActions.SERVER_PREV, I.KeybindActions.SERVER_NEXT)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: N(I.KeybindActions.CHANNEL_PREV, I.KeybindActions.CHANNEL_NEXT)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: N(I.KeybindActions.NAVIGATE_BACK, I.KeybindActions.NAVIGATE_FORWARD)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: N(I.KeybindActions.UNREAD_PREV, I.KeybindActions.UNREAD_NEXT)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: N(I.KeybindActions.MENTION_CHANNEL_PREV, I.KeybindActions.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: N(I.KeybindActions.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: N(I.KeybindActions.MARK_SERVER_READ)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: N(I.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: N(I.KeybindActions.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: N(I.KeybindActions.TOGGLE_MUTE)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: N(I.KeybindActions.TOGGLE_DEAFEN)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: N(I.KeybindActions.CALL_ACCEPT)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: N(I.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: N(I.KeybindActions.CALL_START),
    groupEnd: !0
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: N(I.KeybindActions.SCROLL_UP, I.KeybindActions.SCROLL_DOWN)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: N(I.KeybindActions.JUMP_TO_FIRST_UNREAD)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: N(I.KeybindActions.TEXTAREA_FOCUS)
  }, {
    description: _.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: N(I.KeybindActions.QUICKSWITCHER_SHOW)
  }]
}