n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(653041),
    n(47120);
var i = n(735250),
    s = n(470079),
    o = n(120356),
    a = n.n(o),
    l = n(392711),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(748780),
    h = n(866442),
    m = n(442837),
    p = n(692547),
    f = n(481060),
    g = n(980568),
    _ = n(560768),
    T = n(812206),
    v = n(11769),
    E = n(243778),
    b = n(843693),
    I = n(246642),
    C = n(921227),
    S = n(314897),
    R = n(430824),
    x = n(496675),
    N = n(699516),
    O = n(885110),
    Z = n(300429),
    A = n(111583),
    j = n(594174),
    M = n(451478),
    y = n(626135),
    L = n(585483),
    P = n(70956),
    U = n(823379),
    w = n(5192),
    D = n(981631),
    k = n(689938),
    B = n(417499);
function F(e, t, n) {
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
let V = [];
class H extends s.PureComponent {
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
            -1 === V.indexOf(e) &&
            (y.default.track(D.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            V.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)('div', {
            className: a()(B.activityInviteEducation, { [B.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)('div', { className: B.activityInviteEducationArrow }),
                (0, i.jsx)('span', {
                    children: k.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { fadeIn: !1 }),
            F(this, 'timeout', null),
            F(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && g.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function G(e) {
    let { channel: t, guild: n } = e;
    return (0, i.jsx)(E.ZP, {
        contentTypes: [],
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
class W extends s.PureComponent {
    componentDidMount() {
        L.S.subscribe(D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    componentWillUnmount() {
        L.S.unsubscribe(D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    getCooldownTextStyle() {
        let { color: e } = this.state,
            { baseTextColor: t, activeTextColor: n } = this.props;
        return {
            color: e.interpolate({
                inputRange: [0, 1],
                outputRange: [t, (0, h.wK)(n, 0.9)]
            })
        };
    }
    render() {
        let e;
        let { guildId: t, activity: n, showInviteEducation: s, isFocused: o, typingUsers: l, className: c, slowmodeCooldownGuess: h, isBypassSlowmode: m, channel: p, isThreadCreation: g, renderDots: _, poggermodeEnabled: T, isComboing: E } = this.props,
            { rateLimitPerUser: b } = p,
            C = j.default.getCurrentUser(),
            S = R.Z.getGuild(t),
            x = b > 0,
            O = g
                ? []
                : r()(l)
                      .keys()
                      .filter((e) => e !== (null == C ? void 0 : C.id))
                      .reject((e) => N.Z.isBlocked(e))
                      .map((e) => j.default.getUser(e))
                      .filter(U.lm)
                      .map((e) => w.ZP.getName(t, this.props.channel.id, e))
                      .value();
        if (0 === O.length && !x && !E)
            return s && null != n
                ? (0, i.jsx)(H, {
                      activity: n,
                      isFocused: o
                  })
                : (0, i.jsx)(G, {
                      channel: p,
                      guild: S
                  });
        let Z = '',
            A = null,
            M = '';
        if (x) {
            if (
                ((A = (0, i.jsx)(f.TimerIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: B.slowModeIcon
                })),
                (M = (0, v.k)(b)),
                !m && h > 0)
            ) {
                let e = d().duration(h);
                if (h > P.Z.Millis.HOUR) {
                    let t = ''.concat(e.minutes()).padStart(2, '0'),
                        n = ''.concat(e.seconds()).padStart(2, '0');
                    Z = ''.concat(e.hours(), ':').concat(t, ':').concat(n);
                } else {
                    let t = ''.concat(e.seconds()).padStart(2, '0');
                    Z = ''.concat(e.minutes(), ':').concat(t);
                }
            } else 0 === O.length && (Z = m ? k.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : k.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
        }
        let [y, L, D] = O;
        return (
            (e =
                0 === O.length
                    ? ''
                    : 1 === O.length
                      ? k.Z.Messages.ONE_USER_TYPING.format({ a: y })
                      : 2 === O.length
                        ? k.Z.Messages.TWO_USERS_TYPING.format({
                              a: y,
                              b: L
                          })
                        : 3 === O.length
                          ? k.Z.Messages.THREE_USERS_TYPING.format({
                                a: y,
                                b: L,
                                c: D
                            })
                          : k.Z.Messages.SEVERAL_USERS_TYPING),
            (0, i.jsxs)('div', {
                className: a()(
                    B.typing,
                    {
                        'stop-animation': !o,
                        [B.isComboing]: T && E
                    },
                    c
                ),
                children: [
                    (0, i.jsxs)('div', {
                        className: B.typingDots,
                        children: [
                            O.length > 0 &&
                                !1 !== _ &&
                                (0, i.jsx)(f.Dots, {
                                    className: B.ellipsis,
                                    dotRadius: 3.5,
                                    themed: !0
                                }),
                            (0, i.jsx)('span', {
                                className: B.text,
                                'aria-live': 'polite',
                                'aria-atomic': !0,
                                children: e
                            })
                        ]
                    }),
                    x &&
                        (0, i.jsx)(f.Tooltip, {
                            text: M,
                            children: (e) =>
                                (0, i.jsxs)(u.Z.div, {
                                    style: this.getCooldownTextStyle(),
                                    className: B.cooldownWrapper,
                                    ...e,
                                    children: [Z, A]
                                })
                        }),
                    T && E && (0, i.jsx)(I.Z, { channelId: p.id })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { color: new u.Z.Value(0) }),
            F(this, 'emphasizeSlowmodeCooldown', () => {
                let { color: e } = this.state;
                u.Z.sequence([
                    u.Z.timing(e, {
                        toValue: 1,
                        duration: 100,
                        easing: u.Z.Easing.quad
                    }),
                    u.Z.timing(e, {
                        delay: 250,
                        toValue: 0,
                        duration: 100,
                        easing: u.Z.Easing.quad
                    })
                ]).start();
            });
    }
}
function z(e) {
    let { channel: t, isThreadCreation: n = !1, ...s } = e,
        o = (0, m.e7)([O.Z], () => O.Z.findActivity((e) => null != e.application_id)),
        a = (0, m.e7)([b.ZP, S.default], () => b.ZP.getUserCombo(S.default.getId(), t.id)),
        l = (0, m.e7)([C.Z, T.Z], () => (0, _.Z)(t, o, C.Z, T.Z)),
        r = (0, m.e7)([Z.Z], () => Z.Z.getSlowmodeCooldownGuess(t.id, n ? Z.S.CreateThread : Z.S.SendMessage)),
        c = (0, m.e7)([x.Z], () => (n ? x.Z.can(D.Plq.MANAGE_THREADS, t) : x.Z.can(D.Plq.MANAGE_CHANNELS, t) || x.Z.can(D.Plq.MANAGE_MESSAGES, t))),
        d = {
            ...s,
            baseTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: l,
            activity: o,
            typingUsers: (0, m.e7)([A.Z], () => A.Z.getTypingUsers(t.id)),
            isFocused: (0, m.e7)([M.Z], () => M.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: r,
            isComboing: null != a,
            isBypassSlowmode: c,
            channel: t,
            isThreadCreation: n
        };
    return (0, i.jsx)(W, { ...d });
}
