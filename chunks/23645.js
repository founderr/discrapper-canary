t.d(s, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var n = t(470079),
    a = t(817080),
    i = t(579806),
    r = t(358085);
class o extends n.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, s) {
        i.Z.fileManager.saveWithDialog(e, s);
    }
    downloadHtml5(e, s) {
        let t = new Blob([e], { type: this.props.contentType });
        (0, a.saveAs)(t, s);
    }
    render() {
        let { children: e } = this.props,
            s = n.Children.only(e);
        return n.cloneElement(s, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var s, t, n;
        super(...e),
            (s = this),
            (t = 'handleFileDownload'),
            (n = (e) => {
                e.preventDefault();
                let s = this.getFileContents(),
                    { fileName: t, onDownload: n } = this.props;
                r.isPlatformEmbedded ? this.downloadNative(s, t) : this.downloadHtml5(s, t), null == n || n();
            }),
            t in s
                ? Object.defineProperty(s, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (s[t] = n);
    }
}
