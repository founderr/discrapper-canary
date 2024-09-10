s.d(n, {
    Z: function () {
        return m;
    }
}),
    s(47120);
var t,
    i = s(735250),
    o = s(470079),
    l = s(699581),
    r = s(442837),
    a = s(481060),
    c = s(34854),
    d = s(531301),
    u = s(246946),
    I = s(981631),
    _ = s(689938),
    E = s(605258);
function f(e, n, s) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = s),
        e
    );
}
class x extends (t = o.PureComponent) {
    componentDidMount() {
        if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e && null != e.selectionStart && (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
        }
    }
    render() {
        let { className: e, loading: n, note: s, hideNote: t } = this.props;
        return t
            ? null
            : (0, i.jsx)('div', {
                  className: e,
                  children: (0, i.jsx)(a.TextAreaAutosize, {
                      ref: this.noteRef,
                      className: E.textarea,
                      disabled: n,
                      placeholder: n ? _.Z.Messages.LOADING_NOTE : _.Z.Messages.NOTE_PLACEHOLDER,
                      'aria-label': _.Z.Messages.NOTE,
                      onBlur: this.handleBlur,
                      onKeyPress: this.handleKeyPress,
                      defaultValue: null != s ? s : void 0,
                      maxLength: I.vuo
                  })
              });
    }
    constructor(...e) {
        super(...e),
            f(this, 'noteRef', o.createRef()),
            f(this, 'handleBlur', (e) => {
                let n = e.currentTarget.value,
                    { note: s, userId: t, onUpdate: i } = this.props;
                if ((null != s ? s : '') !== n) null == i || i(), c.Z.updateNote(t, n);
            }),
            f(this, 'handleKeyPress', (e) => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var n;
                        (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                    } else e.preventDefault(), e.currentTarget.blur();
                } else e.which === I.yXg.SPACE && e.stopPropagation();
            });
    }
}
function m(e) {
    let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        s = (0, d.Z)(e.userId);
    return (0, i.jsx)(x, {
        ...e,
        ...s,
        hideNote: n
    });
}
f(x, 'defaultProps', { autoFocus: !1 });
