var s = n(200651);
n(192379);
var i = n(477660),
    a = n.n(i),
    r = n(481060),
    l = n(447543),
    o = n(15470),
    h = n(960904),
    d = n(830121),
    c = n(746878),
    u = n(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ...u.Z.rules,
        heading: { ...o.i.heading },
        image: { ...a().defaultRules.image },
        inviteLink: {
            order: u.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
                let s = (0, d.zO)(e[0]);
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
                        children: (0, c.S)(e, t, n)
                    },
                    n.key
                )
        }
    };
t.Z = m;
