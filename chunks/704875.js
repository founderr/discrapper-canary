n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(845537),
    o = n(653309),
    l = n(631853),
    u = n(896061),
    c = n(554034);
function d(e, t, n) {
    var i, u;
    let { attributes: d, children: _, element: h, decorations: p } = e,
        m = (function (e) {
            return Object.entries(e)
                .filter((e) => {
                    let [t] = e;
                    return 'anchor' !== t && 'focus' !== t;
                })
                .map((e) => {
                    let [t, n] = e;
                    return !0 === n && t in o.U ? o.U[t] : null;
                })
                .filter((e) => null != e)
                .join(' ');
        })(null !== (i = null == p ? void 0 : p[0]) && void 0 !== i ? i : {});
    switch (h.type) {
        case 'line':
            if (null === (u = h.codeBlockState) || void 0 === u ? void 0 : u.isInCodeBlock)
                return (0, r.jsx)('div', {
                    className: l.codeLine,
                    spellCheck: null == h.codeBlockState || null == h.codeBlockState.lang,
                    ...d,
                    children: _
                });
            return (0, r.jsx)('div', {
                ...d,
                children: _
            });
        case 'blockQuote': {
            let e = a()(c.blockquoteContainer, c.slateBlockquoteContainer);
            return (0, r.jsxs)('div', {
                ...d,
                className: e,
                children: [
                    (0, r.jsx)('span', {
                        contentEditable: !1,
                        className: c.blockquoteDivider
                    }),
                    (0, r.jsx)('blockquote', { children: _ })
                ]
            });
        }
        case 'emoji':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [(0, r.jsx)(s.dy, { emoji: h.emoji }), _]
            });
        case 'customEmoji':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [(0, r.jsx)(s.wP, { emoji: h.emoji }), _]
            });
        case 'textMention':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [
                    (0, r.jsx)(s.Ox, {
                        text: h.name,
                        channelId: n,
                        guildId: t
                    }),
                    _
                ]
            });
        case 'userMention':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [
                    (0, r.jsx)(s.cB, {
                        id: h.userId,
                        channelId: n,
                        guildId: t
                    }),
                    _
                ]
            });
        case 'roleMention':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [
                    (0, r.jsx)(s.Vq, {
                        id: h.roleId,
                        guildId: t
                    }),
                    _
                ]
            });
        case 'channelMention':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [(0, r.jsx)(s.Io, { id: h.channelId }), _]
            });
        case 'staticRouteLink':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [
                    (0, r.jsx)(s.NY, {
                        id: h.id,
                        itemId: h.itemId,
                        guildId: t
                    }),
                    _
                ]
            });
        case 'soundboard':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [(0, r.jsx)(s.mb, { id: h.soundId }), _]
            });
        case 'commandMention':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [
                    (0, r.jsx)(s.Wf, {
                        text: h.commandName,
                        id: h.commandId
                    }),
                    _
                ]
            });
        case 'timestamp':
            return (0, r.jsxs)(f, {
                attributes: d,
                className: m,
                children: [(0, r.jsx)(s.EK, { timestamp: h.parsed }), _]
            });
        default:
            return null;
    }
}
let f = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = a()(u.inlineElement, u.inlineVoid, t);
    return (0, r.jsx)('span', {
        ...n,
        className: s,
        contentEditable: !1,
        children: i
    });
};
