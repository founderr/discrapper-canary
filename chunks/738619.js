n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
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
    v = n(560768),
    b = n(812206),
    T = n(11769),
    x = n(243778),
    _ = n(843693),
    S = n(246642),
    C = n(921227),
    I = n(314897),
    E = n(430824),
    j = n(496675),
    R = n(699516),
    Z = n(885110),
    N = n(300429),
    y = n(111583),
    A = n(594174),
    O = n(451478),
    M = n(626135),
    w = n(585483),
    P = n(70956),
    L = n(823379),
    k = n(5192),
    U = n(981631),
    B = n(388032),
    D = n(991553);
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
class H extends o.PureComponent {
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
            (M.default.track(U.rMx.SHOW_TUTORIAL, {
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
            className: s()(D.activityInviteEducation, { [D.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)('div', { className: D.activityInviteEducationArrow }),
                (0, i.jsx)('span', {
                    children: B.intl.format(B.t['i/MoCg'], {
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
    return (0, i.jsx)(x.ZP, {
        contentTypes: [],
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
class W extends o.PureComponent {
    componentDidMount() {
        w.S.subscribe(U.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    componentWillUnmount() {
        w.S.unsubscribe(U.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
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
        let e, t;
        let { guildId: n, activity: o, showInviteEducation: a, isFocused: l, typingUsers: c, className: h, slowmodeCooldownGuess: m, isBypassSlowmode: p, channel: g, isThreadCreation: v, renderDots: b, poggermodeEnabled: x, isComboing: _ } = this.props,
            { rateLimitPerUser: C } = g,
            I = A.default.getCurrentUser(),
            j = E.Z.getGuild(n),
            Z = C > 0,
            N = v
                ? []
                : r()(c)
                      .keys()
                      .filter((e) => e !== (null == I ? void 0 : I.id))
                      .reject((e) => R.Z.isBlockedOrIgnored(e))
                      .map((e) => A.default.getUser(e))
                      .filter(L.lm)
                      .map((e) => k.ZP.getName(n, this.props.channel.id, e))
                      .value();
        if (0 === N.length && !Z && !_)
            return a && null != o
                ? (0, i.jsx)(H, {
                      activity: o,
                      isFocused: l
                  })
                : (0, i.jsx)(G, {
                      channel: g,
                      guild: j
                  });
        let y = null,
            O = '';
        if (Z) {
            if (
                ((y = (0, i.jsx)(f.TimerIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: D.slowModeIcon
                })),
                (O = (0, T.k)(C)),
                !p && m > 0)
            ) {
                let t = d().duration(m);
                if (m > P.Z.Millis.HOUR) {
                    let n = ''.concat(t.minutes()).padStart(2, '0'),
                        i = ''.concat(t.seconds()).padStart(2, '0');
                    e = ''.concat(t.hours(), ':').concat(n, ':').concat(i);
                } else {
                    let n = ''.concat(t.seconds()).padStart(2, '0');
                    e = ''.concat(t.minutes(), ':').concat(n);
                }
            } else 0 === N.length && (e = p ? B.intl.string(B.t.SSzXvb) : B.intl.string(B.t.Icu3bW));
        }
        let [M, w, U] = N;
        return (
            (t =
                0 === N.length
                    ? ''
                    : 1 === N.length
                      ? B.intl.format(B.t.lJ9sZW, { a: M })
                      : 2 === N.length
                        ? B.intl.format(B.t.rB0CUV, {
                              a: M,
                              b: w
                          })
                        : 3 === N.length
                          ? B.intl.format(B.t.StKTho, {
                                a: M,
                                b: w,
                                c: U
                            })
                          : B.intl.string(B.t.uVDhqa)),
            (0, i.jsxs)('div', {
                className: s()(
                    D.typing,
                    {
                        'stop-animation': !l,
                        [D.isComboing]: x && _
                    },
                    h
                ),
                children: [
                    (0, i.jsxs)('div', {
                        className: D.typingDots,
                        children: [
                            N.length > 0 &&
                                !1 !== b &&
                                (0, i.jsx)(f.Dots, {
                                    className: D.ellipsis,
                                    dotRadius: 3.5,
                                    themed: !0
                                }),
                            (0, i.jsx)('span', {
                                className: D.text,
                                'aria-live': 'polite',
                                'aria-atomic': !0,
                                children: t
                            })
                        ]
                    }),
                    Z &&
                        (0, i.jsx)(f.Tooltip, {
                            text: O,
                            children: (t) =>
                                (0, i.jsxs)(u.Z.div, {
                                    style: this.getCooldownTextStyle(),
                                    className: D.cooldownWrapper,
                                    ...t,
                                    children: [e, y]
                                })
                        }),
                    x && _ && (0, i.jsx)(S.Z, { channelId: g.id })
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
    let { channel: t, isThreadCreation: n = !1, ...o } = e,
        a = (0, m.e7)([Z.Z], () => Z.Z.findActivity((e) => null != e.application_id)),
        s = (0, m.e7)([_.ZP, I.default], () => _.ZP.getUserCombo(I.default.getId(), t.id)),
        l = (0, m.e7)([C.Z, b.Z], () => (0, v.Z)(t, a, C.Z, b.Z)),
        r = (0, m.e7)([N.Z], () => N.Z.getSlowmodeCooldownGuess(t.id, n ? N.S.CreateThread : N.S.SendMessage)),
        c = (0, m.e7)([j.Z], () => (n ? j.Z.can(U.Plq.MANAGE_THREADS, t) : j.Z.can(U.Plq.MANAGE_CHANNELS, t) || j.Z.can(U.Plq.MANAGE_MESSAGES, t))),
        d = {
            ...o,
            baseTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: l,
            activity: a,
            typingUsers: (0, m.e7)([y.Z], () => y.Z.getTypingUsers(t.id)),
            isFocused: (0, m.e7)([O.Z], () => O.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: r,
            isComboing: null != s,
            isBypassSlowmode: c,
            channel: t,
            isThreadCreation: n
        };
    return (0, i.jsx)(W, { ...d });
}
