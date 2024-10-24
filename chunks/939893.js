var s = n(200651);
n(192379);
var i = n(302454),
    a = n.n(i),
    r = n(481060),
    l = n(447543),
    o = n(15470),
    h = n(960904),
    u = n(830121),
    d = n(746878),
    c = n(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ...c.Z.rules,
        heading: { ...o.i.heading },
        image: { ...a().defaultRules.image },
        inviteLink: {
            order: c.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
                let s = (0, u.zO)(e[0]);
                return null == s || s.type !== h.g.INVITE
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
                                  inviteKey: s.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = n.closeModal) || void 0 === e || e.call(n);
                          }
                      };
            },
            react: (e, t, n) =>
                (0, s.jsx)(
                    r.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, d.S)(e, t, n)
                    },
                    n.key
                )
        }
    };
t.Z = m;
