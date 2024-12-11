n.d(t, {
    Ie: function () {
        return N;
    },
    OW: function () {
        return a;
    },
    gy: function () {
        return s;
    }
});
var r,
    i,
    a,
    s,
    o = n(873546),
    l = n(703558);
((r = a || (a = {}))[(r.TOOLTIP = 0)] = 'TOOLTIP'), (r[(r.STATIC = 1)] = 'STATIC'), (r[(r.NONE = 2)] = 'NONE'), ((i = s || (s = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.INLINE = 1)] = 'INLINE');
let u = {
        analyticsName: 'normal',
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0
        },
        commands: { enabled: !0 },
        drafts: {
            type: l.d.ChannelMessage,
            commandType: l.d.SlashCommand,
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
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: o.tq,
            disableEnterToSubmit: o.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        sedReplace: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    c = {
        analyticsName: 'overlay',
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0
        },
        drafts: {
            type: l.d.ChannelMessage,
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
            ignorePreference: o.tq,
            disableEnterToSubmit: o.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    d = {
        analyticsName: 'sidebar',
        attachments: !0,
        autocomplete: { addReactionShortcut: !0 },
        commands: { enabled: !0 },
        disableAutoFocus: !0,
        drafts: {
            type: l.d.ChannelMessage,
            commandType: l.d.SlashCommand
        },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        stickers: {
            allowSending: !0,
            autoSuggest: !0
        },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: o.tq,
            disableEnterToSubmit: o.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 },
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    f = {
        analyticsName: 'edit',
        drafts: { type: l.d.ChannelMessage },
        emojis: { button: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0
    },
    _ = {
        analyticsName: 'forum',
        drafts: { type: l.d.ChannelMessage },
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
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    p = {
        analyticsName: 'voice_channel_status',
        drafts: { type: l.d.ChannelMessage },
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
        showCharacterCount: !0,
        layout: 1
    },
    h = {
        analyticsName: 'thread_creation',
        attachments: !0,
        drafts: { type: l.d.FirstThreadMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
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
    m = {
        analyticsName: 'create_forum_post',
        attachments: !0,
        drafts: { type: l.d.FirstThreadMessage },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        hideAttachmentArea: !0,
        uploadLongMessages: !0,
        showSlowmodeIndicator: !0
    },
    g = {
        analyticsName: 'create_poll',
        attachments: !0,
        drafts: { type: l.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    },
    E = {
        analyticsName: 'user_profile',
        drafts: { type: l.d.ChannelMessage },
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
    v = {
        analyticsName: 'overlay_inline_reply',
        drafts: { type: l.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !1,
            clearOnSubmit: !0
        },
        toolbarType: 2
    },
    I = {
        analyticsName: 'user_profile_reply',
        drafts: { type: l.d.ChannelMessage },
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
    T = {
        analyticsName: 'profile_bio_input',
        drafts: { type: l.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    b = {
        analyticsName: 'custom_gift_type',
        drafts: { type: l.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    S = {
        analyticsName: 'rules_input',
        drafts: { type: l.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0
    },
    y = {
        analyticsName: 'forum_channel_guidelines',
        drafts: { type: l.d.ChannelMessage },
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
    A = {
        analyticsName: 'atomic_reator_reply_input',
        drafts: { type: l.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    N = {
        NORMAL: u,
        OVERLAY: c,
        OVERLAY_INLINE_REPLY: v,
        SIDEBAR: d,
        EDIT: f,
        FORM: _,
        VOICE_CHANNEL_STATUS: p,
        THREAD_CREATION: h,
        USER_PROFILE: E,
        USER_PROFILE_REPLY: I,
        PROFILE_BIO_INPUT: T,
        CUSTOM_GIFT: b,
        RULES_INPUT: S,
        CREATE_FORUM_POST: m,
        CREATE_POLL: g,
        FORUM_CHANNEL_GUIDELINES: y,
        ATOMIC_REACTOR_REPLY_INPUT: A,
        FORWARD_MESSAGE_INPUT: {
            analyticsName: 'forward_message_input',
            drafts: { type: l.d.ChannelMessage },
            emojis: { button: !0 },
            soundmoji: { allowSending: !0 },
            permissions: { requireSendMessages: !0 },
            submit: { useDisabledStylesOnSubmit: !0 },
            users: { allowMentioning: !0 },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1
        }
    };
