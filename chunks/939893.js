var i = n(735250);
n(470079);
var t = n(302454),
    r = n.n(t),
    l = n(481060),
    s = n(447543),
    o = n(15470),
    c = n(960904),
    d = n(830121),
    u = n(746878),
    _ = n(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ..._.Z.rules,
        heading: { ...o.i.heading },
        image: { ...r().defaultRules.image },
        inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, a) => (a.inline ? p.exec(e) : null),
            parse: (e, a, n) => {
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
                                  null === (e = n.closeModal) || void 0 === e || e.call(n);
                          }
                      };
            },
            react: (e, a, n) =>
                (0, i.jsx)(
                    l.Anchor,
                    {
                        onClick: (a) => {
                            a.preventDefault(), e.onClick();
                        },
                        children: (0, u.S)(e, a, n)
                    },
                    n.key
                )
        }
    };
a.Z = m;
