n.d(t, {
    Fq: function () {
        return E;
    },
    Zj: function () {
        return d;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(53281),
    l = n(869783),
    u = n(689938);
function c(e, t, n) {
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
function d() {
    return [
        {
            name: u.Z.Messages.IMAGES,
            extensions: ['jpg', 'jpeg', 'png', 'gif']
        }
    ];
}
function _(e, t) {
    if (null != e) {
        let n = new FileReader();
        (n.onload = (n) => {
            var r;
            'string' == typeof (null === (r = n.target) || void 0 === r ? void 0 : r.result) && t(n.target.result, e);
        }),
            n.readAsDataURL(e);
    }
}
function E(e, t, n) {
    _(e, (r) => {
        if (e.type === l.m.MP4) return t(r, e);
        let i = new Image();
        (i.src = r),
            (i.onload = () => {
                t(r, e);
            }),
            (i.onerror = () => {
                n();
            });
    });
}
class f extends (r = o.PureComponent) {
    componentDidMount() {
        this._isMounted = !0;
    }
    activateUploadDialogue() {
        var e;
        null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue();
    }
    render() {
        let { multiple: e, disabled: t, className: n, tabIndex: r, 'aria-label': i, filters: o } = this.props;
        return (0, a.jsx)(s.Z, {
            ref: this._ref,
            onChange: this.handleFileChange,
            filters: null != o ? o : d(),
            multiple: e,
            disabled: t,
            className: n,
            tabIndex: r,
            'aria-label': i
        });
    }
    constructor(...e) {
        super(...e),
            c(this, '_ref', o.createRef()),
            c(this, '_isMounted', !1),
            c(this, 'handleFileChange', (e) => {
                let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
                if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
                    for (let r = 0; r < e.currentTarget.files.length; r++) {
                        let i = e.currentTarget.files[r];
                        if (i.size > n) {
                            null == t || t(n, i.size);
                            continue;
                        }
                        E(i, this.handleFileRead, this.handleFileError);
                    }
            }),
            c(this, 'handleFileRead', (e, t) => {
                let { onChange: n } = this.props;
                this._isMounted && n(e, t);
            }),
            c(this, 'handleFileError', async () => {
                let { openUploadError: e } = await Promise.resolve().then(n.bind(n, 531643));
                e({
                    title: u.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,
                    help: u.Z.Messages.UNABLE_TO_PROCESS_IMAGE
                });
            });
    }
}
c(f, 'defaultProps', {
    multiple: !0,
    tabIndex: -1,
    maxFileSizeBytes: 1 / 0
}),
    (t.ZP = f);
