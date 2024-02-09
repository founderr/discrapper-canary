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
  p = n("398604"),
  g = n("334683"),
  T = n("799547"),
  N = n("776863"),
  x = n("613767"),
  S = n("841363"),
  A = n("306939"),
  L = n("745049"),
  y = n("49111"),
  M = n("782340"),
  R = n("869785");
let j = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
  D = (e, t) => {
    let n = d.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === y.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, x.isChannelPublic)(n, t),
      r = s ? I.default : _.default,
      i = s ? C.default : m.default;
    return (0, l.jsx)(a ? i : r, {
      height: 24,
      className: R.channelOptionIcon
    })
  },
  O = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: s,
      disabled: r,
      entityType: i
    } = e, d = n === y.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), f = (0, T.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: d ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: R.options,
      disabled: r,
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
        renderOptionPrefix: e => D(null == e ? void 0 : e.value, i),
        isDisabled: r
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: R.channelPrivate,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function G(e, t, n, l) {
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
      let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function P(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s,
    isFocusReady: r
  } = e, {
    entityType: o,
    channelId: c
  } = n, f = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), E = a.useRef(null);
  a.useEffect(() => {
    if (r && j(o)) {
      var e;
      null === (e = E.current) || void 0 === e || e.focus()
    }
  }, [r, o]);
  let h = V(s),
    v = U(s),
    I = (0, S.getLocationFromEventData)(n),
    _ = (0, S.getChannelTypeFromEntity)(o),
    C = (0, p.isGuildScheduledEventActive)(n);
  return null == o || o === L.GuildScheduledEventEntityTypes.NONE ? null : j(o) ? (0, l.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: R.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: R.textInput,
      onChange: h,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: L.MAX_EVENT_LOCATION_LENGTH,
      value: null != I ? I : "",
      inputRef: E
    })
  }) : null == _ ? null : (0, l.jsx)(O, {
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
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, g.default)(t, void 0), d = (0, g.default)(t, y.ChannelTypes.GUILD_VOICE), f = (0, g.default)(t, y.ChannelTypes.GUILD_STAGE_VOICE), E = (0, T.useGetEventChannelsByType)(t, y.ChannelTypes.GUILD_VOICE), h = (0, N.useChannelsUserCanStartStageIn)(r), _ = null == r ? void 0 : r.hasFeature(y.GuildFeatures.COMMUNITY), m = (0, p.isGuildScheduledEventActive)(n), x = b(s, n), S = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: I.default,
      ...G(L.GuildScheduledEventEntityTypes.VOICE, m, d, E.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: L.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: v.default,
      ...G(L.GuildScheduledEventEntityTypes.EXTERNAL, m, o, 0)
    }];
    return _ ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: C.default,
      ...G(L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, m, f, h.length)
    }, ...e] : e
  }, [o, d, f, _, E.length, h.length, m]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: S,
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
    isSlideReady: o = !1
  } = e, {
    entityType: d
  } = a, E = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), h = (0, N.useChannelsUserCanStartStageIn)(E), v = (0, i.useStateFromStores)([f.default], () => f.default.can(y.Permissions.MANAGE_CHANNELS, E)), I = null == E ? void 0 : E.hasFeature(y.GuildFeatures.COMMUNITY), _ = b(r, a), C = I && !j(d) && 0 === h.length && v && null != d;
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
    }), (0, l.jsx)(P, {
      guildId: t,
      guildEvent: a,
      isFocusReady: o,
      onChange: r
    }), C ? (0, l.jsx)(A.default, {
      onClick: () => {
        _({
          value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
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