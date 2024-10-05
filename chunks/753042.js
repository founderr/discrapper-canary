n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var s = n(399606),
    a = n(481060),
    l = n(388905),
    r = n(376923),
    o = n(16829),
    c = n(430824),
    u = n(944486),
    d = n(189432),
    h = n(776767),
    p = n(981631),
    m = n(689938),
    _ = n(194898);
function f(e) {
    let { member: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.getGuild(t.guildId), [t.guildId]),
        f = (0, r.mh)(t.userId, t.guildId),
        E = (0, r.mV)(t.userId, t.guildId),
        g = (0, r.LD)(t.userId),
        C = (0, r.wi)(t.userId, t.guildId);
    return null == n
        ? null
        : (0, i.jsx)(a.FormItem, {
              title: m.Z.Messages.ACCOUNT,
              titleClassName: _.infoTitle,
              children: (0, i.jsxs)(h.WM, {
                  children: [
                      (0, i.jsx)(h._2, {
                          icon: (0, i.jsx)(a.ShieldUserIcon, {
                              size: 'custom',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: m.Z.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
                          }),
                          description: f
                              ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    width: h.Mn,
                                    height: h.Mn,
                                    color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, i.jsx)(a.XLargeBoldIcon, {
                                    size: 'custom',
                                    width: h.Mn,
                                    height: h.Mn,
                                    color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      E !== r.qc.NO_GATE &&
                          (0, i.jsx)(h._2, {
                              icon: (0, i.jsx)(a.BookCheckIcon, {
                                  size: 'custom',
                                  width: h.Mn,
                                  height: h.Mn
                              }),
                              name: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: m.Z.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
                              }),
                              description:
                                  E === r.qc.AGREED
                                      ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                            size: 'custom',
                                            width: h.Mn,
                                            height: h.Mn,
                                            color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, i.jsx)(a.XLargeBoldIcon, {
                                            size: 'custom',
                                            width: h.Mn,
                                            height: h.Mn,
                                            color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, i.jsx)(h._2, {
                          icon: (0, i.jsx)(a.ClydeIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: m.Z.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g
                          })
                      }),
                      (0, i.jsx)(h._2, {
                          icon: (0, i.jsx)(l.Vj, {
                              guild: n,
                              size: l.Vj.Sizes.SMOL,
                              animate: !1,
                              className: _.guildIcon
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: m.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: C
                          })
                      }),
                      (0, i.jsx)(h._2, {
                          icon: (0, i.jsx)(a.GroupPlusIcon, {
                              size: 'custom',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: m.Z.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: (0, i.jsx)(o.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = u.Z.getChannelId();
                                      (0, d.r)(t.guildId, e.id, null != n ? n : p.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
