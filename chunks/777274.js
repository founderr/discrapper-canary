"use strict";
n.r(t), n.d(t, {
  CallscopeChannelCallIssueMarker: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("981913"),
  r = n("697218"),
  u = n("471654"),
  o = n("413709"),
  d = n("50885"),
  c = n("316194"),
  f = n("546206"),
  h = n("782340");
let m = {
    marginTop: "12px",
    marginBottom: "12px"
  },
  p = {
    marginTop: "12px",
    marginBottom: "12px"
  },
  E = {
    marginLeft: ".5em"
  };

function S() {
  return (0, l.jsx)(u.default, {
    width: "1em",
    height: "1em"
  })
}

function g(e) {
  let [t, n] = a.useState(""), [i, u] = a.useState(null);
  a.useEffect(() => {
    (async () => {
      let e = (0, f.getCallscopeState)();
      u(await e.getDescription())
    })()
  }, []);
  let o = a.useCallback(() => {
      console.log("[callscope] Issue marker closed ".concat(t, ".")), (0, f.setCallscopeIssue)(t), e.onClose()
    }, [e, t]),
    d = a.useCallback(() => {
      e.onClose()
    }, [e]),
    c = ! function() {
      let e = r.default.getCurrentUser();
      return null != e && e.isStaff()
    }() ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(s.FormItem, {
        style: m,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          style: p,
          children: "Because all user and channel data is anonymized some additional information is needed for Discord to retrieve the logs. You may be asked to provide these IDs so we can associate the incident."
        }), (0, l.jsx)(_, {
          description: i
        })]
      }), (0, l.jsx)(s.FormItem, {
        style: m,
        children: (0, l.jsxs)(s.Text, {
          variant: "text-md/normal",
          style: p,
          children: ["Shortly after the call, you can enter the blinded channel ID into the", " ", (0, l.jsx)(s.Anchor, {
            href: "https://callscope.discord.tools/",
            children: "callscope visualizer"
          }), "."]
        })
      })]
    });
  return (0, l.jsxs)(s.ModalRoot, {
    transitionState: s.ModalTransitionState.ENTERING,
    size: s.ModalSize.MEDIUM,
    children: [(0, l.jsxs)(s.ModalContent, {
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        style: m,
        children: h.default.Messages.NOTICE_CALLSCOPE_DIALOG_HEADER
      }), (0, l.jsxs)(s.FormItem, {
        style: m,
        children: [(0, l.jsxs)(s.Text, {
          variant: "text-md/normal",
          style: p,
          children: ["We marked the time of your ", (0, l.jsx)(S, {}), " ", h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE, " button press in the analytics logs. It can be used multiple times during your call."]
        }), (0, l.jsx)(s.TextArea, {
          placeholder: h.default.Messages.NOTICE_CALLSCOPE_DIALOG_INPUT,
          autoFocus: !0,
          rows: 5,
          value: t,
          maxLength: 500,
          onChange: n
        })]
      }), c]
    }), (0, l.jsxs)(s.ModalFooter, {
      children: [(0, l.jsx)(s.Button, {
        onClick: o,
        children: "Submit Issue"
      }), (0, l.jsx)(s.Button, {
        look: s.ButtonLooks.BLANK,
        onClick: d,
        children: (0, l.jsx)(s.Text, {
          variant: "text-md/medium",
          children: h.default.Messages.CANCEL
        })
      })]
    })]
  })
}

function C(e) {
  let t = a.useCallback(() => {
    d.default.copy(e.text)
  }, [e.text]);
  return (0, l.jsx)(s.Anchor, {
    style: E,
    onClick: t,
    title: "Copy to clipboard",
    children: (0, l.jsx)(o.default, {
      width: "1em",
      height: "1em"
    })
  })
}

function _(e) {
  let t = a.useCallback(() => {
    d.default.copy(JSON.stringify(e, void 0, 4))
  }, [e]);
  return null == e.description ? (0, l.jsx)(s.Text, {
    variant: "text-md/medium",
    children: "Unable to locate blind IDs."
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Text, {
      variant: "text-md/medium",
      children: (0, l.jsx)("ul", {
        children: e.description.blindIds.map(e => {
          let {
            context: t,
            ids: n
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsxs)("li", {
              children: [(0, l.jsxs)("strong", {
                children: ["Blind channel ID (", t, "):"]
              }), " ", (0, l.jsx)("kbd", {
                style: {
                  userSelect: "text"
                },
                children: n.blindChannelId
              }), (0, l.jsx)(C, {
                text: n.blindChannelId
              })]
            }), (0, l.jsxs)("li", {
              children: [(0, l.jsxs)("strong", {
                children: ["Blind user ID (", t, "):"]
              }), " ", (0, l.jsx)("kbd", {
                style: {
                  userSelect: "text"
                },
                children: n.blindUserId
              }), (0, l.jsx)(C, {
                text: n.blindUserId
              })]
            })]
          }, t)
        })
      })
    }), (0, l.jsx)(s.Button, {
      onClick: t,
      children: "Copy All"
    })]
  })
}
let I = "callscope-report-issue-dialog";

function T(e) {
  let t = (0, s.useModalContext)(),
    n = a.useCallback(() => {
      (0, s.closeModal)(I)
    }, []),
    r = a.useCallback(() => {
      (0, c.setRtcLogMarker)(), (0, s.openModalLazy)(() => Promise.resolve(e => (0, l.jsx)(g, {
        onClose: n
      })), {
        contextKey: t,
        modalKey: I
      })
    }, [t, n]);
  return (0, f.shouldShowCallscopeUI)() ? (0, l.jsx)(i.default, {
    onClick: r,
    iconComponent: u.default,
    "aria-label": h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE,
    className: e.className,
    label: h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE
  }) : (0, l.jsx)(l.Fragment, {})
}