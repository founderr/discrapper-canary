r.r(n),
    r.d(n, {
        default: function () {
            return w;
        }
    });
var i = r(47120);
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    _ = r.n(f),
    h = r(481060),
    p = r(166459),
    m = r(476326),
    g = r(752305),
    E = r(849522),
    v = r(703558),
    I = r(626135),
    T = r(358085),
    b = r(998502),
    y = r(981631),
    S = r(388032),
    A = r(55720),
    N = r(232186);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let R = 104,
    O = 16;
function D(e) {
    var n, r, i, a;
    let { file: s } = e,
        [o, l] = d.useState(),
        [u, f] = d.useState(!1),
        [h, p] = d.useState({}),
        m = d.useRef(null);
    d.useEffect(() => {
        if ((null != m.current && f(!1), null == s)) return;
        let e = URL.createObjectURL(s);
        return (
            l(e),
            () => {
                l(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [s]),
        d.useLayoutEffect(() => {
            let e = m.current;
            null != e &&
                (e.onload = () => {
                    let n = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === n
                        ? p({
                              width: R,
                              height: R
                          })
                        : n > 1
                          ? p({
                                width: R * n,
                                height: void 0
                            })
                          : p({
                                width: void 0,
                                height: R / n
                            }),
                        f(!0);
                });
        }, []);
    let g = Math.max(16, (O + R - (null !== (r = null === (n = m.current) || void 0 === n ? void 0 : n.width) && void 0 !== r ? r : 0)) / 2);
    return (0, c.jsx)('img', {
        ref: m,
        src: o,
        className: _()(A.icon, { [A.image]: !u }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null !== (i = h.width) && void 0 !== i ? i : 'initial',
            height: null !== (a = h.height) && void 0 !== a ? a : R,
            marginLeft: g,
            marginRight: g,
            marginTop: null != h.height ? R - h.height - 33 : -33
        }
    });
}
class L extends d.Component {
    render() {
        var e;
        if (this.props.upload.item.platform !== m.ow.WEB) return null;
        if (this.props.upload.isImage) return (0, c.jsx)(D, { file: this.props.upload.item.file });
        return (0, c.jsx)('div', { className: _()(A.icon, { [A[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 }) });
    }
}
class x extends d.Component {
    componentDidMount() {
        var e;
        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === m.ow.WEB &&
            I.default.track(y.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            T.isPlatformEmbedded && b.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var n, r, i, a;
        (null === (n = e.upload) || void 0 === n ? void 0 : n.filename) !== (null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && this.setState({ filename: null !== (a = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== a ? a : '' });
    }
    render() {
        let { upload: e, transitionState: n, messageMaxLength: r, disableSpoiler: i } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, c.jsxs)(h.ModalRoot, {
            'aria-label': S.intl.string(S.t['3AS4UF']),
            size: h.ModalSize.DYNAMIC,
            transitionState: n,
            className: _()(A.uploadModal),
            children: [
                (0, c.jsxs)('div', {
                    className: A.inner,
                    children: [
                        (0, c.jsxs)('div', {
                            className: _()(A.file, { [A.expandable]: e.isImage }),
                            children: [
                                (0, c.jsx)(L, { upload: e }),
                                (0, c.jsxs)('div', {
                                    className: A.description,
                                    children: [
                                        (0, c.jsx)('div', {
                                            className: A.filename,
                                            children: e.showLargeMessageDialog ? S.intl.formatToPlainString(S.t.QWQxtL, { maxLength: r }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, c.jsx)('div', {
                                                  className: A.subtitle,
                                                  children: S.intl.string(S.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, c.jsx)('div', {
                            className: A.comment,
                            children: (0, c.jsxs)(d.Fragment, {
                                children: [
                                    (0, c.jsx)('div', {
                                        className: A.label,
                                        children: (0, c.jsx)('span', { children: S.intl.string(S.t.ILJuBg) })
                                    }),
                                    (0, c.jsx)(h.TextInput, {
                                        className: _()(A.channelTextAreaUpload, N.marginTop8),
                                        value: this.state.filename,
                                        onChange: (e) => this.setState({ filename: e }),
                                        onKeyDown: (e) => {
                                            if (e.which === y.yXg.ENTER) return this.handleSubmit();
                                        }
                                    }),
                                    e.isImage
                                        ? (0, c.jsxs)(d.Fragment, {
                                              children: [
                                                  (0, c.jsx)('div', {
                                                      className: A.label,
                                                      children: (0, c.jsx)('span', { children: S.intl.string(S.t.eOB2eX) })
                                                  }),
                                                  (0, c.jsx)(h.TextInput, {
                                                      className: _()(A.channelTextAreaUpload, N.marginTop8),
                                                      placeholder: S.intl.string(S.t.RNH1jo),
                                                      value: this.state.description,
                                                      onChange: (e) => this.setState({ description: e }),
                                                      onKeyDown: (e) => {
                                                          if (e.which === y.yXg.ENTER) return this.handleSubmit();
                                                      }
                                                  })
                                              ]
                                          })
                                        : null,
                                    !0 !== i &&
                                        (0, c.jsx)(h.Checkbox, {
                                            className: N.marginBottom20,
                                            value: a,
                                            onChange: (e, n) => this.setState({ hasSpoiler: n }),
                                            children: (0, c.jsx)(h.Text, {
                                                variant: 'text-sm/normal',
                                                children: S.intl.string(S.t['gsI+xM'])
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, c.jsx)('div', {
                    className: A.footer,
                    children: (0, c.jsxs)('div', {
                        className: _()(A.hasSpoilers, A.footerRightAlign),
                        children: [
                            (0, c.jsx)(h.Button, {
                                type: 'button',
                                look: h.Button.Looks.LINK,
                                color: h.Button.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, c.jsx)('span', { children: S.intl.string(S.t['ETE/oK']) })
                            }),
                            (0, c.jsx)(h.Button, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, c.jsx)('span', { children: S.intl.string(S.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var n, r, i, a, s, o;
        super(e),
            C(this, 'cancelAll', () => {
                p.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            C(this, 'cancel', () => {
                this.props.onClose();
            }),
            C(this, 'handleTextChange', (e, n, r) => {
                this.setState({
                    textValue: n,
                    richValue: r
                });
            }),
            C(this, 'handleSubmit', () => {
                let { upload: e, onClose: n, onSubmit: r } = this.props,
                    { filename: i, description: a, hasSpoiler: s } = this.state;
                r({
                    upload: e,
                    name: i,
                    description: a,
                    spoiler: s
                }),
                    n();
            });
        let l = e.ignoreDraft ? '' : v.Z.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, g.eK)(l),
            textFocused: !0,
            hasSpoiler: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.spoiler) && void 0 !== a && a,
            filename: null !== (s = null === (r = e.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== s ? s : '',
            contentWarningProps: null,
            description: null !== (o = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== o ? o : ''
        };
    }
}
function w(e) {
    let n = (0, E.Z)();
    return e.upload.item.platform !== m.ow.WEB
        ? null
        : (0, c.jsx)(x, {
              ...e,
              file: e.upload.item.file,
              messageMaxLength: n
          });
}
