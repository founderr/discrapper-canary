let l, s;
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  c = n(481060),
  u = n(447543),
  _ = n(881052),
  I = n(703656),
  E = n(285952),
  d = n(153124),
  N = n(782605),
  T = n(981631),
  m = n(689938),
  S = n(615882),
  C = n(216019),
  p = n(286359);
let L = "hTKzmak",
  A = (0, d.hQ)();
let D = (l = window.GLOBAL_ENV.INVITE_HOST, s = "", null == l && (l = location.host, s = T.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(l).concat(s, "/")),
  f = [L, "".concat(D).concat(L), "".concat(D).concat("cool-people")],
  M = e => {
    let {
      onClick: t
    } = e;
    return (0, r.jsxs)(c.Clickable, {
      className: S.rowContainer,
      onClick: () => {
        t(), (0, I.uL)(T.Z5c.GUILD_DISCOVERY)
      },
      children: [(0, r.jsx)("img", {
        width: 40,
        height: 40,
        className: S.rowIcon,
        alt: "",
        src: p
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
          className: S.rowText,
          variant: "heading-md/semibold",
          children: m.Z.Messages.DISCOVERY_UPSELL_HEADER
        }), (0, r.jsx)(c.Text, {
          className: S.rowText,
          variant: "text-xs/normal",
          children: m.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION
        })]
      }), (0, r.jsx)("img", {
        className: S.rowArrow,
        alt: "",
        src: C
      })]
    })
  };

function O(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: l
  } = e, [s, i] = a.useState(""), [I, d] = a.useState(!1), [T, C] = a.useState(null), p = a.useRef(null);
  a.useEffect(() => {
    var e;
    l && (null === (e = p.current) || void 0 === e || e.focus())
  }, [l]);
  let O = e => {
    e.preventDefault();
    let t = s.trim();
    if ("" === t) {
      C(m.Z.Messages.INVALID_INVITE_LINK_ERROR);
      return
    }
    C(null), d(!0);
    let l = t.split("/"),
      r = l[l.length - 1];
    u.Z.resolveInvite(r, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (d(!1), null == t) {
        C(m.Z.Messages.INSTANT_INVITE_EXPIRED);
        return
      }
      if (null != t.channel) {
        let e = u.Z.getInviteContext("Join Guild", t);
        u.Z.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), u.Z.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof _.yZ || e instanceof _.Hx ? C((0, N.O)(e.code)) : C(m.Z.Messages.INVITE_MODAL_ERROR_DEFAULT)
        })
      }
    }, e => {
      d(!1);
      let t = new _.yZ(e);
      C((0, N.O)(t.code))
    })
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(c.ModalHeader, {
      className: S.header,
      direction: E.Z.Direction.VERTICAL,
      separator: !1,
      children: [(0, r.jsx)(c.Heading, {
        className: S.title,
        variant: "heading-xl/semibold",
        children: m.Z.Messages.JOIN_SERVER_TITLE
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: m.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
      }), (0, r.jsx)(c.ModalCloseButton, {
        className: S.closeButton,
        onClick: n
      })]
    }), (0, r.jsxs)(c.ModalContent, {
      className: S.__invalid_content,
      children: [(0, r.jsx)("form", {
        onSubmit: O,
        className: S.inputForm,
        children: (0, r.jsxs)(c.FormItem, {
          children: [(0, r.jsx)(c.FormTitle, {
            id: A,
            error: T,
            className: o()(S.formTitle, {
              [S.error]: null != T
            }),
            required: !0,
            children: m.Z.Messages.FORM_LABEL_INVITE_LINK
          }), (0, r.jsx)(c.TextInput, {
            value: s,
            onChange: i,
            className: S.input,
            inputClassName: S.inputInner,
            placeholder: "".concat(D).concat(L),
            inputRef: p,
            required: !0,
            "aria-labelledby": A
          })]
        })
      }), (0, r.jsx)(c.FormItem, {
        title: m.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
        titleClassName: S.formTitle,
        className: S.examplesForm,
        children: f.map(e => (0, r.jsx)(c.Clickable, {
          className: S.sampleLink,
          onClick: () => i(e),
          children: e
        }, e))
      }), (0, r.jsx)(M, {
        onClick: n
      })]
    }), (0, r.jsxs)(c.ModalFooter, {
      className: S.footer,
      children: [(0, r.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        submitting: I,
        onClick: O,
        children: m.Z.Messages.NUF_JOIN_SERVER_BUTTON
      }), (0, r.jsx)(c.Button, {
        color: c.Button.Colors.PRIMARY,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.MIN,
        onClick: t,
        children: m.Z.Messages.BACK
      })]
    })]
  })
}