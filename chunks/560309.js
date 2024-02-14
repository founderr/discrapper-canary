"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
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
  h = n("697218"),
  v = n("718550"),
  _ = n("368121"),
  I = n("944633"),
  m = n("228427"),
  T = n("697468"),
  N = n("398604"),
  g = n("334683"),
  C = n("799547"),
  x = n("776863"),
  p = n("613767"),
  S = n("841363"),
  A = n("306939"),
  L = n("745049"),
  R = n("49111"),
  M = n("782340"),
  y = n("504067");
let D = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
  j = (e, t) => {
    let n = o.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === R.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, p.isChannelPublic)(n, t),
      i = s ? _.default : I.default,
      r = s ? m.default : T.default;
    return (0, l.jsx)(a ? r : i, {
      height: 24,
      className: y.channelOptionIcon
    })
  },
  G = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: s,
      disabled: i,
      entityType: r
    } = e, o = n === R.ChannelTypes.GUILD_STAGE_VOICE, c = (0, p.isChannelPublic)(a, r), E = (0, C.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: o ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: y.options,
      disabled: i,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, d.computeChannelName)(e, h.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => j(null == e ? void 0 : e.value, r),
        isDisabled: i
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: y.channelPrivate,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== L.GuildScheduledEventEntityTypes.EXTERNAL ? {
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
let O = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  U = e => t => {
    var n;
    e({
      channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
    })
  },
  b = (e, t) => n => {
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

function P(e) {
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
  let h = O(s),
    v = U(s),
    _ = (0, S.getLocationFromEventData)(n),
    I = (0, S.getChannelTypeFromEntity)(d),
    m = (0, N.isGuildScheduledEventActive)(n);
  return null == d || d === L.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, l.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: y.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: y.textInput,
      onChange: h,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: L.MAX_EVENT_LOCATION_LENGTH,
      value: null != _ ? _ : "",
      inputRef: f
    })
  }) : null == I ? null : (0, l.jsx)(G, {
    guildId: t,
    channelType: I,
    onSelectChannel: v,
    channel: E,
    entityType: d,
    disabled: m
  })
}

function B(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, g.default)(t, void 0), o = (0, g.default)(t, R.ChannelTypes.GUILD_VOICE), E = (0, g.default)(t, R.ChannelTypes.GUILD_STAGE_VOICE), f = (0, C.useGetEventChannelsByType)(t, R.ChannelTypes.GUILD_VOICE), h = (0, x.useChannelsUserCanStartStageIn)(i), I = null == i ? void 0 : i.hasFeature(R.GuildFeatures.COMMUNITY), T = (0, N.isGuildScheduledEventActive)(n), p = b(s, n), S = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: _.default,
      ...V(L.GuildScheduledEventEntityTypes.VOICE, T, o, f.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: L.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: v.default,
      ...V(L.GuildScheduledEventEntityTypes.EXTERNAL, T, d, 0)
    }];
    return I ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: m.default,
      ...V(L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, T, E, h.length)
    }, ...e] : e
  }, [d, o, E, I, f.length, h.length, T]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: S,
    onChange: p,
    className: y.options
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: i,
    isSlideReady: d = !1
  } = e, {
    entityType: o
  } = a, f = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), h = (0, x.useChannelsUserCanStartStageIn)(f), v = (0, r.useStateFromStores)([E.default], () => E.default.can(R.Permissions.MANAGE_CHANNELS, f)), _ = null == f ? void 0 : f.hasFeature(R.GuildFeatures.COMMUNITY), I = b(i, a), m = _ && !D(o) && 0 === h.length && v && null != o;
  return (0, l.jsxs)("div", {
    className: y.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: y.header,
      children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: y.text,
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(B, {
      guildId: t,
      guildEvent: a,
      onChange: i
    }), (0, l.jsx)(P, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: i
    }), m ? (0, l.jsx)(A.default, {
      onClick: () => {
        I({
          value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: R.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}