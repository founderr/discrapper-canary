n.d(t, {
  Z: function() {
    return W
  }
}), n(653041), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(392711),
  r = n.n(o),
  u = n(913527),
  c = n.n(u),
  d = n(748780),
  h = n(866442),
  m = n(442837),
  p = n(692547),
  g = n(481060),
  T = n(980568),
  f = n(560768),
  v = n(812206),
  E = n(243778),
  I = n(843693),
  N = n(246642),
  x = n(921227),
  S = n(314897),
  C = n(430824),
  R = n(496675),
  Z = n(699516),
  _ = n(885110),
  O = n(300429),
  j = n(111583),
  A = n(594174),
  M = n(451478),
  b = n(626135),
  P = n(585483),
  L = n(70956),
  y = n(823379),
  U = n(5192),
  w = n(981631),
  k = n(689938),
  D = n(497800);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let F = [];
class V extends s.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        fadeIn: !0
      }), this.timeout = null, this.logShownEventIfNeeded()
    }, 100)
  }
  componentDidUpdate() {
    this.logShownEventIfNeeded()
  }
  logShownEventIfNeeded() {
    let e = this.props.activity.application_id;
    null != e && -1 === F.indexOf(e) && (b.default.track(w.rMx.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e
    }), F.push(e))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: l()(D.activityInviteEducation, {
        [D.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, i.jsx)("div", {
        className: D.activityInviteEducationArrow
      }), (0, i.jsx)("span", {
        children: k.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
          game: e.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      fadeIn: !1
    }), B(this, "timeout", null), B(this, "handleDismissInviteEducation", () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && T.Z.dismissForApplicationId(e.application_id)
    })
  }
}

function H(e) {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, i.jsx)(E.Z, {
    contentTypes: [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return null
    }
  })
}
class G extends s.PureComponent {
  componentDidMount() {
    P.S.subscribe(w.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  componentWillUnmount() {
    P.S.unsubscribe(w.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  getCooldownTextStyle() {
    let {
      color: e
    } = this.state, {
      baseTextColor: t,
      activeTextColor: n
    } = this.props;
    return {
      color: e.interpolate({
        inputRange: [0, 1],
        outputRange: [t, (0, h.wK)(n, .9)]
      })
    }
  }
  render() {
    let e;
    let {
      guildId: t,
      activity: n,
      showInviteEducation: s,
      isFocused: a,
      typingUsers: o,
      className: u,
      slowmodeCooldownGuess: h,
      isBypassSlowmode: m,
      channel: p,
      isThreadCreation: T,
      renderDots: f,
      poggermodeEnabled: v,
      isComboing: E
    } = this.props, {
      rateLimitPerUser: I
    } = p, x = A.default.getCurrentUser(), S = C.Z.getGuild(t), R = I > 0, _ = T ? [] : r()(o).keys().filter(e => e !== (null == x ? void 0 : x.id)).reject(e => Z.Z.isBlocked(e)).map(e => A.default.getUser(e)).filter(y.lm).map(e => U.ZP.getName(t, this.props.channel.id, e)).value();
    if (0 === _.length && !R && !E) return s && null != n ? (0, i.jsx)(V, {
      activity: n,
      isFocused: a
    }) : (0, i.jsx)(H, {
      channel: p,
      guild: S
    });
    let O = "",
      j = null,
      M = "";
    if (R) {
      if (j = (0, i.jsx)(g.TimerIcon, {
          size: "xs",
          color: "currentColor",
          className: D.slowModeIcon
        }), I >= L.Z.Seconds.HOUR) {
        let e = Math.floor(I / L.Z.Seconds.HOUR),
          t = Math.floor((I - e * L.Z.Seconds.HOUR) / L.Z.Seconds.MINUTE),
          n = I - e * L.Z.Seconds.HOUR - t * L.Z.Seconds.MINUTE;
        M = k.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
          hours: e,
          minutes: t,
          seconds: n
        })
      } else if (I >= 60) {
        let e = Math.floor(I / 60);
        M = k.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
          minutes: e,
          seconds: I - 60 * e
        })
      } else M = k.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: I
      });
      if (!m && h > 0) {
        let e = c().duration(h);
        if (h > L.Z.Millis.HOUR) {
          let t = "".concat(e.minutes()).padStart(2, "0"),
            n = "".concat(e.seconds()).padStart(2, "0");
          O = "".concat(e.hours(), ":").concat(t, ":").concat(n)
        } else {
          let t = "".concat(e.seconds()).padStart(2, "0");
          O = "".concat(e.minutes(), ":").concat(t)
        }
      } else 0 === _.length && (O = m ? k.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : k.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
    }
    let [b, P, w] = _;
    return e = 0 === _.length ? "" : 1 === _.length ? k.Z.Messages.ONE_USER_TYPING.format({
      a: b
    }) : 2 === _.length ? k.Z.Messages.TWO_USERS_TYPING.format({
      a: b,
      b: P
    }) : 3 === _.length ? k.Z.Messages.THREE_USERS_TYPING.format({
      a: b,
      b: P,
      c: w
    }) : k.Z.Messages.SEVERAL_USERS_TYPING, (0, i.jsxs)("div", {
      className: l()(D.typing, {
        "stop-animation": !a,
        [D.isComboing]: v && E
      }, u),
      children: [(0, i.jsxs)("div", {
        className: D.typingDots,
        children: [_.length > 0 && !1 !== f && (0, i.jsx)(g.Dots, {
          className: D.ellipsis,
          dotRadius: 3.5,
          themed: !0
        }), (0, i.jsx)("span", {
          className: D.text,
          "aria-live": "polite",
          "aria-atomic": !0,
          children: e
        })]
      }), R && (0, i.jsx)(g.Tooltip, {
        text: M,
        children: e => (0, i.jsxs)(d.Z.div, {
          style: this.getCooldownTextStyle(),
          className: D.cooldownWrapper,
          ...e,
          children: [O, j]
        })
      }), v && E && (0, i.jsx)(N.Z, {
        channelId: p.id
      })]
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      color: new d.Z.Value(0)
    }), B(this, "emphasizeSlowmodeCooldown", () => {
      let {
        color: e
      } = this.state;
      d.Z.sequence([d.Z.timing(e, {
        toValue: 1,
        duration: 100,
        easing: d.Z.Easing.quad
      }), d.Z.timing(e, {
        delay: 250,
        toValue: 0,
        duration: 100,
        easing: d.Z.Easing.quad
      })]).start()
    })
  }
}

function W(e) {
  let {
    channel: t,
    isThreadCreation: n = !1,
    ...s
  } = e, a = (0, m.e7)([_.Z], () => _.Z.findActivity(e => null != e.application_id)), l = (0, m.e7)([I.ZP, S.default], () => I.ZP.getUserCombo(S.default.getId(), t.id)), o = (0, m.e7)([x.Z, v.Z], () => (0, f.Z)(t, a, x.Z, v.Z)), r = (0, m.e7)([O.Z], () => O.Z.getSlowmodeCooldownGuess(t.id, n ? O.S.CreateThread : O.S.SendMessage)), u = (0, m.e7)([R.Z], () => n ? R.Z.can(w.Plq.MANAGE_THREADS, t) : R.Z.can(w.Plq.MANAGE_CHANNELS, t) || R.Z.can(w.Plq.MANAGE_MESSAGES, t)), c = {
    ...s,
    baseTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
    activeTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
    showInviteEducation: o,
    activity: a,
    typingUsers: (0, m.e7)([j.Z], () => j.Z.getTypingUsers(t.id)),
    isFocused: (0, m.e7)([M.Z], () => M.Z.isFocused()),
    guildId: t.guild_id,
    slowmodeCooldownGuess: r,
    isComboing: null != l,
    isBypassSlowmode: u,
    channel: t,
    isThreadCreation: n
  };
  return (0, i.jsx)(G, {
    ...c
  })
}