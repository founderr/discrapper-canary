"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(608787),
  l = n(481060),
  u = n(571989),
  _ = n(65838),
  c = n(424218),
  d = n(130208),
  E = n(259580),
  I = n(689938),
  T = n(870187),
  h = n(520076);

function f(e) {
  let {
    text: t,
    language: r
  } = e, s = () => (0, i.jsx)("pre", {
    children: (0, i.jsx)("code", {
      className: o()(h.scrollbarGhostHairline, T.codeView, "hljs"),
      children: t
    })
  });
  return (0, i.jsx)(a.GI, {
    createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
    webpackId: 364964,
    render: e => {
      if (!e.hasLanguage(r)) return s();
      let n = e.highlight(r, t, !0);
      return null == n ? s() : (0, i.jsx)("pre", {
        children: (0, i.jsx)("code", {
          className: o()(h.scrollbarGhostHairline, T.codeView, "hljs", n.language),
          dangerouslySetInnerHTML: {
            __html: n.value
          }
        })
      })
    },
    renderFallback: () => s()
  })
}

function S(e) {
  let {
    expanded: t,
    setExpanded: n,
    isWholeFile: r,
    numLines: s
  } = e, o = (r ? I.Z.Messages.PREVIEW_NUM_LINES : I.Z.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
    lines: s
  });
  return (0, i.jsx)(l.Tooltip, {
    text: "".concat(t ? I.Z.Messages.COLLAPSE : I.Z.Messages.EXPAND, " (").concat(o, ")"),
    children: e => (0, i.jsxs)(l.Clickable, {
      ...e,
      className: T.toggleExpandSection,
      onClick: () => {
        n(!t)
      },
      children: [(0, i.jsx)(E.Z, {
        direction: t ? E.Z.Directions.UP : E.Z.Directions.DOWN
      }), t ? I.Z.Messages.COLLAPSE : I.Z.Messages.EXPAND]
    })
  })
}

function A(e) {
  let {
    url: t,
    fileName: n,
    fileSize: r
  } = e, s = "".concat(n, " (").concat((0, c.IC)(r), ")");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Tooltip, {
      text: s,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: o()(T.downloadSection, T.attachmentName),
        children: n
      })
    }), (0, i.jsx)(l.Tooltip, {
      text: s,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: o()(T.downloadSection, T.formattedSize),
        children: (0, c.IC)(r)
      })
    }), (0, i.jsx)(l.Tooltip, {
      text: "".concat(I.Z.Messages.DOWNLOAD, " ").concat(s),
      children: e => (0, i.jsx)(l.Anchor, {
        ...e,
        className: T.downloadSection,
        href: t,
        target: "_blank",
        rel: "noreferrer noopener",
        children: (0, i.jsx)(l.DownloadIcon, {
          size: "md",
          color: "currentColor",
          className: T.downloadButton
        })
      })
    })]
  })
}

function N(e) {
  let {
    language: t,
    setLanguage: n
  } = e;
  return (0, i.jsx)(l.Popout, {
    position: "left",
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(l.Dialog, {
        "aria-label": I.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
        children: (0, i.jsx)(l.Combobox, {
          className: T.languageSelector,
          multiSelect: !1,
          placeholder: I.Z.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
          value: new Set([t]),
          autoFocus: !0,
          onChange: e => {
            n(e), r()
          },
          children: e => Array.from(_.u).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, i.jsx)(l.ComboboxItem, {
            value: e,
            children: (0, i.jsx)(l.ComboboxItem.Label, {
              children: e
            })
          }, e))
        })
      })
    },
    children: e => (0, i.jsx)(l.Tooltip, {
      text: I.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
      children: t => (0, i.jsx)(l.AngleBracketsIcon, {
        size: "md",
        color: "currentColor",
        ...t,
        ...e,
        className: T.codeIcon
      })
    })
  })
}

function m(e) {
  return (0, i.jsx)(l.Tooltip, {
    text: I.Z.Messages.PREVIEW_WHOLE_FILE,
    children: t => (0, i.jsx)(l.Clickable, {
      ...t,
      className: T.openFullPreviewSection,
      onClick: () => {
        (0, l.openModal)(t => (0, i.jsx)(R, {
          ...e,
          ...t
        }))
      },
      children: (0, i.jsx)(l.MaximizeIcon, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}

function O(e) {
  var t;
  let {
    url: n,
    fileName: r,
    fileSize: s,
    fileContents: a,
    expanded: _,
    setExpanded: d,
    language: E,
    setLanguage: h,
    bytesLeft: O,
    className: R
  } = e, p = null == a ? void 0 : a.split("\n"), g = null !== (t = null == p ? void 0 : p.length) && void 0 !== t ? t : 0, C = _ ? 100 : 6, v = 0 === O, L = "";
  v && _ && g > C ? L = "\n..." : !v && (L = "..."), "" !== L && (v ? L += " " + I.Z.Messages.PREVIEW_LINES_LEFT.format({
    lines: g - C
  }) : L += " " + I.Z.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, c.IC)(O)
  }));
  let D = (null == p ? void 0 : p.slice(0, C).join("\n")) + L,
    M = (0, u.yx)(D),
    P = _ || C < g;
  return (0, i.jsxs)("div", {
    className: o()(R, T.container),
    children: [(0, i.jsx)("div", {
      className: o()(T.textContainer, {
        [T.expanded]: _
      }),
      children: null == a ? (0, i.jsx)(l.Spinner, {
        className: T.spinner
      }) : (0, i.jsx)(f, {
        text: M,
        language: E
      })
    }), (0, i.jsxs)(l.Text, {
      color: "header-secondary",
      className: T.footer,
      variant: "text-sm/normal",
      children: [P ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(S, {
          expanded: _,
          setExpanded: d,
          isWholeFile: v,
          numLines: g
        }), (0, i.jsx)(m, {
          url: n,
          fileName: r,
          fileSize: s,
          language: E,
          fileContents: a,
          bytesLeft: O
        })]
      }) : null, (0, i.jsx)("div", {
        className: T.footerGap
      }), (0, i.jsx)(A, {
        url: n,
        fileName: r,
        fileSize: s
      }), (0, i.jsx)(N, {
        language: E,
        setLanguage: h
      })]
    })]
  })
}

function R(e) {
  let {
    url: t,
    fileName: n,
    fileSize: s,
    transitionState: o,
    language: a,
    fileContents: u,
    bytesLeft: _
  } = e, [d, E] = r.useState(a), h = null != u ? u : "";
  return 0 !== _ && (h += "... ".concat(I.Z.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, c.IC)(_)
  }))), (0, i.jsx)(l.ModalRoot, {
    transitionState: o,
    "aria-label": I.Z.Messages.PREVIEW_MODAL_LABEL,
    size: l.ModalSize.LARGE,
    className: T.modalRoot,
    children: (0, i.jsxs)("div", {
      className: T.modalContent,
      children: [(0, i.jsx)(l.ScrollerThin, {
        className: T.modalTextContainer,
        children: null == u ? (0, i.jsx)(l.Spinner, {
          className: T.spinner
        }) : (0, i.jsx)(f, {
          text: h,
          language: d
        })
      }), (0, i.jsxs)(l.Text, {
        color: "header-secondary",
        className: T.footer,
        variant: "text-sm/normal",
        children: [(0, i.jsx)("div", {
          className: T.footerGap
        }), (0, i.jsx)(A, {
          url: t,
          fileName: n,
          fileSize: s
        }), (0, i.jsx)(N, {
          language: d,
          setLanguage: E
        })]
      })]
    })
  })
}
t.Z = r.memo(function(e) {
  let {
    url: t,
    fileName: n,
    fileSize: s,
    contentType: a,
    className: l,
    onClick: u,
    onContextMenu: _
  } = e, [c, E] = r.useState(!1), [I, h] = r.useState(n.split(".").slice(-1)[0]), {
    fileContents: f,
    bytesLeft: S,
    hadError: A
  } = function(e, t) {
    let [n, i] = r.useState(!1), [s, o] = r.useState(null), [a, l] = r.useState(1);
    return r.useEffect(() => {
      (async function n() {
        try {
          var n, r;
          let s = await fetch(e, {
              headers: {
                Range: "bytes=0-".concat(5e4),
                Accept: "text/plain"
              }
            }),
            a = (function(e) {
              var t;
              let n = "utf-8",
                i = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
              try {
                return new TextDecoder(i)
              } catch (t) {
                if ((null == e ? void 0 : e.startsWith("text")) || i.toLowerCase().includes("utf")) return new TextDecoder(n);
                throw t
              }
            })(t).decode(await s.arrayBuffer()),
            u = null !== (n = s.headers.get("content-range")) && void 0 !== n ? n : "0",
            _ = null !== (r = s.headers.get("content-length")) && void 0 !== r ? r : "1",
            c = parseInt(u.split("/")[1]) - parseInt(_);
          o(0 === c ? a : a.slice(0, -1)), l(c), i(!1)
        } catch (e) {
          l(0), i(!0)
        }
      })()
    }, [e, t]), {
      fileContents: s,
      bytesLeft: a,
      hadError: n
    }
  }(t, a);
  return A ? (0, i.jsx)(d.Z, {
    url: t,
    fileName: n,
    fileSize: s,
    onClick: u,
    onContextMenu: _,
    className: l
  }) : (0, i.jsx)(O, {
    url: t,
    fileName: n,
    fileSize: s,
    fileContents: f,
    bytesLeft: S,
    expanded: c,
    setExpanded: E,
    language: I,
    setLanguage: h,
    className: o()(T.newMosaicStyle, l)
  })
}, (e, t) => e.url === t.url && e.className === t.className)