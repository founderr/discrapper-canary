"use strict";
n.r(t), n.d(t, {
  DEFAULT_LAYOUT: function() {
    return W
  },
  KeybindGroup: function() {
    return i
  },
  getDefaultLayoutContent: function() {
    return X
  },
  getDescriptionForKeybindGroup: function() {
    return Y
  },
  getNameForKeybindGroup: function() {
    return F
  }
}), n("411104");
var i, o, l = n("594174"),
  u = n("186070"),
  a = n("185514"),
  s = n("395878"),
  d = n("321697"),
  r = n("775774"),
  E = n("570408"),
  c = n("438846"),
  _ = n("360038"),
  A = n("175724"),
  C = n("705371"),
  T = n("138976"),
  S = n("296805"),
  I = n("561716"),
  f = n("239748"),
  N = n("337482"),
  O = n("679080"),
  R = n("777019"),
  p = n("523147"),
  L = n("400332"),
  D = n("510761"),
  h = n("189509"),
  g = n("673553"),
  b = n("280492"),
  G = n("746887"),
  m = n("861007"),
  M = n("300644"),
  P = n("721383"),
  U = n("207234"),
  y = n("997292"),
  K = n("743810"),
  H = n("620212"),
  B = n("547420"),
  v = n("981631"),
  V = n("689938");

function F(e) {
  switch (e) {
    case "NAVIGATION":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
    case "VOICE_AND_VIDEO":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
    case "CHAT":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
    case "MISCELLANEOUS":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
    case "MESSAGE":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
    case "DND":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE
  }
}

function Y(e) {
  switch (e) {
    case "MESSAGE":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
    case "DND":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
    default:
      return null
  }
}

function w() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = W[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}(o = i || (i = {})).NAVIGATION = "NAVIGATION", o.CHAT = "CHAT", o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", o.MISCELLANEOUS = "MISCELLANEOUS", o.MESSAGE = "MESSAGE", o.DND = "DND";
let W = {
  [v.KeybindActions.SERVER_NEXT]: D.SERVER_NEXT,
  [v.KeybindActions.SERVER_PREV]: D.SERVER_PREV,
  [v.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
  [v.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
  [v.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
  [v.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
  [v.KeybindActions.UNREAD_NEXT]: K.UNREAD_NEXT,
  [v.KeybindActions.UNREAD_PREV]: K.UNREAD_PREV,
  [v.KeybindActions.MENTION_CHANNEL_NEXT]: K.MENTION_NEXT,
  [v.KeybindActions.MENTION_CHANNEL_PREV]: K.MENTION_PREV,
  [v.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
  [v.KeybindActions.JUMP_TO_GUILD]: _.JUMP_TO_GUILD,
  [v.KeybindActions.SUBMIT]: h.SUBMIT,
  [v.KeybindActions.TEXTAREA_FOCUS]: g.TEXTAREA_FOCUS,
  [v.KeybindActions.MARK_CHANNEL_READ]: A.MARK_CHANNEL_READ,
  [v.KeybindActions.MARK_SERVER_READ]: C.MARK_SERVER_READ,
  [v.KeybindActions.TOGGLE_CHANNEL_PINS]: m.TOGGLE_CHANNEL_PINS,
  [v.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: U.TOGGLE_INBOX_UNREADS_TAB,
  [v.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]: U.MARK_TOP_INBOX_CHANNEL_READ,
  [v.KeybindActions.TOGGLE_USERS]: y.TOGGLE_USERS,
  [v.KeybindActions.TOGGLE_HELP]: M.TOGGLE_HELP,
  [v.KeybindActions.TOGGLE_MUTE]: b.TOGGLE_MUTE,
  [v.KeybindActions.TOGGLE_DEAFEN]: b.TOGGLE_DEAFEN,
  [v.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: G.TOGGLE_CATEGORY_COLLAPSED,
  [v.KeybindActions.SEARCH_SOUNDBOARD]: p.default,
  [v.KeybindActions.SCROLL_UP]: N.SCROLL_UP,
  [v.KeybindActions.SCROLL_DOWN]: N.SCROLL_DOWN,
  [v.KeybindActions.QUICKSWITCHER_SHOW]: I.QUICKSWITCHER_SHOW,
  [v.KeybindActions.CREATE_DM_GROUP]: s.CREATE_DM_GROUP,
  [v.KeybindActions.SEARCH_EMOJIS]: O.SEARCH_EMOJIS,
  [v.KeybindActions.SEARCH_GIFS]: R.SEARCH_GIFS,
  [v.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
  [v.KeybindActions.TOGGLE_HOTKEYS]: P.TOGGLE_HOTKEYS,
  [v.KeybindActions.JUMP_TO_FIRST_UNREAD]: T.JUMP_TO_FIRST_UNREAD,
  [v.KeybindActions.CREATE_GUILD]: d.CREATE_GUILD,
  [v.KeybindActions.UPLOAD_FILE]: H.UPLOAD_FILE,
  [v.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: f.RETURN_TO_AUDIO_CHANNEL,
  [v.KeybindActions.CALL_ACCEPT]: u.CALL_ACCEPT,
  [v.KeybindActions.CALL_START]: u.CALL_START,
  [v.KeybindActions.FOCUS_SEARCH]: E.FOCUS_SEARCH,
  [v.KeybindActions.JUMP_TO_CURRENT_CALL]: c.JUMP_TO_CURRENT_CALL,
  [v.KeybindActions.ZOOM_IN]: B.ZOOM_IN,
  [v.KeybindActions.ZOOM_OUT]: B.ZOOM_OUT,
  [v.KeybindActions.ZOOM_RESET]: B.ZOOM_RESET,
  [v.KeybindActions.OPEN_APP_DIRECTORY]: S.OPEN_APP_DIRECTORY,
  [v.KeybindActions.BROWSER_DEVTOOLS]: r.BROWSER_DEVTOOLS
};

function X() {
  return [{
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: w(v.KeybindActions.SERVER_PREV, v.KeybindActions.SERVER_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: w(v.KeybindActions.CHANNEL_PREV, v.KeybindActions.CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: w(v.KeybindActions.NAVIGATE_BACK, v.KeybindActions.NAVIGATE_FORWARD),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: w(v.KeybindActions.UNREAD_PREV, v.KeybindActions.UNREAD_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: w(v.KeybindActions.MENTION_CHANNEL_PREV, v.KeybindActions.MENTION_CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
    binds: w(v.KeybindActions.JUMP_TO_CURRENT_CALL),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: w(v.KeybindActions.TOGGLE_PREVIOUS_GUILD),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: w(v.KeybindActions.QUICKSWITCHER_SHOW),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
    binds: w(v.KeybindActions.CREATE_GUILD),
    group: "NAVIGATION",
    groupEnd: !0
  }, {
    description: V.default.Messages.DND_OPERATION_LABEL_START,
    binds: ["mod+d"],
    group: "DND"
  }, {
    description: V.default.Messages.DND_OPERATION_LABEL_MOVE,
    binds: ["up", "down"],
    group: "DND"
  }, {
    description: V.default.Messages.DND_OPERATION_LABEL_DROP,
    binds: ["spacebar", "enter"],
    group: "DND"
  }, {
    description: V.default.Messages.DND_OPERATION_LABEL_CANCEL,
    binds: ["esc"],
    group: "DND",
    groupEnd: !0
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: w(v.KeybindActions.MARK_SERVER_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: w(v.KeybindActions.MARK_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
    binds: w(v.KeybindActions.CREATE_DM_GROUP),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
    binds: w(v.KeybindActions.TOGGLE_CHANNEL_PINS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
    binds: w(v.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
    binds: w(v.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
    binds: w(v.KeybindActions.TOGGLE_USERS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: w(v.KeybindActions.SEARCH_EMOJIS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
    binds: w(v.KeybindActions.SEARCH_GIFS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
    binds: w(v.KeybindActions.SEARCH_STICKERS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: w(v.KeybindActions.SCROLL_UP, v.KeybindActions.SCROLL_DOWN),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: w(v.KeybindActions.JUMP_TO_FIRST_UNREAD),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: w(v.KeybindActions.TEXTAREA_FOCUS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
    binds: w(v.KeybindActions.UPLOAD_FILE),
    group: "CHAT",
    groupEnd: !0
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: w(v.KeybindActions.TOGGLE_MUTE),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: w(v.KeybindActions.TOGGLE_DEAFEN),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: w(v.KeybindActions.CALL_ACCEPT),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: w(v.KeybindActions.MARK_CHANNEL_READ),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: w(v.KeybindActions.CALL_START),
    group: "VOICE_AND_VIDEO",
    groupEnd: !0
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
    binds: w(v.KeybindActions.SEARCH_SOUNDBOARD),
    group: "VOICE_AND_VIDEO",
    predicate: () => {
      var e;
      return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0
    }
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
    binds: w(v.KeybindActions.TOGGLE_HELP),
    group: "MISCELLANEOUS"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
    binds: w(v.KeybindActions.FOCUS_SEARCH),
    group: "MISCELLANEOUS"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
    binds: ["h+h+right+n+k"],
    group: "MISCELLANEOUS",
    groupEnd: !0
  }, {
    description: V.default.Messages.EDIT_MESSAGE,
    binds: ["e"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.DELETE_MESSAGE,
    binds: ["backspace"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.PIN_MESSAGE,
    binds: ["p"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.ADD_REACTION,
    binds: ["plus"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.MESSAGE_ACTION_REPLY,
    binds: ["r"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.COPY_TEXT,
    binds: ["mod+c"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.MARK_UNREAD,
    binds: ["alt+enter"],
    group: "MESSAGE"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: ["escape"],
    group: "MESSAGE",
    groupEnd: !0
  }]
}
t.default = W