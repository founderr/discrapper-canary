n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(2052),
    _ = n(594190),
    E = n(592745),
    I = n(757266),
    m = n(417363),
    T = n(358085),
    N = n(346329),
    h = n(981631),
    C = n(689938),
    p = n(201219);
function f(e, t, n) {
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
class A extends (i = s.PureComponent) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: h.qAy.BUTTON_CTA
        };
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, a.jsxs)(c.Clickable, {
                  'aria-label': C.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
                  className: p.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, a.jsx)('div', { className: p.arrowSeparator }),
                      (0, a.jsx)(c.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: p.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: s, customDisabledColor: l, tooltipPosition: r } = this.props;
        return (0, a.jsxs)('div', {
            className: p.disabledButtonWrapper,
            children: [
                (0, a.jsx)(c.Button, {
                    className: n,
                    fullWidth: i,
                    size: s,
                    color: null != l ? l : p.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, a.jsx)(c.Tooltip, {
                    text: t,
                    position: r,
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: p.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: i, isLaunchable: s, isLaunching: l, isRunning: o, isShiny: d, hideNotLaunchable: u } = this.props;
        if (!s) return u ? null : this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_PLAY, T.isPlatformEmbedded ? C.Z.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : C.Z.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
        if (o) return this.renderDisabledButton(C.Z.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
        let _ = d ? c.ShinyButton : c.Button;
        return (0, a.jsxs)(_, {
            className: r()(p.playButton, e),
            innerClassName: p.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != i ? i : c.Button.Colors.GREEN,
            submitting: l,
            onClick: this.handleClick,
            children: [
                (0, a.jsx)('div', {
                    className: p.buttonText,
                    children: C.Z.Messages.GAME_ACTION_BUTTON_PLAY
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: i, onDropdownClose: s } = this.props;
                if ((null == i || i(e), null == t)) throw Error('Unexpected missing libraryApplication');
                d.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, a.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            });
                    },
                    { onClose: s }
                );
            }),
            f(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
                N.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: i
                    }
                });
            });
    }
}
function g(e) {
    let { applicationId: t, libraryApplication: n } = e,
        i = (0, u.O)(),
        [s, l] = (0, o.Wu)([I.Z, E.Z, m.Z], () => [I.Z.isConnected(t) || E.Z.isLaunchable(t) || (null != n && m.Z.isLaunchable(n.id, n.branchId)), E.Z.launchingGames.has(t)], [t, n]),
        r = (0, o.e7)([_.ZP], () => new Set(_.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, o.e7)([m.Z], () => (null != n ? m.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, a.jsx)(A, {
        ...e,
        analyticsContext: i,
        isLaunchable: s,
        isLaunching: l,
        isRunning: r,
        dispatchState: c
    });
}
f(A, 'defaultProps', {
    fullWidth: !1,
    size: c.Button.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
