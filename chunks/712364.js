var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(689938),
    d = n(89328);
function _(e, t, n) {
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
class E extends (r = o.PureComponent) {
    render() {
        var e;
        let { title: t, actionText: n, children: r, error: i, isLoading: s, maxLength: _, transitionState: E, helpMessage: f, retryPrompt: h, retrySuccessMessage: p } = this.props,
            { code: m, errorMessage: I, retrySuccess: T } = this.state,
            g =
                o.Children.count(r) > 0
                    ? (0, a.jsx)(u.Card, {
                          type: u.Card.Types.WARNING,
                          className: d.card,
                          children: (0, a.jsx)(u.Text, {
                              variant: 'text-md/normal',
                              children: r
                          })
                      })
                    : null,
            S =
                null != h
                    ? (0, a.jsxs)(u.Text, {
                          className: l()(d.__invalid_submitText, d.spacing),
                          variant: 'text-sm/normal',
                          children: [
                              (0, a.jsx)('br', {}),
                              (0, a.jsx)(u.Clickable, {
                                  className: l()(d.spacing, d.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, a.jsx)(u.Anchor, { children: h })
                              })
                          ]
                      })
                    : null,
            A = T
                ? (0, a.jsx)(u.Card, {
                      type: u.Card.Types.SUCCESS,
                      className: d.card,
                      children: (0, a.jsx)(u.Text, {
                          variant: 'text-md/normal',
                          children: p
                      })
                  })
                : null;
        return (0, a.jsx)(u.ModalRoot, {
            transitionState: E,
            children: (0, a.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, a.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(u.Heading, {
                            variant: 'heading-lg/semibold',
                            children: t
                        })
                    }),
                    (0, a.jsxs)(u.ModalContent, {
                        children: [
                            null != f
                                ? (0, a.jsx)(u.Text, {
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      className: d.spacing,
                                      children: f
                                  })
                                : null,
                            g,
                            A,
                            (0, a.jsxs)(u.FormItem, {
                                title: this.getLabelText(),
                                className: d.spacing,
                                children: [
                                    (0, a.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: m,
                                        autoComplete: 'one-time-code',
                                        autoFocus: !0
                                    }),
                                    this.errorPresent()
                                        ? (0, a.jsx)(u.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: d.error,
                                              children: null != i ? i : I
                                          })
                                        : null,
                                    S
                                ]
                            })
                        ]
                    }),
                    (0, a.jsxs)(u.ModalFooter, {
                        children: [
                            (0, a.jsx)(u.Button, {
                                type: 'submit',
                                disabled: s || 0 === m.length,
                                children: null != n ? n : c.Z.Messages.CONFIRM
                            }),
                            (0, a.jsx)(u.Button, {
                                onClick: this.handleCancel,
                                disabled: s,
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                children: c.Z.Messages.CANCEL
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_input', void 0),
            _(this, 'state', {
                code: '',
                errorMessage: '',
                retrySuccess: !1
            }),
            _(this, 'setRef', (e) => {
                this._input = e;
            }),
            _(this, 'getLabelText', () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : c.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL;
            }),
            _(this, 'getSupportedCodeTypes', () => (this.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : c.Z.Messages.TWO_FA_AUTH_CODE)),
            _(this, 'getPlaceholder', () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes();
            }),
            _(this, 'errorPresent', () => (null != this.props.error && '' !== this.props.error) || (null != this.state.errorMessage && '' !== this.state.errorMessage)),
            _(this, 'handleRetry', () => {
                let { onRetry: e } = this.props;
                null == e || e().then(() => this.setState({ retrySuccess: !0 }));
            }),
            _(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { handleSubmit: t, onError: n } = this.props;
                t(this.state.code).catch((e) => {
                    if (null != e.body) null == n || n(e.body), e.body.message && this.setState({ errorMessage: e.body.message });
                });
            }),
            _(this, 'handleCancel', () => {
                let { onClose: e, handleEarlyClose: t } = this.props;
                e(), null == t || t();
            }),
            _(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            });
    }
}
_(E, 'defaultProps', {
    btnClass: '',
    isLoading: !1,
    disallowBackupCodes: !1,
    error: null,
    forceNoPlaceholder: !1
}),
    (t.Z = E);
