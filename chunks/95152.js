n.r(t),
    n.d(t, {
        default: function () {
            return y;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(166459),
    u = n(476326),
    c = n(752305),
    d = n(849522),
    f = n(703558),
    _ = n(626135),
    p = n(358085),
    h = n(998502),
    m = n(981631),
    g = n(388032),
    E = n(516331),
    v = n(971436);
function b(e, t, n) {
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
function I(e) {
    var t, n, a, o;
    let { file: l } = e,
        [u, c] = i.useState(),
        [d, f] = i.useState(!1),
        [_, p] = i.useState({}),
        h = i.useRef(null);
    i.useEffect(() => {
        if ((null != h.current && f(!1), null == l)) return;
        let e = URL.createObjectURL(l);
        return (
            c(e),
            () => {
                c(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [l]),
        i.useLayoutEffect(() => {
            let e = h.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? p({
                              width: 104,
                              height: 104
                          })
                        : t > 1
                          ? p({
                                width: 104 * t,
                                height: void 0
                            })
                          : p({
                                width: void 0,
                                height: 104 / t
                            }),
                        f(!0);
                });
        }, []);
    let m = Math.max(16, (120 - (null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
    return (0, r.jsx)('img', {
        ref: h,
        src: u,
        className: s()(E.icon, { [E.image]: !d }),
        'aria-hidden': !0,
        alt: '',
        style: {
            width: null !== (a = _.width) && void 0 !== a ? a : 'initial',
            height: null !== (o = _.height) && void 0 !== o ? o : 104,
            marginLeft: m,
            marginRight: m,
            marginTop: null != _.height ? 104 - _.height - 33 : -33
        }
    });
}
class T extends i.Component {
    render() {
        var e;
        if (this.props.upload.item.platform !== u.ow.WEB) return null;
        if (this.props.upload.isImage) return (0, r.jsx)(I, { file: this.props.upload.item.file });
        return (0, r.jsx)('div', { className: s()(E.icon, { [E[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 }) });
    }
}
class S extends i.Component {
    componentDidMount() {
        var e;
        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
            this.props.upload.item.platform === u.ow.WEB &&
            _.default.track(m.rMx.OPEN_MODAL, {
                type: 'Upload Large Message',
                message_content_length: this.props.upload.item.file.size
            }),
            p.isPlatformEmbedded && h.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({ filename: null !== (i = null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== i ? i : '' });
    }
    render() {
        let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: a } = this.props,
            { hasSpoiler: l } = this.state;
        return (0, r.jsxs)(o.ModalRoot, {
            'aria-label': g.intl.string(g.t['3AS4UF']),
            size: o.ModalSize.DYNAMIC,
            transitionState: t,
            className: s()(E.uploadModal),
            children: [
                (0, r.jsxs)('div', {
                    className: E.inner,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(E.file, { [E.expandable]: e.isImage }),
                            children: [
                                (0, r.jsx)(T, { upload: e }),
                                (0, r.jsxs)('div', {
                                    className: E.description,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: E.filename,
                                            children: e.showLargeMessageDialog ? g.intl.formatToPlainString(g.t.QWQxtL, { maxLength: n }) : e.filename
                                        }),
                                        e.showLargeMessageDialog
                                            ? (0, r.jsx)('div', {
                                                  className: E.subtitle,
                                                  children: g.intl.string(g.t.Plcu09)
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.comment,
                            children: (0, r.jsxs)(i.Fragment, {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.label,
                                        children: (0, r.jsx)('span', { children: g.intl.string(g.t.ILJuBg) })
                                    }),
                                    (0, r.jsx)(o.TextInput, {
                                        className: s()(E.channelTextAreaUpload, v.marginTop8),
                                        value: this.state.filename,
                                        onChange: (e) => this.setState({ filename: e }),
                                        onKeyDown: (e) => {
                                            if (e.which === m.yXg.ENTER) return this.handleSubmit();
                                        }
                                    }),
                                    e.isImage
                                        ? (0, r.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: E.label,
                                                      children: (0, r.jsx)('span', { children: g.intl.string(g.t.eOB2eX) })
                                                  }),
                                                  (0, r.jsx)(o.TextInput, {
                                                      className: s()(E.channelTextAreaUpload, v.marginTop8),
                                                      placeholder: g.intl.string(g.t.RNH1jo),
                                                      value: this.state.description,
                                                      onChange: (e) => this.setState({ description: e }),
                                                      onKeyDown: (e) => {
                                                          if (e.which === m.yXg.ENTER) return this.handleSubmit();
                                                      }
                                                  })
                                              ]
                                          })
                                        : null,
                                    !0 !== a &&
                                        (0, r.jsx)(o.Checkbox, {
                                            className: v.marginBottom20,
                                            value: l,
                                            onChange: (e, t) => this.setState({ hasSpoiler: t }),
                                            children: (0, r.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: g.intl.string(g.t['gsI+xM'])
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: E.footer,
                    children: (0, r.jsxs)('div', {
                        className: s()(E.hasSpoilers, E.footerRightAlign),
                        children: [
                            (0, r.jsx)(o.Button, {
                                type: 'button',
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: this.cancel,
                                children: (0, r.jsx)('span', { children: g.intl.string(g.t['ETE/oK']) })
                            }),
                            (0, r.jsx)(o.Button, {
                                type: 'submit',
                                onClick: this.handleSubmit,
                                children: (0, r.jsx)('span', { children: g.intl.string(g.t['TY+auL']) })
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        var t, n, r, i, a, s;
        super(e),
            b(this, 'cancelAll', () => {
                l.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            b(this, 'cancel', () => {
                this.props.onClose();
            }),
            b(this, 'handleTextChange', (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n
                });
            }),
            b(this, 'handleSubmit', () => {
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
        let o = e.ignoreDraft ? '' : f.Z.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, c.eK)(o),
            textFocused: !0,
            hasSpoiler: null !== (i = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== i && i,
            filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : '',
            contentWarningProps: null,
            description: null !== (s = null === (r = e.upload) || void 0 === r ? void 0 : r.description) && void 0 !== s ? s : ''
        };
    }
}
function y(e) {
    let t = (0, d.Z)();
    return e.upload.item.platform !== u.ow.WEB
        ? null
        : (0, r.jsx)(S, {
              ...e,
              file: e.upload.item.file,
              messageMaxLength: t
          });
}
