"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
});
var t = E("404828");
let {
  newline: o,
  paragraph: I,
  url: T,
  link: r,
  strong: a,
  u: n,
  br: i,
  em: A,
  image: s,
  text: R
} = t.defaultRules;
var N = {
  newline: o,
  paragraph: I,
  url: T,
  link: {
    ...r,
    parse(e, _, E) {
      let t = r.parse(e, _, E);
      return t.context = E.context, t
    }
  },
  strong: a,
  u: n,
  br: i,
  em: A,
  image: s,
  hook: {
    order: R.order,
    match: (0, t.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
    parse(e, _, E) {
      let {
        context: t
      } = E;
      return {
        render: t[e[2]],
        content: _(e[1], E)
      }
    },
    react: (e, _, E) => e.render(_(e.content, E), E.key)
  },
  noparse: {
    order: R.order,
    match: (0, t.inlineRegex)(/^!!(\d+?)!!/),
    parse(e, _, E) {
      let {
        unsafeContext: t
      } = E, o = t[e[1]];
      return "string" != typeof o && (o = null != o ? o.toString() : ""), {
        type: "text",
        content: o
      }
    },
    react: e => e.content
  },
  text: R
}