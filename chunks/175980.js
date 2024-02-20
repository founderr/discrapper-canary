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
  u = n("222301"),
  o = n("735577"),
  d = n("714208"),
  c = n("24312"),
  f = n("30269"),
  h = n("271524"),
  C = n("333949"),
  p = n("945924"),
  m = n("648900"),
  E = n("838021"),
  g = n("347445"),
  I = n("493334"),
  _ = n("49111"),
  S = n("782340");

function N() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [_.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
    [_.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
    [_.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
    [_.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
    [_.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
    [_.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
    [_.KeybindActions.UNREAD_NEXT]: I.UNREAD_NEXT,
    [_.KeybindActions.UNREAD_PREV]: I.UNREAD_PREV,
    [_.KeybindActions.MENTION_CHANNEL_NEXT]: I.MENTION_NEXT,
    [_.KeybindActions.MENTION_CHANNEL_PREV]: I.MENTION_PREV,
    [_.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
    [_.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
    [_.KeybindActions.SUBMIT]: C.SUBMIT,
    [_.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
    [_.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
    [_.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
    [_.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
    [_.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
    [_.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: E.TOGGLE_CATEGORY_COLLAPSED,
    [_.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
    [_.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
    [_.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
    [_.KeybindActions.TOGGLE_HOTKEYS]: g.TOGGLE_HOTKEYS,
    [_.KeybindActions.JUMP_TO_FIRST_UNREAD]: u.JUMP_TO_FIRST_UNREAD,
    [_.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
    [_.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
    [_.KeybindActions.CALL_START]: l.CALL_START,
    [_.KeybindActions.QUICKSWITCHER_SHOW]: o.QUICKSWITCHER_SHOW
  },
  A = {
    [_.KeybindActions.QUICKSWITCHER_SHOW]: o.QUICKSWITCHER_SHOW
  };

function L() {
  return [{
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: N(_.KeybindActions.SERVER_PREV, _.KeybindActions.SERVER_NEXT)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: N(_.KeybindActions.CHANNEL_PREV, _.KeybindActions.CHANNEL_NEXT)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: N(_.KeybindActions.NAVIGATE_BACK, _.KeybindActions.NAVIGATE_FORWARD)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: N(_.KeybindActions.UNREAD_PREV, _.KeybindActions.UNREAD_NEXT)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: N(_.KeybindActions.MENTION_CHANNEL_PREV, _.KeybindActions.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: N(_.KeybindActions.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: N(_.KeybindActions.MARK_SERVER_READ)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: N(_.KeybindActions.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: N(_.KeybindActions.TOGGLE_MUTE)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: N(_.KeybindActions.TOGGLE_DEAFEN)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: N(_.KeybindActions.CALL_ACCEPT)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: N(_.KeybindActions.CALL_START),
    groupEnd: !0
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: N(_.KeybindActions.SCROLL_UP, _.KeybindActions.SCROLL_DOWN)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: N(_.KeybindActions.JUMP_TO_FIRST_UNREAD)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: N(_.KeybindActions.TEXTAREA_FOCUS)
  }, {
    description: S.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: N(_.KeybindActions.QUICKSWITCHER_SHOW)
  }]
}