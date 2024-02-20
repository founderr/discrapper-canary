"use strict";
let t, o;
E.r(_), E.d(_, {
  FormattedMessage: function() {
    return A
  },
  setUpdateRules: function() {
    return s
  },
  getMessage: function() {
    return R
  }
}), E("222007"), E("781738");
var I = E("860347"),
  T = E.n(I),
  r = E("404828"),
  a = E.n(r),
  n = E("841206"),
  i = E("853812");
class A {
  format(e) {
    if (!this.hasMarkdown) return this.intlMessage.format(e);
    let [_, E] = this.getContext(e);
    return t(this.intlMessage.format(_), _, E)
  }
  astFormat(e) {
    let [_, E] = this.getContext(e);
    return o(this.intlMessage.format(_), _, E)
  }
  plainFormat(e) {
    return this.intlMessage.format(e)
  }
  getContext(e) {
    let _ = i.UNSAFE_RE.test(this.message),
      E = {};
    if (_) {
      let _ = 0;
      for (let [t, o] of Object.entries(e)) this.message.includes("!!{".concat(t, "}!!")) && (E[++_] = o, e[t] = _)
    }
    return [e, E]
  }
  constructor(e, _, E) {
    this.message = E ? e : e.replace(i.UNSAFE_RE_ALL, ""), this.hasMarkdown = E, this.intlMessage = new T(this.message, _)
  }
}

function s(e) {
  t = function(e, _) {
    let E = a.parserFor(_(e)),
      t = a.reactFor(a.ruleOutput(e, "react"));
    return (e, _, o) => {
      let I = !e.includes("\n\n");
      return !I && (e += "\n\n"), t(E(e, {
        inline: I,
        context: _,
        unsafeContext: o
      }))
    }
  }(n.default, e), o = function(e) {
    let _ = a.parserFor(e);
    return (e, E, t) => _(e + "\n\n", {
      inline: !1,
      context: E,
      unsafeContext: t
    })
  }(n.default)
}

function R(e, _) {
  if (null == e) return "";
  null == t && s(E("186372").default), e = e.replace(/^\n+|\n+$/g, "");
  let o = i.FORMAT_RE.test(e),
    I = i.MARKDOWN_RE.test(e);
  return o || I ? new A(e, _, I) : e
}