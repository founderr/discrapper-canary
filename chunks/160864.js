"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  i = n("414456"),
  a = n.n(i),
  l = n("77078"),
  o = n("716849"),
  u = n("552917"),
  d = n("109036"),
  c = n("336522"),
  h = n("782340"),
  f = n("831839"),
  p = n("4184");

function g() {
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: a(p.sparkleWhite, f.sparkleOne)
    }), (0, s.jsx)("div", {
      className: a(p.sparkleWhite, f.sparkleTwo)
    }), (0, s.jsx)("div", {
      className: a(p.lightWhite, f.lightOne)
    }), (0, s.jsx)("div", {
      className: a(p.lightWhite, f.lightTwo)
    }), (0, s.jsx)("div", {
      className: a(p.crossWhite, f.crossOne)
    }), (0, s.jsx)("div", {
      className: a(p.crossWhite, f.crossTwo)
    }), (0, s.jsx)("div", {
      className: a(p.popWhite, f.popOne)
    })]
  })
}
class v extends r.Component {
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
      icons: n,
      style: r,
      className: i
    } = this.props;
    return (0, s.jsx)("div", {
      ref: this.elementDOMRef,
      className: a(i, f.uploadArea, {
        [f.droppable]: this.state.isDragging,
        [f.uploadModalIn]: this.state.isOverZone
      }),
      style: r,
      children: (0, s.jsxs)("div", {
        className: f.uploadDropModal,
        children: [this.state.isDragging && (0, s.jsx)(g, {}), (0, s.jsx)("div", {
          className: f.bgScale
        }), (0, s.jsxs)("div", {
          className: f.inner,
          children: [(0, s.jsx)(d.default, {
            icons: n
          }), (0, s.jsx)("div", {
            className: f.title,
            children: e
          }), (0, s.jsx)("div", {
            className: f.instructions,
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
    super(...e), t = this, this.state = {
      isDragging: !1,
      isOverZone: !1
    }, this.dragOverTimeout = null, this.elementDOMRef = r.createRef(), this.isAllDropFiles = e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let s = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
        if (s && !s.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }, this.preventUnwantedDrop = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = e.dataTransfer;
      if (null == s) return !0;
      let r = Array.isArray(s.types) && -1 !== s.types.indexOf("text/uri-list") && -1 === s.types.indexOf("application/json"),
        i = null != s.items && !t.isAllDropFiles(s.items);
      return !r && !i || (e.stopPropagation(), e.preventDefault(), s.effectAllowed = "none", s.dropEffect = "none", n && (t.setState({
        isDragging: !1
      }), (0, c.openUploadError)({
        title: h.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: h.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }, this.handleDragOver = e => {
      var t, n, s;
      if (!this.preventUnwantedDrop(e)) return !1;
      let r = e.dataTransfer;
      if (null == r) return;
      r.dropEffect = "copy";
      let i = (0, l.hasModalOpen)(c.UPLOAD_ERROR_MODAL_KEY);
      if (i && (0, l.closeModal)(c.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
        (0, o.maybeFetchPremiumLikelihood)(u.default);
        let e = null === (s = this.elementDOMRef.current) || void 0 === s ? void 0 : s.ownerDocument.defaultView,
          t = null != e && r.types instanceof e.DOMStringList && r.types.contains("application/x-moz-file");
        (t || -1 !== r.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
          isDragging: !0
        })
      }
      clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
        var e, t;
        this.setState({
          isDragging: !1
        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
      }, 1e3)
    }, this.handleDragOverZone = () => {
      this.setState({
        isOverZone: !0
      })
    }, this.handleDragLeaveZone = () => {
      this.setState({
        isOverZone: !1
      })
    }, this.handleDragLeave = e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }, this.clearDragging = () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }, this.handleDrop = e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    }
  }
}
var m = v