n.d(t, {
    I: function () {
        return A;
    },
    O: function () {
        return r;
    }
});
var r,
    i = n(873546),
    a = n(703558);
!(function (e) {
    (e[(e.TOOLTIP = 0)] = 'TOOLTIP'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NONE = 2)] = 'NONE');
})(r || (r = {}));
let o = {
        analyticsName: 'normal',
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0
        },
        commands: { enabled: !0 },
        drafts: {
            type: a.d.ChannelMessage,
            commandType: a.d.SlashCommand,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
            autoSuggest: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: i.tq,
            disableEnterToSubmit: i.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        sedReplace: !0
    },
    s = {
        analyticsName: 'overlay',
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0
        },
        drafts: {
            type: a.d.ChannelMessage,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: i.tq,
            disableEnterToSubmit: i.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0
    },
    l = {
        analyticsName: 'sidebar',
        attachments: !0,
        autocomplete: { addReactionShortcut: !0 },
        commands: { enabled: !0 },
        disableAutoFocus: !0,
        drafts: {
            type: a.d.ChannelMessage,
            commandType: a.d.SlashCommand
        },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        stickers: {
            allowSending: !0,
            autoSuggest: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: i.tq,
            disableEnterToSubmit: i.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 }
    },
    u = {
        analyticsName: 'edit',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0
    },
    c = {
        analyticsName: 'forum',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0
    },
    d = {
        analyticsName: 'voice_channel_status',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        markdown: {
            disableCodeBlocks: !0,
            disableBlockQuotes: !0
        },
        showCharacterCount: !0
    },
    _ = {
        analyticsName: 'thread_creation',
        attachments: !0,
        drafts: { type: a.d.FirstThreadMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireCreateTherads: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            button: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        hideAttachmentArea: !0,
        upsellLongMessages: { iconOnly: !0 }
    },
    E = {
        analyticsName: 'create_forum_post',
        attachments: !0,
        drafts: { type: a.d.FirstThreadMessage },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        hideAttachmentArea: !0,
        uploadLongMessages: !0
    },
    f = {
        analyticsName: 'create_poll',
        attachments: !0,
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    },
    h = {
        analyticsName: 'user_profile',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0
        },
        toolbarType: 2
    },
    p = {
        analyticsName: 'user_profile_reply',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0
        },
        toolbarType: 2
    },
    m = {
        analyticsName: 'profile_bio_input',
        drafts: { type: a.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    I = {
        analyticsName: 'custom_gift_type',
        drafts: { type: a.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    T = {
        analyticsName: 'rules_input',
        drafts: { type: a.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0
    },
    g = {
        analyticsName: 'forum_channel_guidelines',
        drafts: { type: a.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0,
        toolbarType: 1
    },
    S = {
        analyticsName: 'atomic_reator_reply_input',
        drafts: { type: a.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    A = {
        NORMAL: o,
        OVERLAY: s,
        SIDEBAR: l,
        EDIT: u,
        FORM: c,
        VOICE_CHANNEL_STATUS: d,
        THREAD_CREATION: _,
        USER_PROFILE: h,
        USER_PROFILE_REPLY: p,
        PROFILE_BIO_INPUT: m,
        CUSTOM_GIFT: I,
        RULES_INPUT: T,
        CREATE_FORUM_POST: E,
        CREATE_POLL: f,
        FORUM_CHANNEL_GUIDELINES: g,
        ATOMIC_REACTOR_REPLY_INPUT: S,
        FORWARD_MESSAGE_INPUT: {
            analyticsName: 'forward_message_input',
            drafts: { type: a.d.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !0 },
            submit: { useDisabledStylesOnSubmit: !0 },
            users: { allowMentioning: !0 },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0
        }
    };
