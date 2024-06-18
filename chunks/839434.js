"use strict";
n.d(t, {
  Z: function() {
    return el
  }
}), n(47120);
var i, s = n(735250),
  l = n(470079),
  o = n(120356),
  a = n.n(o),
  r = n(442837),
  c = n(692547),
  d = n(477690),
  u = n(481060),
  h = n(239091),
  p = n(765250),
  f = n(13245),
  E = n(872810),
  g = n(586902),
  m = n(835473),
  Z = n(933557),
  I = n(594190),
  S = n(569545),
  _ = n(914923),
  C = n(165393),
  v = n(989941),
  x = n(552282),
  N = n(565799),
  T = n(501655),
  O = n(786915),
  A = n(7188),
  y = n(199902),
  R = n(314897),
  M = n(592125),
  L = n(77498),
  P = n(131951),
  D = n(944486),
  b = n(606304),
  j = n(449224),
  w = n(938475),
  k = n(237997),
  V = n(285952),
  U = n(366695),
  B = n(154921),
  G = n(547881),
  z = n(333454),
  Y = n(805009),
  W = n(136015),
  F = n(51144),
  H = n(145597),
  K = n(658785),
  X = n(244073),
  Q = n(876205),
  J = n(906037),
  q = n(981631),
  $ = n(65154),
  ee = n(689938),
  et = n(688533);

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ei(e) {
  let {
    flipped: t = !1,
    locked: n = !1,
    user: i,
    nick: o,
    displayNameMode: c,
    displayUserMode: d,
    size: u = q.ipw.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: E,
    voiceState: m
  } = e, {
    showKeybindIndicators: Z
  } = K.Z.useExperiment({
    location: "overlay_voice_widget"
  }), I = (0, r.e7)([k.Z], () => k.Z.showKeybindIndicators), S = (0, r.e7)([R.default], () => R.default.getId()), _ = (0, r.e7)([P.Z], () => P.Z.isLocalMute(i.id)), C = (0, r.e7)([y.Z], () => y.Z.getCurrentUserActiveStream()), v = (0, r.Wu)([y.Z], () => null != C ? y.Z.getViewerIds(C) : []), x = (0, g.Z)({
    userId: i.id,
    context: f
  }), N = (0, r.e7)([b.Z], () => b.Z.isPrioritySpeaker(i.id, f)), T = (0, r.e7)([y.Z], () => null != y.Z.getStreamForUser(i.id, E)), O = l.useMemo(() => null != C && C.ownerId !== i.id && v.includes(i.id), [C, i.id, v]);
  if (d === q.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
  let A = i.id === S,
    {
      mute: M,
      selfMute: L,
      suppress: D,
      deaf: j,
      selfDeaf: w
    } = m,
    V = Z && I,
    U = L && (!A || !V);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(Y.Z, {
      guildId: E,
      onClick: n ? void 0 : e => null == h ? void 0 : h(e, i),
      onContextMenu: n ? void 0 : e => null == p ? void 0 : p(e, i),
      className: a()(et.voiceUserWrapper, {
        [et.faded]: !x,
        [et.interactive]: !n
      }),
      user: i,
      nick: o,
      speaking: !1,
      flipped: t,
      isStreaming: T,
      iconClassName: a()(et.voiceIcon, {
        [et.locked]: n
      }),
      isWatching: O,
      isOverlay: !0,
      size: u,
      priority: N,
      mute: M || U || _,
      localMute: _,
      serverMute: M || D,
      deaf: j || w,
      serverDeaf: j,
      userNameClassName: a()(et.username, {
        [et.locked]: n,
        [et.hidden]: n && (c === q.wC$.NEVER || !x && c === q.wC$.ONLY_WHILE_SPEAKING)
      })
    }), A && V && (0, s.jsx)(Q.Z, {
      value: L,
      action: q.kg4.TOGGLE_MUTE,
      shouldShow: !M && !D
    })]
  })
}
class es extends(i = l.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: l,
      isPreviewingInGame: o,
      channel: r,
      anchor: c,
      avatarSizeMode: u
    } = this.props, h = null != c.right, p = t.map(t => {
      var a;
      let {
        user: c,
        voiceState: d,
        member: p
      } = t;
      if (null == c || null == r || null == e) return null;
      let f = l || o;
      return (0, s.jsx)(ei, {
        guildId: null == r ? void 0 : r.guild_id,
        user: c,
        nick: null !== (a = null == p ? void 0 : p.nick) && void 0 !== a ? a : F.ZP.getName(c),
        flipped: h,
        voiceState: d,
        displayNameMode: n,
        displayUserMode: i,
        size: u,
        locked: f,
        onContextMenu: this.handleUserContextMenu,
        onClick: this.handleUserContextMenu,
        context: e
      }, c.id)
    });
    return (0, s.jsx)(G.ZP.Body, {
      className: a()({
        [d.Z.VOICE_WIDGET_TOP_MARGIN]: l,
        [et.bottomMargin]: l
      }),
      children: (0, s.jsx)(Y.e, {
        className: et.voiceList,
        children: p
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, s.jsxs)(G.ZP.Bar, {
      className: a()(et.draggableStartArea, {
        [et.preview]: n
      }),
      children: [(0, s.jsxs)(G.ZP.Content, {
        dynamicSize: !0,
        className: a()(et.content, {
          [et.hidden]: n
        }),
        children: [(0, s.jsx)(u.DragIcon, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: a()(et.icon, et.faded, et.dragIcon)
        }), (0, s.jsx)(u.VoiceNormalIcon, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: a()(et.icon, et.faded, et.speakerIcon)
        }), (0, s.jsx)(B.Z, {
          color: c.Z.unsafe_rawColors.PRIMARY_200.css,
          className: et.title,
          children: t
        })]
      }), n ? null : (0, s.jsx)(G.ZP.Icon, {
        icon: u.SettingsIcon,
        label: ee.Z.Messages.VOICE_SETTINGS,
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, s.jsx)(G.ZP.Icon, {
        icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
        label: e ? ee.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : ee.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
        onClick: this.handlePin,
        tooltipPosition: "left",
        size: 18,
        isActive: e
      })]
    })
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: l,
      application: o,
      streamMetadata: r,
      streamApplication: c,
      stream: d
    } = this.props;
    if (t || null == d || null == l) return null;
    let {
      sanitizedTitle: h,
      title: p
    } = (0, _.Z)(r);
    return (0, s.jsx)(G.ZP.Bar, {
      className: a()(et.streamerControls, {
        [et.hidden]: i,
        [et.unpinned]: !n
      }),
      children: (0, s.jsxs)(G.ZP.Content, {
        className: et.streamerContent,
        dynamicSize: !0,
        children: [(0, s.jsxs)("div", {
          className: et.streamerInner,
          children: [(null == c ? void 0 : c.id) != null && c.id === (null == o ? void 0 : o.id) ? (0, s.jsx)(U.Z, {
            className: et.gameIcon,
            game: o
          }) : (0, s.jsx)(C.Z, {
            title: h
          }), (0, s.jsxs)(V.Z, {
            direction: V.Z.Direction.VERTICAL,
            justify: V.Z.Justify.BETWEEN,
            className: et.streamerInfo,
            children: [(0, s.jsx)(u.Text, {
              className: et.streaming,
              variant: "text-sm/normal",
              children: ee.Z.Messages.STATUS_STREAMING
            }), (0, s.jsx)(z.Z, {
              children: null !== (e = null == c ? void 0 : c.name) && void 0 !== e ? e : p
            })]
          })]
        }), (0, s.jsxs)(V.Z, {
          grow: 0,
          children: [(0, s.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(O.Z, {
              stream: d,
              iconClassName: et.streamerIcon,
              appContext: q.IlC.OVERLAY
            })
          }), (0, s.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(A.Z, {
              stream: d,
              appContext: q.IlC.OVERLAY
            })
          }), (0, s.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(u.TooltipContainer, {
              text: ee.Z.Messages.STOP_STREAMING,
              children: (0, s.jsx)(u.Button, {
                onClick: this.handleStopStream,
                look: u.Button.Looks.BLANK,
                size: u.Button.Sizes.NONE,
                children: (0, s.jsx)(u.ScreenXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: et.streamerIcon
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, J.m3)(this.props, this.shouldDisplay())
  }
  componentDidUpdate(e) {
    (0, J.CR)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: s,
        channel: l
      } = e;
    return 0 !== s.length && null != t && null != l && (!n || !!i) && !0
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: l,
      channel: o
    } = this.props;
    if (null == o || null == e || !this.shouldDisplay()) return null;
    let r = q.t_t.UNPINNED;
    return i && (r = q.t_t.PINNED), l && (r = q.t_t.IN_GAME_PREVIEW), n && (r = q.t_t.IN_GAME), (0, s.jsxs)(G.ZP, {
      type: r,
      width: 280,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, s.jsx)(X.Z, {
        className: a()({
          [et.preview]: l
        }),
        contentClassName: a()({
          [et.hidden]: l
        }),
        channel: o,
        lobbyId: t,
        context: e,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), en(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, s.jsx)(e, {
          ...n,
          user: t,
          showMediaItems: !0,
          mediaEngineContext: i
        })
      })
    }), en(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, u.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, 344516));
        return n => (0, s.jsx)(l, {
          ...n,
          mediaEngineContext: e,
          title: null != t ? null : i
        })
      })
    }), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
        channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
        channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
        widget_type: q.Odu.VOICE
      });
      let {
        id: s
      } = this.props;
      (0, p.xh)(s)
    }), en(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      if (null != e) E.g((0, S.V9)(e))
    })
  }
}
en(es, "defaultProps", {
  context: $.Yn.DEFAULT
});

function el(e) {
  var t;
  let n = (0, r.e7)([D.Z, M.Z], () => M.Z.getChannel(D.Z.getVoiceChannelId())),
    i = (0, Z.ZP)(n),
    o = function() {
      let [e] = (0, r.e7)([w.ZP, N.Z, D.Z, M.Z], () => {
        let e = M.Z.getChannel(D.Z.getVoiceChannelId());
        return null == e ? [
          [], -1
        ] : e.isGuildStageVoice() ? [N.Z.getMutableParticipants(e.id, T.pV.SPEAKER), N.Z.getParticipantsVersion(e.id)] : [w.ZP.getVoiceStatesForChannel(e), w.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], W.Q), t = (0, r.e7)([R.default], () => R.default.getId()), {
        showKeybindIndicators: n
      } = K.Z.useExperiment({
        location: "voice_widget"
      });
      return l.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? -1 : n.user.id === t ? 1 : 0) : e, [e, t, n])
    }(),
    a = (0, r.e7)([y.Z], () => y.Z.getStreamerActiveStreamMetadata()),
    c = (0, r.e7)([I.ZP, j.Z, L.Z], () => {
      var e;
      let t = (0, v.Z)(I.ZP, j.Z);
      return null != t ? null === (e = L.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id : null
    }),
    d = (0, m.q)(c),
    u = (0, r.cj)([I.ZP, j.Z, y.Z, k.Z], () => {
      let e = (0, v.Z)(I.ZP, j.Z),
        t = y.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: k.Z.getDisplayUserMode(),
        displayNameMode: k.Z.getDisplayNameMode(),
        avatarSizeMode: k.Z.getAvatarSizeMode(),
        streamApplication: (null == a ? void 0 : a.pid) === (0, H.QF)() ? (0, x.Z)(e) : null,
        stream: t
      }
    });
  return (0, s.jsx)(es, {
    ...u,
    application: d,
    ...e,
    sortedVoiceStates: o,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: a,
    streamApplication: null !== (t = u.streamApplication) && void 0 !== t ? t : {
      id: null,
      name: null == a ? void 0 : a.sourceName
    }
  })
}