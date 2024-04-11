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
}), n("411104");
var l = n("186070"),
  a = n("185514"),
  s = n("360038"),
  i = n("175724"),
  r = n("705371"),
  o = n("138976"),
  u = n("167042"),
  d = n("239748"),
  c = n("337482"),
  f = n("679080"),
  h = n("510761"),
  p = n("189509"),
  m = n("673553"),
  C = n("280492"),
  g = n("746887"),
  E = n("721383"),
  S = n("743810"),
  I = n("981631"),
  _ = n("689938");

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
    [I.KeybindActions.SUBMIT]: p.SUBMIT,
    [I.KeybindActions.TEXTAREA_FOCUS]: m.TEXTAREA_FOCUS,
    [I.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
    [I.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
    [I.KeybindActions.TOGGLE_MUTE]: C.TOGGLE_MUTE,
    [I.KeybindActions.TOGGLE_DEAFEN]: C.TOGGLE_DEAFEN,
    [I.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: g.TOGGLE_CATEGORY_COLLAPSED,
    [I.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
    [I.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
    [I.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
    [I.KeybindActions.TOGGLE_HOTKEYS]: E.TOGGLE_HOTKEYS,
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