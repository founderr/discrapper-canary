var r = n(653041);
var i = n(735250),
    a = n(470079),
    o = n(834427),
    s = n(579806),
    l = n(403182),
    u = n(358085),
    c = n(861990);
function d(e, t, n) {
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
function _(e) {
    let t = ['openFile'];
    e.multiple && t.push('multiSelections');
    let n = e.filters;
    s.Z.fileManager
        .openFiles(
            {
                properties: t,
                filters: n
            },
            c.zz
        )
        .then((t) => {
            let n = t.map((e) => l.qF(e));
            null != n &&
                e.onChange({
                    stopPropagation: () => null,
                    preventDefault: () => null,
                    currentTarget: { files: n }
                });
        })
        .catch((t) => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: t
                }
            });
        });
}
class E extends a.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, i.jsx)(o.S, {
            ref: this.setRef,
            handleNativeClick: _,
            embedded: (0, u.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        super(e), d(this, '_ref', a.createRef()), (this.setRef = this.setRef.bind(this));
    }
}
t.Z = E;
