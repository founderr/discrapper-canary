n.d(t, {
  Z: function() {
    return U
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(704215),
  r = n(481060),
  o = n(26151),
  c = n(287734),
  u = n(40851),
  d = n(607070),
  h = n(451576),
  m = n(358221),
  p = n(605236),
  E = n(243778),
  g = n(590293),
  f = n(970731),
  C = n(560688),
  _ = n(173507),
  I = n(523746),
  x = n(819640),
  T = n(131951),
  N = n(699516),
  Z = n(594174),
  S = n(979651),
  v = n(502568),
  A = n(810090),
  M = n(585483),
  R = n(63063),
  j = n(981631),
  L = n(921944),
  O = n(65154),
  P = n(689938),
  y = n(745380);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D extends i.PureComponent {
  componentDidMount() {
    M.S.subscribe(j.CkL.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    M.S.unsubscribe(j.CkL.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, t;
    let {
      inCall: n,
      callActive: i,
      callUnavailable: s,
      isBlocked: a,
      channel: o,
      mode: c
    } = this.props;
    if (n || i && c === j.WtW.VOICE) return null;
    let u = o.isManaged(),
      d = null,
      h = !1;
    return T.Z.supports(O.AN.VIDEO) ? a ? (d = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, h = !0) : i && c === j.WtW.VIDEO ? (t = this.handleJoinVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.START_VIDEO_CALL) : (h = !0, t = this.handleBrowserNotSupported, d = P.Z.Messages.BROWSER_NOT_SUPPORTED), (0, l.jsx)(v.ZP.Icon, {
      icon: r.VideoIcon,
      onClick: t,
      disabled: h || s,
      tooltip: d,
      tooltipColor: e
    })
  }
  renderVoiceCallButton() {
    let e;
    let {
      inCall: t,
      canShowTooltip: n,
      callActive: i,
      callUnavailable: s,
      isBlocked: o,
      channel: c,
      canShowActivityGdmTooltip: u,
      dismissibleContentTypes: d,
      useReducedMotion: h
    } = this.props;
    if (t) return null;
    let m = c.isManaged(),
      p = "",
      g = !1;
    s ? (p = m ? P.Z.Messages.VOICE_UNAVAILABLE : P.Z.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, g = !0) : o ? (p = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, g = !0) : p = i ? m ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VOICE_CALL : m ? P.Z.Messages.CONNECT : P.Z.Messages.START_VOICE_CALL;
    let C = (0, l.jsx)(v.ZP.Icon, {
      icon: r.PhoneCallIcon,
      onClick: this.handleVoiceClick,
      disabled: g,
      tooltip: p,
      tooltipColor: e
    });
    return (0, l.jsx)(E.Z, {
      contentTypes: d,
      children: e => {
        let {
          visibleContent: i,
          markAsDismissed: s
        } = e;
        if (i === a.z.ACTIVITY_GDM_CALL_TOOLTIP) return (0, l.jsx)(r.Popout, {
          position: "bottom",
          align: "center",
          animation: r.Popout.Animation.TRANSLATE,
          shouldShow: n && u && !t,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, l.jsx)(f.ZP, {
              header: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(A.Z, {
                  className: y.tooltipImage,
                  autoPlay: !h,
                  src: "https://cdn.discordapp.com/attachments/860252504826445825/1078051428028924006/mobile_coachmark.mp4",
                  width: 248,
                  height: 139.5,
                  loop: !0,
                  muted: !0
                }), (0, l.jsx)(r.Heading, {
                  variant: "heading-md/bold",
                  color: "always-white",
                  children: P.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                })]
              }),
              content: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: P.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                }), (0, l.jsx)(r.Anchor, {
                  href: R.Z.getArticleURL(j.BhN.ACTIVITIES),
                  children: P.Z.Messages.LEARN_MORE
                })]
              }),
              buttonCTA: P.Z.Messages.GOT_IT,
              onClick: () => {
                t(), s(L.L.UNKNOWN)
              },
              className: y.tooltip
            })
          },
          children: () => C
        });
        return C
      }
    })
  }
  render() {
    return (0, l.jsxs)(i.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), b(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: l,
        appContext: i
      } = this.props, s = l ? n.getRecipientId() : null, a = () => o.Z.call(n.id, t, !l && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), s);
      t ? (0, _.Z)(a, i) : a()
    }), b(this, "handleJoinCall", e => {
      c.default.selectVoiceChannel(this.props.channel.id, e)
    }), b(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        canShowActivityGdmTooltip: l
      } = this.props;
      if (l && (0, p.EW)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: L.L.AUTO
        }), t);
      else if (n) return this.handleJoinCall(!1);
      else return this.handleStartCall(e, !1)
    }), b(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, !0)
    }), b(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props;
      (0, _.Z)(() => this.handleJoinCall(!0), e)
    }), b(this, "handleBrowserNotSupported", () => {
      (0, C.Z)()
    })
  }
}

function U(e) {
  let {
    channel: t
  } = e, n = (0, g.Z)(), r = (0, s.e7)([m.Z], () => m.Z.getMode(t.id)), o = (0, s.e7)([S.Z], () => S.Z.isInChannel(t.id)), c = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), {
    callActive: p,
    callUnavailable: E
  } = (0, s.cj)([I.Z], () => ({
    callActive: I.Z.isCallActive(t.id),
    callUnavailable: I.Z.isCallUnavailable(t.id)
  })), f = t.getRecipientId(), {
    notFriend: C,
    isBlocked: _
  } = (0, s.cj)([N.Z], () => ({
    notFriend: t.type === j.d4z.DM && null != f && !N.Z.isFriend(f),
    isBlocked: t.type === j.d4z.DM && null != f && N.Z.isBlocked(f)
  })), T = (0, s.e7)([Z.default], () => Z.default.getUser(f)), v = (0, u.bp)(), A = [], M = (0, h.Z)(t.id), R = (0, s.e7)([x.Z], () => x.Z.hasLayers());
  M && !R && A.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
  let [L, O] = i.useState(!1);
  return (i.useEffect(() => {
    let e = setTimeout(() => {
      O(!0)
    }, 250);
    return () => clearTimeout(e)
  }, []), n || (null == T ? void 0 : T.bot)) ? null : (0, l.jsx)(D, {
    channel: t,
    mode: r,
    inCall: o,
    callActive: p,
    callUnavailable: E,
    notFriend: C,
    isBlocked: _,
    appContext: v,
    canShowTooltip: L,
    canShowActivityGdmTooltip: M,
    dismissibleContentTypes: A,
    useReducedMotion: c
  })
}