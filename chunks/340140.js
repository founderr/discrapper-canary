a.r(s), a(47120);
var l = a(735250),
  t = a(470079),
  n = a(481060),
  r = a(285952),
  _ = a(538211),
  o = a(698066),
  E = a(111810),
  R = a(689938),
  i = a(190899),
  u = a(425060);

function M(e, s, a) {
  return s in e ? Object.defineProperty(e, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = a, e
}
class d extends t.PureComponent {
  render() {
    let {
      isStreamer: e,
      transitionState: s,
      onClose: a
    } = this.props, {
      problem: t
    } = this.state;
    return (0, l.jsxs)(n.ModalRoot, {
      transitionState: s,
      size: n.ModalSize.SMALL,
      "aria-label": R.Z.Messages.STREAM_REPORT_A_PROBLEM,
      children: [(0, l.jsx)(E.Z, {}), (0, l.jsxs)(n.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(n.ModalCloseButton, {
          className: u.closeButton,
          onClick: a
        }), (0, l.jsx)(n.FormTitle, {
          tag: "h2",
          className: u.title,
          children: R.Z.Messages.STREAM_REPORT_A_PROBLEM
        })]
      }), (0, l.jsxs)(n.ModalContent, {
        className: u.content,
        children: [(0, l.jsx)(n.Text, {
          variant: "text-sm/normal",
          children: R.Z.Messages.STREAM_REPORT_PROBLEM_BODY
        }), (0, l.jsx)(n.FormItem, {
          title: R.Z.Messages.STREAM_REPORT_LABEL,
          children: (0, l.jsx)(n.SingleSelect, {
            placeholder: R.Z.Messages.STREAM_REPORT_PLACEHOLDER,
            options: (0, _.Z)(e, !1),
            onChange: this.handleChanged,
            value: t,
            maxVisibleItems: 4
          })
        }), (0, l.jsx)("div", {
          className: i.art
        })]
      }), (0, l.jsxs)(n.ModalFooter, {
        className: u.__invalid_footer,
        children: [(0, l.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          disabled: null == t,
          onClick: this.handleSubmit,
          children: R.Z.Messages.STREAM_REPORT_SUBMIT
        }), (0, l.jsx)(r.Z, {
          children: (0, l.jsx)(n.Button, {
            look: n.Button.Looks.LINK,
            color: n.Button.Colors.PRIMARY,
            size: n.Button.Sizes.NONE,
            onClick: a,
            children: R.Z.Messages.CANCEL
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      problem: null
    }), M(this, "handleChanged", e => {
      this.setState({
        problem: null != e ? e : null
      })
    }), M(this, "handleSubmit", () => {
      let {
        stream: e,
        streamApplication: s,
        analyticsData: t,
        onClose: r
      } = this.props, {
        problem: _
      } = this.state;
      (0, o.Z)({
        problem: _,
        stream: e,
        feedback: "",
        streamApplication: s,
        analyticsData: t,
        location: "Stream"
      }), r(), (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, 729328));
        return s => (0, l.jsx)(e, {
          body: R.Z.Messages.STREAM_REPORTED_BODY,
          ...s
        })
      })
    })
  }
}
s.default = d