n.d(t, {
    Z: function () {
        return z;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(913527),
    _ = n.n(d),
    E = n(748780),
    f = n(866442),
    h = n(442837),
    p = n(692547),
    m = n(481060),
    I = n(980568),
    T = n(560768),
    g = n(812206),
    S = n(11769),
    A = n(243778),
    v = n(843693),
    N = n(246642),
    O = n(921227),
    R = n(314897),
    C = n(430824),
    y = n(496675),
    b = n(699516),
    L = n(885110),
    D = n(300429),
    M = n(111583),
    P = n(594174),
    U = n(451478),
    w = n(626135),
    x = n(585483),
    G = n(70956),
    k = n(823379),
    B = n(5192),
    F = n(981631),
    Z = n(689938),
    V = n(443236);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let Y = [];
class j extends o.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === Y.indexOf(e) &&
            (w.default.track(F.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            Y.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, a.jsxs)('div', {
            className: l()(V.activityInviteEducation, { [V.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, a.jsx)('div', { className: V.activityInviteEducationArrow }),
                (0, a.jsx)('span', {
                    children: Z.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', { fadeIn: !1 }),
            H(this, 'timeout', null),
            H(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && I.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function W(e) {
    let { channel: t, guild: n } = e,
        r = [];
    return (0, a.jsx)(A.ZP, {
        contentTypes: r,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
class K extends o.PureComponent {
    componentDidMount() {
        x.S.subscribe(F.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    componentWillUnmount() {
        x.S.unsubscribe(F.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    getCooldownTextStyle() {
        let { color: e } = this.state,
            { baseTextColor: t, activeTextColor: n } = this.props;
        return {
            color: e.interpolate({
                inputRange: [0, 1],
                outputRange: [t, (0, f.wK)(n, 0.9)]
            })
        };
    }
    render() {
        let e;
        let { guildId: t, activity: n, showInviteEducation: r, isFocused: i, typingUsers: o, className: s, slowmodeCooldownGuess: u, isBypassSlowmode: d, channel: f, isThreadCreation: h, renderDots: p, poggermodeEnabled: I, isComboing: T } = this.props,
            { rateLimitPerUser: g } = f,
            A = P.default.getCurrentUser(),
            v = C.Z.getGuild(t),
            O = g > 0,
            R = h
                ? []
                : c()(o)
                      .keys()
                      .filter((e) => e !== (null == A ? void 0 : A.id))
                      .reject((e) => b.Z.isBlocked(e))
                      .map((e) => P.default.getUser(e))
                      .filter(k.lm)
                      .map((e) => B.ZP.getName(t, this.props.channel.id, e))
                      .value();
        if (0 === R.length && !O && !T)
            return r && null != n
                ? (0, a.jsx)(j, {
                      activity: n,
                      isFocused: i
                  })
                : (0, a.jsx)(W, {
                      channel: f,
                      guild: v
                  });
        let y = '',
            L = null,
            D = '';
        if (O) {
            if (
                ((L = (0, a.jsx)(m.TimerIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: V.slowModeIcon
                })),
                (D = (0, S.k)(g)),
                !d && u > 0)
            ) {
                let e = _().duration(u);
                if (u > G.Z.Millis.HOUR) {
                    let t = ''.concat(e.minutes()).padStart(2, '0'),
                        n = ''.concat(e.seconds()).padStart(2, '0');
                    y = ''.concat(e.hours(), ':').concat(t, ':').concat(n);
                } else {
                    let t = ''.concat(e.seconds()).padStart(2, '0');
                    y = ''.concat(e.minutes(), ':').concat(t);
                }
            } else 0 === R.length && (y = d ? Z.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : Z.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
        }
        let [M, U, w] = R;
        return (
            (e =
                0 === R.length
                    ? ''
                    : 1 === R.length
                      ? Z.Z.Messages.ONE_USER_TYPING.format({ a: M })
                      : 2 === R.length
                        ? Z.Z.Messages.TWO_USERS_TYPING.format({
                              a: M,
                              b: U
                          })
                        : 3 === R.length
                          ? Z.Z.Messages.THREE_USERS_TYPING.format({
                                a: M,
                                b: U,
                                c: w
                            })
                          : Z.Z.Messages.SEVERAL_USERS_TYPING),
            (0, a.jsxs)('div', {
                className: l()(
                    V.typing,
                    {
                        'stop-animation': !i,
                        [V.isComboing]: I && T
                    },
                    s
                ),
                children: [
                    (0, a.jsxs)('div', {
                        className: V.typingDots,
                        children: [
                            R.length > 0 &&
                                !1 !== p &&
                                (0, a.jsx)(m.Dots, {
                                    className: V.ellipsis,
                                    dotRadius: 3.5,
                                    themed: !0
                                }),
                            (0, a.jsx)('span', {
                                className: V.text,
                                'aria-live': 'polite',
                                'aria-atomic': !0,
                                children: e
                            })
                        ]
                    }),
                    O &&
                        (0, a.jsx)(m.Tooltip, {
                            text: D,
                            children: (e) =>
                                (0, a.jsxs)(E.Z.div, {
                                    style: this.getCooldownTextStyle(),
                                    className: V.cooldownWrapper,
                                    ...e,
                                    children: [y, L]
                                })
                        }),
                    I && T && (0, a.jsx)(N.Z, { channelId: f.id })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', { color: new E.Z.Value(0) }),
            H(this, 'emphasizeSlowmodeCooldown', () => {
                let { color: e } = this.state;
                E.Z.sequence([
                    E.Z.timing(e, {
                        toValue: 1,
                        duration: 100,
                        easing: E.Z.Easing.quad
                    }),
                    E.Z.timing(e, {
                        delay: 250,
                        toValue: 0,
                        duration: 100,
                        easing: E.Z.Easing.quad
                    })
                ]).start();
            });
    }
}
function z(e) {
    let { channel: t, isThreadCreation: n = !1, ...r } = e,
        i = (0, h.e7)([L.Z], () => L.Z.findActivity((e) => null != e.application_id)),
        o = (0, h.e7)([v.ZP, R.default], () => v.ZP.getUserCombo(R.default.getId(), t.id)),
        s = (0, h.e7)([O.Z, g.Z], () => (0, T.Z)(t, i, O.Z, g.Z)),
        l = (0, h.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, n ? D.S.CreateThread : D.S.SendMessage)),
        u = (0, h.e7)([y.Z], () => (n ? y.Z.can(F.Plq.MANAGE_THREADS, t) : y.Z.can(F.Plq.MANAGE_CHANNELS, t) || y.Z.can(F.Plq.MANAGE_MESSAGES, t))),
        c = {
            ...r,
            baseTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, m.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: s,
            activity: i,
            typingUsers: (0, h.e7)([M.Z], () => M.Z.getTypingUsers(t.id)),
            isFocused: (0, h.e7)([U.Z], () => U.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: l,
            isComboing: null != o,
            isBypassSlowmode: u,
            channel: t,
            isThreadCreation: n
        };
    return (0, a.jsx)(K, { ...c });
}
