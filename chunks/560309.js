"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("866227"),
  r = l.n(s),
  i = l("446674"),
  u = l("77078"),
  d = l("679653"),
  o = l("42203"),
  c = l("305961"),
  E = l("957255"),
  f = l("27618"),
  I = l("697218"),
  _ = l("718550"),
  h = l("368121"),
  T = l("944633"),
  N = l("228427"),
  v = l("697468"),
  m = l("398604"),
  S = l("334683"),
  g = l("799547"),
  C = l("776863"),
  x = l("613767"),
  p = l("841363"),
  A = l("306939"),
  O = l("745049"),
  M = l("49111"),
  R = l("782340"),
  L = l("869785");
let D = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
  y = (e, t) => {
    let l = o.default.getChannel(e);
    if (null == l) return null;
    let a = l.type === M.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(l, t),
      r = s ? h.default : T.default,
      i = s ? N.default : v.default;
    return (0, n.jsx)(a ? i : r, {
      height: 24,
      className: L.channelOptionIcon
    })
  },
  j = e => {
    let {
      guildId: t,
      channelType: l,
      channel: a,
      onSelectChannel: s,
      disabled: r,
      entityType: i
    } = e, o = l === M.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, g.useGetEventChannelsByType)(t, l);
    return (0, n.jsxs)(u.FormItem, {
      title: o ? R.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : R.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: L.options,
      disabled: r,
      required: !0,
      children: [(0, n.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, d.computeChannelName)(e, I.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => y(null == e ? void 0 : e.value, i),
        isDisabled: r
      }), !c && (0, n.jsx)(u.Text, {
        color: "header-secondary",
        className: L.channelPrivate,
        variant: "text-sm/normal",
        children: R.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, l, n) {
  return t ? {
    disabled: !0,
    tooltipText: R.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : l ? 0 === n && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: R.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: R.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let U = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  P = e => t => {
    var l;
    e({
      channelId: null !== (l = null == t ? void 0 : t.id) && void 0 !== l ? l : null
    })
  },
  G = (e, t) => l => {
    let {
      value: n
    } = l, a = {
      entityType: n,
      scheduledEndTime: void 0
    };
    if (D(n)) {
      var s;
      let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function H(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s,
    isFocusReady: r
  } = e, {
    entityType: d,
    channelId: c
  } = l, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (r && D(d)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [r, d]);
  let I = U(s),
    _ = P(s),
    h = (0, p.getLocationFromEventData)(l),
    T = (0, p.getChannelTypeFromEntity)(d),
    N = (0, m.isGuildScheduledEventActive)(l);
  return null == d || d === O.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, n.jsx)(u.FormItem, {
    title: R.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: L.options,
    required: !0,
    children: (0, n.jsx)(u.TextInput, {
      className: L.textInput,
      onChange: I,
      placeholder: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: O.MAX_EVENT_LOCATION_LENGTH,
      value: null != h ? h : "",
      inputRef: f
    })
  }) : null == T ? null : (0, n.jsx)(j, {
    guildId: t,
    channelType: T,
    onSelectChannel: _,
    channel: E,
    entityType: d,
    disabled: N
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, S.default)(t, void 0), o = (0, S.default)(t, M.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, M.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, M.ChannelTypes.GUILD_VOICE), I = (0, C.useChannelsUserCanStartStageIn)(r), T = null == r ? void 0 : r.hasFeature(M.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(l), x = G(s, l), p = a.useMemo(() => {
    let e = [{
      name: R.default.Messages.VOICE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.VOICE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: h.default,
      ...V(O.GuildScheduledEventEntityTypes.VOICE, v, o, f.length)
    }, {
      name: R.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: O.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: _.default,
      ...V(O.GuildScheduledEventEntityTypes.EXTERNAL, v, d, 0)
    }];
    return T ? [{
      name: R.default.Messages.STAGE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: N.default,
      ...V(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, I.length)
    }, ...e] : e
  }, [d, o, E, T, f.length, I.length, v]);
  return (0, n.jsx)(u.RadioGroup, {
    value: l.entityType,
    options: p,
    onChange: x,
    className: L.options
  })
}

function B(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: r,
    isSlideReady: d = !1
  } = e, {
    entityType: o
  } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), I = (0, C.useChannelsUserCanStartStageIn)(f), _ = (0, i.useStateFromStores)([E.default], () => E.default.can(M.Permissions.MANAGE_CHANNELS, f)), h = null == f ? void 0 : f.hasFeature(M.GuildFeatures.COMMUNITY), T = G(r, a), N = h && !D(o) && 0 === I.length && _ && null != o;
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: L.header,
      children: R.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, n.jsx)(u.Text, {
      color: "header-secondary",
      className: L.text,
      variant: "text-sm/normal",
      children: R.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, n.jsx)(F, {
      guildId: t,
      guildEvent: a,
      onChange: r
    }), (0, n.jsx)(H, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: r
    }), N ? (0, n.jsx)(A.default, {
      onClick: () => {
        T({
          value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: R.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await l.el("581354").then(l.bind(l, "581354"));
          return l => (0, n.jsx)(e, {
            ...l,
            channelType: M.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}