s(47120);
var n = s(735250),
  t = s(470079),
  r = s(120356),
  l = s.n(r),
  i = s(643872),
  c = s(481060),
  E = s(570140),
  o = s(652898),
  _ = s(93093),
  I = s(768581),
  d = s(810568),
  u = s(981631),
  A = s(689938),
  O = s(421377);
let N = [
i.p.OFFICIAL,
i.p.TWITTER,
i.p.YOUTUBE
  ],
  T = e => {
let {
  invite: a,
  trackClick: s
} = e, {
  approximate_member_count: t,
  guild: r
} = a;
if (null == r)
  return null;
let i = _.Z.isMember(r.id);
if (!(null == r ? void 0 : r.features.includes('VERIFIED')) && !(null == r ? void 0 : r.features.includes('PARTNER')))
  return null;
let o = I.ZP.getGuildIconURL({
  id: r.id,
  icon: r.icon,
  size: 32
});
return (0, n.jsxs)('div', {
  className: l()(O.column),
  children: [
    (0, n.jsx)(c.Text, {
      variant: 'text-xs/semibold',
      children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
    }),
    (0, n.jsxs)('div', {
      className: l()(O.row, O.gapMd),
      children: [
        (0, n.jsx)('img', {
          className: O.icon,
          src: o,
          alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: r.name
          })
        }),
        (0, n.jsxs)('div', {
          className: l()(O.gapNone),
          children: [
            (0, n.jsx)(c.Text, {
              variant: 'text-sm/normal',
              children: r.name
            }),
            null != t && (0, n.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: t
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(c.Button, {
      color: c.ButtonColors.PRIMARY,
      onClick: () => {
        s(d.as.JoinOfficialServer), E.Z.dispatch({
          type: 'INVITE_MODAL_OPEN',
          invite: a,
          code: a.code,
          context: u.IlC.APP
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
  } = e, r = null == a ? void 0 : a.find(e => {
let {
  category: a
} = e;
return a === i.p.DISCORD;
  }), [E, _] = t.useState();
  if (t.useEffect(() => {
  let e = async e => {
    let a = e.split('/').pop();
    if (null != a) {
      let e = await (0, o.Z)(a);
      !0 !== e.banned && _(e.invite);
    }
  };
  null != r && e(r.url);
}, [r]), null == a || 0 === a.length)
return null;
  let I = a.filter(e => {
let {
  category: a
} = e;
return N.includes(a);
  }).sort((e, a) => e.category - a.category);
  return (0, n.jsxs)('div', {
className: l()(O.column),
children: [
  null != E && (0, n.jsx)(T, {
    invite: E,
    trackClick: s
  }),
  (0, n.jsxs)('div', {
    className: l()(O.column, O.gapSm),
    children: [
      (0, n.jsx)(c.Text, {
        variant: 'text-xs/semibold',
        children: A.Z.Messages.GAME_PROFILE_LINKS
      }),
      (0, n.jsx)('div', {
        className: O.row,
        children: I.map(e => {
          let a, {
              category: t,
              url: r
            } = e,
            l = null;
          switch (t) {
            case i.p.OFFICIAL:
              l = (0, n.jsx)(c.GlobeEarthIcon, {}), a = d.as.WebsiteLink;
              break;
            case i.p.TWITTER:
              l = (0, n.jsx)(c.XNeutralIcon, {}), a = d.as.XLink;
              break;
            case i.p.YOUTUBE:
              a = d.as.YouTubeLink, l = (0, n.jsx)(c.YouTubeIcon, {});
          }
          return null != l ? (0, n.jsx)(c.Anchor, {
            href: r,
            onClick: () => {
              s(a);
            },
            target: '_blank',
            children: l
          }, r) : null;
        })
      })
    ]
  })
]
  });
};