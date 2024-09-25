n.d(t, {
    S: function () {
        return c;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079);
function s(e, t, n) {
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
let l = 'file-input',
    u = (e) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: e ? 'not-allowed' : 'pointer',
        fontSize: 0
    });
class c extends (r = o.Component) {
    render() {
        let { disabled: e, tabIndex: t, className: n, name: r, 'aria-label': i, 'aria-hidden': o } = this.props;
        if (this.props.embedded)
            return (0, a.jsx)('div', {
                role: 'button',
                style: u(e),
                className: n || l,
                tabIndex: t,
                onKeyDown: e ? void 0 : this.handleNativeKeyDown,
                onClick: e ? void 0 : this.handleNativeClick,
                'aria-disabled': e,
                'aria-label': i,
                'aria-hidden': o || void 0
            });
        {
            let s = '';
            return (
                this.props.filters && (s = this.props.filters.map((e) => e.extensions.map((e) => '.'.concat(e)).join(',')).join(',')),
                (0, a.jsx)('input', {
                    style: u(e),
                    className: n || l,
                    disabled: e,
                    type: 'file',
                    tabIndex: t,
                    onMouseDown: this.handleBrowserInputMouseDown,
                    onChange: this.props.onChange,
                    multiple: this.props.multiple,
                    accept: s,
                    name: r,
                    'aria-label': i,
                    'aria-hidden': o || void 0,
                    ref: (e) => (this._input = e)
                })
            );
        }
    }
    constructor(...e) {
        super(...e),
            s(this, '_input', null),
            s(this, 'activateUploadDialogue', () => {
                this.props.embedded ? this.handleNativeClick() : this._input && this._input.click();
            }),
            s(this, 'handleNativeClick', () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props);
            }),
            s(this, 'handleNativeKeyDown', (e) => {
                (' ' === e.key || 'Enter' === e.key) && this.handleNativeClick();
            }),
            s(this, 'handleBrowserInputMouseDown', (e) => {
                e.currentTarget.value = null;
            });
    }
}
s(c, 'defaultProps', {
    multiple: !1,
    disabled: !1,
    tabIndex: 0
});
