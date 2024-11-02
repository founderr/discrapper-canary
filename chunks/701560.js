n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    m = n(594190),
    f = n(592745),
    h = n(757266),
    p = n(417363),
    g = n(358085),
    _ = n(346329),
    C = n(981631),
    E = n(388032),
    I = n(201219);
function x(e, t, n) {
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
class v extends (i = l.PureComponent) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: C.qAy.BUTTON_CTA
        };
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, r.jsxs)(c.Clickable, {
                  'aria-label': E.intl.string(E.t.KTPVLC),
                  className: I.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, r.jsx)('div', { className: I.arrowSeparator }),
                      (0, r.jsx)(c.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: l, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, r.jsxs)('div', {
            className: I.disabledButtonWrapper,
            children: [
                (0, r.jsx)(c.Button, {
                    className: n,
                    fullWidth: i,
                    size: l,
                    color: null != a ? a : I.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, r.jsx)(c.Tooltip, {
                    text: t,
                    position: o,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: I.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: i, isLaunchable: l, isLaunching: a, isRunning: s, isShiny: u, hideNotLaunchable: d } = this.props;
        if (!l) return d ? null : this.renderDisabledButton(E.intl.string(E.t['359PbW']), g.isPlatformEmbedded ? E.intl.string(E.t.NASLa2) : E.intl.string(E.t.o1bhkJ));
        if (s) return this.renderDisabledButton(E.intl.string(E.t['3elwAA']));
        let m = u ? c.ShinyButton : c.Button;
        return (0, r.jsxs)(m, {
            className: o()(I.playButton, e),
            innerClassName: I.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != i ? i : c.Button.Colors.GREEN,
            submitting: a,
            onClick: this.handleClick,
            children: [
                (0, r.jsx)('div', {
                    className: I.buttonText,
                    children: E.intl.string(E.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: i, onDropdownClose: l } = this.props;
                if ((null == i || i(e), null == t)) throw Error('Unexpected missing libraryApplication');
                u.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            });
                    },
                    { onClose: l }
                );
            }),
            x(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
                _.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: i
                    }
                });
            });
    }
}
function N(e) {
    let { applicationId: t, libraryApplication: n } = e,
        i = (0, d.O)(),
        [l, a] = (0, s.Wu)([h.Z, f.Z, p.Z], () => [h.Z.isConnected(t) || f.Z.isLaunchable(t) || (null != n && p.Z.isLaunchable(n.id, n.branchId)), f.Z.launchingGames.has(t)], [t, n]),
        o = (0, s.e7)([m.ZP], () => new Set(m.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([p.Z], () => (null != n ? p.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, r.jsx)(v, {
        ...e,
        analyticsContext: i,
        isLaunchable: l,
        isLaunching: a,
        isRunning: o,
        dispatchState: c
    });
}
x(v, 'defaultProps', {
    fullWidth: !1,
    size: c.Button.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
