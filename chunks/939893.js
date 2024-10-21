var n = s(200651);
s(192379);
var i = s(302454),
    a = s.n(i),
    r = s(481060),
    l = s(447543),
    o = s(15470),
    h = s(960904),
    d = s(830121),
    u = s(746878),
    c = s(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ...c.Z.rules,
        heading: { ...o.i.heading },
        image: { ...a().defaultRules.image },
        inviteLink: {
            order: c.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, s) => {
                let n = (0, d.zO)(e[0]);
                return null == n || n.type !== h.g.INVITE
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'inviteLink',
                          content: [
                              {
                                  type: 'text',
                                  content: e[0]
                              }
                          ],
                          onClick: () => {
                              var e;
                              l.Z.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: n.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = s.closeModal) || void 0 === e || e.call(s);
                          }
                      };
            },
            react: (e, t, s) =>
                (0, n.jsx)(
                    r.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, u.S)(e, t, s)
                    },
                    s.key
                )
        }
    };
t.Z = m;
