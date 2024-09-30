var i = a(735250);
a(470079);
var t = a(302454),
    r = a.n(t),
    l = a(481060),
    s = a(447543),
    o = a(15470),
    c = a(960904),
    d = a(830121),
    u = a(746878),
    _ = a(241209);
let m = /^discord.gg\/[a-zA-Z0-9-]+/,
    p = {
        ..._.Z.rules,
        heading: { ...o.i.heading },
        image: { ...r().defaultRules.image },
        inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, n) => (n.inline ? m.exec(e) : null),
            parse: (e, n, a) => {
                let i = (0, d.zO)(e[0]);
                return null == i || i.type !== c.g.INVITE
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
                              s.Z.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = a.closeModal) || void 0 === e || e.call(a);
                          }
                      };
            },
            react: (e, n, a) =>
                (0, i.jsx)(
                    l.Anchor,
                    {
                        onClick: (n) => {
                            n.preventDefault(), e.onClick();
                        },
                        children: (0, u.S)(e, n, a)
                    },
                    a.key
                )
        }
    };
n.Z = p;
