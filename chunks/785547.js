n.d(t, {
    Z: function () {
        return U;
    }
});
var r,
    i,
    a = n(411104);
var o = n(47120);
var s = n(735250),
    l = n(470079),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    _ = n(58642),
    E = n(2052),
    f = n(710845),
    h = n(703656),
    p = n(173747),
    m = n(7956),
    I = n(293245),
    T = n(417363),
    g = n(941128),
    S = n(780570),
    A = n(358085),
    v = n(814225),
    N = n(346329),
    O = n(701560),
    R = n(981631),
    C = n(689938),
    y = n(217437);
function L(e, t, n) {
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
!(function (e) {
    (e.PLAY = 'play'), (e.NOW_PLAYING = 'now_playing'), (e.INSTALL = 'install'), (e.UPDATE = 'update'), (e.PAUSED = 'paused'), (e.LOCATE = 'locate'), (e.UNINSTALLING = 'uninstalling'), (e.QUEUED = 'queued'), (e.DOWNLOADING = 'downloading'), (e.UNSUPPORTED_OS = 'unsupported_os'), (e.ADD_TO_LIBRARY = 'add_to_library'), (e.PREORDER_WAIT = 'preorder_wait');
})(r || (r = {}));
let b = Object.freeze({
        [R.apO.PLAY]: 'play',
        [R.apO.INSTALL]: 'install',
        [R.apO.UPDATE]: 'update',
        [R.apO.PAUSE]: 'downloading',
        [R.apO.MOVE_UP]: 'queued',
        [R.apO.RESUME]: 'paused'
    }),
    D = () => [C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, C.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
function M(e) {
    let t = v.en(e.sku);
    return null != t ? C.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({ date: t }) : null;
}
class P extends (i = l.Component) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: R.qAy.BUTTON_CTA
        };
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return C.Z.Messages.GAME_ACTION_BUTTON_INSTALL;
            case 'update':
                return C.Z.Messages.GAME_ACTION_BUTTON_UPDATE;
            case 'paused':
                return C.Z.Messages.GAME_ACTION_BUTTON_PAUSED;
            case 'locate':
                return C.Z.Messages.GAME_ACTION_BUTTON_LOCATE;
            case 'uninstalling':
                let t = D();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return C.Z.Messages.GAME_ACTION_BUTTON_QUEUED;
            case 'downloading':
                return C.Z.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
            case 'preorder_wait':
                return C.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
            case 'add_to_library':
                return C.Z.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let r = null != n ? b[n] : null;
        return null != r ? r : null != t && t.type === R.vxO.UNINSTALLING ? 'uninstalling' : (0, A.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: r, customDisabledColor: i, isPlayShiny: a, onDropdownOpen: o, onDropdownClose: l, analyticsListSort: u, analyticsListIndex: c } = this.props;
        return (0, s.jsx)(O.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: r,
            customDisabledColor: i,
            isShiny: a,
            onDropdownOpen: o,
            onDropdownClose: l,
            analyticsListSort: u,
            analyticsListIndex: c
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: i, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, s.jsxs)('div', {
            className: y.disabledButtonWrapper,
            children: [
                (0, s.jsxs)(d.Button, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != a ? a : y.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, s.jsx)(d.Tooltip, {
                    text: t,
                    position: o,
                    children: (e) =>
                        (0, s.jsx)('div', {
                            className: y.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = S.KJ(t);
        if (null == n) return null;
        let r = n.type === R.vxO.UNINSTALLING ? d.Progress.INDETERMINATE : S.xI(Number(n.progress), Number(n.total));
        return (0, s.jsx)(d.Progress, {
            percent: r,
            size: d.Progress.Sizes.XSMALL,
            foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
            className: y.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: i, color: a, isCloudSyncing: o } = this.props;
        return (0, s.jsxs)(d.Button, {
            className: n,
            fullWidth: r,
            size: i,
            color: null != a ? a : d.Button.Colors.GREEN,
            submitting: 'uninstalling' === e || o,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()]
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ('play' === n) return this.renderPlayButton();
        if ('preorder_wait' === n) return this.renderDisabledButton(n, M(t));
        if ('unsupported_os' === n) return this.renderDisabledButton(n, C.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({ operatingSystem: C.Z.Messages.WINDOWS }));
        if ('install' === n && e) return this.renderDisabledButton(n, C.Z.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            L(this, '_uninstallStringIndex', null),
            L(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await _.h(e.id, e.branchId, e.getFlags() & ~R.eHb.HIDDEN), (0, h.uL)(R.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new f.Z('LibraryApplicationButton').error(e);
                }
            }),
            L(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                N.installApplication(e.id, e.branchId, t);
            }),
            L(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                N.updateApplication(e.id, e.branchId);
            }),
            L(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            L(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function U(e) {
    let { libraryApplication: t } = e,
        n = (0, E.O)(),
        [r, i] = (0, u.Wu)([T.Z, g.Z], () => [(0, m.i)(t, T.Z, g.Z), T.Z.getState(t.id, t.branchId)], [t]),
        a = (0, u.e7)([I.Z], () => I.Z.isSyncing(t.id, t.branchId), [t]),
        o = (0, u.e7)([p.Z], () => p.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, s.jsx)(P, {
        ...e,
        analyticsContext: n,
        actionState: r,
        dispatchState: i,
        isCloudSyncing: a,
        hasNoBuild: o
    });
}
L(P, 'defaultProps', {
    fullWidth: !1,
    size: d.Button.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    L(P, 'ButtonStates', r);
