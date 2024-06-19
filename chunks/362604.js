n.d(t, {
  Z: function() {
    return C
  }
}), n(47120), n(536091);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(623292),
  u = n(926491),
  d = n(419922),
  E = n(702346),
  _ = n(626135),
  I = n(585483),
  T = n(115610),
  N = n(981631),
  m = n(689938),
  h = n(666603);

function C(e) {
  let {
    message: t,
    channel: l,
    compact: C
  } = e, S = (0, r.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [A, p] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      S.length > 0 && p(S[Math.floor(Math.random() * S.length)])
    }, 500);
    return () => clearInterval(e)
  }, [S]), null == l.guild_id) ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(E.Z, {
      className: a()(h.mainContainer, {
        [h.compact]: C
      }),
      icon: n(570111),
      compact: C,
      children: (0, s.jsx)("div", {
        className: a()(h.__invalid_content, {
          [h.compact]: C
        }),
        children: (0, s.jsx)("div", {
          className: a()(h.__invalid_messageContent, {
            [h.compact]: C
          }),
          children: "" !== t.content ? t.content : m.Z.Messages.DEADCHAT_PROMPT_1
        })
      })
    }), (0, s.jsxs)("div", {
      className: h.actions,
      children: [(0, s.jsx)(o.TooltipContainer, {
        text: m.Z.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            _.default.track(N.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "upload_file"
            }), I.S.dispatch(N.CkL.UPLOAD_FILE), (0, c.fE)({
              message: t,
              channel: l,
              shouldMention: !0
            })
          },
          children: (0, s.jsx)(o.ImagePlusIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      }), (0, s.jsx)(o.TooltipContainer, {
        text: m.Z.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            _.default.track(N.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "sticker"
            }), (0, T.O)(t.id, l)
          },
          children: null != A ? (0, s.jsx)(d.ZP, {
            size: 32,
            sticker: A
          }) : (0, s.jsx)(o.ReactionIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}