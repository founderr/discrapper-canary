"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("884691"),
  i = n("77078"),
  a = n("336522"),
  s = n("782340");

function r(e) {
  let {
    onDrop: t
  } = e, n = l.useRef(null), [r, o] = l.useState(!1), u = e => {
    for (let n = 0; n < e.length; n++) try {
      var t;
      let l = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
      if (l && !l.isFile) return !1
    } catch (e) {
      continue
    }
    return !0
  }, d = l.useCallback(function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        dataTransfer: n
      } = e;
    if (null == n) return !0;
    let l = Array.isArray(n.types) && -1 !== n.types.indexOf("text/uri-list") && -1 === n.types.indexOf("application/json"),
      i = null != n.items && !u(n.items);
    return !l && !i || (e.stopPropagation(), e.preventDefault(), n.effectAllowed = "none", n.dropEffect = "none", t && (o(!1), (0, a.openUploadError)({
      title: s.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
      help: s.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP
    })), !1)
  }, []), c = l.useCallback(e => {
    if (!d(e)) return !1;
    let {
      dataTransfer: t
    } = e;
    if (null == t) return;
    t.dropEffect = "copy";
    let l = (0, i.hasModalOpen)(a.UPLOAD_ERROR_MODAL_KEY);
    if (l && (0, i.closeModal)(a.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), !r) {
      var s;
      let e = null === (s = n.current) || void 0 === s ? void 0 : s.ownerDocument.defaultView,
        l = null != e && t.types instanceof e.DOMStringList && t.types.contains("application/x-moz-file");
      (l || -1 !== t.types.indexOf("Files")) && o(e => !e && !0)
    }
  }, [r, d]), f = l.useCallback(e => {
    r && (e.stopPropagation(), e.preventDefault(), o(!1))
  }, [r]), m = l.useCallback(e => {
    if (!d(e, !0)) return !1;
    let {
      dataTransfer: n
    } = e;
    if (null == n) return !0;
    if (r) {
      let l = n.files[0];
      e.preventDefault(), e.stopPropagation(), o(!1), t(l)
    }
  }, [r, t, d]);
  return l.useEffect(() => {
    let e = n.current;
    return null != e && (e.addEventListener("dragover", c, !1), e.addEventListener("dragleave", f, !1), e.addEventListener("drop", m, !1)), () => {
      null != e && (e.removeEventListener("dragover", c, !1), e.removeEventListener("dragleave", f, !1), e.removeEventListener("drop", m, !1))
    }
  }, [m, c, f]), {
    dragRef: n,
    hover: r
  }
}