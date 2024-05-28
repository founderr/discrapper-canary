"use strict";
s.r(t), s("47120");
var E = s("735250"),
  _ = s("470079"),
  a = s("120356"),
  n = s.n(a),
  T = s("481060"),
  i = s("310752"),
  A = s("531643"),
  u = s("689938"),
  l = s("239792"),
  I = s("139661");

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function o() {
  return (0, E.jsxs)("div", {
    children: [(0, E.jsx)("div", {
      className: n()(I.sparkleWhite, l.sparkleOne)
    }), (0, E.jsx)("div", {
      className: n()(I.sparkleWhite, l.sparkleTwo)
    }), (0, E.jsx)("div", {
      className: n()(I.lightWhite, l.lightOne)
    }), (0, E.jsx)("div", {
      className: n()(I.lightWhite, l.lightTwo)
    }), (0, E.jsx)("div", {
      className: n()(I.crossWhite, l.crossOne)
    }), (0, E.jsx)("div", {
      className: n()(I.crossWhite, l.crossTwo)
    }), (0, E.jsx)("div", {
      className: n()(I.popWhite, l.popOne)
    })]
  })
}
class L extends _.Component {
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
      icons: s,
      style: _,
      className: a
    } = this.props;
    return (0, E.jsx)("div", {
      ref: this.elementDOMRef,
      className: n()(a, l.uploadArea, {
        [l.droppable]: this.state.isDragging,
        [l.uploadModalIn]: this.state.isOverZone
      }),
      style: _,
      children: (0, E.jsxs)("div", {
        className: l.uploadDropModal,
        children: [this.state.isDragging && (0, E.jsx)(o, {}), (0, E.jsx)("div", {
          className: l.bgScale
        }), (0, E.jsxs)("div", {
          className: l.inner,
          children: [(0, E.jsx)(i.default, {
            icons: s
          }), (0, E.jsx)("div", {
            className: l.title,
            children: e
          }), (0, E.jsx)("div", {
            className: l.instructions,
            children: (0, E.jsx)("pre", {
              children: t
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, r(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), r(this, "dragOverTimeout", null), r(this, "elementDOMRef", _.createRef()), r(this, "isAllDropFiles", e => {
      for (let s = 0; s < e.length; s++) try {
        var t;
        let E = null !== (t = e[s].webkitGetAsEntry()) && void 0 !== t ? t : e[s].getAsEntry();
        if (E && !E.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }), r(this, "preventUnwantedDrop", function(e) {
      let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        E = e.dataTransfer;
      if (null == E) return !0;
      let _ = Array.isArray(E.types) && -1 !== E.types.indexOf("text/uri-list") && -1 === E.types.indexOf("application/json"),
        a = null != E.items && !t.isAllDropFiles(E.items);
      return !_ && !a || (e.stopPropagation(), e.preventDefault(), E.effectAllowed = "none", E.dropEffect = "none", s && (t.setState({
        isDragging: !1
      }), (0, A.openUploadError)({
        title: u.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: u.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }), r(this, "handleDragOver", e => {
      var t, s, E;
      if (!this.preventUnwantedDrop(e)) return !1;
      let _ = e.dataTransfer;
      if (null != _) {
        if (_.dropEffect = "copy", (0, T.hasModalOpen)(A.UPLOAD_ERROR_MODAL_KEY) && (0, T.closeModal)(A.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (s = this.props).onDragOver) || void 0 === t || t.call(s, e), !this.state.isDragging) {
          let e = null === (E = this.elementDOMRef.current) || void 0 === E ? void 0 : E.ownerDocument.defaultView;
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
    }), r(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), r(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), r(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), r(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }), r(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
t.default = L