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
  C = n("673553"),
  m = n("280492"),
  g = n("746887"),
  E = n("721383"),
  _ = n("743810"),
  S = n("981631"),
  I = n("689938");

function N() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [S.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
    [S.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
    [S.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
    [S.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
    [S.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
    [S.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
    [S.KeybindActions.UNREAD_NEXT]: _.UNREAD_NEXT,
    [S.KeybindActions.UNREAD_PREV]: _.UNREAD_PREV,
    [S.KeybindActions.MENTION_CHANNEL_NEXT]: _.MENTION_NEXT,
    [S.KeybindActions.MENTION_CHANNEL_PREV]: _.MENTION_PREV,
    [S.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
    [S.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
    [S.KeybindActions.SUBMIT]: p.SUBMIT,
    [S.KeybindActions.TEXTAREA_FOCUS]: C.TEXTAREA_FOCUS,
    [S.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
    [S.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
    [S.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
    [S.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
    [S.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: g.TOGGLE_CATEGORY_COLLAPSED,
    [S.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
    [S.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
    [S.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
    [S.KeybindActions.TOGGLE_HOTKEYS]: E.TOGGLE_HOTKEYS,
    [S.KeybindActions.JUMP_TO_FIRST_UNREAD]: o.JUMP_TO_FIRST_UNREAD,
    [S.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
    [S.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
    [S.KeybindActions.CALL_START]: l.CALL_START,
    [S.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  },
  A = {
    [S.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
  };

function L() {
  return [{
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: N(S.KeybindActions.SERVER_PREV, S.KeybindActions.SERVER_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: N(S.KeybindActions.CHANNEL_PREV, S.KeybindActions.CHANNEL_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: N(S.KeybindActions.NAVIGATE_BACK, S.KeybindActions.NAVIGATE_FORWARD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: N(S.KeybindActions.UNREAD_PREV, S.KeybindActions.UNREAD_NEXT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: N(S.KeybindActions.MENTION_CHANNEL_PREV, S.KeybindActions.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: N(S.KeybindActions.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: N(S.KeybindActions.MARK_SERVER_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: N(S.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: N(S.KeybindActions.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: N(S.KeybindActions.TOGGLE_MUTE)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: N(S.KeybindActions.TOGGLE_DEAFEN)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: N(S.KeybindActions.CALL_ACCEPT)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: N(S.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: N(S.KeybindActions.CALL_START),
    groupEnd: !0
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: N(S.KeybindActions.SCROLL_UP, S.KeybindActions.SCROLL_DOWN)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: N(S.KeybindActions.JUMP_TO_FIRST_UNREAD)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: N(S.KeybindActions.TEXTAREA_FOCUS)
  }, {
    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: N(S.KeybindActions.QUICKSWITCHER_SHOW)
  }]
}