"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("512722"),
  o = a.n(r),
  u = a("481060"),
  d = a("194359"),
  c = a("153124"),
  f = a("657682"),
  E = a("981631"),
  h = a("420212"),
  _ = a("689938"),
  C = a("909759"),
  m = a("611273");
let S = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  p = (0, c.uid)(),
  I = "".concat(p, "-decription"),
  T = "".concat(p, "-error");

function g(e, t) {
  switch (t.type) {
    case "RESET":
      return S;
    case "SUCCESS":
      return {
        ...S, success: t.text
      };
    case "HINT":
      return {
        ...S, canSend: !0, hint: t.text
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
    [a, l] = s.useReducer(g, S),
    {
      canSend: r,
      hint: c,
      success: A,
      error: N
    } = a;
  return s.useEffect(() => {
    null != A && (o()(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [A, e]), (0, n.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o()(null != e.current, "Input is submitted when not mounted");
      let a = e.current.value.trim();
      !a.includes("#") && a.startsWith("@") && (a = a.substring(1));
      let n = (0, f.validateDiscordTag)(a);
      if (null != n) {
        l({
          type: "ERROR",
          text: n
        });
        return
      }
      d.default.sendRequest({
        discordTag: a,
        context: {
          location: "Add Friend"
        }
      }).then(() => l({
        type: "SUCCESS",
        text: _.default.Messages.ADD_FRIEND_SUCCESS.format({
          discordTag: a
        })
      }), e => {
        var t;
        return l({
          type: "ERROR",
          text: (0, f.humanizeAbortCode)(null === (t = e.body) || void 0 === t ? void 0 : t.code, a)
        })
      })
    },
    autoComplete: "off",
    children: [(0, n.jsx)(u.FormText, {
      id: I,
      type: u.FormText.Types.DESCRIPTION,
      children: _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, n.jsx)(u.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: C.ring,
      children: (0, n.jsxs)("div", {
        ref: t,
        className: i()(C.addFriendInputWrapper, {
          [C.success]: A,
          [C.error]: N
        }),
        children: [(0, n.jsx)(u.TextInput, {
          id: p,
          inputRef: e,
          className: C.addFriendInput,
          inputClassName: C.input,
          onKeyPress: t => {
            let a = t.currentTarget.value;
            if (t.key !== h.KeyboardEventKey.Enter && a.includes("#")) {
              o()(null != e.current, "Input is handling keypress when not mounted");
              let n = a.indexOf("#"),
                s = e.current.selectionStart,
                l = t.key === h.KeyboardEventKey.Backspace || t.key === h.KeyboardEventKey.ArrowRight || t.key === h.KeyboardEventKey.ArrowLeft,
                i = t.which >= 48 && t.which <= 57;
              null != s && s > n && /^(.+?#\d{4})$/.test(a) && !l ? t.preventDefault() : null != s && s > n && !i && !l && t.preventDefault()
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
              [, a] = e.split("#");
            null != a && (t = e + E.PLACEHOLDER_TAG.slice(null != a ? a.length + 1 : 0)), l({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-lpignore": !0,
          placeholder: _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-label": _.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-invalid": null != N || void 0,
          "aria-describedby": null != N ? T : I
        }), null != c && (0, n.jsx)("div", {
          className: C.addFriendHint,
          "aria-hidden": !0,
          children: c
        }), (0, n.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: _.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != N && (0, n.jsx)(u.FormText, {
      role: "alert",
      id: T,
      type: u.FormText.Types.ERROR,
      className: m.marginTop8,
      children: N
    }), null != A && (0, n.jsx)(u.FormText, {
      role: "status",
      type: u.FormText.Types.SUCCESS,
      className: m.marginTop8,
      children: A
    })]
  })
}