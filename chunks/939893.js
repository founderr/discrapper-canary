var i = t(735250);
t(470079);
var a = t(302454),
    r = t.n(a),
    o = t(481060),
    l = t(447543),
    s = t(15470),
    c = t(960904),
    d = t(830121),
    u = t(746878),
    _ = t(241209);
let p = /^discord.gg\/[a-zA-Z0-9-]+/,
    m = {
        ..._.Z.rules,
        heading: { ...s.i.heading },
        image: { ...r().defaultRules.image },
        inviteLink: {
            order: _.Z.rules.link.order + 1,
            match: (e, n) => (n.inline ? p.exec(e) : null),
            parse: (e, n, t) => {
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
                              l.Z.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: 'Application Directory' }
                              }),
                                  null === (e = t.closeModal) || void 0 === e || e.call(t);
                          }
                      };
            },
            react: (e, n, t) =>
                (0, i.jsx)(
                    o.Anchor,
                    {
                        onClick: (n) => {
                            n.preventDefault(), e.onClick();
                        },
                        children: (0, u.S)(e, n, t)
                    },
                    t.key
                )
        }
    };
n.Z = m;
