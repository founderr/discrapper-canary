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
  f = n(689938),
  S = n(520759);

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
    className: S.threadSuggestionBar,
    focusProps: {
      offset: {
        right: -4,
        left: -4
      }
    },
    children: [(0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: S.text,
      variant: "text-sm/normal",
      children: f.Z.Messages.THREAD_REPLY_SUGGESTION.format({
        count: Math.min(10, s + 1)
      })
    }), (0, i.jsx)(l.Text, {
      color: "text-link",
      className: S.createThreadButton,
      variant: "text-sm/semibold",
      children: f.Z.Messages.CREATE_THREAD
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
  } = (0, _.ZP)(s), p = function(e, t) {
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
  }(r, s), R = (0, E.NE)(r, s), g = n.showThreadPromptOnReply && p >= 2 && R;

  function C(e) {
    e.stopPropagation(), (0, c.qx)(r.id, !u)
  }
  return (0, i.jsx)("div", {
    className: S.clipContainer,
    children: (0, i.jsxs)("div", {
      className: S.container,
      children: [(0, i.jsxs)("div", {
        className: S.replyBar,
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
            className: o()(S.text, S.replyLabel),
            variant: "text-sm/normal",
            children: f.Z.Messages.REPLYING_TO.format({
              userHook: (e, t) => (0, i.jsx)(l.NameWithRole, {
                className: S.name,
                name: A,
                color: m,
                roleName: O
              }, t)
            })
          })
        }), (0, i.jsxs)("div", {
          className: S.actions,
          children: [I && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
              text: u ? f.Z.Messages.REPLY_MENTION_ON_TOOLTIP : f.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
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
                    className: S.mentionButton,
                    children: [(0, i.jsx)(l.AtIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": f.Z.Messages.MENTION,
                      className: S.mentionIcon
                    }), u ? f.Z.Messages.REPLY_MENTION_ON : f.Z.Messages.REPLY_MENTION_OFF]
                  })
                })
              }
            }), (0, i.jsx)("div", {
              className: S.separator,
              "aria-hidden": !0
            })]
          }), (0, i.jsx)(l.Clickable, {
            className: S.closeButton,
            onClick: function(e) {
              e.stopPropagation(), (0, c.A6)(r.id)
            },
            children: (0, i.jsx)(l.CircleXIcon, {
              size: "md",
              color: "currentColor",
              className: S.closeIcon
            })
          })]
        })]
      }), g && (0, i.jsx)(N, {
        channel: r,
        message: s,
        replyChainLength: p
      })]
    })
  })
}