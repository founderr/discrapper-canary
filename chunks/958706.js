"use strict";
var r, i, o, l, u, a, s, E;
n.r(t), n.d(t, {
  EMOJI_MAX_SLOTS: function() {
    return _
  },
  EMOJI_MAX_LENGTH: function() {
    return c
  },
  EMOJI_RE: function() {
    return d
  },
  EMOJI_MAX_FILESIZE_KB: function() {
    return T
  },
  EMOJI_MAX_FILESIZE: function() {
    return A
  },
  EmojiSprites: function() {
    return r
  },
  EmojiDisabledReasons: function() {
    return i
  },
  EmojiIntention: function() {
    return o
  },
  EmojiInteractionPoint: function() {
    return l
  },
  isExternalEmojiAllowedForIntention: function() {
    return S
  }
}), n("222007");
let _ = 50,
  c = 32,
  d = /[^a-zA-Z0-9_]/g,
  T = 256,
  A = 1024 * T;
(u = r || (r = {}))[u.NonDiversityPerRow = 42] = "NonDiversityPerRow", u[u.DiversityPerRow = 10] = "DiversityPerRow", u[u.PickerPerRow = 11] = "PickerPerRow", u[u.PickerCount = 50] = "PickerCount", (a = i || (i = {}))[a.DISALLOW_EXTERNAL = 0] = "DISALLOW_EXTERNAL", a[a.GUILD_SUBSCRIPTION_UNAVAILABLE = 1] = "GUILD_SUBSCRIPTION_UNAVAILABLE", a[a.PREMIUM_LOCKED = 2] = "PREMIUM_LOCKED", a[a.ONLY_GUILD_EMOJIS_ALLOWED = 3] = "ONLY_GUILD_EMOJIS_ALLOWED", a[a.ROLE_SUBSCRIPTION_LOCKED = 4] = "ROLE_SUBSCRIPTION_LOCKED", a[a.ROLE_SUBSCRIPTION_UNAVAILABLE = 5] = "ROLE_SUBSCRIPTION_UNAVAILABLE", (s = o || (o = {}))[s.REACTION = 0] = "REACTION", s[s.STATUS = 1] = "STATUS", s[s.COMMUNITY_CONTENT = 2] = "COMMUNITY_CONTENT", s[s.CHAT = 3] = "CHAT", s[s.GUILD_STICKER_RELATED_EMOJI = 4] = "GUILD_STICKER_RELATED_EMOJI", s[s.GUILD_ROLE_BENEFIT_EMOJI = 5] = "GUILD_ROLE_BENEFIT_EMOJI", s[s.COMMUNITY_CONTENT_ONLY = 6] = "COMMUNITY_CONTENT_ONLY", s[s.SOUNDBOARD = 7] = "SOUNDBOARD", s[s.VOICE_CHANNEL_TOPIC = 8] = "VOICE_CHANNEL_TOPIC", s[s.GIFT = 9] = "GIFT", s[s.AUTO_SUGGESTION = 10] = "AUTO_SUGGESTION";
let I = new Set([2, 6, 4, 5, 7, 9]);

function S(e) {
  return !I.has(e)
}(E = l || (l = {})).EmojiButtonMouseEntered = "EMOJI_BUTTON_MOUSE_ENTERED", E.EmojiButtonFocused = "EMOJI_BUTTON_FOCUSED", E.ChatInputExpressionPressed = "CHAT_INPUT_EXPRESSION_PRESSED", E.ChatInputSuggestionsShown = "CHAT_INPUT_SUGGESTIONS_SHOWN", E.SearchEmojiKeybindPressed = "SEARCH_EMOJI_KEYBIND_PRESSED", E.AutocompleteTyped = "AUTOCOMPLETE_TYPED", E.AutocompleteWrapperShown = "AUTOCOMPLETE_WRAPPER_SHOWN", E.GuildLeaveModalShown = "GUILD_LEAVE_MODAL_SHOWN", E.AddReactionPopoutMouseEntered = "ADD_REACTION_POPOUT_MOUSE_ENTERED", E.AddReactionPopoutFocused = "ADD_REACTION_POPOUT_FOCUSED", E.MessageContextMenuMouseEntered = "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", E.EmojiPickerActionSheetOpened = "EMOJI_PICKER_ACTION_SHEET_OPENED", E.TrackOpenPopoutUsed = "TRACK_OPEN_POPOUT_USED", E.CustomEmojiTooltipShown = "CUSTOM_EMOJI_TOOLTIP_SHOWN"