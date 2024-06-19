e(47120);
var T = e(735250),
  s = e(470079),
  I = e(120356),
  A = e.n(I),
  n = e(481060),
  N = e(310752),
  t = e(531643),
  r = e(689938),
  a = e(214932),
  L = e(120393);

function D(E, _, e) {
  return _ in E ? Object.defineProperty(E, _, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : E[_] = e, E
}

function S() {
  return (0, T.jsxs)("div", {
    children: [(0, T.jsx)("div", {
      className: A()(L.sparkleWhite, a.sparkleOne)
    }), (0, T.jsx)("div", {
      className: A()(L.sparkleWhite, a.sparkleTwo)
    }), (0, T.jsx)("div", {
      className: A()(L.lightWhite, a.lightOne)
    }), (0, T.jsx)("div", {
      className: A()(L.lightWhite, a.lightTwo)
    }), (0, T.jsx)("div", {
      className: A()(L.crossWhite, a.crossOne)
    }), (0, T.jsx)("div", {
      className: A()(L.crossWhite, a.crossTwo)
    }), (0, T.jsx)("div", {
      className: A()(L.popWhite, a.popOne)
    })]
  })
}
class U extends s.Component {
  componentDidMount() {
    let E = this.elementDOMRef.current;
    null != E && (E.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), E.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), E.addEventListener("dragover", this.handleDragOverZone, !1), E.addEventListener("dragleave", this.handleDragLeaveZone, !1), E.addEventListener("drop", this.handleDrop, !1))
  }
  componentWillUnmount() {
    let E = this.elementDOMRef.current;
    null != E && (E.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), E.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), E.removeEventListener("dragover", this.handleDragOverZone, !1), E.removeEventListener("dragleave", this.handleDragLeaveZone, !1), E.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: E,
      description: _,
      icons: e,
      style: s,
      className: I
    } = this.props;
    return (0, T.jsx)("div", {
      ref: this.elementDOMRef,
      className: A()(I, a.uploadArea, {
        [a.droppable]: this.state.isDragging,
        [a.uploadModalIn]: this.state.isOverZone
      }),
      style: s,
      children: (0, T.jsxs)("div", {
        className: a.uploadDropModal,
        children: [this.state.isDragging && (0, T.jsx)(S, {}), (0, T.jsx)("div", {
          className: a.bgScale
        }), (0, T.jsxs)("div", {
          className: a.inner,
          children: [(0, T.jsx)(N.Z, {
            icons: e
          }), (0, T.jsx)("div", {
            className: a.title,
            children: E
          }), (0, T.jsx)("div", {
            className: a.instructions,
            children: (0, T.jsx)("pre", {
              children: _
            })
          })]
        })]
      })
    })
  }
  constructor(...E) {
    var _;
    super(...E), _ = this, D(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), D(this, "dragOverTimeout", null), D(this, "elementDOMRef", s.createRef()), D(this, "isAllDropFiles", E => {
      for (let e = 0; e < E.length; e++) try {
        var _;
        let T = null !== (_ = E[e].webkitGetAsEntry()) && void 0 !== _ ? _ : E[e].getAsEntry();
        if (T && !T.isFile) return !1
      } catch (E) {
        continue
      }
      return !0
    }), D(this, "preventUnwantedDrop", function(E) {
      let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        T = E.dataTransfer;
      if (null == T) return !0;
      let s = Array.isArray(T.types) && -1 !== T.types.indexOf("text/uri-list") && -1 === T.types.indexOf("application/json"),
        I = null != T.items && !_.isAllDropFiles(T.items);
      return !s && !I || (E.stopPropagation(), E.preventDefault(), T.effectAllowed = "none", T.dropEffect = "none", e && (_.setState({
        isDragging: !1
      }), (0, t.openUploadError)({
        title: r.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: r.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: _.props.icons
      })), !1)
    }), D(this, "handleDragOver", E => {
      var _, e, T;
      if (!this.preventUnwantedDrop(E)) return !1;
      let s = E.dataTransfer;
      if (null != s) {
        if (s.dropEffect = "copy", (0, n.hasModalOpen)(t.UPLOAD_ERROR_MODAL_KEY) && (0, n.closeModal)(t.UPLOAD_ERROR_MODAL_KEY), E.stopPropagation(), E.preventDefault(), null === (_ = (e = this.props).onDragOver) || void 0 === _ || _.call(e, E), !this.state.isDragging) {
          let E = null === (T = this.elementDOMRef.current) || void 0 === T ? void 0 : T.ownerDocument.defaultView;
          (null != E && s.types instanceof E.DOMStringList && s.types.contains("application/x-moz-file") || -1 !== s.types.indexOf("Files")) && this.setState(E => E.isDragging ? {} : {
            isDragging: !0
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var E, _;
          this.setState({
            isDragging: !1
          }), null === (E = (_ = this.props).onDragClear) || void 0 === E || E.call(_)
        }, 1e3)
      }
    }), D(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), D(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), D(this, "handleDragLeave", E => {
      this.state.isDragging && (E.stopPropagation(), E.preventDefault(), this.clearDragging())
    }), D(this, "clearDragging", () => {
      var E, _;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (E = (_ = this.props).onDragClear) || void 0 === E || E.call(_)
    }), D(this, "handleDrop", E => {
      if (!this.preventUnwantedDrop(E, !0)) return !1;
      let _ = E.dataTransfer;
      if (null == _) return !0;
      this.state.isDragging && (E.preventDefault(), E.stopPropagation(), this.props.onDrop(_.files), this.clearDragging())
    })
  }
}
_.Z = U