n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(411104),
    n(47120);
var i,
    r,
    l,
    a = n(200651),
    o = n(192379),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(58642),
    m = n(2052),
    h = n(710845),
    f = n(703656),
    p = n(173747),
    g = n(7956),
    _ = n(293245),
    C = n(417363),
    E = n(941128),
    I = n(780570),
    x = n(358085),
    v = n(814225),
    N = n(346329),
    T = n(701560),
    S = n(981631),
    b = n(388032),
    A = n(217437);
function j(e, t, n) {
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
((l = i || (i = {})).PLAY = 'play'), (l.NOW_PLAYING = 'now_playing'), (l.INSTALL = 'install'), (l.UPDATE = 'update'), (l.PAUSED = 'paused'), (l.LOCATE = 'locate'), (l.UNINSTALLING = 'uninstalling'), (l.QUEUED = 'queued'), (l.DOWNLOADING = 'downloading'), (l.UNSUPPORTED_OS = 'unsupported_os'), (l.ADD_TO_LIBRARY = 'add_to_library'), (l.PREORDER_WAIT = 'preorder_wait');
let Z = Object.freeze({
        [S.apO.PLAY]: 'play',
        [S.apO.INSTALL]: 'install',
        [S.apO.UPDATE]: 'update',
        [S.apO.PAUSE]: 'downloading',
        [S.apO.MOVE_UP]: 'queued',
        [S.apO.RESUME]: 'paused'
    }),
    R = () => [b.intl.string(b.t.r9wmKi), b.intl.string(b.t['6CpimZ']), b.intl.string(b.t.ysbNDQ), b.intl.string(b.t.TLnXx8), b.intl.string(b.t.Qi8mnZ), b.intl.string(b.t.yvMu3d), b.intl.string(b.t.PnNUZ2), b.intl.string(b.t.hU2TEB), b.intl.string(b.t.YyY519), b.intl.string(b.t.PbHJb2)];
class P extends (r = o.Component) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: S.qAy.BUTTON_CTA
        };
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return b.intl.string(b.t.nL0WvL);
            case 'update':
                return b.intl.string(b.t.tkhwp6);
            case 'paused':
                return b.intl.string(b.t['6EKrh4']);
            case 'locate':
                return b.intl.string(b.t['nIj+a2']);
            case 'uninstalling':
                let t = R();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return b.intl.string(b.t.TiJg5u);
            case 'downloading':
                return b.intl.string(b.t.Tdhepa);
            case 'preorder_wait':
                return b.intl.string(b.t.xiXyPT);
            case 'add_to_library':
                return b.intl.string(b.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let i = null != n ? Z[n] : null;
        return null != i ? i : null != t && t.type === S.vxO.UNINSTALLING ? 'uninstalling' : (0, x.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: i, customDisabledColor: r, isPlayShiny: l, onDropdownOpen: o, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: u } = this.props;
        return (0, a.jsx)(T.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: r,
            isShiny: l,
            onDropdownOpen: o,
            onDropdownClose: s,
            analyticsListSort: c,
            analyticsListIndex: u
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: r, customDisabledColor: l, tooltipPosition: o } = this.props;
        return (0, a.jsxs)('div', {
            className: A.disabledButtonWrapper,
            children: [
                (0, a.jsxs)(u.Button, {
                    className: n,
                    fullWidth: i,
                    size: r,
                    color: null != l ? l : A.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, a.jsx)(u.Tooltip, {
                    text: t,
                    position: o,
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: A.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = I.KJ(t);
        if (null == n) return null;
        let i = n.type === S.vxO.UNINSTALLING ? u.Progress.INDETERMINATE : I.xI(Number(n.progress), Number(n.total));
        return (0, a.jsx)(u.Progress, {
            percent: i,
            size: u.Progress.Sizes.XSMALL,
            foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
            className: A.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: i, size: r, color: l, isCloudSyncing: o } = this.props;
        return (0, a.jsxs)(u.Button, {
            className: n,
            fullWidth: i,
            size: r,
            color: null != l ? l : u.Button.Colors.GREEN,
            submitting: 'uninstalling' === e || o,
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
                    let t = v.en(e.sku);
                    return null != t ? b.intl.formatToPlainString(b.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, b.intl.formatToPlainString(b.t.LBm0Aw, { operatingSystem: b.intl.string(b.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, b.intl.string(b.t.QUSQIC));
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
    constructor(...e) {
        super(...e),
            j(this, '_uninstallStringIndex', null),
            j(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~S.eHb.HIDDEN), (0, f.uL)(S.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new h.Z('LibraryApplicationButton').error(e);
                }
            }),
            j(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                N.installApplication(e.id, e.branchId, t);
            }),
            j(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                N.updateApplication(e.id, e.branchId);
            }),
            j(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            j(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function y(e) {
    let { libraryApplication: t } = e,
        n = (0, m.O)(),
        [i, r] = (0, s.Wu)([C.Z, E.Z], () => [(0, g.i)(t, C.Z, E.Z), C.Z.getState(t.id, t.branchId)], [t]),
        l = (0, s.e7)([_.Z], () => _.Z.isSyncing(t.id, t.branchId), [t]),
        o = (0, s.e7)([p.Z], () => p.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, a.jsx)(P, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: r,
        isCloudSyncing: l,
        hasNoBuild: o
    });
}
j(P, 'defaultProps', {
    fullWidth: !1,
    size: u.Button.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    j(P, 'ButtonStates', i);
