"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i, a, r = n("37983"),
  s = n("884691"),
  l = n("77078"),
  o = n("651057"),
  c = n("299285"),
  u = n("20606"),
  d = n("907038"),
  f = n("539938"),
  p = n("653047"),
  m = n("131233"),
  h = n("782340"),
  g = n("454436");

function v(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: a,
    subscriptionGroupListing: v
  } = e, [x, b] = s.useState(() => {
    let e = c.default.getApplication(i);
    if (null != e) return {
      status: 2,
      app: e
    };
    let t = c.default.isFetchingApplication(i);
    return t ? {
      status: 1
    } : {
      status: 0
    }
  }), E = 2 === x.status ? x.app : null;
  if (s.useEffect(() => {
      0 === x.status && (b({
        status: 1
      }), o.default.fetchApplication(i).then(e => {
        b({
          status: 2,
          app: p.default.createFromServer(e)
        })
      }).catch(e => {
        b({
          status: 3,
          error: e.message
        })
      }))
    }, [i, x.status]), null == E) return null;
  let I = h.default.Messages.STOREFRONT_TITLE.format({
    appName: E.name
  });
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-label": I,
    size: l.ModalSize.LARGE,
    children: [(0, r.jsx)(l.ModalHeader, {
      children: (0, r.jsxs)(f.default, {
        children: [(0, r.jsx)(f.default.Icon, {
          icon: d.default,
          "aria-hidden": !0,
          color: u.default.INTERACTIVE_ACTIVE
        }), (0, r.jsx)(f.default.Title, {
          children: I
        }), (0, r.jsx)(l.ModalCloseButton, {
          onClick: t,
          className: g.modalCloseButton
        })]
      })
    }), (0, r.jsx)(l.ModalContent, {
      children: (0, r.jsx)(m.default, {
        app: E,
        subscriptionGroupListing: v,
        guildId: a
      })
    })]
  })
}(a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR"