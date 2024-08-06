n.d(t, {
  Z: function() {
return L;
  },
  q: function() {
return O;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(153867),
  o = n(607070),
  c = n(100527),
  d = n(906732),
  u = n(264165),
  g = n(70097),
  m = n(740492),
  v = n(592125),
  p = n(430824),
  f = n(496675),
  I = n(944486),
  x = n(566620),
  _ = n(317381),
  h = n(146936),
  C = n(678173),
  T = n(696068),
  E = n(361213),
  S = n(952561),
  b = n(778569),
  j = n(513202),
  N = n(412019),
  M = n(981631),
  A = n(689938),
  Z = n(99877);

function y(e) {
  return (0, l.e7)([
p.Z,
f.Z
  ], () => {
let t = p.Z.getGuild(e);
return null != t && f.Z.can(M.Plq.CREATE_INSTANT_INVITE, t);
  }, [e]);
}
let D = ['embedded_background'];

function L(e) {
  var t, n;
  let {
applicationId: c,
guildId: d,
selectedChannelId: f,
setSelectedChannelId: _,
enableSelectedTextChannelInvite: h
  } = e, S = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), j = (0, C.T)(null != d ? d : null, null != c ? c : null), [M, L] = i.useState(h && !m.ZP.disableInviteWithTextChannelActivityLaunch), O = (0, T.F)(d);
  i.useEffect(() => {
var e;
x.w1({
  guildId: d
}), _(null !== (e = (0, T.d)({
  guildId: d
})) && void 0 !== e ? e : void 0);
  }, [
d,
_
  ]);
  let B = null == j ? void 0 : j.activity.activity_preview_video_asset_id,
V = null != B ? (0, E.Z)(null !== (t = null == j ? void 0 : j.application.id) && void 0 !== t ? t : '', B) : null,
{
  url: R
} = (0, b.Z)({
  applicationId: null !== (n = null == j ? void 0 : j.application.id) && void 0 !== n ? n : '',
  size: 1024,
  names: D
}),
k = (0, l.e7)([p.Z], () => p.Z.getGuild(d)),
P = (0, l.e7)([
  v.Z,
  I.Z
], () => v.Z.getChannel(I.Z.getChannelId())),
H = y(null != d ? d : void 0);
  if ((null == j ? void 0 : j.application) == null || null == k)
return null;
  let F = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
  return (0, a.jsxs)(s.Scroller, {
className: Z.scroll,
children: [
  null != V || null != R ? (0, a.jsx)(u.Z, {
    aspectRatio: 16 / 9,
    className: Z.imageContainer,
    children: (0, a.jsx)(g.Z, {
      className: Z.video,
      src: V,
      loop: !0,
      autoPlay: !S,
      poster: R,
      muted: !0
    })
  }) : null,
  (0, a.jsxs)('div', {
    className: Z.descriptionArea,
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-xl/semibold',
        children: null == j ? void 0 : j.application.name
      }),
      (0, a.jsx)(s.Text, {
        className: Z.descriptionAreaSubtext,
        variant: 'text-md/normal',
        children: null == j ? void 0 : j.application.description
      })
    ]
  }),
  (0, a.jsx)(s.Select, {
    placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
    optionClassName: Z.__invalid_option,
    options: O,
    isSelected: e => {
      let {
        channel: t
      } = e;
      return t.id === f;
    },
    select: e => {
      let {
        channel: t
      } = e;
      return _(t.id);
    },
    serialize: e => {
      let {
        channel: t
      } = e;
      return t.id;
    },
    renderOptionValue: () => {
      let e = O.find(e => e.value.channel.id === f);
      return null == e ? null : (0, a.jsx)(N.O, {
        channel: e.value.channel,
        users: e.value.users
      });
    },
    renderOptionLabel: e => {
      let {
        value: {
          channel: t,
          users: n
        }
      } = e;
      return (0, a.jsx)(N.O, {
        channel: t,
        users: n
      });
    }
  }),
  H && h ? (0, a.jsxs)(s.Clickable, {
    className: Z.checkboxContainer,
    onClick: () => {
      let e = !M;
      r.ZP.updatedUnsyncedSettings({
        disableInviteWithTextChannelActivityLaunch: !e
      }), L(e);
    },
    children: [
      (0, a.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: Z.checkbox,
        value: M,
        displayOnly: !0
      }),
      (0, a.jsxs)(s.Text, {
        variant: 'text-sm/normal',
        children: [
          A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
          ' ',
          (0, a.jsx)('strong', {
            children: F
          })
        ]
      })
    ]
  }) : null
]
  });
}

function O(e) {
  let {
applicationId: t,
guildId: n,
locationObject: i,
onBack: r,
onClose: o,
selectedChannelId: u,
enableSelectedTextChannelInvite: g
  } = e, {
analyticsLocations: p
  } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), f = (0, C.T)(null != n ? n : null, null != t ? t : null), T = (0, S.Z)(), E = (0, l.e7)([
v.Z,
I.Z
  ], () => v.Z.getChannel(I.Z.getChannelId())), b = (0, l.e7)([m.ZP], () => g && !m.ZP.disableInviteWithTextChannelActivityLaunch), N = (0, l.e7)([_.ZP], () => null != u && '' !== u && _.ZP.getEmbeddedActivitiesForChannel(u).some(e => e.applicationId === t)), D = y(n), L = async () => {
var e;
if (null != u && '' !== u && null != f && null != n && '' !== n)
  await (0, h.Z)({
    targetApplicationId: null === (e = f.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: T,
    locationObject: i,
    channelId: u,
    guildId: n,
    embeddedActivitiesManager: j.Z,
    analyticsLocations: p
  }) && (o(), null != E && D && b && await x.sN({
    activityChannelId: u,
    invitedChannelId: E.id,
    applicationId: f.application.id,
    location: M.Sbl.ACTIVITY_SHELF
  }));
  };
  return (0, a.jsx)(d.Gt, {
value: p,
children: (0, a.jsxs)('div', {
  className: Z.footerContainer,
  children: [
    (0, a.jsx)(s.Clickable, {
      onClick: r,
      className: Z.backToBrowse,
      children: (0, a.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: A.Z.Messages.BACK
      })
    }),
    null == u ? (0, a.jsx)('div', {}) : (0, a.jsx)(s.Button, {
      className: Z.launchButton,
      onClick: L,
      color: N ? s.Button.Colors.GREEN : void 0,
      fullWidth: !0,
      children: N ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
    })
  ]
})
  });
}