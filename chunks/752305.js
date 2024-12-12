r.d(n, {
    H2: function () {
        return a;
    },
    JM: function () {
        return l;
    },
    VI: function () {
        return u;
    },
    eK: function () {
        return s;
    }
});
var i = r(411104);
function a() {
    return {
        textValue: '',
        richValue: [
            {
                type: 'line',
                children: [{ text: '' }]
            }
        ]
    };
}
function s(e) {
    return {
        textValue: e,
        richValue: l(e)
    };
}
let o = Object.freeze([
    Object.freeze({
        type: 'line',
        children: Object.freeze([Object.freeze({ text: '' })])
    })
]);
function l(e) {
    return '' !== e
        ? e.split('\n').map((e) => ({
              type: 'line',
              children: [{ text: e }]
          }))
        : o;
}
function u(e) {
    switch (e.type) {
        case 'userMention':
            return {
                type: 'userMention',
                userId: e.userId
            };
        case 'channelMention':
            return {
                type: 'channelMention',
                channelId: e.channelId
            };
        case 'soundboard':
            return {
                type: 'soundboard',
                guildId: e.guildId,
                soundId: e.soundId
            };
        case 'roleMention':
            return {
                type: 'roleMention',
                roleId: e.roleId
            };
        case 'textMention':
            return {
                type: 'textMention',
                text: e.name
            };
        case 'emoji':
            return {
                type: 'emoji',
                name: e.emoji.name,
                surrogate: e.emoji.surrogate
            };
        case 'customEmoji':
            return {
                type: 'customEmoji',
                emojiId: e.emoji.emojiId,
                name: e.emoji.name,
                animated: e.emoji.animated
            };
        case 'testInlineVoid':
            throw Error('Unable to convert test types');
    }
    return null;
}
