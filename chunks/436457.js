let s, a;
n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var r = n(735250),
  l = n(470079),
  o = n(120356),
  i = n.n(o),
  c = n(481060),
  d = n(447543),
  u = n(230711),
  E = n(881052),
  p = n(285952),
  h = n(154921),
  m = n(782605),
  _ = n(981631),
  f = n(689938),
  N = n(975833);
let T = (s = window.GLOBAL_ENV.INVITE_HOST, a = "", null == s && (s = location.host, a = _.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(s).concat(a, "/"));

function v(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: s,
    isSlideReady: a
  } = e, [o, v] = l.useState(""), [x, A] = l.useState(!1), [I, C] = l.useState(null), g = l.useRef(null);
  l.useEffect(() => {
    var e;
    a && (null === (e = g.current) || void 0 === e || e.focus())
  }, [a]);
  let b = l.useCallback(e => {
      e.preventDefault();
      let t = o.trim();
      if ("" === t) {
        C(f.Z.Messages.INVALID_INVITE_LINK_ERROR);
        return
      }
      C(null), A(!0);
      let s = t.split("/"),
        a = s[s.length - 1];
      d.Z.resolveInvite(a, "Join Guild", {
        inputValue: t
      }).then(e => {
        let {
          invite: t
        } = e;
        if (A(!1), null == t) {
          C(f.Z.Messages.INSTANT_INVITE_EXPIRED);
          return
        }
        if (null != t.channel) {
          let e = d.Z.getInviteContext("Join Guild", t);
          d.Z.acceptInvite({
            inviteKey: t.code,
            context: e,
            callback: e => {
              n(), d.Z.transitionToInvite(e)
            }
          }).catch(e => {
            e instanceof E.yZ || e instanceof E.Hx ? C((0, m.O)(e.code)) : C(f.Z.Messages.INVITE_MODAL_ERROR_DEFAULT)
          })
        }
      }, e => {
        A(!1);
        let t = new E.yZ(e);
        C((0, m.O)(t.code))
      })
    }, [o, A, C, n]),
    M = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(c.ModalHeader, {
        className: N.header,
        direction: p.Z.Direction.VERTICAL,
        separator: !1,
        children: [(0, r.jsx)(h.Z, {
          className: N.title,
          size: h.Z.Sizes.SIZE_24,
          color: h.Z.Colors.HEADER_PRIMARY,
          children: f.Z.Messages.JOIN_SERVER_TITLE
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: f.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
        })]
      }), (0, r.jsxs)(c.ModalContent, {
        children: [(0, r.jsx)("form", {
          onSubmit: b,
          className: N.inputForm,
          children: (0, r.jsx)(c.FormItem, {
            title: f.Z.Messages.FORM_LABEL_INVITE_LINK,
            error: I,
            titleClassName: i()(N.formTitle, {
              [N.error]: null != I
            }),
            children: (0, r.jsx)(c.TextInput, {
              value: o,
              onChange: v,
              className: N.input,
              inputClassName: N.inputInner,
              inputRef: g
            })
          })
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: f.Z.Messages.JOIN_SERVER_EXAMPLES.format({
            examples: "".concat(T).concat("cool-people", ", ").concat("hTKzmak")
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: N.connectCTA,
          children: f.Z.Messages.JOIN_GUILD_CONNECT.format({
            onClick: () => {
              s(), u.Z.open(_.oAB.CONNECTIONS)
            }
          })
        })]
      })]
    });
  return {
    content: M,
    footer: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        onClick: b,
        disabled: 0 === o.length,
        submitting: x,
        children: f.Z.Messages.JOIN
      }), (0, r.jsx)(c.Button, {
        className: N.__invalid_skipButton,
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.MIN,
        onClick: t,
        children: f.Z.Messages.BACK
      })]
    })
  }
}