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
  o = n("679653"),
  d = n("42203"),
  c = n("305961"),
  f = n("957255"),
  E = n("27618"),
  h = n("697218"),
  v = n("718550"),
  I = n("368121"),
  _ = n("944633"),
  C = n("228427"),
  m = n("697468"),
  g = n("398604"),
  T = n("334683"),
  p = n("799547"),
  N = n("776863"),
  x = n("613767"),
  S = n("841363"),
  A = n("306939"),
  L = n("745049"),
  y = n("49111"),
  R = n("782340"),
  M = n("869785");
let j = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
  D = (e, t) => {
    let n = d.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === y.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(n, t),
      i = s ? I.default : _.default,
      r = s ? C.default : m.default;
    return (0, l.jsx)(a ? r : i, {
      height: 24,
      className: M.channelOptionIcon
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
    } = e, d = n === y.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, r), f = (0, p.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: d ? R.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : R.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: M.options,
      disabled: i,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: f.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, h.default, E.default, !0)
        })),
        onChange: e => {
          let t = f.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => D(null == e ? void 0 : e.value, r),
        isDisabled: i
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: M.channelPrivate,
        variant: "text-sm/normal",
        children: R.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function O(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: R.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== L.GuildScheduledEventEntityTypes.EXTERNAL ? {
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
let V = e => t => {
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
    if (j(l)) {
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
    entityType: o,
    channelId: c
  } = n, f = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), E = a.useRef(null);
  a.useEffect(() => {
    if (i && j(o)) {
      var e;
      null === (e = E.current) || void 0 === e || e.focus()
    }
  }, [i, o]);
  let h = V(s),
    v = U(s),
    I = (0, S.getLocationFromEventData)(n),
    _ = (0, S.getChannelTypeFromEntity)(o),
    C = (0, g.isGuildScheduledEventActive)(n);
  return null == o || o === L.GuildScheduledEventEntityTypes.NONE ? null : j(o) ? (0, l.jsx)(u.FormItem, {
    title: R.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: M.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: M.textInput,
      onChange: h,
      placeholder: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: L.MAX_EVENT_LOCATION_LENGTH,
      value: null != I ? I : "",
      inputRef: E
    })
  }) : null == _ ? null : (0, l.jsx)(G, {
    guildId: t,
    channelType: _,
    onSelectChannel: v,
    channel: f,
    entityType: o,
    disabled: C
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, T.default)(t, void 0), d = (0, T.default)(t, y.ChannelTypes.GUILD_VOICE), f = (0, T.default)(t, y.ChannelTypes.GUILD_STAGE_VOICE), E = (0, p.useGetEventChannelsByType)(t, y.ChannelTypes.GUILD_VOICE), h = (0, N.useChannelsUserCanStartStageIn)(i), _ = null == i ? void 0 : i.hasFeature(y.GuildFeatures.COMMUNITY), m = (0, g.isGuildScheduledEventActive)(n), x = b(s, n), S = a.useMemo(() => {
    let e = [{
      name: R.default.Messages.VOICE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.VOICE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: I.default,
      ...O(L.GuildScheduledEventEntityTypes.VOICE, m, d, E.length)
    }, {
      name: R.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: L.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: v.default,
      ...O(L.GuildScheduledEventEntityTypes.EXTERNAL, m, o, 0)
    }];
    return _ ? [{
      name: R.default.Messages.STAGE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: R.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: C.default,
      ...O(L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, m, f, h.length)
    }, ...e] : e
  }, [o, d, f, _, E.length, h.length, m]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: S,
    onChange: x,
    className: M.options
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: i,
    isSlideReady: o = !1
  } = e, {
    entityType: d
  } = a, E = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), h = (0, N.useChannelsUserCanStartStageIn)(E), v = (0, r.useStateFromStores)([f.default], () => f.default.can(y.Permissions.MANAGE_CHANNELS, E)), I = null == E ? void 0 : E.hasFeature(y.GuildFeatures.COMMUNITY), _ = b(i, a), C = I && !j(d) && 0 === h.length && v && null != d;
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
    }), (0, l.jsx)(w, {
      guildId: t,
      guildEvent: a,
      onChange: i
    }), (0, l.jsx)(P, {
      guildId: t,
      guildEvent: a,
      isFocusReady: o,
      onChange: i
    }), C ? (0, l.jsx)(A.default, {
      onClick: () => {
        _({
          value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: R.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: y.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}