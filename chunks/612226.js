"use strict";
n.r(t), n.d(t, {
  DEFAULT_LAYOUT: function() {
    return w
  },
  KeybindGroup: function() {
    return i
  },
  getDefaultLayoutContent: function() {
    return W
  },
  getDescriptionForKeybindGroup: function() {
    return F
  },
  getNameForKeybindGroup: function() {
    return V
  }
}), n("411104");
var i, o, l = n("186070"),
  u = n("185514"),
  a = n("395878"),
  s = n("321697"),
  d = n("775774"),
  r = n("570408"),
  E = n("438846"),
  c = n("360038"),
  _ = n("175724"),
  A = n("705371"),
  C = n("138976"),
  T = n("296805"),
  S = n("561716"),
  I = n("239748"),
  f = n("337482"),
  N = n("679080"),
  O = n("777019"),
  R = n("523147"),
  L = n("400332"),
  p = n("510761"),
  D = n("189509"),
  h = n("673553"),
  b = n("280492"),
  g = n("746887"),
  G = n("861007"),
  m = n("300644"),
  M = n("721383"),
  P = n("207234"),
  U = n("997292"),
  y = n("743810"),
  K = n("620212"),
  H = n("547420"),
  B = n("981631"),
  v = n("689938");

function V(e) {
  switch (e) {
    case "NAVIGATION":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
    case "VOICE_AND_VIDEO":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
    case "CHAT":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
    case "MISCELLANEOUS":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
    case "MESSAGE":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
    case "DND":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE
  }
}

function F(e) {
  switch (e) {
    case "MESSAGE":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
    case "DND":
      return v.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
    default:
      return null
  }
}

function Y() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = w[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}(o = i || (i = {})).NAVIGATION = "NAVIGATION", o.CHAT = "CHAT", o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", o.MISCELLANEOUS = "MISCELLANEOUS", o.MESSAGE = "MESSAGE", o.DND = "DND";
let w = {
  [B.KeybindActions.SERVER_NEXT]: p.SERVER_NEXT,
  [B.KeybindActions.SERVER_PREV]: p.SERVER_PREV,
  [B.KeybindActions.CHANNEL_NEXT]: u.CHANNEL_NEXT,
  [B.KeybindActions.CHANNEL_PREV]: u.CHANNEL_PREV,
  [B.KeybindActions.NAVIGATE_BACK]: u.NAVIGATE_BACK,
  [B.KeybindActions.NAVIGATE_FORWARD]: u.NAVIGATE_FORWARD,
  [B.KeybindActions.UNREAD_NEXT]: y.UNREAD_NEXT,
  [B.KeybindActions.UNREAD_PREV]: y.UNREAD_PREV,
  [B.KeybindActions.MENTION_CHANNEL_NEXT]: y.MENTION_NEXT,
  [B.KeybindActions.MENTION_CHANNEL_PREV]: y.MENTION_PREV,
  [B.KeybindActions.TOGGLE_PREVIOUS_GUILD]: u.TOGGLE_PREVIOUS_GUILD,
  [B.KeybindActions.JUMP_TO_GUILD]: c.JUMP_TO_GUILD,
  [B.KeybindActions.SUBMIT]: D.SUBMIT,
  [B.KeybindActions.TEXTAREA_FOCUS]: h.TEXTAREA_FOCUS,
  [B.KeybindActions.MARK_CHANNEL_READ]: _.MARK_CHANNEL_READ,
  [B.KeybindActions.MARK_SERVER_READ]: A.MARK_SERVER_READ,
  [B.KeybindActions.TOGGLE_CHANNEL_PINS]: G.TOGGLE_CHANNEL_PINS,
  [B.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: P.TOGGLE_INBOX_UNREADS_TAB,
  [B.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]: P.MARK_TOP_INBOX_CHANNEL_READ,
  [B.KeybindActions.TOGGLE_USERS]: U.TOGGLE_USERS,
  [B.KeybindActions.TOGGLE_HELP]: m.TOGGLE_HELP,
  [B.KeybindActions.TOGGLE_MUTE]: b.TOGGLE_MUTE,
  [B.KeybindActions.TOGGLE_DEAFEN]: b.TOGGLE_DEAFEN,
  [B.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: g.TOGGLE_CATEGORY_COLLAPSED,
  [B.KeybindActions.SEARCH_SOUNDBOARD]: R.default,
  [B.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
  [B.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
  [B.KeybindActions.QUICKSWITCHER_SHOW]: S.QUICKSWITCHER_SHOW,
  [B.KeybindActions.CREATE_DM_GROUP]: a.CREATE_DM_GROUP,
  [B.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
  [B.KeybindActions.SEARCH_GIFS]: O.SEARCH_GIFS,
  [B.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
  [B.KeybindActions.TOGGLE_HOTKEYS]: M.TOGGLE_HOTKEYS,
  [B.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
  [B.KeybindActions.CREATE_GUILD]: s.CREATE_GUILD,
  [B.KeybindActions.UPLOAD_FILE]: K.UPLOAD_FILE,
  [B.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
  [B.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
  [B.KeybindActions.CALL_START]: l.CALL_START,
  [B.KeybindActions.FOCUS_SEARCH]: r.FOCUS_SEARCH,
  [B.KeybindActions.JUMP_TO_CURRENT_CALL]: E.JUMP_TO_CURRENT_CALL,
  [B.KeybindActions.ZOOM_IN]: H.ZOOM_IN,
  [B.KeybindActions.ZOOM_OUT]: H.ZOOM_OUT,
  [B.KeybindActions.ZOOM_RESET]: H.ZOOM_RESET,
  [B.KeybindActions.OPEN_APP_DIRECTORY]: T.OPEN_APP_DIRECTORY,
  [B.KeybindActions.BROWSER_DEVTOOLS]: d.BROWSER_DEVTOOLS
};

function W() {
  return [{
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: Y(B.KeybindActions.SERVER_PREV, B.KeybindActions.SERVER_NEXT),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: Y(B.KeybindActions.CHANNEL_PREV, B.KeybindActions.CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: Y(B.KeybindActions.NAVIGATE_BACK, B.KeybindActions.NAVIGATE_FORWARD),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: Y(B.KeybindActions.UNREAD_PREV, B.KeybindActions.UNREAD_NEXT),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: Y(B.KeybindActions.MENTION_CHANNEL_PREV, B.KeybindActions.MENTION_CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
    binds: Y(B.KeybindActions.JUMP_TO_CURRENT_CALL),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: Y(B.KeybindActions.TOGGLE_PREVIOUS_GUILD),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: Y(B.KeybindActions.QUICKSWITCHER_SHOW),
    group: "NAVIGATION"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
    binds: Y(B.KeybindActions.CREATE_GUILD),
    group: "NAVIGATION",
    groupEnd: !0
  }, {
    description: v.default.Messages.DND_OPERATION_LABEL_START,
    binds: ["mod+d"],
    group: "DND"
  }, {
    description: v.default.Messages.DND_OPERATION_LABEL_MOVE,
    binds: ["up", "down"],
    group: "DND"
  }, {
    description: v.default.Messages.DND_OPERATION_LABEL_DROP,
    binds: ["spacebar", "enter"],
    group: "DND"
  }, {
    description: v.default.Messages.DND_OPERATION_LABEL_CANCEL,
    binds: ["esc"],
    group: "DND",
    groupEnd: !0
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: Y(B.KeybindActions.MARK_SERVER_READ),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: Y(B.KeybindActions.MARK_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
    binds: Y(B.KeybindActions.CREATE_DM_GROUP),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
    binds: Y(B.KeybindActions.TOGGLE_CHANNEL_PINS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
    binds: Y(B.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
    binds: Y(B.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
    binds: Y(B.KeybindActions.TOGGLE_USERS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: Y(B.KeybindActions.SEARCH_EMOJIS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
    binds: Y(B.KeybindActions.SEARCH_GIFS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
    binds: Y(B.KeybindActions.SEARCH_STICKERS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: Y(B.KeybindActions.SCROLL_UP, B.KeybindActions.SCROLL_DOWN),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: Y(B.KeybindActions.JUMP_TO_FIRST_UNREAD),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: Y(B.KeybindActions.TEXTAREA_FOCUS),
    group: "CHAT"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
    binds: Y(B.KeybindActions.UPLOAD_FILE),
    group: "CHAT",
    groupEnd: !0
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: Y(B.KeybindActions.TOGGLE_MUTE),
    group: "VOICE_AND_VIDEO"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: Y(B.KeybindActions.TOGGLE_DEAFEN),
    group: "VOICE_AND_VIDEO"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: Y(B.KeybindActions.CALL_ACCEPT),
    group: "VOICE_AND_VIDEO"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: Y(B.KeybindActions.MARK_CHANNEL_READ),
    group: "VOICE_AND_VIDEO"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: Y(B.KeybindActions.CALL_START),
    group: "VOICE_AND_VIDEO",
    groupEnd: !0
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
    binds: Y(B.KeybindActions.SEARCH_SOUNDBOARD),
    group: "VOICE_AND_VIDEO"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
    binds: Y(B.KeybindActions.TOGGLE_HELP),
    group: "MISCELLANEOUS"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
    binds: Y(B.KeybindActions.FOCUS_SEARCH),
    group: "MISCELLANEOUS"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
    binds: ["h+h+right+n+k"],
    group: "MISCELLANEOUS",
    groupEnd: !0
  }, {
    description: v.default.Messages.EDIT_MESSAGE,
    binds: ["e"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.DELETE_MESSAGE,
    binds: ["backspace"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.PIN_MESSAGE,
    binds: ["p"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.ADD_REACTION,
    binds: ["plus"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.MESSAGE_ACTION_REPLY,
    binds: ["r"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.COPY_TEXT,
    binds: ["mod+c"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.MARK_UNREAD,
    binds: ["alt+enter"],
    group: "MESSAGE"
  }, {
    description: v.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: ["escape"],
    group: "MESSAGE",
    groupEnd: !0
  }]
}
t.default = w