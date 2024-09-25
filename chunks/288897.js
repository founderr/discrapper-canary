var r = n(47120);
var i = n(757143);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(519953),
    c = n(239091),
    d = n(358085),
    _ = n(960048),
    E = n(752305),
    f = n(53529),
    h = n(789952),
    p = n(436660),
    m = n(887490),
    I = n(77224),
    T = n(135223),
    g = n(704875),
    S = n(653309),
    A = n(930762),
    v = n(554034);
function N(e, t, n) {
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
class O extends o.PureComponent {
    componentDidMount() {
        this.props.editor.events.addListener('onChange', this.handleOnChange);
    }
    componentDidUpdate(e, t, n) {
        e.editor !== this.props.editor && (e.editor.events.removeListener('onChange', this.handleOnChange), this.props.editor.events.addListener('onChange', this.handleOnChange));
    }
    componentWillUnmount() {
        this.props.editor.events.removeListener('onChange', this.handleOnChange);
    }
    componentDidCatch(e, t) {
        _.Z.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    decorate(e) {
        var t;
        let { editor: n, guildId: r, decorateExtra: i } = this.props;
        return [...(0, T.Z)(n, e, r), ...(0, I.Z)(n, e), ...(null !== (t = null == i ? void 0 : i(n, e)) && void 0 !== t ? t : [])];
    }
    renderElement(e) {
        var t;
        let { guildId: n, channelId: r, renderExtraElement: i } = this.props,
            { attributes: o, children: s } = e;
        'rtl' === o.dir &&
            (o.style = {
                ...o.style,
                textAlign: 'right'
            });
        let l = null !== (t = null == i ? void 0 : i(e)) && void 0 !== t ? t : (0, g.Z)(e, n, r);
        return null != l
            ? l
            : (0, a.jsx)('div', {
                  ...o,
                  children: s
              });
    }
    renderLeaf(e) {
        var t;
        let { editor: n, renderExtraLeaf: r } = this.props,
            { attributes: i, children: o } = e,
            s = null !== (t = null == r ? void 0 : r(e)) && void 0 !== t ? t : (0, S.Z)(n, e);
        return null != s
            ? s
            : (0, a.jsx)('span', {
                  ...i,
                  children: o
              });
    }
    handleOnChange() {
        var e, t;
        let { editor: n } = this.props,
            r = m.bN.isEditorEmpty(n) && null == n.composition;
        if ((r !== this.state.showPlaceholder && this.setState({ showPlaceholder: r }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, m.bN.richValue(n)), !1 === this.props.canFocus)) {
            let e = u.F3.findDocumentOrShadowRoot(n).getSelection();
            null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges());
        }
    }
    handleKeyDown(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e);
    }
    handleKeyUp(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e);
    }
    handleBeforeInput(e) {
        var t;
        let { editor: n } = this.props,
            r = u.F3.findDocumentOrShadowRoot(n).getSelection(),
            i = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null,
            a = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
        if (null == n.composition) {
            if (('insertText' === e.inputType || 'insertReplacementText' === e.inputType) && (null == a && (a = i), null != a)) {
                let t = m.bN.toSlateRange(n, a, {
                    exactMatch: !1,
                    suppressThrow: !0
                });
                null != t &&
                    null != e.data &&
                    (m.M8.isExpanded(t)
                        ? f.T.withSingleEntry(n, () => {
                              (n.selection = t), n.deleteFragment(), n.insertText(e.data), e.preventDefault();
                          })
                        : (n.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith('deleteContent') && null != i && !i.collapsed) {
                let t = m.bN.toSlateRange(n, i, {
                    exactMatch: !0,
                    suppressThrow: !0
                });
                null != t && m.M8.isExpanded(t) && ((n.selection = t), n.deleteFragment(e.inputType.endsWith('Backward') ? 'backward' : 'forward'), e.preventDefault());
            }
        }
    }
    handleCompositionStart() {
        var e, t;
        let { editor: n } = this.props,
            r = {
                insertedPrefix: !1,
                startedInsideInline: !1
            };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let i = null != n.selection && m.M8.isCollapsed(n.selection) ? m.bN.leaf(n, n.selection.anchor.path) : null;
        if (null == i) {
            n.composition = r;
            return;
        }
        if (
            (null !=
                (null != n.selection && m.M8.isCollapsed(n.selection)
                    ? m.bN.above(n, {
                          at: i[1],
                          match: (e) => m.bN.isInline(n, e),
                          mode: 'lowest'
                      })
                    : null) && (r.startedInsideInline = !0),
            m.bN.isEditorEmpty(n))
        ) {
            p.Q.insertNodes(n, { text: '\uFEFF' }, { select: !0 }), (r.insertedPrefix = !0), (n.composition = r);
            return;
        }
        let a = u.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            o = (null !== (e = null == a ? void 0 : a.rangeCount) && void 0 !== e ? e : 0) > 0 ? (null == a ? void 0 : a.getRangeAt(0)) : null;
        if (
            null ==
                (null != o
                    ? m.bN.toSlateRange(n, o, {
                          exactMatch: !0,
                          suppressThrow: !0
                      })
                    : null) &&
            null != o
        ) {
            let e = m.bN.toSlateRange(n, o, {
                exactMatch: !1,
                suppressThrow: !0
            });
            (n.selection = null), null != e ? p.Q.select(n, e) : p.Q.select(n, null !== (t = n.selection) && void 0 !== t ? t : m.bN.end(n, []));
        }
        n.composition = r;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && m.M8.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = m.aj.leaf(t, e);
            m.bN.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, '');
                p.Q.delete(t, {
                    unit: 'offset',
                    distance: n.text.length,
                    reverse: !0
                }),
                    m.bN.insertText(t, e);
            });
        }
        t.composition = null;
    }
    handleFocusCapture(e) {
        let { onFocus: t } = this.props;
        null == t || t(e);
    }
    handleBlurCapture(e) {
        let { editor: t, onBlur: n } = this.props,
            r = e.relatedTarget,
            i = u.F3.findDocumentOrShadowRoot(this.props.editor),
            a = i.getElementById('textarea-context'),
            o = i.getElementById('slate-toolbar');
        if (null != r && !(0, h.hasDomParent)(r, a) && !(0, h.hasDomParent)(r, o)) {
            let e = u.F3.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        null == n || n(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let r = e.getRangeAt(n);
                if ((0, h.hasDomParent)(r.startContainer, t) || (!r.collapsed && (0, h.hasDomParent)(r.endContainer, t))) return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            r = !1;
        if (null != e && null != t)
            for (let i = e.rangeCount - 1; i >= 0; i--) {
                let a = e.getRangeAt(i);
                if ((0, h.hasDomParent)(a.startContainer, t)) {
                    if (r) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    r = !0;
                }
                if (!a.collapsed) {
                    if ((0, h.hasDomParent)(a.startContainer, t)) {
                        if (r) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        r = !0;
                    }
                }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            r = e.pageY,
            i = window.innerHeight,
            o = null != r && null != i && r < i / 2 ? 'top' : 'bottom';
        d.isPlatformEmbedded
            ? (0, c.jW)(
                  e,
                  async () => {
                      let { default: e } = await n.e('41984').then(n.bind(n, 343602));
                      return (n) =>
                          (0, a.jsx)(e, {
                              ...n,
                              editor: t,
                              text: m.bN.getSelectedText(t, !0)
                          });
                  },
                  {
                      align: o,
                      enableSpellCheck: !0
                  }
              )
            : blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: r } = this.props;
        null == n || n(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !r && (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let { editor: e, className: t, containerClassName: n, canFocus: r, autoFocus: i, placeholder: o, channelId: s, guildId: c, onChange: d, onFocus: _, onBlur: E, onKeyDown: f, onKeyUp: h, decorateExtra: p, renderExtraElement: m, renderExtraLeaf: I, ...T } = this.props;
        return (0, a.jsxs)('div', {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, a.jsx)('div', {
                          className: l()(A.placeholder, t),
                          'aria-hidden': !0,
                          children: o
                      })
                    : null,
                (0, a.jsx)(u.mH, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, a.jsx)(u.CX, {
                        ...T,
                        className: l()(v.markup, A.editor, t),
                        decorate: this.decorate,
                        renderElement: this.renderElement,
                        renderLeaf: this.renderLeaf,
                        onFocusCapture: this.handleFocusCapture,
                        onBlurCapture: this.handleBlurCapture,
                        onContextMenu: this.handleContextMenu,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onDOMBeforeInput: this.handleBeforeInput,
                        onCompositionStart: this.handleCompositionStart,
                        onCompositionEnd: this.handleCompositionEnd,
                        onPasteCapture: this.handlePasteCapture,
                        autoFocus: i && !1 !== r,
                        autoCorrect: 'off',
                        'data-can-focus': !1 !== r,
                        'aria-label': o,
                        'aria-multiline': !0
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            N(this, 'containerRef', o.createRef()),
            N(this, 'state', void 0),
            (this.decorate = this.decorate.bind(this)),
            (this.renderElement = this.renderElement.bind(this)),
            (this.renderLeaf = this.renderLeaf.bind(this)),
            (this.handleOnChange = this.handleOnChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleKeyUp = this.handleKeyUp.bind(this)),
            (this.handleBeforeInput = this.handleBeforeInput.bind(this)),
            (this.handleCompositionStart = this.handleCompositionStart.bind(this)),
            (this.handleCompositionEnd = this.handleCompositionEnd.bind(this)),
            (this.handleFocusCapture = this.handleFocusCapture.bind(this)),
            (this.handleBlurCapture = this.handleBlurCapture.bind(this)),
            (this.handleContextMenu = this.handleContextMenu.bind(this)),
            (this.handlePasteCapture = this.handlePasteCapture.bind(this)),
            m.bN.isEditorEmpty(e.editor)
                ? (this.state = {
                      initialValue: (0, E.H2)().richValue,
                      showPlaceholder: !0
                  })
                : (this.state = {
                      initialValue: m.bN.richValue(e.editor),
                      showPlaceholder: !1
                  });
    }
}
t.Z = O;
