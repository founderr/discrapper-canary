"use strict";
n.d(t, {
  Z: function() {
    return B
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(302454),
  l = n(481060),
  u = n(794295),
  _ = n(663993),
  c = n(339085),
  d = n(779699),
  E = n(359875),
  I = n(124072),
  T = n(695503),
  h = n(628692),
  f = n(590956),
  S = n(703656),
  A = n(430824),
  N = n(68588),
  m = n(572004),
  O = n(900849),
  R = n(746878),
  p = n(285063),
  g = n(943362),
  C = n(551452),
  v = n(69626),
  L = n(142990),
  D = n(532901),
  M = n(981631),
  P = n(176505),
  y = n(689938),
  U = n(520076);
n(942862);
var b = n(622322);

function G(e) {
  let {
    text: t
  } = e, [n, s] = r.useState(!1);
  return (0, i.jsx)(l.Clickable, {
    onClick: () => {
      try {
        (0, m.JG)(t), s(!0)
      } catch (e) {
        s(!1)
      }
    },
    children: n ? (0, i.jsx)(l.CheckmarkLargeIcon, {
      size: "xs",
      color: "currentColor"
    }) : (0, i.jsx)(l.CopyIcon, {
      size: "xs",
      color: "currentColor"
    })
  })
}
let w = {
  blockQuote: {
    react: (e, t, n) => (0, i.jsxs)("div", {
      className: b.blockquoteContainer,
      children: [(0, i.jsx)("div", {
        className: b.blockquoteDivider
      }), (0, i.jsx)("blockquote", {
        children: t(e.content, n)
      })]
    }, n.key)
  },
  s: {
    react: (e, t, n) => (0, i.jsx)("s", {
      children: t(e.content, n)
    }, n.key)
  },
  highlight: {
    react: (e, t, n) => (0, i.jsx)("span", {
      className: "highlight",
      children: e.content
    }, n.key)
  },
  paragraph: {
    react: (e, t, n) => (0, i.jsx)("p", {
      children: t(e.content, n)
    }, n.key)
  },
  inlineCode: {
    react: (e, t, n) => (0, i.jsx)("code", {
      className: "inline",
      children: (0, R.S)(e, t, n)
    }, n.key)
  },
  codeBlock: {
    react(e, t, r) {
      let s = () => (0, i.jsx)("code", {
        className: o()(U.scrollbarGhostHairline, "hljs"),
        children: (0, R.S)(e, t, r)
      });
      return (0, i.jsx)("pre", {
        children: (0, i.jsxs)("div", {
          className: b.codeContainer,
          children: [m.wS ? (0, i.jsx)("div", {
            className: b.codeActions,
            children: (0, i.jsx)(G, {
              text: e.content
            })
          }) : null, (0, i.jsx)(_.GI, {
            createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
            webpackId: 364964,
            renderFallback: s,
            render: t => {
              if (!(e.lang && t.hasLanguage(e.lang))) return s();
              {
                let n = t.highlight(e.lang, e.content, !0);
                return null == n ? s() : (0, i.jsx)("code", {
                  className: o()(U.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }
            }
          })]
        })
      }, r.key)
    }
  },
  text: {
    react: (e, t, n) => "string" == typeof e.content ? (0, i.jsx)("span", {
      children: e.content
    }, n.key) : (0, i.jsx)("span", {
      children: t(e.content, n)
    }, n.key)
  },
  spoiler: {
    react: (e, t, n) => (0, i.jsx)(N.Z, {
      type: N.Z.Types.TEXT,
      inline: n.formatInline,
      renderTextElement: (e, t) => null == e || e.type !== u.Z || t ? e : r.cloneElement(e, {
        tabIndex: -1
      }),
      children: () => t(e.content, n)
    }, n.key)
  },
  soundboard: {
    react: e => (0, i.jsx)(h.Z, {
      channelId: e.channelId,
      soundId: e.soundId,
      jumbo: e.jumboable
    })
  },
  staticRouteLink: {
    react(e, t, n) {
      let r = () => {
        ! function(e, t) {
          let n = A.Z.getGuild(e);
          if (null == e || null == n || !n.hasFeature(M.oNc.COMMUNITY)) return;
          let i = {
              home: P.oC.GUILD_HOME,
              browse: P.oC.CHANNEL_BROWSER,
              customize: P.oC.CUSTOMIZE_COMMUNITY,
              guide: P.oC.GUILD_HOME
            } [t],
            r = A.Z.getGuild(e);
          if ((null == r ? void 0 : r.joinedAt) == null) {
            O.Ub(e, {}, {
              channelId: i
            });
            return
          }(0, S.uL)(M.Z5c.CHANNEL(e, i))
        }(e.guildId, e.channelId)
      };
      if (!(0, R.k)(e.channelId)) return null;
      let s = "".concat(e.channelId);
      switch (e.channelId) {
        case P.HY.GUILD_HOME:
        case P.HY.SERVER_GUIDE:
          s = y.Z.Messages.SERVER_GUIDE;
          break;
        case P.HY.CHANNEL_BROWSER:
          s = y.Z.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
          break;
        case P.HY.CUSTOMIZE_COMMUNITY:
          s = y.Z.Messages.CHANNELS_AND_ROLES
      }
      return (0, i.jsx)(l.Tooltip, {
        text: s,
        position: "top",
        children: s => {
          let {
            onMouseEnter: o,
            onMouseLeave: a
          } = s;
          return (0, i.jsx)(I.Z, {
            role: "link",
            onClick: r,
            onMouseEnter: o,
            onMouseLeave: a,
            className: "channelMention",
            iconType: e.channelId,
            children: t(e.content, n)
          }, n.key)
        }
      }, n.key)
    }
  },
  timestamp: {
    react: (e, t, n) => (0, i.jsx)(p.Z, {
      node: e
    }, n.key)
  },
  list: {
    react: (e, t, n) => {
      let i = e.ordered ? "ol" : "ul",
        r = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
      return (0, a.reactElement)(i, "".concat(n.key), {
        start: e.start,
        className: n.formatInline ? b.inlineFormat : null,
        style: {
          "--totalCharacters": r
        },
        children: e.items.map((e, i) => {
          let r = (0, a.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
            children: t(e, n)
          });
          return (0, a.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
            children: r
          })
        })
      })
    }
  },
  heading: {
    react: (e, t, n) => {
      let i = (0, a.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, a.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
        children: i,
        className: n.formatInline ? b.inlineFormat : null
      })
    }
  },
  guild: {
    react: (e, t, n) => {
      let r = A.Z.getGuild(e.guildId);
      return (0, i.jsx)(E.Z, {
        guild: r,
        children: (0, R.S)(e, t, n)
      }, n.key)
    }
  },
  channel: {
    react: (e, t, n) => (0, i.jsx)(d.Z, {
      iconType: e.iconType,
      children: (0, R.S)(e, t, n)
    }, n.key)
  },
  message: {
    react: (e, t, n) => (0, i.jsx)(T.Z, {}, n.key)
  },
  subtext: {
    react: (e, t, n) => (0, a.reactElement)("small", (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
      children: t(e.content, n),
      className: n.formatInline ? b.inlineFormat : null
    })
  }
};

function B(e) {
  return {
    ...w,
    link: (0, D.Z)(e),
    devLink: (0, L.Z)(e),
    emoji: function(e) {
      let {
        emojiTooltipPosition: t = "top",
        enableEmojiClick: n = !0
      } = e;
      return {
        react(e, r, s) {
          let {
            key: o
          } = s;
          return e.src ? (0, i.jsx)(f.c, {
            node: e,
            tooltipPosition: t,
            enableClick: n
          }, o) : (0, i.jsx)("span", {
            children: e.surrogate
          }, o)
        }
      }
    }(e),
    customEmoji: function(e) {
      let {
        emojiTooltipPosition: t = "top",
        enableEmojiClick: n = !0
      } = e;
      return {
        react(e, r, s) {
          let {
            key: o,
            guildId: a,
            isInteracting: l
          } = s, u = c.Z.getDisambiguatedEmojiContext(a).getById(e.emojiId);
          if (null != u) {
            let t = u.require_colons;
            e = {
              ...e,
              name: t ? ":".concat(u.name, ":") : u.name
            }
          }
          return (0, i.jsx)(f.Y, {
            isInteracting: l,
            node: e,
            tooltipPosition: t,
            enableClick: n
          }, o)
        }
      }
    }(e),
    channelMention: (0, C.Z)(e),
    commandMention: (0, v.ZP)(e),
    attachmentLink: (0, g.Z)(e)
  }
}