"use strict";
E.r(t), E("47120");
var s = E("735250"),
  _ = E("470079"),
  a = E("120356"),
  T = E.n(a),
  n = E("481060"),
  A = E("310752"),
  I = E("531643"),
  u = E("689938"),
  i = E("239792"),
  l = E("139661");

function L(e, t, E) {
  return t in e ? Object.defineProperty(e, t, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = E, e
}

function o() {
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: T()(l.sparkleWhite, i.sparkleOne)
    }), (0, s.jsx)("div", {
      className: T()(l.sparkleWhite, i.sparkleTwo)
    }), (0, s.jsx)("div", {
      className: T()(l.lightWhite, i.lightOne)
    }), (0, s.jsx)("div", {
      className: T()(l.lightWhite, i.lightTwo)
    }), (0, s.jsx)("div", {
      className: T()(l.crossWhite, i.crossOne)
    }), (0, s.jsx)("div", {
      className: T()(l.crossWhite, i.crossTwo)
    }), (0, s.jsx)("div", {
      className: T()(l.popWhite, i.popOne)
    })]
  })
}
class r extends _.Component {
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
      description: t,
      icons: E,
      style: _,
      className: a
    } = this.props;
    return (0, s.jsx)("div", {
      ref: this.elementDOMRef,
      className: T()(a, i.uploadArea, {
        [i.droppable]: this.state.isDragging,
        [i.uploadModalIn]: this.state.isOverZone
      }),
      style: _,
      children: (0, s.jsxs)("div", {
        className: i.uploadDropModal,
        children: [this.state.isDragging && (0, s.jsx)(o, {}), (0, s.jsx)("div", {
          className: i.bgScale
        }), (0, s.jsxs)("div", {
          className: i.inner,
          children: [(0, s.jsx)(A.default, {
            icons: E
          }), (0, s.jsx)("div", {
            className: i.title,
            children: e
          }), (0, s.jsx)("div", {
            className: i.instructions,
            children: (0, s.jsx)("pre", {
              children: t
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, L(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), L(this, "dragOverTimeout", null), L(this, "elementDOMRef", _.createRef()), L(this, "isAllDropFiles", e => {
      for (let E = 0; E < e.length; E++) try {
        var t;
        let s = null !== (t = e[E].webkitGetAsEntry()) && void 0 !== t ? t : e[E].getAsEntry();
        if (s && !s.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }), L(this, "preventUnwantedDrop", function(e) {
      let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = e.dataTransfer;
      if (null == s) return !0;
      let _ = Array.isArray(s.types) && -1 !== s.types.indexOf("text/uri-list") && -1 === s.types.indexOf("application/json"),
        a = null != s.items && !t.isAllDropFiles(s.items);
      return !_ && !a || (e.stopPropagation(), e.preventDefault(), s.effectAllowed = "none", s.dropEffect = "none", E && (t.setState({
        isDragging: !1
      }), (0, I.openUploadError)({
        title: u.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: u.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }), L(this, "handleDragOver", e => {
      var t, E, s;
      if (!this.preventUnwantedDrop(e)) return !1;
      let _ = e.dataTransfer;
      if (null != _) {
        if (_.dropEffect = "copy", (0, n.hasModalOpen)(I.UPLOAD_ERROR_MODAL_KEY) && (0, n.closeModal)(I.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (E = this.props).onDragOver) || void 0 === t || t.call(E, e), !this.state.isDragging) {
          let e = null === (s = this.elementDOMRef.current) || void 0 === s ? void 0 : s.ownerDocument.defaultView;
          (null != e && _.types instanceof e.DOMStringList && _.types.contains("application/x-moz-file") || -1 !== _.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: !0
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, t;
          this.setState({
            isDragging: !1
          }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
        }, 1e3)
      }
    }), L(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), L(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), L(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), L(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }), L(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
t.default = r