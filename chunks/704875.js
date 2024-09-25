n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(845537),
    l = n(653309),
    u = n(631853),
    c = n(896061),
    d = n(554034);
function _(e, t, n) {
    var r, a;
    let { attributes: l, children: c, element: _, decorations: h } = e,
        p = f(null !== (r = null == h ? void 0 : h[0]) && void 0 !== r ? r : {});
    switch (_.type) {
        case 'line':
            if (null === (a = _.codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock)
                return (0, i.jsx)('div', {
                    className: u.codeLine,
                    spellCheck: null == _.codeBlockState || null == _.codeBlockState.lang,
                    ...l,
                    children: c
                });
            return (0, i.jsx)('div', {
                ...l,
                children: c
            });
        case 'blockQuote': {
            let e = o()(d.blockquoteContainer, d.slateBlockquoteContainer);
            return (0, i.jsxs)('div', {
                ...l,
                className: e,
                children: [
                    (0, i.jsx)('span', {
                        contentEditable: !1,
                        className: d.blockquoteDivider
                    }),
                    (0, i.jsx)('blockquote', { children: c })
                ]
            });
        }
        case 'emoji':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [(0, i.jsx)(s.dy, { emoji: _.emoji }), c]
            });
        case 'customEmoji':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [(0, i.jsx)(s.wP, { emoji: _.emoji }), c]
            });
        case 'textMention':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [
                    (0, i.jsx)(s.Ox, {
                        text: _.name,
                        channelId: n,
                        guildId: t
                    }),
                    c
                ]
            });
        case 'userMention':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [
                    (0, i.jsx)(s.cB, {
                        id: _.userId,
                        channelId: n,
                        guildId: t
                    }),
                    c
                ]
            });
        case 'roleMention':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [
                    (0, i.jsx)(s.Vq, {
                        id: _.roleId,
                        guildId: t
                    }),
                    c
                ]
            });
        case 'channelMention':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [(0, i.jsx)(s.Io, { id: _.channelId }), c]
            });
        case 'staticRouteLink':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [
                    (0, i.jsx)(s.NY, {
                        id: _.id,
                        itemId: _.itemId,
                        guildId: t
                    }),
                    c
                ]
            });
        case 'soundboard':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [(0, i.jsx)(s.mb, { id: _.soundId }), c]
            });
        case 'commandMention':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [
                    (0, i.jsx)(s.Wf, {
                        text: _.commandName,
                        id: _.commandId
                    }),
                    c
                ]
            });
        case 'timestamp':
            return (0, i.jsxs)(E, {
                attributes: l,
                className: p,
                children: [(0, i.jsx)(s.EK, { timestamp: _.parsed }), c]
            });
        default:
            return null;
    }
}
let E = (e) => {
    let { className: t, attributes: n, children: r } = e,
        a = o()(c.inlineElement, c.inlineVoid, t);
    return (0, i.jsx)('span', {
        ...n,
        className: a,
        contentEditable: !1,
        children: r
    });
};
function f(e) {
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
}
