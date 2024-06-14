"use strict";
n.r(t), n.d(t, {
  DEFAULT_LAYOUT: function() {
    return X
  },
  KeybindGroup: function() {
    return i
  },
  getDefaultLayoutContent: function() {
    return k
  },
  getDescriptionForKeybindGroup: function() {
    return w
  },
  getNameForKeybindGroup: function() {
    return Y
  }
}), n("411104"), n("653041");
var i, o, l = n("346610"),
  a = n("186070"),
  u = n("185514"),
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
  f = n("561716"),
  I = n("239748"),
  O = n("337482"),
  N = n("679080"),
  p = n("777019"),
  R = n("523147"),
  L = n("400332"),
  D = n("510761"),
  h = n("189509"),
  g = n("673553"),
  b = n("280492"),
  G = n("746887"),
  m = n("861007"),
  M = n("300644"),
  P = n("721383"),
  y = n("207234"),
  U = n("997292"),
  K = n("743810"),
  H = n("620212"),
  v = n("188051"),
  B = n("547420"),
  V = n("981631"),
  F = n("689938");

function Y(e) {
  switch (e) {
    case "NAVIGATION":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
    case "VOICE_AND_VIDEO":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
    case "CHAT":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
    case "MISCELLANEOUS":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
    case "MESSAGE":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
    case "DND":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE
  }
}

function w(e) {
  switch (e) {
    case "MESSAGE":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
    case "DND":
      return F.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
    default:
      return null
  }
}

function W() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = X[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}(o = i || (i = {})).NAVIGATION = "NAVIGATION", o.CHAT = "CHAT", o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", o.MISCELLANEOUS = "MISCELLANEOUS", o.MESSAGE = "MESSAGE", o.DND = "DND";
let X = {
  [V.KeybindActions.SERVER_NEXT]: D.SERVER_NEXT,
  [V.KeybindActions.SERVER_PREV]: D.SERVER_PREV,
  [V.KeybindActions.CHANNEL_NEXT]: u.CHANNEL_NEXT,
  [V.KeybindActions.CHANNEL_PREV]: u.CHANNEL_PREV,
  [V.KeybindActions.NAVIGATE_BACK]: u.NAVIGATE_BACK,
  [V.KeybindActions.NAVIGATE_FORWARD]: u.NAVIGATE_FORWARD,
  [V.KeybindActions.UNREAD_NEXT]: K.UNREAD_NEXT,
  [V.KeybindActions.UNREAD_PREV]: K.UNREAD_PREV,
  [V.KeybindActions.MENTION_CHANNEL_NEXT]: K.MENTION_NEXT,
  [V.KeybindActions.MENTION_CHANNEL_PREV]: K.MENTION_PREV,
  [V.KeybindActions.TOGGLE_PREVIOUS_GUILD]: u.TOGGLE_PREVIOUS_GUILD,
  [V.KeybindActions.JUMP_TO_GUILD]: _.JUMP_TO_GUILD,
  [V.KeybindActions.SUBMIT]: h.SUBMIT,
  [V.KeybindActions.TEXTAREA_FOCUS]: g.TEXTAREA_FOCUS,
  [V.KeybindActions.MARK_CHANNEL_READ]: A.MARK_CHANNEL_READ,
  [V.KeybindActions.MARK_SERVER_READ]: C.MARK_SERVER_READ,
  [V.KeybindActions.TOGGLE_CHANNEL_PINS]: m.TOGGLE_CHANNEL_PINS,
  [V.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: y.TOGGLE_INBOX_UNREADS_TAB,
  [V.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]: y.MARK_TOP_INBOX_CHANNEL_READ,
  [V.KeybindActions.TOGGLE_USERS]: U.TOGGLE_USERS,
  [V.KeybindActions.TOGGLE_HELP]: M.TOGGLE_HELP,
  [V.KeybindActions.VIBE_WITH_WUMPUS]: v.VIBE_WITH_WUMPUS,
  [V.KeybindActions.TOGGLE_MUTE]: b.TOGGLE_MUTE,
  [V.KeybindActions.TOGGLE_DEAFEN]: b.TOGGLE_DEAFEN,
  [V.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: G.TOGGLE_CATEGORY_COLLAPSED,
  [V.KeybindActions.SEARCH_SOUNDBOARD]: R.default,
  [V.KeybindActions.SCROLL_UP]: O.SCROLL_UP,
  [V.KeybindActions.SCROLL_DOWN]: O.SCROLL_DOWN,
  [V.KeybindActions.QUICKSWITCHER_SHOW]: f.QUICKSWITCHER_SHOW,
  [V.KeybindActions.CREATE_DM_GROUP]: s.CREATE_DM_GROUP,
  [V.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
  [V.KeybindActions.SEARCH_GIFS]: p.SEARCH_GIFS,
  [V.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
  [V.KeybindActions.TOGGLE_HOTKEYS]: P.TOGGLE_HOTKEYS,
  [V.KeybindActions.JUMP_TO_FIRST_UNREAD]: T.JUMP_TO_FIRST_UNREAD,
  [V.KeybindActions.CREATE_GUILD]: d.CREATE_GUILD,
  [V.KeybindActions.UPLOAD_FILE]: H.UPLOAD_FILE,
  [V.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
  [V.KeybindActions.CALL_ACCEPT]: a.CALL_ACCEPT,
  [V.KeybindActions.CALL_START]: a.CALL_START,
  [V.KeybindActions.FOCUS_SEARCH]: E.FOCUS_SEARCH,
  [V.KeybindActions.JUMP_TO_CURRENT_CALL]: c.JUMP_TO_CURRENT_CALL,
  [V.KeybindActions.ZOOM_IN]: B.ZOOM_IN,
  [V.KeybindActions.ZOOM_OUT]: B.ZOOM_OUT,
  [V.KeybindActions.ZOOM_RESET]: B.ZOOM_RESET,
  [V.KeybindActions.OPEN_APP_DIRECTORY]: S.OPEN_APP_DIRECTORY,
  [V.KeybindActions.BROWSER_DEVTOOLS]: r.BROWSER_DEVTOOLS
};

function k() {
  let e = [{
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
    binds: W(V.KeybindActions.SERVER_PREV, V.KeybindActions.SERVER_NEXT),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
    binds: W(V.KeybindActions.CHANNEL_PREV, V.KeybindActions.CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
    binds: W(V.KeybindActions.NAVIGATE_BACK, V.KeybindActions.NAVIGATE_FORWARD),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
    binds: W(V.KeybindActions.UNREAD_PREV, V.KeybindActions.UNREAD_NEXT),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
    binds: W(V.KeybindActions.MENTION_CHANNEL_PREV, V.KeybindActions.MENTION_CHANNEL_NEXT),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
    binds: W(V.KeybindActions.JUMP_TO_CURRENT_CALL),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
    binds: W(V.KeybindActions.TOGGLE_PREVIOUS_GUILD),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
    binds: W(V.KeybindActions.QUICKSWITCHER_SHOW),
    group: "NAVIGATION"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
    binds: W(V.KeybindActions.CREATE_GUILD),
    group: "NAVIGATION",
    groupEnd: !0
  }, {
    description: F.default.Messages.DND_OPERATION_LABEL_START,
    binds: ["mod+d"],
    group: "DND"
  }, {
    description: F.default.Messages.DND_OPERATION_LABEL_MOVE,
    binds: ["up", "down"],
    group: "DND"
  }, {
    description: F.default.Messages.DND_OPERATION_LABEL_DROP,
    binds: ["spacebar", "enter"],
    group: "DND"
  }, {
    description: F.default.Messages.DND_OPERATION_LABEL_CANCEL,
    binds: ["esc"],
    group: "DND",
    groupEnd: !0
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
    binds: W(V.KeybindActions.MARK_SERVER_READ),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
    binds: W(V.KeybindActions.MARK_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
    binds: W(V.KeybindActions.CREATE_DM_GROUP),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
    binds: W(V.KeybindActions.TOGGLE_CHANNEL_PINS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
    binds: W(V.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
    binds: W(V.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
    binds: W(V.KeybindActions.TOGGLE_USERS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
    binds: W(V.KeybindActions.SEARCH_EMOJIS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
    binds: W(V.KeybindActions.SEARCH_GIFS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
    binds: W(V.KeybindActions.SEARCH_STICKERS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
    binds: W(V.KeybindActions.SCROLL_UP, V.KeybindActions.SCROLL_DOWN),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
    binds: W(V.KeybindActions.JUMP_TO_FIRST_UNREAD),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: W(V.KeybindActions.TEXTAREA_FOCUS),
    group: "CHAT"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
    binds: W(V.KeybindActions.UPLOAD_FILE),
    group: "CHAT",
    groupEnd: !0
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
    binds: W(V.KeybindActions.TOGGLE_MUTE),
    group: "VOICE_AND_VIDEO"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
    binds: W(V.KeybindActions.TOGGLE_DEAFEN),
    group: "VOICE_AND_VIDEO"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
    binds: W(V.KeybindActions.CALL_ACCEPT),
    group: "VOICE_AND_VIDEO"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
    binds: W(V.KeybindActions.MARK_CHANNEL_READ),
    group: "VOICE_AND_VIDEO"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
    binds: W(V.KeybindActions.CALL_START),
    group: "VOICE_AND_VIDEO",
    groupEnd: !0
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
    binds: W(V.KeybindActions.SEARCH_SOUNDBOARD),
    group: "VOICE_AND_VIDEO"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
    binds: W(V.KeybindActions.TOGGLE_HELP),
    group: "MISCELLANEOUS"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
    binds: W(V.KeybindActions.FOCUS_SEARCH),
    group: "MISCELLANEOUS"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
    binds: ["h+h+right+n+k"],
    group: "MISCELLANEOUS",
    groupEnd: !0
  }, {
    description: F.default.Messages.EDIT_MESSAGE,
    binds: ["e"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.DELETE_MESSAGE,
    binds: ["backspace"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.PIN_MESSAGE,
    binds: ["p"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.ADD_REACTION,
    binds: ["plus"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.MESSAGE_ACTION_REPLY,
    binds: ["r"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.COPY_TEXT,
    binds: ["mod+c"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.MARK_UNREAD,
    binds: ["alt+enter"],
    group: "MESSAGE"
  }, {
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
    binds: ["escape"],
    group: "MESSAGE",
    groupEnd: !0
  }, {
    description: F.default.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
    binds: W(V.KeybindActions.VIBE_WITH_WUMPUS),
    group: "MISCELLANEOUS"
  }];
  return l.MessageForwardingExperiment.getCurrentConfig({
    location: "keybinds"
  }, {
    autoTrackExposure: !1
  }).canForwardMessages && e.push({
    description: F.default.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
    binds: ["f"],
    group: "MESSAGE"
  }), e
}
t.default = X