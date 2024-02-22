"use strict";
n.r(t), n.d(t, {
  KeybindGroup: function() {
    return i
  },
  getNameForKeybindGroup: function() {
    return v
  },
  getDescriptionForKeybindGroup: function() {
    return F
  },
  DEFAULT_LAYOUT: function() {
    return w
  },
  getDefaultLayoutContent: function() {
    return W
  },
  default: function() {
    return X
  }
}), n("70102");
var i, o, l = n("102457"),
  a = n("55562"),
  d = n("863536"),
  u = n("786720"),
  s = n("211314"),
  E = n("218143"),
  r = n("586819"),
  _ = n("953260"),
  A = n("798232"),
  c = n("278412"),
  C = n("222301"),
  T = n("903376"),
  S = n("242149"),
  I = n("714208"),
  f = n("24312"),
  N = n("30269"),
  O = n("709079"),
  L = n("616903"),
  D = n("271524"),
  R = n("333949"),
  p = n("945924"),
  h = n("648900"),
  b = n("838021"),
  G = n("745991"),
  g = n("640968"),
  M = n("347445"),
  P = n("992642"),
  U = n("200431"),
  m = n("493334"),
  y = n("809392"),
  K = n("229645"),
  H = n("202035"),
  B = n("49111"),
  V = n("782340");

function v(e) {
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

function F(e) {
  switch (e) {
    case "MESSAGE":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
    case "DND":
      return V.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
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
  [B.KeybindActions.SERVER_NEXT]: D.SERVER_NEXT,
  [B.KeybindActions.SERVER_PREV]: D.SERVER_PREV,
  [B.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
  [B.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
  [B.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
  [B.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
  [B.KeybindActions.UNREAD_NEXT]: m.UNREAD_NEXT,
  [B.KeybindActions.UNREAD_PREV]: m.UNREAD_PREV,
  [B.KeybindActions.MENTION_CHANNEL_NEXT]: m.MENTION_NEXT,
  [B.KeybindActions.MENTION_CHANNEL_PREV]: m.MENTION_PREV,
  [B.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
  [B.KeybindActions.JUMP_TO_GUILD]: _.JUMP_TO_GUILD,
  [B.KeybindActions.SUBMIT]: R.SUBMIT,
  [B.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
  [B.KeybindActions.MARK_CHANNEL_READ]: A.MARK_CHANNEL_READ,
  [B.KeybindActions.MARK_SERVER_READ]: c.MARK_SERVER_READ,
  [B.KeybindActions.TOGGLE_CHANNEL_PINS]: G.TOGGLE_CHANNEL_PINS,
  [B.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: P.TOGGLE_INBOX_UNREADS_TAB,
  [B.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]: P.MARK_TOP_INBOX_CHANNEL_READ,
  [B.KeybindActions.TOGGLE_USERS]: U.TOGGLE_USERS,
  [B.KeybindActions.TOGGLE_HELP]: g.TOGGLE_HELP,
  [B.KeybindActions.VIBE_WITH_WUMPUS]: K.VIBE_WITH_WUMPUS,
  [B.KeybindActions.TOGGLE_MUTE]: h.TOGGLE_MUTE,
  [B.KeybindActions.TOGGLE_DEAFEN]: h.TOGGLE_DEAFEN,
  [B.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: b.TOGGLE_CATEGORY_COLLAPSED,
  [B.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
  [B.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
  [B.KeybindActions.QUICKSWITCHER_SHOW]: S.QUICKSWITCHER_SHOW,
  [B.KeybindActions.CREATE_DM_GROUP]: d.CREATE_DM_GROUP,
  [B.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
  [B.KeybindActions.SEARCH_GIFS]: O.SEARCH_GIFS,
  [B.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
  [B.KeybindActions.TOGGLE_HOTKEYS]: M.TOGGLE_HOTKEYS,
  [B.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
  [B.KeybindActions.CREATE_GUILD]: u.CREATE_GUILD,
  [B.KeybindActions.UPLOAD_FILE]: y.UPLOAD_FILE,
  [B.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
  [B.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
  [B.KeybindActions.CALL_START]: l.CALL_START,
  [B.KeybindActions.FOCUS_SEARCH]: E.FOCUS_SEARCH,
  [B.KeybindActions.JUMP_TO_CURRENT_CALL]: r.JUMP_TO_CURRENT_CALL,
  [B.KeybindActions.ZOOM_IN]: H.ZOOM_IN,
  [B.KeybindActions.ZOOM_OUT]: H.ZOOM_OUT,
  [B.KeybindActions.ZOOM_RESET]: H.ZOOM_RESET,
  [B.KeybindActions.OPEN_APP_DIRECTORY]: T.OPEN_APP_DIRECTORY,
  [B.KeybindActions.BROWSER_DEVTOOLS]: s.BROWSER_DEVTOOLS
};

function W() {
  return [{
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: Y(B.KeybindActions.SERVER_PREV, B.KeybindActions.SERVER_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: Y(B.KeybindActions.CHANNEL_PREV, B.KeybindActions.CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: Y(B.KeybindActions.NAVIGATE_BACK, B.KeybindActions.NAVIGATE_FORWARD),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: Y(B.KeybindActions.UNREAD_PREV, B.KeybindActions.UNREAD_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: Y(B.KeybindActions.MENTION_CHANNEL_PREV, B.KeybindActions.MENTION_CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
    binds: Y(B.KeybindActions.JUMP_TO_CURRENT_CALL),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: Y(B.KeybindActions.TOGGLE_PREVIOUS_GUILD),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: Y(B.KeybindActions.QUICKSWITCHER_SHOW),
    group: "NAVIGATION"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
    binds: Y(B.KeybindActions.CREATE_GUILD),
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
    binds: Y(B.KeybindActions.MARK_SERVER_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: Y(B.KeybindActions.MARK_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
    binds: Y(B.KeybindActions.CREATE_DM_GROUP),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
    binds: Y(B.KeybindActions.TOGGLE_CHANNEL_PINS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
    binds: Y(B.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
    binds: Y(B.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
    binds: Y(B.KeybindActions.TOGGLE_USERS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: Y(B.KeybindActions.SEARCH_EMOJIS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
    binds: Y(B.KeybindActions.SEARCH_GIFS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
    binds: Y(B.KeybindActions.SEARCH_STICKERS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: Y(B.KeybindActions.SCROLL_UP, B.KeybindActions.SCROLL_DOWN),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: Y(B.KeybindActions.JUMP_TO_FIRST_UNREAD),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: Y(B.KeybindActions.TEXTAREA_FOCUS),
    group: "CHAT"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
    binds: Y(B.KeybindActions.UPLOAD_FILE),
    group: "CHAT",
    groupEnd: !0
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: Y(B.KeybindActions.TOGGLE_MUTE),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: Y(B.KeybindActions.TOGGLE_DEAFEN),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: Y(B.KeybindActions.CALL_ACCEPT),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: Y(B.KeybindActions.MARK_CHANNEL_READ),
    group: "VOICE_AND_VIDEO"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: Y(B.KeybindActions.CALL_START),
    group: "VOICE_AND_VIDEO",
    groupEnd: !0
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
    binds: Y(B.KeybindActions.TOGGLE_HELP),
    group: "MISCELLANEOUS"
  }, {
    description: V.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
    binds: Y(B.KeybindActions.FOCUS_SEARCH),
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
  }, {
    description: V.default.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
    binds: Y(B.KeybindActions.VIBE_WITH_WUMPUS),
    group: "MISCELLANEOUS"
  }]
}
var X = w