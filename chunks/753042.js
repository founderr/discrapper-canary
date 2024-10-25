n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(399606),
    l = n(481060),
    r = n(388905),
    o = n(527379),
    c = n(376923),
    u = n(16829),
    d = n(430824),
    h = n(944486),
    m = n(189432),
    p = n(776767),
    _ = n(981631),
    f = n(689938),
    E = n(194898);
function g(e) {
    let { member: t } = e,
        n = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        g = (0, c.mh)(t.userId, t.guildId),
        C = (0, c.mV)(t.userId, t.guildId),
        I = (0, c.LD)(t.userId),
        T = (0, c.wi)(t.userId, t.guildId);
    return (s.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, i.jsx)(l.FormItem, {
              title: f.Z.Messages.ACCOUNT,
              titleClassName: E.infoTitle,
              children: (0, i.jsxs)(p.WM, {
                  children: [
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(l.ShieldUserIcon, {
                              size: 'custom',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: f.Z.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
                          }),
                          description: g
                              ? (0, i.jsx)(l.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    width: p.Mn,
                                    height: p.Mn,
                                    color: l.tokens.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, i.jsx)(l.XLargeBoldIcon, {
                                    size: 'custom',
                                    width: p.Mn,
                                    height: p.Mn,
                                    color: l.tokens.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      C !== c.qc.NO_GATE &&
                          (0, i.jsx)(p._2, {
                              icon: (0, i.jsx)(l.BookCheckIcon, {
                                  size: 'custom',
                                  width: p.Mn,
                                  height: p.Mn
                              }),
                              name: (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
                              }),
                              description:
                                  C === c.qc.AGREED
                                      ? (0, i.jsx)(l.CheckmarkLargeBoldIcon, {
                                            size: 'custom',
                                            width: p.Mn,
                                            height: p.Mn,
                                            color: l.tokens.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, i.jsx)(l.XLargeBoldIcon, {
                                            size: 'custom',
                                            width: p.Mn,
                                            height: p.Mn,
                                            color: l.tokens.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(l.ClydeIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
                          }),
                          description: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: I
                          })
                      }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(r.Vj, {
                              guild: n,
                              size: r.Vj.Sizes.SMOL,
                              animate: !1,
                              className: E.guildIcon
                          }),
                          name: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
                          }),
                          description: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: T
                          })
                      }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(l.GroupPlusIcon, {
                              size: 'custom',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
                          }),
                          description: (0, i.jsx)(l.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: (0, i.jsx)(u.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = h.Z.getChannelId();
                                      (0, m.r)(t.guildId, e.id, null != n ? n : _.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
