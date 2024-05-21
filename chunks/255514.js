"use strict";
n.r(t), n("47120"), n("773603");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("285952"),
  o = n("185625"),
  l = n("273389"),
  u = n("816342"),
  d = n("15667"),
  _ = n("76264"),
  c = n("822686"),
  E = n("356110"),
  I = n("730719"),
  T = n("996701"),
  f = n("320596"),
  S = n("273514"),
  h = n("995712"),
  A = n("234937"),
  m = n("473121"),
  N = n("449413"),
  p = n("266080"),
  O = n("316617"),
  C = n("15682"),
  R = n("905434"),
  g = n("196627"),
  L = n("739319"),
  v = n("842401"),
  D = n("375790"),
  M = n("981631"),
  y = n("689938"),
  P = n("284447");

function U(e, t) {
  let {
    elements: n
  } = e;
  return n.find(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}

function b(e, t) {
  let {
    elements: n
  } = e;
  return n.filter(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}
t.default = e => {
  let {
    node: t,
    reportType: n,
    history: G,
    onSelectChild: w,
    onModalClose: k,
    onSubmit: B,
    multiSelect: V,
    reportId: x,
    textInput: F
  } = e, H = U(t, "checkbox"), Y = U(t, "text_line_resource"), j = b(t, "external_link"), W = b(t, "free_text"), K = b(t, "dropdown"), [z, Z] = r.useState(!1), [X, Q] = r.useState(!1), [q, J] = r.useState(""), [$, ee] = r.useState(() => ({})), [et, en] = r.useState(() => ({})), [ei, er] = r.useState((0, o.areRequiredElementsUnfilled)(W, K, H, F, V)), es = function(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = {
        ...et
      };
    i[e] = {
      value: t,
      isValid: n
    }, en(i), er((0, o.areRequiredElementsUnfilled)(W, K, H, i, $))
  }, ea = r.useMemo(() => e => {
    w({
      nodeRef: t.id,
      destination: e,
      textInput: null != W || null != K ? et : void 0,
      multiSelect: null != H ? {
        name: H.name,
        state: $
      } : void 0
    })
  }, [t, w, H, $, et, W, K]);
  r.useEffect(() => {
    null != V && ee(V), null != F && en(F)
  }, [V, F]);
  let eo = e => {
      if (e === M.AbortCodes.INVALID_FORM_BODY) J(y.default.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
      else J(y.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED)
    },
    el = () => B({
      nodeRef: t.id,
      destination: ["", e.successNodeId]
    }).then(() => {
      J(""), ea(["", e.successNodeId])
    }).catch(e => {
      var t;
      eo(null === (t = e.body) || void 0 === t ? void 0 : t.code)
    }).finally(() => {
      Z(!1)
    });
  return r.useEffect(() => {
    t.is_auto_submit && !X && (Q(!0), B({
      nodeRef: t.id,
      destination: ["", t.id]
    }))
  }, [t.is_auto_submit, X, B, t.id]), (0, i.jsxs)("div", {
    className: P.container,
    children: [(0, i.jsxs)(s.ModalHeader, {
      separator: !1,
      direction: a.default.Direction.VERTICAL,
      className: P.header,
      children: [(0, i.jsx)(g.default, {
        element: U(t, "success")
      }), (0, i.jsx)(m.default, {
        node: t
      }), (0, i.jsx)(N.default, {
        node: t
      })]
    }), (0, i.jsxs)(s.ModalContent, {
      className: P.body,
      children: [null != Y ? (0, i.jsx)(L.default, {
        element: Y
      }) : null, null != U(t, "breadcrumbs") && (0, i.jsx)(d.default, {
        history: G
      }), null != U(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, i.jsx)(O.default, {
        message: n.record
      }), null != U(t, "user_preview") && "user" === n.name ? (0, i.jsx)(v.default, {
        user: n.record
      }) : null, function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return D.REMEDIATION_ELEMENT_TYPES.includes(t)
        })
      }(t) && (0, i.jsx)(s.Heading, {
        className: P.remediationElementsHeader,
        variant: "heading-sm/semibold",
        children: y.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
      }), null != U(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, i.jsx)(u.default, {
        userId: "user" === n.name ? n.record.id : n.record.author.id,
        reportId: x,
        reportName: n.name
      }), null != U(t, "delete_message") && "message" === n.name && (0, i.jsx)(c.default, {
        message: n.record,
        reportId: x
      }), null != U(t, "leave_guild") && "guild" === n.name && (0, i.jsx)(p.default, {
        guildId: n.record.id,
        reportId: x
      }), null != U(t, "channel_preview") && "stage_channel" === n.name && (0, i.jsx)(R.default, {
        stageInstance: n.record
      }), null != U(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, i.jsx)(A.default, {
        event: n.record
      }), null != U(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, i.jsx)(S.default, {
        entry: n.record
      }), null != U(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, i.jsx)(h.default, {
        entry: n.record
      }), null != H && (0, i.jsx)(C.default, {
        element: H,
        onChange: (e, t) => {
          let n = {
            ...$
          };
          e in $ ? delete n[e] : n[e] = t, ee(n), er((0, o.areRequiredElementsUnfilled)(W, K, H, et, n))
        },
        state: $
      }), ("user_urf" === n.name || "message_urf" === n.name) && null != K && K.length > 0 && (0, i.jsx)(E.default, {
        elements: K,
        onChange: es,
        state: et
      }), ("user_urf" === n.name || "message_urf" === n.name) && null != W && W.length > 0 && (0, i.jsx)(f.default, {
        elements: W,
        onChange: es,
        state: et
      }), (0, i.jsx)(_.default, {
        node: t,
        onSelectChild: ea
      }), null != j && j.length > 0 ? (0, i.jsx)(T.default, {
        elements: j
      }) : null, (0, i.jsx)(I.default, {
        errorMessage: q,
        onClose: () => {
          J("")
        }
      })]
    }), (0, i.jsx)(l.default, {
      button: t.button,
      submitting: z,
      disableNext: ei,
      onClick: e => {
        switch (e.type) {
          case "done":
          case "cancel":
            k();
            break;
          case "next":
            ea(["", e.target]);
            break;
          case "submit":
            Z(!0), el()
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: G.length > 0
    }), (0, i.jsx)(s.ModalCloseButton, {
      className: P.closeButton,
      onClick: k
    })]
  })
}