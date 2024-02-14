"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("872717"),
  a = n("913144"),
  s = n("49111"),
  i = {
    fetchRegions(e) {
      l.default.get({
        url: s.Endpoints.REGIONS(e),
        retries: 1,
        oldFormErrors: !0
      }).then(t => a.default.dispatch({
        type: "LOAD_REGIONS",
        regions: t.body,
        guildId: e
      }), () => a.default.dispatch({
        type: "LOAD_REGIONS",
        regions: [],
        guildId: e
      }))
    },
    changeCallRegion(e, t) {
      l.default.patch({
        url: s.Endpoints.CALL(e),
        body: {
          region: t
        },
        oldFormErrors: !0
      })
    }
  }