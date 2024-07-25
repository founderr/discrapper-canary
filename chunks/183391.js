s(47120);
var n = s(735250),
  t = s(470079),
  l = s(120356),
  r = s.n(l),
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
  approximate_member_count: t,
  guild: l
} = a;
if (null == l)
  return null;
let i = _.Z.isMember(l.id);
if (!(null == l ? void 0 : l.features.includes('VERIFIED')) && !(null == l ? void 0 : l.features.includes('PARTNER')))
  return null;
let E = d.ZP.getGuildIconURL({
  id: l.id,
  icon: l.icon,
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
            guildName: l.name
          })
        }),
        (0, n.jsxs)('div', {
          className: r()(N.gapNone),
          children: [
            (0, n.jsx)(o.Text, {
              variant: 'text-sm/normal',
              children: l.name
            }),
            null != t && (0, n.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: t
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
  } = e, l = null == a ? void 0 : a.find(e => {
let {
  category: a
} = e;
return a === i.p.DISCORD;
  }), [c, _] = t.useState();
  if (t.useEffect(() => {
  let e = async e => {
    let a = e.split('/').pop();
    if (null != a) {
      let e = await (0, E.Z)(a);
      !0 !== e.banned && _(e.invite);
    }
  };
  null != l && e(l.url);
}, [l]), null == a || 0 === a.length)
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
          let a, {
              category: t,
              url: l
            } = e,
            r = null;
          switch (t) {
            case i.p.OFFICIAL:
              r = (0, n.jsx)(o.GlobeEarthIcon, {}), a = u.as.WebsiteLink;
              break;
            case i.p.TWITTER:
              r = (0, n.jsx)(o.XNeutralIcon, {}), a = u.as.XLink;
              break;
            case i.p.YOUTUBE:
              a = u.as.YouTubeLink, r = (0, n.jsx)(o.YouTubeIcon, {});
          }
          return null != r ? (0, n.jsx)(o.Anchor, {
            href: l,
            onClick: () => {
              s(a);
            },
            target: '_blank',
            children: r
          }, l) : null;
        })
      })
    ]
  })
]
  });
};