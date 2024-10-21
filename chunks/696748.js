n.d(e, {
    a: function () {
        return y;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    o = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    c = n(372123),
    d = n(224706),
    u = n(812206),
    p = n(600164),
    C = n(293245),
    h = n(626135),
    f = n(981631),
    N = n(689938),
    O = n(621839),
    _ = n(113207);
function L(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class A extends o.PureComponent {
    renderConflictButton(t, e, n, o) {
        return (0, i.jsxs)(r.Button, {
            className: O.conflictButton,
            innerClassName: O.conflictButtonInner,
            onClick: o,
            children: [
                (0, i.jsx)('div', { className: n }),
                (0, i.jsxs)('div', {
                    className: O.buttonBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: O.conflictTitle,
                            children: t
                        }),
                        (0, i.jsx)('div', { children: N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED }),
                        (0, i.jsx)('div', {
                            className: O.timestamp,
                            children: a()(e).calendar()
                        })
                    ]
                })
            ]
        });
    }
    renderError() {
        let { application: t } = this.props;
        return (0, i.jsxs)(o.Fragment, {
            children: [
                (0, i.jsxs)(r.ModalContent, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            justify: p.Z.Justify.CENTER,
                            children: (0, i.jsx)('div', { className: O.errorArt })
                        }),
                        (0, i.jsx)('div', {
                            className: O.description,
                            children: N.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({ applicationName: t.name })
                        })
                    ]
                }),
                (0, i.jsx)(r.ModalFooter, {
                    children: (0, i.jsxs)(p.Z, {
                        justify: p.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(r.Button, {
                                className: O.linkButton,
                                size: O.linkButtonSize,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: N.Z.Messages.CANCEL
                            }),
                            (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.HORIZONTAL,
                                justify: p.Z.Justify.END,
                                children: [
                                    (0, i.jsx)(r.Button, {
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: O.retryButton,
                                        children: N.Z.Messages.RETRY
                                    }),
                                    (0, i.jsx)(r.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: N.Z.Messages.GAME_ACTION_BUTTON_PLAY
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
        let { application: t, cloudSyncState: e } = this.props;
        if (e.type !== f.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, i.jsxs)(r.ModalContent, {
            className: _.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: O.description,
                    children: N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({ applicationName: t.name })
                }),
                this.renderConflictButton(N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, O.conflictDownloadArt, this.handleChooseDownload),
                (0, i.jsxs)(p.Z, {
                    className: O.choiceWrapper,
                    align: p.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: O.choiceLine }),
                        (0, i.jsx)('div', {
                            className: O.choiceTitle,
                            children: N.Z.Messages.CLOUD_SYNC_MODAL_OR
                        }),
                        (0, i.jsx)('div', { className: O.choiceLine })
                    ]
                }),
                this.renderConflictButton(N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, O.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === f.TzF.CONFLICT ? N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : N.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
        return (0, i.jsxs)(r.ModalRoot, {
            transitionState: e,
            className: O.modal,
            'aria-label': n,
            children: [
                (0, i.jsxs)(r.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.ModalCloseButton, {
                            className: O.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(r.FormTitle, {
                            tag: 'h2',
                            className: _.marginReset,
                            children: n
                        })
                    ]
                }),
                t.type === f.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...t) {
        var e;
        super(...t),
            (e = this),
            L(this, 'onClose', () => {
                this.props.onClose();
            }),
            L(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: o } = e.props;
                e.onClose(),
                    y(i.id, i, {
                        analyticsParams: o,
                        cloudSync: t,
                        cloudSyncForceHash: n
                    });
            }),
            L(this, 'handleChooseDownload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            L(this, 'handleChooseUpload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
    }
}
let T = l.ZP.connectStores([C.Z, u.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: C.Z.getState(e.id, n),
        application: u.Z.getApplication(e.id)
    };
})(A);
async function y(t, e, n) {
    let o = u.Z.getApplication(t);
    if (null == o) return;
    let { cloudSync: s = !0, cloudSyncForceHash: a = null, analyticsParams: l } = n;
    if (s && null != e) {
        let t = e.branchId;
        try {
            await c.Z(e.id, t, a);
        } catch (n) {
            (0, r.openModal)((n) =>
                (0, i.jsx)(T, {
                    libraryApplication: e,
                    analyticsParams: l,
                    branchId: t,
                    ...n
                })
            );
            return;
        }
    }
    return (
        h.default.track(f.rMx.APPLICATION_OPENED, {
            application_id: o.id,
            application_name: o.name,
            type: f.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...l
        }),
        d.Z.launch({
            applicationId: o.id,
            branchId: null == e ? void 0 : e.branchId
        })
    );
}
