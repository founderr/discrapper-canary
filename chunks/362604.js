n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(536091);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(834129),
    d = n(623292),
    u = n(926491),
    _ = n(419922),
    E = n(626135),
    I = n(585483),
    m = n(115610),
    T = n(981631),
    N = n(689938),
    h = n(809858);
function C(e) {
    let { message: t, channel: s, compact: C } = e,
        p = (0, r.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [f, A] = a.useState(null);
    return (a.useEffect(() => {
        let e = setInterval(() => {
            p.length > 0 && A(p[Math.floor(Math.random() * p.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [p]),
    null == s.guild_id)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(c.Z, {
                      className: l()(h.mainContainer, { [h.compact]: C }),
                      icon: n(570111),
                      compact: C,
                      children: (0, i.jsx)('div', {
                          className: l()(h.__invalid_content, { [h.compact]: C }),
                          children: (0, i.jsx)('div', {
                              className: l()(h.__invalid_messageContent, { [h.compact]: C }),
                              children: '' !== t.content ? t.content : N.Z.Messages.DEADCHAT_PROMPT_1
                          })
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: h.actions,
                      children: [
                          (0, i.jsx)(o.TooltipContainer, {
                              text: N.Z.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
                              children: (0, i.jsx)(o.Button, {
                                  color: o.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      E.default.track(T.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: s.id,
                                          guild_id: s.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          I.S.dispatch(T.CkL.UPLOAD_FILE),
                                          (0, d.fE)({
                                              message: t,
                                              channel: s,
                                              shouldMention: !0
                                          });
                                  },
                                  children: (0, i.jsx)(o.ImagePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, i.jsx)(o.TooltipContainer, {
                              text: N.Z.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
                              children: (0, i.jsx)(o.Button, {
                                  color: o.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      E.default.track(T.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: s.id,
                                          guild_id: s.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, m.O)(t.id, s);
                                  },
                                  children:
                                      null != f
                                          ? (0, i.jsx)(_.ZP, {
                                                size: 32,
                                                sticker: f
                                            })
                                          : (0, i.jsx)(o.ReactionIcon, {
                                                size: 'md',
                                                color: 'currentColor'
                                            })
                              })
                          })
                      ]
                  })
              ]
          });
}
