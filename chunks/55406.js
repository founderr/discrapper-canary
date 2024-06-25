"use strict";
let i;
n(757143);
var r = n(302454),
  s = n.n(r),
  o = n(800927),
  a = n(945884),
  l = n(594199);
let u = s().defaultRules.lheading,
  _ = s().defaultRules.heading,
  c = s().defaultRules.link,
  d = s().defaultRules.image,
  E = s().defaultRules.list,
  I = s().defaultRules.blockQuote,
  T = s().defaultRules.paragraph,
  h = /\{(.+?)}/,
  f = /^\$(\w+?)\$/;
i = n(235375);
let S = e => {
    let {
      transformUpperCase: t = !1
    } = e;
    return (e, n, i) => {
      let r = h.exec(e[1]),
        o = e[1].replace(h, "");
      return t && (o = o.toUpperCase()), {
        className: null != r ? r[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: s().parseInline(n, o, i)
      }
    }
  },
  A = e => ({
    ...i.baseRules,
    image: {
      ...d,
      ..."function" == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image
    },
    link: {
      ...c,
      ..."function" == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link
    },
    list: {
      ...E,
      ..."function" == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list
    },
    interpolation: {
      order: l.ZP.order,
      match: e => f.exec(e),
      parse(e, t, n) {
        let i = n.interpolations[e[1]];
        return null == i ? {
          type: "text",
          content: e[0]
        } : {
          type: "interpolation",
          renderer: i
        }
      },
      react: e => e.renderer()
    },
    lheading: {
      ...u,
      parse: S({
        transformUpperCase: !0
      }),
      ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
    },
    heading: {
      ..._,
      ..."function" == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading
    },
    blockQuote: {
      ...I,
      ..."function" == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote
    },
    paragraph: {
      ...T,
      ..."function" == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph
    }
  }),
  N = e => ({
    lheading: {
      ...u,
      parse: S({
        transformUpperCase: !1
      }),
      ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
    }
  }),
  m = e => ({
    ...A(e),
    newline: {
      ...s().defaultRules.newline
    },
    text: l.ZP,
    list: o.Z,
    subtext: a.Z
  });
t.Z = {
  getDefaultRules: e => ({
    ...A(e)
  }),
  getSpecialRules: e => ({
    ...A(e),
    ...N(e)
  }),
  getMessageRules: e => ({
    ...m(e)
  })
}