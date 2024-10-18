n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(411104),
    n(47120);
var i,
    a,
    s,
    r = n(735250),
    l = n(470079),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(58642),
    _ = n(2052),
    E = n(710845),
    I = n(703656),
    m = n(173747),
    T = n(7956),
    f = n(293245),
    h = n(417363),
    N = n(941128),
    p = n(780570),
    C = n(358085),
    g = n(814225),
    S = n(346329),
    A = n(701560),
    x = n(981631),
    R = n(689938),
    O = n(217437);
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
((s = i || (i = {})).PLAY = 'play'), (s.NOW_PLAYING = 'now_playing'), (s.INSTALL = 'install'), (s.UPDATE = 'update'), (s.PAUSED = 'paused'), (s.LOCATE = 'locate'), (s.UNINSTALLING = 'uninstalling'), (s.QUEUED = 'queued'), (s.DOWNLOADING = 'downloading'), (s.UNSUPPORTED_OS = 'unsupported_os'), (s.ADD_TO_LIBRARY = 'add_to_library'), (s.PREORDER_WAIT = 'preorder_wait');
let M = Object.freeze({
        [x.apO.PLAY]: 'play',
        [x.apO.INSTALL]: 'install',
        [x.apO.UPDATE]: 'update',
        [x.apO.PAUSE]: 'downloading',
        [x.apO.MOVE_UP]: 'queued',
        [x.apO.RESUME]: 'paused'
    }),
    L = () => [R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, R.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class Z extends (a = l.Component) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: x.qAy.BUTTON_CTA
        };
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return R.Z.Messages.GAME_ACTION_BUTTON_INSTALL;
            case 'update':
                return R.Z.Messages.GAME_ACTION_BUTTON_UPDATE;
            case 'paused':
                return R.Z.Messages.GAME_ACTION_BUTTON_PAUSED;
            case 'locate':
                return R.Z.Messages.GAME_ACTION_BUTTON_LOCATE;
            case 'uninstalling':
                let t = L();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return R.Z.Messages.GAME_ACTION_BUTTON_QUEUED;
            case 'downloading':
                return R.Z.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
            case 'preorder_wait':
                return R.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
            case 'add_to_library':
                return R.Z.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let i = null != n ? M[n] : null;
        return null != i ? i : null != t && t.type === x.vxO.UNINSTALLING ? 'uninstalling' : (0, C.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: i, customDisabledColor: a, isPlayShiny: s, onDropdownOpen: l, onDropdownClose: o, analyticsListSort: c, analyticsListIndex: u } = this.props;
        return (0, r.jsx)(A.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: a,
            isShiny: s,
            onDropdownOpen: l,
            onDropdownClose: o,
            analyticsListSort: c,
            analyticsListIndex: u
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: a, customDisabledColor: s, tooltipPosition: l } = this.props;
        return (0, r.jsxs)('div', {
            className: O.disabledButtonWrapper,
            children: [
                (0, r.jsxs)(u.Button, {
                    className: n,
                    fullWidth: i,
                    size: a,
                    color: null != s ? s : O.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, r.jsx)(u.Tooltip, {
                    text: t,
                    position: l,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: O.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = p.KJ(t);
        if (null == n) return null;
        let i = n.type === x.vxO.UNINSTALLING ? u.Progress.INDETERMINATE : p.xI(Number(n.progress), Number(n.total));
        return (0, r.jsx)(u.Progress, {
            percent: i,
            size: u.Progress.Sizes.XSMALL,
            foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
            className: O.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: i, size: a, color: s, isCloudSyncing: l } = this.props;
        return (0, r.jsxs)(u.Button, {
            className: n,
            fullWidth: i,
            size: a,
            color: null != s ? s : u.Button.Colors.GREEN,
            submitting: 'uninstalling' === e || l,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()]
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ('play' === n) return this.renderPlayButton();
        if ('preorder_wait' === n)
            return this.renderDisabledButton(
                n,
                (function (e) {
                    let t = g.en(e.sku);
                    return null != t ? R.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({ date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, R.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({ operatingSystem: R.Z.Messages.WINDOWS }));
        if ('install' === n && e) return this.renderDisabledButton(n, R.Z.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
    constructor(...e) {
        super(...e),
            v(this, '_uninstallStringIndex', null),
            v(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~x.eHb.HIDDEN), (0, I.uL)(x.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new E.Z('LibraryApplicationButton').error(e);
                }
            }),
            v(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                S.installApplication(e.id, e.branchId, t);
            }),
            v(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                S.updateApplication(e.id, e.branchId);
            }),
            v(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            v(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function P(e) {
    let { libraryApplication: t } = e,
        n = (0, _.O)(),
        [i, a] = (0, o.Wu)([h.Z, N.Z], () => [(0, T.i)(t, h.Z, N.Z), h.Z.getState(t.id, t.branchId)], [t]),
        s = (0, o.e7)([f.Z], () => f.Z.isSyncing(t.id, t.branchId), [t]),
        l = (0, o.e7)([m.Z], () => m.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, r.jsx)(Z, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: a,
        isCloudSyncing: s,
        hasNoBuild: l
    });
}
v(Z, 'defaultProps', {
    fullWidth: !1,
    size: u.Button.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    v(Z, 'ButtonStates', i);
