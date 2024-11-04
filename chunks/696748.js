n.d(e, {
    a: function () {
        return E;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(913527),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(372123),
    d = n(224706),
    u = n(812206),
    p = n(600164),
    h = n(293245),
    f = n(626135),
    C = n(981631),
    A = n(388032),
    T = n(621839),
    y = n(113207);
function m(t, e, n) {
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
class N extends l.PureComponent {
    renderConflictButton(t, e, n, l) {
        return (0, i.jsxs)(s.Button, {
            className: T.conflictButton,
            innerClassName: T.conflictButtonInner,
            onClick: l,
            children: [
                (0, i.jsx)('div', { className: n }),
                (0, i.jsxs)('div', {
                    className: T.buttonBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: T.conflictTitle,
                            children: t
                        }),
                        (0, i.jsx)('div', { children: A.intl.string(A.t.gflHOz) }),
                        (0, i.jsx)('div', {
                            className: T.timestamp,
                            children: o()(e).calendar()
                        })
                    ]
                })
            ]
        });
    }
    renderError() {
        let { application: t } = this.props;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsxs)(s.ModalContent, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            justify: p.Z.Justify.CENTER,
                            children: (0, i.jsx)('div', { className: T.errorArt })
                        }),
                        (0, i.jsx)('div', {
                            className: T.description,
                            children: A.intl.format(A.t.RAaWyc, { applicationName: t.name })
                        })
                    ]
                }),
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsxs)(p.Z, {
                        justify: p.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(s.Button, {
                                className: T.linkButton,
                                size: T.linkButtonSize,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: A.intl.string(A.t['ETE/oK'])
                            }),
                            (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.HORIZONTAL,
                                justify: p.Z.Justify.END,
                                children: [
                                    (0, i.jsx)(s.Button, {
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: T.retryButton,
                                        children: A.intl.string(A.t['5911LS'])
                                    }),
                                    (0, i.jsx)(s.Button, {
                                        onClick: () => this.handlePlay(!1),
                                        children: A.intl.string(A.t['359PbW'])
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
        if (e.type !== C.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, i.jsxs)(s.ModalContent, {
            className: y.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: T.description,
                    children: A.intl.format(A.t.eyXUPz, { applicationName: t.name })
                }),
                this.renderConflictButton(A.intl.string(A.t.AQUmkp), e.remote.timestamp, T.conflictDownloadArt, this.handleChooseDownload),
                (0, i.jsxs)(p.Z, {
                    className: T.choiceWrapper,
                    align: p.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: T.choiceLine }),
                        (0, i.jsx)('div', {
                            className: T.choiceTitle,
                            children: A.intl.string(A.t.WUsA2N)
                        }),
                        (0, i.jsx)('div', { className: T.choiceLine })
                    ]
                }),
                this.renderConflictButton(A.intl.string(A.t.AXVws7), e.next.timestamp, T.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === C.TzF.CONFLICT ? A.intl.string(A.t.oNbO1d) : A.intl.string(A.t.as4Tgo);
        return (0, i.jsxs)(s.ModalRoot, {
            transitionState: e,
            className: T.modal,
            'aria-label': n,
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(s.FormTitle, {
                            tag: 'h2',
                            className: y.marginReset,
                            children: n
                        })
                    ]
                }),
                t.type === C.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...t) {
        var e;
        super(...t),
            (e = this),
            m(this, 'onClose', () => {
                this.props.onClose();
            }),
            m(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: l } = e.props;
                e.onClose(),
                    E(i.id, i, {
                        analyticsParams: l,
                        cloudSync: t,
                        cloudSyncForceHash: n
                    });
            }),
            m(this, 'handleChooseDownload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            m(this, 'handleChooseUpload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
    }
}
let g = a.ZP.connectStores([h.Z, u.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: h.Z.getState(e.id, n),
        application: u.Z.getApplication(e.id)
    };
})(N);
async function E(t, e, n) {
    let l = u.Z.getApplication(t);
    if (null == l) return;
    let { cloudSync: r = !0, cloudSyncForceHash: o = null, analyticsParams: a } = n;
    if (r && null != e) {
        let t = e.branchId;
        try {
            await c.Z(e.id, t, o);
        } catch (n) {
            (0, s.openModal)((n) =>
                (0, i.jsx)(g, {
                    libraryApplication: e,
                    analyticsParams: a,
                    branchId: t,
                    ...n
                })
            );
            return;
        }
    }
    return (
        f.default.track(C.rMx.APPLICATION_OPENED, {
            application_id: l.id,
            application_name: l.name,
            type: C.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...a
        }),
        d.Z.launch({
            applicationId: l.id,
            branchId: null == e ? void 0 : e.branchId
        })
    );
}
