s(47120);
var n = s(735250),
  l = s(470079),
  t = s(120356),
  r = s.n(t),
  i = s(643872),
  o = s(481060),
  c = s(570140),
  E = s(652898),
  _ = s(93093),
  d = s(768581),
  u = s(810568),
  I = s(981631),
  A = s(689938),
  N = s(421377);
let O = [
i.p.OFFICIAL,
i.p.TWITTER,
i.p.YOUTUBE
  ],
  R = e => {
let {
  invite: a,
  trackClick: s
} = e, {
  approximate_member_count: l,
  guild: t
} = a;
if (null == t)
  return null;
let i = _.Z.isMember(t.id);
if (!(null == t ? void 0 : t.features.includes('VERIFIED')) && !(null == t ? void 0 : t.features.includes('PARTNER')))
  return null;
let E = d.ZP.getGuildIconURL({
  id: t.id,
  icon: t.icon,
  size: 32
});
return (0, n.jsxs)('div', {
  className: r()(N.column),
  children: [
    (0, n.jsx)(o.Text, {
      variant: 'text-xs/semibold',
      children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
    }),
    (0, n.jsxs)('div', {
      className: r()(N.row, N.gapMd),
      children: [
        (0, n.jsx)('img', {
          className: N.icon,
          src: E,
          alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: t.name
          })
        }),
        (0, n.jsxs)('div', {
          className: r()(N.gapNone),
          children: [
            (0, n.jsx)(o.Text, {
              variant: 'text-sm/normal',
              children: t.name
            }),
            null != l && (0, n.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: l
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(o.Button, {
      color: o.ButtonColors.PRIMARY,
      onClick: () => {
        s(u.as.JoinOfficialServer), c.Z.dispatch({
          type: 'INVITE_MODAL_OPEN',
          invite: a,
          code: a.code,
          context: I.IlC.APP
        });
      },
      children: i ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
    })
  ]
});
  };
a.Z = e => {
  let {
websites: a,
trackClick: s
  } = e, t = null == a ? void 0 : a.find(e => {
let {
  category: a
} = e;
return a === i.p.DISCORD;
  }), [c, _] = l.useState();
  if (l.useEffect(() => {
  let e = async e => {
    let a = e.split('/').pop();
    if (null != a) {
      let e = await (0, E.Z)(a);
      !0 !== e.banned && _(e.invite);
    }
  };
  null != t && e(t.url);
}, [t]), null == a || 0 === a.length)
return null;
  let d = a.filter(e => {
let {
  category: a
} = e;
return O.includes(a);
  }).sort((e, a) => e.category - a.category);
  return (0, n.jsxs)('div', {
className: r()(N.column),
children: [
  null != c && (0, n.jsx)(R, {
    invite: c,
    trackClick: s
  }),
  (0, n.jsxs)('div', {
    className: r()(N.column, N.gapSm),
    children: [
      (0, n.jsx)(o.Text, {
        variant: 'text-xs/semibold',
        children: A.Z.Messages.GAME_PROFILE_LINKS
      }),
      (0, n.jsx)('div', {
        className: N.row,
        children: d.map(e => {
          let a, l, {
              category: t,
              url: r
            } = e,
            c = null;
          switch (t) {
            case i.p.OFFICIAL:
              c = (0, n.jsx)(o.GlobeEarthIcon, {
                colorClass: N.linkIcon
              }), l = u.as.WebsiteLink, a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL;
              break;
            case i.p.TWITTER:
              c = (0, n.jsx)(o.XNeutralIcon, {
                colorClass: N.linkIcon
              }), l = u.as.XLink, a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER;
              break;
            case i.p.YOUTUBE:
              l = u.as.YouTubeLink, c = (0, n.jsx)(o.YouTubeIcon, {
                colorClass: N.linkIcon
              }), a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE;
          }
          return null != c ? (0, n.jsx)(o.Anchor, {
            className: N.linkAnchor,
            title: a,
            href: r,
            onClick: () => {
              s(l);
            },
            target: '_blank',
            children: c
          }, r) : null;
        })
      })
    ]
  })
]
  });
};