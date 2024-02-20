"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007"), E("424973");
var t = E("866227"),
  o = E.n(t),
  I = E("429030"),
  T = E("229353"),
  r = E.n(T),
  a = E("444051"),
  n = E.n(a),
  i = E("657743"),
  A = E.n(i);
let s = e => ({
    ...n,
    ...A,
    ...e
  }),
  R = new I.default({
    getMessages: e => "en-US" === e ? s(r) : E("795529")("./messages/".concat(e, ".jsona").replace("./messages/", "./")).then(e => {
      let {
        default: _
      } = e;
      return _
    }).then(s),
    getLanguages: () => E("199005")
  });

function N(e) {
  E("199038").dateFnsLocales[e]().then(_ => {
    let {
      default: t
    } = _;
    {
      let {
        registerLocale: _
      } = E("900419");
      _(e, t)
    }
  })
}
R.addListener("locale", e => {
  ! function(e, _) {
    let E = [],
      t = ("no" === e ? "nb" : e).split("-");
    for (; t.length > 0;) E.push(t.join("-")), t.pop();
    E.push(_), o.locale(E)
  }(e, "en-US");
  let {
    setTags: _
  } = E("286235").default;
  _({
    locale: e
  })
}), R.addListener("locale", N), N(R.getLocale());
var O = R