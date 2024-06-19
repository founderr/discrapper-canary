n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(374470),
  o = n(481060),
  c = n(239091),
  u = n(822951),
  d = n(933557),
  h = n(454585),
  m = n(984370),
  p = n(981631),
  E = n(689938),
  g = n(504273);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function C(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, s = (0, d.ZP)(t, !0);
  return (0, l.jsx)(o.ModalRoot, {
    transitionState: i,
    "aria-label": E.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
    children: (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)(u.Z, {
        selectable: !0,
        onClose: n,
        renderHeader: () => (0, l.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: s
        }),
        children: (0, l.jsx)(o.Text, {
          selectable: !0,
          variant: "text-md/normal",
          className: g.content,
          children: h.Z.parseTopic(t.topic, !0, {
            channelId: t.id
          })
        })
      })
    })
  })
}

function _(e) {
  return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
}
class I extends i.Component {
  render() {
    let {
      channel: e
    } = this.props;
    return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length ? null : (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsx)(m.Z.Divider, {}), (0, l.jsxs)("div", {
        className: a()(g.topic, g.expandable),
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp,
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        children: [(0, l.jsx)(o.Clickable, {
          onClick: this.handleClick,
          "aria-label": E.Z.Messages.OPEN_CHANNEL_TOPIC,
          className: g.topicClickTarget
        }), h.Z.parseTopic(e.topic, !0, {
          channelId: e.id,
          allowLinks: !0
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_mouseDown", !1), f(this, "_mouseUp", !1), f(this, "handleOpenTopic", e => {
      let t = e.target;
      if ((0, r.k)(t)) {
        if (_(t)) return;
        let e = t.parentNode;
        if ((0, r.k)(e) && _(e)) return
      }(0, o.openModal)(e => (0, l.jsx)(C, {
        ...e,
        ...this.props
      }))
    }), f(this, "onMouseDown", () => {
      this._mouseDown = !0
    }), f(this, "onMouseMove", () => {
      this._mouseDown && (this._mouseDown = !1)
    }), f(this, "onMouseUp", e => {
      this._mouseDown && e.button !== p.AeJ.SECONDARY && this.handleOpenTopic(e), this._mouseUp = !0, this._mouseDown = !1
    }), f(this, "handleContextMenu", e => {
      let {
        channel: t,
        guild: i
      } = this.props;
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("24783")]).then(n.bind(n, 439635));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: i,
          includeTopic: !0
        })
      })
    }), f(this, "handleClick", e => {
      if (this._mouseUp) {
        this._mouseUp = !1;
        return
      }
      this.handleOpenTopic(e)
    })
  }
}
t.Z = I