"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("866227"),
  s = n.n(i),
  r = n("446674"),
  u = n("77078"),
  d = n("679653"),
  o = n("42203"),
  c = n("305961"),
  f = n("957255"),
  E = n("27618"),
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
  L = n("306939"),
  O = n("745049"),
  A = n("49111"),
  R = n("782340"),
  M = n("869785");
let y = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
  D = (e, t) => {
    let n = o.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === A.ChannelTypes.GUILD_STAGE_VOICE,
      i = (0, p.isChannelPublic)(n, t),
      s = i ? h.default : T.default,
      r = i ? v.default : N.default;
    return (0, l.jsx)(a ? r : s, {
      height: 24,
      className: M.channelOptionIcon
    })
  },
  U = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: i,
      disabled: s,
      entityType: r
    } = e, o = n === A.ChannelTypes.GUILD_STAGE_VOICE, c = (0, p.isChannelPublic)(a, r), f = (0, g.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: o ? R.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : R.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: M.options,
      disabled: s,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: f.map(e => ({
          value: e.id,
          label: (0, d.computeChannelName)(e, I.default, E.default, !0)
        })),
        onChange: e => {
          let t = f.find(t => t.id === e);
          i(null != t ? t : void 0)
        },
        renderOptionPrefix: e => D(null == e ? void 0 : e.value, r),
        isDisabled: s
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: M.channelPrivate,
        variant: "text-sm/normal",
        children: R.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: R.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
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
let P = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  j = e => t => {
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
    if (y(l)) {
      var i;
      let e = (null !== (i = s(t.scheduledStartTime)) && void 0 !== i ? i : s()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function F(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: s
  } = e, {
    entityType: d,
    channelId: c
  } = n, f = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), E = a.useRef(null);
  a.useEffect(() => {
    if (s && y(d)) {
      var e;
      null === (e = E.current) || void 0 === e || e.focus()
    }
  }, [s, d]);
  let I = P(i),
    _ = j(i),
    h = (0, x.getLocationFromEventData)(n),
    T = (0, x.getChannelTypeFromEntity)(d),
    v = (0, m.isGuildScheduledEventActive)(n);
  return null == d || d === O.GuildScheduledEventEntityTypes.NONE ? null : y(d) ? (0, l.jsx)(u.FormItem, {
    title: R.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: M.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: M.textInput,
      onChange: I,
      placeholder: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: O.MAX_EVENT_LOCATION_LENGTH,
      value: null != h ? h : "",
      inputRef: E
    })
  }) : null == T ? null : (0, l.jsx)(U, {
    guildId: t,
    channelType: T,
    onSelectChannel: _,
    channel: f,
    entityType: d,
    disabled: v
  })
}

function b(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, s = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, S.default)(t, void 0), o = (0, S.default)(t, A.ChannelTypes.GUILD_VOICE), f = (0, S.default)(t, A.ChannelTypes.GUILD_STAGE_VOICE), E = (0, g.useGetEventChannelsByType)(t, A.ChannelTypes.GUILD_VOICE), I = (0, C.useChannelsUserCanStartStageIn)(s), T = null == s ? void 0 : s.hasFeature(A.GuildFeatures.COMMUNITY), N = (0, m.isGuildScheduledEventActive)(n), p = G(i, n), x = a.useMemo(() => {
    let e = [{
      name: R.default.Messages.VOICE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.VOICE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: h.default,
      ...V(O.GuildScheduledEventEntityTypes.VOICE, N, o, E.length)
    }, {
      name: R.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: O.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: _.default,
      ...V(O.GuildScheduledEventEntityTypes.EXTERNAL, N, d, 0)
    }];
    return T ? [{
      name: R.default.Messages.STAGE_CHANNEL,
      value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: v.default,
      ...V(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, N, f, I.length)
    }, ...e] : e
  }, [d, o, f, T, E.length, I.length, N]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: x,
    onChange: p,
    className: M.options
  })
}

function H(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: i,
    onChange: s,
    isSlideReady: d = !1
  } = e, {
    entityType: o
  } = a, E = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), I = (0, C.useChannelsUserCanStartStageIn)(E), _ = (0, r.useStateFromStores)([f.default], () => f.default.can(A.Permissions.MANAGE_CHANNELS, E)), h = null == E ? void 0 : E.hasFeature(A.GuildFeatures.COMMUNITY), T = G(s, a), v = h && !y(o) && 0 === I.length && _ && null != o;
  return (0, l.jsxs)("div", {
    className: M.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: M.header,
      children: R.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: M.text,
      variant: "text-sm/normal",
      children: R.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(b, {
      guildId: t,
      guildEvent: a,
      onChange: s
    }), (0, l.jsx)(F, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: s
    }), v ? (0, l.jsx)(L.default, {
      onClick: () => {
        T({
          value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: R.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: A.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}