n.d(t, {
  Z: function() {
    return er
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(442837),
  c = n(433517),
  u = n(481060),
  d = n(570140),
  h = n(393238),
  m = n(40851),
  E = n(100527),
  p = n(906732),
  g = n(358221),
  f = n(414910),
  C = n(909820),
  _ = n(493010),
  I = n(788983),
  x = n(928518),
  T = n(703656),
  N = n(493754),
  Z = n(880831),
  S = n(73563),
  v = n(800965),
  A = n(107169),
  M = n(891551),
  R = n(314897),
  j = n(979696),
  L = n(430824),
  O = n(496675),
  P = n(944486),
  y = n(358085),
  b = n(792125),
  D = n(998502),
  U = n(922482),
  k = n(431328),
  w = n(501655),
  H = n(427679),
  G = n(513449),
  B = n(153349),
  V = n(901434),
  F = n(302270),
  z = n(308177),
  W = n(700483),
  Y = n(686468),
  K = n(801405),
  q = n(903108),
  X = n(981631),
  Q = n(354459),
  J = n(689938),
  $ = n(607176);
let ee = "HasBeenInStageChannel",
  et = (e, t) => () => {
    let n = e.getGuildId();
    null != n && null != t && (0, T.XU)(n, t), I.hP(e)
  },
  en = () => {
    d.Z.wait(() => I.xv(X.KJ3.CHANNEL_CALL_POPOUT))
  },
  el = e => {
    I.hY(X.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function ei(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: r,
    selectedParticipant: c
  } = e, u = t.getGuildId(), d = (0, o.e7)([P.Z], () => P.Z.getMostRecentSelectedTextChannelId(u), [u]), h = R.default.getId(), m = !(0, o.e7)([g.Z], () => g.Z.isFullscreenInContext(n)) && (!y.isPlatformEmbedded || y.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS)), E = null != c && c.type !== Q.fO.ACTIVITY && c.user.id !== h, p = i.useMemo(() => {
    var e;
    return null !== (e = null == a ? void 0 : a.window) && void 0 !== e ? e : window
  }, [a]), C = (0, K.Z)({
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: a,
    currentWindow: p
  }), _ = n === X.IlC.POPOUT && y.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS);
  return (0, l.jsxs)(l.Fragment, {
    children: [E ? (0, l.jsx)(M.Z, {
      context: (0, f.Z)(c.type),
      userId: c.user.id,
      currentWindow: p,
      sliderClassName: $.volumeSlider
    }) : null, _ ? (0, l.jsx)(A.Z, {
      className: $.rightTrayIcon,
      popoutWindowAlwaysOnTop: r,
      onToggleStayOnTop: el
    }) : null, m ? (0, l.jsx)(v.Z, {
      className: $.rightTrayIcon,
      popoutOpen: s,
      onOpenPopout: et(t, d),
      onClosePopout: en
    }) : null, C]
  })
}

function es(e) {
  let {
    channel: t
  } = e, n = (0, m.bp)(), i = (0, o.e7)([O.Z], () => O.Z.can(X.Plq.CREATE_INSTANT_INVITE, t)), s = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)), a = (0, o.e7)([H.Z], () => H.Z.getStageInstanceByChannel(t.id)), r = i || (null == a ? void 0 : a.invite_code) != null;
  return null != s && r ? (0, l.jsx)(N.Z, {
    channel: t,
    appContext: n,
    className: $.__invalid_leftTrayIcon,
    analyticsLocation: X.ZY5.GUILD_CHANNEL
  }) : null
}

function ea(e) {
  let t, {
      channel: n,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: c,
      popoutWindow: u,
      popoutWindowAlwaysOnTop: d,
      popoutOpen: h,
      chatOpen: E
    } = e,
    p = (0, m.bp)(),
    f = (0, o.e7)([P.Z], () => P.Z.getVoiceChannelId() === n.id, [n.id]),
    _ = (0, o.e7)([O.Z], () => O.Z.can(X.Plq.CONNECT, n)),
    I = (0, k.w8)(n.id, w.pV.SPEAKER),
    x = (0, o.e7)([g.Z], () => g.Z.getSelectedParticipant(n.id)),
    T = h && p !== X.IlC.POPOUT,
    [N, v] = i.useState(0),
    {
      isOnStartStageScreen: A
    } = (0, G.ZP)();
  (0, G.MV)(n);
  let M = (0, o.e7)([j.Z], () => j.Z.getToastsEnabled(n.id)),
    R = (0, q.Z)(n) ? null != x ? "84px" : "124px" : null != x ? "0px" : "48px";
  return t = A ? (0, l.jsx)(Y.Z, {
    channel: n,
    onContinueClick: () => {
      (0, G.Ku)(!1), !f && (0, U.TM)(n)
    }
  }) : f ? (0, l.jsx)(z.Z, {
    channel: n,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, r.debounce)(() => v(t), 1e3, {
        leading: !0
      })()
    }
  }) : (0, l.jsx)(V.Z, {
    participants: I,
    channel: n,
    hasConnectPermission: _
  }), (0, l.jsx)(S.Z, {
    style: {
      height: "calc(100% - ".concat(R, ")"),
      paddingTop: R
    },
    disableGradients: 0 === N && S.e.TOP,
    renderBottomLeft: () => (0, l.jsx)(es, {
      channel: n
    }),
    renderBottomCenter: () => f ? (0, l.jsx)(W.Z, {
      channel: n,
      isOnStartStageScreen: A
    }) : null,
    renderBottomRight: () => f ? (0, l.jsx)(ei, {
      channel: n,
      appContext: p,
      popoutOpen: h,
      popoutWindow: u,
      popoutWindowAlwaysOnTop: d,
      selectedParticipant: x
    }) : null,
    renderHeader: () => (0, l.jsx)(F.Z, {
      inPopout: p === X.IlC.POPOUT,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: c,
      channel: n
    }),
    renderChatToasts: () => !M || E || T ? null : (0, l.jsx)(C.ZP, {
      children: (0, l.jsx)(Z.Z, {
        className: a()($.chatToasts, {
          [$.rtsSidebarOpen]: c
        }),
        channelId: n.id
      })
    }),
    onActive: () => {},
    onPreventIdle: () => {},
    onAllowIdle: () => {},
    onForceIdle: () => {},
    screenMessage: T ? {
      mainText: J.Z.Messages.POPOUT_PLAYER_OPENED
    } : null,
    idle: !1,
    children: !T && t
  })
}

function er(e) {
  let {
    channel: t
  } = e, [s, r] = i.useState(!1), d = i.useCallback(() => {
    r(!s)
  }, [s, r]), {
    popoutWindow: f,
    popoutWindowAlwaysOnTop: I
  } = (0, o.cj)([x.Z], () => ({
    popoutWindow: x.Z.getWindow(X.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: x.Z.getIsAlwaysOnTop(X.KJ3.CHANNEL_CALL_POPOUT)
  })), T = null != f && !f.closed, {
    analyticsLocations: N
  } = (0, p.ZP)(E.Z.STAGE_CHANNEL_CALL), Z = (0, m.bp)(), S = (0, o.e7)([g.Z], () => g.Z.getChatOpen(t.id), [t.id]), v = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]);
  i.useEffect(() => {
    null == c.K.get(ee) && ((0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("37194")]).then(n.bind(n, 947422));
      return t => (0, l.jsx)(e, {
        ...t
      })
    }), c.K.set(ee, Date.now()))
  }, []);
  let {
    width: A = 0,
    ref: M
  } = (0, h.Z)();
  return (0, l.jsx)(p.Gt, {
    value: N,
    children: (0, l.jsxs)(C.B2, {
      children: [(0, l.jsxs)("div", {
        className: $.container,
        ref: M,
        children: [(0, l.jsx)("div", {
          className: a()($.callContainer, (0, b.Q)(X.BRd.DARK), {
            [$.sidebarVisible]: s,
            [$.sidebarOrChatVisible]: s || S
          }),
          children: (0, l.jsx)(ea, {
            channel: t,
            toggleRequestToSpeakSidebar: d,
            showRequestToSpeakSidebar: s,
            popoutWindow: f,
            popoutWindowAlwaysOnTop: I,
            popoutOpen: T,
            chatOpen: S
          })
        }), s ? (0, l.jsx)(B.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: d,
          chatOpen: S
        }) : null, (0, l.jsx)("div", {
          className: $.channelChatWrapper,
          children: S && (!T || T && Z === X.IlC.POPOUT) && (0, l.jsx)(_.Z, {
            channel: t,
            guild: v,
            maxWidth: A - 550
          })
        })]
      }), (0, l.jsx)(C.H_, {})]
    })
  })
}