var n = t(735250),
  r = t(470079),
  i = t(378720),
  a = t(689938),
  l = t(224853);
class o extends r.PureComponent {
  render() {
    let {
      className: e,
      sku: s
    } = this.props;
    return null == s.legalNotice ? null : (0, n.jsxs)("div", {
      className: e,
      children: [(0, n.jsx)(i.Z, {
        children: a.Z.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, n.jsx)("div", {
        className: l.content,
        children: s.legalNotice
      })]
    })
  }
}
s.Z = o