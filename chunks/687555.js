"use strict";
s.r(t), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  r = s.n(i),
  C = s("512722"),
  n = s.n(C),
  d = s("597312"),
  o = s("442837"),
  c = s("481060"),
  u = s("232567"),
  f = s("434650"),
  x = s("210887"),
  h = s("332475"),
  p = s("6048"),
  _ = s("281494"),
  j = s("276444"),
  L = s("529840"),
  R = s("689938"),
  m = s("415687"),
  E = s("724531"),
  g = s("99713"),
  S = s("334202"),
  v = s("7234");

function A() {
  let e = (0, o.useStateFromStores)([j.default], () => j.default.getReferralsRemaining());
  return n()(null != e, "Referrals remaining should not be null"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: m.title,
      children: [(0, a.jsx)(y, {
        className: m.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: R.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function N() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: R.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: R.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function M() {
  return (0, a.jsx)("div", {
    className: m.erroredContent,
    children: (0, a.jsx)(h.default, {
      src: S,
      width: 225,
      height: 160
    })
  })
}

function F(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)("div", {
    className: m.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: r()(m.erroredHeader, m.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: m.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.erroredContent,
      children: (0, a.jsx)(h.default, {
        src: g,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: r()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => t(),
        children: R.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function O(e) {
  let {
    onShare: t
  } = e, s = (0, o.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [i, C] = l.useState([]), [n, d] = l.useState(new Set);
  return l.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, a] of s)
        if (a === _.ReferralOfferStatus.PENDING) {
          let s = await (0, u.getUser)(t);
          e.push(s)
        } C(e)
    })()
  }, [s]), (0, a.jsxs)("div", {
    className: m.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: r()(m.remindHeader, m.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: m.title,
        children: [(0, a.jsx)(y, {
          className: m.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: R.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: R.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.list,
      children: i.map(e => (0, a.jsx)(L.default, {
        user: e,
        checked: n.has(e),
        onChange: (e, t) => {
          d(s => {
            let a = new Set(s);
            return t ? a.add(e) : a.delete(e), a
          })
        }
      }, e.id))
    }), (0, a.jsx)("div", {
      className: r()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => t([...n.values()]),
        children: R.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function y(e) {
  let {
    className: t
  } = e;
  return "light" === (0, o.useStateFromStores)([x.default], () => x.default.theme) ? (0, a.jsx)(h.default, {
    className: t,
    src: E,
    width: 55,
    height: 38
  }) : (0, a.jsx)(h.default, {
    className: t,
    src: v,
    width: 55,
    height: 38
  })
}
t.default = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, i = (0, o.useStateFromStores)([j.default], () => j.default.getReferralsRemaining()), C = (0, o.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [x, h] = l.useState(0), [E, g] = l.useState(""), [S, v] = l.useState([]), [y, w] = l.useState(!1), [I, B] = l.useState(!1), T = function(e, t) {
    let [s, a] = l.useState(e);
    return l.useEffect(() => {
      let s = setTimeout(() => {
        a(e)
      }, t);
      return () => {
        clearTimeout(s)
      }
    }, [e, t]), s
  }(E, 400), [U, G] = l.useState(new Map), [k, b] = l.useState(new Map);
  l.useEffect(() => {
    D(0)
  }, [T]), n()(null != i, "Referrals remaining should not be null");
  let D = async e => {
    try {
      if (null == e) return;
      w(!0);
      let t = [...k.values()];
      for (let [e, s] of C)
        if (s === _.ReferralOfferStatus.PENDING && !k.has(e)) {
          let s = await (0, u.getUser)(e);
          t.push(s)
        } let s = await (0, _.fetchReferralEligibleUsers)(e, T);
      v(a => {
        let l = s.users.filter(e => !U.has(e.id));
        return (t = t.filter(e => !U.has(e.id)), 0 === e) ? [...U.values(), ...t.values(), ...l] : [...a, ...l]
      }), b(e => {
        let s = new Map(e);
        for (let e of t) s.set(e.id, e);
        return s
      }), h(s.nextIndex)
    } catch (e) {
      B(!0)
    } finally {
      w(!1)
    }
  }, H = (0, f.useIsVisible)(e => {
    e && !y && D(x)
  });
  if (I) return (0, a.jsx)(F, {
    onClose: t
  });
  if (0 === i) return (0, a.jsx)(O, {
    onShare: s
  });
  let Z = T.length > 0 && 0 === S.length;
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: r()(m.header, m.headerSeparator),
      children: [Z ? (0, a.jsx)(N, {}) : (0, a.jsx)(A, {}), (0, a.jsx)(p.default, {
        className: m.searchbar,
        query: E,
        onChange: g,
        onClear: () => g("")
      })]
    }), Z ? (0, a.jsx)(M, {}) : (0, a.jsxs)(d.ScrollerAuto, {
      className: m.list,
      children: [S.map(e => (0, a.jsx)(L.default, {
        disabled: [...U.values()].filter(e => !k.has(e.id)).length >= i && !U.has(e.id) && !k.has(e.id),
        checked: U.has(e.id),
        user: e,
        onChange: (e, t) => {
          G(s => {
            let a = new Map(s);
            return t ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), y && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: H
      })]
    }), (0, a.jsx)("div", {
      className: r()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        disabled: 0 === U.size && !Z,
        onClick: () => {
          if (Z) {
            t();
            return
          }
          s([...U.values()])
        },
        children: Z ? R.default.Messages.REFERRAL_PROGRAM_CLOSE : R.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}