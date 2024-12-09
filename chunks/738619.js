n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    f = n(980568),
    _ = n(560768),
    p = n(812206),
    h = n(405701),
    m = n(540059),
    g = n(243778),
    E = n(843693),
    v = n(246642),
    I = n(921227),
    T = n(314897),
    b = n(430824),
    S = n(699516),
    y = n(885110),
    A = n(111583),
    N = n(594174),
    C = n(451478),
    R = n(626135),
    O = n(823379),
    D = n(5192),
    L = n(981631),
    x = n(388032),
    w = n(215225);
function P(e, t, n) {
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
let M = [];
class k extends i.PureComponent {
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
            -1 === M.indexOf(e) &&
            (R.default.track(L.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            M.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, r.jsxs)('div', {
            className: s()(w.activityInviteEducation, { [w.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, r.jsx)('div', { className: w.activityInviteEducationArrow }),
                (0, r.jsx)('span', {
                    children: x.intl.format(x.t['i/MoCg'], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', { fadeIn: !1 }),
            P(this, 'timeout', null),
            P(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function U(e) {
    let { channel: t, guild: n } = e;
    return (0, r.jsx)(g.ZP, {
        contentTypes: [],
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
function B(e) {
    let { guildId: t, activity: n, showInviteEducation: i, isFocused: a, typingUsers: o, className: u, channel: c, isThreadCreation: f, renderDots: _, poggermodeEnabled: p, isComboing: g } = e,
        { rateLimitPerUser: E } = c,
        I = N.default.getCurrentUser(),
        T = b.Z.getGuild(t),
        y = f
            ? []
            : l()(o)
                  .keys()
                  .filter((e) => e !== (null == I ? void 0 : I.id))
                  .reject((e) => S.Z.isBlockedOrIgnored(e))
                  .map((e) => N.default.getUser(e))
                  .filter(O.lm)
                  .map((e) => D.ZP.getName(t, c.id, e))
                  .value(),
        A = (0, m.Q3)('TypingUsers');
    if (0 === y.length && !(E > 0) && !g)
        return i && null != n
            ? (0, r.jsx)(k, {
                  activity: n,
                  isFocused: a
              })
            : (0, r.jsx)(U, {
                  channel: c,
                  guild: T
              });
    let [C, R, L] = y,
        P = '';
    return (
        1 === y.length
            ? (P = x.intl.format(x.t.lJ9sZW, { a: C }))
            : 2 === y.length
              ? (P = x.intl.format(x.t.rB0CUV, {
                    a: C,
                    b: R
                }))
              : 3 === y.length
                ? (P = x.intl.format(x.t.StKTho, {
                      a: C,
                      b: R,
                      c: L
                  }))
                : y.length > 3 && (P = x.intl.string(x.t.uVDhqa)),
        (0, r.jsxs)('div', {
            className: s()(
                w.typing,
                {
                    'stop-animation': !a,
                    [w.isComboing]: p && g
                },
                u
            ),
            children: [
                (0, r.jsxs)('div', {
                    className: w.typingDots,
                    children: [
                        y.length > 0 &&
                            !1 !== _ &&
                            (0, r.jsx)(d.Dots, {
                                className: w.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, r.jsx)('span', {
                            className: w.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: P
                        })
                    ]
                }),
                A
                    ? null
                    : (0, r.jsx)(h.Z, {
                          channel: c,
                          isThreadCreation: f
                      }),
                p && g && (0, r.jsx)(v.Z, { channelId: c.id })
            ]
        })
    );
}
function G(e) {
    let { channel: t, isThreadCreation: n = !1, ...i } = e,
        a = (0, u.e7)([y.Z], () => y.Z.findActivity((e) => null != e.application_id)),
        s = (0, u.e7)([E.ZP, T.default], () => E.ZP.getUserCombo(T.default.getId(), t.id)),
        o = (0, u.e7)([I.Z, p.Z], () => (0, _.Z)(t, a, I.Z, p.Z)),
        l = {
            ...i,
            baseTextColor: (0, d.useToken)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, d.useToken)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: o,
            activity: a,
            typingUsers: (0, u.e7)([A.Z], () => A.Z.getTypingUsers(t.id)),
            isFocused: (0, u.e7)([C.Z], () => C.Z.isFocused()),
            guildId: t.guild_id,
            isComboing: null != s,
            channel: t,
            isThreadCreation: n
        };
    return (0, r.jsx)(B, { ...l });
}
