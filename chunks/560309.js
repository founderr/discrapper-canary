"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  r = n.n(s),
  i = n("446674"),
  u = n("77078"),
  d = n("679653"),
  o = n("42203"),
  c = n("305961"),
  E = n("957255"),
  f = n("27618"),
  I = n("697218"),
  h = n("718550"),
  _ = n("368121"),
  T = n("944633"),
  N = n("228427"),
  v = n("697468"),
  m = n("398604"),
  g = n("334683"),
  S = n("799547"),
  C = n("776863"),
  x = n("613767"),
  p = n("841363"),
  A = n("306939"),
  L = n("745049"),
  O = n("49111"),
  M = n("782340"),
  R = n("869785");
let D = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
  y = (e, t) => {
    let n = o.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === O.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(n, t),
      r = s ? _.default : T.default,
      i = s ? N.default : v.default;
    return (0, l.jsx)(a ? i : r, {
      height: 24,
      className: R.channelOptionIcon
    })
  },
  j = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: s,
      disabled: r,
      entityType: i
    } = e, o = n === O.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, S.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: o ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: R.options,
      disabled: r,
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
        renderOptionPrefix: e => y(null == e ? void 0 : e.value, i),
        isDisabled: r
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: R.channelPrivate,
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
let U = e => t => {
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
    if (D(l)) {
      var s;
      let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function H(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s,
    isFocusReady: r
  } = e, {
    entityType: d,
    channelId: c
  } = n, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (r && D(d)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [r, d]);
  let I = U(s),
    h = P(s),
    _ = (0, p.getLocationFromEventData)(n),
    T = (0, p.getChannelTypeFromEntity)(d),
    N = (0, m.isGuildScheduledEventActive)(n);
  return null == d || d === L.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, l.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: R.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: R.textInput,
      onChange: I,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: L.MAX_EVENT_LOCATION_LENGTH,
      value: null != _ ? _ : "",
      inputRef: f
    })
  }) : null == T ? null : (0, l.jsx)(j, {
    guildId: t,
    channelType: T,
    onSelectChannel: h,
    channel: E,
    entityType: d,
    disabled: N
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, g.default)(t, void 0), o = (0, g.default)(t, O.ChannelTypes.GUILD_VOICE), E = (0, g.default)(t, O.ChannelTypes.GUILD_STAGE_VOICE), f = (0, S.useGetEventChannelsByType)(t, O.ChannelTypes.GUILD_VOICE), I = (0, C.useChannelsUserCanStartStageIn)(r), T = null == r ? void 0 : r.hasFeature(O.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(n), x = G(s, n), p = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: _.default,
      ...V(L.GuildScheduledEventEntityTypes.VOICE, v, o, f.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: L.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: h.default,
      ...V(L.GuildScheduledEventEntityTypes.EXTERNAL, v, d, 0)
    }];
    return T ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: N.default,
      ...V(L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, I.length)
    }, ...e] : e
  }, [d, o, E, T, f.length, I.length, v]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: p,
    onChange: x,
    className: R.options
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
  } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), I = (0, C.useChannelsUserCanStartStageIn)(f), h = (0, i.useStateFromStores)([E.default], () => E.default.can(O.Permissions.MANAGE_CHANNELS, f)), _ = null == f ? void 0 : f.hasFeature(O.GuildFeatures.COMMUNITY), T = G(r, a), N = _ && !D(o) && 0 === I.length && h && null != o;
  return (0, l.jsxs)("div", {
    className: R.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: R.header,
      children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: R.text,
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(w, {
      guildId: t,
      guildEvent: a,
      onChange: r
    }), (0, l.jsx)(H, {
      guildId: t,
      guildEvent: a,
      isFocusReady: d,
      onChange: r
    }), N ? (0, l.jsx)(A.default, {
      onClick: () => {
        T({
          value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: O.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}