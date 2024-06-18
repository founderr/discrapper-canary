"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(367907),
  _ = n(739566),
  c = n(623292),
  d = n(703656),
  E = n(665906),
  I = n(488131),
  T = n(375954),
  h = n(981631),
  S = n(689938),
  f = n(520759);

function N(e) {
  let {
    channel: t,
    message: n,
    replyChainLength: s
  } = e;
  return r.useEffect(() => {
    (0, u.yw)(h.rMx.THREAD_NUDGE_SHOWN, {
      type: "Reply Chain (".concat(3, ")"),
      reply_chain_length: s + 1,
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t]), (0, i.jsxs)(l.Clickable, {
    onClick: function() {
      (0, c.A6)(t.id), (0, I.R6)(t, n, "Reply Chain Nudge")
    },
    className: f.threadSuggestionBar,
    focusProps: {
      offset: {
        right: -4,
        left: -4
      }
    },
    children: [(0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: f.text,
      variant: "text-sm/normal",
      children: S.Z.Messages.THREAD_REPLY_SUGGESTION.format({
        count: Math.min(10, s + 1)
      })
    }), (0, i.jsx)(l.Text, {
      color: "text-link",
      className: f.createThreadButton,
      variant: "text-sm/semibold",
      children: S.Z.Messages.CREATE_THREAD
    })]
  })
}

function A(e) {
  let {
    reply: t,
    chatInputType: n
  } = e, {
    channel: r,
    message: s,
    shouldMention: u,
    showMentionToggle: I
  } = t, {
    nick: A,
    colorString: m,
    colorRoleName: O
  } = (0, _.ZP)(s), R = function(e, t) {
    let n = e.id,
      i = t.id;
    return (0, a.e7)([T.Z], () => {
      let e = i;
      for (let t = 0; t < 10; t++) {
        let i = T.Z.getMessage(n, e);
        if ((null == i ? void 0 : i.type) !== h.uaV.REPLY || null == i.messageReference) return t;
        e = i.messageReference.message_id
      }
      return 10
    }, [n, i])
  }(r, s), p = (0, E.NE)(r, s), g = n.showThreadPromptOnReply && R >= 2 && p;

  function C(e) {
    e.stopPropagation(), (0, c.qx)(r.id, !u)
  }
  return (0, i.jsx)("div", {
    className: f.clipContainer,
    children: (0, i.jsxs)("div", {
      className: f.container,
      children: [(0, i.jsxs)("div", {
        className: f.replyBar,
        children: [(0, i.jsx)(l.Clickable, {
          onClick: () => (0, d.uL)(h.Z5c.CHANNEL(r.getGuildId(), r.id, s.id)),
          focusProps: {
            offset: {
              top: -8,
              right: -4,
              bottom: -8,
              left: -4
            }
          },
          children: (0, i.jsx)(l.Text, {
            color: "header-secondary",
            className: o()(f.text, f.replyLabel),
            variant: "text-sm/normal",
            children: S.Z.Messages.REPLYING_TO.format({
              userHook: (e, t) => (0, i.jsx)(l.NameWithRole, {
                className: f.name,
                name: A,
                color: m,
                roleName: O
              }, t)
            })
          })
        }), (0, i.jsxs)("div", {
          className: f.actions,
          children: [I && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
              text: u ? S.Z.Messages.REPLY_MENTION_ON_TOOLTIP : S.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onFocus: r,
                  onBlur: s
                } = e;
                return (0, i.jsx)(l.Clickable, {
                  role: "switch",
                  "aria-checked": u,
                  onClick: C,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onFocus: r,
                  onBlur: s,
                  children: (0, i.jsxs)(l.Text, {
                    variant: "text-sm/bold",
                    color: u ? "text-link" : "text-muted",
                    className: f.mentionButton,
                    children: [(0, i.jsx)(l.AtIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": S.Z.Messages.MENTION,
                      className: f.mentionIcon
                    }), u ? S.Z.Messages.REPLY_MENTION_ON : S.Z.Messages.REPLY_MENTION_OFF]
                  })
                })
              }
            }), (0, i.jsx)("div", {
              className: f.separator,
              "aria-hidden": !0
            })]
          }), (0, i.jsx)(l.Clickable, {
            className: f.closeButton,
            onClick: function(e) {
              e.stopPropagation(), (0, c.A6)(r.id)
            },
            children: (0, i.jsx)(l.CircleXIcon, {
              size: "md",
              color: "currentColor",
              className: f.closeIcon
            })
          })]
        })]
      }), g && (0, i.jsx)(N, {
        channel: r,
        message: s,
        replyChainLength: R
      })]
    })
  })
}