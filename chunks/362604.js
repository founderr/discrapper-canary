"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120"), n("536091");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("623292"),
  d = n("926491"),
  c = n("419922"),
  E = n("642113"),
  f = n("180277"),
  _ = n("702346"),
  T = n("626135"),
  I = n("585483"),
  m = n("115610"),
  N = n("981631"),
  p = n("689938"),
  S = n("377705");

function C(e) {
  let {
    message: t,
    channel: l,
    compact: C
  } = e, A = (0, r.useStateFromStoresArray)([d.default], () => Array.from(d.default.getAllGuildStickers().values()).flat()).slice(0, 20), [h, g] = a.useState(null);
  return (a.useEffect(() => {
    let e = setInterval(() => {
      A.length > 0 && g(A[Math.floor(Math.random() * A.length)])
    }, 500);
    return () => clearInterval(e)
  }, [A]), null == l.guild_id) ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(_.default, {
      className: i()(S.mainContainer, {
        [S.compact]: C
      }),
      icon: n("570111"),
      compact: C,
      children: (0, s.jsx)("div", {
        className: i()(S.__invalid_content, {
          [S.compact]: C
        }),
        children: (0, s.jsx)("div", {
          className: i()(S.__invalid_messageContent, {
            [S.compact]: C
          }),
          children: "" !== t.content ? t.content : p.default.Messages.DEADCHAT_PROMPT_1
        })
      })
    }), (0, s.jsxs)("div", {
      className: S.actions,
      children: [(0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "upload_file"
            }), I.ComponentDispatch.dispatch(N.ComponentActions.UPLOAD_FILE), (0, u.createPendingReply)({
              message: t,
              channel: l,
              shouldMention: !0
            })
          },
          children: (0, s.jsx)(f.default, {})
        })
      }), (0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "sticker"
            }), (0, m.sendRandomStickerOrEmoji)(t.id, l)
          },
          children: null != h ? (0, s.jsx)(c.default, {
            size: 32,
            sticker: h
          }) : (0, s.jsx)(E.default, {})
        })
      })]
    })]
  })
}