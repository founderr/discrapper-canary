n.d(t, {
  B: function() {
return f;
  }
});
var i = n(735250),
  l = n(227879),
  r = n(704215),
  a = n(481060),
  s = n(605236),
  o = n(527379),
  c = n(31445),
  u = n(703656),
  d = n(443063),
  h = n(981631),
  p = n(176505),
  _ = n(619588);

function f(e) {
  let {
guild: t,
guildChannels: l,
hasBanner: f
  } = e, g = l.getCommunitySection(), C = (0, c.Z)(t), I = async () => {
let {
  default: e
} = await n.e('46826').then(n.bind(n, 859432));
return n => {
  let {
    closePopout: l
  } = n;
  return null != t && (0, i.jsx)(e, {
    onClose: l,
    guild: t
  });
};
  };
  return (0, i.jsxs)('div', {
className: _.header,
'data-has-banner': f,
children: [
  (0, i.jsx)(a.Heading, {
    variant: 'heading-lg/semibold',
    children: t.name
  }),
  (0, i.jsxs)('div', {
    className: _.subheader,
    children: [
      (0, i.jsx)(a.Text, {
        variant: 'text-xs/normal',
        color: 'text-low-contrast',
        children: '15 Members'
      }),
      (0, i.jsx)('span', {
        className: _.dot,
        children: '\u2022'
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-xs/normal',
        color: 'text-low-contrast',
        children: 'Friends Server'
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: _.buttons,
    children: [
      g.getRows().map((e, l) => {
        switch (g.getRow(l)) {
          case d.f.CHANNELS_AND_ROLES:
            return (0, i.jsx)(m, {
              onPress: () => {
                (0, u.uL)(h.Z5c.CHANNEL(t.id, C ? p.oC.CUSTOMIZE_COMMUNITY : p.oC.CHANNEL_BROWSER));
              },
              children: (0, i.jsx)(a.ChannelListMagnifyingGlassIcon, {
                size: 'sm'
              })
            });
          case d.f.GUILD_SCHEDULED_EVENTS:
            return (0, i.jsx)(m, {
              onPress: async () => {
                await (0, a.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([
                    n.e('22347'),
                    n.e('56236'),
                    n.e('5137')
                  ]).then(n.bind(n, 17671));
                  return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: t.id
                  });
                }), (0, s.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
              },
              children: (0, i.jsx)(a.CalendarIcon, {
                size: 'sm'
              })
            });
          case d.f.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, i.jsx)(m, {
              onPress: () => {
                (0, o._X)(t.id);
              },
              children: (0, i.jsx)(a.GroupIcon, {
                size: 'sm'
              })
            });
          default:
            return null;
        }
      }),
      (0, i.jsx)(a.LazyPopout, {
        renderPopout: I,
        position: 'bottom',
        align: 'center',
        animation: a.Popout.Animation.SCALE,
        children: e => (0, i.jsx)(m, {
          ...e,
          children: (0, i.jsx)(a.MoreHorizontalIcon, {
            size: 'sm'
          })
        })
      })
    ]
  })
]
  });
}

function m(e) {
  return (0, i.jsx)(l.zx, {
className: _.button,
...e
  });
}