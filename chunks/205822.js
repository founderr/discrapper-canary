"use strict";
t.r(A), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("481060"),
  i = t("310752"),
  o = t("531643"),
  d = t("689938"),
  u = t("239792"),
  c = t("139661");

function g(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e
}

function f() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: r()(c.sparkleWhite, u.sparkleOne)
    }), (0, a.jsx)("div", {
      className: r()(c.sparkleWhite, u.sparkleTwo)
    }), (0, a.jsx)("div", {
      className: r()(c.lightWhite, u.lightOne)
    }), (0, a.jsx)("div", {
      className: r()(c.lightWhite, u.lightTwo)
    }), (0, a.jsx)("div", {
      className: r()(c.crossWhite, u.crossOne)
    }), (0, a.jsx)("div", {
      className: r()(c.crossWhite, u.crossTwo)
    }), (0, a.jsx)("div", {
      className: r()(c.popWhite, u.popOne)
    })]
  })
}
class C extends l.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: A,
      icons: t,
      style: l,
      className: s
    } = this.props;
    return (0, a.jsx)("div", {
      ref: this.elementDOMRef,
      className: r()(s, u.uploadArea, {
        [u.droppable]: this.state.isDragging,
        [u.uploadModalIn]: this.state.isOverZone
      }),
      style: l,
      children: (0, a.jsxs)("div", {
        className: u.uploadDropModal,
        children: [this.state.isDragging && (0, a.jsx)(f, {}), (0, a.jsx)("div", {
          className: u.bgScale
        }), (0, a.jsxs)("div", {
          className: u.inner,
          children: [(0, a.jsx)(i.default, {
            icons: t
          }), (0, a.jsx)("div", {
            className: u.title,
            children: e
          }), (0, a.jsx)("div", {
            className: u.instructions,
            children: (0, a.jsx)("pre", {
              children: A
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var A;
    super(...e), A = this, g(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), g(this, "dragOverTimeout", null), g(this, "elementDOMRef", l.createRef()), g(this, "isAllDropFiles", e => {
      for (let t = 0; t < e.length; t++) try {
        var A;
        let a = null !== (A = e[t].webkitGetAsEntry()) && void 0 !== A ? A : e[t].getAsEntry();
        if (a && !a.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }), g(this, "preventUnwantedDrop", function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = e.dataTransfer;
      if (null == a) return !0;
      let l = Array.isArray(a.types) && -1 !== a.types.indexOf("text/uri-list") && -1 === a.types.indexOf("application/json"),
        s = null != a.items && !A.isAllDropFiles(a.items);
      return !l && !s || (e.stopPropagation(), e.preventDefault(), a.effectAllowed = "none", a.dropEffect = "none", t && (A.setState({
        isDragging: !1
      }), (0, o.openUploadError)({
        title: d.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: d.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: A.props.icons
      })), !1)
    }), g(this, "handleDragOver", e => {
      var A, t, a;
      if (!this.preventUnwantedDrop(e)) return !1;
      let l = e.dataTransfer;
      if (null != l) {
        if (l.dropEffect = "copy", (0, n.hasModalOpen)(o.UPLOAD_ERROR_MODAL_KEY) && (0, n.closeModal)(o.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (A = (t = this.props).onDragOver) || void 0 === A || A.call(t, e), !this.state.isDragging) {
          let e = null === (a = this.elementDOMRef.current) || void 0 === a ? void 0 : a.ownerDocument.defaultView;
          (null != e && l.types instanceof e.DOMStringList && l.types.contains("application/x-moz-file") || -1 !== l.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: !0
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, A;
          this.setState({
            isDragging: !1
          }), null === (e = (A = this.props).onDragClear) || void 0 === e || e.call(A)
        }, 1e3)
      }
    }), g(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), g(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), g(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), g(this, "clearDragging", () => {
      var e, A;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (A = this.props).onDragClear) || void 0 === e || e.call(A)
    }), g(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let A = e.dataTransfer;
      if (null == A) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(A.files), this.clearDragging())
    })
  }
}
A.default = C