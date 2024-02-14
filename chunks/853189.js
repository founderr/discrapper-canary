"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  o = n("561288"),
  u = n("987317"),
  d = n("244201"),
  c = n("206230"),
  f = n("702173"),
  h = n("191145"),
  m = n("10641"),
  p = n("384997"),
  E = n("889014"),
  S = n("5667"),
  g = n("19065"),
  C = n("727284"),
  _ = n("950104"),
  I = n("778588"),
  T = n("42887"),
  v = n("27618"),
  x = n("697218"),
  N = n("800762"),
  A = n("887657"),
  M = n("437825"),
  R = n("664336"),
  j = n("58608"),
  L = n("659500"),
  O = n("701909"),
  y = n("49111"),
  P = n("994428"),
  b = n("353927"),
  D = n("782340"),
  U = n("319373");
class w extends a.PureComponent {
  componentDidMount() {
    L.ComponentDispatch.subscribe(y.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    L.ComponentDispatch.unsubscribe(y.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, t;
    let {
      inCall: n,
      callActive: a,
      callUnavailable: s,
      isBlocked: i,
      channel: o,
      mode: u
    } = this.props;
    if (n || a && u === y.ChannelModes.VOICE) return null;
    let d = o.isManaged(),
      c = null,
      f = !1;
    return T.default.supports(b.Features.VIDEO) ? i ? (c = D.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, f = !0) : a && u === y.ChannelModes.VIDEO ? (t = this.handleJoinVideoCall, c = d ? D.default.Messages.CONNECT : D.default.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, c = d ? D.default.Messages.CONNECT : D.default.Messages.START_VIDEO_CALL) : (f = !0, t = this.handleBrowserNotSupported, c = D.default.Messages.BROWSER_NOT_SUPPORTED), (0, l.jsx)(R.default.Icon, {
      icon: M.default,
      onClick: t,
      disabled: f || s,
      tooltip: c,
      tooltipColor: e
    })
  }
  renderVoiceCallButton() {
    let e;
    let {
      inCall: t,
      canShowTooltip: n,
      callActive: a,
      callUnavailable: s,
      isBlocked: o,
      channel: u,
      canShowActivityGdmTooltip: d,
      dismissibleContentTypes: c,
      useReducedMotion: f
    } = this.props;
    if (t) return null;
    let h = u.isManaged(),
      m = "",
      E = !1;
    s ? (m = h ? D.default.Messages.VOICE_UNAVAILABLE : D.default.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, E = !0) : o ? (m = D.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, E = !0) : m = a ? h ? D.default.Messages.CONNECT : D.default.Messages.JOIN_VOICE_CALL : h ? D.default.Messages.CONNECT : D.default.Messages.START_VOICE_CALL;
    let g = (0, l.jsx)(R.default.Icon, {
      icon: A.default,
      onClick: this.handleVoiceClick,
      disabled: E,
      tooltip: m,
      tooltipColor: e
    });
    return (0, l.jsx)(p.default, {
      contentTypes: c,
      children: e => {
        let {
          visibleContent: a,
          markAsDismissed: s
        } = e;
        if (a === i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) return (0, l.jsx)(r.Popout, {
          position: "bottom",
          align: "center",
          animation: r.Popout.Animation.TRANSLATE,
          shouldShow: n && d && !t,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, l.jsx)(S.default, {
              header: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(j.default, {
                  className: U.tooltipImage,
                  autoPlay: !f,
                  src: "https://cdn.discordapp.com/attachments/860252504826445825/1078051428028924006/mobile_coachmark.mp4",
                  width: 248,
                  height: 139.5,
                  loop: !0,
                  muted: !0
                }), (0, l.jsx)(r.Heading, {
                  variant: "heading-md/bold",
                  color: "always-white",
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                })]
              }),
              content: (0, l.jsxs)("div", {
                children: [(0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: D.default.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                }), (0, l.jsx)(r.Anchor, {
                  href: O.default.getArticleURL(y.HelpdeskArticles.ACTIVITIES),
                  children: D.default.Messages.LEARN_MORE
                })]
              }),
              buttonCTA: D.default.Messages.GOT_IT,
              onClick: () => {
                t(), s(P.ContentDismissActionType.UNKNOWN)
              },
              className: U.tooltip
            })
          },
          children: () => g
        });
        return g
      }
    })
  }
  render() {
    return (0, l.jsxs)(a.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), this.handleStartCall = (e, t) => {
      let {
        channel: n,
        notFriend: l,
        appContext: a
      } = this.props, s = l ? n.getRecipientId() : null, i = () => o.default.call(n.id, t, !l && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), s);
      t ? (0, C.default)(i, a) : i()
    }, this.handleJoinCall = e => {
      u.default.selectVoiceChannel(this.props.channel.id, e)
    }, this.handleVoiceClick = e => {
      let {
        callUnavailable: t,
        callActive: n,
        canShowActivityGdmTooltip: l
      } = this.props;
      if (l && (0, m.markDismissibleContentAsDismissed)(i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: P.ContentDismissActionType.AUTO
        }), t);
      else if (n) return this.handleJoinCall(!1);
      else return this.handleStartCall(e, !1)
    }, this.handleStartVideoCall = e => {
      this.handleStartCall(e, !0)
    }, this.handleJoinVideoCall = () => {
      let {
        appContext: e
      } = this.props;
      (0, C.default)(() => this.handleJoinCall(!0), e)
    }, this.handleBrowserNotSupported = () => {
      (0, g.default)()
    }
  }
}

function F(e) {
  let {
    channel: t
  } = e, n = (0, E.default)(), r = (0, s.useStateFromStores)([h.default], () => h.default.getMode(t.id)), o = (0, s.useStateFromStores)([N.default], () => N.default.isInChannel(t.id)), u = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    callActive: m,
    callUnavailable: p
  } = (0, s.useStateFromStoresObject)([_.default], () => ({
    callActive: _.default.isCallActive(t.id),
    callUnavailable: _.default.isCallUnavailable(t.id)
  })), S = t.getRecipientId(), {
    notFriend: g,
    isBlocked: C
  } = (0, s.useStateFromStoresObject)([v.default], () => ({
    notFriend: t.type === y.ChannelTypes.DM && null != S && !v.default.isFriend(S),
    isBlocked: t.type === y.ChannelTypes.DM && null != S && v.default.isBlocked(S)
  })), T = (0, s.useStateFromStores)([x.default], () => x.default.getUser(S)), A = (0, d.useAppContext)(), M = [], R = (0, f.default)(t.id), j = (0, s.useStateFromStores)([I.default], () => I.default.hasLayers());
  R && !j && M.push(i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP);
  let [L, O] = a.useState(!1);
  return (a.useEffect(() => {
    let e = setTimeout(() => {
      O(!0)
    }, 250);
    return () => clearTimeout(e)
  }, []), n || (null == T ? void 0 : T.bot)) ? null : (0, l.jsx)(w, {
    channel: t,
    mode: r,
    inCall: o,
    callActive: m,
    callUnavailable: p,
    notFriend: g,
    isBlocked: C,
    appContext: A,
    canShowTooltip: L,
    canShowActivityGdmTooltip: R,
    dismissibleContentTypes: M,
    useReducedMotion: u
  })
}