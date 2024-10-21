t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var i,
    s = t(735250),
    o = t(470079),
    l = t(699581),
    r = t(442837),
    c = t(481060),
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
class m extends (i = o.PureComponent) {
    componentDidMount() {
        if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e && null != e.selectionStart && (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
        }
    }
    render() {
        let { className: e, loading: n, note: t, hideNote: i } = this.props;
        return i
            ? null
            : (0, s.jsx)('div', {
                  className: e,
                  children: (0, s.jsx)(c.TextAreaAutosize, {
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
            f(this, 'noteRef', o.createRef()),
            f(this, 'handleBlur', (e) => {
                let n = e.currentTarget.value,
                    { note: t, userId: i, onUpdate: s } = this.props;
                if ((null != t ? t : '') !== n) null == s || s(), a.Z.updateNote(i, n);
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
function p(e) {
    let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        t = (0, d.Z)(e.userId);
    return (0, s.jsx)(m, {
        ...e,
        ...t,
        hideNote: n
    });
}
f(m, 'defaultProps', { autoFocus: !1 });
