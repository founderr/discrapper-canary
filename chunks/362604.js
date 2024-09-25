n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(47120);
var i = n(536091);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(442837),
    c = n(481060),
    d = n(834129),
    _ = n(623292),
    E = n(926491),
    f = n(419922),
    h = n(626135),
    p = n(585483),
    m = n(115610),
    I = n(981631),
    T = n(689938),
    g = n(809858);
function S(e) {
    let { message: t, channel: r, compact: i } = e,
        s = (0, u.Wu)([E.Z], () => Array.from(E.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [S, A] = o.useState(null);
    return (o.useEffect(() => {
        let e = setInterval(() => {
            s.length > 0 && A(s[Math.floor(Math.random() * s.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [s]),
    null == r.guild_id)
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(d.Z, {
                      className: l()(g.mainContainer, { [g.compact]: i }),
                      icon: n(570111),
                      compact: i,
                      children: (0, a.jsx)('div', {
                          className: l()(g.__invalid_content, { [g.compact]: i }),
                          children: (0, a.jsx)('div', {
                              className: l()(g.__invalid_messageContent, { [g.compact]: i }),
                              children: '' !== t.content ? t.content : T.Z.Messages.DEADCHAT_PROMPT_1
                          })
                      })
                  }),
                  (0, a.jsxs)('div', {
                      className: g.actions,
                      children: [
                          (0, a.jsx)(c.TooltipContainer, {
                              text: T.Z.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
                              children: (0, a.jsx)(c.Button, {
                                  color: c.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(I.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: r.id,
                                          guild_id: r.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          p.S.dispatch(I.CkL.UPLOAD_FILE),
                                          (0, _.fE)({
                                              message: t,
                                              channel: r,
                                              shouldMention: !0
                                          });
                                  },
                                  children: (0, a.jsx)(c.ImagePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, a.jsx)(c.TooltipContainer, {
                              text: T.Z.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
                              children: (0, a.jsx)(c.Button, {
                                  color: c.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(I.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: r.id,
                                          guild_id: r.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, m.O)(t.id, r);
                                  },
                                  children:
                                      null != S
                                          ? (0, a.jsx)(f.ZP, {
                                                size: 32,
                                                sticker: S
                                            })
                                          : (0, a.jsx)(c.ReactionIcon, {
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
