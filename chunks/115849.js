n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(331651);
let g = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  p = (0, d.hQ)(),
  N = "".concat(p, "-decription"),
  S = "".concat(p, "-error");

function C(e, t) {
  switch (t.type) {
    case "RESET":
      return g;
    case "SUCCESS":
      return {
        ...g, success: t.text
      };
    case "HINT":
      return {
        ...g, canSend: !0, hint: t.text
      };
    case "ERROR":
      return {
        ...e, canSend: !0, error: t.text
      }
  }
}

function A() {
  let e = i.createRef(),
    t = i.createRef(),
    [n, l] = i.useReducer(C, g),
    {
      canSend: r,
      hint: d,
      success: A,
      error: f
    } = n;
  return i.useEffect(() => {
    null != A && (o()(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [A, e]), (0, s.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o()(null != e.current, "Input is submitted when not mounted");
      let n = e.current.value.trim();
      !n.includes("#") && n.startsWith("@") && (n = n.substring(1));
      let s = (0, E.Zy)(n);
      if (null != s) {
        l({
          type: "ERROR",
          text: s
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
    children: [(0, s.jsx)(c.FormText, {
      id: N,
      type: c.FormText.Types.DESCRIPTION,
      children: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, s.jsx)(c.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: m.ring,
      children: (0, s.jsxs)("div", {
        ref: t,
        className: a()(m.addFriendInputWrapper, {
          [m.success]: A,
          [m.error]: f
        }),
        children: [(0, s.jsx)(c.TextInput, {
          id: p,
          inputRef: e,
          className: m.addFriendInput,
          inputClassName: m.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== _.mR.Enter) {
              if (n.includes("#")) {
                o()(null != e.current, "Input is handling keypress when not mounted");
                let s = n.indexOf("#"),
                  i = e.current.selectionStart,
                  l = t.key === _.mR.Backspace || t.key === _.mR.ArrowRight || t.key === _.mR.ArrowLeft,
                  a = t.which >= 48 && t.which <= 57;
                null != i && i > s && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null != i && i > s && !a && !l && t.preventDefault()
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
        }), null != d && (0, s.jsx)("div", {
          className: m.addFriendHint,
          "aria-hidden": !0,
          children: d
        }), (0, s.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: I.Z.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != f && (0, s.jsx)(c.FormText, {
      role: "alert",
      id: S,
      type: c.FormText.Types.ERROR,
      className: T.marginTop8,
      children: f
    }), null != A && (0, s.jsx)(c.FormText, {
      role: "status",
      type: c.FormText.Types.SUCCESS,
      className: T.marginTop8,
      children: A
    })]
  })
}