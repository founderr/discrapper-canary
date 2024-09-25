n.d(t, {
    H2: function () {
        return i;
    },
    JM: function () {
        return s;
    },
    VI: function () {
        return l;
    },
    eK: function () {
        return a;
    }
});
var r = n(411104);
function i() {
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
function a(e) {
    return {
        textValue: e,
        richValue: s(e)
    };
}
let o = Object.freeze([
    Object.freeze({
        type: 'line',
        children: Object.freeze([Object.freeze({ text: '' })])
    })
]);
function s(e) {
    return '' !== e
        ? e.split('\n').map((e) => ({
              type: 'line',
              children: [{ text: e }]
          }))
        : o;
}
function l(e) {
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
