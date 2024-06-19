n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(481060),
  u = n(194359),
  d = n(153124),
  E = n(657682),
  h = n(981631),
  _ = n(420212),
  I = n(689938),
  m = n(804025),
  g = n(331651);
let p = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  T = (0, d.hQ)(),
  N = "".concat(T, "-decription"),
  S = "".concat(T, "-error");

function C(e, t) {
  switch (t.type) {
    case "RESET":
      return p;
    case "SUCCESS":
      return {
        ...p, success: t.text
      };
    case "HINT":
      return {
        ...p, canSend: !0, hint: t.text
      };
    case "ERROR":
      return {
        ...e, canSend: !0, error: t.text
      }
  }
}

function A() {
  let e = s.createRef(),
    t = s.createRef(),
    [n, l] = s.useReducer(C, p),
    {
      canSend: r,
      hint: d,
      success: A,
      error: f
    } = n;
  return s.useEffect(() => {
    null != A && (o()(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [A, e]), (0, i.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o()(null != e.current, "Input is submitted when not mounted");
      let n = e.current.value.trim();
      !n.includes("#") && n.startsWith("@") && (n = n.substring(1));
      let i = (0, E.Zy)(n);
      if (null != i) {
        l({
          type: "ERROR",
          text: i
        });
        return
      }
      u.Z.sendRequest({
        discordTag: n,
        context: {
          location: "Add Friend"
        }
      }).then(() => l({
        type: "SUCCESS",
        text: I.Z.Messages.ADD_FRIEND_SUCCESS.format({
          discordTag: n
        })
      }), e => {
        var t;
        return l({
          type: "ERROR",
          text: (0, E.NF)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
        })
      })
    },
    autoComplete: "off",
    children: [(0, i.jsx)(c.FormText, {
      id: N,
      type: c.FormText.Types.DESCRIPTION,
      children: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, i.jsx)(c.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: m.ring,
      children: (0, i.jsxs)("div", {
        ref: t,
        className: a()(m.addFriendInputWrapper, {
          [m.success]: A,
          [m.error]: f
        }),
        children: [(0, i.jsx)(c.TextInput, {
          id: T,
          inputRef: e,
          className: m.addFriendInput,
          inputClassName: m.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== _.mR.Enter) {
              if (n.includes("#")) {
                o()(null != e.current, "Input is handling keypress when not mounted");
                let i = n.indexOf("#"),
                  s = e.current.selectionStart,
                  l = t.key === _.mR.Backspace || t.key === _.mR.ArrowRight || t.key === _.mR.ArrowLeft,
                  a = t.which >= 48 && t.which <= 57;
                null != s && s > i && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null != s && s > i && !a && !l && t.preventDefault()
              }
            }
          },
          onChange: e => {
            if (e.length <= 0) {
              l({
                type: "RESET"
              });
              return
            }
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + h.LYt.slice(null != n ? n.length + 1 : 0)), l({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-lpignore": !0,
          placeholder: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-label": I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-invalid": null != f || void 0,
          "aria-describedby": null != f ? S : N
        }), null != d && (0, i.jsx)("div", {
          className: m.addFriendHint,
          "aria-hidden": !0,
          children: d
        }), (0, i.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: I.Z.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != f && (0, i.jsx)(c.FormText, {
      role: "alert",
      id: S,
      type: c.FormText.Types.ERROR,
      className: g.marginTop8,
      children: f
    }), null != A && (0, i.jsx)(c.FormText, {
      role: "status",
      type: c.FormText.Types.SUCCESS,
      className: g.marginTop8,
      children: A
    })]
  })
}