"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var a = s("470079"),
  n = s("817080"),
  l = s("579806"),
  i = s("358085");
class r extends a.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof e && (e = e()), e
  }
  downloadNative(e, t) {
    l.default.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let s = new Blob([e], {
      type: this.props.contentType
    });
    (0, n.saveAs)(s, t)
  }
  render() {
    let {
      children: e
    } = this.props, t = a.Children.only(e);
    return a.cloneElement(t, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...e) {
    var t, s, a;
    super(...e), t = this, s = "handleFileDownload", a = e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: s,
          onDownload: a
        } = this.props;
      i.isPlatformEmbedded ? this.downloadNative(t, s) : this.downloadHtml5(t, s), null == a || a()
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a
  }
}