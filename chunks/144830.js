E.d(_, {
    CI: function () {
        return M;
    },
    J6: function () {
        return T;
    },
    ZP: function () {
        return R;
    }
}),
    E(411104),
    E(852437),
    E(47120);
var s,
    T,
    I,
    n,
    t,
    A,
    r = E(735250),
    a = E(470079),
    N = E(392711),
    S = E.n(N),
    l = E(846519),
    D = E(689938);
function L(e, _, E) {
    return (
        _ in e
            ? Object.defineProperty(e, _, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[_] = E),
        e
    );
}
((n = s || (s = {})).ACTIVITY_FEED = 'ACTIVITY_FEED'), (n.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (n.USER_ACTIVITY = 'USER_ACTIVITY'), (n.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (n.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), ((t = T || (T = {})).NONE = 'NONE'), (t.SECONDS = 'SECONDS'), (t.MINUTES = 'MINUTES'), (t.HOURS = 'HOURS'), (t.DAYS = 'DAYS'), (t.WEEKS = 'WEEKS'), (t.MONTHS = 'MONTHS'), (t.YEARS = 'YEARS'), ((A = I || (I = {})).START = 'START'), (A.END = 'END'), (A.TIME = 'TIME');
let U = {
        NONE: (e) => 0,
        SECONDS: (e) => 60 * e,
        MINUTES: (e) => e,
        HOURS: (e) => e / 60,
        DAYS: (e) => e / 60 / 24,
        WEEKS: (e) => e / 60 / 24 / 7,
        MONTHS: (e) => e / 60 / 24 / 31,
        YEARS: (e) => e / 60 / 24 / 365
    },
    O = [
        {
            unit: 'NONE',
            max: 0
        },
        {
            unit: 'SECONDS',
            max: 1
        },
        {
            unit: 'MINUTES',
            max: 60
        },
        {
            unit: 'HOURS',
            max: 1440
        },
        {
            unit: 'DAYS',
            max: 44640
        },
        {
            unit: 'WEEKS',
            max: 40320
        },
        {
            unit: 'MONTHS',
            max: 525600
        },
        {
            unit: 'YEARS',
            max: 1 / 0
        }
    ],
    G = (e) => (_, E) =>
        null == E
            ? ''
            : e().format({
                  time: _,
                  ...E
              }),
    o = {
        ACTIVITY_FEED: {
            START: {
                SECONDS: () => D.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                MINUTES: (e) => D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }),
                HOURS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }),
                DAYS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e })
            },
            END: {
                SECONDS: () => D.Z.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                MINUTES: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({ time: e }),
                HOURS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({ time: e }),
                DAYS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({ time: e }),
                WEEKS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({ time: e }),
                MONTHS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({ time: e }),
                YEARS: (e) => D.Z.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({ time: e })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                SECONDS: G(() => D.Z.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                MINUTES: G(() => D.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                HOURS: G(() => D.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                DAYS: G(() => D.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
            },
            END: {
                SECONDS: (e) => D.Z.Messages.DURATION_SECONDS_AGO.format({ seconds: e }),
                MINUTES: (e) => D.Z.Messages.DURATION_MINUTES_AGO.format({ minutes: e }),
                HOURS: (e) => D.Z.Messages.DURATION_HOURS_AGO.format({ hours: e }),
                DAYS: (e) => D.Z.Messages.DURATION_DAYS_AGO.format({ days: e })
            }
        },
        USER_ACTIVITY: {
            START: {
                SECONDS: () => D.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                MINUTES: function (e, _) {
                    let E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return E ? D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }) : D.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({ time: e });
                },
                HOURS: function (e, _) {
                    let E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return E ? D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }) : D.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({ time: e });
                },
                DAYS: function (e, _) {
                    let E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return E ? D.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e }) : D.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({ time: e });
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                NONE: () => D.Z.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                SECONDS: (e) => D.Z.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({ time: e }),
                MINUTES: (e) => D.Z.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({ time: e }),
                HOURS: (e) => D.Z.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({ time: e })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                NONE: () => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                SECONDS: () => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                MINUTES: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({ time: e }),
                HOURS: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({ time: e }),
                DAYS: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({ time: e }),
                WEEKS: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({ time: e }),
                MONTHS: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({ time: e }),
                YEARS: (e) => D.Z.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({ time: e })
            }
        }
    };
function i(e, _) {
    let E = O.findIndex((_) => {
            let { max: E, unit: s } = _;
            return ('NONE' === s && e === E) || e < E;
        }),
        s = S().findLast(
            O,
            (e) => {
                let { unit: E } = e;
                return _(E);
            },
            E
        );
    if (null != s) return s.unit;
    let T = O.find((e) => {
        let { unit: E } = e;
        return _(E);
    });
    return null != T ? T.unit : null;
}
function M(e, _) {
    let E = null != e ? i(e, (e) => _.includes(e)) : 'NONE',
        s = null != E ? U[E] : null;
    return {
        unit: E,
        time: null != e && null != s ? Math.floor(s(e)) : null
    };
}
function R(e) {
    var _, E;
    return (
        (E = class extends (_ = a.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
            }
            componentDidUpdate(e) {
                let { start: _, end: E, time: s } = this.props;
                (e.start !== _ || e.end !== E || e.time !== s) && this.update();
            }
            componentWillUnmount() {
                this.timer.stop();
            }
            getDiff() {
                let { start: e, end: _, time: E } = this.props;
                if (null != E) return E / 1000 / 60;
                let s = Date.now(),
                    T = 0;
                return null != e ? (T = s - e) : null != _ && (T = s - _), Math.abs(T) / 1000 / 60;
            }
            getTimeUnit(e, _, E) {
                let s = i(e, (e) =>
                    (function (e, _, E) {
                        let s = o[E];
                        if (null != s) {
                            let E = s[_];
                            if (null != E) return null != E[e];
                        }
                        return !1;
                    })(e, E, _)
                );
                if (null == s) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(E, ' in location: ').concat(_));
                return s;
            }
            getType() {
                let { start: e, end: _, time: E } = this.props;
                if (null != e) return 'START';
                if (null != _) return 'END';
                if (null != E) return 'TIME';
                return null;
            }
            transformTime(e, _) {
                return U[e](_);
            }
            render() {
                let { location: _, messageProps: E, isApplicationStreaming: s, ...T } = this.props,
                    { time: I } = this.state,
                    n = this.getType();
                if (null == n) return null;
                let t = this.getTimeUnit(I, _, n),
                    A = o[_][n];
                if (null == A) return null;
                let a = A[t],
                    N = Math.floor(this.transformTime(t, I));
                return (0, r.jsx)(e, {
                    ...T,
                    children: null == a ? void 0 : a(N, E, s)
                });
            }
            constructor(...e) {
                super(...e),
                    L(this, 'timer', new l.Xp()),
                    L(this, 'state', { time: this.getDiff() }),
                    L(this, 'update', () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        L(E, 'Locations', s),
        L(E, 'Types', I),
        E
    );
}
