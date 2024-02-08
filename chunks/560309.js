"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("679653"),
  d = n("42203"),
  c = n("305961"),
  E = n("957255"),
  f = n("27618"),
  I = n("697218"),
  _ = n("718550"),
  h = n("368121"),
  T = n("944633"),
  v = n("228427"),
  N = n("697468"),
  m = n("398604"),
  S = n("334683"),
  g = n("799547"),
  C = n("776863"),
  p = n("613767"),
  x = n("841363"),
  A = n("306939"),
  R = n("745049"),
  M = n("49111"),
  L = n("782340"),
  y = n("869785");
let O = e => e === R.GuildScheduledEventEntityTypes.EXTERNAL,
  D = (e, t) => {
    let n = d.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === M.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, p.isChannelPublic)(n, t),
      i = s ? h.default : T.default,
      r = s ? v.default : N.default;
    return (0, l.jsx)(a ? r : i, {
      height: 24,
      className: y.channelOptionIcon
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
    } = e, d = n === M.ChannelTypes.GUILD_STAGE_VOICE, c = (0, p.isChannelPublic)(a, r), E = (0, g.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: d ? L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : L.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: y.options,
      disabled: i,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, I.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => D(null == e ? void 0 : e.value, r),
        isDisabled: i
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: y.channelPrivate,
        variant: "text-sm/normal",
        children: L.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function U(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== R.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let V = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  P = e => t => {
    var n;
    e({
      channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
    })
  },
  G = (e, t) => n => {
    let {
      value: l
    } = n, a = {
      entityType: l,
      scheduledEndTime: void 0
    };
    if (O(l)) {
      var s;
      let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function b(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s,
    isFocusReady: i
  } = e, {
    entityType: o,
    channelId: c
  } = n, E = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (i && O(o)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [i, o]);
  let I = V(s),
    _ = P(s),
    h = (0, x.getLocationFromEventData)(n),
    T = (0, x.getChannelTypeFromEntity)(o),
    v = (0, m.isGuildScheduledEventActive)(n);
  return null == o || o === R.GuildScheduledEventEntityTypes.NONE ? null : O(o) ? (0, l.jsx)(u.FormItem, {
    title: L.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: y.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: y.textInput,
      onChange: I,
      placeholder: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: R.MAX_EVENT_LOCATION_LENGTH,
      value: null != h ? h : "",
      inputRef: f
    })
  }) : null == T ? null : (0, l.jsx)(j, {
    guildId: t,
    channelType: T,
    onSelectChannel: _,
    channel: E,
    entityType: o,
    disabled: v
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, S.default)(t, void 0), d = (0, S.default)(t, M.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, M.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, M.ChannelTypes.GUILD_VOICE), I = (0, C.useChannelsUserCanStartStageIn)(i), T = null == i ? void 0 : i.hasFeature(M.GuildFeatures.COMMUNITY), N = (0, m.isGuildScheduledEventActive)(n), p = G(s, n), x = a.useMemo(() => {
    let e = [{
      name: L.default.Messages.VOICE_CHANNEL,
      value: R.GuildScheduledEventEntityTypes.VOICE,
      desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: h.default,
      ...U(R.GuildScheduledEventEntityTypes.VOICE, N, d, f.length)
    }, {
      name: L.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: R.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: _.default,
      ...U(R.GuildScheduledEventEntityTypes.EXTERNAL, N, o, 0)
    }];
    return T ? [{
      name: L.default.Messages.STAGE_CHANNEL,
      value: R.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: v.default,
      ...U(R.GuildScheduledEventEntityTypes.STAGE_INSTANCE, N, E, I.length)
    }, ...e] : e
  }, [o, d, E, T, f.length, I.length, N]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: x,
    onChange: p,
    className: y.options
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: i,
    isSlideReady: o = !1
  } = e, {
    entityType: d
  } = a, f = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), I = (0, C.useChannelsUserCanStartStageIn)(f), _ = (0, r.useStateFromStores)([E.default], () => E.default.can(M.Permissions.MANAGE_CHANNELS, f)), h = null == f ? void 0 : f.hasFeature(M.GuildFeatures.COMMUNITY), T = G(i, a), v = h && !O(d) && 0 === I.length && _ && null != d;
  return (0, l.jsxs)("div", {
    className: y.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: y.header,
      children: L.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: y.text,
      variant: "text-sm/normal",
      children: L.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(F, {
      guildId: t,
      guildEvent: a,
      onChange: i
    }), (0, l.jsx)(b, {
      guildId: t,
      guildEvent: a,
      isFocusReady: o,
      onChange: i
    }), v ? (0, l.jsx)(A.default, {
      onClick: () => {
        T({
          value: R.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: L.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: M.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}