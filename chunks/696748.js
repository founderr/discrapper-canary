n.d(t, {
    a: function () {
        return N;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(913527),
    l = n.n(s),
    u = n(442837),
    c = n(481060),
    d = n(372123),
    _ = n(224706),
    E = n(812206),
    f = n(600164),
    h = n(293245),
    p = n(626135),
    m = n(981631),
    I = n(689938),
    T = n(621839),
    g = n(113207);
function S(e, t, n) {
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
class A extends o.PureComponent {
    renderConflictButton(e, t, n, r) {
        return (0, a.jsxs)(c.Button, {
            className: T.conflictButton,
            innerClassName: T.conflictButtonInner,
            onClick: r,
            children: [
                (0, a.jsx)('div', { className: n }),
                (0, a.jsxs)('div', {
                    className: T.buttonBody,
                    children: [
                        (0, a.jsx)('div', {
                            className: T.conflictTitle,
                            children: e
                        }),
                        (0, a.jsx)('div', { children: I.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED }),
                        (0, a.jsx)('div', {
                            className: T.timestamp,
                            children: l()(t).calendar()
                        })
                    ]
                })
            ]
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsxs)(c.ModalContent, {
                    children: [
                        (0, a.jsx)(f.Z, {
                            justify: f.Z.Justify.CENTER,
                            children: (0, a.jsx)('div', { className: T.errorArt })
                        }),
                        (0, a.jsx)('div', {
                            className: T.description,
                            children: I.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({ applicationName: e.name })
                        })
                    ]
                }),
                (0, a.jsx)(c.ModalFooter, {
                    children: (0, a.jsxs)(f.Z, {
                        justify: f.Z.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(c.Button, {
                                className: T.linkButton,
                                size: T.linkButtonSize,
                                look: c.Button.Looks.LINK,
                                color: c.Button.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: I.Z.Messages.CANCEL
                            }),
                            (0, a.jsxs)(f.Z, {
                                direction: f.Z.Direction.HORIZONTAL,
                                justify: f.Z.Justify.END,
                                children: [
                                    (0, a.jsx)(c.Button, {
                                        look: c.Button.Looks.LINK,
                                        color: c.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: T.retryButton,
                                        children: I.Z.Messages.RETRY
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: I.Z.Messages.GAME_ACTION_BUTTON_PLAY
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
    renderConflict() {
        let { application: e, cloudSyncState: t } = this.props;
        if (t.type !== m.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, a.jsxs)(c.ModalContent, {
            className: g.marginBottom20,
            children: [
                (0, a.jsx)('div', {
                    className: T.description,
                    children: I.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({ applicationName: e.name })
                }),
                this.renderConflictButton(I.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, t.remote.timestamp, T.conflictDownloadArt, this.handleChooseDownload),
                (0, a.jsxs)(f.Z, {
                    className: T.choiceWrapper,
                    align: f.Z.Align.CENTER,
                    children: [
                        (0, a.jsx)('div', { className: T.choiceLine }),
                        (0, a.jsx)('div', {
                            className: T.choiceTitle,
                            children: I.Z.Messages.CLOUD_SYNC_MODAL_OR
                        }),
                        (0, a.jsx)('div', { className: T.choiceLine })
                    ]
                }),
                this.renderConflictButton(I.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, t.next.timestamp, T.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === m.TzF.CONFLICT ? I.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : I.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
        return (0, a.jsxs)(c.ModalRoot, {
            transitionState: t,
            className: T.modal,
            'aria-label': n,
            children: [
                (0, a.jsxs)(c.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, a.jsx)(c.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: this.onClose
                        }),
                        (0, a.jsx)(c.FormTitle, {
                            tag: 'h2',
                            className: g.marginReset,
                            children: n
                        })
                    ]
                }),
                e.type === m.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            S(this, 'onClose', () => {
                this.props.onClose();
            }),
            S(this, 'handlePlay', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: r, analyticsParams: i } = t.props;
                t.onClose(),
                    N(r.id, r, {
                        analyticsParams: i,
                        cloudSync: e,
                        cloudSyncForceHash: n
                    });
            }),
            S(this, 'handleChooseDownload', () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.TzF.CONFLICT && this.handlePlay(!0, e.remote.hash);
            }),
            S(this, 'handleChooseUpload', () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.TzF.CONFLICT && this.handlePlay(!0, e.next.hash);
            });
    }
}
let v = u.ZP.connectStores([h.Z, E.Z], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return {
        cloudSyncState: h.Z.getState(t.id, n),
        application: E.Z.getApplication(t.id)
    };
})(A);
async function N(e, t, n) {
    let r = E.Z.getApplication(e);
    if (null == r) return;
    let { cloudSync: i = !0, cloudSyncForceHash: o = null, analyticsParams: s } = n;
    if (i && null != t) {
        let e = t.branchId;
        try {
            await d.Z(t.id, e, o);
        } catch (n) {
            (0, c.openModal)((n) =>
                (0, a.jsx)(v, {
                    libraryApplication: t,
                    analyticsParams: s,
                    branchId: e,
                    ...n
                })
            );
            return;
        }
    }
    return (
        p.default.track(m.rMx.APPLICATION_OPENED, {
            application_id: r.id,
            application_name: r.name,
            type: m.q5t.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...s
        }),
        _.Z.launch({
            applicationId: r.id,
            branchId: null == t ? void 0 : t.branchId
        })
    );
}
