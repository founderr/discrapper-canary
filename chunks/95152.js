n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    });
var r = n(47120);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(735250),
    c = n(470079),
    d = n(120356),
    _ = n.n(d),
    E = n(481060),
    f = n(166459),
    h = n(476326),
    p = n(752305),
    m = n(849522),
    I = n(703558),
    T = n(626135),
    g = n(358085),
    S = n(998502),
    A = n(981631),
    v = n(689938),
    N = n(570486),
    O = n(113207);
function R(e, t, n) {
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
let C = 104,
    y = 16;
function b(e) {
    var t, n, r, i;
    let { file: a } = e,
        [o, s] = c.useState(),
        [l, d] = c.useState(!1),
        [E, f] = c.useState({}),
        h = c.useRef(null);
    c.useEffect(() => {
        if ((null != h.current && d(!1), null == a)) return;
        let e = URL.createObjectURL(a);
        return (
            s(e),
            () => {
                s(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [a]),
        c.useLayoutEffect(() => {
            let e = h.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? f({
                              width: C,
                              height: C
                          })
                        : t > 1
                          ? f({
                                width: C * t,
                                height: void 0
                            })
                          : f({
                                width: void 0,
                                height: C / t
                            }),
                        d(!0);
                });
        }, []);
    let p = Math.max(16, (y + C - (null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
    return (0, u.jsx)('img', {
        ref: h,
        src: o,
        className: _()(N.icon, { [N.image]: !l }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null !== (r = E.width) && void 0 !== r ? r : 'initial',
            height: null !== (i = E.height) && void 0 !== i ? i : C,
            marginLeft: p,
            marginRight: p,
            marginTop: null != E.height ? C - E.height - 33 : -33
        }
    });
}
class L extends c.Component {
    render() {
        var e;
        if (this.props.upload.item.platform !== h.ow.WEB) return null;
        if (this.props.upload.isImage) return (0, u.jsx)(b, { file: this.props.upload.item.file });
        return (0, u.jsx)('div', { className: _()(N.icon, { [N[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 }) });
    }
}
class D extends c.Component {
    componentDidMount() {
        var e;
        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === h.ow.WEB &&
            T.default.track(A.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            g.isPlatformEmbedded && S.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({ filename: null !== (i = null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== i ? i : '' });
    }
    render() {
        let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: r } = this.props,
            { hasSpoiler: i } = this.state;
        return (0, u.jsxs)(E.ModalRoot, {
            'aria-label': v.Z.Messages.ATTACH_FILES,
            size: E.ModalSize.DYNAMIC,
            transitionState: t,
            className: _()(N.uploadModal),
            children: [
                (0, u.jsxs)('div', {
                    className: N.inner,
                    children: [
                        (0, u.jsxs)('div', {
                            className: _()(N.file, { [N.expandable]: e.isImage }),
                            children: [
                                (0, u.jsx)(L, { upload: e }),
                                (0, u.jsxs)('div', {
                                    className: N.description,
                                    children: [
                                        (0, u.jsx)('div', {
                                            className: N.filename,
                                            children: e.showLargeMessageDialog ? v.Z.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({ maxLength: n }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, u.jsx)('div', {
                                                  className: N.subtitle,
                                                  children: v.Z.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, u.jsx)('div', {
                            className: N.comment,
                            children: (0, u.jsxs)(c.Fragment, {
                                children: [
                                    (0, u.jsx)('div', {
                                        className: N.label,
                                        children: (0, u.jsx)('span', { children: v.Z.Messages.UPLOAD_AREA_FILENAME })
                                    }),
                                    (0, u.jsx)(E.TextInput, {
                                        className: _()(N.channelTextAreaUpload, O.marginTop8),
                                        value: this.state.filename,
                                        onChange: (e) => this.setState({ filename: e }),
                                        onKeyDown: (e) => {
                                            if (e.which === A.yXg.ENTER) return this.handleSubmit();
                                        }
                                    }),
                                    e.isImage
                                        ? (0, u.jsxs)(c.Fragment, {
                                              children: [
                                                  (0, u.jsx)('div', {
                                                      className: N.label,
                                                      children: (0, u.jsx)('span', { children: v.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL })
                                                  }),
                                                  (0, u.jsx)(E.TextInput, {
                                                      className: _()(N.channelTextAreaUpload, O.marginTop8),
                                                      placeholder: v.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                                      value: this.state.description,
                                                      onChange: (e) => this.setState({ description: e }),
                                                      onKeyDown: (e) => {
                                                          if (e.which === A.yXg.ENTER) return this.handleSubmit();
                                                      }
                                                  })
                                              ]
                                          })
                                        : null,
                                    !0 !== r &&
                                        (0, u.jsx)(E.Checkbox, {
                                            className: O.marginBottom20,
                                            value: i,
                                            onChange: (e, t) => this.setState({ hasSpoiler: t }),
                                            children: (0, u.jsx)(E.Text, {
                                                variant: 'text-sm/normal',
                                                children: v.Z.Messages.SPOILER_MARK_SELECTED
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, u.jsx)('div', {
                    className: N.footer,
                    children: (0, u.jsxs)('div', {
                        className: _()(N.hasSpoilers, N.footerRightAlign),
                        children: [
                            (0, u.jsx)(E.Button, {
                                type: 'button',
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, u.jsx)('span', { children: v.Z.Messages.CANCEL })
                            }),
                            (0, u.jsx)(E.Button, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, u.jsx)('span', { children: v.Z.Messages.ATTACHMENT_MODAL_SAVE })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var t, n, r, i, a, o;
        super(e),
            R(this, 'cancelAll', () => {
                f.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            R(this, 'cancel', () => {
                this.props.onClose();
            }),
            R(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            R(this, 'handleSubmit', () => {
                let { upload: e, onClose: t, onSubmit: n } = this.props,
                    { filename: r, description: i, hasSpoiler: a } = this.state;
                n({
                    upload: e,
                    name: r,
                    description: i,
                    spoiler: a
                }),
                    t();
            });
        let s = e.ignoreDraft ? '' : I.Z.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, p.eK)(s),
            textFocused: !0,
            hasSpoiler: null !== (i = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== i && i,
            filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : '',
            contentWarningProps: null,
            description: null !== (o = null === (r = e.upload) || void 0 === r ? void 0 : r.description) && void 0 !== o ? o : ''
        };
    }
}
function M(e) {
    let t = (0, m.Z)();
    return e.upload.item.platform !== h.ow.WEB
        ? null
        : (0, u.jsx)(D, {
              ...e,
              file: e.upload.item.file,
              messageMaxLength: t
          });
}
