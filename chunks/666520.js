t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var o,
    i = t(735250),
    s = t(470079),
    l = t(699581),
    c = t(442837),
    r = t(481060),
    a = t(34854),
    d = t(531301),
    u = t(246946),
    _ = t(981631),
    I = t(689938),
    E = t(605258);
function f(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class p extends (o = s.PureComponent) {
    componentDidMount() {
        if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e && null != e.selectionStart && (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
        }
    }
    render() {
        let { className: e, loading: n, note: t, hideNote: o } = this.props;
        return o
            ? null
            : (0, i.jsx)('div', {
                  className: e,
                  children: (0, i.jsx)(r.TextAreaAutosize, {
                      ref: this.noteRef,
                      className: E.textarea,
                      disabled: n,
                      placeholder: n ? I.Z.Messages.LOADING_NOTE : I.Z.Messages.NOTE_PLACEHOLDER,
                      'aria-label': I.Z.Messages.NOTE,
                      onBlur: this.handleBlur,
                      onKeyPress: this.handleKeyPress,
                      defaultValue: null != t ? t : void 0,
                      maxLength: _.vuo
                  })
              });
    }
    constructor(...e) {
        super(...e),
            f(this, 'noteRef', s.createRef()),
            f(this, 'handleBlur', (e) => {
                let n = e.currentTarget.value,
                    { note: t, userId: o, onUpdate: i } = this.props;
                if ((null != t ? t : '') !== n) null == i || i(), a.Z.updateNote(o, n);
            }),
            f(this, 'handleKeyPress', (e) => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var n;
                        (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                    } else e.preventDefault(), e.currentTarget.blur();
                } else e.which === _.yXg.SPACE && e.stopPropagation();
            });
    }
}
function Z(e) {
    let n = (0, c.e7)([u.Z], () => u.Z.hidePersonalInformation),
        t = (0, d.Z)(e.userId);
    return (0, i.jsx)(p, {
        ...e,
        ...t,
        hideNote: n
    });
}
f(p, 'defaultProps', { autoFocus: !1 });
