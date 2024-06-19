var t = i(735250);
i(470079);
var l = i(302454),
  a = i.n(l),
  s = i(481060),
  r = i(447543),
  o = i(15470),
  c = i(960904),
  d = i(830121),
  u = i(746878),
  p = i(729035);
let _ = /^discord.gg\/[a-zA-Z0-9-]+/,
  m = {
    ...p.Z.rules,
    heading: {
      ...o.i.heading
    },
    image: {
      ...a().defaultRules.image
    },
    inviteLink: {
      order: p.Z.rules.link.order + 1,
      match: (e, n) => n.inline ? _.exec(e) : null,
      parse: (e, n, i) => {
        let t = (0, d.zO)(e[0]);
        return null == t || t.type !== c.g.INVITE ? {
          type: "text",
          content: e[0]
        } : {
          type: "inviteLink",
          content: [{
            type: "text",
            content: e[0]
          }],
          onClick: () => {
            var e;
            r.Z.acceptInviteAndTransitionToInviteChannel({
              inviteKey: t.code,
              context: {
                location: "Application Directory"
              }
            }), null === (e = i.closeModal) || void 0 === e || e.call(i)
          }
        }
      },
      react: (e, n, i) => (0, t.jsx)(s.Anchor, {
        onClick: n => {
          n.preventDefault(), e.onClick()
        },
        children: (0, u.S)(e, n, i)
      }, i.key)
    }
  };
n.Z = m