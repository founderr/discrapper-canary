o.d(t, {
    Z: function () {
        return r;
    }
});
var i = o(200651);
o(192379);
var n = o(442837),
    l = o(481060),
    a = o(596454),
    s = o(339085),
    d = o(501915);
function r(e) {
    let { reactionEmoji: t } = e,
        o = (0, n.e7)([s.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? s.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsxs)('div', {
                className: d.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.placeholderLines,
                        children: [
                            (0, i.jsx)(c, {
                                width: '100%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(c, {
                                width: '80%',
                                marginBottom: 16
                            }),
                            (0, i.jsx)(c, {
                                width: '50%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(c, {
                                width: '60%',
                                marginBottom: 16
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: d.placeholderMedia })
                ]
            }),
            (0, i.jsxs)('div', {
                className: d.footer,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.reaction,
                        children: [
                            null != t
                                ? (0, i.jsx)(a.Z, {
                                      className: d.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == o ? void 0 : o.animated)
                                  })
                                : (0, i.jsx)(l.ReactionIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: d.reactionEmote
                                  }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: 17
                            })
                        ]
                    }),
                    (0, i.jsx)(c, {
                        width: '24px',
                        marginBottom: 0
                    }),
                    (0, i.jsx)('div', { className: d.dot }),
                    (0, i.jsx)(c, {
                        width: '24px',
                        marginBottom: 0
                    })
                ]
            })
        ]
    });
}
function c(e) {
    let { width: t, marginBottom: o } = e;
    return (0, i.jsx)('div', {
        className: d.placeholderLine,
        style: {
            width: t,
            marginBottom: o
        }
    });
}
