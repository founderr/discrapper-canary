n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(653041);
var i,
    l,
    r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    h = n.n(d),
    p = n(748780),
    m = n(442837),
    f = n(215569),
    g = n(481060),
    C = n(612226),
    v = n(951483),
    _ = n(714338),
    x = n(607070),
    I = n(585483),
    b = n(557177),
    E = n(264549),
    S = n(981631),
    Z = n(388032),
    N = n(521287);
function y(e, t, n) {
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
((l = i || (i = {})).UP = 'UP'), (l.DOWN = 'DOWN'), (l.LEFT = 'LEFT'), (l.RIGHT = 'RIGHT');
let T = {
    UP: h().throttle(() => (0, b.GN)('ddr-up'), 100),
    DOWN: h().throttle(() => (0, b.GN)('ddr-down'), 100),
    LEFT: h().throttle(() => (0, b.GN)('ddr-left'), 100),
    RIGHT: h().throttle(() => (0, b.GN)('ddr-right'), 100)
};
function j(e) {
    switch (e.keyCode) {
        case S.yXg.ARROW_UP:
            return 'UP';
        case S.yXg.ARROW_DOWN:
            return 'DOWN';
        case S.yXg.ARROW_LEFT:
            return 'LEFT';
        case S.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let A = [C.Q2.MESSAGE, C.Q2.NAVIGATION, C.Q2.VOICE_AND_VIDEO, C.Q2.CHAT, C.Q2.MISCELLANEOUS];
function P(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: s()(N.backdrop, { [N.show]: t }) });
}
function R() {
    let e = o.useMemo(
        () =>
            h()((0, C.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: N.keyboardShortcutList,
        children: A.map((t) => {
            let n = e[t],
                i = (0, C.UD)(t),
                l = (0, C.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: N.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(g.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null != l &&
                                    (0, r.jsx)(g.Text, {
                                        className: N.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: l
                                    })
                            ]
                        }),
                        (0, r.jsx)(
                            'div',
                            {
                                className: N.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: s()(N.keybindGroup),
                                                  children: [
                                                      (0, r.jsx)(g.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  g.KeyCombo,
                                                                  {
                                                                      className: N.keybindKey,
                                                                      shortcut: e
                                                                  },
                                                                  e
                                                              )
                                                          )
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                })
                            },
                            t
                        )
                    ]
                },
                t
            );
        })
    });
}
class M extends o.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), I.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), I.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        I.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), I.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
        return (0, r.jsxs)(p.Z.div, {
            className: N.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(g.H, {
                    className: N.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.content,
                            children: Z.intl.string(Z.t['1BdUt7'])
                        }),
                        (0, r.jsx)(g.KeyCombo, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: N.modalSubtitle,
                    children: Z.intl.string(Z.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: N.ddrArrows,
                    children: [
                        (0, r.jsx)(L, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: N.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(L, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: N.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(L, {
                            arrow: 'UP',
                            isActive: e,
                            className: N.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(L, {
                            arrow: 'RIGHT',
                            isActive: i,
                            className: N.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(g.AdvancedScrollerAuto, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(g.HeadingLevel, { children: (0, r.jsx)(R, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new p.Z.Value(1),
                scaleX: new p.Z.Value(1),
                scaleY: new p.Z.Value(0),
                animating: !1
            }),
            y(this, 'scrollerRef', o.createRef()),
            y(this, 'lastInputedKeys', []),
            y(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                u()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            y(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                u()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            y(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            y(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                T[t](), this.setState({ [t]: !0 });
            }),
            y(this, 'componentWillLeave', (e) => {
                this.setState({ animating: !0 }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    p.Z.sequence([
                        p.Z.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: p.Z.Easing.cubic
                        })
                    ]).start(e);
            }),
            y(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            y(this, 'getStyles', () => ({
                opacity: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
                transform: [
                    {
                        scaleX: this.state.scaleX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 2]
                        })
                    },
                    {
                        scaleY: this.state.scaleY.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        })
                    }
                ]
            })),
            y(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === S.yXg.H && this.lastInputedKeys[1] === S.yXg.H && this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === S.yXg.N && this.lastInputedKeys[4] === S.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = j(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            y(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = j(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            y(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function L(e) {
    let { isActive: t, arrow: n, className: i, children: l } = e,
        [a, c] = o.useState(t),
        u = o.useCallback(() => {
            T[n](), c(!0);
        }, [n]);
    return (
        o.useEffect(() => {
            if (a) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, r.jsx)(g.Clickable, {
            onClick: u,
            className: s()(N.arrow, i, { [N.active]: t || a }),
            children: l
        })
    );
}
function w(e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = o.useState(!1),
        [a, c] = o.useState(!1),
        u = o.useMemo(() => (__OVERLAY__ ? (0, v.Zg)() : (0, C.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: h } = (0, m.cj)([x.Z], () => ({
            keyboardModeEnabled: x.Z.keyboardModeEnabled,
            useReducedMotion: x.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, { showBackdrop: a }),
            (0, r.jsx)(g.ModalRoot, {
                className: s()(N.noBackground, { [N.noShadow]: i }),
                size: g.ModalSize.DYNAMIC,
                'aria-label': Z.intl.string(Z.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(f.W, {
                    component: 'div',
                    children: i
                        ? (0, r.jsx)(
                              E.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, r.jsx)(
                              M,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      !h && (_.Z.disable(), l(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
