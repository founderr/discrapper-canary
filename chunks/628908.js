n.r(t), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    d = n(816814),
    u = n(23645),
    E = n(600164),
    h = n(454585),
    p = n(144114),
    f = n(607018),
    _ = n(325067),
    R = n(594174),
    I = n(279837),
    m = n(981631),
    N = n(815660),
    b = n(388032),
    g = n(691844);
function C(e, t, n) {
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
let y = (e) => {
    let { label: t, text: n, children: o, ...i } = e;
    return (0, r.jsxs)(E.Z, {
        direction: E.Z.Direction.VERTICAL,
        ...i,
        children: [
            (0, r.jsx)(l.FormTitle, {
                tag: 'h2',
                children: t
            }),
            null != n
                ? (0, r.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      className: g.sectionBody,
                      children: n
                  })
                : null,
            (0, r.jsx)(E.Z.Child, {
                wrap: !0,
                children: o
            })
        ]
    });
};
class S extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(m.xW$.MFA_SMS),
            o = e.hasFlag(m.xW$.PARTNER) || e.hasFlag(m.xW$.STAFF);
        return t
            ? (0, r.jsxs)(y, {
                  label: b.intl.string(b.t.DZQe29),
                  text: b.intl.string(b.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: g.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: g.phoneNumber,
                                  children: b.intl.format(b.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.Button, {
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.LINK,
                                  size: l.Button.Sizes.MIN,
                                  className: g.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: b.intl.string(b.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.Button, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.Button.Colors.GREEN,
                          size: l.Button.Sizes.SMALL,
                          children: o ? b.intl.string(b.t.Sq6Q1t) : n ? b.intl.string(b.t.kSbHTE) : b.intl.string(b.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(y, {
                  label: b.intl.string(b.t.DZQe29),
                  text: b.intl.string(b.t.fspJ4O),
                  children: (0, r.jsx)(l.Button, {
                      onClick: this.handleEnableSMS,
                      color: l.Button.Colors.GREEN,
                      size: l.Button.Sizes.SMALL,
                      disabled: o,
                      children: o ? b.intl.string(b.t.Sq6Q1t) : b.intl.string(b.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, r.jsx)(y, {
            label: b.intl.string(b.t.qZZUy8),
            text: b.intl.format(b.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.Button, {
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: b.intl.string(b.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e) {
        return (0, r.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
                (0, r.jsxs)(E.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            className: g.header,
                            children: h.Z.parse(b.intl.string(b.t['681MPT']))
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: g.subHeader,
                            children: e
                        })
                    ]
                }),
                (0, r.jsx)(E.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(l.ModalCloseButton, { onClick: this.handleCloseModal })
                })
            ]
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(l.DeclarativeConfirmModal, {
            dismissable: !0,
            header: b.intl.string(b.t.mwVXnJ),
            confirmText: b.intl.string(b.t.MwSEo6),
            cancelText: b.intl.string(b.t['ETE/oK']),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }), t();
            },
            children: (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                children: e
            })
        });
    }
    render() {
        let { isTotp: e } = this.props;
        return e ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: g.modal,
            children: [
                this.renderHeader(b.intl.format(b.t.pQioMz, {})),
                (0, r.jsxs)(l.ModalContent, {
                    className: g.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, { className: g.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(b.intl.string(b.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: g.modal,
            children: [
                this.renderHeader(b.intl.format(b.t.Xb5JGh, {})),
                (0, r.jsx)(l.ModalContent, {
                    className: g.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(b.intl.string(b.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.openModal)(
            (t) =>
                (0, r.jsx)(f.default, {
                    reason: p.L.MFA_PHONE_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: N.M }
        );
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', { showConfirmModal: !1 }),
            C(this, 'handleCloseModal', () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            C(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '('.concat(b.intl.string(b.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = b.intl.formatToPlainString(b.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            C(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            C(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, l.openModal)((e) =>
                            (0, r.jsx)(I.default, {
                                ...e,
                                handleSubmit: (e) => d.Z.enableSMS(e),
                                title: b.intl.string(b.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            });
    }
}
t.default = s.ZP.connectStores([R.default, _.Z], () => {
    let e = R.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: _.Z.getBackupCodes(),
            hasSeenBackupPrompt: _.Z.hasSeenBackupPrompt
        }
    );
})(S);
