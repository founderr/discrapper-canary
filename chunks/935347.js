n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(433517),
    u = n(481060),
    h = n(205355),
    m = n(607070),
    p = n(38618),
    g = n(197344),
    f = n(474873),
    _ = n(706454),
    E = n(215427),
    I = n(820254),
    C = n(358085),
    v = n(557177),
    N = n(998502),
    S = n(905656),
    T = n(981631),
    x = n(388032),
    b = n(38179);
function A(e, t, n) {
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
class Z extends r.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, v.uk)('discodo', e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: r } = this.state,
            { connected: l, soundpack: a } = this.props,
            s = l && n && !i && !r;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || s
                ? (l && null != this.videoRef && d.K.get(T.wli) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: l
                  }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({ shouldRender: !0 }), setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== r && r && h.Z.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let r = this._loadingText,
                l = null;
            return (
                null != this._eventLoadingText && (r = this._eventLoadingText),
                null != t && ((r = t.name), (l = t.incident_updates[0].body)),
                (0, i.jsxs)('div', {
                    className: b.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: b.content,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(b.spinner, this.state.ready ? b.ready : '')
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: b.tipTitle,
                                                  children: x.intl.string(x.t.v0R1Li)
                                              }),
                                        (0, i.jsx)('div', {
                                            className: null != t ? b.title : b.tip,
                                            children: r
                                        }),
                                        (0, i.jsx)('div', {
                                            className: b.body,
                                            children: l
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(b.problems, { [b.slideIn]: this.state.problems }),
                            children: [
                                (0, i.jsx)('div', {
                                    className: b.problemsText,
                                    children: x.intl.string(x.t.AG2zPD)
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsxs)(u.Anchor, {
                                            className: b.twitterLink,
                                            href: T.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, i.jsx)(u.XNeutralIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: b.icon
                                                }),
                                                x.intl.string(x.t.KlyTbm)
                                            ]
                                        }),
                                        (0, i.jsxs)(u.Anchor, {
                                            className: b.statusLink,
                                            href: T.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, i.jsx)(I.Z, { className: b.icon }), x.intl.string(x.t.AgXXy8)]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );
        }
    }
    constructor(e) {
        super(e),
            A(this, 'videoRef', null),
            A(this, '_noProblemsTimeout', null),
            A(this, '_problemsTimeout', null),
            A(this, '_connectedSound', this.createSound()),
            A(
                this,
                '_loadingText',
                (function () {
                    let e = [
                        x.intl.string(x.t.Ex79Ky),
                        x.intl.string(x.t['+v5zsb']),
                        x.intl.string(x.t['RLx6+f']),
                        x.intl.string(x.t.Q1PZkJ),
                        x.intl.string(x.t.x7sfVl),
                        x.intl.format(x.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'tab',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.string(x.t.UorX4e),
                        x.intl.string(x.t['il/GZm']),
                        x.intl.string(x.t.HKBJv7),
                        x.intl.format(x.t['FVVp7+'], {
                            F6Hook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'f6',
                                        className: b.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'tab',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.string(x.t['7Y1hFB']),
                        x.intl.string(x.t['UcCW7+']),
                        x.intl.string(x.t.E5GhfX),
                        x.intl.string(x.t.bANqo6),
                        x.intl.string(x.t.yOEVDg),
                        x.intl.string(x.t['u0Ra/P']),
                        x.intl.string(x.t.un4cQ0),
                        x.intl.string(x.t['2cyYx8']),
                        x.intl.string(x.t.KCmze3),
                        x.intl.string(x.t['C+hUc3']),
                        x.intl.string(x.t.I98MEB),
                        x.intl.format(x.t.c0YCIy, {}),
                        x.intl.string(x.t.z8AvIC),
                        x.intl.string(x.t.IjX3Pz),
                        x.intl.string(x.t.lg3CkZ),
                        x.intl.string(x.t['4GaLhY']),
                        x.intl.string(x.t.qHKbU1),
                        x.intl.string(x.t.mJxKDw),
                        x.intl.string(x.t.iiQBXF),
                        x.intl.string(x.t.YPD46e),
                        x.intl.string(x.t.O8BpgY),
                        x.intl.string(x.t.xzFwfn),
                        x.intl.string(x.t['4G3fsb']),
                        x.intl.string(x.t['/jPyKC']),
                        x.intl.string(x.t['8x7D5e']),
                        x.intl.string(x.t.G6Q8Hx),
                        x.intl.string(x.t['9Cx+xM']),
                        x.intl.string(x.t.WsZ8dX),
                        x.intl.string(x.t.btoe7O),
                        x.intl.string(x.t.E6Y0j4),
                        x.intl.string(x.t['7KZ819']),
                        x.intl.string(x.t.hm7OKi),
                        x.intl.string(x.t.H535i4),
                        x.intl.string(x.t['08WJUV']),
                        x.intl.string(x.t.hhtfys),
                        x.intl.string(x.t.on980d),
                        x.intl.string(x.t.AL6c09),
                        x.intl.string(x.t.iLTeFx),
                        x.intl.string(x.t.b3vSu7),
                        x.intl.string(x.t['f8ao5+']),
                        x.intl.format(x.t['1v1h8v'], { asterisks: '**' }),
                        x.intl.format(x.t.MUlAVV, {
                            quickSwitcherHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'mod+k',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'alt+click',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+esc',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: b.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'down',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'mod+/',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+return',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        x.intl.format(x.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'up',
                                        className: b.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return _.default.locale.startsWith('en-') && e.push(x.intl.string(x.t.dQ9Wqq)), e[o().random(e.length - 1)];
                })()
            ),
            A(
                this,
                '_eventLoadingText',
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })()
            ),
            A(this, 'handleReady', () => {
                this.setState({ ready: !0 }), (0, C.isDesktop)() && (N.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), N.ZP.send('UPDATE_OPEN_ON_STARTUP'));
            }),
            A(this, 'setVideoRef', (e) => {
                this.videoRef = e;
            }),
            A(this, 'setProblemsTimeout', () => {
                null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            A(this, 'clearProblemsTimeout', () => {
                clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
            });
        let { connected: t } = e;
        (this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t
        }),
            (this._connectedSound.volume = 1);
    }
}
t.Z = c.ZP.connectStores([p.Z, E.Z, f.Z, m.Z], () => ({
    isTryingToConnect: p.Z.isTryingToConnect(),
    connected: p.Z.isConnected(),
    incident: E.Z.getIncident(),
    soundpack: f.Z.getSoundpack(),
    reducedMotion: m.Z.useReducedMotion
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: r, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, i.jsx)(Z, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: r
          })
        : null;
});
