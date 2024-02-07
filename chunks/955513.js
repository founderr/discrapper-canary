"use strict";
n.r(t), n.d(t, {
  getRandomDateShortcut: function() {
    return P
  },
  ComponentTypes: function() {
    return a
  },
  refreshSearchTokens: function() {
    return j
  },
  getFilterAutocompletions: function() {
    return z
  },
  default: function() {
    return q
  }
}), n("222007"), n("843762");
var a, r, s = n("448105"),
  l = n.n(s),
  u = n("917351"),
  o = n.n(u),
  E = n("866227"),
  i = n.n(E),
  c = n("923959"),
  T = n("27618"),
  _ = n("744983"),
  f = n("18494"),
  d = n("162771"),
  R = n("102985"),
  S = n("697218"),
  h = n("25292"),
  p = n("655518"),
  A = n("158998"),
  I = n("49111"),
  N = n("782340");

function g() {
  return new Set(i.months().map(e => e.toLowerCase()))
}

function y() {
  return new Set(i.weekdays().map(e => e.toLowerCase()))
}

function M() {
  let e = new Date().getFullYear();
  return new Set(o.range(2015, e + 1).map(e => e.toString()))
}

function F(e, t) {
  return [e, e.clone().add(1, t)]
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = i().startOf(e).add(t, e);
  return F(n, e)
}

function L(e, t, n) {
  let a = i(e, t).local();
  return F(a, n)
}

function m() {
  return {
    [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
    [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
    [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
    [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
    [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
  }
}
let k = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
  H = RegExp("\\s*(true|false)", "i");

function O(e) {
  return "".concat(e, ":")
}

function v(e) {
  return RegExp(O(e), "i")
}

function w(e) {
  let t;
  let n = e.getMatch(1),
    a = e => null != e ? null == e ? void 0 : e.id : null;
  return null != (t = I.ID_REGEX.test(n) ? n : n === I.ME ? a(S.default.getCurrentUser()) : null != e.getMatch(4) ? a(S.default.findByTag(e.getMatch(4))) : a(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
}

function D(e, t) {
  let n, a;
  let r = e.getFullMatch().trim().toLowerCase(),
    s = m()[r];
  null != s ? [n, a] = s() : g().has(r) ? [n, a] = L(r, "MMMM", "month") : y().has(r) ? [n, a] = L(r, "dddd", "day") : M().has(r) ? [n, a] = L(r, "YYYY", "year") : [n, a] = L(r, I.SEARCH_DATE_FORMAT, "day");
  let l = n.isValid() && a.isValid();
  return !!l && ("before" === t ? (a = n, n = null) : "after" === t && (n = a, a = null), e.setData("start", n), e.setData("end", a), !0)
}

function x(e) {
  let t = e.getMatch(1),
    n = d.default.getGuildId(),
    a = c.default.getChannels(n)[c.GUILD_SELECTABLE_CHANNELS_KEY].concat(c.default.getChannels(n)[c.GUILD_VOCAL_CHANNELS_KEY]),
    r = c.default.getTextChannelNameDisambiguations(n),
    s = o.chain(a).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).find(e => {
      var n, a;
      return t === (null !== (a = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : e.name)
    }).value();
  return null != s && (e.setData("channel", s), !0)
}

function Y(e) {
  let t = {
    [N.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
    [N.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
    [N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
    [N.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
    [N.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
    [N.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
    [N.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), !0)
}

function W() {
  return [...Array.from(g()), ...Array.from(y()), ...Array.from(M()), ...Object.keys(m())]
}

function P() {
  return o.sample(W())
}

function U(e, t, n) {
  return b(e, t, W()).map(e => ({
    ...e,
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function b(e, t, n) {
  let a = e.toLocaleLowerCase();
  return o(n).filter(e => l(a, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function B(e, t) {
  let n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = _.default.getSearchType(t);
  e = e.split("#")[0];
  let l = {
    query: e,
    limit: a,
    request: r
  };
  switch (s) {
    case I.SearchTypes.GUILD:
      n = h.default.queryGuildUsers({
        ...l,
        guildId: t
      });
      break;
    case I.SearchTypes.CHANNEL:
      n = h.default.queryChannelUsers({
        ...l,
        channelId: t
      });
      break;
    case I.SearchTypes.DMS:
      n = h.default.queryUsers(e, a, !0, r, () => !0);
      break;
    default:
      return []
  }
  return n.filter(e => {
    let {
      record: t
    } = e;
    return !T.default.isBlocked(t.id)
  }).map(e => {
    let {
      record: t
    } = e;
    return {
      text: A.default.getUserTag(t),
      user: t
    }
  })
}

function K() {
  return _.default.getSearchType() === I.SearchTypes.GUILD
}

function G() {
  return !R.default.hidePersonalInformation
}
let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
(r = a || (a = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
let Z = {};

function j() {
  Object.assign(Z, function() {
    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
    return {
      [I.SearchTokenTypes.FILTER_FROM]: {
        regex: v(N.default.Messages.SEARCH_FILTER_FROM),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_FROM),
        plainText: N.default.Messages.SEARCH_FILTER_FROM,
        validator: G,
        getAutocompletions: B
      },
      [I.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
        follows: [I.SearchTokenTypes.FILTER_FROM],
        regex: V,
        validator: w,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "author_id"
      },
      [I.SearchTokenTypes.FILTER_MENTIONS]: {
        regex: v(N.default.Messages.SEARCH_FILTER_MENTIONS),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_MENTIONS),
        plainText: N.default.Messages.SEARCH_FILTER_MENTIONS,
        validator: G,
        getAutocompletions: B
      },
      [I.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
        follows: [I.SearchTokenTypes.FILTER_MENTIONS],
        regex: V,
        validator: w,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "mentions"
      },
      [I.SearchTokenTypes.FILTER_HAS]: {
        regex: v(N.default.Messages.SEARCH_FILTER_HAS),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_HAS),
        plainText: N.default.Messages.SEARCH_FILTER_HAS,
        getAutocompletions: (t, n, a) => b(t, a, e)
      },
      [I.SearchTokenTypes.ANSWER_HAS]: {
        regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
        follows: [I.SearchTokenTypes.FILTER_HAS],
        validator: Y,
        componentType: "ANSWER",
        queryKey: "has"
      },
      [I.SearchTokenTypes.FILTER_FILE_TYPE]: {
        regex: v(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
        key: O(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
        plainText: N.default.Messages.SEARCH_FILTER_FILE_TYPE,
        componentType: "FILTER"
      },
      [I.SearchTokenTypes.ANSWER_FILE_TYPE]: {
        regex: /(?:\s*([^\s]+))/,
        follows: [I.SearchTokenTypes.FILTER_FILE_TYPE],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_extensions"
      },
      [I.SearchTokenTypes.FILTER_FILE_NAME]: {
        regex: v(N.default.Messages.SEARCH_FILTER_FILE_NAME),
        key: O(N.default.Messages.SEARCH_FILTER_FILE_NAME),
        plainText: N.default.Messages.SEARCH_FILTER_FILE_NAME,
        componentType: "FILTER"
      },
      [I.SearchTokenTypes.ANSWER_FILE_NAME]: {
        regex: /(?:\s*([^\s]+)(?=\s))/,
        follows: [I.SearchTokenTypes.FILTER_FILE_NAME],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_filename"
      },
      [I.SearchTokenTypes.FILTER_BEFORE]: {
        regex: v(N.default.Messages.SEARCH_FILTER_BEFORE),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_BEFORE),
        plainText: N.default.Messages.SEARCH_FILTER_BEFORE,
        getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_BEFORE)
      },
      [I.SearchTokenTypes.FILTER_ON]: {
        regex: v("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_DURING),
        plainText: N.default.Messages.SEARCH_FILTER_DURING,
        getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_ON)
      },
      [I.SearchTokenTypes.FILTER_AFTER]: {
        regex: v(N.default.Messages.SEARCH_FILTER_AFTER),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_AFTER),
        plainText: N.default.Messages.SEARCH_FILTER_AFTER,
        getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_AFTER)
      },
      [I.SearchTokenTypes.ANSWER_BEFORE]: {
        regex: k,
        follows: [I.SearchTokenTypes.FILTER_BEFORE],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => D(e, "before")
      },
      [I.SearchTokenTypes.ANSWER_ON]: {
        regex: k,
        follows: [I.SearchTokenTypes.FILTER_ON],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => D(e, "on")
      },
      [I.SearchTokenTypes.ANSWER_AFTER]: {
        regex: k,
        follows: [I.SearchTokenTypes.FILTER_AFTER],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => D(e, "after")
      },
      [I.SearchTokenTypes.FILTER_IN]: {
        regex: v(N.default.Messages.SEARCH_FILTER_IN),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_IN),
        plainText: N.default.Messages.SEARCH_FILTER_IN,
        validator: K,
        getAutocompletions(e, t, n) {
          "#" === e[0] && (e = e.substring(1));
          let a = h.default.queryChannels({
            query: e,
            type: c.GUILD_SELECTABLE_CHANNELS_KEY,
            guildId: t,
            limit: 1 / 0
          }).concat(h.default.queryChannels({
            query: e,
            type: c.GUILD_VOCAL_CHANNELS_KEY,
            guildId: t,
            limit: 1 / 0
          })).map(e => {
            let {
              record: t
            } = e;
            return t
          }).filter(e => !e.isThread());
          if ("" === e.trim()) {
            let e = f.default.getChannelId(t),
              n = a.find(t => t.id === e);
            null != n && (a.splice(a.indexOf(n), 1), a.unshift(n))
          }
          let r = c.default.getTextChannelNameDisambiguations(t);
          return o(a).take(n).map(e => {
            var t, n;
            return {
              text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
              channel: e
            }
          }).value()
        }
      },
      [I.SearchTokenTypes.ANSWER_IN]: {
        regex: /(?:\s*#?([^ ]+))/i,
        mutable: !0,
        follows: [I.SearchTokenTypes.FILTER_IN],
        componentType: "ANSWER",
        validator: x,
        queryKey: "channel_id"
      },
      [I.SearchTokenTypes.FILTER_PINNED]: {
        regex: v(N.default.Messages.SEARCH_FILTER_PINNED),
        componentType: "FILTER",
        key: O(N.default.Messages.SEARCH_FILTER_PINNED),
        plainText: N.default.Messages.SEARCH_FILTER_PINNED,
        getAutocompletions: () => [{
          text: "true"
        }, {
          text: "false"
        }]
      },
      [I.SearchTokenTypes.ANSWER_PINNED]: {
        regex: H,
        componentType: "ANSWER",
        follows: [I.SearchTokenTypes.FILTER_PINNED],
        queryKey: "pinned",
        validator: e => {
          let t = e.getMatch(1);
          return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
        }
      }
    }
  }())
}

function z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(Z).length;
  return o(Z).keys().filter(e => I.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != Z[e].key).map(e => ({
    token: e,
    text: Z[e].key
  })).filter(t => {
    let {
      text: n
    } = t;
    return l(e.toLowerCase(), n)
  }).take(t).value()
}
var q = Z