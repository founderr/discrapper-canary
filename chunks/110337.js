"use strict";
let r, i;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  o = n.n(a),
  u = n("77078"),
  c = n("970728"),
  d = n("448993"),
  f = n("393414"),
  _ = n("145131"),
  h = n("476765"),
  p = n("883029"),
  E = n("49111"),
  I = n("782340"),
  m = n("274039"),
  g = n("529861"),
  T = n("156465");
let S = "hTKzmak",
  A = (0, h.uid)();
let C = (r = window.GLOBAL_ENV.INVITE_HOST, i = "", null == r && (r = location.host, i = E.Routes.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(i, "/")),
  N = [S, "".concat(C).concat(S), "".concat(C).concat("cool-people")],
  v = e => {
    let {
      onClick: t
    } = e;
    return (0, l.jsxs)(u.Clickable, {
      className: m.rowContainer,
      onClick: () => {
        t(), (0, f.transitionTo)(E.Routes.GUILD_DISCOVERY)
      },
      children: [(0, l.jsx)("img", {
        width: 40,
        height: 40,
        className: m.rowIcon,
        alt: "",
        src: T
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(u.Heading, {
          className: m.rowText,
          variant: "heading-md/semibold",
          children: I.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, l.jsx)(u.Text, {
          className: m.rowText,
          variant: "text-xs/normal",
          children: I.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, l.jsx)("img", {
        className: m.rowArrow,
        alt: "",
        src: g
      })]
    })
  };

function L(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [i, a] = s.useState(""), [f, h] = s.useState(!1), [E, g] = s.useState(null), T = s.useRef(null);
  s.useEffect(() => {
    var e;
    r && (null === (e = T.current) || void 0 === e || e.focus())
  }, [r]);
  let L = e => {
    e.preventDefault();
    let t = i.trim();
    if ("" === t) {
      g(I.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    g(null), h(!0);
    let r = t.split("/"),
      l = r[r.length - 1];
    c.default.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (h(!1), null == t) {
        g(I.default.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = c.default.getInviteContext("Join Guild", t);
        c.default.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.default.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
            let t = (0, p.getInviteError)(e.code);
            g(t)
          } else g(I.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      h(!1);
      let t = new d.V6OrEarlierAPIError(e),
        n = (0, p.getInviteError)(t.code);
      g(n)
    })
  };
  return (0, l.jsxs)("div", {
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: m.header,
      direction: _.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        className: m.title,
        variant: "heading-xl/semibold",
        children: I.default.Messages.JOIN_SERVER_TITLE
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, l.jsx)(u.ModalCloseButton, {
        className: m.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: m.content,
      children: [(0, l.jsx)("form", {
        onSubmit: L,
        className: m.inputForm,
        children: (0, l.jsxs)(u.FormItem, {
          children: [(0, l.jsx)(u.FormTitle, {
            id: A,
            error: E,
            className: o(m.formTitle, {
              [m.error]: null != E
            }),
            required: !0,
            children: I.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, l.jsx)(u.TextInput, {
            value: i,
            onChange: a,
            className: m.input,
            inputClassName: m.inputInner,
            placeholder: "".concat(C).concat(S),
            inputRef: T,
            required: !0,
            "aria-labelledby": A
          })]
        })
      }), (0, l.jsx)(u.FormItem, {
        title: I.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: m.formTitle,
        className: m.examplesForm,
        children: N.map(e => (0, l.jsx)(u.Clickable, {
          className: m.sampleLink,
          onClick: () => a(e),
          children: e
        }, e))
      }), (0, l.jsx)(v, {
        onClick: n
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: m.footer,
      children: [(0, l.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        submitting: f,
        onClick: L,
        children: I.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, l.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.MIN,
        onClick: t,
        children: I.default.Messages.BACK
      })]
    })]
  })
}