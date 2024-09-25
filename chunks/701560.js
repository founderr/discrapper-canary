n.d(t, {
    Z: function () {
        return O;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(442837),
    d = n(481060),
    _ = n(239091),
    E = n(2052),
    f = n(594190),
    h = n(592745),
    p = n(757266),
    m = n(417363),
    I = n(358085),
    T = n(346329),
    g = n(981631),
    S = n(689938),
    A = n(201219);
function v(e, t, n) {
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
class N extends (r = s.PureComponent) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: g.qAy.BUTTON_CTA
        };
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, o.jsxs)(d.Clickable, {
                  'aria-label': S.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
                  className: A.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, o.jsx)('div', { className: A.arrowSeparator }),
                      (0, o.jsx)(d.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: A.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: i, customDisabledColor: a, tooltipPosition: s } = this.props;
        return (0, o.jsxs)('div', {
            className: A.disabledButtonWrapper,
            children: [
                (0, o.jsx)(d.Button, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != a ? a : A.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, o.jsx)(d.Tooltip, {
                    text: t,
                    position: s,
                    children: (e) =>
                        (0, o.jsx)('div', {
                            className: A.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: r, isLaunchable: i, isLaunching: a, isRunning: s, isShiny: l, hideNotLaunchable: c } = this.props;
        if (!i) return c ? null : this.renderDisabledButton(S.Z.Messages.GAME_ACTION_BUTTON_PLAY, I.isPlatformEmbedded ? S.Z.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : S.Z.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
        if (s) return this.renderDisabledButton(S.Z.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
        let _ = l ? d.ShinyButton : d.Button;
        return (0, o.jsxs)(_, {
            className: u()(A.playButton, e),
            innerClassName: A.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : d.Button.Colors.GREEN,
            submitting: a,
            onClick: this.handleClick,
            children: [
                (0, o.jsx)('div', {
                    className: A.buttonText,
                    children: S.Z.Messages.GAME_ACTION_BUTTON_PLAY
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: i } = this.props;
                if ((null == r || r(e), null == t)) throw Error('Unexpected missing libraryApplication');
                _.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, o.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            });
                    },
                    { onClose: i }
                );
            }),
            v(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: r } = this.props;
                T.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r
                    }
                });
            });
    }
}
function O(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, E.O)(),
        [i, a] = (0, c.Wu)([p.Z, h.Z, m.Z], () => [p.Z.isConnected(t) || h.Z.isLaunchable(t) || (null != n && m.Z.isLaunchable(n.id, n.branchId)), h.Z.launchingGames.has(t)], [t, n]),
        s = (0, c.e7)([f.ZP], () => new Set(f.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        l = (0, c.e7)([m.Z], () => (null != n ? m.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, o.jsx)(N, {
        ...e,
        analyticsContext: r,
        isLaunchable: i,
        isLaunching: a,
        isRunning: s,
        dispatchState: l
    });
}
v(N, 'defaultProps', {
    fullWidth: !1,
    size: d.Button.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
