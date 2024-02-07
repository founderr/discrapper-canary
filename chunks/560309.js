"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  d = n("679653"),
  o = n("42203"),
  c = n("305961"),
  E = n("957255"),
  f = n("27618"),
  I = n("697218"),
  _ = n("718550"),
  h = n("368121"),
  T = n("944633"),
  v = n("228427"),
  N = n("697468"),
  S = n("398604"),
  m = n("334683"),
  g = n("799547"),
  C = n("776863"),
  x = n("613767"),
  p = n("841363"),
  A = n("306939"),
  R = n("745049"),
  L = n("49111"),
  M = n("782340"),
  O = n("869785");
let D = e => e === R.GuildScheduledEventEntityTypes.EXTERNAL,
  y = (e, t) => {
    let n = o.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === L.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(n, t),
      i = s ? h.default : T.default,
      r = s ? v.default : N.default;
    return (0, l.jsx)(a ? r : i, {
      height: 24,
      className: O.channelOptionIcon
    })
  },
  j = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: s,
      disabled: i,
      entityType: r
    } = e, o = n === L.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, r), E = (0, g.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: o ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: O.options,
      disabled: i,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, d.computeChannelName)(e, I.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => y(null == e ? void 0 : e.value, r),
        isDisabled: i
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: O.channelPrivate,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== R.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let U = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  G = e => t => {
    var n;
    e({
      channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
    })
  },
  P = (e, t) => n => {
    let {
      value: l
    } = n, a = {
      entityType: l,
      scheduledEndTime: void 0
    };
    if (D(l)) {
      var s;
      let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s,
    isFocusReady: i
  } = e, {
    entityType: d,
    channelId: c
  } = n, E = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (i && D(d)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [i, d]);
  let I = U(s),
    _ = G(s),
    h = (0, p.getLocationFromEventData)(n),
    T = (0, p.getChannelTypeFromEntity)(d),
    v = (0, S.isGuildScheduledEventActive)(n);
  return null == d || d === R.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, l.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: O.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: O.textInput,
      onChange: I,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: R.MAX_EVENT_LOCATION_LENGTH,
      value: null != h ? h : "",
      inputRef: f
    })
  }) : null == T ? null : (0, l.jsx)(j, {
    guildId: t,
    channelType: T,
    onSelectChannel: _,
    channel: E,
    entityType: d,
    disabled: v
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, m.default)(t, void 0), o = (0, m.default)(t, L.ChannelTypes.GUILD_VOICE), E = (0, m.default)(t, L.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, L.ChannelTypes.GUILD_VOICE), I = (0, C.useChannelsUserCanStartStageIn)(i), T = null == i ? void 0 : i.hasFeature(L.GuildFeatures.COMMUNITY), N = (0, S.isGuildScheduledEventActive)(n), x = P(s, n), p = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: R.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: h.default,
      ...V(R.GuildScheduledEventEntityTypes.VOICE, N, o, f.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: R.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: _.default,
      ...V(R.GuildScheduledEventEntityTypes.EXTERNAL, N, d, 0)
    }];
    return T ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: R.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: v.default,
      ...V(R.GuildScheduledEventEntityTypes.STAGE_INSTANCE, N, E, I.length)
    }, ...e] : e
  }, [d, o, E, T, f.length, I.length, N]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: p,
    onChange: x,
    className: O.options
  })
}

function H(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: i,
    isSlideReady: d = !1
  } = e, {
    entityType: o
  } = a, f = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), I = (0, C.useChannelsUserCanStartStageIn)(f), _ = (0, r.useStateFromStores)([E.default], () => E.default.can(L.Permissions.MANAGE_CHANNELS, f)), h = null == f ? void 0 : f.hasFeature(L.GuildFeatures.COMMUNITY), T = P(i, a), v = h && !D(o) && 0 === I.length && _ && null != o;
  return (0, l.jsxs)("div", {
    className: O.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: O.header,
      children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: O.text,
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(F, {
      guildId: t,
      guildEvent: a,
      onChange: i
    }), (0, l.jsx)(w, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: i
    }), v ? (0, l.jsx)(A.default, {
      onClick: () => {
        T({
          value: R.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: L.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}