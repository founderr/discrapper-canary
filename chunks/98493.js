n.d(t, {
  m: function() {
    return d
  },
  p: function() {
    return c
  }
}), n(47120);
var l = n(470079),
  i = n(913527),
  s = n.n(i),
  r = n(881052),
  a = n(709054),
  o = n(693546),
  u = n(246364);
let c = u.tB * u.hW;

function d(e) {
  let {
    guildId: t,
    guildJoinRequests: n
  } = e, i = l.useRef(!1), [d, h] = l.useState(null), p = l.useRef(null), g = l.useRef(!1);
  return {
    fetchNextPage: l.useCallback(async (e, l) => {
      if (i.current) return;
      let m = "".concat(e, "-").concat(l),
        C = !1;
      if (m !== p.current && (p.current = m, g.current = !1, C = !0), g.current) return;
      null != d && h(null);
      let E = function(e, t, n, l) {
        let i = n === u.wB.SUBMITTED;
        if (t === u.Nw.TIMESTAMP_DESC) {
          if (l) return {
            before: a.default.fromTimestamp(new Date().getTime())
          };
          {
            let t = e[e.length - 1];
            return {
              before: i ? t.joinRequestId : t.actionedAt
            }
          }
        }
        if (l) return {
          after: a.default.fromTimestamp(s()().subtract(180, "days").valueOf())
        };
        {
          let t = e[e.length - 1];
          return {
            after: i ? t.joinRequestId : t.actionedAt
          }
        }
      }(n, e, l, C);
      try {
        i.current = !0;
        let e = await o.Z.fetchGuildJoinRequests({
          guildId: t,
          status: l,
          limit: c,
          force: !0,
          ...E
        });
        if (null != e) {
          let {
            guild_join_requests: t
          } = e.body;
          t.length < c && (g.current = !0)
        }
      } catch (e) {
        h(new r.Hx(e).getAnyErrorMessage())
      } finally {
        i.current = !1
      }
    }, [d, t, n]),
    error: d
  }
}