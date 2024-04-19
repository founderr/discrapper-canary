"use strict";
s.r(t), s("47120"), s("653041");
var a = s("735250"),
  i = s("470079"),
  l = s("120356"),
  r = s.n(l),
  C = s("512722"),
  n = s.n(C),
  d = s("597312"),
  o = s("442837"),
  c = s("481060"),
  u = s("232567"),
  f = s("434650"),
  x = s("332475"),
  h = s("6048"),
  p = s("281494"),
  _ = s("276444"),
  j = s("529840"),
  L = s("689938"),
  R = s("415687"),
  m = s("99713"),
  E = s("334202"),
  g = s("7234");

function S() {
  let e = (0, o.useStateFromStores)([_.default], () => _.default.getReferralsRemaining());
  return n()(null != e, "Referrals remaining should not be null"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: R.title,
      children: [(0, a.jsx)(x.default, {
        className: R.titleImage,
        src: g,
        width: 55,
        height: 38
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: R.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function v() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: R.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: R.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: L.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function A() {
  return (0, a.jsx)("div", {
    className: R.erroredContent,
    children: (0, a.jsx)(x.default, {
      src: E,
      width: 225,
      height: 160
    })
  })
}

function M(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)("div", {
    className: R.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: r()(R.erroredHeader, R.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: R.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: R.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: R.erroredContent,
      children: (0, a.jsx)(x.default, {
        src: m,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: r()(R.footer, R.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: R.submit,
        onClick: () => t(),
        children: L.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function N(e) {
  let {
    onShare: t
  } = e, s = (0, o.useStateFromStores)([_.default], () => _.default.getRecipientStatus()), [l, C] = i.useState([]), [n, d] = i.useState(new Set);
  return i.useEffect(() => {
    (async () => {
      let e = [];
      for (let [t, a] of s)
        if (a === p.ReferralOfferStatus.PENDING) {
          let s = await (0, u.getUser)(t);
          e.push(s)
        } C(e)
    })()
  }, [s]), (0, a.jsxs)("div", {
    className: R.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: r()(R.remindHeader, R.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: R.title,
        children: [(0, a.jsx)(x.default, {
          className: R.titleImage,
          src: g,
          width: 55,
          height: 38
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: R.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: R.list,
      children: l.map(e => (0, a.jsx)(j.default, {
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
      className: r()(R.footer, R.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: R.submit,
        onClick: () => t([...n.values()]),
        children: L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}
t.default = function(e) {
  let {
    onClose: t,
    onShare: s
  } = e, l = (0, o.useStateFromStores)([_.default], () => _.default.getReferralsRemaining()), C = (0, o.useStateFromStores)([_.default], () => _.default.getRecipientStatus()), [x, m] = i.useState(0), [E, g] = i.useState(""), [F, O] = i.useState([]), [y, w] = i.useState(!1), [I, B] = i.useState(!1), T = function(e, t) {
    let [s, a] = i.useState(e);
    return i.useEffect(() => {
      let s = setTimeout(() => {
        a(e)
      }, t);
      return () => {
        clearTimeout(s)
      }
    }, [e, t]), s
  }(E, 400), [U, G] = i.useState(new Map), [k, b] = i.useState(new Map);
  i.useEffect(() => {
    D(0)
  }, [T]), n()(null != l, "Referrals remaining should not be null");
  let D = async e => {
    try {
      if (null == e) return;
      w(!0);
      let t = [...k.values()];
      for (let [e, s] of C)
        if (s === p.ReferralOfferStatus.PENDING && !k.has(e)) {
          let s = await (0, u.getUser)(e);
          t.push(s)
        } let s = await (0, p.fetchReferralEligibleUsers)(e, T);
      O(a => {
        let i = s.users.filter(e => !U.has(e.id));
        return (t = t.filter(e => !U.has(e.id)), 0 === e) ? [...U.values(), ...t.values(), ...i] : [...a, ...i]
      }), b(e => {
        let s = new Map(e);
        for (let e of t) s.set(e.id, e);
        return s
      }), m(s.nextIndex)
    } catch (e) {
      B(!0)
    } finally {
      w(!1)
    }
  }, H = (0, f.useIsVisible)(e => {
    e && !y && D(x)
  });
  if (I) return (0, a.jsx)(M, {
    onClose: t
  });
  if (0 === l) return (0, a.jsx)(N, {
    onShare: s
  });
  let Z = T.length > 0 && 0 === F.length;
  return (0, a.jsxs)("div", {
    className: R.container,
    children: [(0, a.jsxs)("div", {
      className: r()(R.header, R.headerSeparator),
      children: [Z ? (0, a.jsx)(v, {}) : (0, a.jsx)(S, {}), (0, a.jsx)(h.default, {
        className: R.searchbar,
        query: E,
        onChange: g,
        onClear: () => g("")
      })]
    }), Z ? (0, a.jsx)(A, {}) : (0, a.jsxs)(d.ScrollerAuto, {
      className: R.list,
      children: [F.map(e => (0, a.jsx)(j.default, {
        disabled: [...U.values()].filter(e => !k.has(e.id)).length >= l && !U.has(e.id) && !k.has(e.id),
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
      className: r()(R.footer, R.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: R.submit,
        disabled: 0 === U.size && !Z,
        onClick: () => {
          if (Z) {
            t();
            return
          }
          s([...U.values()])
        },
        children: Z ? L.default.Messages.REFERRAL_PROGRAM_CLOSE : L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}