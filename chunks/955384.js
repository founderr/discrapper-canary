n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(925975),
    s = n(957730),
    a = n(981631),
    o = n(388032),
    c = n(507737);
function u(e, t, n) {
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
function d(e) {
    e.stopPropagation();
}
class h extends l.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: l, channel: r, onCancel: s, children: a } = this.props;
        return (0, i.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: d,
            children: [
                a({
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: r,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown
                }),
                (0, i.jsx)('div', {
                    className: c.operations,
                    children: o.intl.format(o.t.wDsPXl, {
                        onCancel: () => s(r.id),
                        onSave: this.onClickSave
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'node', l.createRef()),
            u(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            u(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: i, onCancel: l, saveMessage: a, validateEdit: o } = this.props;
                return 0 === e.length
                    ? (i(n, t),
                      l(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1
                      }))
                    : o({
                          value: e,
                          channel: n
                      }).then((t) => {
                          let { valid: i } = t;
                          if (!i)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              });
                          let o = (0, r.g)(e, {
                              channel: n,
                              isEdit: !0
                          });
                          (null == o ? void 0 : o.content) != null && (e = o.content);
                          let c = s.ZP.parse(this.props.channel, e);
                          return (
                              c.content !== this.props.message.content && a(this.props.channel.id, this.props.message.id, c),
                              l(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0
                              })
                          );
                      });
            }),
            u(this, 'onChange', (e, t, n) => {
                let { channel: i, onChange: l } = this.props;
                l(i.id, t, n);
            }),
            u(this, 'onKeyDown', (e) => {
                if (e.keyCode === a.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
            });
    }
}
