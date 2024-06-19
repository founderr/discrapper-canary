n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(399606),
  r = n(481060),
  o = n(388905),
  c = n(376923),
  u = n(16829),
  d = n(430824),
  h = n(944486),
  m = n(189432),
  p = n(776767),
  E = n(981631),
  g = n(689938),
  f = n(332513);

function C(e) {
  let {
    member: t
  } = e, n = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), i = (0, c.mh)(t.userId, t.guildId), C = (0, c.mV)(t.userId, t.guildId), _ = (0, c.LD)(t.userId), I = (0, c.wi)(t.userId, t.guildId);
  return null == n ? null : (0, l.jsx)("div", {
    className: s()(f.__invalid_safetySignalsMainContainer),
    children: (0, l.jsx)(r.FormItem, {
      title: g.Z.Messages.ACCOUNT,
      titleClassName: f.infoTitle,
      children: (0, l.jsxs)(p.WM, {
        children: [(0, l.jsx)(p._2, {
          icon: (0, l.jsx)(r.ShieldUserIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            className: f.__invalid_unusualDMLabelIcon
          }),
          name: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: g.Z.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
          }),
          description: i ? (0, l.jsx)(r.CheckmarkBoldIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            color: r.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, l.jsx)(r.CloseLargeBoldIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            color: r.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), C !== c.qc.NO_GATE && (0, l.jsx)(p._2, {
          icon: (0, l.jsx)(r.BookCheckIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            className: f.__invalid_unusualDMLabelIcon
          }),
          name: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: g.Z.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
          }),
          description: C === c.qc.AGREED ? (0, l.jsx)(r.CheckmarkBoldIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            color: r.tokens.colors.INFO_POSITIVE_FOREGROUND
          }) : (0, l.jsx)(r.CloseLargeBoldIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn,
            color: r.tokens.colors.INFO_DANGER_FOREGROUND
          })
        }), (0, l.jsx)(p._2, {
          icon: (0, l.jsx)(r.ClydeIcon, {
            size: "custom",
            color: "currentColor",
            width: p.Mn,
            height: p.Mn
          }),
          name: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: g.Z.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
          }),
          description: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: _
          })
        }), (0, l.jsx)(p._2, {
          icon: (0, l.jsx)(o.Vj, {
            guild: n,
            size: o.Vj.Sizes.SMOL,
            animate: !1,
            className: f.guildIcon
          }),
          name: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: g.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
          }),
          description: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: I
          })
        }), (0, l.jsx)(p._2, {
          icon: (0, l.jsx)(r.GroupPlusIcon, {
            size: "custom",
            width: p.Mn,
            height: p.Mn
          }),
          name: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: g.Z.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
          }),
          description: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: (0, l.jsx)(u.ZP, {
              userId: t.userId,
              guildId: t.guildId,
              showInviterAsFooter: !0,
              onClickInviter: e => {
                let n = h.Z.getChannelId();
                (0, m.r)(t.guildId, e.id, null != n ? n : E.lds)
              }
            })
          })
        })]
      })
    })
  })
}