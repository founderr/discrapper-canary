t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var i,
    l = t(200651),
    o = t(192379),
    s = t(995295),
    r = t(442837),
    c = t(481060),
    a = t(34854),
    d = t(531301),
    u = t(246946),
    f = t(981631),
    m = t(388032),
    p = t(605258);
function x(e, n, t) {
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
class I extends (i = o.PureComponent) {
    componentDidMount() {
        if (this.props.autoFocus && !this.props.hideNote) {
            let e = s.findDOMNode(this.noteRef.current);
            null != e && null != e.selectionStart && (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
        }
    }
    render() {
        let { className: e, loading: n, note: t, hideNote: i } = this.props;
        return i
            ? null
            : (0, l.jsx)('div', {
                  className: e,
                  children: (0, l.jsx)(c.TextAreaAutosize, {
                      ref: this.noteRef,
                      className: p.textarea,
                      disabled: n,
                      placeholder: n ? m.intl.string(m.t['WLKx//']) : m.intl.string(m.t.VBhOe3),
                      'aria-label': m.intl.string(m.t.PbMNh4),
                      onBlur: this.handleBlur,
                      onKeyPress: this.handleKeyPress,
                      defaultValue: null != t ? t : void 0,
                      maxLength: f.vuo
                  })
              });
    }
    constructor(...e) {
        super(...e),
            x(this, 'noteRef', o.createRef()),
            x(this, 'handleBlur', (e) => {
                let n = e.currentTarget.value,
                    { note: t, userId: i, onUpdate: l } = this.props;
                if ((null != t ? t : '') !== n) null == l || l(), a.Z.updateNote(i, n);
            }),
            x(this, 'handleKeyPress', (e) => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var n;
                        (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                    } else e.preventDefault(), e.currentTarget.blur();
                } else e.which === f.yXg.SPACE && e.stopPropagation();
            });
    }
}
function h(e) {
    let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        t = (0, d.Z)(e.userId);
    return (0, l.jsx)(I, {
        ...e,
        ...t,
        hideNote: n
    });
}
x(I, 'defaultProps', { autoFocus: !1 });
