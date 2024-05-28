"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("481060"),
  d = n("194359"),
  c = n("153124"),
  f = n("657682"),
  E = n("981631"),
  C = n("420212"),
  h = n("689938"),
  _ = n("909759"),
  S = n("611273");
let m = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  p = (0, c.uid)(),
  I = "".concat(p, "-decription"),
  g = "".concat(p, "-error");

function T(e, t) {
  switch (t.type) {
    case "RESET":
      return m;
    case "SUCCESS":
      return {
        ...m, success: t.text
      };
    case "HINT":
      return {
        ...m, canSend: !0, hint: t.text
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
    [n, l] = s.useReducer(T, m),
    {
      canSend: r,
      hint: c,
      success: A,
      error: N
    } = n;
  return s.useEffect(() => {
    null != A && (o()(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [A, e]), (0, a.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o()(null != e.current, "Input is submitted when not mounted");
      let n = e.current.value.trim();
      !n.includes("#") && n.startsWith("@") && (n = n.substring(1));
      let a = (0, f.validateDiscordTag)(n);
      if (null != a) {
        l({
          type: "ERROR",
          text: a
        });
        return
      }
      d.default.sendRequest({
        discordTag: n,
        context: {
          location: "Add Friend"
        }
      }).then(() => l({
        type: "SUCCESS",
        text: h.default.Messages.ADD_FRIEND_SUCCESS.format({
          discordTag: n
        })
      }), e => {
        var t;
        return l({
          type: "ERROR",
          text: (0, f.humanizeAbortCode)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
        })
      })
    },
    autoComplete: "off",
    children: [(0, a.jsx)(u.FormText, {
      id: I,
      type: u.FormText.Types.DESCRIPTION,
      children: h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, a.jsx)(u.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: _.ring,
      children: (0, a.jsxs)("div", {
        ref: t,
        className: i()(_.addFriendInputWrapper, {
          [_.success]: A,
          [_.error]: N
        }),
        children: [(0, a.jsx)(u.TextInput, {
          id: p,
          inputRef: e,
          className: _.addFriendInput,
          inputClassName: _.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== C.KeyboardEventKey.Enter && n.includes("#")) {
              o()(null != e.current, "Input is handling keypress when not mounted");
              let a = n.indexOf("#"),
                s = e.current.selectionStart,
                l = t.key === C.KeyboardEventKey.Backspace || t.key === C.KeyboardEventKey.ArrowRight || t.key === C.KeyboardEventKey.ArrowLeft,
                i = t.which >= 48 && t.which <= 57;
              null != s && s > a && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null != s && s > a && !i && !l && t.preventDefault()
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
            null != n && (t = e + E.PLACEHOLDER_TAG.slice(null != n ? n.length + 1 : 0)), l({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-lpignore": !0,
          placeholder: h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-label": h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-invalid": null != N || void 0,
          "aria-describedby": null != N ? g : I
        }), null != c && (0, a.jsx)("div", {
          className: _.addFriendHint,
          "aria-hidden": !0,
          children: c
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: h.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != N && (0, a.jsx)(u.FormText, {
      role: "alert",
      id: g,
      type: u.FormText.Types.ERROR,
      className: S.marginTop8,
      children: N
    }), null != A && (0, a.jsx)(u.FormText, {
      role: "status",
      type: u.FormText.Types.SUCCESS,
      className: S.marginTop8,
      children: A
    })]
  })
}