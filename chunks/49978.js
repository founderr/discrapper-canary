l.d(n, {
  Z: function() {
    return L
  },
  q: function() {
    return V
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  a = l(442837),
  s = l(481060),
  r = l(153867),
  o = l(607070),
  c = l(100527),
  d = l(906732),
  u = l(740492),
  g = l(592125),
  p = l(430824),
  m = l(496675),
  v = l(944486),
  I = l(368874),
  x = l(810090),
  E = l(566620),
  T = l(317381),
  h = l(146936),
  f = l(678173),
  C = l(696068),
  _ = l(361213),
  S = l(952561),
  j = l(778569),
  Z = l(513202),
  N = l(412019),
  M = l(981631),
  A = l(689938),
  D = l(380121);

function y(e) {
  return (0, a.e7)([p.Z, m.Z], () => {
    let n = p.Z.getGuild(e);
    return null != n && m.Z.can(M.Plq.CREATE_INSTANT_INVITE, n)
  }, [e])
}
let b = ["embedded_background"];

function L(e) {
  var n, l;
  let {
    applicationId: c,
    guildId: d,
    selectedChannelId: m,
    setSelectedChannelId: T,
    enableSelectedTextChannelInvite: h
  } = e, S = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), Z = (0, a.e7)([g.Z], () => g.Z.getChannel(m)), M = (0, f.T)(null != d ? d : null, null != c ? c : "", Z), [L, V] = i.useState(h && !u.ZP.disableInviteWithTextChannelActivityLaunch), R = (0, C.F)(d);
  i.useEffect(() => {
    var e;
    E.w1({
      guildId: d
    }), T(null !== (e = (0, C.d)({
      guildId: d
    })) && void 0 !== e ? e : void 0)
  }, [d, T]);
  let O = null == M ? void 0 : M.activity.activity_preview_video_asset_id,
    B = null != O ? (0, _.Z)(null !== (n = null == M ? void 0 : M.application.id) && void 0 !== n ? n : "", O) : null,
    {
      url: H
    } = (0, j.Z)({
      applicationId: null !== (l = null == M ? void 0 : M.application.id) && void 0 !== l ? l : "",
      size: 1024,
      names: b
    }),
    P = (0, a.e7)([p.Z], () => p.Z.getGuild(d)),
    F = (0, a.e7)([g.Z, v.Z], () => g.Z.getChannel(v.Z.getChannelId())),
    k = y(null != d ? d : void 0);
  if ((null == M ? void 0 : M.application) == null || null == P) return null;
  let Y = (null == F ? void 0 : F.name) == null || (null == F ? void 0 : F.name) === "" ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(F.name);
  return (0, t.jsxs)(s.Scroller, {
    className: D.scroll,
    children: [null != B || null != H ? (0, t.jsx)(I.Z, {
      aspectRatio: 16 / 9,
      className: D.imageContainer,
      children: (0, t.jsx)(x.Z, {
        className: D.video,
        src: B,
        loop: !0,
        autoPlay: !S,
        poster: H,
        muted: !0
      })
    }) : null, (0, t.jsxs)("div", {
      className: D.descriptionArea,
      children: [(0, t.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: null == M ? void 0 : M.application.name
      }), (0, t.jsx)(s.Text, {
        className: D.descriptionAreaSubtext,
        variant: "text-md/normal",
        children: null == M ? void 0 : M.application.description
      })]
    }), (0, t.jsx)(s.Select, {
      placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: D.__invalid_option,
      options: R,
      isSelected: e => {
        let {
          channel: n
        } = e;
        return n.id === m
      },
      select: e => {
        let {
          channel: n
        } = e;
        return T(n.id)
      },
      serialize: e => {
        let {
          channel: n
        } = e;
        return n.id
      },
      renderOptionValue: () => {
        let e = R.find(e => e.value.channel.id === m);
        return null == e ? null : (0, t.jsx)(N.O, {
          channel: e.value.channel,
          users: e.value.users
        })
      },
      renderOptionLabel: e => {
        let {
          value: {
            channel: n,
            users: l
          }
        } = e;
        return (0, t.jsx)(N.O, {
          channel: n,
          users: l
        })
      }
    }), k && h ? (0, t.jsxs)(s.Clickable, {
      className: D.checkboxContainer,
      onClick: () => {
        let e = !L;
        r.ZP.updatedUnsyncedSettings({
          disableInviteWithTextChannelActivityLaunch: !e
        }), V(e)
      },
      children: [(0, t.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: D.checkbox,
        value: L,
        displayOnly: !0
      }), (0, t.jsxs)(s.Text, {
        variant: "text-sm/normal",
        children: [A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, t.jsx)("strong", {
          children: Y
        })]
      })]
    }) : null]
  })
}

function V(e) {
  let {
    applicationId: n,
    guildId: l,
    locationObject: i,
    onBack: r,
    onClose: o,
    selectedChannelId: p,
    enableSelectedTextChannelInvite: m
  } = e, {
    analyticsLocations: I
  } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), x = (0, a.e7)([g.Z], () => g.Z.getChannel(p)), C = (0, f.T)(null != l ? l : null, null != n ? n : null, x), _ = (0, S.Z)(), j = (0, a.e7)([g.Z, v.Z], () => g.Z.getChannel(v.Z.getChannelId())), N = (0, a.e7)([u.ZP], () => m && !u.ZP.disableInviteWithTextChannelActivityLaunch), b = (0, a.e7)([T.ZP], () => null != p && "" !== p && T.ZP.getEmbeddedActivitiesForChannel(p).some(e => e.applicationId === n)), L = y(l), V = async () => {
    var e;
    if (null != p && "" !== p && null != C && null != l && "" !== l) await (0, h.Z)({
      targetApplicationId: null === (e = C.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: _,
      locationObject: i,
      channelId: p,
      guildId: l,
      embeddedActivitiesManager: Z.Z,
      analyticsLocations: I
    }) && (o(), null != j && L && N && await E.sN({
      activityChannelId: p,
      invitedChannelId: j.id,
      applicationId: C.application.id,
      location: M.Sbl.ACTIVITY_SHELF
    }))
  };
  return (0, t.jsx)(d.Gt, {
    value: I,
    children: (0, t.jsxs)("div", {
      className: D.footerContainer,
      children: [(0, t.jsx)(s.Clickable, {
        onClick: r,
        className: D.backToBrowse,
        children: (0, t.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: A.Z.Messages.BACK
        })
      }), null == p ? (0, t.jsx)("div", {}) : (0, t.jsx)(s.Button, {
        className: D.launchButton,
        onClick: V,
        color: b ? s.Button.Colors.GREEN : void 0,
        fullWidth: !0,
        children: b ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
      })]
    })
  })
}