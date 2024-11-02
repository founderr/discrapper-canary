n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(481060),
    s = n(388905),
    o = n(527379),
    c = n(376923),
    u = n(16829),
    d = n(430824),
    h = n(944486),
    m = n(189432),
    p = n(776767),
    f = n(981631),
    g = n(388032),
    C = n(194898);
function x(e) {
    let { member: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        x = (0, c.mh)(t.userId, t.guildId),
        v = (0, c.mV)(t.userId, t.guildId),
        _ = (0, c.LD)(t.userId),
        I = (0, c.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, i.jsx)(a.FormItem, {
              title: g.intl.string(g.t['ldCE/v']),
              titleClassName: C.infoTitle,
              children: (0, i.jsxs)(p.WM, {
                  children: [
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(a.ShieldUserIcon, {
                              size: 'custom',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.nzGai4)
                          }),
                          description: x
                              ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    width: p.Mn,
                                    height: p.Mn,
                                    color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, i.jsx)(a.XLargeBoldIcon, {
                                    size: 'custom',
                                    width: p.Mn,
                                    height: p.Mn,
                                    color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      v !== c.qc.NO_GATE &&
                          (0, i.jsx)(p._2, {
                              icon: (0, i.jsx)(a.BookCheckIcon, {
                                  size: 'custom',
                                  width: p.Mn,
                                  height: p.Mn
                              }),
                              name: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: g.intl.string(g.t['93hqlp'])
                              }),
                              description:
                                  v === c.qc.AGREED
                                      ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                            size: 'custom',
                                            width: p.Mn,
                                            height: p.Mn,
                                            color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, i.jsx)(a.XLargeBoldIcon, {
                                            size: 'custom',
                                            width: p.Mn,
                                            height: p.Mn,
                                            color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(a.ClydeIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.SaDIpK)
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: _
                          })
                      }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(s.Vj, {
                              guild: n,
                              size: s.Vj.Sizes.SMOL,
                              animate: !1,
                              className: C.guildIcon
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['NQJ+WF'])
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: I
                          })
                      }),
                      (0, i.jsx)(p._2, {
                          icon: (0, i.jsx)(a.GroupPlusIcon, {
                              size: 'custom',
                              width: p.Mn,
                              height: p.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['eJOq+f'])
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: (0, i.jsx)(u.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = h.Z.getChannelId();
                                      (0, m.r)(t.guildId, e.id, null != n ? n : f.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
