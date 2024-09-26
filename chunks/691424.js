n.d(t, {
    Z: function () {
        return V;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(302454);
var u = n(481060),
    c = n(570140),
    d = n(794295),
    _ = n(663993),
    E = n(95398),
    f = n(339085),
    h = n(779699),
    p = n(359875),
    m = n(124072),
    I = n(891984),
    T = n(695503),
    g = n(628692),
    S = n(590956),
    A = n(703656),
    v = n(271383),
    N = n(430824),
    O = n(572004),
    R = n(746878),
    C = n(285063),
    y = n(943362),
    L = n(551452),
    b = n(69626),
    D = n(142990),
    M = n(532901),
    P = n(981631),
    U = n(176505),
    w = n(554034),
    x = n(112864);
function G(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, r, a) {
            let { key: o } = a;
            return e.src
                ? (0, i.jsx)(
                      S.c,
                      {
                          node: e,
                          tooltipPosition: t,
                          enableClick: n
                      },
                      o
                  )
                : (0, i.jsx)('span', { children: e.surrogate }, o);
        }
    };
}
function k(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, r, a) {
            let { key: o, guildId: s, isInteracting: l } = a,
                u = f.ZP.getDisambiguatedEmojiContext(s).getById(e.emojiId);
            if (null != u) {
                let t = u.require_colons;
                e = {
                    ...e,
                    name: t ? ':'.concat(u.name, ':') : u.name
                };
            }
            return (0, i.jsx)(
                S.Y,
                {
                    isInteracting: l,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n
                },
                o
            );
        }
    };
}
function B(e, t, n) {
    let r = N.Z.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.hasFeature(P.oNc.COMMUNITY) && (0, A.uL)(P.Z5c.CHANNEL(e, t));
    };
    switch (t) {
        case 'home':
        case 'guide':
            i(U.oC.GUILD_HOME);
            break;
        case 'browse':
            i(U.oC.CHANNEL_BROWSER);
            break;
        case 'customize':
            i(U.oC.CUSTOMIZE_COMMUNITY);
            break;
        case 'linked-roles':
            if (null != n) {
                let t = v.ZP.getSelfMember(e);
                if (null == t) return null;
                let r = N.Z.getRoles(e)[n];
                null == r || t.roles.includes(r.id)
                    ? c.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e
                      })
                    : c.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e,
                          role: r
                      });
            } else
                c.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                    guildId: e
                });
    }
}
function F(e) {
    let { text: t } = e,
        [n, r] = a.useState(!1),
        o = () => {
            try {
                (0, O.JG)(t), r(!0);
            } catch (e) {
                r(!1);
            }
        };
    return (0, i.jsx)(u.Clickable, {
        onClick: o,
        children: n
            ? (0, i.jsx)(u.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(u.CopyIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
n(504833);
let Z = {
    blockQuote: {
        react: (e, t, n) =>
            (0, i.jsxs)(
                'div',
                {
                    className: w.blockquoteContainer,
                    children: [(0, i.jsx)('div', { className: w.blockquoteDivider }), (0, i.jsx)('blockquote', { children: t(e.content, n) })]
                },
                n.key
            )
    },
    s: { react: (e, t, n) => (0, i.jsx)('s', { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, i.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                n.key
            )
    },
    paragraph: { react: (e, t, n) => (0, i.jsx)('p', { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, i.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, R.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, r) {
            let a = () =>
                (0, i.jsx)('code', {
                    className: s()(x.scrollbarGhostHairline, 'hljs'),
                    children: (0, R.S)(e, t, r)
                });
            return (0, i.jsx)(
                'pre',
                {
                    children: (0, i.jsxs)('div', {
                        className: w.codeContainer,
                        children: [
                            O.wS
                                ? (0, i.jsx)('div', {
                                      className: w.codeActions,
                                      children: (0, i.jsx)(F, { text: e.content })
                                  })
                                : null,
                            (0, i.jsx)(_.GI, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                webpackId: 364964,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, i.jsx)('code', {
                                                  className: s()(x.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              });
                                    }
                                }
                            })
                        ]
                    })
                },
                r.key
            );
        }
    },
    text: { react: (e, t, n) => ('string' == typeof e.content ? (0, i.jsx)('span', { children: e.content }, n.key) : (0, i.jsx)('span', { children: t(e.content, n) }, n.key)) },
    spoiler: {
        react: (e, t, n) =>
            (0, i.jsx)(
                E.Z,
                {
                    type: E.Z.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== d.Z || t ? e : a.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, i.jsx)(g.Z, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
    },
    staticRouteLink: {
        react(e, t, n) {
            let r = () => {
                B(e.guildId, e.id, e.itemId);
            };
            return (0, R.k)(e.id)
                ? (0, i.jsxs)(
                      m.Z,
                      {
                          role: 'link',
                          onClick: r,
                          className: 'channelMention',
                          iconType: e.id,
                          children: [t(e.mainContent, n), null != e.itemContent ? (0, i.jsx)(I.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
                      },
                      n.key
                  )
                : null;
        }
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(C.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? 'ol' : 'ul',
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, l.reactElement)(r, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? w.inlineFormat : null,
                style: { '--totalCharacters': i },
                children: e.items.map((e, r) => {
                    let i = (0, l.reactElement)('span', ''.concat(n.key, '-').concat(r, '-innerSpan'), { children: t(e, n) });
                    return (0, l.reactElement)('li', ''.concat(n.key, '-').concat(r) + r, { children: i });
                })
            });
        }
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, l.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, l.reactElement)('h' + e.level, (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? w.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let r = N.Z.getGuild(e.guildId);
            return (0, i.jsx)(
                p.Z,
                {
                    guild: r,
                    children: (0, R.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, i.jsx)(
                h.Z,
                {
                    iconType: e.iconType,
                    children: (0, R.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, i.jsx)(T.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, l.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, l.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? w.inlineFormat : null
            });
        }
    }
};
function V(e) {
    return {
        ...Z,
        link: (0, M.Z)(e),
        devLink: (0, D.Z)(e),
        emoji: G(e),
        customEmoji: k(e),
        channelMention: (0, L.Z)(e),
        commandMention: (0, b.ZP)(e),
        attachmentLink: (0, y.Z)(e)
    };
}
