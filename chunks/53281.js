var i = r(653041);
var a = r(200651),
    s = r(192379),
    o = r(834427),
    l = r(579806),
    u = r(403182),
    c = r(358085),
    d = r(861990);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function _(e) {
    let n = ['openFile'];
    e.multiple && n.push('multiSelections');
    let r = e.filters;
    l.Z.fileManager
        .openFiles(
            {
                properties: n,
                filters: r
            },
            d.zz
        )
        .then((n) => {
            let r = n.map((e) => u.qF(e));
            null != r &&
                e.onChange({
                    stopPropagation: () => null,
                    preventDefault: () => null,
                    currentTarget: { files: r }
                });
        })
        .catch((n) => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: n
                }
            });
        });
}
class h extends s.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, a.jsx)(o.S, {
            ref: this.setRef,
            handleNativeClick: _,
            embedded: (0, c.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        super(e), f(this, '_ref', s.createRef()), (this.setRef = this.setRef.bind(this));
    }
}
n.Z = h;
