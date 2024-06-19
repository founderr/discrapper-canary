i.r(n);
var e = i(735250);
i(470079);
var s = i(442837),
  a = i(481060),
  o = i(812206),
  d = i(922156),
  r = i(285952),
  c = i(63063),
  t = i(689938),
  u = i(248990);
n.default = l => {
  let {
    onClose: n,
    transitionState: i
  } = l, {
    error: h,
    applicationName: R
  } = (0, s.cj)([d.Z, o.Z], () => {
    let l = d.Z.getLastError(),
      n = null;
    if (null != l && null != l.applicationId) {
      let i = o.Z.getApplication(l.applicationId);
      null != i && (n = i.name)
    }
    return {
      error: l,
      applicationName: n
    }
  });
  return (0, e.jsxs)(a.ModalRoot, {
    transitionState: i,
    size: a.ModalSize.SMALL,
    "aria-label": t.Z.Messages.DISPATCH_ERROR_MODAL_HEADER,
    children: [(0, e.jsxs)(a.ModalHeader, {
      justify: r.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, e.jsx)(r.Z.Child, {
        grow: 1,
        children: (0, e.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: t.Z.Messages.DISPATCH_ERROR_MODAL_HEADER
        })
      }), (0, e.jsx)(r.Z.Child, {
        grow: 0,
        children: (0, e.jsx)(a.ModalCloseButton, {
          onClick: n
        })
      })]
    }), (0, e.jsx)(a.ModalContent, {
      children: (0, e.jsxs)("div", {
        className: u.body,
        children: [(0, e.jsx)("div", {
          children: t.Z.Messages.DISPATCH_ERROR_MODAL_DESCRIPTION.format({
            link: "https://dis.gd/dispatch-error"
          })
        }), (0, e.jsx)("div", {
          className: u.supportCallToAction,
          children: t.Z.Messages.DISPATCH_ERROR_MODAL_BODY
        }), (0, e.jsx)("div", {
          className: u.errorLabel,
          children: t.Z.Messages.DISPATCH_ERROR_MODAL_ERROR_LABEL
        }), (0, e.jsx)("div", {
          className: u.errorDetails,
          children: (0, e.jsxs)("div", {
            children: [null != R ? "Game: ".concat(R, "\n") : null, (null == h ? void 0 : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null, (null == h ? void 0 : h.branchId) != null && (null == h ? void 0 : h.applicationId) !== (null == h ? void 0 : h.branchId) ? "Branch ID: ".concat(null == h ? void 0 : h.branchId, "\n") : null, (null == h ? void 0 : h.code) != null ? "Error Code: ".concat(null == h ? void 0 : h.code, "\n") : null, (null == h ? void 0 : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? void 0 : h.uuid) : null]
          })
        })]
      })
    }), (0, e.jsxs)(a.ModalFooter, {
      children: [(0, e.jsx)(a.Button, {
        onClick: () => {
          window.open(c.Z.getSubmitRequestURL())
        },
        children: t.Z.Messages.DISPATCH_ERROR_MODAL_OPEN_TICKET
      }), (0, e.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        onClick: n,
        color: u.closeLink,
        children: t.Z.Messages.CLOSE
      })]
    })]
  })
}