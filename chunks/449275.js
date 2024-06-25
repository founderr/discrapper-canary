var s = n(735250),
  i = n(470079),
  l = n(378720),
  a = n(689938),
  r = n(224853);
class o extends i.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, s.jsxs)("div", {
      className: e,
      children: [(0, s.jsx)(l.Z, {
        children: a.Z.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, s.jsx)("div", {
        className: r.content,
        children: t.legalNotice
      })]
    })
  }
}
t.Z = o