t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(981631),
  o = t(805948);
class c extends i.Component {
  render() {
    let {
      className: e,
      videoID: s,
      videoClassName: t
    } = this.props;
    return (0, n.jsx)("div", {
      className: l()(e, o.videoWrapper),
      children: (0, n.jsx)("iframe", {
        className: l()(t, o.video),
        src: "https://www.youtube.com/embed/".concat(s, "?rel=0&showinfo=0&controls=1&origin=https://").concat(r.$R1),
        allowFullScreen: !0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}