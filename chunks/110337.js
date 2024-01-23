"use strict";
let n, r;
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("222007");
var s = l("37983"),
  a = l("884691"),
  i = l("414456"),
  o = l.n(i),
  u = l("77078"),
  c = l("970728"),
  d = l("448993"),
  I = l("393414"),
  f = l("145131"),
  E = l("476765"),
  p = l("883029"),
  _ = l("49111"),
  S = l("782340"),
  T = l("479030"),
  C = l("529861"),
  N = l("156465");
let m = "hTKzmak",
  A = (0, E.uid)();
let L = (n = window.GLOBAL_ENV.INVITE_HOST, r = "", null == n && (n = location.host, r = _.Routes.INVITE("")), "".concat(location.protocol, "//").concat(n).concat(r, "/")),
  h = [m, "".concat(L).concat(m), "".concat(L).concat("cool-people")],
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, s.jsxs)(u.Clickable, {
      className: T.rowContainer,
      onClick: () => {
        t(), (0, I.transitionTo)(_.Routes.GUILD_DISCOVERY)
      },
      children: [(0, s.jsx)("img", {
        width: 40,
        height: 40,
        className: T.rowIcon,
        alt: "",
        src: N
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(u.Heading, {
          className: T.rowText,
          variant: "heading-md/semibold",
          children: S.default.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, s.jsx)(u.Text, {
          className: T.rowText,
          variant: "text-xs/normal",
          children: S.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, s.jsx)("img", {
        className: T.rowArrow,
        alt: "",
        src: C
      })]
    })
  };

function R(e) {
  let {
    onBack: t,
    onClose: l,
    isSlideReady: n
  } = e, [r, i] = a.useState(""), [I, E] = a.useState(!1), [_, C] = a.useState(null), N = a.useRef(null);
  a.useEffect(() => {
    var e;
    n && (null === (e = N.current) || void 0 === e || e.focus())
  }, [n]);
  let R = e => {
    e.preventDefault();
    let t = r.trim();
    if ("" === t) {
      C(S.default.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    C(null), E(!0);
    let n = t.split("/"),
      s = n[n.length - 1];
    c.default.resolveInvite(s, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (E(!1), null == t) {
        C(S.default.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = c.default.getInviteContext("Join Guild", t);
        c.default.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            l(), c.default.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
            let t = (0, p.getInviteError)(e.code);
            C(t)
          } else C(S.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      E(!1);
      let t = new d.V6OrEarlierAPIError(e),
        l = (0, p.getInviteError)(t.code);
      C(l)
    })
  };
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)(u.ModalHeader, {
      className: T.header,
      direction: f.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, s.jsx)(u.Heading, {
        className: T.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.JOIN_SERVER_TITLE
      }), (0, s.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: S.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, s.jsx)(u.ModalCloseButton, {
        className: T.closeButton,
        onClick: l
      })]
    }), (0, s.jsxs)(u.ModalContent, {
      className: T.content,
      children: [(0, s.jsx)("form", {
        onSubmit: R,
        className: T.inputForm,
        children: (0, s.jsxs)(u.FormItem, {
          children: [(0, s.jsx)(u.FormTitle, {
            id: A,
            error: _,
            className: o(T.formTitle, {
              [T.error]: null != _
            }),
            required: !0,
            children: S.default.Messages.FORM_LABEL_INVITE_LINK
          }), (0, s.jsx)(u.TextInput, {
            value: r,
            onChange: i,
            className: T.input,
            inputClassName: T.inputInner,
            placeholder: "".concat(L).concat(m),
            inputRef: N,
            required: !0,
            "aria-labelledby": A
          })]
        })
      }), (0, s.jsx)(u.FormItem, {
        title: S.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: T.formTitle,
        className: T.examplesForm,
        children: h.map(e => (0, s.jsx)(u.Clickable, {
          className: T.sampleLink,
          onClick: () => i(e),
          children: e
        }, e))
      }), (0, s.jsx)(g, {
        onClick: l
      })]
    }), (0, s.jsxs)(u.ModalFooter, {
      className: T.footer,
      children: [(0, s.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        submitting: I,
        onClick: R,
        children: S.default.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, s.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.MIN,
        onClick: t,
        children: S.default.Messages.BACK
      })]
    })]
  })
}