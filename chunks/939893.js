var a = n(200651);
n(192379);
var i = n(302454),
    r = n.n(i),
    s = n(481060),
    l = n(447543),
    o = n(15470),
    d = n(960904),
    u = n(830121),
    c = n(746878),
    h = n(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ...h.Z.rules,
        heading: { ...o.i.heading },
        image: { ...r().defaultRules.image },
        inviteLink: {
            order: h.Z.rules.link.order + 1,
            match: (e, t) => (t.inline ? p.exec(e) : null),
            parse: (e, t, n) => {
                let a = (0, u.zO)(e[0]);
                return null == a || a.type !== d.g.INVITE
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
                                  inviteKey: a.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = n.closeModal) || void 0 === e || e.call(n);
                          }
                      };
            },
            react: (e, t, n) =>
                (0, a.jsx)(
                    s.Anchor,
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
