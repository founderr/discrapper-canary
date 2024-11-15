n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(628692),
    o = n(845537),
    l = n(653309),
    u = n(705800),
    c = n(977000),
    d = n(882530);
function f(e, t, n) {
    var i, c;
    let { attributes: f, children: p, element: h, decorations: m } = e,
        g = (function (e) {
            return Object.entries(e)
                .filter((e) => {
                    let [t] = e;
                    return 'anchor' !== t && 'focus' !== t;
                })
                .map((e) => {
                    let [t, n] = e;
                    return !0 === n && t in l.U ? l.U[t] : null;
                })
                .filter((e) => null != e)
                .join(' ');
        })(null !== (i = null == m ? void 0 : m[0]) && void 0 !== i ? i : {});
    switch (h.type) {
        case 'line':
            if (null === (c = h.codeBlockState) || void 0 === c ? void 0 : c.isInCodeBlock)
                return (0, r.jsx)('div', {
                    className: u.codeLine,
                    spellCheck: null == h.codeBlockState || null == h.codeBlockState.lang,
                    ...f,
                    children: p
                });
            return (0, r.jsx)('div', {
                ...f,
                children: p
            });
        case 'blockQuote': {
            let e = a()(d.blockquoteContainer, d.slateBlockquoteContainer);
            return (0, r.jsxs)('div', {
                ...f,
                className: e,
                children: [
                    (0, r.jsx)('span', {
                        contentEditable: !1,
                        className: d.blockquoteDivider
                    }),
                    (0, r.jsx)('blockquote', { children: p })
                ]
            });
        }
        case 'emoji':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.dy, { emoji: h.emoji }), p]
            });
        case 'customEmoji':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.wP, { emoji: h.emoji }), p]
            });
        case 'textMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Ox, {
                        text: h.name,
                        channelId: n,
                        guildId: t
                    }),
                    p
                ]
            });
        case 'userMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.cB, {
                        id: h.userId,
                        channelId: n,
                        guildId: t
                    }),
                    p
                ]
            });
        case 'roleMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Vq, {
                        id: h.roleId,
                        guildId: t
                    }),
                    p
                ]
            });
        case 'channelMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.Io, { id: h.channelId }), p]
            });
        case 'staticRouteLink':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.NY, {
                        id: h.id,
                        itemId: h.itemId,
                        guildId: t
                    }),
                    p
                ]
            });
        case 'soundboard':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(s.ku, { soundId: h.soundId }), p]
            });
        case 'commandMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Wf, {
                        text: h.commandName,
                        id: h.commandId
                    }),
                    p
                ]
            });
        case 'timestamp':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.EK, { timestamp: h.parsed }), p]
            });
        default:
            return null;
    }
}
let _ = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = a()(c.inlineElement, c.inlineVoid, t);
    return (0, r.jsx)('span', {
        ...n,
        className: s,
        contentEditable: !1,
        children: i
    });
};
