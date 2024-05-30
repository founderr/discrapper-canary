"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
  }
}), i("47120"), i("724458"), i("653041");
var n = i("735250"),
  a = i("470079"),
  l = i("912370"),
  s = i("477690"),
  r = i("153124"),
  o = i("626135"),
  c = i("463571"),
  d = i("744142"),
  u = i("132871"),
  h = i("147890"),
  p = i("216547"),
  f = i("57716"),
  m = i("981631"),
  g = i("806318");

function C(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: C,
      application_directory_collection_items: x
    }
  } = e, [_, I] = a.useState(300), [v, A] = a.useState(4), N = parseFloat(s.default.COLLECTION_LIST_CARD_GAP), E = (0, u.useApplicationDirectoryHistory)(e => e.guildId), T = (0, f.default)({
    collection: t
  });
  a.useEffect(() => {
    function e() {
      var e;
      let t = null === (e = T.current) || void 0 === e ? void 0 : e.offsetWidth,
        i = 1;
      return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1e3 && (i = 4), A(i), (t - (i - 1) * N) / i)
    }
    let t = T.current;
    if (null == t) return;
    let i = new ResizeObserver(() => {
      I(e())
    });
    return I(e()), i.observe(t), () => {
      i.disconnect()
    }
  }, [N, T]);
  let R = (0, r.useUID)();
  return (0, n.jsx)("div", {
    ref: T,
    children: (0, n.jsx)(p.default, {
      header: C,
      headerId: R,
      tileWidth: _,
      tileMargin: N,
      onScroll: e => {
        let {
          tileIndex: t
        } = e, n = x.slice(t, t + v).reduce((e, t) => {
          let {
            type: i,
            application: n
          } = t;
          return i === l.ApplicationDirectoryCollectionItemType.APPLICATION && null != n && e.push(n.id), e
        }, []);
        o.default.track(m.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: i,
          offset: t,
          results: n,
          guild_id: E
        })
      },
      children: (0, n.jsx)("ul", {
        "aria-labelledby": R,
        className: g.itemsContainer,
        children: x.map(e => {
          let {
            id: t,
            type: a,
            application: s
          } = e;
          if (a === l.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) return (0, n.jsx)("li", {
            style: {
              width: _
            },
            className: g.itemContainer,
            children: (0, n.jsx)(c.default, {
              className: g.seoAnchor,
              href: m.Routes.APPLICATION_DIRECTORY_PROFILE(s.id),
              children: (0, n.jsx)(d.default, {
                application: s,
                onClick: e => {
                  let {
                    mutualGuilds: t
                  } = e;
                  o.default.track(m.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: i,
                    application_id: s.id,
                    guild_id: E,
                    shown_mutual_guilds_count: t.length
                  }), (0, h.goToApplication)({
                    applicationId: s.id
                  })
                },
                animatesOnHover: !0
              })
            })
          }, t)
        })
      })
    })
  })
}