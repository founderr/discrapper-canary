n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(302454),
    l = n(481060),
    u = n(570140),
    c = n(794295),
    d = n(663993),
    _ = n(95398),
    E = n(339085),
    f = n(779699),
    h = n(359875),
    p = n(124072),
    I = n(692629),
    m = n(695503),
    T = n(628692),
    S = n(590956),
    g = n(703656),
    A = n(271383),
    N = n(430824),
    R = n(572004),
    O = n(746878),
    v = n(285063),
    C = n(943362),
    L = n(551452),
    D = n(69626),
    y = n(142990),
    b = n(532901),
    M = n(981631),
    P = n(176505),
    U = n(554034),
    w = n(112864);
n(504833);
function x(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsx)(l.Clickable, {
        onClick: () => {
            try {
                (0, R.JG)(t), a(!0);
            } catch (e) {
                a(!1);
            }
        },
        children: n
            ? (0, r.jsx)(l.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.CopyIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
let G = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: U.blockquoteContainer,
                    children: [(0, r.jsx)('div', { className: U.blockquoteDivider }), (0, r.jsx)('blockquote', { children: t(e.content, n) })]
                },
                n.key
            )
    },
    s: { react: (e, t, n) => (0, r.jsx)('s', { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                n.key
            )
    },
    paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, O.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, i) {
            let a = () =>
                (0, r.jsx)('code', {
                    className: s()(w.scrollbarGhostHairline, 'hljs'),
                    children: (0, O.S)(e, t, i)
                });
            return (0, r.jsx)(
                'pre',
                {
                    children: (0, r.jsxs)('div', {
                        className: U.codeContainer,
                        children: [
                            R.wS
                                ? (0, r.jsx)('div', {
                                      className: U.codeActions,
                                      children: (0, r.jsx)(x, { text: e.content })
                                  })
                                : null,
                            (0, r.jsx)(d.GI, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                webpackId: 364964,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, r.jsx)('code', {
                                                  className: s()(w.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              });
                                    }
                                }
                            })
                        ]
                    })
                },
                i.key
            );
        }
    },
    text: { react: (e, t, n) => ('string' == typeof e.content ? (0, r.jsx)('span', { children: e.content }, n.key) : (0, r.jsx)('span', { children: t(e.content, n) }, n.key)) },
    spoiler: {
        react: (e, t, n) =>
            (0, r.jsx)(
                _.Z,
                {
                    type: _.Z.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== c.Z || t ? e : i.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, r.jsx)(T.Z, {
                channelId: e.channelId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, O.k)(e.id)
                ? (0, r.jsxs)(
                      p.Z,
                      {
                          role: 'link',
                          onClick: () => {
                              !(function (e, t, n) {
                                  let r = N.Z.getGuild(e);
                                  if (null == e || null == r) return;
                                  let i = (t) => {
                                      r.hasFeature(M.oNc.COMMUNITY) && (0, g.uL)(M.Z5c.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case 'home':
                                      case 'guide':
                                          i(P.oC.GUILD_HOME);
                                          break;
                                      case 'browse':
                                          i(P.oC.CHANNEL_BROWSER);
                                          break;
                                      case 'customize':
                                          i(P.oC.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case 'linked-roles':
                                          if (null != n) {
                                              let t = A.ZP.getSelfMember(e);
                                              if (null == t) return;
                                              let r = N.Z.getRoles(e)[n];
                                              null == r || t.roles.includes(r.id)
                                                  ? u.Z.dispatch({
                                                        type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                        guildId: e
                                                    })
                                                  : u.Z.dispatch({
                                                        type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                        guildId: e,
                                                        role: r
                                                    });
                                          } else
                                              u.Z.dispatch({
                                                  type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                                                  guildId: e
                                              });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: 'channelMention',
                          iconType: e.id,
                          children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(I.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
                      },
                      n.key
                  )
                : null
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(v.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? 'ol' : 'ul',
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(r, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? U.inlineFormat : null,
                style: { '--totalCharacters': i },
                children: e.items.map((e, r) => {
                    let i = (0, o.reactElement)('span', ''.concat(n.key, '-').concat(r, '-innerSpan'), { children: t(e, n) });
                    return (0, o.reactElement)('li', ''.concat(n.key, '-').concat(r) + r, { children: i });
                })
            });
        }
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('h' + e.level, (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? U.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let i = N.Z.getGuild(e.guildId);
            return (0, r.jsx)(
                h.Z,
                {
                    guild: i,
                    children: (0, O.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                f.Z,
                {
                    iconType: e.iconType,
                    children: (0, O.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, r.jsx)(m.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? U.inlineFormat : null
            });
        }
    }
};
function k(e) {
    return {
        ...G,
        link: (0, b.Z)(e),
        devLink: (0, y.Z)(e),
        emoji: (function (e) {
            let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, a) {
                    let { key: s, channelId: o, messageId: l } = a;
                    return e.src
                        ? (0, r.jsx)(
                              S.c,
                              {
                                  node: e,
                                  tooltipPosition: t,
                                  enableClick: n,
                                  channelId: o,
                                  messageId: l
                              },
                              s
                          )
                        : (0, r.jsx)('span', { children: e.surrogate }, s);
                }
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, a) {
                    let { key: s, guildId: o, channelId: l, messageId: u, isInteracting: c } = a,
                        d = E.ZP.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                    if (null != d) {
                        let t = d.require_colons;
                        e = {
                            ...e,
                            name: t ? ':'.concat(d.name, ':') : d.name
                        };
                    }
                    return (0, r.jsx)(
                        S.Y,
                        {
                            isInteracting: c,
                            node: e,
                            tooltipPosition: t,
                            enableClick: n,
                            channelId: l,
                            messageId: u
                        },
                        s
                    );
                }
            };
        })(e),
        channelMention: (0, L.Z)(e),
        commandMention: (0, D.ZP)(e),
        attachmentLink: (0, C.Z)(e)
    };
}
