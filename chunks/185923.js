n.d(t, {
    $U: function () {
        return E;
    },
    DC: function () {
        return r;
    },
    Gt: function () {
        return h;
    },
    Hz: function () {
        return a;
    },
    Yc: function () {
        return u;
    },
    Z5: function () {
        return i;
    },
    h_: function () {
        return _;
    },
    jZ: function () {
        return l;
    },
    qR: function () {
        return o;
    },
    sW: function () {
        return c;
    },
    xG: function () {
        return d;
    }
});
var r,
    i,
    a,
    o,
    s = n(47120);
let l = 50,
    u = 32,
    c = /[^a-zA-Z0-9_]/g,
    d = 256,
    _ = 262144,
    E = 48;
!(function (e) {
    (e[(e.NonDiversityPerRow = 42)] = 'NonDiversityPerRow'), (e[(e.DiversityPerRow = 10)] = 'DiversityPerRow'), (e[(e.PickerPerRow = 11)] = 'PickerPerRow'), (e[(e.PickerCount = 50)] = 'PickerCount');
})(r || (r = {})),
    !(function (e) {
        (e[(e.DISALLOW_EXTERNAL = 0)] = 'DISALLOW_EXTERNAL'), (e[(e.GUILD_SUBSCRIPTION_UNAVAILABLE = 1)] = 'GUILD_SUBSCRIPTION_UNAVAILABLE'), (e[(e.PREMIUM_LOCKED = 2)] = 'PREMIUM_LOCKED'), (e[(e.ONLY_GUILD_EMOJIS_ALLOWED = 3)] = 'ONLY_GUILD_EMOJIS_ALLOWED'), (e[(e.ROLE_SUBSCRIPTION_LOCKED = 4)] = 'ROLE_SUBSCRIPTION_LOCKED'), (e[(e.ROLE_SUBSCRIPTION_UNAVAILABLE = 5)] = 'ROLE_SUBSCRIPTION_UNAVAILABLE');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.REACTION = 0)] = 'REACTION'), (e[(e.STATUS = 1)] = 'STATUS'), (e[(e.COMMUNITY_CONTENT = 2)] = 'COMMUNITY_CONTENT'), (e[(e.CHAT = 3)] = 'CHAT'), (e[(e.GUILD_STICKER_RELATED_EMOJI = 4)] = 'GUILD_STICKER_RELATED_EMOJI'), (e[(e.GUILD_ROLE_BENEFIT_EMOJI = 5)] = 'GUILD_ROLE_BENEFIT_EMOJI'), (e[(e.SOUNDBOARD = 6)] = 'SOUNDBOARD'), (e[(e.VOICE_CHANNEL_TOPIC = 7)] = 'VOICE_CHANNEL_TOPIC'), (e[(e.GIFT = 8)] = 'GIFT'), (e[(e.AUTO_SUGGESTION = 9)] = 'AUTO_SUGGESTION'), (e[(e.POLLS = 10)] = 'POLLS'), (e[(e.PROFILE = 11)] = 'PROFILE');
    })(a || (a = {}));
let f = new Set([2, 4, 5, 6, 8]);
function h(e) {
    return !f.has(e);
}
!(function (e) {
    (e.EmojiButtonMouseEntered = 'EMOJI_BUTTON_MOUSE_ENTERED'), (e.EmojiButtonFocused = 'EMOJI_BUTTON_FOCUSED'), (e.ChatInputExpressionPressed = 'CHAT_INPUT_EXPRESSION_PRESSED'), (e.ChatInputSuggestionsShown = 'CHAT_INPUT_SUGGESTIONS_SHOWN'), (e.SearchEmojiKeybindPressed = 'SEARCH_EMOJI_KEYBIND_PRESSED'), (e.AutocompleteTyped = 'AUTOCOMPLETE_TYPED'), (e.AutocompleteWrapperShown = 'AUTOCOMPLETE_WRAPPER_SHOWN'), (e.GuildLeaveModalShown = 'GUILD_LEAVE_MODAL_SHOWN'), (e.AddReactionPopoutMouseEntered = 'ADD_REACTION_POPOUT_MOUSE_ENTERED'), (e.AddReactionPopoutFocused = 'ADD_REACTION_POPOUT_FOCUSED'), (e.MessageContextMenuMouseEntered = 'MESSAGE_CONTEXT_MENU_MOUSE_ENTERED'), (e.EmojiPickerActionSheetOpened = 'EMOJI_PICKER_ACTION_SHEET_OPENED'), (e.TrackOpenPopoutUsed = 'TRACK_OPEN_POPOUT_USED'), (e.CustomEmojiTooltipShown = 'CUSTOM_EMOJI_TOOLTIP_SHOWN');
})(o || (o = {}));
